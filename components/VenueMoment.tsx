import { venueIntro, venueMoments } from "@/data/venue";
import { MediaSlot } from "@/components/MediaSlot";

export function VenueMoment() {
  const [aerial, ...rest] = venueMoments;

  return (
    <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">
          {venueIntro.kicker}
        </p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
          {venueIntro.title}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">{venueIntro.body}</p>
      </div>

      <div className="mx-auto mt-8 max-w-[1440px] sm:mt-10">
        <MediaSlot
          src={aerial.src}
          label={aerial.label}
          caption={aerial.caption}
          placeholderTint={aerial.placeholderTint}
          aspect={aerial.aspect}
          sizes="100vw"
          objectPosition={aerial.objectPosition}
        />
        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2">
          {rest.map((moment) => (
            <MediaSlot
              key={moment.src}
              src={moment.src}
              label={moment.label}
              caption={moment.caption}
              placeholderTint={moment.placeholderTint}
              aspect={moment.aspect}
              objectPosition={moment.objectPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
