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
  objectPosition?: string;
};

export const cinematicVenue = {
  src: "/venue/landscape.jpg",
  label: "Domaine de Valbonne",
  caption: "Domaine de Valbonne",
  placeholderTint: "#B7AB90",
};

export const venueIntro = {
  kicker: "The Domaine",
  title: "A countryside estate in the South of France.",
  body: "Stone walls, a swimming pool, outdoor tables, and Provençal countryside. The days happen here.",
};

export const venueMoments: VenueMoment[] = [
  {
    src: "/venue/aerial.jpg",
    label: "Gathering by the pool",
    caption: "The estate from above",
    placeholderTint: "#C6B48A",
    aspect: "aspect-[16/9] md:aspect-[2.2/1]",
  },
  {
    src: "/venue/courtyard.jpg",
    label: "Courtyard dinner",
    caption: "Under the stars",
    placeholderTint: "#CDB59A",
    aspect: "aspect-[4/5] md:aspect-[4/3]",
    objectPosition: "center 72%",
  },
  {
    src: "/venue/pool.jpg",
    label: "Pool",
    caption: "Late-day water",
    placeholderTint: "#A9B6A7",
    aspect: "aspect-[4/3]",
    objectPosition: "center 60%",
  },
];
