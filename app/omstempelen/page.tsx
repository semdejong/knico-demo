import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { omstempelTekst } from "@/lib/diensten";

export const metadata: Metadata = {
  title: "Omstempelen 3.1 materiaal",
  description:
    "KNICO is sinds 2002 door de TÜV bevoegd tot het omstempelen van gecertificeerd 3.1 materiaal.",
};

export default function OmstempelenPage() {
  return (
    <main>
      <PageHero index="3.1 materiaal" title="Omstempelen van gecertificeerd 3.1 materiaal" intro={omstempelTekst} />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
        <section data-section="uitleg" className="max-w-3xl space-y-4 text-lg text-body">
          <p>
            Heeft uw onderdeel gecertificeerd 3.1 materiaal nodig en moet dat omgestempeld worden, dan kan dat bij
            KNICO. De bevoegdheid loopt sinds 2002 en wordt na de nodige controles regelmatig verlengd.
          </p>
          <p>
            Vermeld bij uw aanvraag dat het om 3.1 materiaal en omstempelen gaat. Stuur de tekening, het aantal en het
            materiaal mee.
          </p>
        </section>
        <Link href="/offerte" data-cta="offerte" className="inline-flex h-12 items-center bg-brand px-5 font-semibold text-white">
          Stuur uw tekening
        </Link>
      </div>
    </main>
  );
}
