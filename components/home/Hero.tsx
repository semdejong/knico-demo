import Link from "next/link";
import { content } from "@/content";
import Photo from "@/components/Photo";
import { hallPhotos } from "@/lib/photos";

const marks = [
  { label: "800 m²", note: "werkplaats" },
  { label: "17 machines", note: "eigen park" },
  { label: "sinds 1996", note: "1 april" },
];

export default function Hero() {
  return (
    <section data-section="hero" className="border-b border-steel">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:py-16">
        <div>
          <p className="font-mono text-sm text-brand">01 — Dinxperlo</p>
          <h1 className="mt-2 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            CNC draai- en freeswerk uit Dinxperlo
          </h1>
          <p className="mt-4 max-w-xl text-lg text-body">
            Van enkel stuks tot middelgrote series in kunststof, aluminium en roestvast staal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/offerte"
              data-cta="offerte"
              className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-white"
            >
              Stuur uw tekening
            </Link>
            <a
              href={content.company.phoneTel}
              className="inline-flex h-12 items-center border border-brand px-5 font-semibold text-brand"
            >
              Bel {content.company.phoneDisplay}
            </a>
          </div>
        </div>
        <figure>
          <div className="relative border border-steel bg-muted p-2">
            <Photo photo={hallPhotos[0]} className="w-full" />
            <figcaption className="mt-2 grid grid-cols-3 gap-2 sm:absolute sm:inset-x-2 sm:top-2 sm:mt-0 sm:p-2">
              {marks.map((mark) => (
                <span key={mark.label} className="bg-white/92 px-2 py-1 font-mono text-[11px] leading-tight text-foreground sm:shadow-sm">
                  <span className="block text-brand">{mark.label}</span>
                  {mark.note}
                </span>
              ))}
            </figcaption>
          </div>
          <div className="mt-2 flex items-center gap-2 px-1" aria-hidden>
            <span className="h-2 w-px bg-brand" />
            <span className="h-px flex-1 bg-brand/70" />
            <span className="font-mono text-[11px] text-brand">werkplaats</span>
            <span className="h-px flex-1 bg-brand/70" />
            <span className="h-2 w-px bg-brand" />
          </div>
        </figure>
      </div>
    </section>
  );
}
