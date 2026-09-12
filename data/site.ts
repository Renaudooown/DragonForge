export const site = {
  name: "DragonForge",
  year: "2026",
  title: "DragonForge 2026",
  eventName: "France Retreat",
  locationName: "Domaine de Valbonne",
  locationRegion: "South of France",
  datesShort: "22–24 September",
  datesFull: "22–24 September 2026",
  positioning: "A private retreat for the next generation of GPs and LPs.",
  bridge:
    "Three days in the South of France. Good people, time outside, and conversations worth having.",
  footerLine: "See you in the South of France.",
} as const;

export const nav = [
  { href: "#people", id: "people", label: "People" },
  { href: "#getting-there", id: "getting-there", label: "Getting there" },
  { href: "#agenda", id: "agenda", label: "Agenda" },
] as const;
