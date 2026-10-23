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
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="font-mono text-sm text-brand">{index}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-lg text-body">{intro}</p> : null}
      </div>
    </header>
  );
}
