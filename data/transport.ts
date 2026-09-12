/**
 * Arrival, shuttle hubs, independent travel and parking.
 *
 * Do not invent shuttle times here. Pickup groups are confirmed closer to the retreat.
 * Set `driving.googleMapsUrl` when the exact Maps link is ready.
 */
export type TransportHub = {
  n: string;
  name: string;
  kind: string;
  distance?: string;
  duration?: string;
  note?: string;
};

export const transport = {
  kicker: "Getting there",
  promise: "We’ll get you to the Domaine.",
  summary:
    "We’re organising shared vans from the main arrival hubs based on everyone’s travel plans. Your exact pickup point, time and group will be shared with you before the retreat.",
  grouping:
    "Once everyone’s travel plans are locked, we’ll group arrivals and send you your van, meeting point and pickup time.",
  arrival: {
    dayLabel: "Tuesday 22 September",
    window: "15:00–19:00",
    windowNote: "Main arrival & check-in",
  },
  hubsIntro: "Main pickup hubs",
  hubs: [
    {
      n: "01",
      name: "Marseille Provence Airport",
      kind: "Airport",
      distance: "120 km",
      duration: "1h10",
    },
    {
      n: "02",
      name: "Marseille Saint-Charles",
      kind: "Train",
      note: "Some participants will arrive here by train.",
    },
    {
      n: "03",
      name: "Avignon TGV",
      kind: "Train",
      distance: "60 km",
      duration: "45 min",
    },
  ] satisfies TransportHub[],
  independent: {
    title: "Travelling independently",
    intro: "Other nearby stations, if you’re making your own way:",
    stations: [
      {
        name: "Montélimar TGV",
        distance: "Approx. 45 km",
        duration: "Approx. 35 minutes",
      },
      {
        name: "Orange",
        distance: "Approx. 30 km",
        duration: "Approx. 25 minutes",
      },
      {
        name: "Bollène",
        distance: "Approx. 12 km",
        duration: "Approx. 10 minutes",
      },
    ],
  },
  driving: {
    title: "Driving?",
    intro: "For guests driving directly to the Domaine:",
    notes: [
      "A large guest parking area is available at the back of the Domaine.",
      "The two smaller parking areas at the front are reserved for staff and catering.",
      "Accessible parking is available.",
    ],
    // Replace `null` with the exact Google Maps URL when available.
    googleMapsUrl: null as string | null,
  },
};
