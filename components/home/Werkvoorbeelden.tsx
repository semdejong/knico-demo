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
          intro="Enkele onderdelen uit de werkplaats: een flensbus, aluminium delen, een klemstuk en een kunststof bus."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {productPhotos.map((photo, index) => (
            <li key={photo.src} className={index < 2 ? "bg-white sm:col-span-1 lg:col-span-3" : "bg-white lg:col-span-2"}>
              <div className="flex h-52 items-center justify-center bg-[#f7f7f7] p-4 lg:h-64">
                <Photo photo={photo} className="max-h-44 w-auto lg:max-h-56" />
              </div>
              <p className="border-t border-steel px-3 py-3 text-base font-semibold text-foreground">{photo.caption}</p>
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
