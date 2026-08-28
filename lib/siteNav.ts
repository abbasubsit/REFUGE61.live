import type { NavItem } from "@/lib/navigation";
import { type Locale, localePrefix, t } from "@/lib/i18n";

/**
 * /practical-information only — passed explicitly via SiteShell's navItems
 * prop, never used as Navigation's default, so NAV_ITEMS/NAV_ITEMS_V4 (and
 * every version's own nav) are untouched.
 *
 * Real routes, not same-page anchors, per the client's reference screenshot
 * (2026-08-16): HOME | THE LODGE | PRACTICAL INFORMATION | LET'S TALK.
 * Home points at "/" (the canonical homepage — /v2, /v3, /v4 are
 * comparison variants, not the intended permanent destination). The Lodge
 * and Let's Talk don't have pages yet — out of scope for this task per the
 * client's own instructions ("we will implement those later") — so those
 * two links will 404 until built. Flagged, not hidden: the client's
 * reference nav explicitly includes all four, and they told us to point
 * the CTA at /lets-talk despite it not existing yet, so the missing pages
 * read as "not built yet," not a mistake.
 */
export const SITE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Lodge", href: "/the-lodge" },
  { label: "Practical Information", href: "/practical-information" },
  { label: "Let's Talk", href: "/lets-talk" },
];

/**
 * The same four destinations, labelled and prefixed for `locale`.
 *
 * French keeps the English URL slugs (/fr/the-lodge rather than
 * /fr/le-lodge): the slugs are already circulating in the client's emails,
 * and translating them would double the number of routes to keep in step
 * for no benefit the reviewers will notice.
 */
export function siteNavItems(locale: Locale): NavItem[] {
  const prefix = localePrefix(locale);
  return SITE_NAV_ITEMS.map((item) => ({
    label: t(locale, item.label),
    href: item.href === "/" ? prefix || "/" : `${prefix}${item.href}`,
  }));
}
