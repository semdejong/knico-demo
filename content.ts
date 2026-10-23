/** KNICO-demo. Slug blijft "knico-demo" voor de Sleads-tracker. */
export const content = {
  slug: "knico-demo",

  company: {
    name: "KNICO",
    legal: "KNICO VOF",
    tagline: "CNC Metaalbewerking",
    description:
      "Toeleveringsbedrijf voor CNC draai- en freeswerk in kunststof, aluminium en roestvast staal. Enkel stuks tot middelgrote series, vanuit Dinxperlo.",
    city: "Dinxperlo",
    region: "Achterhoek",
    phoneDisplay: "0315-655424",
    phoneTel: "tel:+31315655424",
    email: "info@knico.nl",
  },

  colors: {
    primary: "#1D6FA5",
    primaryForeground: "#ffffff",
    accent: "#2686C5",
    background: "#ffffff",
    foreground: "#2D2D2D",
    muted: "#F3F4F5",
  },

  seo: {
    title: "KNICO CNC Metaalbewerking | Draai- en freeswerk uit Dinxperlo",
    description:
      "KNICO in Dinxperlo maakt CNC draai- en freeswerk van enkel stuks tot middelgrote series, in kunststof, aluminium en roestvast staal. Stuur uw tekening voor een offerte.",
    lang: "nl",
  },

  nav: [
    { label: "Diensten", href: "/diensten" },
    { label: "Machinepark", href: "/machinepark" },
    { label: "Productieruimte", href: "/productieruimte" },
    { label: "Omstempelen", href: "/omstempelen" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  pages: [
    { label: "Home", href: "/" },
    { label: "Diensten", href: "/diensten" },
    { label: "Machinepark", href: "/machinepark" },
    { label: "Productieruimte", href: "/productieruimte" },
    { label: "Werkvoorbeelden", href: "/werkvoorbeelden" },
    { label: "Omstempelen", href: "/omstempelen" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Offerte", href: "/offerte" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Content = typeof content;
