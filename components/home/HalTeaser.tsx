import Link from "next/link";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";
import { hallPhotos, toolPhoto } from "@/lib/photos";

export default function HalTeaser() {
  return (
    <section data-section="productieruimte" className="border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          index="09"
          title="De hal"
          intro="Foto’s van een deel van de werkplaats. De totale oppervlakte bedraagt ongeveer 800 m²."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Photo photo={hallPhotos[1]} className="w-full" />
          <Photo photo={hallPhotos[0]} className="w-full" />
        </div>
        <Photo photo={toolPhoto} className="mt-4" />
        <Link href="/productieruimte" className="mt-6 inline-flex h-12 items-center font-semibold text-brand">
          Bekijk de productieruimte
        </Link>
      </div>
    </section>
  );
}
