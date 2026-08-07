"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/navigation";

type NavigationProps = {
  isMenuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
};

// homepage-spec.md §9 — "hard color-swap (not crossfade) once scrolled past
// the Hero". The Hero is exactly one viewport tall (100svh) and is always
// the first thing in <main>, so "past the Hero" is approximated as ~95% of
// viewport height scrolled — close enough to "past" to avoid a dead zone
// from mobile browser-chrome rounding, without needing a ref into Hero's DOM.
const SOLID_THRESHOLD_RATIO = 0.95;

export function Navigation({ isMenuOpen, onMenuOpenChange }: NavigationProps) {
  const [isSolid, setIsSolid] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;

    const evaluate = () => {
      setIsSolid(window.scrollY > window.innerHeight * SOLID_THRESHOLD_RATIO);
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
  }, []);

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
          <Logo className="h-6 w-auto md:h-7" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-space-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className={`text-eyebrow uppercase tracking-[0.12em] ${ringClass}`}
            >
              {item.label}
            </NavLink>
          ))}
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
        items={NAV_ITEMS}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
