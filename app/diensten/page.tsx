import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { diensten, omstempelTekst } from "@/lib/diensten";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Draaien, frezen, zagen, naald markeren, laser graveren en buizen schuren bij KNICO in Dinxperlo. Enkel stuks tot middelgrote series.",
};

export default function DienstenPage() {
  return (
    <main>
      <PageHero
        index="Diensten"
        title="Wat wij bewerken"
        intro="KNICO CNC Metaalbewerking is een toeleveringsbedrijf dat zich specialiseert in het maken van producten uit verschillende soorten materiaal, zoals kunststof, aluminium en roestvast staal."
      />
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6">
        {diensten.map((dienst) => (
          <section key={dienst.id} id={dienst.id} data-section={dienst.id} className="scroll-mt-32 border-t border-steel pt-8">
            <h2 className="text-3xl font-semibold">{dienst.title}</h2>
            <p className="mt-3 max-w-3xl text-lg text-body">{dienst.text}</p>
            <p className="mt-3 max-w-3xl text-base text-body">{dienst.when}</p>
          </section>
        ))}
        <section id="omstempelen" data-section="omstempelen" className="scroll-mt-32 border border-foreground/15 p-6">
          <h2 className="text-3xl font-semibold">Omstempelen</h2>
          <p className="mt-3 max-w-3xl text-lg text-body">{omstempelTekst}</p>
          <Link href="/omstempelen" className="mt-4 inline-flex h-12 items-center font-semibold text-brand">
            Meer over omstempelen
          </Link>
        </section>
        <Link href="/offerte" data-cta="offerte" className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-white">
          Stuur uw tekening
        </Link>
      </div>
    </main>
  );
}
