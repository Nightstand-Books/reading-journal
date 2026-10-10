# Nightstand changelog

Every update to Nightstand is listed here, newest first. The version number shows at the bottom of the account menu in the app, with a link back to this page.

## How version numbers work

Versions look like **1.4.2** (major.minor.patch):

- **Patch** (1.4.**2**): bug fixes and small tweaks, like a color adjustment or a label change.
- **Minor** (1.**4**.0): new features or noticeable changes, like a new tab or a new setting.
- **Major** (**1**.0.0): big changes to how the app works or how your data is stored.

When a number goes up, the numbers after it reset to 0 (1.4.2 → 1.5.0).

Builds before 1.20.1 used date-based names. Each entry lists its old name in brackets so it can be matched to the GitHub history.

---

## 1.36.0 (October 9, 2026)
- Challenges can be collapsed. Tap the arrow next to a challenge's name (or the name itself) to fold it down to just its title and progress bar, and again to open it. Folded challenges stay folded on every device.
- Rearrange challenges with the ▲ ▼ buttons next to Edit. Your order is saved, and new challenges appear at the top.

## 1.35.0 (October 9, 2026)
- Each challenge spot has a short **title** (like "Read any book") plus optional **more details**: the rules, ideas or tips for that spot. Add them in the challenge's Edit screen with **+ Add more details** under each title.
- Spots with details show a small ⓘ next to their title. Tapping the spot or the ⓘ opens it with the full details shown above the book picker.

## 1.34.0 (October 9, 2026)
- Each challenge has stat tiles under its progress bar: **Pages read** and **Pages to go**, plus **Hours listened** and **Hours to go** when it has audiobooks.
- Challenges with an end date also show **Days left** and how many spots are still to go.
- Totals count each book once, even if it fills more than one spot. A note shows when a book is missing a page count or audiobook length, since those can't be counted toward what's left.

## 1.33.0 (October 9, 2026)
- The Library has a **Moods** button that lists every mood on your books, with how many books have each.
- Check as many moods as you like. Only books tagged with **all** of the checked moods are shown, so "dark" plus "emotional" finds books that are both.
- Chosen moods show as tags above the books. Tap a tag's × to drop it, or **Clear all**.
- Tapping a mood on the dashboard starts the Library with that mood checked, and you can add more from there.
- Pop-up menus in the Library always stay fully on screen on small phones.

## 1.32.0 (October 9, 2026)
- Tapping a mood in **How your reading felt** on the dashboard opens the Library showing the finished books with that mood from the year you're viewing (or all time).
- A **Mood** tag above the books shows the filter. Tap its × to clear it, or tap **All** to see every book with that mood, read or not.

## 1.31.1 (October 9, 2026)
- In the All time view, "Your biggest year was…" starts on its own line.

## 1.31.0 (October 9, 2026)
- The year menu at the top has an **All time** option.
- All time shows your total books finished, how many years they span and your biggest year, in place of the yearly goal.
- Stat tiles, the bookcase, What you read, moods and pace all cover every book you've finished.
- The chart becomes **Books finished by year**.
- The all-time bookcase can be arranged on its own with Edit shelves, without changing your yearly shelves.

## 1.30.0 (October 8, 2026)
- Setting a book's source to **Bought** automatically checks **Owned**.
- Books already marked Bought were checked as Owned, except any where you had unchecked Owned yourself.
- If you uncheck Owned later (say you gave the book away), editing the book won't check it again unless you change the source to Bought again.

## 1.29.0 (October 8, 2026)
- The Source menu is in A–Z order, and sources you add slot into place alphabetically.
- When a book's source is **Bought**, a **Store** menu appears: Amazon, Barnes & Noble, Books-A-Million, Bookshop.org, Costco, Target, Walmart, Indie bookstore, Used bookstore, or **Somewhere else…** to type your own. Stores you type in are remembered.
- A book's details show the store next to the source, like "Bought · Amazon."
- The account menu editor is now **Genres, statuses, sources & stores**, with a Stores section for adding or removing stores.

## 1.28.3 (October 8, 2026)
- The owned setting is a checkbox again, now labeled simply **Owned**, with "On your shelf at home" or "Not in your collection" underneath.
- TBR shelf buttons on a book's page show a checkmark when the book is on that shelf and a + when it isn't, so they no longer look like the Owned checkbox.

## 1.28.2 (October 8, 2026)
- The **I own this book** switch sits right next to its label instead of far off to the right.

## 1.28.1 (October 8, 2026)
- Fixed: saving changes to a book (or anything else done while a book is open) no longer sends you back to the top of the Library. Closing the book returns you to exactly where you were.
- The page behind a book's popup stays still while the popup is open.
- **I own this book** is now an on/off switch with a bookshelf icon, so it looks different from the TBR shelf checkboxes.

## 1.28.0 (October 8, 2026)
- The Source menu in Edit book has **Something else…**, so you can type your own source (like Libby or a bookstore). It's remembered and added to the menu for next time.
- The account menu editor is now **Genres, statuses & sources**, where you can add or remove sources.
- "Other" was removed from the starting source list, since you can now name your own. Books already marked "Other" keep it.

## 1.27.0 (October 8, 2026)
- Each book's page has an **I own this book** checkbox, right on the page without opening Edit book.
- The Library can filter by Owned or Not owned, together with the other filters.

## 1.26.0 (October 8, 2026)
- The Library can filter by format: Print, Ebook or Audiobook. Books without a format count as Print. It works together with the other filters.

## 1.25.2 (October 8, 2026)
- Finished audiobooks save at 1× listening speed unless you set a different speed, and they count toward your average listening speed. This includes audiobooks finished before this update.
- Audiobooks you're still listening to only count once you set a speed.

## 1.25.1 (October 8, 2026)
- The Listening speed box starts at 1× and has − and + buttons that change it by 0.25. You can still type an exact speed like 1.1.
- A speed left at the default 1× isn't saved, so it doesn't count toward your average listening speed. To count 1×, step away and back or type it in.

## 1.25.0 (October 8, 2026)
- New **Avg days per book** stat tile: the average number of days from start to finish for that year's finished books, counting the start and finish days. Books with an estimated or missing start or finish date are left out. It can be hidden in Customize dashboard.

## 1.24.0 (October 8, 2026)
- Audiobooks have a **Listening speed** field in Edit book (for example 1.5 for one and a half speed). It shows in the book's details.
- New **Avg listening speed** stat tile on the dashboard, next to Hours listened. It averages the audiobooks you finished that year, plus the ones you're listening to now in the current year. It can be hidden in Customize dashboard.

## 1.23.0 (October 8, 2026)
- Library cover sizes now go by **books per row**. Each row count has one fixed size, and the covers always fill the row evenly.
- The cover size control moved off the top of the book grid into a small grid button next to Sort. Tap it to choose bigger or smaller covers; it shows how many books fit per row.
- Pinching (two fingers on a phone, or a trackpad on a laptop) now steps one row size at a time.
- Phones can go from one big cover per row up to four or more.

## 1.22.2 (October 8, 2026)
- Pop-up messages fade in and out smoothly, with centered text.
- The "press and hold to resize" reminder is in italics and fits on one line.
- Fixed: the cover size slider's handle sometimes didn't move along with a press-and-hold resize.

## 1.22.1 (October 8, 2026)
- On phones and tablets, the cover size slider only responds after you press and hold it, so scrolling past it no longer changes the size by accident. A quick tap shows a reminder of how to use it.

## 1.22.0 (October 8, 2026)
- The Library has a cover size slider above the books. Smaller covers fit more books on screen, and larger ones show more detail.
- On a phone, pinch the covers with two fingers to resize them. On a laptop, pinch the trackpad.
- At small sizes, the author and status labels hide so the covers stay tidy.
- Your size is remembered separately on each device.

## 1.21.0 (October 8, 2026)
- The spine editor shows the book's cover. Tap **Pick spine color** or **Pick text color**, then tap anywhere on the cover to use that color.
- With the cover on screen, the eyedropper in the color boxes can sample it too.

## 1.20.1 (October 8, 2026)
- Switched to 1.0.0-style version numbers and renumbered every past release.
- Added this changelog, with a **what's new** link next to the version number in the account menu.

## 1.20.0 (October 8, 2026) [2026.10.08-za]
- Start and finish dates each have an **Exact | Estimate** toggle. Estimate lets you enter a month and year, or just a year.
- Estimated dates show as "Jul 2025 (estimate)" or "2025 (estimate)" and still count toward that year's shelf, goal and filters.
- The Books finished by month chart notes any books that only have a year.

## 1.19.2 (October 8, 2026) [2026.10.08-z]
- Rosewood and Clay themes recolored. Rosewood is now blush and deep rose, and Clay is peach and terracotta. Their bookcases, progress bars, goal ring and stars match the theme instead of staying brown.

## 1.19.1 (October 8, 2026) [2026.10.08-y]
- Books on the nightstand get a rounded, theme-colored highlight when you hover over them, so it's clear they can be dragged.

## 1.19.0 (October 8, 2026) [2026.10.08-x]
- Drag books on the nightstand into any order, right on the dashboard. On a phone, press and hold first. The order syncs across devices.

## 1.18.0 (October 8, 2026) [2026.10.08-w]
- Import moved from the top of the page into the account menu.
- "Current page" in Edit book is now **Pages read**, and it fills in with the full page count when a book is marked finished.
- Removed the extra line under the Hours listened tile.

## 1.17.0 (October 8, 2026) [2026.10.08-v]
- When **Finished** is selected in the Library, a year dropdown appears: All years, This year, each earlier year, or No finish date.

## 1.16.1 (October 8, 2026) [2026.10.08-u]
- The genre menu is in A–Z order, and genres you add slot into place alphabetically.

## 1.16.0 (October 8, 2026) [2026.10.08-t]
- A book's page has a **Done** button in the bottom right corner. Delete became a small link that asks you to confirm.
- Finished audiobooks fill in their hours listened automatically, and every audiobook's details show an "Hours listened" line.

## 1.15.1 (October 8, 2026) [2026.10.08-r]
- Fixed: selecting text in Edit book and letting go outside the box no longer closes it and loses your changes.
- Clicking outside the box or pressing Escape with unsaved changes now shows a reminder instead of closing.
- Fixed: the height slider in the spine editor no longer stretches and shifts the controls around it.

## 1.15.0 (October 8, 2026) [2026.10.08-p]
- New **TBR Shelves** tab for named lists like "Summer TBR." A book can be on any number of shelves, and the Library can filter by shelf.
- The genre menu is a proper dropdown and includes Romantasy, Middle grade, Young adult and Children's. Pick **Something else…** to add your own.
- New **Genres & statuses** editor in the account menu: add, rename and remove genres, rename the built-in statuses, and add your own statuses.
- **Find on Hardcover** lists every audiobook edition with its run time (such as regular vs. dramatized), so you can pick the one you're listening to.
- The Hours listened tile now sits next to Pages read.

## 1.14.2 (October 8, 2026) [2026.10.08-m]
- Audiobook run times are pulled more reliably from Hardcover, and audiobooks missing a length are looked up again.
- Added a button on an audiobook's page to get its length from Hardcover.

## 1.14.1 (October 8, 2026) [2026.10.08-l]
- Fixed: Find covers & details always said "Checking Open Library," even when it was searching Hardcover. It now names the right sources and shows where each match came from.

## 1.14.0 (October 8, 2026) [2026.10.08-k]
- Audiobooks you're listening to track progress in hours and minutes instead of pages.
- Audiobook run times come from Hardcover and show on the book's page. You can also type them in.
- New **Hours listened** stat tile on the dashboard.

## 1.13.0 (October 8, 2026) [2026.10.08-j]
- Adding a book to Want to read no longer puts it in Up next automatically. Each book's page has an **Up next** checkbox instead.

## 1.12.0 (October 8, 2026) [2026.10.08-i]
- **Customize dashboard** lets you hide any section or stat tile, and the rest of the dashboard closes up neatly.
- Up next can be reordered.

## 1.11.0 (October 8, 2026) [2026.10.08-h]
- Appearance settings: six color themes, each with light and dark versions, a Match device option, and a choice of fonts.

## 1.10.0 (October 8, 2026) [2026.10.08-g]
- **Edit shelves**: add more shelves, leave empty spaces, and decorate with plants, decor and bookends.

## 1.9.0 (October 8, 2026) [2026.10.08-f]
- Spine height and width can be set with a slider or by typing an exact pixel size.

## 1.8.1 (October 8, 2026) [2026.10.08-e]
- Long books are no longer overly wide on the shelf. Spine width now grows more gently with page count.

## 1.8.0 (October 8, 2026) [2026.10.08-d]
- New spine editor: color, text color, font, height and width.
- Spine width follows the book's page count automatically.
- Books on the shelf sit flush against each other, with a shadow instead of gaps.

## 1.7.0 (October 8, 2026) [2026.10.08-c]
- Change a spine's color by hand.
- Long titles wrap so the whole title shows on the spine.
- Books on the shelf stand upright and can be rearranged.

## 1.6.0 (October 8, 2026) [2026.10.08-b]
- **Switch cover**: pick a different edition's cover, use a plain color, or upload a photo of your own copy.

## 1.5.0 (October 8, 2026) [2026.10.08-a]
- Hardcover is now the first place Nightstand looks up books, through a private helper that keeps your Hardcover key secret. It adds community ratings, moods, series and cover colors.

## 1.4.0 (October 7, 2026) [2026.10.07-f]
- Books on the nightstand show their format (print, ebook or audiobook) with an icon.

## 1.3.0 (October 7, 2026) [2026.10.07-e]
- Spines on the shelf take their color from each book's cover.

## 1.2.0 (October 7, 2026) [2026.10.07-d]
- Book search checks Google Books first, then Open Library.
- **Find covers & details** in the account menu fills in covers and details for imported books in one go.

## 1.1.0 (October 7, 2026) [2026.10.07-c]
- Added support for your own Google Books key, which stops "too many requests" errors.
- Clearer messages when a book source is slow or doesn't answer.
- The app version now shows in the account menu.

## 1.0.1 (October 7, 2026)
- Fixed: when Open Library doesn't answer, book search falls back to Google Books.

## 1.0.0 (October 7, 2026)
First standalone release of Nightstand, installable on phones and computers.
- Library of books with status, format, rating, pages, dates, cost, review, notes and favorite quotes.
- Dashboard with a reading goal, stat tiles, the year's shelf, the nightstand, Up next, and charts of books by month and by genre.
- Reading challenges with a prompt for each spot.
- Import from Goodreads and StoryGraph, plus full backups.
- Book search with Open Library.
- Syncs across every device you sign in on, and works offline.
