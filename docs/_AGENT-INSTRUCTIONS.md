# REFUGE61 — standing instructions for the implementing agent

Read this fully before every change. It does not expire.

---

## 1. What you receive

Noman will give you:
- a **screenshot of the client email** (Mathieu Bonnier), and/or
- a **folder of images** with a path, e.g. `Desktop/noman/update_aug26/`

Your job: extract the requested changes, apply them, verify, report back.

**The client's copy is the source of truth. Use his wording verbatim.** Do not
paraphrase, shorten, "improve", or invent headings. If his text and this file
disagree on wording, his text wins.

---

## 2. Read the screenshot carefully — a trap that has already cost us

Mathieu marks up screenshots of **our own site** and emails them back.

- A **big X / cross** over something = **delete it**
- A hand-written **"OK"** = **keep it**
- An **arrow** = move it there

These annotated screenshots are **instructions, not content**. A previous agent
mistook one for a photograph and published it — visitors saw a struck-through
list and the client's own "OK" scrawl on the live page.

**Rule: if an image contains crossings-out, arrows, handwriting, or a screenshot
of our own website, it is feedback. Never put it on the page.**

---

## 3. Live pages (what visitors see)

| Route | Notes |
|---|---|
| `/` | Homepage. `/v4` re-exports it — do not edit `/v4` directly |
| `/the-lodge` | `/the-lodge-v2` re-exports it — do not edit `-v2` directly |
| `/practical-information` | has a B&W twin, see §7 |
| `/lets-talk` | form has **no backend**; it validates and `console.log`s only |
| `/terms`, `/privacy-policy` | legal text pending from client |

**Never edit `/v2` or `/v3`.** They are frozen historical versions for client
comparison. If a change touches a shared component, confirm they still render
unchanged.

---

## 4. Text changes

Most copy lives in data files, not JSX:

- `lib/content/letsTalk.ts` — all Let's Talk copy
- `lib/pillarsV4.ts` — homepage Move / Gather / Reset / Expedition
- `lib/theLodge.ts`, `lib/theLodgeExact.ts` — Lodge sections
- `lib/practicalInfo.ts` — some Practical Info
- `app/practical-information/page.tsx` — most Practical Info is inline
- `app/the-lodge/page.tsx` — Lodge copy is inline

Search the string before editing. Change it in **one** place.

---

## 5. Image changes

1. Copy the file into `public/images/<sensible-folder>/` with a **clean lowercase
   filename, no spaces** (spaces break `next/image` URLs).
2. Update the `src` where it is used.
3. Update `alt` to describe the **new** photo. Stale alt text is a recurring
   bug here — several images have shipped describing the previous picture.
4. Add a row to `docs/_asset-manifest.csv` (category, path, original source, note).
5. **Never delete the old image file** — other versions may still use it.

### If the image is AI-generated
Add its exact `src` to the array in `lib/aiImages.ts`. That is the whole job —
`components/ui/AiLabel.tsx` shows the disclosure automatically.
Ask Noman if you are unsure whether an image is AI-generated. Do not guess.

---

## 6. Design rules (client-stated, non-negotiable)

- One strong image + text per section. **No mosaics, no collages, no mixed image
  sizes.** Alternate image-left / image-right.
- All section images share the same proportions as "Better shared than admired"
  (`aspect-[4/5]`, `md:w-[55%]` image / `md:w-[45%]` text).
- **No identifiable faces**, except Bjørn and Mathieu themselves, and except
  AI-generated people (not real individuals).
- No hover effects on editorial photos. No rounded cards. No new animation
  systems. Sharp corners (`rounded-[2px]` max).
- Use existing tokens only — never invent values.

---

## 7. Known traps — check every one before reporting done

These have all shipped as bugs before.

**Invalid utility classes that silently do nothing:**
- `font-body-m`, `font-heading-s`, `font-eyebrow`, `font-display-l` are **not real**.
  The correct prefix is `text-`: `text-body-m`, `text-heading-s`, `text-eyebrow`,
  `text-display-l`.
- `space-24` does not exist. The scale is **1, 2, 3, 4, 6, 8, 12, 16, 20**.
  Run: `grep -rn "space-2[1-9]\|font-\(body\|heading\|eyebrow\|display\)-" app components`

**Layout:**
- Heroes use `min-h-[100svh]`, never `h-[100svh]`. A fixed height clips the
  headline on short viewports.
- Never use a fixed `text-display-l` on a heading. Always ramp
  `text-display-m md:text-display-l`. A fixed 64px overflows mobile — this has
  caused horizontal scroll three separate times.

**Forms:**
- Every input needs a **visible** `<label>`. Never `sr-only` labels with
  placeholder-only text — the fields read as blank.

**Twin pages:**
- `app/practical-information-v2/page.tsx` must stay byte-identical to
  `app/practical-information/page.tsx` except three lines (title, function name,
  and `grayscale` on the InfoBlock image). After editing v1, regenerate v2 and
  confirm with `diff` that only those three lines differ.

---

## 8. Verify before reporting done

```
npx tsc --noEmit          # must be clean
npx eslint app components lib   # must be clean
npm run dev
```

Then, at **1440x900 and 390x844**:
- The page you changed renders correctly
- **No horizontal overflow:** `document.documentElement.scrollWidth` must equal
  `clientWidth`
- `/`, `/the-lodge`, `/practical-information`, `/lets-talk`, `/v2`, `/v3` all
  return 200

Finally `npm run build` — all routes must prerender.

> If `npm run dev` returns 500 with `routes-manifest.json` missing, that is stale
> `.next` from a previous build. Stop the server, `rm -rf .next`, restart. Not a
> code bug.

**Do not commit or push unless Noman says so.**

---

## 9. Report back in this format

```
DONE
- <change> (file:line)

NOT DONE
- <what> — <why / what you need>

JUDGEMENT CALLS
- <anything ambiguous and what you chose>

VERIFIED
- tsc / eslint / build: pass
- overflow 1440 + 390: none
- routes 200: / /the-lodge /practical-information /lets-talk /v2 /v3
```

**Never report something as done that you did not verify visually.** Compiling
is not the same as rendering correctly. Take a screenshot and look at it.

**If the client's request conflicts with a rule in §6, stop and tell Noman.**
Do not silently pick one. This has happened repeatedly — his mock-ups have
included the exact mosaic layouts and identifiable faces he had previously
asked us to remove.
