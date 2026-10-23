import Link from "next/link";
import Photo from "@/components/Photo";
import SectionHeading from "@/components/SectionHeading";
import { productPhotos } from "@/lib/photos";

export default function Werkvoorbeelden() {
  return (
    <section data-section="werkvoorbeelden" className="border-b border-steel bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          index="06"
          title="Impressie"
          intro="Enkele werkvoorbeelden uit de werkplaats. Geen klantnamen: alleen het onderdeel zoals het van de machine komt."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productPhotos.map((photo) => (
            <li key={photo.src} className="flex flex-col items-start">
              <Photo photo={photo} className="bg-white" />
              <p className="mt-2 text-base font-semibold text-foreground">{photo.caption}</p>
            </li>
          ))}
        </ul>
        <Link href="/werkvoorbeelden" className="mt-8 inline-flex h-12 items-center font-semibold text-brand">
          Alle werkvoorbeelden
        </Link>
      </div>
    </section>
  );
}
