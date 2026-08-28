// The live English Let's Talk page.
//
// The markup moved to components/pages/LetsTalkPage.tsx on 2026-08-28, when
// the approved French copy went up: both languages render the same
// component, so a layout change lands in both at once.
import type { Metadata } from "next";
import { LetsTalkPage } from "@/components/pages/LetsTalkPage";

export const metadata: Metadata = {
  title: "Let's Talk | REFUGE61",
};

export default function LetsTalk() {
  return <LetsTalkPage locale="en" />;
}
