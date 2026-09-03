import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Renders as a Link when provided, a <button> otherwise. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  /** <button> only — a link cannot be disabled. Used by the Let's Talk form
   *  while an enquiry is in flight, so it cannot be submitted twice. */
  disabled?: boolean;
};

// design-system.md §4 — two variants only, sharp 2px corners, no shadows/gradients.
const BASE_STYLES =
  "inline-flex items-center justify-center rounded-[2px] px-space-4 py-space-2 " +
  "text-eyebrow uppercase tracking-[0.08em] " +
  "transition-colors duration-200 ease-editorial motion-reduce:transition-none " +
  "focus-visible:outline-none focus-visible:ring-2";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-snow hover:bg-charcoal " +
    "focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-snow",
  // Ghost sits on photography (Hero), so its focus ring skips the offset —
  // an offset box would read as a stray rectangle over the image.
  ghost:
    "border border-snow text-snow hover:bg-snow hover:text-charcoal " +
    "focus-visible:ring-snow",
};

// mailto:/tel:/external links aren't internal routes — Next's <Link> still
// renders them without crashing, but it's built (prefetching, route cache)
// for in-app navigation, so anything outside that gets a plain <a> instead.
const EXTERNAL_HREF_PATTERN = /^(mailto:|tel:|https?:\/\/)/;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  type = "button",
  ariaLabel,
  disabled = false,
}: ButtonProps) {
  const classes = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${
    disabled ? "cursor-not-allowed opacity-60" : ""
  } ${className}`.trim();

  if (href && EXTERNAL_HREF_PATTERN.test(href)) {
    return (
      <a href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
