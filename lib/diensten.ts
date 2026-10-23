export type Dienst = {
  id: string;
  title: string;
  line: string;
  text: string;
  when: string;
};

export const diensten: Dienst[] = [
  {
    id: "draaien",
    title: "Draaien",
    line: "CNC-draaiwerk, ook met Y-as, live tools en subspindel.",
    text: "Wij draaien op CNC-draaibanken met center, live tools, Y-as of subspindel, en op een conventionele draaibank. Op de machines met live tools of Y-as kunnen draaien en frezen in één opspanning. De Dugard TTS42+ heeft 11 assen en een magazijn.",
    when: "Voor gedraaide onderdelen, van enkel stuks tot middelgrote series, in kunststof, aluminium en roestvast staal.",
  },
  {
    id: "frezen",
    title: "Frezen",
    line: "CNC-bewerkingscentra, één met een 4e as.",
    text: "Frezen gebeurt op drie CNC-bewerkingscentra: Eagle VMC 1000 met 4e as, Yang VMC 1000 en Mazak V-414. Zo bewerken wij vlakke en geprofileerde onderdelen in eigen huis.",
    when: "Wanneer het onderdeel gefreesd moet worden, naast of in plaats van draaiwerk.",
  },
  {
    id: "zagen",
    title: "Zagen",
    line: "Materiaal op lengte op twee bandzaagmachines.",
    text: "Twee bandzaagmachines — Bomar STG 260 DGH en Everising H-360 HA — zagen het uitgangsmateriaal op lengte, als start van de bewerking in dezelfde hal.",
    when: "Als voorbereiding op draaien of frezen, zodat het onderdeel in één huis verder gaat.",
  },
  {
    id: "markeren",
    title: "Naald markeren",
    line: "Markeren op de Richter UNIROT.",
    text: "Met de Richter UNIROT markeermachine naaldmarkeren wij onderdelen in eigen huis, direct na het verspanen.",
    when: "Wanneer het onderdeel een markering moet krijgen, zonder een extra toeleverancier.",
  },
  {
    id: "graveren",
    title: "Laser graveren",
    line: "Laser graveren en lasersnijden op de BRM 90125/100.",
    text: "De BRM 90125/100 is een laser snij- en graveermachine. Graveren en lasersnijden doen wij zelf, in dezelfde werkplaats als het draai- en freeswerk.",
    when: "Voor gravering of lasersnijden aan het onderdeel dat wij ook verspanen.",
  },
  {
    id: "schuren",
    title: "Buizen schuren",
    line: "Twee buizenschuurmachines met aan- en afvoerbaan.",
    text: "Voor de afwerking van buizen staan twee NS Maquinas buizenschuurmachines: de MLW 100 en de RC 200, beide met aan- en afvoerbaan.",
    when: "Wanneer buizen geschuurd moeten worden als onderdeel van de bewerking.",
  },
];

export const omstempelTekst =
  "KNICO is sinds 2002 door de TÜV bevoegd tot het omstempelen van gecertificeerd 3.1 materiaal. Deze bevoegdheid wordt na de nodige controles regelmatig verlengd.";
