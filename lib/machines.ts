export type Machine = {
  id: string;
  kind: string;
  brand: string;
  type: string;
  notes: string;
};

export type MachineGroup = {
  id: string;
  title: string;
  summary: string;
  machines: Machine[];
};

/** Lijst zoals op knico.nl (machinepark, 2014). 17 machines. */
export const machineGroups: MachineGroup[] = [
  {
    id: "draaien",
    title: "Draaien",
    summary:
      "Zeven CNC-draaibanken en één conventionele draaibank. Live tools, Y-as, center, subspindel en een Dugard met 11 assen en magazijn.",
    machines: [
      { id: "skt-21", kind: "CNC Draaibank", brand: "Hyundai KIA", type: "SKT-21", notes: "Center" },
      { id: "skt-21-lm", kind: "CNC Draaibank", brand: "Hyundai KIA", type: "SKT-21 LM", notes: "Center + live tools" },
      { id: "skt-210-y", kind: "CNC Draaibank", brand: "Hyundai KIA", type: "SKT 210 Y", notes: "Y-as + center + live tools" },
      { id: "l230lmsa", kind: "CNC Draaibank", brand: "Hyundai WIA", type: "L230LMSA", notes: "Subspindel + live tools" },
      { id: "l160lmsa", kind: "CNC Draaibank", brand: "Hyundai WIA", type: "L160LMSA", notes: "Subspindel + live tools" },
      { id: "tmc-15", kind: "CNC Draaibank", brand: "Nakamura Tome", type: "TMC-15", notes: "Hydrobar" },
      { id: "tts42", kind: "CNC Draaibank", brand: "Dugard", type: "TTS42+", notes: "11 assen + magazijn" },
      { id: "vdf", kind: "Conventionele draaibank", brand: "VDF", type: "VDF", notes: "" },
    ],
  },
  {
    id: "frezen",
    title: "Frezen",
    summary: "Drie CNC-bewerkingscentra, waarvan één met een 4e as.",
    machines: [
      { id: "eagle", kind: "CNC Bewerkingscentrum", brand: "Eagle", type: "VMC 1000", notes: "4e as" },
      { id: "yang", kind: "CNC Bewerkingscentrum", brand: "Yang", type: "VMC 1000", notes: "" },
      { id: "mazak", kind: "CNC Bewerkingscentrum", brand: "Mazak", type: "V-414", notes: "" },
    ],
  },
  {
    id: "zagen",
    title: "Zagen",
    summary: "Twee bandzaagmachines om materiaal op lengte te zagen.",
    machines: [
      { id: "bomar", kind: "Bandzaagmachine", brand: "Bomar", type: "STG 260 DGH", notes: "" },
      { id: "everising", kind: "Bandzaagmachine", brand: "Everising", type: "H-360 HA", notes: "" },
    ],
  },
  {
    id: "markeren",
    title: "Markeren en graveren",
    summary: "Naald markeren en laser snijden of graveren in eigen huis.",
    machines: [
      { id: "brm", kind: "Laser snij/graveermachine", brand: "BRM", type: "90125/100", notes: "" },
      { id: "richter", kind: "Markeermachine", brand: "Richter", type: "UNIROT", notes: "" },
    ],
  },
  {
    id: "schuren",
    title: "Schuren",
    summary: "Twee buizenschuurmachines met aan- en afvoerbaan.",
    machines: [
      { id: "mlw", kind: "Buizenschuurmachine", brand: "NS Maquinas", type: "MLW 100", notes: "Met aan- en afvoerbaan" },
      { id: "rc200", kind: "Buizenschuurmachine", brand: "NS Maquinas", type: "RC 200", notes: "Met aan- en afvoerbaan" },
    ],
  },
];

export const machineCount = machineGroups.reduce((n, g) => n + g.machines.length, 0);

export function machineLabel(machine: { brand: string; type: string }) {
  if (!machine.type || machine.type === machine.brand) return machine.brand;
  return `${machine.brand} ${machine.type}`;
}
