import type { Metadata } from "next";
import { PracticalPage } from "@/components/pages/PracticalPage";

export const metadata: Metadata = {
  title: "Informations pratiques — REFUGE61",
  description: "Informations pratiques sur les séjours à REFUGE61.",
};

export default function PracticalInformationPageFr() {
  return <PracticalPage locale="fr" />;
}
