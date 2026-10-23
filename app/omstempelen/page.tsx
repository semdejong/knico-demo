import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import PageEnd from "@/components/PageEnd";
import PageHero from "@/components/PageHero";
import { omstempelTekst } from "@/lib/diensten";

export const metadata: Metadata = {
  title: "Omstempelen 3.1 materiaal",
  description:
    "KNICO is sinds 2002 door de TÜV bevoegd tot het omstempelen van gecertificeerd 3.1 materiaal.",
};

const stappen = [
  {
    n: "01",
    title: "Sinds 2002",
    text: "KNICO is door de TÜV bevoegd tot het omstempelen van gecertificeerd 3.1 materiaal.",
  },
  {
    n: "02",
    title: "Regelmatig verlengd",
    text: "Deze bevoegdheid wordt na de nodige controles regelmatig verlengd.",
  },
  {
    n: "03",
    title: "In dezelfde hal",
    text: "Omstempelen vraagt u aan naast draaien, frezen, markeren of graveren. Eén leverancier voor het onderdeel en de materiaalherkenning.",
  },
];

export default function OmstempelenPage() {
  return (
    <main>
      <PageHero index="Blad 05 — 3.1 materiaal" title="Omstempelen van gecertificeerd 3.1 materiaal" intro={omstempelTekst} />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6">
        <Frame>
          <div className="grid sm:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-brand">Stempelveld</p>
              <p className="mt-3 text-2xl font-semibold text-foreground">3.1 materiaal</p>
              <p className="mt-2 text-lg text-body">Omstempelen bij KNICO in Dinxperlo, in de Achterhoek.</p>
            </div>
            <dl className="grid grid-cols-2 border-t border-foreground/15 sm:border-l sm:border-t-0">
              <div className="border-b border-r border-foreground/15 p-4">
                <dt className="font-mono text-xs text-brand">Vanaf</dt>
                <dd className="text-lg font-semibold">2002</dd>
              </div>
              <div className="border-b border-foreground/15 p-4">
                <dt className="font-mono text-xs text-brand">Materiaal</dt>
                <dd className="text-lg font-semibold">3.1</dd>
              </div>
              <div className="col-span-2 p-4">
                <dt className="font-mono text-xs text-brand">Bevoegdheid</dt>
                <dd className="text-base text-body">TÜV, na controle regelmatig verlengd</dd>
              </div>
            </dl>
          </div>
        </Frame>
        <section data-section="uitleg" className="grid gap-4 md:grid-cols-3">
          {stappen.map((stap) => (
            <article key={stap.n} className="border border-steel p-5">
              <p className="font-mono text-sm text-brand">{stap.n}</p>
              <h2 className="mt-2 text-2xl font-semibold">{stap.title}</h2>
              <p className="mt-2 text-base text-body">{stap.text}</p>
            </article>
          ))}
        </section>
        <section data-section="aanvraag" className="max-w-3xl space-y-4 text-lg text-body">
          <h2 className="text-3xl font-semibold text-foreground">Zo vraagt u het aan</h2>
          <p>
            Vermeld bij uw offerteaanvraag dat het om 3.1 materiaal en omstempelen gaat. Stuur de tekening, het aantal
            en het materiaal mee, net als bij elk ander onderdeel.
          </p>
          <p>
            Het verspanen blijft draaien, frezen of een van de andere bewerkingen in huis. Omstempelen komt daarbij.
          </p>
          <Link href="/diensten" className="inline-flex h-12 items-center font-semibold text-brand">
            Bekijk de bewerkingen
          </Link>
        </section>
      </div>
      <PageEnd
        links={[
          { href: "/diensten", label: "Diensten" },
          { href: "/offerte", label: "Offerte, met omstempelen aan te vinken" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </main>
  );
}
