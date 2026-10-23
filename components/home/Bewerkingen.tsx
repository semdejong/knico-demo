import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { diensten } from "@/lib/diensten";

const cards = diensten.filter((d) => d.id !== "schuren");

export default function Bewerkingen() {
  return (
    <section data-section="bewerkingen" className="border-b border-steel">
      <div className="blueprint">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionHeading
            index="02"
            title="Bewerkingen"
            intro="Draaien, frezen, zagen, markeren en graveren. Omstempelen van 3.1 materiaal doen wij erbij."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((dienst) => (
              <li key={dienst.id}>
                <Link
                  href={`/diensten#${dienst.id}`}
                  className="card-lift flex h-full flex-col border border-steel bg-white p-5"
                >
                  <h3 className="text-2xl font-semibold">{dienst.title}</h3>
                  <p className="mt-2 flex-1 text-base text-body">{dienst.line}</p>
                  <span className="mt-4 text-sm font-semibold text-brand">Meer over {dienst.title.toLowerCase()}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/omstempelen" className="card-lift flex h-full flex-col border border-steel bg-white p-5">
                <h3 className="text-2xl font-semibold">Omstempelen</h3>
                <p className="mt-2 flex-1 text-base text-body">
                  TÜV-bevoegd sinds 2002 voor gecertificeerd 3.1 materiaal.
                </p>
                <span className="mt-4 text-sm font-semibold text-brand">Meer over omstempelen</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
