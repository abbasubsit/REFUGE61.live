"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";

type LanguageSelectorProps = {
  className?: string;
};

/**
 * EN / FR switcher. Wired to real routes as of 2026-08-28, when the client
 * approved the French copy and asked for the French pages to go up so his
 * reviewers could check them.
 *
 * French is served under /fr with the English URL slugs (/fr/the-lodge, not
 * /fr/le-lodge), so the counterpart of any page is found by adding or
 * removing that one prefix -- no route table to keep in step.
 *
 * Both languages are always rendered as links, with the current one marked
 * aria-current and visually held at full strength. A page that exists in
 * English but not yet in French would 404 rather than fail silently; every
 * page in the nav exists in both.
 */
export function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  const pathname = usePathname() || "/";

  const isFrench = pathname === "/fr" || pathname.startsWith("/fr/");
  const current: Locale = isFrench ? "fr" : "en";

  // The path with any locale prefix stripped: "/fr/the-lodge" -> "/the-lodge",
  // "/fr" -> "/".
  const basePath = isFrench ? pathname.slice(3) || "/" : pathname;

  const hrefFor = (locale: Locale) => {
    if (locale === "en") return basePath;
    return basePath === "/" ? "/fr" : `/fr${basePath}`;
  };

  return (
    <div className={`flex items-center gap-space-1 ${className}`}>
      {LOCALES.map((locale, i) => {
        const isCurrent = locale === current;
        return (
          <span key={locale} className="flex items-center gap-space-1">
            {i > 0 && (
              <span aria-hidden="true" className="opacity-40">
                /
              </span>
            )}
            <Link
              href={hrefFor(locale)}
              hrefLang={locale}
              aria-current={isCurrent ? "true" : undefined}
              className={`text-eyebrow uppercase tracking-[0.12em] transition-opacity duration-200 ease-editorial hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${
                isCurrent ? "opacity-100 underline underline-offset-4" : "opacity-60"
              }`}
            >
              {LOCALE_LABELS[locale]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
