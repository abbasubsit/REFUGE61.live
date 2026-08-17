"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/navigation";
import type { NavItem, OfficialLogo } from "@/lib/navigation";

type NavigationProps = {
  isMenuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
  /** Defaults to NAV_ITEMS when omitted — see SiteShell. */
  navItems?: NavItem[];
  /** Defaults to the placeholder <Logo> SVG when omitted — see SiteShell. */
  officialLogo?: OfficialLogo;
  /**
   * Skips the scroll-triggered transparent-over-Hero state and renders the
   * solid (bg-snow/text-charcoal) surface from the start. The transparent
   * state assumes a full-viewport dark image sits behind the nav at the
   * top of the page (true for every Hero-led homepage) — pages that open
   * with plain bg-snow content instead (e.g. /practical-information) would
   * otherwise show white nav text on a near-white background. Defaults to
   * false, so every existing page's behaviour is unchanged.
   */
  alwaysSolid?: boolean;
};

// homepage-spec.md §9 — "hard color-swap (not crossfade) once scrolled past
// the Hero". The Hero is exactly one viewport tall (100svh) and is always
// the first thing in <main>, so "past the Hero" is approximated as ~95% of
// viewport height scrolled — close enough to "past" to avoid a dead zone
// from mobile browser-chrome rounding, without needing a ref into Hero's DOM.
const SOLID_THRESHOLD_RATIO = 0.95;

export function Navigation({
  isMenuOpen,
  onMenuOpenChange,
  navItems = NAV_ITEMS,
  officialLogo,
  alwaysSolid = false,
}: NavigationProps) {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (alwaysSolid) return;
    let frame = 0;

    const evaluate = () => {
      setHasScrolledPastHero(window.scrollY > window.innerHeight * SOLID_THRESHOLD_RATIO);
    };

    const handleScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      cancelAnimationFrame(frame);
    };
  }, [alwaysSolid]);

  const isSolid = alwaysSolid || hasScrolledPastHero;

  // No `transition-colors` here — the spec calls for an instant swap, not
  // an animated crossfade, once the threshold is crossed.
  const surfaceClasses = isSolid ? "bg-snow text-charcoal" : "bg-transparent text-snow";
  const ringClass = isSolid
    ? "focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-snow"
    : "focus-visible:ring-snow";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${surfaceClasses}`}>
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          aria-label="REFUGE61 — back to top"
          className={`shrink-0 transition-opacity duration-200 ease-editorial hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 ${ringClass}`}
        >
          {officialLogo ? (
            // Both files stay mounted and are toggled by opacity rather than
            // swapping `src`: swapping meant the solid-state logo only began
            // downloading at the moment the user scrolled past the hero,
            // leaving a visibly empty logo slot for a beat. The hidden one is
            // aria-hidden so assistive tech sees a single mark.
            <span className="relative block h-6 w-auto md:h-7">
              <Image
                src={officialLogo.transparent.src}
                alt={officialLogo.alt}
                width={officialLogo.transparent.width}
                height={officialLogo.transparent.height}
                priority
                className={`h-6 w-auto md:h-7 ${isSolid ? "invisible" : "visible"}`}
              />
              <Image
                src={officialLogo.solid.src}
                alt=""
                aria-hidden="true"
                width={officialLogo.solid.width}
                height={officialLogo.solid.height}
                priority
                className={`absolute inset-0 h-6 w-auto md:h-7 ${
                  isSolid ? "visible" : "invisible"
                }`}
              />
            </span>
          ) : (
            <Logo className="h-6 w-auto md:h-7" />
          )}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-space-6 md:flex">
          {navItems.map((item) => {
            // Only real routes (not same-page "#section" anchors) can ever
            // match the current pathname, so this is a no-op for every
            // Hero-led homepage's anchor nav.
            const isActive = item.href.startsWith("/") && pathname === item.href;
            return (
              <NavLink
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-eyebrow uppercase tracking-[0.12em] ${ringClass} ${
                  isActive ? "[&>span]:scale-x-100" : ""
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
          <LanguageSelector className={ringClass} />
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => onMenuOpenChange(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`inline-flex h-11 w-11 items-center justify-center focus-visible:outline-none focus-visible:ring-2 ${ringClass} md:hidden`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 7h18M3 12h18M3 17h18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => onMenuOpenChange(false)}
        items={navItems}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
