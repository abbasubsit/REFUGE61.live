# REFUGE61 — Homepage Blueprint

Status: **Blueprint, no UI built.** This is the structural plan the Phase 4 design concepts and the Phase 5 build must follow. It defines every section's purpose, assets, copy length, motion and layout — not the final visual style (that's what Phase 4's three concepts will propose) and not final copy (that's a copywriting pass, not this one).

References: [`asset-library.md`](./asset-library.md) for every image path used below, [`design-system.md`](./design-system.md) for the type/color/motion tokens referenced.

## 1. The user journey this page is built around

```
   Navigation (persistent)
        │
        ▼
      HERO            "This place exists, and it is extraordinary."
        │              — emotional hook, zero explanation
        ▼
   PHILOSOPHY          "Here's why it exists, and what it stands for."
        │              — the brand's values, in the owners' voice
        ▼
   EXPERIENCE          "Here's what you'd actually do here."
        │              — the tangible offer: rooms, bathhouse, skiing, seasons
        ▼
  GALLERY PREVIEW      "Here's proof — look at more of it."
        │              — visual reassurance, breadth after depth
        ▼
   CONTACT CTA         "Here's how you get in."
                        — single, low-friction conversion point
```

One page, one path, no branching navigation competing for attention. Every section either builds emotional investment (Hero, Philosophy, Gallery) or moves the visitor toward the one conversion action (Experience → Contact). There is intentionally no pricing table, no room-by-room booking flow, and no blog teaser on the homepage — those are second-page concerns, not homepage jobs, given the "private retreat" positioning in `project-brief.md`.

## 2. Navigation

| | |
|---|---|
| **Purpose** | Persistent orientation and the secondary path to Contact, without competing with the Hero image. |
| **Image** | None — logo mark only: `public/logos/refuge61-logo-black-white.png` (recolored to `color-snow` per `design-system.md` §4 while transparent over the hero, flips to natural color once the bar goes solid). |
| **Text length** | 4–5 nav labels max, 1 word each (e.g. "Philosophy", "Experience", "Gallery", "Contact"). No taglines in the nav. |
| **Animation** | Bar background fades from transparent to solid `color-snow` on scroll (~80px threshold), 300ms ease — see `design-system.md` §4/§7. Logo and links crossfade color with the same transition, no separate animation. |
| **Layout** | Fixed/sticky top bar, full-width, logo left, nav links + one CTA button right (or centered logo, links split left/right — a Phase 4 decision). Height ~80px desktop, ~64px mobile with a hamburger collapsing links into a full-screen overlay menu. |
| **CTA** | One ghost-style button, "Enquire" — always visible, routes to the Contact section (anchor scroll, not a new page). |

## 3. Hero

| | |
|---|---|
| **Purpose** | Stop the scroll. Establish scale, setting and quality in under 3 seconds, before a single word is read. This section alone should carry 80% of the "is this place special?" judgment a visitor makes. |
| **Image** | Primary: `public/images/hero/hero-aerial-sunrise.jpg` (aerial, dawn light, whole estate in snow — the strongest single image in the library). Alternate if a video-led concept is chosen: `public/videos/refuge61-teaser.mp4` (must be compressed first, see `asset-library.md` §9) as a muted, looping full-screen background, with `hero-aerial-sunrise.jpg` as the poster/fallback frame. |
| **Text length** | Ultra-short. One headline, 3–6 words (e.g. "A refuge above the treeline") set in `display-xl`; optionally one sub-line, ≤12 words, in `body-l`. No paragraph copy in the hero — anything longer competes with the image. |
| **Animation** | On first paint only: image fades in with a slight scale-down (1.03→1.0) over 1000ms; headline fades + rises in 200ms after the image starts, per `design-system.md` §7. No looping animation, no auto-advancing carousel — this is one fixed image (or one video loop), not a slideshow. |
| **Layout** | Full-bleed, 100vh (or 100svh for mobile browser-chrome safety). Headline + sub-line + CTA button anchored lower-third, left-aligned with the grid margin (not centered — centered hero text reads as generic template, left-aligned reads as edited/intentional). Scrim gradient at the bottom third only, per `design-system.md` §5, so the top of the image stays untouched. |
| **CTA** | One ghost button, "Discover the Estate" — scrolls to Philosophy. This is the only place on the page with a "keep scrolling" affordance (small down-chevron, subtle, no bounce animation). |

## 4. Philosophy

| | |
|---|---|
| **Purpose** | Answer "why does this place exist and who is it for" before the visitor sees a single room. This is the values/positioning section — it's where "hunting-lodge heritage reframed through Scandinavian restraint" (see `project-brief.md` §1) gets stated in the owners' voice, in prose, not in bullet-pointed amenities. |
| **Image** | `public/images/interiors/interiors-bedroom-01.jpg` (mounted reindeer head above the bed — the single most brand-defining frame in the library, per `asset-library.md` §5) or `public/images/story/story-roses-on-ice.jpg` for a softer, more romantic read. Recommend testing both in Phase 4; they tell different versions of the same philosophy. |
| **Text length** | One editorial paragraph, 60–100 words. Long enough to carry real voice and specificity (not marketing platitudes), short enough to read in one unhurried breath. Optionally preceded by a 3–6 word pull-line in `display-m` that summarizes the paragraph's idea before the paragraph itself. |
| **Animation** | Text and image both fade + rise into view on scroll entry (per `design-system.md` §7's default pattern), text first, image ~100ms behind it. No parallax on this section — it's a reading moment, motion should get out of the way once triggered. |
| **Layout** | Asymmetric split, not centered: image occupies ~55% of the viewport width on one side (full-bleed to that side's edge, not inset in a box), text block sits in the remaining ~45% with generous margin, vertically centered against the image. Alternates left/right with the Experience section below it so the page doesn't feel like a repeating template. |
| **CTA** | None. This section's job is belief, not conversion — adding a button here would undercut the editorial tone. The only affordance is continued scroll. |

## 5. Experience

| | |
|---|---|
| **Purpose** | Convert the emotional buy-in from Hero/Philosophy into a concrete sense of what a stay actually involves — the rooms, the bathhouse, the skiing, the seasons. This is the section doing the most information work on the page, and the one most likely to expand into sub-cards if the client confirms more specifics (per the open questions in `project-brief.md` §4). |
| **Image** | A 2–3 item feature set, each with its own image: (1) `public/images/architecture/architecture-bathhouse-exterior-01.jpg` — the bathhouse/spa; (2) `public/images/interiors/interiors-livingroom-04.jpg` — the log-wall living spaces; (3) `public/images/story/story-ski-tracks-landscape.jpg` — skiing/outdoor life. Each becomes one "pillar" of the section. |
| **Text length** | Per pillar: one 3–5 word heading (`heading-s`) + one 15–25 word supporting line (`body-m`). Total section copy stays under ~90 words across all pillars combined — this is a scan-and-feel section, not a read-every-word one. |
| **Animation** | Pillars reveal in sequence as the section enters the viewport — staggered fade + rise, ~120ms offset between each (not all three firing simultaneously), per `design-system.md` §7. Each pillar image gets the subtle hover-scale (1.0→1.03) treatment on desktop. |
| **Layout** | Three-column grid on desktop (stacks to single column on mobile), each column: image (4:5) → heading → supporting line, in that order, top-aligned. Equal-width columns, `space-4` gaps — no single pillar should dominate, since the point is breadth of offer, not a single hero feature. |
| **CTA** | Optional single "Explore the Estate" text link beneath the three columns if the client later wants a dedicated property/rooms page; omit entirely if the homepage stays a true one-pager for this phase. |

## 6. Gallery Preview

| | |
|---|---|
| **Purpose** | Visual proof after the Experience section's claims — reassure a visitor who's now emotionally invested that there's genuine depth and quality behind the four images they've seen so far. This section's job is breadth, not narrative. |
| **Image** | The 8 curated images in `public/images/gallery/` (see `asset-library.md` §6): aerial, bathhouse, log corridor, bedroom, roses-on-ice, ski portrait, lodge exterior, ski-touring sunset — deliberately spanning architecture, interiors, story and lifestyle so the grid doesn't read as "more of the same room." |
| **Text length** | Section eyebrow + heading only ("GALLERY" / "A closer look", ≤4 words) — no body paragraph, no per-image captions on the grid itself (captions appear only in the lightbox/expanded view, if one is built). |
| **Animation** | Grid tiles fade + rise in a light stagger as the section scrolls into view (per `design-system.md` §7); on hover, the hovered tile scales 1.0→1.03 while siblings stay static (no dimming/opacity change on the others — keep it subtle). |
| **Layout** | Asymmetric masonry-style grid, not a uniform matrix — mix of one large tile (2×2, e.g. the aerial or bathhouse shot) with smaller 1×1 tiles around it, echoing an editorial magazine spread rather than an Instagram grid. 8 images total: 1 large + 7 standard, or 2 large + 6 standard depending on final crop testing in Phase 4. |
| **CTA** | One text link/button below the grid, "View Full Gallery" — can point to a future dedicated gallery page, or simply be omitted/disabled in Phase 5 if that page doesn't exist yet (better to omit than link to a 404). |

## 7. Contact CTA

| | |
|---|---|
| **Purpose** | The single conversion point of the page. Everything above has been building trust and desire; this section exists purely to make the next step (an enquiry) feel easy and inevitable. |
| **Image** | `public/images/hero/hero-bw-frost-facade.jpg` or `hero-aerial-winter-wide.jpg` as a full-width background/split panel — recommend a *different* mood register than the opening hero (e.g. black-and-white if the hero was color, or vice versa) so the page feels like it's closing a loop rather than repeating itself. |
| **Text length** | Very short: one 4–8 word headline ("Begin your stay at REFUGE61") + optionally one 10–15 word supporting line. The form/contact details do the rest of the "work," not prose. |
| **Animation** | Standard fade + rise on scroll entry, matching Philosophy/Experience. Form field focus states per `design-system.md` §4 (underline color/weight transition, 200ms) — no other motion; this section should feel calm and easy to act in, not showy. |
| **Layout** | Split layout: image or dark solid `color-forest`/`color-charcoal` panel on one side, minimal contact form (Name, Email, Message or Dates, one submit button) on the other. Alternatively a centered single-column layout with just an email/phone/enquiry-button trio if the client prefers not to run a form at all (open question — see `project-brief.md` §4 on whether this is a bookable rental or invitation-only). |
| **CTA** | Primary solid button, "Send Enquiry" (or "Request a Stay"). This is the *only* solid-fill primary button on the entire homepage — every other CTA on the page is a ghost/text style, so this one visually reads as the destination, not just another link. |
| **Footer** | Minimal single row beneath this section (not a separate homepage "section" in the Phase 5 build list, but required for a shippable page): logo mark, 1–2 social/contact icons (per `design-system.md` §6 icon spec), copyright line. No sitemap-style multi-column footer — it would contradict the one-pager structure above it. |

## 8. What's deliberately excluded from the homepage

To keep Phase 5's scope matched to what's actually planned (Navigation, Hero, Philosophy, Experience, Gallery Preview, Contact — nothing else):

- **No pricing/availability calendar** — booking logistics belong on a dedicated page or in the enquiry conversation, once the client confirms the booking model (see `project-brief.md` §4).
- **No blog/journal teaser** — no content exists for one yet.
- **No testimonials section** — no testimonial copy was supplied; adding placeholder testimonials would misrepresent the brand before real ones exist.
- **No multi-page primary nav** (Rooms / Activities / About as separate pages) — Phase 5 is a single homepage; if the client wants a fuller site information architecture, that's a Phase 6 conversation, not a homepage concern.

## 9. Section-to-asset quick reference

| Section | Primary asset | Backup/alt asset |
|---|---|---|
| Navigation | `logos/refuge61-logo-black-white.png` | — |
| Hero | `hero/hero-aerial-sunrise.jpg` | `videos/refuge61-teaser.mp4` (compressed) |
| Philosophy | `interiors/interiors-bedroom-01.jpg` | `story/story-roses-on-ice.jpg` |
| Experience | `architecture/architecture-bathhouse-exterior-01.jpg`, `interiors/interiors-livingroom-04.jpg`, `story/story-ski-tracks-landscape.jpg` | `architecture/architecture-lodge-exterior-07.jpg` |
| Gallery Preview | `images/gallery/gallery-01…08.jpg` (all 8) | any category folder for future rotation |
| Contact CTA | `hero/hero-bw-frost-facade.jpg` | `hero/hero-aerial-winter-wide.jpg` |
