// Locale plumbing for the English/French site.
//
// The French copy was approved by the client on 2026-08-28 and lives in
// lib/content/copy.fr.ts, keyed by the T-ids from the translation
// spreadsheet. Every English string on the site matches an entry there
// verbatim, so translation is a lookup on the English source text rather
// than on an invented key -- this keeps the JSX readable (the English is
// still visible in the markup) and means a missing translation degrades to
// English rather than to a raw key like "home.hero.title".

import { FR_BY_ENGLISH } from "@/lib/content/copy.fr";
import { FR_EXTRA } from "@/lib/content/copy.fr.extra";
import { DA_BY_ENGLISH } from "@/lib/content/copy.da";
import { DA_EXTRA } from "@/lib/content/copy.da.extra";

// The generated table plus the hand-written companions for strings whose
// rendered form differs from their source form (CSS uppercasing, sentences
// split by inline links, &apos;). See copy.fr.extra.ts.
const FR = new Map<string, string>([
  ...FR_BY_ENGLISH,
  ...Object.entries(FR_EXTRA),
]);

const DA = new Map<string, string>([
  ...DA_BY_ENGLISH,
  ...Object.entries(DA_EXTRA),
]);

const TABLES: Record<Exclude<Locale, "en">, ReadonlyMap<string, string>> = {
  fr: FR,
  da: DA,
};

export const LOCALES = ["en", "fr", "da"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/**
 * Translate an English string into `locale`.
 *
 * Falls back to the English when no approved translation exists -- notably
 * Terms & Conditions, which the client is handling separately, and any copy
 * added since the spreadsheet was produced.
 */
export function t(locale: Locale, en: string): string {
  if (locale === "en") return en;
  return TABLES[locale].get(en) ?? en;
}

/** Curried form, for components that translate many strings. */
export function translator(locale: Locale) {
  return (en: string) => t(locale, en);
}

/**
 * Route prefix for a locale. English is served from the root so the URLs the
 * client has already circulated keep working.
 */
export function localePrefix(locale: Locale): string {
  return locale === "en" ? "" : `/${locale}`;
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  da: "DA",
};
