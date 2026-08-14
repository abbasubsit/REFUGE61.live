import type { Metadata } from "next";

// Version 2 — explicit, stable URL for the homepage as built from Mathieu
// Bonnier's feedback (2026-08-14): alternating image/text sections, no
// mosaics, static-image Hero. Re-exports the root page's component directly
// rather than duplicating its JSX, so /v2 and / can never drift apart by
// accident. This file must never import from v3 or be edited to diverge —
// Version 3 (app/v3/page.tsx) is a separate composition specifically so
// changes there can't touch this one.
export const metadata: Metadata = {
  title: "REFUGE61 — Version 2",
};

export { default } from "../page";
