// The French homepage. Renders the same component as app/page.tsx; only the
// locale differs. Copy comes from lib/content/copy.fr.ts, approved by the
// client on 2026-08-28.
import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "REFUGE61 — Un refuge perdu au cœur des montagnes norvégiennes",
};

export default function HomeFr() {
  return <HomePage locale="fr" />;
}
