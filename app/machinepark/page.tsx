import type { Metadata } from "next";
import MachineFilter from "@/components/MachineFilter";
import PageEnd from "@/components/PageEnd";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { machineCount, machineGroups } from "@/lib/machines";
import { hallPhotos, toolPhoto } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Machinepark",
  description:
    "17 machines van KNICO in Dinxperlo: CNC-draaibanken met Y-as, subspindel en live tools, bewerkingscentra, zagen, laser, markeren en buizenschuren.",
};

const kenmerken = [
  { k: "Y-as", v: "SKT 210 Y" },
  { k: "Subspindel", v: "twee WIA’s" },
  { k: "Live tools", v: "draaien en frezen" },
  { k: "11 assen", v: "Dugard TTS42+" },
  { k: "4e as", v: "Eagle VMC 1000" },
  { k: "Hydrobar", v: "Nakamura TMC-15" },
];

export default function MachineparkPage() {
  return (
    <main>
      <PageHero
        index="Blad 02 — Machinepark"
        title="Zeventien machines, één hal"
        intro="KNICO beschikt over een uitgebreid en modern machinepark van eenvoudig tot complex. Het park staat verdeeld over zo’n 800 m²."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section data-section="kenmerken" className="grid grid-cols-2 gap-px bg-steel sm:grid-cols-3 lg:grid-cols-6">
          {kenmerken.map((item) => (
            <div key={item.k} className="bg-white px-4 py-4">
              <p className="font-mono text-sm text-brand">{item.k}</p>
              <p className="mt-1 text-base text-foreground">{item.v}</p>
            </div>
          ))}
        </section>
        <p className="mt-8 font-mono text-sm text-brand">
          {machineCount} machines · {machineGroups.length} groepen
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <figure>
            <Photo photo={hallPhotos[2]} className="w-full" />
            <figcaption className="mt-2 font-mono text-xs text-brand">{hallPhotos[2].caption}</figcaption>
          </figure>
          <figure>
            <Photo photo={hallPhotos[3]} className="w-full" />
            <figcaption className="mt-2 font-mono text-xs text-brand">{hallPhotos[3].caption}</figcaption>
          </figure>
        </div>
        <figure className="mt-4">
          <Photo photo={toolPhoto} />
          <figcaption className="mt-2 font-mono text-xs text-brand">{toolPhoto.caption}</figcaption>
        </figure>
        <div className="mt-12">
          <MachineFilter />
        </div>
      </div>
      <PageEnd
        links={[
          { href: "/diensten", label: "Diensten" },
          { href: "/productieruimte", label: "Productieruimte" },
          { href: "/omstempelen", label: "Omstempelen" },
        ]}
      />
    </main>
  );
}
