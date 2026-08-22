import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { HumanExperience } from "@/components/sections/HumanExperience";
import { CinematicVideo } from "@/components/sections/CinematicVideo";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

// Version 2 — the earlier homepage composition. Was previously a re-export of
// app/page.tsx; inlined here 2026-08-22 when /v4 became the live homepage, so
// that changing the root can no longer alter this version.
export const metadata: Metadata = {
  title: "REFUGE61 — Version 2",
};


// Section order revised 2026-08-07 per Mathieu Bonnier's feedback: the new
// HumanExperience section sits between Move/Gather/Reset and the Cinematic
// Video, so the page reaches its emotional peak (people, living together)
// before its widest establishing shot (the video's aerial "place" footage)
// and the Gallery. Experience before accommodation, throughout.
export default function HomeV2() {
  return (
    <SiteShell footer={<SiteFooter />}>
      <Hero />
      <Philosophy />
      <Experience />
      <HumanExperience />
      <CinematicVideo />
      <Gallery />
      <Contact />
    </SiteShell>
  );
}
