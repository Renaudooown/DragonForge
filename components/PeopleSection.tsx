import { participants } from "@/data/participants";
import { ParticipantPortrait } from "@/components/ParticipantPortrait";

export function PeopleSection() {
  return (
    <section
      id="people"
      className="scroll-mt-16 px-4 pt-2 pb-16 sm:px-8 sm:pb-20 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          Who’s coming
          <span className="text-forge">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft sm:text-xl">
          The DragonForge crew for three days in the South of France.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1440px] grid-cols-2 gap-x-3 gap-y-7 sm:mt-12 md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:grid-cols-4">
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
