import type { Metadata } from "next";
import { LetsTalkPage } from "@/components/pages/LetsTalkPage";

export const metadata: Metadata = {
  title: "Lad os tale sammen | REFUGE61",
};

export default function LetsTalkDa() {
  return <LetsTalkPage locale="da" />;
}
