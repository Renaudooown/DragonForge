/**
 * Final van pickup times and places.
 *
 * No flights, trains, phones, or travel comments.
 * Do not merge distinct 10:30 departure groups.
 */
export type TransferDirection = "arrival" | "departure";

export type TransferSlot = {
  name: string;
  pickupTime: string;
  direction: TransferDirection;
  location?: string;
  locationLabel?: "Destination" | "Drop-off";
  group?: string;
};

export type PickupBlock = {
  pickupTime: string;
  group?: string;
  groupLabel?: string;
  location?: string;
  locationLabel?: "Destination" | "Drop-off";
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

const MRS_AIRPORT = "Marseille Provence Airport";
const ST_CHARLES = "Marseille Saint-Charles station";
const AVIGNON_TGV = "Avignon TGV";

function minutes(time: string): number {
  const [hours, mins] = time.split(":").map(Number);
  return hours * 60 + mins;
}

function slot(
  name: string,
  pickupTime: string,
  direction: TransferDirection,
  extra?: {
    location?: string;
    locationLabel?: "Destination" | "Drop-off";
    group?: string;
  },
): TransferSlot {
  return { name, pickupTime, direction, ...extra };
}

export const transfers = {
  title: "Transfers",
  intro:
    "Find your name for where to be, and when. These are van pickup times and places — not your flight or train times.",
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
    slot("Troy Horrell", "12:30", "arrival", { location: MRS_AIRPORT }),
    slot("Kajsa Hammar", "12:30", "arrival", { location: MRS_AIRPORT }),
    slot("Tilly Fleming", "12:30", "arrival", { location: MRS_AIRPORT }),
    slot("Jai Taylor", "12:30", "arrival", { location: MRS_AIRPORT }),
    slot("Luana David", "12:30", "arrival", { location: MRS_AIRPORT }),

    slot("Edoardo Nicolini", "13:30", "arrival", { location: MRS_AIRPORT }),
    slot("Omar Hedeya", "13:30", "arrival", { location: MRS_AIRPORT }),
    slot("Quentin Calleja", "13:30", "arrival", { location: MRS_AIRPORT }),
    slot("Nadine Geiser", "13:30", "arrival", { location: MRS_AIRPORT }),
    slot("Alexander Wagner", "13:30", "arrival", { location: MRS_AIRPORT }),
    slot("Robin Neff", "13:30", "arrival", { location: MRS_AIRPORT }),

    slot("Abel Samot", "14:20", "arrival", { location: AVIGNON_TGV }),

    slot("Nina Litman-Roventa", "15:00", "arrival", { location: MRS_AIRPORT }),
    slot("Sabrina Senzel", "15:00", "arrival", { location: MRS_AIRPORT }),
    slot("Haralds Abolins", "15:00", "arrival", { location: MRS_AIRPORT }),
    slot("Safak Tufekci", "15:00", "arrival", { location: MRS_AIRPORT }),

    slot("Jean Hastings", "15:30", "arrival", { location: ST_CHARLES }),

    slot("Alexandra Woodman", "15:45", "arrival", { location: AVIGNON_TGV }),
    slot("Rawan Farwana", "15:45", "arrival", { location: AVIGNON_TGV }),
    slot("Pierre Tramon", "15:45", "arrival", { location: AVIGNON_TGV }),
    slot("Xavier de Villepin", "15:45", "arrival", { location: AVIGNON_TGV }),

    slot("Inês Macedo Santos", "17:30", "arrival", { location: MRS_AIRPORT }),
    slot("Francesco Moiraghi", "17:30", "arrival", { location: MRS_AIRPORT }),
    slot("Ana Nunes Teixeira", "17:30", "arrival", { location: MRS_AIRPORT }),
    slot("Francesca Baillieu", "17:30", "arrival", { location: MRS_AIRPORT }),
    slot("Andreas Fischer", "17:30", "arrival", { location: MRS_AIRPORT }),

    slot("Paul Viehauser", "18:00", "arrival", { location: ST_CHARLES }),
    slot("Davyd Gromenko", "18:00", "arrival", { location: ST_CHARLES }),

    slot("Davyd Gromenko", "08:30", "departure", {
      location: "Château La Coste",
      locationLabel: "Drop-off",
    }),

    slot("Quentin Calleja", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),
    slot("Nina Litman-Roventa", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),
    slot("Edoardo Nicolini", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),
    slot("Safak Tufekci", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),
    slot("Omar Hedeya", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),
    slot("Andreas Fischer", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),
    slot("Sabrina Senzel", "09:30", "departure", {
      group: "marseille",
      location: "Marseille Airport / Marseille Saint-Charles depending on the attendee",
      locationLabel: "Destination",
    }),

    slot("Xavier de Villepin", "10:30", "departure", {
      group: "avignon",
      location: AVIGNON_TGV,
      locationLabel: "Destination",
    }),
    slot("Abel Samot", "10:30", "departure", {
      group: "avignon",
      location: AVIGNON_TGV,
      locationLabel: "Destination",
    }),
    slot("Rawan Farwana", "10:30", "departure", {
      group: "avignon",
      location: AVIGNON_TGV,
      locationLabel: "Destination",
    }),
    slot("Pierre Tramon", "10:30", "departure", {
      group: "avignon",
      location: AVIGNON_TGV,
      locationLabel: "Destination",
    }),

    slot("Paul Viehauser", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),
    slot("Nadine Geiser", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),
    slot("Alexander Wagner", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),
    slot("Robin Neff", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),
    slot("Kajsa Hammar", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),
    slot("Tilly Fleming", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),
    slot("Troy Horrell", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),

    slot("Alexandra Woodman", "10:30", "departure", { group: "late-marseille" }),
    slot("Luana David", "10:30", "departure", { group: "late-marseille" }),
    slot("Jean Hastings", "10:30", "departure", { group: "late-marseille" }),
    slot("Inês Macedo Santos", "10:30", "departure", { group: "late-marseille" }),
    slot("Ana Nunes Teixeira", "10:30", "departure", { group: "late-marseille" }),
    slot("Haralds Abolins", "10:30", "departure", { group: "late-marseille" }),
    slot("Sofia Queiroz", "10:30", "departure", { group: "late-marseille" }),
    slot("Jai Taylor", "10:30", "departure", { group: "late-marseille" }),

    slot("Francesca Baillieu", "10:30", "departure", {
      group: "avignon-francesca",
      location: AVIGNON_TGV,
      locationLabel: "Destination",
    }),
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
        location: item.location,
        locationLabel: item.locationLabel,
        names: [item.name],
      });
    }
  }

  return blocks;
}
