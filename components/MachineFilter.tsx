"use client";

import { useState } from "react";
import { machineGroups, machineLabel } from "@/lib/machines";

const numbered = (() => {
  let n = 0;
  return machineGroups.map((group) => ({
    ...group,
    machines: group.machines.map((machine) => ({ ...machine, nr: String(++n).padStart(2, "0") })),
  }));
})();

export default function MachineFilter() {
  const [active, setActive] = useState("alles");
  const groups = active === "alles" ? numbered : numbered.filter((g) => g.id === active);

  return (
    <div data-section="machine-lijst">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter op bewerking">
        <FilterButton id="alles" label="Alles" active={active} onSelect={setActive} />
        {machineGroups.map((group) => (
          <FilterButton key={group.id} id={group.id} label={group.title} active={active} onSelect={setActive} />
        ))}
      </div>
      <div className="mt-8 space-y-10">
        {groups.map((group) => (
          <section key={group.id} aria-labelledby={`groep-${group.id}`}>
            <h2 id={`groep-${group.id}`} className="text-2xl font-semibold">
              {group.title}
            </h2>
            <p className="mt-2 max-w-3xl text-base text-body">{group.summary}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {group.machines.map((machine) => (
                <li key={machine.id} className="card-lift border border-steel bg-white">
                  <div className="flex items-center justify-between gap-3 border-b border-steel px-4 py-2 font-mono text-xs">
                    <span className="text-brand">{machine.nr}</span>
                    <span className="text-body">{machine.kind}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-lg font-semibold text-foreground">{machineLabel(machine)}</p>
                    {machine.notes ? (
                      <p className="mt-2 border-l-2 border-signal pl-2 text-base text-body">{machine.notes}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  id,
  label,
  active,
  onSelect,
}: {
  id: string;
  label: string;
  active: string;
  onSelect: (id: string) => void;
}) {
  const on = active === id;
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => onSelect(id)}
      className={`inline-flex h-11 items-center px-3 text-sm font-semibold ${
        on ? "bg-brand text-white" : "border border-steel bg-white text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
