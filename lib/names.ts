export function slugifyName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function initials(firstName: string, lastName: string): string {
  const particles = new Set([
    "de",
    "von",
    "van",
    "da",
    "du",
    "di",
    "del",
    "della",
    "dos",
    "das",
  ]);

  const first = Array.from(firstName)[0] ?? "";
  const last = lastName
    .split(/[\s-]+/)
    .filter((part) => !particles.has(part.toLowerCase()))
    .map((part) => Array.from(part)[0] ?? "")
    .join("");

  return `${first}${last}`.normalize("NFD").replace(/\p{M}/gu, "").toUpperCase();
}

export function portraitTint(seed: string): string {
  const tints = ["#DDD3C4", "#D4C6B3", "#CBBDAA", "#D9CEBC", "#E0D6C6", "#CFC3B1"];
  let hash = 0;
  for (const char of seed) {
    hash = (hash * 31 + char.charCodeAt(0)) | 0;
  }
  return tints[Math.abs(hash) % tints.length];
}
