import { EXPERIENCE_PILLARS } from "@/lib/experience";
import { ExperiencePillar } from "./ExperiencePillar";

/**
 * Three pillars, one word each: Move / Gather / Reset. No visible section
 * heading — the H2 below exists purely so the document outline stays
 * correct for assistive tech (homepage-spec.md §11); the three pillar
 * labels are the real, visible content, marked up as h3s inside each
 * pillar. Stacked full-width, not a three-up grid — see ExperiencePillar
 * for why (2026-08-14, Mathieu Bonnier's feedback).
 */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-snow">
      <h2 id="experience-heading" className="sr-only">
        The Experience
      </h2>

      {EXPERIENCE_PILLARS.map((pillar, index) => (
        <ExperiencePillar key={pillar.id} pillar={pillar} reverse={index % 2 === 0} />
      ))}
    </section>
  );
}
