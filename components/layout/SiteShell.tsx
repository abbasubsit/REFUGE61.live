"use client";

import { useState } from "react";
import { Navigation } from "./Navigation";

type SiteShellProps = {
  children: React.ReactNode;
};

/**
 * Owns the one piece of state Navigation and the page content both need to
 * agree on: whether the mobile menu is open. While it is, `<main>` is
 * marked `inert`, so nothing inside it (Hero's CTA, the video controls,
 * Contact's button, etc.) is reachable by keyboard, mouse, or screen reader
 * until the menu closes — a stronger guarantee than the conditional-render
 * + focus-trap in MobileMenu alone.
 */
export function SiteShell({ children }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-space-4 focus-visible:top-space-4 focus-visible:z-[60] focus-visible:rounded-[2px] focus-visible:bg-snow focus-visible:px-space-4 focus-visible:py-space-2 focus-visible:text-eyebrow focus-visible:uppercase focus-visible:tracking-[0.08em] focus-visible:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
      >
        Skip to content
      </a>
      <Navigation isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} />
      {/* tabIndex={-1}: not part of the normal Tab order, but focusable by
          the skip link above so focus actually moves, not just scroll. */}
      <main id="top" tabIndex={-1} inert={isMenuOpen} className="focus:outline-none">
        {children}
      </main>
    </>
  );
}
