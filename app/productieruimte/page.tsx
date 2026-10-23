import type { Metadata } from "next";
import Frame from "@/components/Frame";
import PageEnd from "@/components/PageEnd";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { hallPhotos, toolPhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Productieruimte",
  description: "Foto’s van de werkplaats van KNICO in Dinxperlo. De hal is ongeveer 800 m².",
};

const notities = [
  "Rijen CNC-draaibanken en bewerkingscentra, met gereedschapswagens en spanenbakken ertussen.",
  "Hyundai WIA-draaibanken, een gereedschapsrek en staafmateriaal langs de wand.",
  "Het bedieningspaneel van de Hyundai WIA L160LMSA, met de deur open naar de spil.",
  "Hoofdspil en tegenspil tegenover elkaar, met een dun gedraaid werkstuk ertussen.",
];

export default function ProductieruimtePage() {
  return (
    <main>
      <PageHero
        index="Blad 03 — Productieruimte"
        title="De werkplaats"
        intro="Hieronder vindt u enkele foto’s van delen van onze hal en de machines. Op het moment bedraagt de totale oppervlakte ongeveer 800 m²."
      />
      <div data-section="hal-fotos" className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6">
        <p className="max-w-3xl text-lg text-body">
          De hal is in 2005 uitgebreid van 400 naar 800 m². Draaien, frezen, zagen, markeren, graveren en schuren staan
          bij elkaar. De foto’s tonen een deel van die werkplaats.
        </p>
        {hallPhotos.map((photo, index) => (
          <figure key={photo.src}>
            <Frame>
              <Photo photo={photo} className="w-full" />
              <figcaption className="grid gap-2 border-t border-foreground/15 px-4 py-3 sm:grid-cols-[auto_1fr_auto] sm:items-baseline">
                <span className="font-mono text-sm text-brand">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold text-foreground">{photo.caption}</span>
                <span className="font-mono text-xs text-wordmark">800 m²</span>
              </figcaption>
            </Frame>
            <p className="mt-3 max-w-3xl text-base text-body">{notities[index]}</p>
          </figure>
        ))}
        <figure data-section="gereedschap">
          <Frame className="inline-block max-w-full bg-muted p-3">
            <Photo photo={toolPhoto} />
            <figcaption className="mt-2 font-mono text-sm text-brand">{toolPhoto.caption}</figcaption>
          </Frame>
          <p className="mt-3 max-w-3xl text-base text-body">
            Een smalle opname van de gereedschapsrevolver, met twee frezen in de houder.
          </p>
        </figure>
      </div>
      <PageEnd
        links={[
          { href: "/machinepark", label: "Machinepark" },
          { href: "/werkvoorbeelden", label: "Werkvoorbeelden" },
          { href: "/diensten", label: "Diensten" },
        ]}
      />
    </main>
  );
}
