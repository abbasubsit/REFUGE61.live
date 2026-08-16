export type NavItem = {
  label: string;
  href: string;
};

/**
 * An official (non-placeholder) logo asset for the header — see
 * components/ui/Logo.tsx's docstring for why the default nav mark is still
 * an inline SVG. Two fixed image files, not one recolored file: the
 * supplied logos are opaque colour plates (or, for the transparent-ink
 * variant, only legible on dark backgrounds), so Navigation swaps between
 * them itself based on its own transparent/solid scroll state rather than
 * applying any CSS recolouring.
 */
export type OfficialLogo = {
  transparent: { src: string; width: number; height: number };
  solid: { src: string; width: number; height: number };
  alt: string;
};

/**
 * Anchor targets match the section ids each homepage section renders with
 * (see docs/homepage-plan.md). The Cinematic Video section has no entry
 * here by design — it's a mid-scroll moment, not a nav destination.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

/**
 * Version 4 only — passed explicitly via SiteShell's navItems prop, never
 * used as Navigation's default, so NAV_ITEMS above (and every other
 * version's nav) is untouched. No Gallery link (Version 4 drops that
 * section per Mathieu Bonnier's feedback); Expedition replaces it as the
 * fourth destination.
 */
export const NAV_ITEMS_V4: NavItem[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Experience", href: "#experience" },
  { label: "Expedition", href: "#expedition" },
  { label: "Contact", href: "#contact" },
];
