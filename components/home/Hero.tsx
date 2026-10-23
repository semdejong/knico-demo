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
          <div className="border border-steel bg-muted p-2">
            <Photo photo={hallPhotos[0]} className="w-full" />
            <div className="mt-2 flex items-end justify-between gap-3 px-1">
              <svg viewBox="0 0 240 18" className="h-4 flex-1" aria-hidden>
                <line className="dim-line" x1="8" y1="9" x2="232" y2="9" stroke="#1D6FA5" strokeWidth="1" />
                <polyline points="8,5 2,9 8,13" fill="none" stroke="#1D6FA5" strokeWidth="1" />
                <polyline points="232,5 238,9 232,13" fill="none" stroke="#1D6FA5" strokeWidth="1" />
              </svg>
              <span className="font-mono text-[11px] text-signal">hal</span>
            </div>
          </div>
          <figcaption className="mt-3 grid grid-cols-3 gap-2">
            {marks.map((mark) => (
              <div key={mark.label} className="border-t-2 border-brand pt-1">
                <p className="font-mono text-sm font-medium text-foreground">{mark.label}</p>
                <p className="text-sm text-body">{mark.note}</p>
              </div>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
