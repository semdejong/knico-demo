export default function SectionHeading({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm text-brand">{index}</p>
      <h2 className="mt-1 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 text-lg text-body">{intro}</p> : null}
    </div>
  );
}
