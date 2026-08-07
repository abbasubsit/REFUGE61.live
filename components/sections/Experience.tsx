import { EXPERIENCE_PILLARS } from "@/lib/experience";
import { Container } from "@/components/ui/Container";
import { ExperiencePillar } from "./ExperiencePillar";

// Stagger offset between pillars — homepage-spec.md §5: "~120ms" apart.
const STAGGER_MS = 120;

/**
 * Three pillars, one word each: Move / Gather / Reset. No visible section
 * heading — the H2 below exists purely so the document outline stays
 * correct for assistive tech (homepage-spec.md §11); the three pillar
 * labels are the real, visible content, marked up as h3s beneath it.
 */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-snow py-space-16">
      <Container>
        <h2 id="experience-heading" className="sr-only">
          The Experience
        </h2>

        <div className="grid grid-cols-1 gap-x-space-6 gap-y-space-8 md:grid-cols-3">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <ExperiencePillar key={pillar.id} pillar={pillar} delayMs={index * STAGGER_MS} />
          ))}
        </div>
      </Container>
    </section>
  );
}
