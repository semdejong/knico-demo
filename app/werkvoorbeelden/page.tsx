import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { productPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Werkvoorbeelden",
  description:
    "Impressie van werk van KNICO: gedraaide flensbus, gefreesde aluminium plaat, aluminium arm, klemstuk en een kunststof bus.",
};

export default function WerkvoorbeeldenPage() {
  return (
    <main>
      <PageHero
        index="Impressie"
        title="Werkvoorbeelden"
        intro="Een indruk van onderdelen die van de machine komen. Wij noemen geen klanten of toepassingen: alleen het onderdeel zelf."
      />
      <div data-section="producten" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ul className="grid gap-8 sm:grid-cols-2">
          {productPhotos.map((photo) => (
            <li key={photo.src} className="bg-muted p-4">
              <Photo photo={photo} />
              <h2 className="mt-3 text-xl font-semibold">{photo.caption}</h2>
            </li>
          ))}
        </ul>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="mt-10 inline-flex h-12 items-center bg-brand px-5 font-semibold text-white"
        >
          Stuur uw tekening
        </Link>
      </div>
    </main>
  );
}
