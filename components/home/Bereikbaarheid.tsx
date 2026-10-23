import Link from "next/link";
import { content } from "@/content";

export default function Bereikbaarheid() {
  const { company } = content;

  return (
    <section data-section="contact" className="border-b border-steel">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="border border-foreground/20">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-sm text-brand">11</p>
              <h2 className="mt-1 text-3xl font-semibold sm:text-4xl">Bel of mail ons</h2>
              <p className="mt-3 text-lg text-body">
                KNICO zit in {company.city}, in de {company.region}, aan de Duitse grens. Openingstijden publiceren wij
                niet: u belt of mailt, of u stuurt uw tekening.
              </p>
            </div>
            <div className="font-mono text-sm">
              <a href={company.phoneTel} className="flex min-h-11 items-center text-lg font-semibold text-brand">
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex min-h-11 items-center text-brand underline">
                {company.email}
              </a>
              <p className="mt-2 text-base text-body">{company.city}</p>
              <Link href="/contact" className="mt-4 inline-flex h-11 items-center font-semibold text-brand">
                Contactpagina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
