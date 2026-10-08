// Nightstand offline support: keeps the app's own files and book covers on the device.
const APP = "nightstand-app-v3";
const COVERS = "nightstand-covers";
const SHELL = ["./", "./index.html", "./config.js", "./firebase.bundle.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(APP).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== APP && k !== COVERS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    // App files: try the network first so updates arrive, fall back to the saved copy offline.
    // cache: "no-cache" makes the browser check GitHub for a newer file every time
    e.respondWith(fetch(req.url, { cache: "no-cache", credentials: "same-origin" }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(APP).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html"))));
    return;
  }
  const h = url.hostname;
  if (h === "covers.openlibrary.org" || h.endsWith("archive.org") || h === "books.google.com" || h.endsWith("googleusercontent.com") || h === "fonts.googleapis.com" || h === "fonts.gstatic.com") {
    // Covers and fonts: use the saved copy if there is one, otherwise fetch and save it.
    e.respondWith(caches.open(COVERS).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      try { const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }
      catch { return Response.error(); }
    }));
  }
});
