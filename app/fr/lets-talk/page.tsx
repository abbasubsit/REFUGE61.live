import type { Metadata } from "next";
import { LetsTalkPage } from "@/components/pages/LetsTalkPage";

export const metadata: Metadata = {
  title: "Parlons-en | REFUGE61",
};

export default function LetsTalkFr() {
  return <LetsTalkPage locale="fr" />;
}
