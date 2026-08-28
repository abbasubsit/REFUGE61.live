import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { siteNavItems } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import { type Locale } from "@/lib/i18n";
import { termsContent } from "@/lib/content/terms";

/**
 * Terms & Conditions, rendered from lib/content/terms.ts so English and
 * French share one layout. The French text arrived from the client on
 * 2026-08-28; the English page it replaces was identical in structure, and
 * its wording was parsed out of its own JSX rather than retyped so nothing
 * could drift during the move.
 *
 * The page opens with plain content rather than a photographic hero, so the
 * nav is forced solid -- white-on-white nav links otherwise.
 */
export function TermsPage({ locale }: { locale: Locale }) {
  const { title, sections } = termsContent(locale);

  return (
    <SiteShell
      navItems={siteNavItems(locale)}
      officialLogo={HEADER_LOGO_V4}
      alwaysSolid
      footer={<SiteFooter locale={locale} />}
    >
      <div className="bg-snow pt-32 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto text-body-m text-charcoal/80 space-y-space-3">
            <h1 className="font-display text-display-m lg:text-display-l text-charcoal mb-space-8">
              {title}
            </h1>
            <p className="text-eyebrow uppercase tracking-[0.12em] text-forest">
              REFUGE61°
            </p>
            <p className="text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-4">
              Back to Basics
            </p>

            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-heading-s text-charcoal mt-space-12 mb-space-4">
                  {section.heading}
                </h2>

                <div className="space-y-space-3">
                  {section.blocks.map((block, i) => {
                    if (block.kind === "subheading") {
                      return (
                        <h3
                          key={i}
                          className="text-eyebrow uppercase tracking-[0.12em] text-forest mt-space-8 mb-space-3"
                        >
                          {block.text}
                        </h3>
                      );
                    }
                    if (block.kind === "address") {
                      return (
                        <div key={i} className="pt-4 space-y-2">
                          {block.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      );
                    }
                    return <p key={i}>{block.text}</p>;
                  })}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </SiteShell>
  );
}
