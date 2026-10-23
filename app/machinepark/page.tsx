import type { Metadata } from "next";
import Link from "next/link";
import MachineFilter from "@/components/MachineFilter";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { machineCount } from "@/lib/machines";
import { hallPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Machinepark",
  description:
    "17 machines van KNICO in Dinxperlo: CNC-draaibanken met Y-as, subspindel en live tools, bewerkingscentra, zagen, laser, markeren en buizenschuren.",
};

export default function MachineparkPage() {
  return (
    <main>
      <PageHero
        index="Machinepark"
        title="Zeventien machines, één hal"
        intro="KNICO beschikt over een uitgebreid en modern machinepark van eenvoudig tot complex. Het park staat verdeeld over zo’n 800 m²."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="mb-6 font-mono text-sm text-brand">{machineCount} machines</p>
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <Photo photo={hallPhotos[2]} className="w-full" />
          <Photo photo={hallPhotos[3]} className="w-full" />
        </div>
        <MachineFilter />
        <Link
          href="/offerte"
          data-cta="offerte"
          className="mt-10 inline-flex h-12 items-center bg-brand px-5 font-semibold text-white"
        >
          Stuur uw tekening
        </Link>
      </div>
    </main>
  );
}
