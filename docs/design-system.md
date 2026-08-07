# REFUGE61 — Design System Foundation

Status: **Foundation, ready to build against.** This defines the visual language for the homepage (and everything after it) — typography, color, spacing, components, icons and motion. No UI is implemented yet; this is the reference the Phase 4 concepts and Phase 5 build should be judged against.

## 0. Design principles

Three rules everything below should be checked against:

1. **The photography is the brand.** Nothing in this system should compete with the imagery in `asset-library.md`. Typography, color and motion exist to frame the photos, not to decorate around them. When in doubt, remove a design element rather than add one.
2. **Warmth without clutter.** The source material sits between two poles — raw-log hunting-lodge heritage (taxidermy, dark timber, wool) and contemporary Scandinavian minimalism (stone, glass, negative space). The system should read as the second, furnished with the first — restraint as the default, warmth carried entirely by photography and one serif display face.
3. **Confidence, not decoration.** Scandinavian-editorial means large, unhurried, and quiet: big type, big images, wide margins, almost no ornament. If a component needs a shadow, a gradient, or a border to look finished, redesign the component.

## 1. Typography

### Typeface pairing

| Role | Typeface | Why |
|---|---|---|
| **Display / headlines** | **Fraunces** (variable, Google Fonts, free) | A warm, high-contrast serif with soft optical curves — reads as editorial and organic rather than corporate, and its variable axes (optical size, weight, "soft"/italic) give one family enough range for every headline in the system without introducing a second display face. |
| **Body / UI / labels** | **Inter** (variable, Google Fonts, free) | Neutral, highly legible grotesque sans built for screens. Stays out of the way of both the serif headlines and the photography. Use its variable weight axis instead of loading multiple static weights. |

Both are self-hostable via `next/font/google` with zero layout shift — no external font-loading calls at runtime, which matters for a photography-heavy, performance-sensitive homepage.

*(If the client has an existing licensed typeface from another part of the REFUGE61 brand system, swap it in for Fraunces before Phase 5 — nothing here is precious. The pairing logic — one warm serif display, one neutral sans workhorse — is the part to preserve.)*

### Type scale

Base: 16px / 1rem, line-height and tracking tuned per role rather than a single fixed ratio (large display type needs tighter tracking and a shorter line-height than body copy).

| Token | Size (desktop) | Size (mobile) | Weight | Line-height | Letter-spacing | Typeface | Use |
|---|---|---|---|---|---|---|---|
| `display-xl` | 96px / 6rem | 48px / 3rem | 400 | 1.0 | -0.01em | Fraunces | Hero headline only |
| `display-l` | 64px / 4rem | 36px / 2.25rem | 400 | 1.05 | -0.01em | Fraunces | Section headlines (Philosophy, Experience, Contact) |
| `display-m` | 40px / 2.5rem | 28px / 1.75rem | 400 | 1.1 | normal | Fraunces | Sub-section headings, pull quotes |
| `heading-s` | 24px / 1.5rem | 20px / 1.25rem | 500 | 1.3 | normal | Inter | Card/tile headings (gallery captions, nav dropdowns) |
| `body-l` | 20px / 1.25rem | 18px / 1.125rem | 400 | 1.6 | normal | Inter | Lead paragraphs (Philosophy statement) |
| `body-m` | 17px / 1.0625rem | 16px / 1rem | 400 | 1.6 | normal | Inter | Standard body copy |
| `body-s` | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 | normal | Inter | Captions, metadata |
| `eyebrow` | 13px / 0.8125rem | 12px / 0.75rem | 500 | 1.2 | 0.12em | Inter, uppercase | Section labels ("PHILOSOPHY", "THE EXPERIENCE") above headlines |

Rule of thumb: **every homepage section gets exactly one `display-l` (or `display-xl` for the hero) and everything else is `body-m`/`body-s`.** Resist adding intermediate heading sizes — the scale above is deliberately short.

## 2. Color palette

The brand's own logo suite defines three named colors (stone grey, forest green, sage green), extended here with the neutrals the photography actually lives in — snow white, log-timber amber, near-black — so the palette works for both brand marks and page backgrounds.

> **Action item before build:** the hex values below are considered approximations based on standard Scandinavian "stone/forest/sage" tones and the black-and-white logo PNG — they have **not** been color-picked from the source PDFs (which weren't rendered/inspected pixel-by-pixel in this pass). Extract exact values from `public/logos/*.pdf` in a vector tool before locking these into code.

| Token | Approx. hex | Role |
|---|---|---|
| `color-snow` | `#F7F5F1` | Primary background — warm off-white, not clinical pure white (matches the snow tones in the photography, which are never neutral-grey) |
| `color-charcoal` | `#1E1E1C` | Primary text, dark section backgrounds |
| `color-forest` | `#2C3B2E` | Primary brand accent — deep forest green, from the logo. Primary buttons, links, active states |
| `color-sage` | `#8A9B87` | Secondary accent — muted sage green, from the logo. Hover states, secondary UI, dividers |
| `color-stone` | `#A9A29A` | Tertiary neutral — stone grey, from the logo. Borders, disabled states, captions |
| `color-timber` | `#7A5236` | Warm accent pulled from the log-cabin wood tones — use *sparingly*: a hover underline, an icon, a single accent detail. Never a background. |
| `color-cream` | `#EFEAE0` | Secondary background — for alternating section backgrounds against `color-snow` without resorting to grey |

**Contrast rule**: body text is always `color-charcoal` on `color-snow`/`color-cream`, or `color-snow` on `color-charcoal`/`color-forest`. Never place body text directly on a photograph without a scrim — see §5, Imagery Treatment.

**Usage discipline**: on any given screen, use at most one accent color (`forest`, `sage`, `timber`) beyond the neutrals. This is a two-color-family brand (neutrals + one accent at a time), not a five-color one — the palette above is a toolkit, not a rainbow to deploy all at once.

## 3. Spacing & layout

8px base unit. All spacing tokens are multiples of 8, no arbitrary values.

| Token | Value | Use |
|---|---|---|
| `space-1` | 8px | Icon-to-label gaps, tight inline spacing |
| `space-2` | 16px | Form/element internal padding |
| `space-3` | 24px | Card padding, small gaps |
| `space-4` | 32px | Default gap between related elements |
| `space-6` | 48px | Gap between a heading and its body copy |
| `space-8` | 64px | Gap between distinct content blocks within a section |
| `space-12` | 96px | Vertical padding, mobile section spacing |
| `space-16` | 128px | Vertical padding, desktop section spacing (default) |
| `space-20` | 160px | Vertical padding around the hero and major transitions |

**Grid**: 12-column, max content width **1440px**, outer margin 5vw minimum (never edge-to-edge except full-bleed imagery/video). Gutter 24px desktop / 16px mobile.

**Section rhythm**: every homepage section (see `homepage-plan.md`) gets `space-16` (128px) of vertical padding on desktop, `space-12` (96px) on mobile, no exceptions — consistent rhythm is what makes a minimal layout feel intentional rather than empty.

## 4. Components

Kept deliberately minimal — this is a photography-led one-pager, not an app. Only the components the homepage actually needs:

### Buttons

Two variants only. No rounded-pill buttons, no drop shadows, no gradients.

| Variant | Look | Use |
|---|---|---|
| **Primary** | Solid `color-forest` fill, `color-snow` text, sharp corners (2px radius), `eyebrow`-style label (uppercase, 0.08em tracking). On hover: fill shifts to `color-charcoal`, 200ms ease. | Main CTAs — "Enquire", "Request a Stay" |
| **Ghost / on-image** | Transparent fill, 1px `color-snow` border, `color-snow` text — for buttons sitting on top of photography. On hover: border and text fade to solid `color-snow` fill with `color-charcoal` text, 200ms ease. | Hero CTA, any button over an image |

No tertiary/text-only button variant is needed — plain text links (see below) cover that case.

### Links

Body-copy links: no default underline; 1px underline in `color-stone` appears on hover, animated left-to-right via `transform: scaleX()` (not a color swap) — 250ms ease-out. Nav links follow the same pattern.

### Navigation bar

Transparent over the hero image (logo + links in `color-snow`), transitions to solid `color-snow` background with `color-charcoal` text after ~80px scroll — 300ms ease. Logo: `refuge61-logo-black-white.png` (or its future SVG export) inverted to `color-snow` for the transparent state.

### Cards / gallery tiles

No borders, no shadows. Separation between tiles comes from whitespace (`space-3`/`space-4` gaps) alone. Image fills the tile at a fixed aspect ratio (see §5); a caption in `body-s` sits below the image, not overlaid on it, except where a section explicitly calls for overlay text (hero, section dividers).

### Form fields (contact section)

Underline-only inputs — no boxed borders. 1px `color-stone` bottom border, transitions to `color-forest` on focus (no glow/shadow, just the color and a 1px-to-2px thickness change). Labels are `eyebrow` style, positioned above the field, always visible (no placeholder-as-label pattern).

## 5. Imagery treatment

Since the photography *is* the design system, how images are cropped, treated and framed matters as much as any token above:

- **Aspect ratios**: hero = full-bleed viewport (no fixed ratio, `object-fit: cover`); architecture/interior features = 4:5 portrait or 3:2 landscape depending on the source photo's natural framing — never force-crop a portrait interior into a landscape tile; gallery grid tiles = consistent 4:5 within any single row.
- **Text-over-image scrim**: any text sitting on a photograph gets a linear gradient scrim (`color-charcoal` at 0–40% opacity, bottom-to-top or edge-in depending on text position) — never a flat dark overlay across the whole image. The photography should still read clearly through the scrim.
- **No filters, no duotone, no color grading overlays.** The photography (especially the professional architecture/interior set) is strong and consistent enough to run untouched. The two black-and-white images (`hero-bw-frost-facade.jpg`, `hero-bw-facade-east.jpg`) are the only intentionally monochrome frames — don't desaturate others to match; use color images at full color.
- **Crop from the center of interest, not the frame center** — several interiors (e.g. `interiors-bedroom-01.jpg`, the mounted-deer-head shot) have their subject off-center; respect the original composition when cropping to new aspect ratios.

## 6. Icon style

Icons are a minor, supporting element — this brand speaks through photography and type, not iconography. When icons are needed (nav utility icons, social links, footer, form field icons):

- **Line icons only**, 1.5px stroke weight, no fills, rounded line-caps — matches the weight of Inter body text at `body-m` size.
- Recommend **Lucide** (open-source, free, consistent stroke weights, easy tree-shaking in a Next.js project) over a filled/glyph icon set.
- Icon color always matches surrounding text color — icons never carry their own accent color.
- Default size 20px (inline with `body-m` text) or 24px (standalone, e.g. footer social row).

## 7. Motion & animation philosophy

Motion should feel like **a slow reveal**, not a UI flourish. Three governing rules:

1. **Slow, not snappy.** Entrance animations run 500–800ms; nothing on this site should animate faster than a typical micro-interaction (hover/focus states are the exception, at 200–300ms). If an animation feels "responsive" the way a button click should, it's too fast for this brand.
2. **Fade + rise, not slide-and-bounce.** The single default entrance pattern: opacity 0→1 combined with a small upward translate (16–24px), eased with a custom cubic-bezier that decelerates smoothly (`cubic-bezier(0.16, 1, 0.3, 1)` — "ease-out-expo"-style). No bounce, no overshoot, no spring easing anywhere in the system — those read as playful/app-like, which contradicts the editorial tone.
3. **Motion is triggered by scroll position, not by page load.** Sections and images animate in as they enter the viewport (intersection-observer driven), roughly one beat at a time (headline, then supporting copy ~100ms later, then image) rather than everything firing at once on page load.

| Interaction | Motion | Duration | Easing |
|---|---|---|---|
| Section/image enters viewport | Fade + rise 20px | 600–700ms | ease-out-expo |
| Hero load (first paint only) | Fade in, slight scale from 1.03→1.0 on the hero image | 1000ms | ease-out-expo |
| Button/link hover | Color or fill transition | 200ms | ease |
| Underline reveal (links) | `scaleX(0)→scaleX(1)`, transform-origin left | 250ms | ease-out |
| Nav bar background on scroll | Background-color + text-color crossfade | 300ms | ease |
| Gallery image hover | Scale 1.0→1.03, no shadow | 400ms | ease-out |

**Accessibility**: every animation above must respect `prefers-reduced-motion: reduce` — fall back to a simple opacity fade (or no animation at all for scroll-triggered reveals) with no transforms.

**What to avoid entirely**: parallax scrolling on more than one element per screen (it gets busy fast and undermines the "quiet" tone), auto-playing carousels, count-up numbers, confetti/celebratory micro-interactions, and any animation whose purpose is to prove the site is "interactive" rather than to support a reveal of content.

## 8. Summary — a one-line brief for whoever builds this next

*Large serif headlines and quiet sans body copy, sitting in generous off-white space, interrupted only by full-bleed photography and one green accent — everything fades and rises in slowly, nothing bounces, nothing shouts.*
