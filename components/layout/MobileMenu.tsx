"use client";

import { useEffect, useRef } from "react";
import { NavLink } from "./NavLink";
import { LanguageSelector } from "./LanguageSelector";
import type { NavItem } from "@/lib/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

/**
 * Full-screen overlay, only mounted while open — closed state is simply
 * absent from the DOM, which keeps it out of the tab order and the
 * accessibility tree for free. `<main>` is additionally made `inert` by
 * SiteShell while this is open, so background content (the Hero CTA, in
 * this build) can't be reached even if a browser doesn't fully respect the
 * conditional render.
 */
export function MobileMenu({ isOpen, onClose, items, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusable?.[0]?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Captured now, not read from the ref inside cleanup — by the time
    // cleanup runs the ref may already point elsewhere (or nowhere).
    const triggerToRestore = triggerRef.current;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerToRestore?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-40 flex animate-fade-rise flex-col items-center justify-center gap-space-8 bg-snow motion-reduce:animate-none"
    >
      <nav aria-label="Mobile" className="flex flex-col items-center gap-space-6">
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-heading-s text-charcoal focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-snow"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <LanguageSelector className="text-charcoal focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-snow" />
    </div>
  );
}
