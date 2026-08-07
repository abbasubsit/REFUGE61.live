import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { HumanExperience } from "@/components/sections/HumanExperience";
import { CinematicVideo } from "@/components/sections/CinematicVideo";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

// Section order revised 2026-08-07 per Mathieu Bonnier's feedback: the new
// HumanExperience section sits between Move/Gather/Reset and the Cinematic
// Video, so the page reaches its emotional peak (people, living together)
// before its widest establishing shot (the video's aerial "place" footage)
// and the Gallery. Experience before accommodation, throughout.
export default function Home() {
  return (
    <SiteShell>
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
