// The live English Practical Information page.
//
// The markup moved to components/pages/PracticalPage.tsx on 2026-08-28, when
// the approved French copy went up: both languages render the same
// component, so a layout change lands in both at once.
import type { Metadata } from "next";
import { PracticalPage } from "@/components/pages/PracticalPage";

export const metadata: Metadata = {
  title: "Practical Information — REFUGE61",
  description: "Functional information about stays at REFUGE61.",
};

export default function PracticalInformationPage() {
  return <PracticalPage locale="en" />;
}
