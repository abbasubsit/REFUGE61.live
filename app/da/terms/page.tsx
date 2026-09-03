// Terms & Conditions for Danish readers.
//
// The text is still ENGLISH: the client supplied the terms in English and
// French only, and the Danish column of his translation spreadsheet leaves
// all 143 paragraphs of this page blank. lib/content/terms.ts therefore falls
// back to the English rather than showing a half-translated legal document.
//
// The route exists so the Danish footer and the language switcher have
// somewhere to point -- a missing page would 404 mid-visit, which is worse
// than a page in a language the reader can probably follow. Replace the
// fallback in lib/content/terms.ts as soon as a Danish legal translation
// arrives.
import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | REFUGE61",
};

export default function TermsDa() {
  return <TermsPage locale="da" />;
}
