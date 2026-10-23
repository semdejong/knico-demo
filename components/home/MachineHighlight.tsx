import Link from "next/link";
import Photo from "@/components/Photo";
import { hallPhotos } from "@/lib/photos";

const points = [
  { k: "Y-as", v: "Hyundai KIA SKT 210 Y, met center en live tools" },
  { k: "Subspindel", v: "Twee Hyundai WIA-draaibanken, beide met live tools" },
  { k: "Live tools", v: "Draaien en frezen in één opspanning" },
  { k: "11 assen", v: "Dugard TTS42+ met magazijn" },
];

export default function MachineHighlight() {
  return (
    <section data-section="machinepark" className="border-b border-steel bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-accent">04</p>
          <h2 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">Minder opspanningen</h2>
          <p className="mt-3 text-lg text-white/80">
            KNICO heeft een heel park aan machines verdeeld over zo’n 800 m². Op dit moment hebben wij in totaal 17
            machines, van eenvoudig tot complex.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point.k} className="border-l-2 border-accent pl-3">
                <p className="font-mono text-sm text-accent">{point.k}</p>
                <p className="text-base text-white/90">{point.v}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/machinepark"
            className="mt-6 inline-flex h-12 items-center border border-white/40 px-5 font-semibold text-white"
          >
            Bekijk het machinepark
          </Link>
        </div>
        <div className="grid gap-3">
          <Photo photo={hallPhotos[3]} className="w-full" />
          <Photo photo={hallPhotos[2]} className="w-full" />
        </div>
      </div>
    </section>
  );
}
