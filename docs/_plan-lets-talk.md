# Implementation Plan — /lets-talk

**For the implementing agent. Read fully before writing code.**

Source of truth for all copy: `docs/Client-Brief-Lets-Talk.md`.
**Copy every text string verbatim from that file.** Do not paraphrase, shorten or
invent headings. Where the brief and this plan disagree on copy, the brief wins.

---

## SCOPE — read this first

**Build the PAGE ONLY. Do NOT build any backend.**

The brief §9 asks for email delivery, stored submissions, CSV export, admin access and
a status workflow. **All of that is out of scope for this task.** The project is
Next.js, not WordPress — ignore every WordPress reference in the brief. Hosting is not
yet decided, so there is nothing to build against.

In scope:
- The full page, all 8 sections
- The complete form UI with client-side validation
- On submit: validate, show a success state, `console.log` the payload. Nothing else.

Out of scope — do not create: API routes, database, email sending, admin pages, auth,
CSV export, `.env` files.

**Do not install any npm packages.** Current deps are `next`, `react`, `react-dom`
only. Build the form with React state and native HTML validation attributes.

---

## FILES TO CREATE

1. `lib/content/letsTalk.ts` — all page copy and form option arrays as typed consts.
   Everything the visitor reads lives here; nothing hardcoded in JSX.
   Reason: FR/DA translations are coming, this makes them a drop-in.
2. `app/lets-talk/page.tsx` — the page (server component).
3. `components/sections/LetsTalkForm.tsx` — `"use client"`, the form only.
4. `components/ui/Accordion.tsx` — FAQ accordion.

**Do not modify** any existing page (`/v2`, `/v3`, `/v4`, `/the-lodge`,
`/the-lodge-v2`, `/practical-information`) or any shared component.

---

## REUSE — do not rebuild these

| Need | Use |
|---|---|
| Shell, nav, footer | `SiteShell` with `navItems={SITE_NAV_ITEMS}`, `officialLogo={HEADER_LOGO_V4}`, `footer={<SiteFooter />}` |
| Scroll reveal | `components/ui/RevealOnScroll` (`variant="fade"`, `durationMs={800}`) |
| Buttons | `components/ui/Button` (`variant="primary"`) |
| Width wrapper | `components/ui/Container` |

Nav and footer already link to `/lets-talk`, which currently 404s. Creating this page
fixes that. Active-nav highlighting works automatically.

Type scale: `display-l/m`, `heading-s`, `body-l/m`, `eyebrow`.
Colours: `snow`, `cream`, `charcoal`, `forest`. Spacing: `space-1`…`space-20`.
Use existing tokens only — invent none.

---

## IMAGES — only two, both already in the repo

Client: *"For now, only 2 pictures will be used."*

1. `/images/client-update/2 raquettes 2 skis.png` (1536×1024) — four people at sunset,
   seen from behind → **HERO**
2. `/images/client-update/Retour ski+raquettes.png` (1535×1024) — three people
   returning toward the lit lodge → **visual break between §3 and §4**

Both are face-free. Filenames contain spaces — either URL-encode in `src` or rename
the files (renaming is cleaner; if you rename, add rows to `docs/_asset-manifest.csv`).

**No portraits of Bjørn or Mathieu exist.** The brief §2 mentions three host photos but
none were supplied. Build the hosts section **text-only**. Do not substitute another
image. Do not use `lifestyle-portrait-bjorn-mathieu.jpg` — it is stored upside-down
(rotated 180°) and unusable as-is.

---

## PAGE STRUCTURE — 8 sections, in order

Follow the site's visual language: large photography, generous space, no mosaics, no
hover effects, no new animation systems.

**1. HERO** — full-bleed image, text over the lower portion.
Follow the approach in `components/sections/FullBleedStatement.tsx`: `min-h-[100svh]`,
`flex flex-col justify-end`, bottom gradient, plus `pt-24 md:pt-28` to clear the fixed
header. **Use `min-h`, never a fixed `h`** — a fixed height clips long text on short
viewports; this exact bug already happened on `/the-lodge-v2`.
Content: eyebrow `LET'S TALK`, headline, two paragraphs. Headline is the `<h1>`.

**2. HOSTS — BJØRN & MATHIEU** — text only. Three blocks: BJØRN JACOB HAUGUM,
MATHIEU BONNIER, then TOGETHER. Bios are in brief §2. Two columns on desktop for the
two individual bios, TOGETHER full-width beneath. Ends on "Back to Basics."

**3. BEFORE THE QUESTIONNAIRE** — `IT'S ABOUT THE RIGHT FIT.` plus copy. Narrow centred
column, `bg-cream`.

**— visual break —** full-width image 2, about `h-[60vh]`, no text over it.

**4. QUESTIONNAIRE** — see form spec below.

**5. PRIVACY CHECKBOX** — inside the form, directly above the button.

**6. SUBMIT BUTTON** — inside the form.

**7. WHAT HAPPENS NEXT** — three numbered steps, equal columns on desktop, stacked on
mobile. Numerals large in `font-display`. No icons, no cards, no borders.

**8. FAQ** — accordion, 11 questions from brief §8.

---

## FORM SPEC

Client: *"visually light and friendly. It should not look like an application form or
hotel booking form."* So: generous spacing, no boxed card, no grey fills, underline-
style inputs rather than heavy bordered boxes, group labels styled as eyebrows.

Exact labels and options are in brief §4. Summary:

| Group | Fields |
|---|---|
| ABOUT YOU | First name\*, Last name\*, Email\*, Phone / WhatsApp, Country\* — text inputs; email uses `type="email"` |
| Age | radio, 4 options |
| Which week | radio, 6 options |
| Coming with | radio, 4 options |
| What attracts you\* | textarea |
| How you imagine your days | **checkbox** (multi-select), 7 options |
| How active | radio, 3 options |
| Sharing a house | textarea (short) |
| Anything else | textarea (optional) |

Rules:
- Required: first name, last name, email, country, "what attracts you".
- Radio groups share one `name` each so only one can be selected. The "days" group is
  checkboxes and must allow multiple.
- **Consent checkbox starts unticked and is required.** Label verbatim from brief §5.
  The words "Privacy Policy" link to `/privacy-policy`.
- **No newsletter or marketing consent anywhere.** Do not add one.
- Button label: `REQUEST A CONVERSATION`. The sentence beneath it sits directly under
  the button, verbatim from brief §6.
- On successful submit: replace the form with a short confirmation message written in
  the site's voice (no exclamation marks), and `console.log` the values. No network
  request.

Accessibility (required):
- Every input has a real `<label htmlFor>`. Never use placeholder as label.
- Radio/checkbox groups in `<fieldset>` with a `<legend>` styled as the eyebrow
  (visible, not screen-reader-only).
- Required fields carry `aria-required` and a visible `*`.
- Validation errors linked via `aria-describedby`; never signalled by colour alone.
- Fully keyboard operable, with visible focus rings using the existing
  `focus-visible:ring-*` classes.

---

## FAQ ACCORDION

Use native `<details>` / `<summary>` — accessible, keyboard-operable, needs no JS,
which suits "no unnecessary graphic effects". Style the marker; do not write a custom
JS toggle. Only questions visible initially. Multiple may be open at once.

---

## BLOCKERS — surface these, do not invent solutions

1. `/privacy-policy` does not exist but the consent checkbox must link to it. Create
   the route as a minimal placeholder saying the policy is being prepared. **Write no
   legal text** — the client is supplying it.
2. `/terms` also does not exist and is already linked from `/practical-information`.
   Leave it, but report it.
3. Host portraits missing (see Images).

---

## VERIFY

```
npx tsc --noEmit
npx eslint app/lets-talk components/sections/LetsTalkForm.tsx components/ui/Accordion.tsx
npm run dev
```

- `/lets-talk` returns 200; all 8 sections present; copy matches the brief exactly.
- Screenshot at `1440x900`, `1440x700`, `390x844`. Confirm hero text is never clipped
  or hidden under the nav, no horizontal overflow, form comfortable on mobile.
- Keyboard-only pass through the whole form. Submit with required fields empty and
  confirm errors are clear and announced.
- Confirm the consent checkbox loads unticked and blocks submission until ticked.
- Confirm `/`, `/v2`, `/v3`, `/v4`, `/the-lodge`, `/the-lodge-v2`,
  `/practical-information` still return 200 and are visually unchanged.
- `npm run build` — all routes prerender.

**Do not commit or push.** Report what you built and list anything left incomplete.
