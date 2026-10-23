import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { hallPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "KNICO is een familiebedrijf in Dinxperlo, opgericht op 1 april 1996 door drie broers. Sinds 2005 werken wij op 800 m².",
};

export default function OverOnsPage() {
  return (
    <main>
      <PageHero
        index="Sinds 1996"
        title="Familiebedrijf in Dinxperlo"
        intro="KNICO is een toeleveringsbedrijf gevestigd in Dinxperlo dat zich specialiseert in het maken van producten uit verschillende soorten materiaal, zoals kunststof, aluminium en roestvast staal."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <section data-section="verhaal" className="space-y-4 text-lg text-body">
          <h2 className="text-3xl font-semibold text-foreground">Drie broers, 1 april 1996</h2>
          <p>KNICO is opgericht in 1996 op 1 april, door drie broers.</p>
          <p>In 2005 hebben wij onze werkruimte uitgebreid van 400 naar 800 m².</p>
          <p>
            Wij maken aantallen die variëren van enkel stuks tot middelgrote series, en leveren aan diverse
            bedrijfstakken. U spreekt direct met de mensen die uw onderdelen maken. Korte lijnen, in de Achterhoek, aan
            de Duitse grens.
          </p>
          <p>Dertig jaar KNICO.</p>
          <Link href="/offerte" data-cta="offerte" className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-white">
            Stuur uw tekening
          </Link>
        </section>
        <Photo photo={hallPhotos[1]} className="w-full" />
      </div>
    </main>
  );
}
