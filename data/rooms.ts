/**
 * Final room allocation.
 *
 * Only building, room name and occupants.
 * Do not store planning notes, preferences, or bed details here.
 */
export type Room = {
  name: string;
  occupants: string[];
};

export type Building = {
  name: string;
  rooms: Room[];
};

export const rooms = {
  title: "Your rooms",
  subtitle: "Find your name, then your building and room.",
  buildings: [
    {
      name: "Marcel",
      rooms: [
        { name: "Confidence", occupants: ["Francesco Moiraghi"] },
        { name: "Les Secrets", occupants: ["Andreas Fischer", "Haralds Abolins"] },
        { name: "Cigalon", occupants: ["Jean Hastings"] },
        { name: "Les Amours", occupants: ["Luana David"] },
        { name: "Colline", occupants: ["Troy Horrell"] },
        { name: "Source", occupants: ["Jai Taylor"] },
      ],
    },
    {
      name: "Le Mas",
      rooms: [
        { name: "Douce heure", occupants: ["Xavier de Villepin"] },
        { name: "Caprice", occupants: ["Abel Samot"] },
        { name: "Boudoir", occupants: ["Pierre Tramon"] },
        { name: "Suite Amour'eux", occupants: ["Edoardo Nicolini"] },
      ],
    },
    {
      name: "La Garrigue",
      rooms: [
        { name: "Sauge", occupants: ["Tilly Fleming"] },
        { name: "Romarin", occupants: ["Francesca Baillieu", "Nina Litman-Roventa"] },
        { name: "Pistou", occupants: ["Sabrina Senzel"] },
      ],
    },
    {
      name: "La Ruche",
      rooms: [
        { name: "Luciole", occupants: ["Rawan Farwana"] },
        { name: "Cigale", occupants: ["Paul Viehauser", "Davyd Gromenko"] },
        { name: "Libellule", occupants: ["Safak Tufekci"] },
      ],
    },
    {
      name: "Le Mazet",
      rooms: [
        { name: "Tramontane", occupants: ["Inês Macedo Santos"] },
        { name: "Mistral", occupants: ["Alexander Wagner", "Robin Neff"] },
      ],
    },
    {
      name: "Les Oliviers",
      rooms: [
        { name: "Suite Picholine", occupants: ["Quentin Calleja", "Omar Hedeya"] },
        { name: "Bouteillan", occupants: ["Kajsa Hammar"] },
        { name: "Aglandau", occupants: ["Nadine Geiser"] },
        { name: "Cayons", occupants: ["Ana Nunes Teixeira"] },
        { name: "Pondolino", occupants: ["Alexandra Woodman"] },
      ],
    },
  ] satisfies Building[],
};
