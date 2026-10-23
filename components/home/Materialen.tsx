import SectionHeading from "@/components/SectionHeading";

const materials = [
  { name: "Kunststof", text: "Voor onderdelen die wij draaien of frezen uit kunststof." },
  { name: "Aluminium", text: "Voor gedraaide en gefreesde aluminium onderdelen." },
  { name: "Roestvast staal", text: "RVS, in dezelfde series: van enkel stuks tot middelgroot." },
];

export default function Materialen() {
  return (
    <section data-section="materialen" className="border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          index="05"
          title="Materialen en aantallen"
          intro="Wij maken producten uit verschillende soorten materiaal, zoals kunststof, aluminium en roestvast staal. De aantallen variëren van enkel stuks tot middelgrote series. Wij leveren aan diverse bedrijfstakken."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {materials.map((item) => (
            <li key={item.name} className="bg-muted p-5">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-base text-body">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
