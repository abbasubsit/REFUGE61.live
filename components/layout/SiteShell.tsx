"use client";

import { useState } from "react";
import { Navigation } from "./Navigation";
import type { NavItem, OfficialLogo } from "@/lib/navigation";

type SiteShellProps = {
  children: React.ReactNode;
  /** Defaults to the sitewide NAV_ITEMS (see Navigation) when omitted — only
   *  Version 4 (different section set: no Gallery, an Expedition section
   *  instead) passes its own, so / , /v2 and /v3 are unaffected. */
  navItems?: NavItem[];
  /** Defaults to the placeholder <Logo> SVG when omitted — only Version 4
   *  passes the client's official logo files, so every other version's
   *  header is untouched. */
  officialLogo?: OfficialLogo;
};

/**
 * Owns the one piece of state Navigation and the page content both need to
 * agree on: whether the mobile menu is open. While it is, `<main>` is
 * marked `inert`, so nothing inside it (Hero's CTA, the video controls,
 * Contact's button, etc.) is reachable by keyboard, mouse, or screen reader
 * until the menu closes — a stronger guarantee than the conditional-render
 * + focus-trap in MobileMenu alone.
 */
export function SiteShell({ children, navItems, officialLogo }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-space-4 focus-visible:top-space-4 focus-visible:z-[60] focus-visible:rounded-[2px] focus-visible:bg-snow focus-visible:px-space-4 focus-visible:py-space-2 focus-visible:text-eyebrow focus-visible:uppercase focus-visible:tracking-[0.08em] focus-visible:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
      >
        Skip to content
      </a>
      <Navigation
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        navItems={navItems}
        officialLogo={officialLogo}
      />
      {/* tabIndex={-1}: not part of the normal Tab order, but focusable by
          the skip link above so focus actually moves, not just scroll. */}
      <main id="top" tabIndex={-1} inert={isMenuOpen} className="focus:outline-none">
        {children}
      </main>
    </>
  );
}
