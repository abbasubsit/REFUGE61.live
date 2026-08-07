"use client";

import { useEffect, useRef, useState } from "react";

// homepage-spec.md §3 — appears shortly after the rest of the Hero has
// settled, then fades out once (after 10% of viewport height is scrolled)
// and never reappears. Both phases are driven by the same opacity
// transition rather than mixing a CSS `animation` with a state-driven
// class, so there's only ever one mechanism controlling the property.
const ENTRANCE_DELAY_MS = 900;
const FADE_THRESHOLD_RATIO = 0.1;

export function ScrollIndicator() {
  const [hasEntered, setHasEntered] = useState(false);
  const [hasFaded, setHasFaded] = useState(false);
  const hasFadedRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHasEntered(true), ENTRANCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let frame = 0;

    const evaluate = () => {
      if (hasFadedRef.current) return;
      if (window.scrollY > window.innerHeight * FADE_THRESHOLD_RATIO) {
        hasFadedRef.current = true;
        setHasFaded(true);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(evaluate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isVisible = hasEntered && !hasFaded;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-space-8 hidden flex-col items-center gap-space-2 transition-opacity duration-700 ease-editorial motion-reduce:transition-none md:flex ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="text-eyebrow uppercase tracking-[0.12em] text-snow/60">
        Scroll
      </span>
      <span className="h-8 w-px bg-snow/60" />
    </div>
  );
}
