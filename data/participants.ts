import { slugifyName } from "@/lib/names";

/**
 * Attendee list for the trombinoscope.
 *
 * Display order follows this array.
 * `image` must match the exact filename in /public/people, including
 * capitalization, spaces, and extension (.jpg, .jpeg, .png, .webp).
 * Initials are used until the file exists.
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
  image?: string,
): Participant {
  return {
    firstName,
    lastName,
    organisation,
    image: image ?? `/people/${slugifyName(firstName, lastName)}.jpg`,
  };
}

export const participants: Participant[] = [
  person("Inês", "Macedo Santos", "Armilar", "/people/ines-macedo-santos.jpg"),
  person("Omar", "Hedeya", "Project A", "/people/omar-hedeya.jpg"),
  person("Safak", "Tufekci", "ScaleX Ventures", "/people/safak-tufekci.jpg"),
  person("Xavier", "de Villepin", "NewSchool VC"),
  person("Francesco", "Moiraghi", "Unruly Capital", "/people/Francesco-moiraghi.jpg"),
  person("Jean", "Hastings", undefined, "/people/jean-hastings.jpg"),
  person("Andreas", "Fischer", "First Momentum", "/people/Andreas-fischer.jpg .jpeg"),
  person("Francesca", "Baillieu", undefined, "/people/Francesca-baillieu.jpg .jpeg"),
  person("Kajsa", "Hammar", "ETF Partners", "/people/Kajsa-hammar.jpg .jpeg"),
  person("Tilly", "Fleming", "Octopus Ventures", "/people/Tilly-fleming.jpg .jpeg"),
  person("Alexander", "Ehlert", "PLMJ"),
  person("Sabrina", "Senzel", "KfW", "/people/Sabrina-senzel.jpg .png"),
  person("Paul", "Viehauser", "Akari Capital", "/people/Paul-viehauser.jpg .png"),
  person("Haralds", "Abolins", "Positron", "/people/Haralds-abolins.jpg .jpeg"),
  person("Troy", "Horrell", undefined, "/people/Troy-horrell.jpg .png"),
  person("Quentin", "Calleja", "Atlantic VC", "/people/Quentin-calleja.jpg .jpeg"),
  person("Nina", "Litman-Roventa", "Extantia", "/people/Nina-Litman-Roventa.jpg .jpeg"),
  person("Jai", "Taylor", "Blue Wire Capital", "/people/Jai-Taylor.jpg .jpeg"),
  person("Abel", "Samot", "Commit", "/people/Abel-Samot.jpg .png"),
  person("Alexandra", "Woodman", "British Business Bank", "/people/Alexandra-woodman.jpg .jpeg"),
  person("Davyd", "Gromenko", "RSJ Investments"),
  person("Nadine", "Geiser", undefined, "/people/Nadine-Geiser.jpg .jpeg"),
  person("Tobias", "Reimann-Dubbers", "BNVT Capital", "/people/Tobias-Reimann-Dubbers.jpg .jpeg"),
  person("Alexander", "Wagner", "Heliad", "/people/Alexander-Wagner.jpg .jpeg"),
  person("Edoardo", "Nicolini", undefined, "/people/Edoardo-nicolini.jpg .jpeg"),
  person("Rawan", "Farwana", undefined, "/people/Rawan-Farwana.jpg .jpeg"),
  person("Pierre", "Tramon", "FDJ United", "/people/Pierre-Tramon.jpg .jpeg"),
  person("Robin", "Neff", "World Fund", "/people/Robin-Neff.jpg .jpeg"),
  person("Ana", "Nunes Teixeira", "PLMJ", "/people/Ana-Nunes-Teixeira.jpg .jpeg"),
  person("Thomas", "Renaudin", "OVNI Capital", "/people/Thomas-Renaudin.jpg .png"),
  person("Harry", "Morgan", "7Percent Ventures", "/people/Harry-Morgan.jpg .jpeg"),
  person("Moritz", "Von Klot", "U2V", "/people/Moritz-Von-Klot.jpg .jpeg"),
  person("Sofia", "Queiroz", "Maze Impact", "/people/Sofia-Queiroz.jpg .jpeg"),
];
