import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import PageEnd from "@/components/PageEnd";
import PageHero from "@/components/PageHero";
import { diensten, omstempelTekst } from "@/lib/diensten";
import { machineGroups, machineLabel, type Machine } from "@/lib/machines";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Draaien, frezen, zagen, naald markeren, laser graveren en buizen schuren bij KNICO in Dinxperlo. Enkel stuks tot middelgrote series.",
};

function machinesVoor(id: string): Machine[] {
  const markeren = machineGroups.find((group) => group.id === "markeren");
  if (id === "graveren") return markeren?.machines.filter((machine) => machine.id === "brm") ?? [];
  if (id === "markeren") return markeren?.machines.filter((machine) => machine.id === "richter") ?? [];
  return machineGroups.find((group) => group.id === id)?.machines ?? [];
}

export default function DienstenPage() {
  return (
    <main>
      <PageHero
        index="Blad 01 — Diensten"
        title="Wat wij bewerken"
        intro="Van zaag tot gravering in één hal. Enkel stuks tot middelgrote series, in kunststof, aluminium en roestvast staal."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6">
        {diensten.map((dienst, index) => {
          const machines = machinesVoor(dienst.id);
          return (
            <section key={dienst.id} id={dienst.id} data-section={dienst.id} className="scroll-mt-32">
              <Frame>
                <div className="grid lg:grid-cols-[1.4fr_0.8fr]">
                  <div className="p-6 sm:p-8">
                    <p className="font-mono text-sm text-brand">{String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-1 text-3xl font-semibold">{dienst.title}</h2>
                    <p className="mt-3 text-lg text-body">{dienst.text}</p>
                    <p className="mt-3 text-base text-body">{dienst.uitleg}</p>
                    <p className="mt-4 border-l-2 border-signal pl-3 text-base text-foreground">{dienst.when}</p>
                  </div>
                  <div className="border-t border-foreground/10 bg-muted p-6 lg:border-l lg:border-t-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-brand">Op de machine</p>
                    <ul className="mt-3 space-y-3">
                      {machines.map((machine) => (
                        <li key={machine.id}>
                          <p className="font-semibold text-foreground">{machineLabel(machine)}</p>
                          <p className="font-mono text-xs text-body">
                            {machine.kind}
                            {machine.notes ? ` · ${machine.notes}` : ""}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Link href="/machinepark" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand">
                      Heel het machinepark
                    </Link>
                  </div>
                </div>
              </Frame>
            </section>
          );
        })}
        <section id="omstempelen" data-section="omstempelen" className="scroll-mt-32">
          <Frame className="bg-ink p-6 text-white sm:p-8">
            <p className="font-mono text-sm text-accent">07</p>
            <h2 className="mt-1 text-3xl font-semibold text-white">Omstempelen</h2>
            <p className="mt-3 max-w-3xl text-lg text-white/85">{omstempelTekst}</p>
            <Link href="/omstempelen" className="mt-4 inline-flex h-12 items-center font-semibold text-white underline">
              Het blad over 3.1 materiaal
            </Link>
          </Frame>
        </section>
      </div>
      <PageEnd
        links={[
          { href: "/machinepark", label: "Machinepark" },
          { href: "/omstempelen", label: "Omstempelen" },
          { href: "/werkvoorbeelden", label: "Werkvoorbeelden" },
        ]}
      />
    </main>
  );
}
