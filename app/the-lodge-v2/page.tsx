import type { Metadata } from "next";

// /the-lodge-v2 was promoted to /the-lodge on 2026-08-22. This re-export keeps
// the old review URL working; the page itself now lives at app/the-lodge/page.tsx.
export const metadata: Metadata = {
  title: "The Lodge — REFUGE61",
};

export { default } from "../the-lodge/page";
