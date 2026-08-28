// The live English Lodge page. Promoted from /the-lodge-v2 on 2026-08-22
// after the client selected that version; /the-lodge-v2 re-exports this
// file so the review URL keeps working.
//
// The markup moved to components/pages/LodgePage.tsx on 2026-08-28, when the
// approved French copy went up: both languages render the same component, so
// a layout change lands in both at once.
import type { Metadata } from "next";
import { LodgePage } from "@/components/pages/LodgePage";

export const metadata: Metadata = {
  title: "The Lodge — REFUGE61",
  description: "A warm and comfortable home in the Norwegian mountains.",
};

export default function TheLodgePage() {
  return <LodgePage locale="en" />;
}
