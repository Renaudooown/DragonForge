/**
 * Domaine photography slots.
 *
 * Drop files into /public/venue using these filenames.
 * Until a file exists, an editorial placeholder is shown — this is intentional,
 * not missing art direction. Do not use random stock photography here.
 */
export type VenueMoment = {
  src: string;
  label: string;
  caption: string;
  placeholderTint: string;
  aspect: string;
};

export const venueIntro = {
  kicker: "The Domaine",
  title: "A countryside estate in the South of France.",
  body: "Stone walls, a swimming pool, outdoor tables, and Provençal countryside. The days happen here.",
};

export const venueMoments: VenueMoment[] = [
  {
    src: "/venue/aerial.jpg",
    label: "Aerial view",
    caption: "The estate from above",
    placeholderTint: "#C6B48A",
    aspect: "aspect-[16/9] md:aspect-[2.2/1]",
  },
  {
    src: "/venue/courtyard.jpg",
    label: "Courtyard dinner",
    caption: "Outdoor tables",
    placeholderTint: "#CDB59A",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/venue/pool.jpg",
    label: "Pool",
    caption: "Late-day water",
    placeholderTint: "#A9B6A7",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/venue/landscape.jpg",
    label: "Landscape",
    caption: "Provençal surroundings",
    placeholderTint: "#B7AB90",
    aspect: "aspect-[4/3]",
  },
];
