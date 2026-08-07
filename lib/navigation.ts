export type NavItem = {
  label: string;
  href: string;
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
