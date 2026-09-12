import { participants } from "@/data/participants";
import { ParticipantPortrait } from "@/components/ParticipantPortrait";

export function PeopleSection() {
  return (
    <section
      id="people"
      className="scroll-mt-20 px-4 pt-10 pb-24 sm:px-8 sm:pt-16 sm:pb-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          Who’s coming
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
          The DragonForge crew for three days in the South of France.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-10 sm:mt-20 md:grid-cols-3 md:gap-x-8 md:gap-y-14 xl:grid-cols-4">
        {participants.map((participant) => (
          <ParticipantPortrait
            key={participant.image}
            participant={participant}
          />
        ))}
      </div>
    </section>
  );
}
