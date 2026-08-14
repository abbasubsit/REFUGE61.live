import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { HumanExperience } from "@/components/sections/HumanExperience";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "REFUGE61 — Version 3 (Video Hero)",
};

// Version 3 (2026-08-14) — a controlled variant of Version 2 (app/v2,
// mirrored at /) for Mathieu to compare directly. Same components, same
// order, same copy; the only content change is the Hero: HeroVideo swaps in
// the existing teaser video as the background instead of the static image
// (see HeroVideo.tsx). Every other section below is imported unchanged from
// Version 2 — nothing here can affect / or /v2.
//
// Cinematic Video is intentionally not rendered on this page: the teaser it
// played has moved into the Hero, and playing the same 11MB clip twice on
// one visit isn't "moving" it, it's duplicating it. If the review verdict
// is that both spots should keep the video, that section is a one-line add
// back (import CinematicVideo, drop it in after Gallery as in Version 2).
export default function HomeV3() {
  return (
    <SiteShell>
      <HeroVideo />
      <Philosophy />
      <Experience />
      <HumanExperience />
      <Gallery />
      <Contact />
    </SiteShell>
  );
}
