import type { Metadata } from "next";
import { LodgePage } from "@/components/pages/LodgePage";

export const metadata: Metadata = {
  title: "Le Lodge — REFUGE61",
  description:
    "Un chalet authentique et confortable dans les montagnes norvégiennes.",
};

export default function TheLodgePageFr() {
  return <LodgePage locale="fr" />;
}
