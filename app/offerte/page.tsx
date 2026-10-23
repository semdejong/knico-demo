import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import Frame from "@/components/Frame";
import OfferteForm from "@/components/OfferteForm";
import PageHero from "@/components/PageHero";
import { content } from "@/content";
import { omstempelTekst } from "@/lib/diensten";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag een offerte aan bij KNICO. Stuur uw tekening, het aantal en het materiaal naar info@knico.nl.",
};

const meenemen = [
  "Tekening of schets",
  "Aantal",
  "Materiaal: kunststof, aluminium of roestvast staal",
  "Eventuele bewerkingen, zoals graveren, markeren of omstempelen",
  "Gewenste levering, als u die al weet",
];

const stappen = [
  { n: "01", title: "U stuurt de gegevens", text: "Tekening, aantal en materiaal. De tekening voegt u als bijlage toe aan de e-mail." },
  { n: "02", title: "Wij bekijken de aanvraag", text: "Wij kijken wat er gedraaid, gefreesd of verder bewerkt moet worden." },
  { n: "03", title: "U ontvangt een offerte", text: "Daarna mailen wij u de offerte. Wilt u iets vragen, bel of mail ons." },
];

export default function OffertePage() {
  const { company } = content;

  return (
    <main>
      <PageHero
        index="Blad 07 — Offerte"
        title="Offerte aanvragen – stuur uw tekening"
        intro="Enkel stuks tot middelgrote series in kunststof, aluminium en roestvast staal."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-10">
          <section data-section="wat-meesturen">
            <Frame>
              <div className="p-5">
                <p className="font-mono text-xs text-brand">Bijlage</p>
                <h2 className="mt-1 text-2xl font-semibold">Wat u meestuurt</h2>
                <ul className="mt-3 space-y-2 text-base text-body">
                  {meenemen.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-mono text-sm text-brand">{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Frame>
            <p className="mt-4 text-base">
              Liever direct mailen?{" "}
              <a className="font-semibold text-brand underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          </section>
          <section data-section="vervolg">
            <h2 className="text-2xl font-semibold">Wat er daarna gebeurt</h2>
            <ol className="mt-4 space-y-4">
              {stappen.map((step) => (
                <li key={step.n}>
                  <p className="font-mono text-sm text-brand">{step.n}</p>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-base text-body">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
          <section data-section="omstempelen-noot" className="border border-steel p-4">
            <h2 className="text-xl font-semibold">3.1 materiaal</h2>
            <p className="mt-2 text-base text-body">{omstempelTekst}</p>
          </section>
        </div>
        <OfferteForm />
      </div>
      <div className="border-t border-steel bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-3xl font-semibold">Vragen</h2>
          <div className="mt-6">
            <FaqList />
          </div>
          <section data-section="bellen" className="mt-10 border border-foreground/20 bg-white p-5">
            <h2 className="text-2xl font-semibold">Bel of mail ons</h2>
            <a href={company.phoneTel} className="mt-2 inline-flex h-12 items-center text-lg font-semibold text-brand">
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="flex h-11 items-center text-brand underline">
              {company.email}
            </a>
            <p className="text-base text-body">{company.city}, {company.region}, aan de Duitse grens.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
