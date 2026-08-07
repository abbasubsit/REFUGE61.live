# REFUGE61 — Asset Library

**Status: FROZEN.** This is the categorized inventory of every source image, video and logo file supplied, copied into `public/` and organized by intended use. All homepage planning (`homepage-plan.md`) and design decisions (`design-system.md`) reference the paths below. If new photography arrives, add it here first, then update downstream docs — don't let paths drift out of sync with this file.

Full machine-readable manifest (category, new path, original source file, notes) lives alongside this doc at [`docs/_asset-manifest.csv`](./_asset-manifest.csv).

## 1. How the source material was organized

Four Desktop folders were consolidated into `refuge61/public/`:

| Source folder | Content | Routed to |
|---|---|---|
| `LOGOS REFUGE61/` | 1 PNG + 6 PDF logo lockups | `public/logos/` |
| `PHOTOS DETAIL CHALET/` (7 subfolders: Ute bilder, Badehuset, Oppholdsrom bilder, Soverom bilder, Vaktmester hytta, Déco dans le chalet, Famille dans le chalet) | ~137 professional + casual photos | `public/images/{hero,architecture,interiors,story,lifestyle}/` |
| `RUSH MISUSAETER/` | 11 candid photos + 1 video | `public/images/{lifestyle,story}/` + `public/videos/` |
| `VIDEO+Photos Iphone/` | 26 candid photos + 2 videos | `public/images/{lifestyle,story}/` + `public/videos/` |

Images were re-sorted **by content, not by source folder** — e.g. the "Vaktmester hytta" (caretaker's cottage) folder is a kitchen, so it's filed under `interiors/`, not its own category; two aerial/landscape shots buried in the `Famille`/`RUSH` folders were pulled out into `story/` because they read as journey/mood shots, not snapshots. A duplicate file (`Flyfoto vinter.JPG`, present identically in both `Ute bilder` and `Déco dans le chalet`) was copied once, into `hero/`.

**180 files copied total**: 7 hero, 24 architecture, 57 interiors, 26 story, 56 lifestyle, 3 video, 7 logo (7 additional curated duplicates in `gallery/` as of 2026-08-07 — was 8, see §8).

## 2. Category definitions used

| Category | Definition | Folder |
|---|---|---|
| **Hero** | Wide, atmospheric, no-caption-needed establishing shots. Must work full-bleed, off-white text over the top, at any crop ratio down to ultrawide. | `public/images/hero/` |
| **Architecture** | The buildings as objects — exteriors, facades, rooflines. Sells craftsmanship and setting. | `public/images/architecture/` |
| **Interiors** | Inside the buildings — living rooms, bedrooms, kitchens. Sells comfort and livability. | `public/images/interiors/` |
| **Story** | Detail/mood shots that carry a narrative beat rather than document a room: a ski track at sunset, roses on ice, a pétanque set. Used to punctuate copy, not to catalog the property. | `public/images/story/` |
| **Lifestyle** | People — family, friends, candid ski touring. Sells the *experience* of being there. | `public/images/lifestyle/` |
| **Gallery** | Not a source category — a curated cross-category selection for the homepage gallery-preview grid (see §6). | `public/images/gallery/` |

## 3. Hero images — full list (7)

| File | Description | Recommended use |
|---|---|---|
| `hero/hero-aerial-sunrise.jpg` | Aerial, dawn/dusk light, whole property visible in snow, warm horizon glow | **Primary homepage hero.** Best single image in the library — scale, light, and the estate all in one frame. |
| `hero/hero-aerial-winter-wide.jpg` | Aerial fisheye, full estate + surrounding fjell, winter dusk, wide horizon | Alternate hero / homepage OG-image / about-page opener |
| `hero/hero-bw-frost-facade.jpg` | Black & white, frost-covered carved timber facade, graphic and textural | Hero for an editorial-toned page (About, Journal), or as the anchor image if the "Editorial Scandinavian" concept (see Phase 4) is chosen |
| `hero/hero-bw-facade-east.jpg` | Black & white, east facade, alternate angle | Secondary editorial image, pairs with the above |
| `hero/hero-aerial-alt-01.jpg` | Aerial, daylight | Backup hero / rotation for seasonal campaigns |
| `hero/hero-aerial-alt-02.jpg` | Aerial, daylight | Backup hero / rotation |
| `hero/hero-aerial-alt-03.jpg` | Aerial, daylight | Backup hero / rotation |

## 4. Architecture images — full list (24)

**Standouts:** `architecture-bathhouse-exterior-01.jpg` (finished stone-and-glass bathhouse against snow — the single best "design" image after the hero set) and `architecture-lodge-exterior-07.jpg` / `-08.jpg` (highest-resolution professional exterior shots, ~9–10MB originals).

| File range | Count | Description | Recommended use |
|---|---|---|---|
| `architecture-bathhouse-exterior-01.jpg` | 1 | Bathhouse, completed, snow setting | Philosophy or Experience section — the clearest "old meets new" image in the set |
| `architecture-lodge-winter-01.jpg` | 1 | Main lodge exterior, deep winter | Experience section / seasonal callout |
| `architecture-lodge-exterior-01.jpg` … `-15.jpg` | 15 | Main lodge exterior, varying angles/quality (mix of professional + phone shots) | Gallery grid, property/about page; `-07` through `-11` are the highest-resolution and should be prioritized over `-15` (a low-res snapshot) |
| `architecture-bathhouse-02.jpg` … `-08.jpg` | 7 | Bathhouse, professional photography, multiple angles | Dedicated bathhouse/spa feature section if the site grows beyond one homepage |

## 5. Interiors images — full list (57)

| File range | Count | Room | Recommended use |
|---|---|---|---|
| `interiors-livingroom-01.jpg` … `-26.jpg` | 26 | Main living/lounge room | `-04.jpg` (log-wall corridor with hallway arches, taxidermy bird, atmospheric) was the Experience section's "Gather" image through the first draft; moved off that role 2026-08-07 (Mathieu Bonnier's feedback — an empty corridor didn't actually suggest people gathering, see `homepage-spec.md` §5 revision). Still a strong, atmospheric shot — good for a future gallery/property page. Rest of the range is unremarkable real-estate-style documentation, gallery-grid material at most. |
| `interiors-bedroom-01.jpg` … `-20.jpg` | 20 | Bedrooms | `-02.jpg` (mounted reindeer head above the bed) was the Philosophy section's image through the first draft; moved off that role 2026-08-07 — it's the first major image after the Hero, and a bedroom that early reads as accommodation marketing before the site has established anything else. No bedroom photo is used anywhere on the current homepage as a result (see `homepage-spec.md` §2 revision note). Still the single most "brand-defining" interior shot in the library for a future rooms/accommodation page. `-01.jpg` is an antique hand-painted daybed with a sheepskin throw, corrected 2026-08-06 — see §11. |
| `interiors-caretaker-cottage-01.jpg` … `-11.jpg` | 11 | Caretaker's cottage (secondary building) | Lower priority for the homepage; useful if the site later adds a "the estate" page covering all three buildings. `-01.jpg` (kitchen) is the most usable single frame. |

## 6. Story images — full list (26)

Detail and mood shots pulled out specifically because they read as narrative beats, not documentation:

| File | Description | Recommended use |
|---|---|---|
| `story-detail-01.jpg` … `-22.jpg` (22 images) | Close-up decor/object details from around the lodge (lighting fixtures, shelving, small objects) | Interstitial images between copy blocks; Philosophy section texture; Instagram-style detail inserts |
| `story-roses-on-ice.jpg` | Cut roses on an icy stone ledge — a deliberate, romantic still life | Excellent Philosophy-section image; pairs a "care and detail" narrative with a striking, colorful (rare in this mostly monochrome/snow library) frame |
| `story-boules-game.jpg` | Outdoor pétanque set | Proof the property is a year-round (not winter-only) destination — useful if the client confirms summer season is marketed too |
| `story-ski-touring-sunset.jpg` | Wide landscape, ski track leading toward the estate buildings at sunset | Strong "journey" image — good for a full-width narrative break between Philosophy and Experience sections |
| `story-ski-tracks-landscape.jpg` | Wide cross-country ski landscape, solo skier mid-frame | Experience-section anchor for the "ski touring" pillar of the property |

## 7. Lifestyle images — full list (56)

| File range | Count | Description | Recommended use |
|---|---|---|---|
| `lifestyle-family-01.jpg` … `-21.jpg` | 21 | Family candid shots inside the lodge (quality varies — several are under 300KB / low-res phone captures). **Individually reviewed 2026-08-07** while sourcing human-experience imagery for the homepage revision (Mathieu Bonnier's feedback) — four standouts identified: `-14.jpg` (six people gathered around an outdoor fire-cooking pot, sunny, stone bench — closest thing in the library to genuine "food preparation together"; now used in Gallery), `-17.jpg` (candlelit dinner, seven people, warm and intimate — now the Human Experience section's hero image), `-18.jpg` (four skiers silhouetted together at dusk — now Philosophy's image), `-19.jpg` (six-person ski group posed in front of the lodge — now used in Gallery). | See individual callouts above; the rest of the range is unremarkable candids, gallery filler at most |
| `lifestyle-rush-01.jpg` … `-10.jpg` (+ 2 `.heic`) | 12 | Candid ski-touring trip photography, warm/authentic tone. `-01.jpg` is a cabin breakfast/charcuterie scene. **Reviewed 2026-08-07**: `-06.jpg` (friends playing a card game together, cropped to hands/table) is now the Experience section's "Gather" image. `-02.jpg` and `-10.jpg` are bread-bakery photos (professional kitchen equipment, not REFUGE61's own kitchen — likely a bakery stop during the trip, not usable as "the lodge's kitchen"). | Gallery preview, Experience section supporting imagery |
| `lifestyle-iphone-01.jpg` … `-24.jpg` | 24 | General candid iPhone photography, mixed subjects | Lowest priority — use sparingly, mainly as gallery filler |
| `lifestyle-portrait-bjorn-mathieu.jpg` | 1 | Two named individuals, ski touring at sunset, high-res (2.96MB) | Now used in the Gallery (`gallery-05-ski-touring-portrait.jpg`, added 2026-08-07) |

**No literal "people cooking in an indoor kitchen" photo exists anywhere in the library** — checked directly 2026-08-07 (`interiors-caretaker-cottage-01.jpg`, the one true kitchen interior, is empty; the two indoor "kitchen" story/lifestyle files are decor-detail or ceiling-light shots, not people cooking). The closest genuine matches are `lifestyle-family-14.jpg` (outdoor group cooking) and `lifestyle-family-17.jpg` (candlelit group dinner) — both now in use. Flagged for Mathieu: if he has a specific "collective kitchen" photo in mind, it isn't in this asset set and either needs to be supplied or the section should stay with the dinner/outdoor-cooking imagery already in place.

## 8. Gallery preview curation (6 images used, physically duplicated into `public/images/gallery/`)

The homepage's Gallery Preview section (see `homepage-plan.md` §4) needs a small, hand-picked spread spanning every category rather than a folder dump. Originals remain in their category folder; these are curation copies.

**Revised 2026-08-07 per Mathieu Bonnier's feedback**: the original 6-of-8 selection leaned heavily on the lodge as an object (bathhouse exterior, a corridor, a bedroom — half the grid). Three of those were replaced with people actually living the week. `gallery-06-ski-portrait.jpg` and `gallery-07-lodge-exterior.jpg` were never used in the final 6 either round and remain in the folder unused (not deleted, in case a future pass wants them back).

| # | File | Sourced from | Status |
|---|---|---|---|
| 1 | `gallery-01-aerial-sunrise.jpg` | `hero/hero-aerial-sunrise.jpg` | Unchanged — the estate's one wide establishing shot |
| 2 | `gallery-02-ski-group.jpg` | `lifestyle/lifestyle-family-19.jpg` | **New** — replaces `gallery-02-bathhouse.jpg` (building exterior) |
| 3 | `gallery-03-aurora-evening.jpg` | `lifestyle/lifestyle-family-02.jpg` | **New** — replaces `gallery-03-log-corridor.jpg` (empty corridor) |
| 4 | `gallery-04-outdoor-cooking.jpg` | `lifestyle/lifestyle-family-14.jpg` | **New** — replaces `gallery-04-bedroom-deer.jpg` (bedroom) |
| 5 | `gallery-05-ski-touring-portrait.jpg` | `lifestyle/lifestyle-portrait-bjorn-mathieu.jpg` | **New** — replaces `gallery-05-roses-on-ice.jpg` (still life); this is the same source photo the old, unused `gallery-06-ski-portrait.jpg` copy held — that stale duplicate was deleted when this one was added |
| 6 | `gallery-08-ski-touring-sunset.jpg` | `story/story-ski-touring-sunset.jpg` | Unchanged — a landscape "journey" shot, distinct enough from #5 (wide landscape vs. close portrait) to coexist |

## 9. Video (3 files, `public/videos/`)

| File | Source | Size | Notes / recommended use |
|---|---|---|---|
| `refuge61-teaser.mp4` | "Teaser 2606 HD.mp4" | 11.3MB (compressed 2026-08-06, was 262MB) | Polished brand film, used in the homepage's Cinematic Video section — re-encoded to 1280x720 H.264/CRF 31 with faststart, 23x smaller, quality-checked frame-by-frame against the original. No WebM/AV1 alternate yet (still a worthwhile future optimization, not blocking). |
| `lifestyle-clip-01.MOV` | "IMG_2232.MOV" | 27MB | Handheld candid footage — background texture for a lifestyle section, not hero-grade |
| `lifestyle-clip-02.MOV` | "IMG_2104.MOV" | 43MB | Handheld ski-touring footage — same use as above |

## 10. Logos (7 files, `public/logos/`)

| File | Format | Notes |
|---|---|---|
| `refuge61-logo-black-white.png` | PNG, transparent | The only raster/web-ready logo file. Use for nav bar, favicon source, and anywhere a PNG/SVG is required until vector source is exported from the PDFs. |
| `refuge61-logo-on-stone-grey.pdf` / `-on-forest-green.pdf` / `-on-sage-green.pdf` | PDF, full lockup on color plate | Print/brand-guideline use; not directly usable in a browser without conversion |
| `refuge61-wordmark-stone-grey.pdf` / `-wordmark-forest-green.pdf` / `-wordmark-sage-green.pdf` | PDF, wordmark only, transparent | Same — needs SVG/PNG export before implementation. **Action item:** export at least the wordmark in stone-grey (matches the design-system palette, see `design-system.md`) as SVG before Phase 5 build. |

## 11. Known gaps / technical debt to flag to the client

- **2 files are `.heic`** (`lifestyle-rush-05.heic`, `lifestyle-rush-09.heic`) — not renderable in most browsers without conversion. Convert to JPG/WebP before use.
- **No vector logo exists** — only a flat PNG and print-oriented PDFs. An SVG export of at least the primary wordmark is needed before build.
- **Video**: `refuge61-teaser.mp4` was compressed 2026-08-06 (262MB → 11.3MB, see §9) as part of building the Cinematic Video section. The two handheld clips (`lifestyle-clip-01.MOV` 27MB, `lifestyle-clip-02.MOV` 43MB) remain unoptimized originals — neither is used anywhere in the current homepage build, so they weren't touched.
- **No confirmed "summer" photography beyond 2 images** (`story-boules-game.jpg`, the roses shot) — if the client wants to market the property as year-round rather than winter-led, more non-snow photography may be needed.
- Several `lifestyle-family-*` and `lifestyle-iphone-*` files are low-resolution (under 300KB) and should not be scaled above thumbnail/gallery-tile size on the live site.
- **Two cataloguing errors, found and fixed 2026-08-06, both while building the Philosophy/Experience sections and seeing the wrong photo render on screen:**
  1. `story-ski-tracks-landscape.jpg` was mapped to `IMG_1964.jpeg`, which is actually a photo of bread rolls, not a ski landscape. Corrected to `034A5056-ADC5-416A-97AD-C3060953AD01_1_105_c.jpeg` (also still present at `lifestyle-iphone-01.jpg`).
  2. More significant: **`interiors-bedroom-01.jpg` — the file this document previously identified as "the single most brand-defining shot in the library" and named as the Philosophy section's image — is an antique painted daybed with a sheepskin throw. It does not contain a reindeer head.** The actual mounted-reindeer-head photo is `interiors-bedroom-02.jpg`; the Philosophy section and the `gallery-04-bedroom-deer.jpg` curation copy have both been corrected to use it.

  Both errors trace to the same cause: within `Soverom bilder` (and the other bulk-processed folders), only one or two representative files were opened and viewed in §1's spot-check pass; the rest — including, it turns out, the *first* file in that folder, which became `interiors-bedroom-01.jpg` by naming convention — were catalogued by folder/filename pattern inference rather than individually confirmed. **This means none of the bulk-categorized groups (`lifestyle-iphone-*`, `lifestyle-family-*`, `story-detail-*`, and in fact any `-01`/`-02`/etc. file not explicitly called out with a specific visual description elsewhere in this document) should be assumed correct.** A full visual spot-check of every file — not just the ones already flagged — is recommended before this library drives any further production decisions.
- **Third cataloguing error, found 2026-08-07** while sourcing images for the storytelling revision: `story-detail-01.jpg` is catalogued above (§6) as "decor detail, kitchen lighting/objects" — it is actually another bedroom photo (a mounted reindeer head above a bed with reindeer-print bedding, a different room/angle from `interiors-bedroom-02.jpg`). Not corrected in the table above since nothing currently uses this file and re-verifying all 22 `story-detail-*` files was out of scope for this pass — flagging it here as further evidence for the spot-check recommendation directly above.
- **2026-08-07 — homepage storytelling revision (Mathieu Bonnier's feedback):** 21 of the 21 `lifestyle-family-*` files and all 10 `lifestyle-rush-*` files were individually viewed for the first time (previously bulk-catalogued, per the errors above) while sourcing human-experience imagery. See the updated §7 callouts for what was found and where each now-used image went.
