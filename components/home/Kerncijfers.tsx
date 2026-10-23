const facts = [
  { index: "1996", label: "opgericht op 1 april" },
  { index: "800 m²", label: "werkplaats sinds 2005" },
  { index: "17", label: "machines in eigen huis" },
  { index: "30 jaar", label: "KNICO, sinds 1996" },
];

export default function Kerncijfers() {
  return (
    <section data-section="kerncijfers" className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 border-y border-steel md:grid-cols-4">
        {facts.map((fact, index) => (
          <div
            key={fact.index}
            className={`px-4 py-8 sm:px-6 ${index % 2 === 0 ? "border-r border-steel md:border-r-0" : ""} ${
              index < 2 ? "border-b border-steel md:border-b-0" : ""
            } ${index > 0 ? "md:border-l md:border-steel" : ""}`}
          >
            <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{fact.index}</p>
            <p className="mt-1 text-base text-body">{fact.label}</p>
            <span className="mt-3 block h-px w-10 bg-signal" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
