import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FULL_LOGO_V4 } from "@/lib/logoV4";

/**
 * Version 4 only — a quiet closing brand mark after Contact, using the
 * client's supplied FULL lockup (wordmark + "BACK TO BASICS") exactly as
 * delivered. Per Mathieu Bonnier's logo feedback: use the FULL version
 * "selectively... closing sections, footer" rather than in the header. This
 * is the one place on Version 4 it appears — nothing else on the page uses
 * the FULL lockup.
 */
export function BrandSignature() {
  return (
    <section aria-label="REFUGE61" className="bg-snow py-space-12">
      <RevealOnScroll variant="fade" durationMs={800} className="flex justify-center">
        <Image
          src={FULL_LOGO_V4.src}
          alt={FULL_LOGO_V4.alt}
          width={FULL_LOGO_V4.width}
          height={FULL_LOGO_V4.height}
          className="h-40 w-auto"
        />
      </RevealOnScroll>
    </section>
  );
}
