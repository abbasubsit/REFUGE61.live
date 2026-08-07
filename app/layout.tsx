import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Display serif — headlines and pull-quotes only. See docs/design-system.md §1.
// Italic is loaded for the Philosophy section's pull-quote heading; nothing
// before it (Navigation, Hero) uses italic, so this is the first section to
// need the extra style variant.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

// Body / UI sans. See docs/design-system.md §1.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "REFUGE61 — A Refuge Above the Treeline";
// Revised 2026-08-07: dropped "reimagined" (REFUGE61 didn't invent this
// place — see the Hero copy note in components/sections/Hero.tsx) and
// "retreat" (hospitality-adjacent), per Mathieu Bonnier's language
// principle in this phase's feedback. Same placeholder-pending-confirmation
// status as the Hero sub-line.
const DESCRIPTION =
  "An old hunting lodge and bathhouse above the treeline — shared for a week at a time.";

// Placeholder domain — project-brief.md §4 notes the property's region and
// final domain aren't confirmed yet. Update once one exists; until then this
// only affects how absolute the OG/Twitter image URLs resolve to, not the
// page itself.
const SITE_URL = "https://refuge61.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "REFUGE61",
    // Color aerial shot, not the monochrome page hero — homepage-spec.md
    // §12: a link preview has no surrounding page context to lend the
    // black-and-white image meaning, so it gets the warmer, legible one.
    images: [{ url: "/images/hero/hero-aerial-sunrise.jpg", width: 1200, height: 800 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero/hero-aerial-sunrise.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-snow font-sans text-charcoal">
        {children}
      </body>
    </html>
  );
}
