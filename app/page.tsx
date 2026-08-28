// The live English homepage. Promoted from /v4 on 2026-08-22 after client
// approval. /v4 re-exports this file so the old URL keeps working and the
// two can never drift apart.
//
// The markup moved to components/pages/HomePage.tsx on 2026-08-28, when the
// approved French copy went up: both languages render the same component,
// so a layout change lands in English and French at once. This file and
// app/fr/page.tsx differ only by the locale they pass.
import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "REFUGE61 — A Refuge Above the Treeline",
};

export default function Home() {
  return <HomePage locale="en" />;
}
