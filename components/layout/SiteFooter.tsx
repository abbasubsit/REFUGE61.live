import Image from "next/image";
import Link from "next/link";
import { siteNavItems } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import { type Locale, localePrefix, t } from "@/lib/i18n";

/**
 * No footer component existed in this project before /practical-information
 * needed one (client instructions §22 assume one already exists — it
 * doesn't; flagged rather than silently invented). Built here, used only by
 * this page for now: retrofitting it onto /, /v2, /v3, /v4 wasn't asked for
 * and would be an unrequested visual change to versions the client said not
 * to touch. Reuses the same official logo file (forest-green plate) as
 * Version 4's solid-nav state and BrandSignature — no new logo variant
 * introduced.
 */
export function SiteFooter({ locale = "en" }: { locale?: Locale } = {}) {
  return (
    <footer className="border-t border-charcoal/10 bg-snow py-space-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-space-6 px-space-4 md:px-space-6 lg:px-space-8">
        <Link href={localePrefix(locale) || "/"} aria-label="REFUGE61 — home">
          <Image
            src={HEADER_LOGO_V4.solid.src}
            alt={HEADER_LOGO_V4.alt}
            width={HEADER_LOGO_V4.solid.width}
            height={HEADER_LOGO_V4.solid.height}
            className="h-15 w-auto"
          />
        </Link>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-space-6 gap-y-space-2">
          {siteNavItems(locale).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/70 transition-colors duration-200 ease-editorial hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/terms"
            className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/70 transition-colors duration-200 ease-editorial hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >{t(locale, "Terms & Conditions")}</Link>
        </nav>
      </div>
    </footer>
  );
}
