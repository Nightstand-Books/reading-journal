// Nightstand book lookup — a tiny Cloudflare Worker that keeps your Hardcover key secret.
// Your app asks this worker; the worker asks Hardcover with the key and sends back only book details.
//
// Settings this worker needs (Cloudflare → your worker → Settings → Variables and Secrets):
//   HARDCOVER_TOKEN  (type: Secret)     your Hardcover API key
//   ALLOWED_ORIGINS  (type: Text)       https://YOUR-USERNAME.github.io

const HC = "https://api.hardcover.app/v1/graphql";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = String(env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim().replace(/\/$/, "")).filter(Boolean);
    const originOk = !allowed.length || allowed.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": originOk && origin ? origin : (allowed[0] || "*"),
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };
    const json = (body, status = 200, extra = {}) =>
      new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", ...cors, ...extra } });

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "GET") return json({ error: "Use GET" }, 405);
    if (origin && !originOk) return json({ error: "This address isn't allowed to use this worker." }, 403);
    if (!env.HARDCOVER_TOKEN) return json({ error: "The HARDCOVER_TOKEN secret isn't set on this worker." }, 500);

    const url = new URL(request.url);
    const q = (url.searchParams.get("q") || "").trim().slice(0, 200);
    const n = Math.min(10, Math.max(1, parseInt(url.searchParams.get("n") || "8", 10) || 8));
    if (q.length < 2) return json({ ok: true, books: [] });

    // Same search within a day? Answer from Cloudflare's cache instead of asking Hardcover again.
    const cache = caches.default;
    const cacheKey = new Request(`https://nightstand-cache.invalid/v1/${n}/${encodeURIComponent(q.toLowerCase())}`);
    const cached = await cache.match(cacheKey);
    if (cached) return json(await cached.json(), 200, { "X-Cache": "hit" });

    const token = String(env.HARDCOVER_TOKEN).trim();
    const gql = async (query, variables) => {
      const r = await fetch(HC, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": /^bearer /i.test(token) ? token : `Bearer ${token}`, "User-Agent": "Nightstand personal reading journal" },
        body: JSON.stringify({ query, variables })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.errors) {
        const e = new Error((j.errors && j.errors[0] && j.errors[0].message) || `Hardcover status ${r.status}`);
        e.status = r.status === 401 || r.status === 403 ? 502 : r.status === 429 ? 429 : 502;
        e.auth = r.status === 401 || r.status === 403 || /auth|jwt|token/i.test(e.message);
        throw e;
      }
      return j.data;
    };

    try {
      const data = await gql(
        `query Search($q: String!, $n: Int!) { search(query: $q, query_type: "Book", per_page: $n, page: 1) { ids results } }`,
        { q, n }
      );
      const res = data && data.search && data.search.results;
      const hits = (res && res.hits) || [];
      const ids = ((data && data.search && data.search.ids) || []).map(Number);
      const hex = c => typeof c === "string" ? c : (c && (c.hex || c.color)) || "";
      let books = hits.map((h, i) => {
        const d = h.document || {};
        const series = Array.isArray(d.series_names) && d.series_names[0] ? d.series_names[0] : (d.featured_series && d.featured_series.name) || "";
        const pos = d.featured_series_position || (d.featured_series && d.featured_series.position) || "";
        return {
          id: Number(d.id || ids[i] || 0),
          title: d.title || "",
          subtitle: d.subtitle || "",
          authors: d.author_names || [],
          year: d.release_year || null,
          pages: d.pages || null,
          rating: d.rating ? Math.round(d.rating * 100) / 100 : null,
          ratings_count: d.ratings_count || 0,
          description: d.description || "",
          genres: d.genres || [],
          moods: d.moods || [],
          series: series ? (pos ? `${series}, #${pos}` : series) : "",
          isbns: d.isbns || [],
          cover: (d.image && d.image.url) || "",
          cover_color: /^#?[0-9a-f]{6}$/i.test(hex(d.cover_color)) ? ("#" + hex(d.cover_color).replace("#", "")) : "",
          slug: d.slug || ""
        };
      });

      // Fill in any missing cover images with one more small request.
      const missing = books.filter(b => !b.cover && b.id).map(b => b.id);
      if (missing.length) {
        try {
          const more = await gql(`query Covers($ids: [Int!]) { books(where: {id: {_in: $ids}}) { id image { url } } }`, { ids: missing });
          const byId = new Map(((more && more.books) || []).map(b => [Number(b.id), b.image && b.image.url]));
          books = books.map(b => b.cover ? b : { ...b, cover: byId.get(b.id) || "" });
        } catch (_) { /* covers are a bonus */ }
      }

      const body = { ok: true, books };
      await cache.put(cacheKey, new Response(JSON.stringify(body), { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }));
      return json(body);
    } catch (e) {
      return json({ ok: false, error: e.auth ? "Hardcover didn't accept the key. Check the HARDCOVER_TOKEN secret, or make a new key on Hardcover." : e.message }, e.status || 502);
    }
  }
};
