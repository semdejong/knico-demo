import type { ReactNode } from "react";

/** Hoekmerken zoals op een tekeningblad. */
export default function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-foreground/15 ${className}`}>
      <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-brand" aria-hidden />
      <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-brand" aria-hidden />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-brand" aria-hidden />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-brand" aria-hidden />
      {children}
    </div>
  );
}
