import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import PageEnd from "@/components/PageEnd";
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
        index="Blad 04 — Impressie"
        title="Werkvoorbeelden"
        intro="Onderdelen zoals ze van de machine komen: een flensbus, een aluminium plaat, een aluminium arm, een klemstuk en een kunststof bus."
      />
      <div data-section="producten" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="max-w-3xl text-lg text-body">
          Dit is de impressie van de werkplaats. De foto’s blijven op hun eigen afmeting, op een lichtgrijs vlak, zoals
          een onderdeel op de meettafel.
        </p>
        <ul className="mt-8 grid gap-8 lg:grid-cols-2">
          {productPhotos.map((photo, index) => (
            <li key={photo.src}>
              <Frame className="bg-muted">
                <div className="flex justify-center p-4 sm:p-6">
                  <Photo photo={photo} />
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 border-t border-foreground/15 bg-white px-4 py-3">
                  <span className="font-mono text-sm text-brand">IMP-{String(index + 1).padStart(2, "0")}</span>
                  <h2 className="text-xl font-semibold">{photo.caption}</h2>
                  <span className="col-start-2 mt-1 text-base text-body">{photo.bewerking}</span>
                  {photo.href ? (
                    <Link href={photo.href} className="col-start-2 mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-brand">
                      Bijpassende bewerking
                    </Link>
                  ) : null}
                </div>
              </Frame>
            </li>
          ))}
        </ul>
      </div>
      <PageEnd
        links={[
          { href: "/diensten", label: "Diensten" },
          { href: "/productieruimte", label: "Productieruimte" },
          { href: "/machinepark", label: "Machinepark" },
        ]}
      />
    </main>
  );
}
