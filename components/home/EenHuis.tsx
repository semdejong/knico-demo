import SectionHeading from "@/components/SectionHeading";

const steps = [
  { n: "1", title: "Zagen", text: "Materiaal op lengte op de bandzaag." },
  { n: "2", title: "Draaien of frezen", text: "Verspanen op de CNC-machines in dezelfde hal." },
  { n: "3", title: "Markeren of graveren", text: "Naald markeren of laser graveren, als het onderdeel dat vraagt." },
  { n: "4", title: "Klaar", text: "Een bewerkt onderdeel, vanuit één leverancier." },
];

export default function EenHuis() {
  return (
    <section data-section="een-huis" className="border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          index="03"
          title="Compleet in één huis"
          intro="Zeventien eigen machines op ongeveer 800 m². U hoeft draaien, frezen, zagen, markeren, graveren en schuren niet over drie leveranciers te verdelen."
        />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="border border-steel p-5">
              <p className="font-mono text-sm text-brand">{step.n}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-base text-body">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-base text-body">
          Buizen schuren wij op twee machines met aan- en afvoerbaan. Het blijft dezelfde werkplaats, dezelfde mensen.
        </p>
      </div>
    </section>
  );
}
