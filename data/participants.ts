import { slugifyName } from "@/lib/names";

/**
 * Attendee list for the trombinoscope.
 *
 * Display order follows this array.
 * To add a headshot, drop a JPG at the `image` path in /public/people
 * (for example: public/people/ines-macedo-santos.jpg). Initials are used until the file exists.
 *
 * Keep this file to name + organisation + image path only.
 */
export type Participant = {
  firstName: string;
  lastName: string;
  organisation?: string;
  image: string;
};

function person(
  firstName: string,
  lastName: string,
  organisation?: string,
): Participant {
  return {
    firstName,
    lastName,
    organisation,
    image: `/people/${slugifyName(firstName, lastName)}.jpg`,
  };
}

export const participants: Participant[] = [
  person("Inês", "Macedo Santos", "Armilar"),
  person("Omar", "Hedeya", "Project A"),
  person("Safak", "Tufekci", "ScaleX Ventures"),
  person("Xavier", "de Villepin", "NewSchool VC"),
  person("Francesco", "Moiraghi", "Unruly Capital"),
  person("Jean", "Hastings"),
  person("Andreas", "Fischer", "First Momentum"),
  person("Francesca", "Baillieu"),
  person("Kajsa", "Hammar", "ETF Partners"),
  person("Tilly", "Fleming", "Octopus Ventures"),
  person("Alexander", "Ehlert", "PLMJ"),
  person("Sabrina", "Senzel", "KfW"),
  person("Paul", "Viehauser", "Akari Capital"),
  person("Haralds", "Abolins", "Positron"),
  person("Troy", "Horrell"),
  person("Quentin", "Calleja", "Atlantic VC"),
  person("Nina", "Litman-Roventa", "Extantia"),
  person("Jai", "Taylor", "Blue Wire Capital"),
  person("Abel", "Samot", "Commit"),
  person("Alexandra", "Woodman", "British Business Bank"),
  person("Davyd", "Gromenko", "RSJ Investments"),
  person("Nadine", "Geiser"),
  person("Tobias", "Reimann-Dubbers", "BNVT Capital"),
  person("Alexander", "Wagner", "Heliad"),
  person("Edoardo", "Nicolini"),
  person("Rawan", "Farwana"),
  person("Pierre", "Tramon", "FDJ United"),
  person("Robin", "Neff", "World Fund"),
  person("Ana", "Nunes Teixeira", "PLMJ"),
  person("Thomas", "Renaudin", "OVNI Capital"),
  person("Harry", "Morgan", "7Percent Ventures"),
  person("Moritz", "Von Klot", "U2V"),
  person("Sofia", "Queiroz", "Maze Impact"),
];
