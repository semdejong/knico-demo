import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function Familie() {
  return (
    <section data-section="familie" className="border-b border-steel">
      <div className="blueprint">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading index="08" title="Familiebedrijf sinds 1996" />
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-body">
            <p>
              KNICO is opgericht in 1996 op 1 april, door drie broers. In 2005 hebben wij onze werkruimte uitgebreid van
              400 naar 800 m².
            </p>
            <p>
              U spreekt direct met de mensen die uw onderdelen maken. Korte lijnen, flexibel voor enkelstuks en
              middelgrote series. Dertig jaar KNICO, in Dinxperlo.
            </p>
          </div>
          <Link href="/over-ons" className="mt-6 inline-flex h-12 items-center font-semibold text-brand">
            Over KNICO
          </Link>
        </div>
      </div>
    </section>
  );
}
