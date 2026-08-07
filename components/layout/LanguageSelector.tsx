type LanguageSelectorProps = {
  className?: string;
};

/**
 * Placeholder only — not wired to real i18n. docs/project-brief.md §5 notes
 * the homepage ships English-only for this build; French/Norwegian are
 * candidates for a later phase. Rendered as a real, focusable button
 * (rather than `disabled`, which would remove it from the tab order and
 * hide it from screen readers) so its presence is honest about what it is —
 * a reserved spot — without pretending to be either fully functional or
 * invisible. aria-label and title both spell out that it isn't live yet.
 */
export function LanguageSelector({ className = "" }: LanguageSelectorProps) {
  return (
    <button
      type="button"
      aria-label="Language: English. More languages coming soon."
      title="More languages coming soon"
      className={`text-eyebrow uppercase tracking-[0.12em] opacity-70 transition-opacity duration-200 ease-editorial hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 motion-reduce:transition-none ${className}`}
    >
      EN
    </button>
  );
}
