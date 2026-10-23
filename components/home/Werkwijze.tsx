import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { n: "01", title: "U stuurt", text: "Tekening of schets, het aantal en het materiaal." },
  { n: "02", title: "Wij bekijken", text: "Wij kijken naar de bewerking en of omstempelen nodig is." },
  { n: "03", title: "U ontvangt een offerte", text: "Daarna hoort u van ons. Bel of mail gerust als u eerder iets wilt vragen." },
];

export default function Werkwijze() {
  return (
    <section data-section="werkwijze" className="border-b border-steel bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          index="10"
          title="Offerte aanvragen"
          intro="Stuur uw tekening. Wij rekenen enkel stuks en middelgrote series, in kunststof, aluminium en roestvast staal."
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="bg-white p-5">
              <p className="font-mono text-sm text-brand">{step.n}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-base text-body">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="mt-8 inline-flex h-12 items-center bg-brand px-5 font-semibold text-white"
        >
          Stuur uw tekening
        </Link>
      </div>
    </section>
  );
}
