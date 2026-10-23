/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <div className="pointer-events-none fixed bottom-[4.25rem] left-3 z-30 print:hidden md:bottom-4 md:left-4">
      <a
        href="https://sleads.nl"
        target="_blank"
        rel="noopener"
        aria-label="Concept door Sleads – bekijk sleads.nl"
        className="pointer-events-auto inline-flex min-h-6 items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-neutral-600 shadow-sm backdrop-blur hover:text-black sm:text-xs"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
        Concept door <span className="font-semibold">Sleads</span>
      </a>
    </div>
  );
}
