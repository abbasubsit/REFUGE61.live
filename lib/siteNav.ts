import type { NavItem } from "@/lib/navigation";

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
