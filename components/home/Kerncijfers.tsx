const facts = [
  { index: "1996", label: "opgericht op 1 april" },
  { index: "800 m²", label: "werkplaats sinds 2005" },
  { index: "17", label: "machines in eigen huis" },
  { index: "30 jaar", label: "KNICO, sinds 1996" },
];

export default function Kerncijfers() {
  return (
    <section data-section="kerncijfers" className="border-b border-steel bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.index} className="border-steel px-4 py-8 sm:px-6 md:border-l md:first:border-l-0">
            <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{fact.index}</p>
            <p className="mt-1 text-base text-body">{fact.label}</p>
            <span className="mt-3 block h-px w-10 bg-signal" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
