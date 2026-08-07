# REFUGE61 — Project Brief

Status: **Draft, working assumptions.** Nothing here was supplied as a formal brief — it's reverse-engineered from the raw photography, video and logo files handed off for the build. Everything in this document should be confirmed (or corrected) by the client before it drives design or copy decisions. Where a claim is inferred rather than stated, it's flagged.

## 1. What REFUGE61 appears to be

- **Property**: a Norwegian log-built hunting lodge estate, referred to internally in the source files as "Bjørkåsen" / "Bjorkaasen" (the working property name — "REFUGE61" is the brand/rental name it's being marketed under; the relationship between the two names should be confirmed).
- **Setting**: a high mountain plateau ("fjell") location — treeless snow terrain, groomed cross-country ski tracks running past the property, aerial photos showing total isolation from neighboring structures. Photography spans summer (roses, pétanque/boules set) and deep winter (frost, aerial sunrise shots), suggesting a year-round destination.
- **Built estate**, three structures documented:
  1. **Main lodge** — traditional hand-built log-cabin construction (round-log walls, carved timber facade details, dark stained wood), multiple bedrooms, a large log-walled living/lounge space, taxidermy and hunting-heritage decor (mounted reindeer head, game bird) alongside refined furnishings (upholstered headboards, designer pendant lighting).
  2. **Bathhouse / spa building** — a newer, architecturally distinct structure in dry-stone and full-height glass, turf roof — reads as a deliberate contrast to the rustic main lodge (contemporary Scandinavian vs. heritage hunting-lodge).
  3. **Caretaker's cottage** ("Vaktmester hytta") — a simpler, lived-in secondary building with its own kitchen, presumably for staff or overflow guests.
- **Positioning (inferred)**: a premium, design-led wilderness retreat — hunting-lodge heritage and craftsmanship reframed through a minimal, editorial, Scandinavian sensibility. The asset mix (professional real-estate/architecture photography *and* candid family/ski-touring lifestyle shots *and* a dedicated brand teaser film) suggests this is being positioned as an exclusive stay/rental or private retreat brand, not a hotel chain.

## 2. Audience (assumption — confirm)

Discerning travelers or small private groups (families, friends, retreats) who value:
- Architectural craftsmanship and material honesty over generic luxury signifiers
- Genuine remoteness and quiet over resort-style amenities
- Four-season outdoor life — cross-country skiing, and by inference hunting/fishing/hiking in other seasons
- A design-conscious aesthetic (the existence of a considered logo suite with three background variants and both wordmark/lockup forms points to a brand-serious client, not a rustic mom-and-pop cabin listing)

## 3. Brand assets on hand

| Asset type | Count | Notes |
|---|---|---|
| Professional architecture/interior photography | ~115 images | Shot in a consistent sequence ("...Gala-NNN"), covers exterior, living room, bedrooms, bathhouse, caretaker's cottage |
| Casual/phone photography (decor detail, aerials, B&W) | ~30 images | Mixed quality, several standout aerial and black-and-white shots |
| Candid lifestyle photography | ~55 images | Family-in-lodge, ski-touring trip, iPhone snapshots |
| Video | 3 files, ~332MB combined | One polished brand teaser ("Teaser 2606 HD.mp4"), two handheld candid clips |
| Logo suite | 7 files | 1 PNG (black & white), 6 PDFs — wordmark and full lockup, each in stone-grey, forest-green and sage-green |

Full inventory and homepage usage recommendations: see [`asset-library.md`](./asset-library.md).

## 4. What this phase does *not* answer

The following are open questions the client needs to settle before homepage copy/IA can be finalized — flagging rather than guessing:

- Is this a bookable rental (with pricing/availability) or an invitation-only private retreat?
- Season(s) actually open to guests — winter-only, or year-round as the mixed photography suggests?
- Group size / bedroom count / capacity
- Activities actually offered on-site vs. nearby (hunting? guided skiing? a spa program in the bathhouse?)
- Geographic region/nearest town, for SEO and travel-logistics copy
- Tone of voice: is "hunting lodge" heritage something to foreground (rugged, storied) or softened in favor of pure Scandinavian minimalism?

## 5. Working name & language note

Source folders mix French ("Déco dans le chalet", "Famille dans le chalet") and Norwegian ("Oppholdsrom", "Soverom", "Vaktmester hytta", "Ute bilder") labels, implying a French-speaking owner/team with a Norwegian property. The homepage should ship in English per this build; French/Norwegian localization is a candidate for a later phase, not phase 1.

## 6. Deliverables tracker for this phase

- [x] Next.js 15 App Router project scaffolded (`refuge61/`)
- [x] Source assets copied into `public/` and categorized
- [x] [`docs/asset-library.md`](./asset-library.md) — categorized asset inventory
- [x] [`docs/design-system.md`](./design-system.md) — typography, color, spacing, motion foundation
- [x] [`docs/homepage-plan.md`](./homepage-plan.md) — section-by-section homepage blueprint
- [ ] No UI/components have been built yet — by design. This is a planning-and-documentation phase only.
