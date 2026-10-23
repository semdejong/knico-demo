import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { hallPhotos, toolPhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Productieruimte",
  description: "Foto’s van de werkplaats van KNICO in Dinxperlo. De hal is ongeveer 800 m².",
};

export default function ProductieruimtePage() {
  return (
    <main>
      <PageHero
        index="Productieruimte"
        title="De werkplaats"
        intro="Hieronder vindt u enkele foto’s van delen van onze hal en de machines. Op het moment bedraagt de totale oppervlakte ongeveer 800 m²."
      />
      <div data-section="hal-fotos" className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
        {hallPhotos.map((photo) => (
          <figure key={photo.src}>
            <Photo photo={photo} className="w-full" />
            <figcaption className="mt-2 font-mono text-sm text-brand">{photo.caption}</figcaption>
          </figure>
        ))}
        <figure>
          <Photo photo={toolPhoto} />
          <figcaption className="mt-2 font-mono text-sm text-brand">{toolPhoto.caption}</figcaption>
        </figure>
        <Link href="/offerte" data-cta="offerte" className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-white">
          Stuur uw tekening
        </Link>
      </div>
    </main>
  );
}
