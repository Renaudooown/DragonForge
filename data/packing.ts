/**
 * What to pack — practical, not a legal list.
 */
export type PackingItem = {
  kicker: string;
  title: string;
  body: string;
};

export const packing = {
  title: "What to pack",
  subtitle: "A short list so Wednesday and the pool are easy.",
  items: [
    {
      kicker: "Pool",
      title: "Swimwear & a towel",
      body: "For the Domaine pool, and for anyone canoeing on Wednesday.",
    },
    {
      kicker: "Activities",
      title: "Comfortable shoes",
      body: "Light, fresh clothes for Wednesday outside — hiking or canoeing.",
    },
    {
      kicker: "Sun",
      title: "Sunscreen",
      body: "We’re expecting warm weather. Bring more than you think you need.",
    },
    {
      kicker: "Sport",
      title: "If you’re moving on Thursday",
      body: "Sports clothes for optional morning yoga or the run.",
    },
  ] satisfies PackingItem[],
  dayBag: {
    kicker: "Day bag",
    title: "A small backpack for Wednesday",
    body: "We leave the Domaine in the morning for hiking or canoeing, have lunch at the activity, and come back in the afternoon. Pack what you need for the day:",
    essentials: [
      "Sunscreen",
      "Lunch",
      "A water bottle",
      "Swimwear and a towel if you’re canoeing",
      "Any personal essentials",
      "A light change of clothes, if useful",
    ],
  },
};
