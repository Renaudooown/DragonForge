import { cinematicVenue } from "@/data/venue";
import { site } from "@/data/site";
import { MediaSlot } from "@/components/MediaSlot";

export function CinematicVenue() {
  return (
    <section aria-label={cinematicVenue.label}>
      <MediaSlot
        src={cinematicVenue.src}
        label={cinematicVenue.label}
        placeholderTint={cinematicVenue.placeholderTint}
        aspect="aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.2/1]"
        priority
        still
        sizes="100vw"
        objectPosition="center 42%"
      />
      <div className="mx-auto max-w-2xl px-6 pt-7 pb-14 text-center sm:pt-8 sm:pb-16">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">
          {cinematicVenue.caption}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-soft sm:text-xl">
          {site.bridgeLines[0]} {site.bridgeLines[1]}
        </p>
      </div>
    </section>
  );
}
