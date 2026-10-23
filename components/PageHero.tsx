export default function PageHero({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <header data-section="pagina-hero" className="blueprint border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="relative border border-brand/25 bg-white/80 p-6 sm:p-10">
          <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l border-t border-brand" aria-hidden />
          <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r border-t border-brand" aria-hidden />
          <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-brand" aria-hidden />
          <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-brand" aria-hidden />
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-sm text-brand">{index}</p>
            <p className="font-mono text-xs text-wordmark">KNICO · Dinxperlo · blad</p>
          </div>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl">{title}</h1>
          {intro ? <p className="mt-4 max-w-2xl text-lg text-body">{intro}</p> : null}
          <div className="mt-6 flex items-center gap-3" aria-hidden>
            <span className="h-px flex-1 bg-brand/40" />
            <span className="font-mono text-[10px] text-signal">sinds 1996</span>
            <span className="h-px w-10 bg-brand/40" />
          </div>
        </div>
      </div>
    </header>
  );
}
