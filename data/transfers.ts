/**
 * Individual van assignments.
 *
 * Leave `slots` empty until pickup times are confirmed.
 * Do not invent meeting times.
 */
export type TransferDirection = "arrival" | "departure";

export type TransferSlot = {
  participant: string;
  direction: TransferDirection;
  hub: string;
  meetingTime?: string;
  vanGroup?: string;
  note?: string;
};

export const transfers = {
  title: "Transfers",
  subtitle: "Shared vans from the main hubs — your exact slot will appear here once it is confirmed.",
  pendingNotice:
    "Your individual van assignment and meeting time will appear here shortly.",
  arrival: {
    dayLabel: "Tuesday 22 September",
    window: "12:00–18:00",
    windowNote: "Arrivals / pickups",
  },
  departure: {
    dayLabel: "Thursday 24 September",
    window: "09:00–16:00",
    windowNote: "Departures / drop-offs",
  },
  hubs: [
    "Marseille Provence Airport",
    "Marseille Saint-Charles",
    "Avignon TGV",
  ],
  slots: [] as TransferSlot[],
};
