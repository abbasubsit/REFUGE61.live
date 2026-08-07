import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The shared content-width wrapper — design-system.md §3: max 1440px,
 * margins that grow with viewport rather than content stretching further.
 * Used by every section that isn't deliberately full-bleed (Hero and
 * Philosophy's image panel are full-bleed by design and don't use this).
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1440px] px-space-4 md:px-space-6 lg:px-space-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
