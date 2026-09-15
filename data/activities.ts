/**
 * Wednesday activity groups.
 *
 * Names must match the participant list exactly.
 * Do not store 1st/2nd choice or other planning notes here.
 */
export type ActivityGroup = {
  id: "canoeing" | "hiking";
  name: string;
  meetTime: string;
  meetPlace: string;
  participants: string[];
};

export const activities = {
  title: "Activities",
  subtitle: "On Wednesday you are either canoeing or hiking. Find your name, then be at the entrance on time.",
  groups: [
    {
      id: "canoeing",
      name: "Canoeing",
      meetTime: "09:30 Wednesday",
      meetPlace: "Meet at the Domaine entrance",
      participants: [
        "Omar Hedeya",
        "Safak Tufekci",
        "Xavier de Villepin",
        "Jean Hastings",
        "Andreas Fischer",
        "Francesca Baillieu",
        "Kajsa Hammar",
        "Sabrina Senzel",
        "Paul Viehauser",
        "Troy Horrell",
        "Davyd Gromenko",
        "Edoardo Nicolini",
        "Pierre Tramon",
        "Ana Nunes Teixeira",
        "Inês Macedo Santos",
      ],
    },
    {
      id: "hiking",
      name: "Hiking",
      meetTime: "10:00 Wednesday",
      meetPlace: "Meet at the Domaine entrance",
      participants: [
        "Tilly Fleming",
        "Haralds Abolins",
        "Quentin Calleja",
        "Jai Taylor",
        "Abel Samot",
        "Alexandra Woodman",
        "Nadine Geiser",
        "Alexander Wagner",
        "Rawan Farwana",
        "Robin Neff",
        "Luana David",
        "Francesco Moiraghi",
        "Nina Litman-Roventa",
      ],
    },
  ] satisfies ActivityGroup[],
};
