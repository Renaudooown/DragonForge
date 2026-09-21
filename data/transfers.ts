/**
 * Final van pickups: times, places, and attendee-facing driver contacts.
 *
 * No flights, trains, attendee phones, or organiser notes.
 * Do not merge distinct departure groups.
 */
export type TransferDirection = "arrival" | "departure";

export type ArrivalGroup = {
  pickupTime: string;
  pickupLocation: string;
  driverName?: string;
  driverPhone?: string;
  mapUrl?: string;
  pickupPoint?: string;
  meetingNote?: string;
  participants: string[];
};

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
  driverName?: string;
  driverPhone?: string;
  mapUrl?: string;
  pickupPoint?: string;
  pickupPointLabel?: string;
  meetingNote?: string;
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
const AVIGNON_CENTRE = "Avignon Centre";

const MAISON_YELLOW_MAP =
  "https://www.google.com/maps/place/Maison+Yellow/@43.4406874,5.2234377,775m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12c9e7003eb41c13:0x2113b2378b5a15d8!8m2!3d43.4406874!4d5.2234377!16s%2Fg%2F11y5sjhl89!5m1!1e1!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";

const ST_CHARLES_NOTE =
  "The driver will send you the exact meeting point directly by WhatsApp / GPS link.";

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

function arrivalGroup(group: ArrivalGroup): ArrivalGroup {
  return group;
}

export function telHref(phone: string): string {
  const compact = phone.replace(/[\s.-]/g, "");
  if (compact.startsWith("+")) return `tel:${compact}`;
  if (compact.startsWith("00")) return `tel:+${compact.slice(2)}`;
  if (compact.startsWith("0")) return `tel:+33${compact.slice(1)}`;
  return `tel:${compact}`;
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
    delay: {
      title: "Running late?",
      body: "If your flight or train is delayed, please let your driver know as soon as possible. Call or message the number assigned to your group.",
    },
    pickupPointLabel: "Pickup point",
    mapsLabel: "Open in Google Maps ↗",
    driverLabel: "Driver",
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
  arrivalGroups: [
    arrivalGroup({
      pickupTime: "12:30",
      pickupLocation: MRS_AIRPORT,
      pickupPoint: "Maison Yellow — Terminal 1",
      mapUrl: MAISON_YELLOW_MAP,
      driverName: "Isabelle",
      driverPhone: "06 80 01 35 62",
      participants: [
        "Troy Horrell",
        "Kajsa Hammar",
        "Tilly Fleming",
        "Jai Taylor",
        "Luana David",
      ],
    }),
    arrivalGroup({
      pickupTime: "13:30",
      pickupLocation: MRS_AIRPORT,
      pickupPoint: "Maison Yellow — Terminal 1",
      mapUrl: MAISON_YELLOW_MAP,
      driverName: "Sophie",
      driverPhone: "06 45 27 08 94",
      participants: [
        "Edoardo Nicolini",
        "Omar Hedeya",
        "Quentin Calleja",
        "Nadine Geiser",
        "Alexander Wagner",
        "Robin Neff",
      ],
    }),
    arrivalGroup({
      pickupTime: "14:20",
      pickupLocation: AVIGNON_TGV,
      driverName: "Moritz",
      driverPhone: "+49 1575 5585688",
      participants: ["Abel Samot"],
    }),
    arrivalGroup({
      pickupTime: "15:00",
      pickupLocation: MRS_AIRPORT,
      pickupPoint: "Maison Yellow — Terminal 1",
      mapUrl: MAISON_YELLOW_MAP,
      driverName: "Youssef",
      driverPhone: "06 01 22 52 96",
      participants: [
        "Nina Litman-Roventa",
        "Sabrina Senzel",
        "Haralds Abolins",
        "Safak Tufekci",
      ],
    }),
    arrivalGroup({
      pickupTime: "15:30",
      pickupLocation: ST_CHARLES,
      meetingNote: ST_CHARLES_NOTE,
      participants: ["Jean Hastings"],
    }),
    arrivalGroup({
      pickupTime: "15:45",
      pickupLocation: AVIGNON_CENTRE,
      driverName: "Harry",
      driverPhone: "+44 7788 561435",
      participants: ["Rawan Farwana", "Pierre Tramon", "Alexandra Woodman"],
    }),
    arrivalGroup({
      pickupTime: "15:45",
      pickupLocation: AVIGNON_TGV,
      driverName: "Harry",
      driverPhone: "+44 7788 561435",
      participants: ["Xavier de Villepin"],
    }),
    arrivalGroup({
      pickupTime: "17:30",
      pickupLocation: MRS_AIRPORT,
      pickupPoint: "Maison Yellow — Terminal 1",
      mapUrl: MAISON_YELLOW_MAP,
      driverName: "Sophie",
      driverPhone: "06 45 27 08 94",
      participants: [
        "Inês Macedo Santos",
        "Francesco Moiraghi",
        "Ana Nunes Teixeira",
        "Francesca Baillieu",
        "Andreas Fischer",
      ],
    }),
    arrivalGroup({
      pickupTime: "18:00",
      pickupLocation: ST_CHARLES,
      meetingNote: ST_CHARLES_NOTE,
      participants: ["Paul Viehauser", "Davyd Gromenko"],
    }),
  ] satisfies ArrivalGroup[],
  slots: [
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
    slot("Luana David", "10:30", "departure", {
      group: "marseille",
      location: "Marseille Airport",
      locationLabel: "Destination",
    }),

    slot("Alexandra Woodman", "10:30", "departure", { group: "late-marseille" }),
    slot("Jean Hastings", "10:30", "departure", { group: "late-marseille" }),
    slot("Inês Macedo Santos", "10:30", "departure", { group: "late-marseille" }),
    slot("Ana Nunes Teixeira", "10:30", "departure", { group: "late-marseille" }),
    slot("Haralds Abolins", "10:30", "departure", { group: "late-marseille" }),
    slot("Sofia Queiroz", "10:30", "departure", { group: "late-marseille" }),
    slot("Jai Taylor", "10:30", "departure", { group: "late-marseille" }),
    slot("Andreas Fischer", "10:30", "departure", { group: "late-marseille" }),

    slot("Francesca Baillieu", "10:30", "departure", {
      group: "avignon-francesca",
      location: AVIGNON_TGV,
      locationLabel: "Destination",
    }),
  ] satisfies TransferSlot[],
};

export function groupedPickups(direction: TransferDirection): PickupBlock[] {
  if (direction === "arrival") {
    return transfers.arrivalGroups.map((group) => ({
      pickupTime: group.pickupTime,
      location: group.pickupLocation,
      names: group.participants,
      driverName: group.driverName,
      driverPhone: group.driverPhone,
      mapUrl: group.mapUrl,
      pickupPoint: group.pickupPoint,
      pickupPointLabel: group.pickupPoint
        ? transfers.arrival.pickupPointLabel
        : undefined,
      meetingNote: group.meetingNote,
    }));
  }

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
