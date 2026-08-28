// The English Terms & Conditions.
//
// The markup moved to components/pages/TermsPage.tsx on 2026-08-28, when the
// client sent the French translation: both languages now render from
// lib/content/terms.ts, so the two can never drift apart in structure.
//
// The wording still carries the client's "[to be inserted]" placeholders for
// company name, CVR number and email. Those are his to fill once the company
// is incorporated.
import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | REFUGE61",
};

export default function Terms() {
  return <TermsPage locale="en" />;
}
