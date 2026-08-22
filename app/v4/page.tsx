import type { Metadata } from "next";

// /v4 was promoted to the live homepage on 2026-08-22. This re-export keeps
// the old review URL working; the page itself now lives at app/page.tsx.
export const metadata: Metadata = {
  title: "REFUGE61 — Version 4",
};

export { default } from "../page";
