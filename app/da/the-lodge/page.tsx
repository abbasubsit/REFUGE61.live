import type { Metadata } from "next";
import { LodgePage } from "@/components/pages/LodgePage";

export const metadata: Metadata = {
  title: "Lodgen — REFUGE61",
  description: "Et varmt og komfortabelt hjem i de norske bjerge.",
};

export default function TheLodgePageDa() {
  return <LodgePage locale="da" />;
}
