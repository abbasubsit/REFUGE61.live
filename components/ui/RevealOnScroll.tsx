"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealVariant = "fade" | "fade-rise";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** "fade" = opacity only (Philosophy). "fade-rise" = opacity + translateY (Experience, and future sections). */
  variant?: RevealVariant;
  durationMs?: number;
  delayMs?: number;
};

/**
 * Scroll-triggered entrance, shared by every below-the-fold section.
 * Fires once (via IntersectionObserver, unobserved after triggering) and
 * never reverses — sections don't re-hide if scrolled past and back up,
 * matching the "held, not looping" motion philosophy in design-system.md §7.
 *
 * Under prefers-reduced-motion, content renders fully visible immediately
 * — no transition, no wait — via the `motion-reduce:` important-modifier
 * classes, independent of whether the observer has fired yet.
 */
export function RevealOnScroll({
  children,
  className = "",
  variant = "fade-rise",
  durationMs = 700,
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const property = variant === "fade" ? "opacity" : "opacity, transform";
  const hiddenState = variant === "fade" ? "opacity-0" : "opacity-0 translate-y-5";

  return (
    <div
      ref={ref}
      style={{
        transitionProperty: property,
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
      className={`ease-editorial motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100 ${
        isVisible ? "opacity-100 translate-y-0" : hiddenState
      } ${className}`}
    >
      {children}
    </div>
  );
}
