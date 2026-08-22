# Handoff — remaining tasks

Status check done 2026-08-19. Do these in order. Do not touch `/v2`, `/v3`, `/v4`, `/the-lodge`.

---

## ✅ DONE — no work needed

- **`/practical-information`** — fully matches `docs/practical-information-spec.md`.
  All 13 sections, correct copy, both images (`bjorkasen_01.jpg`,
  `REFUGE61_01_arrivee_accueil.jpg`), Terms link, CTA. **Do not modify.**
- **`/the-lodge-v2` hero** — overflow fix already applied (`min-h-[100svh]`,
  flex `justify-end`, `pt-24 md:pt-28`, `mt-space-4`, `lg:text-display-l`).
  Only needs verification (see step 5).

---

## TASK 1 — `/the-lodge-v2` section 8: remove the annotated screenshot

**File:** `app/the-lodge-v2/page.tsx`, section `{/* 8. EVERYTHING WE NEED */}`

`Capture d'écran 2026-08-17 à 17.09.33.png` is **the client's feedback markup**, not a
photo — it shows a bullet list crossed out with an X and a hand-drawn "OK". It is
currently rendered on the live page. **Delete that entire `<Image>` and its wrapper div.**

Then make the section a single centred column (no image column left).

**Required copy for this section** (client email, verbatim):

- Eyebrow: `EVERYTHING WE NEED`
- No headline. **Delete the invented headline `Comfortable living areas.`**
- Paragraph (already present, keep):
  `The lodge offers generous shared spaces, a fully equipped kitchen, a large dining room, comfortable living areas and everything we need to make it our home for the week.`
- **ADD this spec line** (currently missing entirely). Render as one line of
  small uppercase type, `·` separators, wrapping on mobile:
  `2 PEOPLE MAX. PER ROOM · NO DORMITORIES · LARGE SHARED KITCHEN · DINING ROOM · FIREPLACE`
- Keep the green card exactly as is (client marked it "OK").

---

## TASK 2 — `/the-lodge-v2` remove invented headline

**File:** same. Section `{/* 2. A PLACE APART */}`

Delete the `<h2>` containing `Far enough away to feel different.` — leftover from the
old version. The client's copy for this section is the eyebrow plus the two existing
paragraphs only. Keep both paragraphs.

---

## TASK 3 — `/the-lodge-v2` remove non-system styling

**File:** same. Applies to the 6 grid images in sections 3 (THE ROOMS) and 4 (SAUNA).

Remove from every grid `<Image>` / wrapper:
- `rounded-sm` — site uses sharp corners
- `hover:scale-[1.03] transition-transform duration-[600ms] ease-out` — client twice
  said no hover effects on editorial photos

Keep `object-cover`, `fill`, `sizes`, and the grid layout itself.

---

## TASK 4 — decide missing routes (ask user first, do not guess)

`/terms` and `/lets-talk` do not exist. Both are linked and will 404:
- `/terms` — from Cancellation section on `/practical-information`
- `/lets-talk` — from the CTA on `/practical-information`, both Lodge pages, and the nav

Do not build these without instruction.

---

## TASK 5 — verify, then stop

```
npx tsc --noEmit
npx eslint app/the-lodge-v2/page.tsx
npm run dev
```

Screenshot `/the-lodge-v2` at these viewport **heights** (it is a height bug):
`1440x900`, `1440x700`, `1280x600`, `390x844`.

Confirm in all four:
- Hero: eyebrow + all 3 headline lines + both paragraphs visible, nothing under the nav
- Section 8: no screenshot image, spec line present, green card intact
- No horizontal overflow

Then `npm run build`. **Do not commit or push.**
