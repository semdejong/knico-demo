import type { Metadata } from "next";
import Frame from "@/components/Frame";
import PageEnd from "@/components/PageEnd";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { hallPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "KNICO is een familiebedrijf in Dinxperlo, opgericht op 1 april 1996 door drie broers. Sinds 2005 werken wij op 800 m².",
};

const lijn = [
  { jaar: "1996", titel: "1 april", tekst: "KNICO is opgericht door drie broers." },
  { jaar: "2002", titel: "3.1 materiaal", tekst: "Bevoegd door de TÜV tot het omstempelen van gecertificeerd materiaal." },
  { jaar: "2005", titel: "400 → 800 m²", tekst: "De werkruimte is uitgebreid. Die oppervlakte heeft de hal nog." },
  { jaar: "30 jaar", titel: "Dinxperlo", tekst: "Een familiebedrijf aan de Duitse grens, met 17 machines in eigen huis." },
];

export default function OverOnsPage() {
  return (
    <main>
      <PageHero
        index="Blad 06 — Over ons"
        title="Familiebedrijf in Dinxperlo"
        intro="KNICO is een toeleveringsbedrijf gevestigd in Dinxperlo dat zich specialiseert in het maken van producten uit verschillende soorten materiaal, zoals kunststof, aluminium en roestvast staal."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section data-section="verhaal" className="space-y-4 text-lg text-body">
          <h2 className="text-3xl font-semibold text-foreground">Drie broers, één werkplaats</h2>
          <p>
            Wij maken aantallen die variëren van enkel stuks tot middelgrote series, en leveren aan diverse
            bedrijfstakken.
          </p>
          <p>
            U spreekt direct met de mensen die uw onderdelen maken. Korte lijnen: de tekening komt bij de mensen aan de
            machine.
          </p>
          <p>Dinxperlo ligt in de Achterhoek, aan de Duitse grens.</p>
        </section>
        <Photo photo={hallPhotos[0]} className="w-full" />
      </div>
      <section data-section="tijdlijn" className="border-y border-steel bg-muted">
        <ol className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {lijn.map((punt) => (
            <li key={punt.jaar} className="border-steel px-6 py-8 lg:border-l lg:first:border-l-0">
              <p className="font-mono text-sm text-brand">{punt.jaar}</p>
              <h2 className="mt-2 text-2xl font-semibold">{punt.titel}</h2>
              <p className="mt-2 text-base text-body">{punt.tekst}</p>
              <span className="mt-4 block h-px w-8 bg-signal" aria-hidden />
            </li>
          ))}
        </ol>
      </section>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <Photo photo={hallPhotos[1]} className="w-full" />
        <Frame>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-xs text-brand">In het kort</p>
            <p className="mt-3 text-lg text-body">
              17 machines op ongeveer 800 m². Draaien, frezen, zagen, naald markeren, laser graveren, buizen schuren en
              omstempelen van 3.1 materiaal. Van enkel stuks tot middelgrote series.
            </p>
          </div>
        </Frame>
      </div>
      <PageEnd
        links={[
          { href: "/diensten", label: "Diensten" },
          { href: "/machinepark", label: "Machinepark" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </main>
  );
}
