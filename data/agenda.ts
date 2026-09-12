/**
 * Retreat programme.
 *
 * Edit times, titles and copy here. Optional activity photos live in /public/activities
 * and are picked up automatically when the file exists.
 */
export type AgendaChoice = {
  label: string;
  image?: string;
};

export type AgendaItem = {
  time: string;
  title: string;
  description?: string;
  note?: string;
  tone?: "default" | "choice" | "playful";
  choices?: AgendaChoice[];
};

export type AgendaDay = {
  id: string;
  weekday: string;
  date: string;
  energy: "arrival" | "heart" | "departure";
  feeling: string;
  items: AgendaItem[];
};

export const agenda = {
  title: "The plan",
  subtitle:
    "Enough structure to know where to be. Enough space to make the rest happen.",
  days: [
    {
      id: "tuesday",
      weekday: "Tuesday",
      date: "22 September",
      energy: "arrival",
      feeling: "Arrival, first drinks, meeting everyone, settling in.",
      items: [
        {
          time: "15:00–19:00",
          title: "Arrivals & check-in",
          description:
            "People arrive progressively at the Domaine, settle in, meet everyone and get comfortable.",
        },
        {
          time: "Evening",
          title: "Welcome cocktails",
        },
        {
          time: "Dinner",
          title: "Dinner at the Domaine",
        },
      ],
    },
    {
      id: "wednesday",
      weekday: "Wednesday",
      date: "23 September",
      energy: "heart",
      feeling: "The heart of the retreat — outside, then back together.",
      items: [
        {
          time: "08:00",
          title: "Breakfast",
        },
        {
          time: "10:00",
          title: "Choose your adventure",
          tone: "choice",
          choices: [
            { label: "Hiking", image: "/activities/hiking.jpg" },
            { label: "Canoeing", image: "/activities/canoeing.jpg" },
          ],
        },
        {
          time: "Lunch",
          title: "Lunch at / near the activity location",
        },
        {
          time: "Afternoon",
          title: "Back to the Domaine",
          description: "Pool, downtime, hanging out.",
        },
        {
          time: "17:30",
          title: "Wine tasting",
          note: "Optional",
        },
        {
          time: "19:30",
          title: "Dinner",
        },
        {
          time: "22:00 onwards",
          title: "Party",
          tone: "playful",
        },
      ],
    },
    {
      id: "thursday",
      weekday: "Thursday",
      date: "24 September",
      energy: "departure",
      feeling: "A slow morning, then people leave in their own time.",
      items: [
        {
          time: "Morning",
          title: "Optional run or yoga",
          tone: "choice",
          choices: [
            { label: "Run", image: "/activities/run.jpg" },
            { label: "Yoga", image: "/activities/yoga.jpg" },
          ],
        },
        {
          time: "Breakfast",
          title: "Slow breakfast & morning at the Domaine",
        },
        {
          time: "Late morning onwards",
          title: "Departures",
          description:
            "People leave progressively depending on their trains and flights.",
        },
      ],
    },
  ] satisfies AgendaDay[],
};
