/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <div className="border-b border-black/5 bg-white/95 px-4 py-1 print:hidden sm:px-6">
      <a
        href="https://sleads.nl"
        target="_blank"
        rel="noopener"
        aria-label="Concept door Sleads – bekijk sleads.nl"
        className="inline-flex min-h-6 items-center gap-1.5 text-[11px] font-medium text-neutral-600 hover:text-black sm:text-xs"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
        Concept door <span className="font-semibold">Sleads</span>
      </a>
    </div>
  );
}
