// The French Terms & Conditions, from the .docx the client sent on
// 2026-08-28. Same component and structure as the English page.
import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Conditions générales de séjour | REFUGE61",
};

export default function TermsFr() {
  return <TermsPage locale="fr" />;
}
