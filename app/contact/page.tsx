import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import PageHero from "@/components/PageHero";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel of mail KNICO in Dinxperlo: 0315-655424 en info@knico.nl. Voor een prijs stuurt u uw tekening.",
};

export default function ContactPage() {
  const { company } = content;

  return (
    <main>
      <PageHero
        index="Blad 08 — Contact"
        title="Bel of mail ons"
        intro="Een vraag, of een tekening voor een offerte. U belt of mailt KNICO in Dinxperlo."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={company.phoneTel} data-section="bellen" className="card-lift border border-steel p-4 sm:p-6">
            <p className="font-mono text-xs text-brand">01</p>
            <h2 className="mt-2 text-2xl font-semibold">Bellen</h2>
            <p className="mt-2 text-base text-body">Direct met de werkplaats.</p>
            <p className="mt-3 text-xl font-semibold text-brand">{company.phoneDisplay}</p>
          </a>
          <a href={`mailto:${company.email}`} data-section="mailen" className="card-lift border border-steel p-4 sm:p-6">
            <p className="font-mono text-xs text-brand">02</p>
            <h2 className="mt-2 text-2xl font-semibold">Mailen</h2>
            <p className="mt-2 text-base text-body">Voor een vraag of een tekening als bijlage.</p>
            <p className="mt-3 text-lg font-semibold text-brand underline">{company.email}</p>
          </a>
          <Link href="/offerte" data-cta="offerte" data-section="offerte-verwijzing" className="card-lift bg-brand p-4 text-white sm:p-6">
            <p className="font-mono text-xs text-white/80">03</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Tekening</h2>
            <p className="mt-2 text-base text-white/90">Aantal, materiaal en de bewerkingen. De prijs vraagt u hier.</p>
            <p className="mt-4 text-lg font-semibold">Offerte aanvragen</p>
          </Link>
        </div>
        <section data-section="gegevens" className="mt-10">
          <Frame>
            <div className="grid md:grid-cols-[1fr_1fr]">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">KNICO CNC Metaalbewerking</h2>
                <p className="mt-3 text-lg text-body">
                  {company.city}, in de {company.region}, aan de Duitse grens.
                </p>
                <p className="mt-3 text-base text-body">Bel of mail ons. Voor een offerte stuurt u uw tekening.</p>
              </div>
              <div className="border-t border-foreground/15 p-6 md:border-l md:border-t-0 sm:p-8" data-section="ligging">
                <p className="font-mono text-xs text-brand">Ligging</p>
                <div className="mt-4 flex items-center gap-2 font-mono text-sm text-foreground" aria-hidden>
                  <span>Achterhoek</span>
                  <span className="h-px flex-1 bg-brand" />
                  <span className="text-brand">Dinxperlo</span>
                  <span className="h-px flex-1 bg-brand" />
                  <span>grens</span>
                </div>
                <p className="mt-4 text-base text-body">
                  Dinxperlo ligt in de Achterhoek, direct aan de Duitse grens. Bel of mail ons voor de weg ernaartoe.
                </p>
              </div>
            </div>
          </Frame>
        </section>
      </div>
    </main>
  );
}
