"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { BottomScrim } from "@/components/ui/BottomScrim";

const VIDEO_SRC = "/videos/refuge61-teaser.mp4";

/**
 * Version 3 only — a variant of Hero.tsx (Version 2 keeps that file
 * untouched) that swaps the static frost-facade image for the existing
 * teaser video as the Hero background, per Mathieu Bonnier's request to
 * compare a video-first opening against the current static one. Same
 * headline, sub-line and CTA copy as Version 2 — only the background
 * changes.
 *
 * This is the same file Cinematic Video plays (public/videos/refuge61-teaser.mp4,
 * already compressed to 11.3MB — see docs/_asset-manifest.csv), not a new
 * asset. It's dropped from its old spot further down app/v3/page.tsx so it
 * doesn't autoplay twice on one visit.
 *
 * The static image never leaves the DOM: it's the actual background under
 * prefers-reduced-motion (no video is even requested), and the instant-paint
 * frame under normal motion until the video reports it's actually playing.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanAutoplay(!motionQuery.matches);
    update();
    motionQuery.addEventListener("change", update);
    return () => motionQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canAutoplay) return;
    videoRef.current?.play().catch(() => {});
  }, [canAutoplay]);

  return (
    <section
      id="hero"
      aria-label="REFUGE61 — a refuge above the treeline"
      className="relative h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 animate-hero-image motion-reduce:animate-none">
        <Image
          src="/images/hero/hero-bw-frost-facade.jpg"
          alt="Frost-covered carved timber facade of the REFUGE61 lodge, photographed in black and white."
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[70%_35%] md:object-[62%_40%]"
        />

        {canAutoplay && (
          <video
            ref={videoRef}
            aria-hidden="true"
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={() => setIsPlaying(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[800ms] ease-editorial motion-reduce:hidden ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        {/* The curated still image is graded dark throughout, so
            BottomScrim alone is enough for the headline to read. Looping
            footage isn't — brightness swings scene to scene (bright sky vs.
            dark trees, as seen when reviewing this variant) — so this adds a
            constant, subtle full-frame tint under the video only, scoped to
            this component so Version 2's Hero is untouched. */}
        {canAutoplay && (
          <div aria-hidden="true" className="absolute inset-0 bg-charcoal/20" />
        )}
      </div>

      <BottomScrim />

      <div className="relative flex h-full flex-col justify-end px-space-4 pb-space-12 md:px-space-6 md:pb-space-16 lg:px-space-8">
        <div className="max-w-3xl">
          <h1 className="animate-fade-rise font-display text-display-m text-snow [animation-delay:200ms] motion-reduce:animate-none md:text-display-l lg:text-display-xl">
            A refuge above the treeline
          </h1>
          <p className="mt-space-2 max-w-md animate-fade-rise text-body-l text-snow/85 [animation-delay:400ms] motion-reduce:animate-none">
            A remote Norwegian lodge. One week. A small group. Nature, movement and shared life.
          </p>
          <div className="mt-space-4 animate-fade-rise [animation-delay:550ms] motion-reduce:animate-none">
            <Button href="#philosophy" variant="ghost">
              Discover REFUGE61
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
