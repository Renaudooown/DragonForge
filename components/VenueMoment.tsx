import { venueIntro, venueMoments } from "@/data/venue";
import { MediaSlot } from "@/components/MediaSlot";
import { Reveal } from "@/components/Reveal";

export function VenueMoment() {
  const [aerial, ...rest] = venueMoments;

  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
      <Reveal className="mx-auto max-w-[1440px]">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-muted">
          {venueIntro.kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
          {venueIntro.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">{venueIntro.body}</p>
      </Reveal>

      <div className="mx-auto mt-12 max-w-[1440px] sm:mt-16">
        <MediaSlot
          src={aerial.src}
          label={aerial.label}
          caption={aerial.caption}
          placeholderTint={aerial.placeholderTint}
          aspect={aerial.aspect}
        />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-3">
          {rest.map((moment) => (
            <MediaSlot
              key={moment.src}
              src={moment.src}
              label={moment.label}
              caption={moment.caption}
              placeholderTint={moment.placeholderTint}
              aspect={moment.aspect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
