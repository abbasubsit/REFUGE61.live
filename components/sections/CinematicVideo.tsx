"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BottomScrim } from "@/components/ui/BottomScrim";

const VIDEO_SRC = "/videos/refuge61-teaser.mp4";
const POSTER_SRC = "/images/hero/hero-aerial-winter-wide.jpg";

// Circular icon-button treatment for the mute control. The play control
// doesn't use this — its hit target is the full video frame, not just the
// icon, so it needs its own focus treatment (see the button below: the
// visible ring lands on the small circle, not the whole frame).
const ICON_BUTTON =
  "flex items-center justify-center rounded-full text-snow transition-opacity duration-200 ease-editorial " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow motion-reduce:transition-none";

/**
 * The homepage's one cinematic moment — deliberately not the hero (see
 * docs/homepage-spec.md §6). Ships as little JS as this behavior allows:
 * the <video> element isn't even mounted until it's needed, and nothing
 * autoplays for mobile visitors or anyone with prefers-reduced-motion set,
 * regardless of viewport width.
 */
export function CinematicVideo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [prefersNoAutoplay, setPrefersNoAutoplay] = useState(true); // safe default until checked
  const [shouldLoad, setShouldLoad] = useState(false);
  const [userStarted, setUserStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay is off for mobile viewports AND for prefers-reduced-motion,
  // regardless of viewport — homepage-spec.md §11 is explicit that reduced
  // motion always falls back to the tap-to-play pattern.
  useEffect(() => {
    const widthQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersNoAutoplay(widthQuery.matches || motionQuery.matches);
    update();
    widthQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      widthQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  // Loading trigger for the autoplay path only: start fetching once the
  // section is within one viewport-height of scrolling into view, so
  // playback is ready by the time it's actually seen. Tap-to-play visitors
  // load on their own explicit action instead (see handlePlay).
  useEffect(() => {
    if (prefersNoAutoplay || shouldLoad) return;
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 100% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersNoAutoplay, shouldLoad]);

  // Play while in view, pause out of view — once loaded, autoplay path only.
  useEffect(() => {
    if (prefersNoAutoplay || !shouldLoad) return;
    const node = wrapperRef.current;
    const video = videoRef.current;
    if (!node || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = isMuted;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- isMuted intentionally not tracked here; toggleMute sets it directly on the element.
  }, [prefersNoAutoplay, shouldLoad]);

  const handlePlay = () => {
    setUserStarted(true);
    setShouldLoad(true);
  };

  // Tap-to-play path (mobile, or reduced-motion at any width): start once loaded.
  useEffect(() => {
    if (!prefersNoAutoplay || !userStarted || !shouldLoad) return;
    videoRef.current?.play().catch(() => {});
  }, [prefersNoAutoplay, userStarted, shouldLoad]);

  const toggleMute = () => {
    setIsMuted((currentlyMuted) => {
      if (videoRef.current) videoRef.current.muted = !currentlyMuted;
      return !currentlyMuted;
    });
  };

  const needsTapToPlay = prefersNoAutoplay && !userStarted;
  const showPoster = !shouldLoad || needsTapToPlay || !isPlaying;

  return (
    <section
      id="film"
      aria-labelledby="film-heading"
      className="bg-snow py-space-12 md:py-space-20"
    >
      <div ref={wrapperRef} className="relative h-[85vh] w-full overflow-hidden bg-charcoal">
        <h2 id="film-heading" className="sr-only">
          Film
        </h2>

        <div
          className={`absolute inset-0 transition-opacity duration-[400ms] ease-editorial motion-reduce:transition-none ${
            showPoster ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={POSTER_SRC}
            alt="Aerial winter view of the REFUGE61 estate — the still frame shown before the film plays."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {shouldLoad && (
          <video
            ref={videoRef}
            aria-label="Aerial and lifestyle footage of the REFUGE61 estate through winter."
            className="absolute inset-0 h-full w-full object-cover"
            muted={isMuted}
            loop
            playsInline
            preload="none"
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        <BottomScrim />

        <p className="absolute bottom-space-4 left-space-4 text-eyebrow uppercase tracking-[0.12em] text-snow md:bottom-space-6 md:left-space-6">
          Winter, Bjørkåsen
        </p>

        {needsTapToPlay && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play film"
            className="group absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline-none"
          >
            {/* The button's hit target is the whole frame, but the focus
                ring belongs on the small circle a sighted keyboard user
                actually sees — not traced around the entire 85vh section. */}
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-snow text-snow transition-opacity duration-200 ease-editorial group-hover:opacity-80 group-focus-visible:ring-2 group-focus-visible:ring-snow motion-reduce:transition-none">
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}

        {shouldLoad && !needsTapToPlay && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute film" : "Mute film"}
            className={`${ICON_BUTTON} absolute bottom-space-4 right-space-4 h-9 w-9 opacity-60 hover:opacity-100 focus-visible:opacity-100 md:bottom-space-6 md:right-space-6`}
          >
            {isMuted ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M4 9v6h4l5 5V4L8 9H4zM17.5 12a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 17.5 12zM19.5 4.5l-15 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M4 9v6h4l5 5V4L8 9H4z"
                  fill="currentColor"
                />
                <path
                  d="M15.5 8.5a4.5 4.5 0 0 1 0 7M18 6a8 8 0 0 1 0 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </section>
  );
}
