/**
 * Final van pickup times.
 *
 * Pickup times only — no flights, trains, phones, or travel comments.
 * Do not merge distinct 10:30 departure groups.
 */
export type TransferDirection = "arrival" | "departure";

export type TransferSlot = {
  name: string;
  pickupTime: string;
  direction: TransferDirection;
  group?: string;
};

export type PickupBlock = {
  pickupTime: string;
  group?: string;
  groupLabel?: string;
  names: string[];
};

const GROUP_LABELS: Record<string, string> = {
  avignon: "Avignon",
  marseille: "Marseille",
  "late-marseille": "Late Marseille",
  "avignon-francesca": "Avignon",
};

const GROUP_ORDER = [
  "avignon",
  "marseille",
  "late-marseille",
  "avignon-francesca",
];

function minutes(time: string): number {
  const [hours, mins] = time.split(":").map(Number);
  return hours * 60 + mins;
}

function slot(
  name: string,
  pickupTime: string,
  direction: TransferDirection,
  group?: string,
): TransferSlot {
  return { name, pickupTime, direction, group };
}

export const transfers = {
  title: "Transfers",
  intro: "These are van pickup times — not your flight or train times. Find your name.",
  arrival: {
    title: "Arrivals",
    dayLabel: "Tuesday 22 September",
    window: "12:30–18:00",
    windowNote: "Pickup times",
  },
  departure: {
    title: "Departures",
    dayLabel: "Thursday 24 September",
    window: "08:30–10:30",
    windowNote: "Pickup times",
  },
  lunch: {
    title: "Late flight?",
    body: "For guests flying from Marseille after 15:00, we’ve reserved lunch in Marseille for up to 12 people before heading to the airport.",
    note: "Joining is optional — let us know if you’d like to come.",
  },
  slots: [
    slot("Troy Horrell", "12:30", "arrival"),
    slot("Kajsa Hammar", "12:30", "arrival"),
    slot("Tilly Fleming", "12:30", "arrival"),
    slot("Jai Taylor", "12:30", "arrival"),
    slot("Luana David", "12:30", "arrival"),

    slot("Edoardo Nicolini", "13:30", "arrival"),
    slot("Omar Hedeya", "13:30", "arrival"),
    slot("Quentin Calleja", "13:30", "arrival"),
    slot("Nadine Geiser", "13:30", "arrival"),
    slot("Alexander Wagner", "13:30", "arrival"),
    slot("Robin Neff", "13:30", "arrival"),

    slot("Abel Samot", "14:20", "arrival"),

    slot("Nina Litman-Roventa", "15:00", "arrival"),
    slot("Sabrina Senzel", "15:00", "arrival"),
    slot("Haralds Abolins", "15:00", "arrival"),
    slot("Safak Tufekci", "15:00", "arrival"),

    slot("Jean Hastings", "15:30", "arrival"),

    slot("Alexandra Woodman", "15:45", "arrival"),
    slot("Rawan Farwana", "15:45", "arrival"),
    slot("Pierre Tramon", "15:45", "arrival"),
    slot("Xavier de Villepin", "15:45", "arrival"),

    slot("Inês Macedo Santos", "17:30", "arrival"),
    slot("Francesco Moiraghi", "17:30", "arrival"),
    slot("Ana Nunes Teixeira", "17:30", "arrival"),
    slot("Francesca Baillieu", "17:30", "arrival"),
    slot("Andreas Fischer", "17:30", "arrival"),

    slot("Paul Viehauser", "18:00", "arrival"),
    slot("Davyd Gromenko", "18:00", "arrival"),

    slot("Davyd Gromenko", "08:30", "departure"),

    slot("Quentin Calleja", "09:30", "departure"),
    slot("Nina Litman-Roventa", "09:30", "departure"),
    slot("Edoardo Nicolini", "09:30", "departure"),
    slot("Safak Tufekci", "09:30", "departure"),
    slot("Omar Hedeya", "09:30", "departure"),
    slot("Andreas Fischer", "09:30", "departure"),
    slot("Sabrina Senzel", "09:30", "departure"),

    slot("Xavier de Villepin", "10:30", "departure", "avignon"),
    slot("Abel Samot", "10:30", "departure", "avignon"),
    slot("Rawan Farwana", "10:30", "departure", "avignon"),
    slot("Pierre Tramon", "10:30", "departure", "avignon"),

    slot("Paul Viehauser", "10:30", "departure", "marseille"),
    slot("Nadine Geiser", "10:30", "departure", "marseille"),
    slot("Alexander Wagner", "10:30", "departure", "marseille"),
    slot("Robin Neff", "10:30", "departure", "marseille"),
    slot("Kajsa Hammar", "10:30", "departure", "marseille"),
    slot("Tilly Fleming", "10:30", "departure", "marseille"),
    slot("Troy Horrell", "10:30", "departure", "marseille"),

    slot("Alexandra Woodman", "10:30", "departure", "late-marseille"),
    slot("Luana David", "10:30", "departure", "late-marseille"),
    slot("Jean Hastings", "10:30", "departure", "late-marseille"),
    slot("Inês Macedo Santos", "10:30", "departure", "late-marseille"),
    slot("Ana Nunes Teixeira", "10:30", "departure", "late-marseille"),
    slot("Haralds Abolins", "10:30", "departure", "late-marseille"),
    slot("Sofia Queiroz", "10:30", "departure", "late-marseille"),
    slot("Jai Taylor", "10:30", "departure", "late-marseille"),

    slot("Francesca Baillieu", "10:30", "departure", "avignon-francesca"),
  ] satisfies TransferSlot[],
};

export function groupedPickups(direction: TransferDirection): PickupBlock[] {
  const slots = transfers.slots.filter((item) => item.direction === direction);
  const blocks: PickupBlock[] = [];

  const sorted = [...slots].sort((a, b) => {
    const timeDiff = minutes(a.pickupTime) - minutes(b.pickupTime);
    if (timeDiff !== 0) return timeDiff;
    const groupDiff =
      GROUP_ORDER.indexOf(a.group ?? "") - GROUP_ORDER.indexOf(b.group ?? "");
    if (groupDiff !== 0) return groupDiff;
    return 0;
  });

  for (const item of sorted) {
    const last = blocks.at(-1);
    const sameBlock =
      last &&
      last.pickupTime === item.pickupTime &&
      last.group === item.group;
    if (sameBlock) {
      last.names.push(item.name);
    } else {
      blocks.push({
        pickupTime: item.pickupTime,
        group: item.group,
        groupLabel: item.group ? GROUP_LABELS[item.group] : undefined,
        names: [item.name],
      });
    }
  }

  return blocks;
}
