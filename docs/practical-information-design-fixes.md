# /practical-information — design fixes

Content is correct and matches the client spec. **Do not change any copy, images, or
section order.** These are layout/visual fixes only.

Reviewed 2026-08-19 at 1440px. Page is currently ~11 viewport-heights tall.

---

## FIX 1 — Logo is invisible in the hero (client already flagged this)

**File:** `app/practical-information/page.tsx`, hero `<section>`

The hero photo is bright (snow + pale timber). The nav logo is the white-transparent
file, so it disappears against it. This is exactly the "difficult to see our logo"
problem Mathieu circled in his homepage feedback.

Cause: the gradient is bottom-anchored only —
`bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent` — leaving the top
of the frame completely unprotected where the logo and nav sit.

**Fix:** add a second, top-anchored gradient so the header area darkens:

```jsx
{/* existing bottom gradient — keep */}
<div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
{/* NEW: protects the logo + nav at the top of a bright photo */}
<div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/55 to-transparent" />
```

Verify the logo is clearly legible at 1440px and 390px.

---

## FIX 2 — Kill the dead space in the left column

**File:** same. The `InfoBlock` component (top of file).

Currently `md:grid-cols-12` with the eyebrow in `md:col-span-4` and content in
`md:col-span-8`. The eyebrow is ~10 words of tiny type, so roughly **350×400px of
empty space per section — repeated 13 times**. Combined with `max-w-[55ch]` on the
content, text occupies only the middle ~45% of the screen with large empty margins
both sides.

**Fix:** narrow the label column and widen the content column.

```jsx
// in InfoBlock
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-4 md:gap-space-8 py-space-12 border-t border-charcoal/10">
  <div className="md:col-span-3">        {/* was col-span-4 */}
    ...eyebrow...
  </div>
  <div className="md:col-span-9 flex flex-col gap-space-4 max-w-[68ch]">   {/* was col-span-8, max-w-[55ch] */}
```

Also make the eyebrow sticky so the section label stays visible while reading long
sections — it is the page's only wayfinding:

```jsx
<h2 className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-3 md:mb-0 md:sticky md:top-28">
```

---

## FIX 3 — Reduce vertical length

The page is ~11 screens tall with 13 near-identical blocks. The spec's stated goal is
"highly functional, **easy to scan**" — right now it can only be read linearly.

**Fix:** reduce per-section padding from `py-space-12` (96px) to `py-space-8` (64px)
in `InfoBlock`. Keep the `border-t` separators — they carry the rhythm.

Do **not** compress the type or reduce line-height.

---

## FIX 4 — Strengthen the section labels

`text-charcoal/60` at eyebrow size is too faint to act as a scanning anchor, which is
the whole job of that left column.

**Fix:** `text-charcoal/60` → `text-forest` in `InfoBlock`'s eyebrow. Matches the
brand accent already used for links and buttons, and lifts contrast.

---

## FIX 5 — Price should be visually findable

"THE PRICE / €1,800 per person for the week." is the single most-searched item on a
page like this, and it currently looks identical to every other block.

**Fix:** keep it in place and keep the copy, but give that one `InfoBlock` a
`bg-cream` background bleeding the full container width, so it reads as the one
highlighted fact. Add an optional `highlight?: boolean` prop to `InfoBlock`:

```jsx
const InfoBlock = ({ eyebrow, headline, highlight = false, children }) => (
  <RevealOnScroll variant="fade" durationMs={800}>
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-space-4 md:gap-space-8 py-space-8 border-t border-charcoal/10 ${highlight ? "bg-cream px-space-4 md:px-space-6" : ""}`}>
```

Then `<InfoBlock eyebrow="The Price" headline="€1,800 per person for the week." highlight>`.

No other section gets `highlight`.

---

## Verify

```
npx tsc --noEmit
npx eslint app/practical-information/page.tsx
npm run dev
```

Screenshot `/practical-information` at `1440x900` and `390x844`:
- Logo clearly legible over the hero
- No large empty gap in the left column
- Price section visually distinct
- No horizontal overflow
- Copy unchanged

Then `npm run build`. **Do not commit.**
