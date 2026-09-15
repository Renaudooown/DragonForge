/**
 * Final retreat programme.
 *
 * Edit times, titles and copy here. Optional activity photos live in /public/activities
 * and are picked up automatically when the file exists.
 * Do not include internal organiser buffers or planning notes.
 */
export type AgendaChoice = {
  label: string;
  image?: string;
  time?: string;
  meet?: string;
};

export type AgendaItem = {
  time: string;
  title: string;
  description?: string;
  note?: string;
  tone?: "default" | "choice" | "groups" | "playful";
  choices?: AgendaChoice[];
  image?: string;
  imageLabel?: string;
  imageCaption?: string;
  imagePosition?: string;
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
          time: "12:00–18:00",
          title: "Participant transfers",
          description:
            "Shared vans from Marseille Provence Airport, Marseille Saint-Charles and Avignon TGV. Individual pickup slots will appear under Transfers once they are confirmed.",
        },
        {
          time: "14:00–18:00",
          title: "Arrival, reception & room assignment",
        },
        {
          time: "14:00–18:00",
          title: "Drinks & nibbles by the pool",
        },
        {
          time: "18:00–19:00",
          title: "Free time & get ready for dinner",
        },
        {
          time: "19:30–20:00",
          title: "Welcome to DragonForge",
          description: "Introduction and welcome from the DF team.",
        },
        {
          time: "20:00–20:30",
          title: "Icebreaker",
        },
        {
          time: "20:30–23:00",
          title: "Cocktail dinner & group discussions",
          description: "At the Domaine.",
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
          time: "07:30–09:30",
          title: "Breakfast",
        },
        {
          time: "09:30–14:00",
          title: "Outdoor activities",
          description: "You are in either the canoeing or the hiking group — see Activities for your name.",
          tone: "groups",
          choices: [
            {
              label: "Canoeing",
              time: "09:30–14:00",
              meet: "Meet at the Domaine entrance",
              image: "/activities/canoeing.jpg",
            },
            {
              label: "Hiking",
              time: "10:00–14:00",
              meet: "Meet at the Domaine entrance",
              image: "/activities/hiking.jpg",
            },
          ],
        },
        {
          time: "12:00–14:00",
          title: "Picnic lunch",
          description: "Lunch during the activities, at the activity location.",
        },
        {
          time: "14:30–17:30",
          title: "Back at the Domaine",
          description: "Pool, downtime and time to yourself — then prep for dinner.",
          image: "/venue/pool.jpg",
          imageLabel: "Pool time",
          imageCaption: "Back at the Domaine",
        },
        {
          time: "17:30–18:30",
          title: "Wine tasting at the Domaine",
          note: "Optional",
          image: "/activities/wine.jpg",
          imageLabel: "Wine tasting",
        },
        {
          time: "20:00–23:00",
          title: "Seated dinner at the Domaine",
          description: "Outdoor dinner in the main square.",
        },
        {
          time: "23:00–02:00",
          title: "Afterparty",
          description: "Open bar.",
          tone: "playful",
          image: "/venue/courtyard.jpg",
          imageLabel: "Afterparty",
          imageCaption: "Under the stars",
          imagePosition: "center 72%",
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
          time: "08:30–09:30",
          title: "Optional morning movement",
          note: "Optional",
          tone: "choice",
          choices: [
            { label: "Yoga", image: "/activities/yoga.jpg" },
            { label: "Run", image: "/activities/run.jpg" },
          ],
        },
        {
          time: "09:00–11:00",
          title: "Brunch",
        },
        {
          time: "09:00–16:00",
          title: "Participant departures / transfers",
          description:
            "Individual drop-off slots will appear under Transfers once they are confirmed.",
        },
        {
          time: "11:00–16:00",
          title: "Pool & chill before departure",
          note: "Optional",
        },
      ],
    },
  ] satisfies AgendaDay[],
};
