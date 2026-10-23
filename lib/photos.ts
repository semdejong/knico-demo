export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const hallPhotos: Photo[] = [
  {
    src: "/fotos/hal-overzicht.jpg",
    width: 1600,
    height: 1037,
    alt: "Overzicht van de werkplaats van KNICO: rijen CNC-draaibanken en bewerkingscentra, gereedschapswagens en blauwe spanenbakken in de hal.",
    caption: "Overzicht van de hal",
  },
  {
    src: "/fotos/hal-machines.jpg",
    width: 1600,
    height: 1037,
    alt: "CNC-machines in de hal van KNICO, met Hyundai WIA-draaibanken, een gereedschapsrek en staafmateriaal langs de wand.",
    caption: "Machines en staafmateriaal",
  },
  {
    src: "/fotos/cnc-bedieningspaneel.jpg",
    width: 1600,
    height: 1067,
    alt: "Hyundai WIA L160LMSA CNC-draaibank met geopend bedieningspaneel en spanen in de machine.",
    caption: "Hyundai WIA L160LMSA",
  },
  {
    src: "/fotos/spindel-draaibank.jpg",
    width: 1600,
    height: 1067,
    alt: "Close-up van hoofdspil en tegenspil op een CNC-draaibank, met een dun gedraaid werkstuk ertussen.",
    caption: "Hoofdspil en tegenspil",
  },
];

export const toolPhoto: Photo = {
  src: "/fotos/freesgereedschap.jpg",
  width: 804,
  height: 328,
  alt: "Close-up van een gereedschapsrevolver met twee frezen in de houder.",
  caption: "Freesgereedschap",
};

export const productPhotos: Photo[] = [
  {
    src: "/fotos/product-flensbus.jpg",
    width: 638,
    height: 477,
    alt: "Gedraaide flensbus met gatencirkel, buitendraad en een boring in de flens, op een lichte achtergrond.",
    caption: "Gedraaide flensbus",
  },
  {
    src: "/fotos/product-aluminium-plaat.jpg",
    width: 634,
    height: 475,
    alt: "Gefreesde aluminium plaat met een achtvormige uitsparing, kleine boringen en afgeschuinde hoeken.",
    caption: "Gefreesde aluminium plaat",
  },
  {
    src: "/fotos/product-aluminium-arm.jpg",
    width: 635,
    height: 477,
    alt: "Gefreesde aluminium arm met een grote boring, kleinere gaten en een haakvormig uiteinde.",
    caption: "Gefreesde aluminium arm",
  },
  {
    src: "/fotos/product-klemstuk.jpg",
    width: 645,
    height: 488,
    alt: "Gefreesd metalen klemstuk met twee ronde boringen en een sleuf, op een witte achtergrond.",
    caption: "Gefreesd klemstuk",
  },
  {
    src: "/fotos/product-kunststof-bus.jpg",
    width: 634,
    height: 475,
    alt: "Witte kunststof bus met ovale uitsparingen in de wand, op een lichte achtergrond.",
    caption: "Kunststof bus",
  },
];
