# REFUGE61 — Homepage Design Concepts (Phase 4)

Status: **Creative direction, no UI built.** This document proposes three distinct visual/creative treatments of the single homepage structure already frozen in [`homepage-plan.md`](./homepage-plan.md) (Navigation → Hero → Philosophy → Experience → Gallery Preview → Contact). None of the three change *what* the page says or *why* each section exists — that structure and the asset inventory it draws on (see [`asset-library.md`](./asset-library.md)) are shared source-of-truth across all three concepts. What changes between them is *how it feels to scroll through it*: pacing, image treatment, typographic voice, and how much the interface gets out of the way of the photography.

All three stay inside the brand toolkit defined in [`design-system.md`](./design-system.md) — the Fraunces/Inter type pairing and the stone-grey/forest-green/sage-green/timber palette drawn from the logo suite. No concept invents new fonts or new colors; they differ in *emphasis and proportion* — how much white space, how dark the palette runs, how the grid behaves — not in the underlying toolkit. That's a deliberate choice: it keeps all three concepts genuinely comparable, and genuinely buildable from the same design-system foundation, whichever one is chosen.

No code, components, or copy are produced here — only creative direction, described in enough detail that Phase 5 could be briefed from this document alone.

## Evaluation lens — what Mathieu has already told us

Before the three concepts: five requirements Mathieu has stated directly, restated here so the final recommendation can be checked against them plainly rather than argued from taste:

1. **Very little text** — the interface should not need paragraphs to make its case.
2. **Minimalist** — restraint as the default, not an occasional flourish.
3. **Photography first** — the images carry the brand; UI should frame them, not compete with them.
4. **Storytelling** — this isn't a spec sheet or a room-by-room amenities list; it should read as a place with a history and a mood.
5. **Not a commercial hotel** — REFUGE61 needs to avoid the visual vocabulary of hospitality-brand marketing (badges, urgency, "book now" energy, stock-photo gloss).
6. **Timeless Scandinavian design** — the opposite of trend-driven; should look as considered in ten years as today.

Each concept below is scored against these six at the end of its section, before the final comparison and recommendation.

---

## Concept 1 — Editorial Scandinavian

**Mood keywords**: Quiet. Considered. Unhurried. Paper-white. Kinfolk. Negative space. Restraint. A held breath.

### Hero direction

A single still photograph, full-bleed, held on screen with almost nothing else happening: `hero/hero-bw-frost-facade.jpg` — the black-and-white, frost-covered timber facade. Choosing the monochrome image over the aerial-sunrise color shot is the concept's first statement of intent: color is being withheld, which makes the one accent color that *does* appear later (a single sage-green underline, a single forest-green button) feel considered rather than decorative. A short headline sits in the lower-left third in `display-xl` Fraunces, in `color-snow`, no scrim beyond a whisper-thin gradient at the very bottom edge — the image is trusted to hold its own without being darkened for legibility. No sub-line. No scroll-chevron animation. The page simply begins, the way a well-edited magazine spread begins on its opening page rather than announcing itself.

### Navigation

Nearly invisible until needed. Transparent, logo mark only in the top-left corner at a small, confident size (no oversized brand-flexing), three text links top-right in `eyebrow` styling with generous letter-spacing and even more generous spacing *between* the links themselves — the whitespace between "Philosophy" and "Experience" is doing as much brand work as the words. No button in the nav at all — even "Enquire" appears as a plain text link, identical in weight to the other three. The bar never gains a solid background on scroll in this concept; instead the logo and links simply swap to `color-charcoal` the moment the hero's dark image ends, a hard cut rather than a crossfade, echoing a magazine's page-turn rather than an app's UI chrome.

### Section flow

- **Philosophy**: the emotional and typographic centerpiece of the whole concept. `interiors/interiors-bedroom-01.jpg` (the mounted reindeer head) sits at roughly 50% width, the remaining half is almost entirely empty `color-snow`, with the 60–100 word philosophy paragraph set in Fraunces italic at `display-m` size — set as a pull-quote, not a paragraph block, letter-spacing loosened slightly, line-length capped tight (45–55 characters) so it reads like a caption in a design annual, not marketing copy.
- **Experience**: the three-pillar grid from `homepage-plan.md` is kept, but the images are given far more room than the text — each pillar's `heading-s` label is reduced to a single word ("Bathhouse", "Living", "Ski Touring") set in tracked-out uppercase Inter, sitting *below* a large, uncropped image with acres of margin around it. No supporting sentence per pillar in this concept — the single word plus the image is the entire statement.
- **Gallery Preview**: not a dense grid — a slow, wide sequence. Five of the eight curated gallery images, shown large, one or two per screen-width row with vast gutters between them, so scrolling through the gallery feels like turning pages rather than scanning a wall of thumbnails. The remaining three images are held back for a future full gallery page rather than crammed in.
- **Contact**: the quietest section on the page — no image at all, just `color-cream` background, a four-word headline, and an underline-style form. The absence of a photograph here is intentional: after four sections of imagery, silence reads as confidence, not as an empty template.

### Typography hierarchy

Fraunces carries almost the entire page — headlines, the Philosophy pull-quote, even the Gallery section label — with Inter reserved almost exclusively for navigation, captions, and the contact form. This is the one concept where the serif is allowed to dominate rather than share the page evenly with the sans; it's what makes the page read as "editorial" rather than "corporate minimal."

### Image usage

Fewer images shown larger, always as complete, uncropped compositions respecting the photograph's native framing (see `design-system.md` §5) rather than force-fit into a grid system. No hover-scale animation on any image in this concept — an editorial photograph doesn't wiggle when you look at it.

### Button style

Text-only. No filled buttons appear anywhere on the page except the single Contact-section submit button (`color-forest` fill) — the one moment the page asks for anything, and even then it's understated: no icon, no arrow, just a word.

### Motion

The slowest and least frequent of the three concepts. Sections fade in (no rise/translate — even the 16–24px upward motion in `design-system.md` §7 is dropped here in favor of a pure opacity fade) over 800ms, and only once per section — no staggered multi-element choreography. Motion is present but almost subliminal; a visitor should finish the page unsure whether they noticed any animation at all.

### White-space strategy

The defining feature of this concept. Section vertical padding is stretched beyond the `space-16` default in `design-system.md` to `space-20` (160px) throughout, not just around the hero. Content blocks are frequently narrower than the full grid (max 60–70% width) even on wide viewports, leaving deliberate empty margin on both sides rather than stretching content edge-to-edge to "fill" a large screen.

### Color usage

Almost monochrome. `color-snow`, `color-cream` and `color-charcoal` carry 95% of the page; `color-forest` appears exactly once, on the Contact button; `color-sage` appears only as the link-hover underline. `color-timber` is not used at all in this concept — it's held in reserve as "too warm" for the editorial register.

### CTA style

Singular and quiet. One meaningful button on the entire page (Contact submit); every other call-to-action is a plain text link. This scarcity is the point — when there's only one button, it doesn't need to shout.

### Overall atmosphere

Walking into a beautifully composed magazine feature about a place, not a website *for* that place. The visitor is a reader before they're a prospective guest.

### Why this fits REFUGE61

This is the most literal execution of "very little text" and "minimalist" of the three concepts — it treats restraint as the entire design strategy rather than one ingredient among several. It's also the concept least likely to read as "commercial hotel": hospitality marketing relies on density (badges, ratings, urgency, stacked CTAs), and this concept has almost none of that vocabulary available to it even by accident. The monochrome hero and the willingness to leave the Contact section imageless both signal a level of confidence that reads as private and considered rather than promotional — which matches the "not a commercial hotel" instruction more directly than either of the other two concepts.

---

## Concept 2 — Cinematic Nature

**Mood keywords**: Immersive. Elemental. Dark. Slow-breathing. Weather. Scale. Isolation. Widescreen.

### Hero direction

Full-screen, muted, looping video — `videos/refuge61-teaser.mp4` (compressed per the action item in `asset-library.md` §9), with `hero/hero-aerial-winter-wide.jpg` as the poster frame so the very first paint is instant even before the video buffers. A dark gradient scrim (`color-charcoal` at low opacity, strongest at the bottom, near-zero at the top) sits permanently over the video, deeper than the standard scrim spec in `design-system.md` §5, because text needs to stay legible over *moving* footage, not a still frame. Headline is minimal — 3–4 words, `display-xl`, `color-snow`, centered rather than left-aligned this time, because a centered mark reads as a title card over cinema footage in a way left-alignment doesn't. No CTA button visible in the first viewport at all — just the title card and, after a pause, a single thin down-indicator. The visitor is meant to watch before they're asked to do anything.

### Navigation

Minimal to the point of near-absence for the first screen: logo mark only, small, top-center or top-left, no visible link labels at all until the visitor scrolls — replaced by a single small menu icon (per the Lucide line-icon spec in `design-system.md` §6) that expands into a full-screen dark takeover menu on tap, rather than a persistent link row. This is the one concept where hiding the navigation entirely for the first several seconds is correct: a cinematic opening shouldn't share the frame with a link list.

### Section flow — every section in detail

- **Hero** (detailed above): video loops silently, no controls, no visible scrubber — it should not read as "a video player embedded in a page" but as the page itself being a window.
- **Philosophy**: a hard cut from the moving hero to a completely still, held frame — `story/story-roses-on-ice.jpg` — full-bleed, with the philosophy paragraph appearing in `color-snow` directly over a bottom scrim, rather than split alongside the image as in Concept 1. The contrast between the *moving* hero and the *frozen* stillness of this first cut is the section's whole idea: motion, then a breath held.
- **Experience**: instead of a three-column grid, this concept treats the three pillars as three consecutive **full-screen** moments the visitor scrolls through one at a time — `architecture/architecture-bathhouse-exterior-01.jpg`, then `interiors/interiors-livingroom-04.jpg`, then `story/story-ski-tracks-landscape.jpg` — each occupying its own 100vh screen with a dark scrim, a one-word label, and nothing else, so scrolling through Experience feels like advancing through scenes rather than scanning a page section. This is the most screen-real-estate-hungry version of Experience across all three concepts.
- **Gallery Preview**: rather than a static grid, the 8 curated gallery images are presented as a slow, edge-to-edge horizontal filmstrip — a single row that can be scrolled or auto-advances very slowly (8+ seconds per image, crossfade transition, pausable, and disabled entirely under `prefers-reduced-motion`) — reinforcing the "cinematic" idea even in the one section that's structurally a gallery rather than a scene.
- **Contact**: cuts back to near-total darkness — solid `color-charcoal` background, a single `hero/hero-bw-frost-facade.jpg` used small and quiet as a corner accent rather than a background, `color-snow` text, and the one filled button in `color-forest`. After several minutes of immersive scale, the contact section is deliberately the smallest, most intimate moment on the page.

### Typography

Inter carries more of this concept's weight than Fraunces does — over dark, moving or high-contrast imagery, a grotesque sans holds up more reliably than a delicate high-contrast serif, whose thin strokes can flicker or vibrate against a busy background. Fraunces is reserved for the Hero title card and section dividers only, where it sits over a controlled, still frame.

### Image usage

Screens, not tiles. Every image (and the video) is treated as a scene the visitor stands inside of — full-bleed, no captions overlaid on the image itself, no hover-scale micro-interactions (they'd feel trivial next to a moving hero). This concept uses the *fewest total images* of the three — depth over breadth, since each one gets an entire screen to itself.

### Motion

The most active of the three concepts, but "active" here means *slow*, not frequent: crossfades between full-screen scenes (1200–1500ms, well beyond the `design-system.md` §7 defaults, because a scene change should feel like a dissolve, not a snap), the gallery filmstrip's slow auto-advance, and a very subtle continuous parallax on the static hero-poster/philosophy image (a single element, respecting the "no more than one parallax element per screen" rule in `design-system.md` §7). No staggered fade-up choreography — text simply appears, held, then the scene changes.

### White-space strategy

Inverted from Concept 1: this concept has almost no *empty* white space (most screens are edge-to-edge image or video) but a great deal of *temporal* space — long holds on each scene, generous pauses between transitions. The "breathing room" here is in time, not in margin.

### Color usage

Dominated by `color-charcoal` and darkened, desaturated imagery; `color-snow` appears only as text and the thin scrim gradients; `color-forest` appears exactly once, the Contact button, exactly as in Concept 1 — the *only* color-usage discipline shared identically across all three concepts, because a single, rare accent color is a design-system rule, not a per-concept choice.

### CTA style

Deferred and singular. No CTA appears until the visitor has moved through the full scene sequence; the Contact button is the only solid button on the page, same as Concept 1, but arrives after a much longer, more immersive build-up.

### Why this fits REFUGE61

This concept delivers "storytelling" and "photography first" most viscerally of the three — it's the closest thing to physically standing on that plateau at dawn. It also has real appeal for a property whose strongest asset (per `asset-library.md`) is a genuinely well-shot brand teaser film that would otherwise sit unused. But it carries the most tension with Mathieu's other stated requirements: full-screen autoplay video with dark cinematic overlays is a vocabulary shared with luxury-hotel and resort marketing sites — the very association Mathieu has asked to avoid — and "timeless" sits uneasily with a technique (immersive scroll-hijacking video, filmstrip auto-advance) that is very much of this decade's web-design trends rather than a decade-agnostic one. It's also the highest-risk concept technically: the teaser file is 262MB unoptimized, autoplay video has real mobile data/battery/accessibility costs, and a mistimed crossfade or a stalled video buffer reads far worse here than a slow-loading still image does in Concept 1.

---

## Concept 3 — Architectural Retreat

**Mood keywords**: Precise. Structural. Material. Considered. Quiet luxury. Geometry. Craft.

### Hero direction

A split composition rather than one single image — the hero screen is divided into two unequal vertical panels (roughly 60/40), one holding `hero/hero-aerial-sunrise.jpg`, the other holding `architecture/architecture-bathhouse-exterior-01.jpg`, meeting at a hard vertical edge with no gradient blend between them. The composition itself states the concept's thesis before a word of copy does: two buildings, one estate, deliberately shown as distinct architectural objects rather than blended into a single mood shot. Headline sits inside the smaller panel, small and precisely placed (not spanning the full width), set tight against the panel's edge — architectural, not floating.

### Navigation

Structured and grid-aligned rather than minimal-to-invisible (the opposite instinct from Concept 2). A visible thin 1px `color-stone` rule sits beneath the nav bar at all times, even over the hero — a drafting-line detail that recurs throughout this concept (see Section flow) and immediately signals "considered geometry" as the visual language. Links are evenly spaced against the underlying 12-column grid rather than loosely kerned as in Concept 1; the effect is precise rather than airy.

### Section flow — every section in detail

- **Hero** (detailed above): the two-panel split is itself the section's defining structural idea, carried forward into every section below.
- **Philosophy**: the 1px `color-stone` rule from the nav reappears, this time as a vertical divider splitting the section exactly at the grid's two-thirds mark — `interiors/interiors-livingroom-04.jpg` (the log-wall corridor with its arches, chosen here specifically for its own strong architectural geometry) fills the larger side, the philosophy text sits in a strict, grid-locked column on the smaller side — no loose vertical centering as in Concept 1, the text block's top edge aligns exactly with the image's top edge.
- **Experience**: a true structural grid — not three loosely-spaced columns (Concept 1) or three full-screen scenes (Concept 2), but a tight, magazine-contact-sheet-style grid of 5–6 images at once (adding a few extra architecture/interior frames beyond the core three pillars — e.g. `architecture/architecture-lodge-exterior-07.jpg` and `interiors/interiors-bedroom-02.jpg` alongside the three pillar images), uniform gutters, thin `color-stone` hairlines between cells rather than open whitespace gaps — the section reads as a set of architectural drawings/plates laid out on a light table.
- **Gallery Preview**: the most geometrically strict version of this section across all three concepts — a true, evenly-gridded matrix (not the asymmetric masonry described as the default in `homepage-plan.md` §6) of all 8 curated images at uniform size, every caption (if shown at all) reduced to a two-word material/location tag in small-caps Inter ("Bathhouse — Stone", "Bedroom — Timber") rather than a sentence, reinforcing the "minimal captions" characteristic of this concept specifically.
- **Contact**: the split-panel logic from the Hero returns to close the page — one panel is the form, the other is `architecture/architecture-lodge-winter-01.jpg`, the same 60/40 (or here, inverted to 40/60) division, so the page visually rhymes with itself from open to close.

### Typography

The most restrained pairing of the three concepts in terms of *size contrast* — Fraunces headlines are held closer to `display-l`/`display-m` throughout rather than reaching for `display-xl`'s full scale (even in the Hero), because oversized display type would compete with the grid's own geometry for visual authority. Inter is used slightly more structurally here too — small-caps material tags, precise `eyebrow` labels on every image, a level of systematic labeling absent from the other two concepts.

### Image usage

Cropped deliberately to the grid rather than shown in native aspect ratio (the one concept that overrides the "respect the photo's native framing" default in `design-system.md` §5) — every image in the Experience and Gallery grids is cropped to the same 4:5 ratio without exception, because uniformity of shape is what makes the grid read as *architectural* rather than editorial. Hairline `color-stone` borders (1px) appear between grid cells — the one concept that uses any border at all, and only ever this one hairline weight.

### Motion

The most restrained and mechanical of the three — no fade-and-rise choreography; instead, grid cells reveal via a crisp opacity fade only (150–200ms, notably *faster* than either other concept's entrance motion, more like a hairline turning on than a photograph drifting into place), reinforcing precision over atmosphere. The bathhouse-vs-lodge split panels in Hero and Contact very subtly resize their ratio (60/40 to 55/45) on a slow scroll-linked transition — the only scroll-linked (rather than viewport-triggered) motion across all three concepts.

### White-space strategy

Structural, not generous — space is used to define grid boundaries (gutters, hairline-bordered cells) rather than as open emptiness the way Concept 1 uses it. A visitor should feel the presence of an underlying grid system at all times, even where the grid isn't visibly ruled.

### Color usage

The most neutral-heavy of the three — `color-stone` gets far more surface area here than in either other concept (hairlines, captions, secondary text), `color-charcoal` and `color-snow` carry the rest, and `color-forest` again appears exactly once, the Contact button — the one constant across all three concepts.

### CTA style

Same scarcity principle, delivered with more formality — the single Contact button sits inside its grid panel exactly as precisely placed as every other element on the page, rather than floating freely.

### Why this fits REFUGE61

This concept best serves the *architecture and craftsmanship* half of REFUGE61's story — the deliberate contrast between the heritage log lodge and the contemporary stone-and-glass bathhouse (identified as the property's clearest "design" narrative in `asset-library.md` §4) becomes the literal structural logic of the page, not just a caption. It satisfies "minimalist" and "photography first" credibly, and "quiet luxury" is close to a direct restatement of Mathieu's brief. Where it's weaker against his stated priorities: the grid's precision pulls the page toward showcasing the *building* — closer to an architecture portfolio or real-estate developer's site than a personal, storied "refuge," which sits slightly against "storytelling" and "not a commercial hotel" (a tightly gridded, uniformly-cropped, small-caption presentation is closer to the vocabulary of premium real-estate/hospitality marketing than either other concept, even though it avoids that vocabulary's usual gloss and color).

---

## Comparing the three

| | Concept 1 — Editorial Scandinavian | Concept 2 — Cinematic Nature | Concept 3 — Architectural Retreat |
|---|---|---|---|
| **Text density** | Lowest — near-silent | Low, but arrives in short bursts between long visual holds | Low, but systematized (labels/tags everywhere) |
| **Emotional register** | Quiet, personal, editorial | Immersive, dramatic, elemental | Precise, crafted, structural |
| **Primary asset used** | Still photography (B&W hero) | Video (teaser film) | Photography, cropped to grid |
| **Storytelling mode** | Curated stillness, one image at a time | Cinematic immersion, scene-to-scene | Architectural juxtaposition (old vs. new) |
| **Closest to "not a commercial hotel"** | Yes — most distant from hospitality-marketing vocabulary | No — closest to resort/hotel-brand film conventions | Partial — closer to real-estate/portfolio vocabulary |
| **"Timeless" risk** | Lowest — technique itself won't date | Highest — immersive-video scroll experiences are a current web-design trend | Low-moderate — grid systems date slowly, but feel more "agency portfolio, 2020s" than "Scandinavian, decades" |
| **Technical/production risk** | Lowest — mostly static images, already asset-ready | Highest — 262MB source video needs real compression work; autoplay video has performance/accessibility/mobile-data costs | Moderate — needs careful, consistent cropping across dozens of images to hold the grid together |
| **Best-served existing asset** | `hero-bw-frost-facade.jpg`, `interiors-bedroom-01.jpg` | `refuge61-teaser.mp4` | `architecture-bathhouse-exterior-01.jpg` vs. lodge exterior contrast |

---

## Recommendation: Concept 1 — Editorial Scandinavian

This is the strongest choice for Mathieu, and it isn't close.

Run back through his six stated requirements directly:

1. **Very little text** — Concept 1 is the only one of the three that treats text scarcity as its entire organizing principle rather than as one supporting characteristic. Concept 2 still needs title cards and scene labels to anchor a cinematic sequence; Concept 3 actually *adds* a new category of text (systematic material/location tags on every image) that doesn't exist in the other two.
2. **Minimalist** — Concept 1's white-space strategy (§ above) is the most literal execution of minimalism on offer: fewer images, shown larger, with more silence around them, including a Contact section with no image at all. Concept 3's minimalism is geometric rather than spacious — a grid is orderly, but an orderly grid full of hairline borders and captioned tiles is not the same thing as empty space, and reads busier at a glance than Concept 1 despite using the same restrained palette.
3. **Photography first** — Concept 1 and Concept 3 both qualify; Concept 2 partially trades this for videography, which is a different asset (and, per `asset-library.md`, the *weaker* asset — one usable but unoptimized teaser file, versus well over a hundred strong stills).
4. **Storytelling** — this is the one criterion where the case for Concept 1 needs to be made most carefully, because Concept 2 *feels* more obviously "cinematic story" on first read. But storytelling and immersion aren't the same thing: Concept 1's editorial pacing — one held image, one pull-quote, real silence between beats — is a slower, more literary form of storytelling, closer to how a magazine profile builds a place's character than how a tourism film does. Given Mathieu is explicitly steering *away* from tourism-film register (see next point), Concept 1's version of storytelling is the one that's actually compatible with his other stated constraints, not just his stated liking for "storytelling" in isolation.
5. **Not a commercial hotel** — the sharpest differentiator. Full-screen autoplay video with dark overlays and slow scene transitions (Concept 2) is, today, the default visual language of premium hotel and resort marketing sites — adopting it risks undercutting the "not a commercial hotel" instruction even while every individual element is tasteful. Concept 3's tight, uniformly-cropped grid leans toward architecture-portfolio/real-estate vocabulary. Concept 1's sparse, editorial, magazine-like pacing is the most distant of the three from anything a hotel brand's marketing team would typically produce.
6. **Timeless Scandinavian design** — Concept 1 is built almost entirely from techniques (large serif type, generous margins, a single still photograph held on screen, restrained color) that have looked "considered" for decades and carry no dependency on a current web-design trend cycle. Concept 2's core techniques — scroll-triggered full-screen video sequences, auto-advancing filmstrips — are legible as *this era's* web design in a way that risks aging faster than the property itself.

**On production risk**, worth stating plainly since it reinforces rather than complicates the creative case: Concept 1 is also the cheapest and lowest-risk to build well. It needs no video compression pipeline, no scroll-hijacking scene-transition engineering, and no discipline around cropping dozens of images to a uniform ratio — it asks for a small number of the library's *already-strongest* images, shown large, with editorial restraint. That's a rare case where the concept that best fits the brief is also the one with the fewest ways to go wrong in execution.

**One recommendation within the recommendation**: don't discard Concept 2's asset entirely. The brand teaser film is a real, well-produced piece of footage that would otherwise go unused. Once compressed, it could appear later — inside the Gallery lightbox, or as a single small looping clip embedded quietly within the Experience section's ski-touring pillar, muted and modest, rather than as the homepage's structural spine. That borrows Concept 2's best asset without adopting its "commercial hotel" risk. Similarly, Concept 3's split-panel "old lodge vs. new bathhouse" idea is worth keeping in reserve for a future dedicated property/architecture page, where its more structural, portfolio-like register is actually appropriate rather than in tension with the homepage's tone.

**Verdict**: build Phase 5 on Concept 1 — Editorial Scandinavian.
