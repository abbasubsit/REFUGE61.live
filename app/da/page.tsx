// The Danish homepage. Renders the same component as app/page.tsx; only the
// locale differs. Copy comes from lib/content/copy.da.ts, from the Danish
// column of the client's translation spreadsheet.
import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "REFUGE61 — Et helt særligt sted i Peer Gynts rige, Norge",
};

export default function HomeDa() {
  return <HomePage locale="da" />;
}
