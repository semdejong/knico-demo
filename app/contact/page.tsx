import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel of mail KNICO in Dinxperlo: 0315-655424 en info@knico.nl. Voor een prijs stuurt u uw tekening.",
};

export default function ContactPage() {
  const { company } = content;

  return (
    <main>
      <PageHero
        index="Contact"
        title="Neem contact op"
        intro="Heeft u vragen of bent u geïnteresseerd in één van onze diensten? Bel of mail ons, of stuur uw tekening voor een offerte."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <section data-section="gegevens" className="border border-foreground/20 p-6">
          <h2 className="text-2xl font-semibold">KNICO</h2>
          <p className="mt-3 text-lg text-body">
            {company.city}, in de {company.region}, aan de Duitse grens.
          </p>
          <p className="mt-3 text-base text-body">Openingstijden publiceren wij niet. Bel of mail ons.</p>
          <a href={company.phoneTel} className="mt-4 flex h-12 items-center text-xl font-semibold text-brand">
            {company.phoneDisplay}
          </a>
          <a href={`mailto:${company.email}`} className="flex h-12 items-center text-lg text-brand underline">
            {company.email}
          </a>
        </section>
        <section data-section="offerte-verwijzing" className="bg-muted p-6">
          <h2 className="text-2xl font-semibold">Een prijs voor uw onderdeel</h2>
          <p className="mt-3 text-lg text-body">
            Voor een offerte stuurt u een tekening, het aantal en het materiaal. Het formulier opent een e-mail naar{" "}
            {company.email}; de tekening voegt u zelf als bijlage toe.
          </p>
          <Link
            href="/offerte"
            data-cta="offerte"
            className="mt-6 inline-flex h-12 items-center bg-brand px-5 font-semibold text-white"
          >
            Offerte aanvragen
          </Link>
        </section>
      </div>
    </main>
  );
}
