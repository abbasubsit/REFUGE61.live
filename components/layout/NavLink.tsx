import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: React.ReactNode;
};

/**
 * Behavior-only wrapper around next/link: the underline-on-hover reveal
 * from design-system.md §4 ("Links"), animated left-to-right via
 * transform: scaleX(). Deliberately carries no typographic styling of its
 * own — every usage (desktop nav, mobile menu) supplies its own size/case
 * via `className`, since the two contexts need different type scales.
 */
export function NavLink({ children, className = "", ...rest }: NavLinkProps) {
  return (
    <Link
      className={`group relative inline-block transition-colors duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-2 ${className}`}
      {...rest}
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-[250ms] ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
      />
    </Link>
  );
}
