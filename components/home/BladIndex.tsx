import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { bladen } from "@/lib/bladen";

export default function BladIndex() {
  return (
    <section data-section="inhoud" className="border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          index="12"
          title="Inhoud van het blad"
          intro="Acht pagina’s, dezelfde volgorde als een tekening: eerst wat wij maken, dan de machines, de hal en de voorbeelden."
        />
        <ol className="mt-8 divide-y divide-steel border border-steel">
          {bladen.map((blad) => (
            <li key={blad.href}>
              <Link
                href={blad.href}
                data-cta={blad.href === "/offerte" ? "offerte" : undefined}
                className="grid grid-cols-[3.5rem_1fr] gap-3 px-4 py-4 hover:bg-muted sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"
              >
                <span className="font-mono text-sm text-brand">{blad.nr}</span>
                <span className="font-semibold text-foreground">{blad.title}</span>
                <span className="text-base text-body sm:col-auto col-span-1">{blad.line}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
