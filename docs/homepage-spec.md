# REFUGE61 — Homepage Specification

Status: **Implementation blueprint. No UI built yet.** This is the build-ready spec for the homepage, synthesizing [`project-brief.md`](./project-brief.md), [`asset-library.md`](./asset-library.md), [`design-system.md`](./design-system.md), [`homepage-plan.md`](./homepage-plan.md) and [`design-concepts.md`](./design-concepts.md) into one document a developer can build from without asking further questions. Every image reference below is an exact path that already exists in `public/`.

**Direction**: primary creative direction is **Concept 1 — Editorial Scandinavian** (see `design-concepts.md`), with **one** section borrowed from Concept 2 — Cinematic Nature: a single full-bleed video moment, placed mid-page rather than as the hero, exactly as `design-concepts.md`'s recommendation proposed as an enhancement rather than a structural change. Every decision below is checked against Mathieu Bonnier's stated requirements: very little text, minimalist, photography tells the story, Scandinavian feeling, not a commercial hotel, story-driven, calm and timeless, collaborative process.

---

## 1. Homepage Goal

The homepage exists to make a visitor feel, within seconds of arriving, that REFUGE61 is a real, considered place rather than a product — and to move them from that feeling to a single quiet action (an enquiry) without ever asking them to read more than a few sentences along the way. The emotional journey is deliberately linear and unhurried: **arrival** (the hero's still, monochrome image establishes scale and calm before any copy loads the visitor's attention), **belief** (the Philosophy section states, in one held paragraph, what the place is *for*), **understanding** (the Experience section shows, through three wordless pairings of image and single-word label, what a stay actually involves), **immersion** (the cinematic video section is the emotional peak of the page — the one moment the visitor is asked to stop scanning and simply watch), **reassurance** (the Gallery Preview widens the view again after that immersive peak, proving there's real depth behind the four sections that came before it), and finally **invitation** (Contact CTA, deliberately the smallest, quietest moment on the page — a place to say yes, not a hard sell). No section should ever make the visitor feel marketed to; every section should make them feel like they've been let in on something.

---

## 2. Section Order

**Revised 2026-08-07 per Mathieu Bonnier's feedback on the first draft** — his note: "the lodge is the setting, but the human experience is the real subject," and specifically "experience before accommodation." A new Human Experience section (§5a) was inserted between Experience and Cinematic Video; nothing else in the order changed.

```
Navigation
    ↓
Hero
    ↓
Philosophy
    ↓
Experience  (Move / Gather / Reset)
    ↓
Human Experience  ("Live together, for one week")
    ↓
Cinematic Video
    ↓
Gallery Preview
    ↓
Contact CTA
```

### Why this order is correct

- **Hero opens on stillness, not motion.** The single most important sequencing decision in this spec is that the cinematic video does *not* open the page. A visitor's first frame should be a held, editorial photograph (per Concept 1) — calm, timeless, unhurried. Opening on autoplay video would default the entire page's first impression to Concept 2's register (immersive, hospitality-adjacent), which is exactly what Mathieu asked to avoid. Video is a moment *within* an editorial page, not the register the whole page speaks in.
- **Philosophy before Experience** because belief has to precede detail — a visitor who doesn't yet feel what the place is *for* will read the Experience pillars as an amenities list; a visitor who's just read the Philosophy paragraph reads the same three images as evidence of a worldview.
- **Human Experience sits right after Move/Gather/Reset**, while the visitor is still in "what does a week here feel like" mode, and *before* the video widens out to landscape/place footage — the emotional peak (people) comes before the establishing-shot peak (place), not after it.
- **Video sits after Human Experience, before Gallery** — deliberately mid-page, never as an opener or a closer. By the time a visitor reaches it, they already understand the place structurally (Experience) and emotionally (Human Experience); the video's job is to make the *place* felt, having already made the *people* felt. Placing it before Gallery also means the page doesn't end on a loud note — it uses the video as a peak, then deliberately steps back down into stillness (Gallery, then the quietest section of all, Contact), so the page's emotional arc has a shape rather than building to a climax and stopping.
- **Gallery after the video, not before it**, because the video needs a clean, uncluttered runway to feel like a genuine change of register — if it followed a wall of gallery thumbnails, it would read as "one more piece of media" rather than a deliberate pause.
- **Contact last and smallest** — per both `homepage-plan.md` and `design-concepts.md`, conversion is the page's job, but the *last* job, not the loudest.

---

## 3. Hero Specification

- **Exact image**: `public/images/hero/hero-bw-frost-facade.jpg` (black-and-white, frost-covered carved timber facade). This is the only hero image used at any breakpoint — no image swap between desktop/tablet/mobile (see Mobile behavior below for how the *same* file adapts).
- **Layout**: Full-bleed, `100svh` (svh, not vh, to avoid mobile browser-chrome jump). Headline and sub-line anchored lower-left third, left-aligned to the grid margin — never centered. A single thin bottom gradient scrim (`color-charcoal` 0%→28% opacity, bottom 35% of frame only) sits behind the text; the top two-thirds of the image is untouched.
- **Typography**: Headline in `display-xl` Fraunces, `color-snow`. Optional sub-line in `body-l` Inter, `color-snow` at 85% opacity, directly beneath the headline with `space-2` (16px) gap.
- **Copy length**: Headline: 3–6 words (e.g. length/tone target: "A refuge above the treeline" — placeholder, not final copy). Sub-line: optional, ≤12 words. No paragraph copy in this section, ever.
- **CTA**: One ghost-style button (per `design-system.md` §4), label "Discover the Estate," positioned beneath the sub-line with `space-4` (32px) gap. Transparent fill, 1px `color-snow` border; on hover, fills solid `color-snow` with `color-charcoal` text, 200ms ease.
- **Overlay**: Bottom-anchored linear gradient scrim only (see Layout above) — no full-frame darkening. The image must remain legible as a photograph, not read as "a background behind a dark box."
- **Scroll indicator**: A single thin vertical line (1px × 32px, `color-snow` at 60% opacity) centered at the bottom edge of the viewport, with a small `eyebrow`-style "SCROLL" label above it at 10px letter-tracked. Static — no bounce, no animation loop. Fades to 0 opacity after the visitor scrolls past 10% of viewport height, and does not reappear. Hidden entirely below the Tablet breakpoint (see Mobile behavior) — on a touch device, scrolling is the default gesture and needs no prompt.
- **Desktop behavior** (≥1024px): Full composition visible, `object-position: 62% 40%` (the carved archway/balustrade detail — the image's strongest graphic element — sits right-of-center in the source frame; this keeps that detail in view rather than defaulting to a dead-center crop that would center on the flatter roofline instead).
- **Tablet behavior** (768–1023px): Same file, same `object-position`, headline drops to `display-l` scale (see `design-system.md` type scale) since `display-xl` at tablet width would force an awkward line-wrap. Sub-line and CTA unchanged.
- **Mobile behavior** (<768px): Same file, `object-fit: cover`, `object-position` shifted to `70% 35%` — tighter crop, biased further right and higher in frame, to keep the carved-arch detail legible when most of the image's horizontal breadth is cropped away by the narrow viewport. Headline drops to `display-m` scale (mobile value in `design-system.md`'s type table), left margin reduced to the standard mobile grid margin, CTA button becomes full-width minus margins rather than intrinsic-width. Scroll indicator: hidden (see above).

---

## 4. Philosophy Section

- **Purpose**: State, once, in prose, what REFUGE61 is *for* — the emotional and philosophical anchor of the whole page. This section carries more of the page's "storytelling" weight than any other, precisely because every other section is built to avoid paragraphs.
- **Layout**: Asymmetric split, not centered. Image occupies the left 55% of the viewport width, full-bleed to that edge (not inset in a card/box); text block sits in the remaining 45%, vertically centered against the image, with a hard top-alignment between the text block's cap-height and the image's top edge (not optically centered — precisely aligned, so the pairing feels composed rather than default-centered).
- **Image**: `public/images/lifestyle/lifestyle-family-18.jpg` (four skiers moving together, silhouetted at dusk). **Changed 2026-08-07** from `interiors/interiors-bedroom-02.jpg` (the mounted reindeer head) per Mathieu Bonnier's feedback: Philosophy is the first major image after the Hero, and a bedroom that early reads as accommodation marketing before the page has established anything else. The new image leads with nature and companionship instead — no building in frame at all — see `asset-library.md` §7/§11 for the full reasoning and the bedroom photo's prior (2026-08-06-corrected) history in this slot.
- **Maximum text length**: 90 words, hard cap. Set as a pull-quote (Fraunces italic, `display-m`), not a body paragraph — line length capped at 45–55 characters so it reads like an editorial caption, not marketing copy. No heading/eyebrow label above it; the pull-quote *is* the section.
- **Spacing**: `space-20` (160px) vertical padding, top and bottom, per `design-system.md`'s hero/major-transition spacing token — this section gets the same generous treatment as the hero, not the standard `space-16` default, because it's meant to feel like a pause, not a transition.
- **Animation**: Pure opacity fade only (no rise/translate) over 800ms, ease-out-expo, triggered on viewport entry. Image and text fade in together as one unit, not staggered — this is the one section on the page where simultaneous (not sequential) reveal is correct, because the pairing is meant to be read as a single composed statement, not a sequence of beats.

---

## 5. Experience Section

Reframed from a generic three-pillar amenities layout into three single-word states: **Move / Gather / Reset** — verbs, not room names, so the section reads as an experience being described rather than a floor plan being listed.

| Pillar | Meaning | Image | Why |
|---|---|---|---|
| **Move** | Outdoor life, ski touring, the landscape itself | `public/images/story/story-ski-tracks-landscape.jpg` | Wide cross-country ski landscape, a single distant skier mid-frame — no visible face, which keeps the image about the *landscape and act* of moving through it rather than about a specific person, consistent with the "not a commercial hotel" instruction (avoids staged-lifestyle-photography register). |
| **Gather** | The lodge's communal, indoor life | `public/images/lifestyle/lifestyle-rush-06.jpg` | **Changed 2026-08-07** (Mathieu Bonnier's feedback) from `interiors/interiors-livingroom-04.jpg`, an empty log corridor — atmospheric, but it didn't actually suggest people gathering, and Mathieu's core note was that the imagery needed to support its concept more directly. Now a candid of friends playing a card game, cropped to hands and table rather than a staged group portrait — still "suggests, doesn't explain," just suggests the right thing. |
| **Reset** | Restoration, the bathhouse | `public/images/architecture/architecture-bathhouse-exterior-01.jpg` | The finished stone-and-glass bathhouse against snow — the clearest single "calm, considered, restorative" image in the entire library. |

- **Layout**: Three-column grid, equal width, on desktop/tablet; single column, stacked in the order Move → Gather → Reset, on mobile. Each column: image (4:5 ratio, uncropped from its natural framing — do not force a different ratio) → `space-3` (24px) gap → the single-word label in tracked-out uppercase Inter (`eyebrow` style, `color-charcoal`). No supporting sentence beneath any label — the word and the image are the entire statement, per Concept 1's "less text than seems reasonable" principle.
- **Interaction**: **Static — non-interactive.** No hover-scale, no click target, no cursor-pointer state on these three images. This is a deliberate contrast with the Gallery Preview section below (§7), which *is* interactive — Experience is meant to be looked at, not clicked through, reinforcing that this section is a statement, not a navigation surface.
- **Spacing**: `space-16` (128px) vertical section padding (the standard default, not the extended `space-20` used for Hero/Philosophy) — this section is more structured/grid-like than Philosophy, so it doesn't need the same extreme air around it.
- **Animation**: The three columns fade + rise in with a light stagger — Move, then Gather (~120ms later), then Reset (~120ms later again) — 600ms each, ease-out-expo, per `design-system.md` §7's default entrance pattern. This is the one section that uses the standard staggered reveal; Philosophy (§4) deliberately doesn't, for the reasons stated there.

---

## 5a. Human Experience Section

**Added 2026-08-07 per Mathieu Bonnier's feedback** on the first draft: "the lodge is the setting, but the human experience is the real subject." This is the homepage's one dedicated moment for that idea, sitting between Experience (§5) and Cinematic Video (§6).

- **Purpose**: Make the "people living together for a week" idea the largest, most emotional single moment on the page — larger and more direct than anything Move/Gather/Reset can carry at that section's deliberately small, suggestive scale.
- **Image**: `public/images/lifestyle/lifestyle-family-17.jpg` — a candlelit dinner table, seven people, mid-conversation. **No literal "people cooking in a kitchen" photo exists in the asset library** (checked directly — see `asset-library.md` §7); this is the closest genuine match found. Flagged for Mathieu to confirm, or to supply a stronger image if he has a specific photo in mind — see the implementation report for this phase.
- **Layout**: Full-bleed, `80vh` — deliberately between the Hero (`100svh`) and the Cinematic Video (`85vh`) in scale, so it reads as a major moment without being mistaken for either of those. Same bottom-scrim + lower-left text treatment as Hero and Video (design-system.md's established language for "large, held" photography moments) rather than a new pattern. Section itself gets `space-12`/`space-20` (mobile/desktop) vertical padding around the full-bleed block, matching Cinematic Video's "generous whitespace before and after."
- **Copy**: One short headline ("Live together, for one week.") in `display-m`/`display-l` Fraunces, `color-snow`, plus one very short supporting line ("Cooking, moving, and talking — together.") in `body-l` — no paragraph, per Mathieu's explicit "very little supporting text" instruction. Image carries the story; text confirms it.
- **Motion**: Pure opacity fade, 800ms, ease-out-expo — matches Philosophy's "held, composed" treatment (§4), not Experience/Gallery's staggered rise, because this is a single statement, not a list of items.
- **No CTA, no interaction** — same reasoning as Move/Gather/Reset (§5): this section is looked at, not clicked through.

---

## 6. Cinematic Video Section

**This is not the hero.** It is a single, deliberate full-bleed video moment borrowed from the Cinematic Nature concept and inserted mid-page, immediately after Experience and before Gallery Preview.

- **Why it appears here**: By this point in the scroll, the visitor has already absorbed the page's calm, editorial register (Hero, Philosophy, Experience) — introducing motion now reads as an intentional shift in register, not as the page's default mode. It gives the teaser film (`refuge61-teaser.mp4`) — a genuinely strong, otherwise-unused asset per `asset-library.md` §9 — a home without letting autoplay video define the whole homepage's identity, which is the core tension Concept 2 carried and Concept 1 avoided. One video section, positioned deliberately, gets the benefit of the footage without the "commercial hotel" risk of an all-video-led page.
- **Layout**: Full viewport width, height `85vh` on desktop (intentionally *not* a full `100vh` takeover — slightly less than the Hero's height, so this section reads as a secondary, contained moment rather than a second hero). No text overlay beyond a single small `eyebrow`-style caption in the bottom-left corner (2–4 words, e.g. length/tone target: "Winter, Bjørkåsen" — placeholder), on the same bottom scrim treatment as the Hero.
- **Poster image**: `public/images/hero/hero-aerial-winter-wide.jpg` — shown immediately on load (before/if the video buffers), and shown permanently in place of the video wherever autoplay is unavailable or disabled (see Mobile behavior and Accessibility, §11). Deliberately a *different* image from the Hero's black-and-white facade shot, so the page doesn't feel like it's repeating itself.
- **Play behavior**: Desktop/tablet — autoplay, muted, looped, `playsInline`, starts as soon as the section is within one viewport-height of scrolling into view (not on initial page load, see Loading strategy). No visible start delay or fade-up from black; the video should already be playing by the time it's ~50% scrolled into view.
- **Controls**: Minimal by design — a single small mute/unmute icon toggle (Lucide line icon, per `design-system.md` §6), bottom-right corner, low-opacity until hovered/focused. No visible scrubber, no play/pause button, no timestamp, no volume slider — this is a looping ambient scene, not a media player. The video has no meaningful narrative audio track to control beyond ambient sound, so a single mute toggle is sufficient.
- **Mobile behavior** (<768px): **Do not autoplay.** Show the poster image full-bleed exactly as a static image (same treatment as a hero-style image, `object-fit: cover`) with a single small, centered play icon (thin-line circle, per icon spec). On tap, the video loads and plays inline, muted by default, with the same mute/unmute toggle available. This avoids the mobile-data cost of autoplaying a video most visitors on cellular connections never asked for, and sidesteps iOS/Android autoplay-restriction inconsistencies entirely rather than working around them.
- **Loading strategy**: The `<video>` element's `src` is not attached until an IntersectionObserver reports the section is within one viewport-height of the visible scroll position — nothing about this section should load, buffer, or consume bandwidth before the visitor is close to seeing it. `preload="none"` (desktop/tablet) so the browser doesn't speculatively fetch it on page load. On mobile, the video source loads only after the explicit tap-to-play interaction described above — never speculatively.
- **Performance considerations**: The source file (`refuge61-teaser.mp4`, 262MB as delivered) **must** be re-encoded before this section ships — target under 12MB for a ~15–30 second loop, H.264 `.mp4` (broad compatibility) with a VP9/AV1 `.webm` alternate for browsers that prefer it (smaller file, same visual quality). Because this section is lazy-loaded well below the fold, it must never be allowed to compete with the Hero image for LCP (Largest Contentful Paint) — confirm via Lighthouse/PageSpeed that the video element is excluded from the LCP candidate list. The video should pause automatically (via the same IntersectionObserver) when scrolled out of view, to avoid unnecessary CPU/battery drain from an off-screen looping video.

---

## 7. Gallery Preview

- **Layout**: Asymmetric editorial grid, not a uniform matrix — one large tile (occupying roughly a 2×2 area) paired with five standard tiles around it, arranged so the eye lands on the large tile first, echoing a magazine spread rather than a social-media grid. Generous gutters (`space-4`, 32px) between tiles — no hairline borders, no drop shadows (per `design-system.md` §4, cards/tiles rely on whitespace alone for separation).
- **Number of images**: **6**. **Revised 2026-08-07 per Mathieu Bonnier's feedback** — the original 6 leaned too heavily on the lodge as an object (a bathhouse exterior, a corridor, a bedroom: half the grid). Three of six were replaced with images of people actually living the week; see `asset-library.md` §8 for the full before/after and sourcing. The six shown now, in display order:
  1. `gallery-01-aerial-sunrise.jpg` — **large tile** (unchanged)
  2. `gallery-02-ski-group.jpg` — a group of friends on cross-country skis in front of the lodge
  3. `gallery-03-aurora-evening.jpg` — the aurora over the lit cabin at night
  4. `gallery-04-outdoor-cooking.jpg` — friends gathered around an open-fire cooking pot
  5. `gallery-05-ski-touring-portrait.jpg` — two people pausing together while ski touring at sunset
  6. `gallery-08-ski-touring-sunset.jpg` — a ski track leading toward the estate at sunset (unchanged; a wide landscape "journey" shot, distinct enough from #5's close portrait to coexist)
- **Image sizes**: Large tile ≈ 720×900px effective display size at desktop width (4:5 ratio, scales with viewport); standard tiles ≈ 340×425px effective (same 4:5 ratio) — all tiles share the 4:5 ratio regardless of size, only the scale differs, so the grid stays visually coherent.
- **Hover behavior**: **No scale/zoom transform** — consistent with the "an editorial photograph doesn't wiggle" principle carried through this entire spec (see §5). On hover/focus, a small expand icon (Lucide, line style, `color-snow` on a subtle dark circular backdrop) fades in at the tile's bottom-right corner over 200ms, and the cursor becomes a pointer — signaling the tile is interactive (opens a full-size lightbox view) without moving or scaling the photograph itself.
- **Mobile adaptation** (<768px): Single column, full-bleed-minus-margin width, all 6 images in the same order, large tile first — the "large vs. standard" size distinction collapses on mobile (every tile becomes the same width, still 4:5 ratio) since there's no room for an asymmetric layout at that width. `space-3` (24px) gap between stacked tiles instead of `space-4`.

---

## 8. Contact CTA

- **Layout**: Centered single column, not a split panel and not full-bleed imagery — the quietest, simplest layout on the page. Max content width 560px, centered within the section.
- **Copy direction**: One headline, 4–8 words — **"Your week begins here."** (revised 2026-08-07 per Mathieu Bonnier's feedback; was "Begin your stay at REFUGE61," which read as hospitality-booking language). One short supporting line: "Write to us, and we'll reply personally." Below that: a `mailto:` link styled as a button (see the note below on why this shipped instead of the form originally specified here) — no dropdowns, no date pickers, no multi-step flow.
- **Button placement**: Beneath the supporting line, `space-8` (64px) gap above it, intrinsic width (not full-width — a short label like "Start a conversation" stretched to 560px would look heavy, and Hero's CTA is also intrinsic-width, so this keeps the page's two CTAs visually consistent with each other). Label: **"Start a conversation"** (revised 2026-08-07; was "Send Enquiry"). This is the **only** solid-fill primary button (`color-forest` fill, per `design-system.md` §4) anywhere on the homepage — every other CTA on the page (Hero, Gallery expand icons) is a ghost or icon-only affordance, so this one button visually reads as the page's actual destination.
- **Note**: this section originally specified a 3-field Name/Email/Message form (see history below); it shipped as a `mailto:hello@refuge61.com` link instead, since a form with no backend to receive submissions isn't more functional than a link that actually opens the visitor's mail client. `project-brief.md` §4 still hasn't confirmed whether REFUGE61 is a bookable rental or an invitation-only private retreat — the `mailto:` approach works under either model without needing that answer first.
- **White space**: `space-20` (160px) vertical section padding, matching Hero/Philosophy rather than the standard `space-16` — this section should feel spacious and unhurried, not cramped into a "final form to fill out" register.
- **Background**: Solid `color-cream`, **no photograph**. This is a deliberate, load-bearing choice carried directly from `design-concepts.md`'s Concept 1 spec: after five sections of imagery (including the video), ending on stillness and silence reads as confidence, not as an unfinished template. Do not add an image here even if one seems available — the absence is the point.

---

## 9. Responsive Rules

**Breakpoints** (consistent across the whole spec):

| Name | Range |
|---|---|
| Mobile | 0–767px |
| Tablet | 768–1023px |
| Desktop | 1024–1439px |
| Large Desktop | 1440px+ (content width caps at 1440px per `design-system.md` §3; beyond this, margins grow, content does not) |

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Navigation | Transparent over Hero, logo left, links right, hard color-swap (not crossfade) once scrolled past the Hero | Same as desktop, link spacing tightened slightly | Logo only + single menu icon (Lucide, line style); tapping expands a full-screen `color-snow` overlay menu with stacked links in `heading-s` size |
| Hero | Full composition, `display-xl` headline, scroll indicator visible | Same crop, `display-l` headline | Tighter crop (`object-position` shift, §3), `display-m` headline, full-width CTA button, scroll indicator hidden |
| Philosophy | 55/45 image/text split | Same split ratio, text block font drops one step if needed to avoid excessive line-wrap | Stacks vertically — image full-width first (4:5 crop), text block beneath, `space-8` gap between them, pull-quote max-width constrained to the mobile grid margin |
| Experience | 3-column grid | 3-column grid, narrower gutters | Single column, stacked Move → Gather → Reset, each image full-width (4:5) |
| Cinematic Video | 85vh, autoplay, full controls | Same as desktop | No autoplay — static poster + tap-to-play (§6) |
| Gallery Preview | Asymmetric grid, 1 large + 5 standard | Same grid, tiles scale down proportionally | Single column, all 6 tiles equal width, stacked (§7) |
| Contact CTA | Centered 560px column | Same, column width may reduce to ~480px | Full-width minus mobile grid margin, form fields stack (already single-column by default) |

General adaptation principles: nothing on the page should ever crop a photograph in a way that removes its subject (always verify `object-position` per image, don't rely on default centering); nothing should require horizontal scrolling at any breakpoint; touch targets (buttons, the mute toggle, gallery expand icons) must be at least 44×44px on Mobile/Tablet regardless of their visual size.

---

## 10. Motion Design

Every motion value below follows the same governing rule as `design-system.md` §7: **slow, not snappy; fade-and-rise, not slide-and-bounce; triggered by scroll position, not page load.** This spec adds the specific per-section values developers need — nothing here should introduce a new easing curve or pattern beyond what's below.

| Motion type | Where used | Duration | Easing | Notes |
|---|---|---|---|---|
| **Fade** (opacity only, no transform) | Philosophy section (image + text together) | 800ms | `cubic-bezier(0.16, 1, 0.3, 1)` | The one deliberate exception to "fade + rise" — see §4 |
| **Rise** (fade + 16–24px upward translate) | Experience pillars (staggered), Gallery tiles (staggered), Contact section | 600–700ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Standard entrance pattern per `design-system.md` §7 |
| **Image reveal (Hero only)** | Hero image, first paint | 1000ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Opacity 0→1 combined with scale 1.03→1.0 — the only scale-based motion in the entire spec, reserved for the single first-paint moment |
| **Hover** | Hero/CTA buttons, links, Gallery expand icon, Video mute toggle | 200ms | `ease` | Color/opacity transitions only — never a scale/zoom on a photograph (Experience and Gallery images explicitly exclude hover-scale, see §5/§7) |
| **Page transition** | N/A — single-page homepage, no route changes within this build | — | — | Nav links scroll-to-anchor with native smooth scroll (or a JS-driven scroll matching the `ease-out-expo` curve above if native smooth-scroll timing feels inconsistent across browsers). If the site later grows beyond one page, inter-page transitions should be a simple crossfade (~400ms) — out of scope for this build. |
| **Video transition** | Cinematic Video section, entry into view | 400ms | `ease` | Poster image crossfades to the playing video once autoplay begins (avoids a hard visual pop from static frame to motion) |

**What to avoid, restated for implementation**: no spring/bounce easing anywhere; no more than one parallax-style effect on the page total (none are specified in this build — if one is added later, it must be a single element, per `design-system.md` §7); no auto-advancing carousels; no count-up numbers or celebratory micro-interactions; no scroll-jacking (the page must scroll natively at native speed — motion responds to scroll position, it never overrides scroll itself).

---

## 11. Accessibility

- **Heading hierarchy**: One `<h1>` per page — the Hero headline. `<h2>` for each major section's implicit heading (even where visually the "heading" is a pull-quote or a single word — the underlying markup should still carry a proper, visually-hidden-if-needed `<h2>` for Philosophy, Experience, Gallery, Contact, so the page's outline is coherent to assistive tech even though it's minimal to sighted visitors). `<h3>` for the three Experience pillar labels (Move/Gather/Reset). No heading level should be skipped.
- **Alt text strategy**: Every content photograph gets a real, descriptive alt attribute (one clear sentence, not a keyword list) — e.g. `hero-bw-frost-facade.jpg`: "Frost-covered carved timber facade of the REFUGE61 lodge in black and white." Decorative-only elements (the scroll indicator line, hover-state icons) get `alt=""` so they're skipped by screen readers. The Cinematic Video's poster image and the video itself both need alt/labeling: the `<video>` element should have an `aria-label` describing the scene (e.g. "Aerial winter footage of the REFUGE61 estate") since there's no dialogue/narrative track to transcribe.
- **Keyboard navigation**: Every interactive element (nav links, mobile menu toggle, Hero CTA, video mute toggle, video mobile play button, Gallery expand icons, Contact form fields and submit button) must be reachable via Tab in a logical top-to-bottom, left-to-right order, and operable via Enter/Space. The Gallery lightbox (if built) must trap focus while open and return focus to the originating tile on close, with Escape closing it.
- **Contrast**: All Hero/Video overlay text (white text over the bottom scrim) must be verified at the actual scrim opacity values specified in §3/§6 to meet WCAG AA — minimum 4.5:1 for the sub-line/caption text size, 3:1 for the large headline. If any specific crop/scrim combination fails this in testing, darken the scrim locally rather than changing the type color. Body text on `color-snow`/`color-cream` backgrounds (Philosophy, Contact) using `color-charcoal` already passes AA comfortably per the palette in `design-system.md` §2.
- **Focus states**: Visible focus ring on every interactive element — 2px solid `color-forest`, 2px offset from the element, never the browser default blue outline and never `outline: none` without a replacement. On dark/image backgrounds (Hero CTA, Video controls), the focus ring switches to `color-snow` for visibility.
- **Reduced motion support**: Every animation in §10 must respect `prefers-reduced-motion: reduce` — under that setting, all fade/rise entrances become instant (no transition) or a simple, fast opacity fade with no transform; the Hero's first-paint scale animation is disabled (image simply appears); the Cinematic Video does **not** autoplay under reduced motion regardless of device/breakpoint — it always falls back to the static poster + tap-to-play pattern already specified for mobile in §6.

---

## 12. SEO

- **Title tag**: `REFUGE61 — A Refuge Above the Treeline` (pattern: Brand — short evocative line; adjust the line to match whatever final Hero headline copy is chosen, keep total length under ~60 characters).
- **Meta description**: One sentence, under 155 characters, evocative rather than feature-listing — current copy: "An old hunting lodge and bathhouse above the treeline — shared for a week at a time." (revised 2026-08-07 to drop "reimagined"/"retreat," per Mathieu Bonnier's language principle — see §8-equivalent guidance in the implementation report for this phase). Avoid stuffing amenity keywords; this page's whole positioning is anti-commercial, and the meta description should read that way too.
- **Heading structure**: Matches §11 exactly — one `<h1>` (Hero), `<h2>` per major section, `<h3>` for the three Experience pillars. Do not introduce additional heading levels purely for SEO keyword coverage; a coherent, minimal outline is better for both accessibility and search than an artificially expanded one.
- **Image alt strategy**: Reuse the descriptive, sentence-form alt text from §11 as the primary SEO image-text signal — descriptive alt text serves both purposes simultaneously, so there's no separate "SEO alt text" to maintain. File names in `public/images/` are already semantic (`architecture-bathhouse-exterior-01.jpg`, not `IMG_0042.jpg`) per the renaming done in `asset-library.md`, which also helps image search indexing.
- **Schema suggestions**: `Organization` or `LodgingBusiness` (schema.org) as the base type for the site, populated with name, logo (`public/logos/refuge61-logo-black-white.png` once an SVG export exists, per the action item in `asset-library.md` §10), and location once confirmed (see `project-brief.md` §4 — region isn't yet finalized). If the client confirms this is a bookable rental rather than invitation-only, upgrade to `VacationRental` or `Resort` schema with an `amenityFeature` list once the Experience pillars' underlying details (capacity, bedroom count) are confirmed. Do not publish schema fields with placeholder/guessed data (e.g. a fake address or price) — omit a field entirely rather than fabricate it, and add it once the client confirms.
- **Open Graph / social preview**: `og:image` should use `hero/hero-aerial-sunrise.jpg` (color, not the black-and-white hero) — a link preview card benefits from a warmer, more immediately legible image than the page's own monochrome hero, since it has no surrounding page context to lend it meaning.

---

## 13. Performance

- **Image optimization**: Every image in `public/images/` should be run through a pre-processing pass (before or during the Next.js build, not left to runtime alone) to cap maximum source dimensions at ~2500px on the long edge — several originals in `asset-library.md` are 6000×4000px professional camera files (10–13MB each), which is far beyond what any layout in this spec displays; resizing the *source* files, not just relying on `next/image`'s runtime resizing, reduces both build-time processing cost and the risk of accidentally serving a multi-MB original if a component is ever misconfigured.
- **Video optimization**: Per §6 — re-encode `refuge61-teaser.mp4` from 262MB down to a ~12MB target, `.mp4` (H.264) primary with a `.webm` alternate. The two shorter handheld clips (`lifestyle-clip-01.MOV`, `lifestyle-clip-02.MOV`) are not used anywhere in this homepage spec and do not need optimization for this build.
- **Lazy loading**: Every image below the Hero uses standard lazy loading (Next.js `<Image>`'s default `loading="lazy"` behavior) — only the Hero image is exempt (see below). The Cinematic Video section's source loads only on proximity/interaction per §6, not on page load.
- **Next.js Image usage**: Use `next/image` for every photograph on the page (never a raw `<img>`). Hero image gets `priority` (disables lazy-loading, hints the browser to fetch it immediately as the LCP candidate) and an explicit `sizes` attribute matching its full-bleed behavior at each breakpoint. All other images get `sizes` attributes matching their actual rendered width at each breakpoint (per the tile sizes specified in §7) so the browser never downloads a desktop-sized asset on a mobile viewport. Use `fill` with a defined aspect-ratio container for every image (Hero, Philosophy, Experience, Gallery) to guarantee no layout shift while the image loads.
- **Caching**: All static assets in `public/` (images, video, logos) should be served with long-lived, immutable `Cache-Control` headers (standard for hashed/versioned static assets on Vercel/Next.js's default deployment target) — no custom caching logic needed beyond the platform default, provided filenames change if/when an asset is replaced.
- **Core Web Vitals strategy**: **LCP** — the Hero image (`priority`-flagged, pre-optimized, served in modern formats via `next/image`'s automatic AVIF/WebP negotiation) should be the LCP element, targeting under 2.5s; the lazy-loaded Cinematic Video section must never become an LCP candidate (verify in Lighthouse). **CLS** — every image/video container has a defined aspect ratio or fixed dimensions before content loads, eliminating layout shift as images pop in. **INP** — motion in this spec is CSS-transition/IntersectionObserver-driven, not scroll-jacking or main-thread-heavy JS (§10), which keeps interaction responsiveness unaffected by the page's animation; avoid any scroll-linked JavaScript that runs on every scroll-frame without throttling.

---

## 14. Implementation Checklist

**Build**
- [x] Build Navigation (transparent → solid crossfade, mobile overlay menu)
- [x] Build Hero (image, headline, sub-line, CTA, scroll indicator, responsive crop behavior)
- [x] Build Philosophy (asymmetric split, pull-quote, single fade animation)
- [x] Build Experience (Move / Gather / Reset, 3-col → 1-col, staggered reveal, non-interactive images)
- [x] Build Human Experience section (§5a — added 2026-08-07, full-bleed image + short statement)
- [x] Build Cinematic Video section (lazy-loaded source, poster fallback, autoplay desktop/tap-to-play mobile, mute toggle, IntersectionObserver play/pause)
- [x] Build Gallery Preview (asymmetric grid, 6 curated images, expand-icon hover; no lightbox — decorative expand icon only, by design)
- [x] Build Contact CTA (centered column, `mailto:` link styled as the single solid CTA button — not the 3-field form originally specified, see §8 note)
- [ ] Build Footer (logo, minimal icon row, copyright — per `homepage-plan.md` §7)

**Assets**
- [ ] Pre-resize all source images to ≤2500px long edge before/in the optimization pipeline
- [x] Re-encode `refuge61-teaser.mp4` to target <12MB — done 2026-08-06, 262MB → 11.3MB (.mp4 only; a `.webm` alternate is still an open, non-blocking optimization)
- [ ] Convert the two `.heic` files flagged in `asset-library.md` §11 if either is needed for this build (none currently are — confirm before removing this item)
- [ ] Export at least the primary wordmark logo as SVG (flagged in `asset-library.md` §10) before implementing the Navigation logo

**Quality**
- [ ] Responsive Testing — verify all breakpoints in §9, especially Hero/Video crop behavior and Gallery grid collapse
- [ ] Accessibility Testing — heading outline, alt text audit, full keyboard pass, focus-ring visibility, `prefers-reduced-motion` behavior, contrast check on all text-over-image instances
- [ ] SEO Testing — title/meta/OG tags present, heading hierarchy matches §11/§12, schema validates (if implemented)
- [ ] Performance Optimization — Lighthouse pass confirming LCP target, zero CLS from images/video, video excluded from LCP candidacy, all images served via `next/image` with correct `sizes`
- [ ] Motion QA — every animation matches the duration/easing values in §10, nothing bounces, nothing autoplays with audio, video pauses when scrolled out of view
- [ ] Content QA — every copy block is at or under the word-count caps specified per section (§3–§8); if real copy exceeds a cap, that's a signal to edit the copy, not to change the cap
- [ ] Collaborative review with Mathieu Bonnier before merge — per his stated preference for a collaborative process, this build should be reviewed against this spec (and against him directly) before being considered final, not shipped as a unilateral interpretation of it
