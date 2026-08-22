import type { OfficialLogo } from "@/lib/navigation";

/**
 * Version 4 only (2026-08-16, Mathieu Bonnier's client-final logo delivery,
 * 12 files total: 5 colours × header/full, plus a white-transparent header
 * and full). Every file was opened and visually checked before picking
 * these three — see docs/_asset-manifest.csv for the full inventory and
 * why the other 9 weren't used here (kept in public/logos/ regardless, not
 * deleted).
 *
 * Files are used exactly as supplied: no recolouring, no CSS filters, no
 * redrawing. Only the choice of *which* supplied file to show, and where,
 * changes.
 */
export const HEADER_LOGO_V4: OfficialLogo = {
  // True transparent PNG, all-white ink — over the Hero's dark photo this
  // reads the same way the placeholder SVG's `currentColor: snow` does now:
  // no visible box, just the mark. Confirmed illegible on a light
  // background (compared side by side against bg-snow) — that's expected
  // and why it's paired with a different file for the solid state, not
  // used everywhere.
  transparent: {
    src: "/logos/refuge61-logo-header-white-transparent.png",
    width: 1062,
    height: 221,
  },
  // Opaque forest-green plate — once the nav goes solid (bg-snow, a cream
  // bar) a transparent white mark would vanish, so this switches to a file
  // with its own built-in contrast. Forest green matches the site's
  // existing primary accent (Button's bg-forest) rather than the more
  // neutral black/stone options, so the mark reads as a deliberate brand
  // colour, not just "dark text."
  solid: {
    src: "/logos/refuge61-logo-header-forest-transparent.png",
    width: 1062,
    height: 221,
  },
  alt: "REFUGE61",
};

/**
 * The FULL lockup (wordmark + "BACK TO BASICS"), used once as a closing
 * brand signature after Contact — see BrandSignature.tsx. Contact's
 * background is bg-cream, so the white-transparent full lockup (also
 * supplied) isn't legible there; forest-green was picked to match
 * HEADER_LOGO_V4's solid-state colour rather than introduce a fourth logo
 * colour on one page.
 */
export const FULL_LOGO_V4 = {
  src: "/logos/refuge61-logo-full-forest-transparent.png",
  width: 1092,
  height: 370,
  alt: "REFUGE61 — Back to Basics",
};
