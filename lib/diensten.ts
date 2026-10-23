export type Dienst = {
  id: string;
  title: string;
  line: string;
  text: string;
  uitleg: string;
  when: string;
};

export const diensten: Dienst[] = [
  {
    id: "draaien",
    title: "Draaien",
    line: "CNC-draaiwerk, ook met Y-as, live tools en subspindel.",
    text: "Wij draaien op CNC-draaibanken met center, live tools, Y-as of subspindel, en op een conventionele draaibank. Op de machines met live tools of Y-as kunnen draaien en frezen in één opspanning. De Dugard TTS42+ heeft 11 assen en een magazijn.",
    uitleg:
      "Een center ondersteunt het werkstuk. Live tools frezen mee op de draaibank. De Y-as geeft die bewerking een extra richting. Een subspindel pakt het onderdeel over, zodat de andere kant in dezelfde machine meekan. De hydrobar voert staafmateriaal aan op de Nakamura.",
    when: "Voor gedraaide onderdelen, van enkel stuks tot middelgrote series, in kunststof, aluminium en roestvast staal.",
  },
  {
    id: "frezen",
    title: "Frezen",
    line: "CNC-bewerkingscentra, één met een 4e as.",
    text: "Frezen gebeurt op drie CNC-bewerkingscentra: Eagle VMC 1000 met 4e as, Yang VMC 1000 en Mazak V-414. Zo bewerken wij vlakke en geprofileerde onderdelen in eigen huis.",
    uitleg:
      "De 4e as op de Eagle draait het werkstuk tijdens het frezen. Platen, armen en klemstukken uit de impressie zijn voorbeelden van gefreesd werk.",
    when: "Wanneer het onderdeel gefreesd moet worden, naast of in plaats van draaiwerk.",
  },
  {
    id: "zagen",
    title: "Zagen",
    line: "Materiaal op lengte op twee bandzaagmachines.",
    text: "Twee bandzaagmachines — Bomar STG 260 DGH en Everising H-360 HA — zagen het uitgangsmateriaal op lengte, als start van de bewerking in dezelfde hal.",
    uitleg: "Zagen, draaien of frezen, en daarna markeren of graveren: het blijft dezelfde werkplaats, dezelfde mensen.",
    when: "Als voorbereiding op draaien of frezen, zodat het onderdeel in één huis verder gaat.",
  },
  {
    id: "markeren",
    title: "Naald markeren",
    line: "Markeren op de Richter UNIROT.",
    text: "Met de Richter UNIROT markeermachine naaldmarkeren wij onderdelen in eigen huis, direct na het verspanen.",
    uitleg: "Markeren hoort bij het onderdeel dat wij ook draaien of frezen. U hoeft daar geen tweede leverancier voor te zoeken.",
    when: "Wanneer het onderdeel een markering moet krijgen, zonder een extra toeleverancier.",
  },
  {
    id: "graveren",
    title: "Laser graveren",
    line: "Laser graveren en lasersnijden op de BRM 90125/100.",
    text: "De BRM 90125/100 is een laser snij- en graveermachine. Graveren en lasersnijden doen wij zelf, in dezelfde werkplaats als het draai- en freeswerk.",
    uitleg: "Vermeld graveren of lasersnijden bij uw aanvraag, samen met de tekening en het aantal.",
    when: "Voor gravering of lasersnijden aan het onderdeel dat wij ook verspanen.",
  },
  {
    id: "schuren",
    title: "Buizen schuren",
    line: "Twee buizenschuurmachines met aan- en afvoerbaan.",
    text: "Voor de afwerking van buizen staan twee NS Maquinas buizenschuurmachines: de MLW 100 en de RC 200, beide met aan- en afvoerbaan.",
    uitleg: "Schuren staat op de machinelijst als afwerking, naast zagen, draaien, frezen, markeren en graveren.",
    when: "Wanneer buizen geschuurd moeten worden als onderdeel van de bewerking.",
  },
];

export const omstempelTekst =
  "KNICO is sinds 2002 door de TÜV bevoegd tot het omstempelen van gecertificeerd 3.1 materiaal. Deze bevoegdheid wordt na de nodige controles regelmatig verlengd.";
