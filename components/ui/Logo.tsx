type LogoProps = {
  className?: string;
};

/**
 * Placeholder wordmark.
 *
 * docs/asset-library.md §10 flags that no vector logo exists yet — only a
 * flat PNG (`public/logos/refuge61-logo-black-white.png`) and print-oriented
 * PDFs. A PNG can't cleanly recolor between the transparent (snow-on-image)
 * and solid (charcoal-on-snow) navigation states this spec calls for, so
 * this is an inline SVG standing in for it: a minimal roofline mark (echoing
 * the lodge's gable roofline throughout the photography) plus the wordmark,
 * both driven by `currentColor` so they recolor for free with the
 * surrounding text. Swap the contents of this file for the real export
 * once one exists — nothing else needs to change, every consumer just
 * renders <Logo />.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 212 32"
      className={className}
      fill="none"
      role="img"
      aria-label="REFUGE61"
    >
      <path
        d="M2 23 L14 6 L26 23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="36"
        y="23"
        fill="currentColor"
        fontSize="19"
        className="font-display"
        style={{ letterSpacing: "0.03em" }}
      >
        REFUGE61
      </text>
    </svg>
  );
}
