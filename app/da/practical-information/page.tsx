import type { Metadata } from "next";
import { PracticalPage } from "@/components/pages/PracticalPage";

export const metadata: Metadata = {
  title: "Praktisk information — REFUGE61",
  description: "Praktiske oplysninger om ophold på REFUGE61.",
};

export default function PracticalInformationPageDa() {
  return <PracticalPage locale="da" />;
}
