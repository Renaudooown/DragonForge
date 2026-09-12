import type { AgendaDay, AgendaItem } from "@/data/agenda";
import { agenda } from "@/data/agenda";
import { MediaSlot } from "@/components/MediaSlot";
import { Reveal } from "@/components/Reveal";
import { publicAssetExists } from "@/lib/publicAsset";

const choiceTints = ["#C6B48A", "#A9B6A7", "#D2C4B0", "#B7AB90"];

function AgendaEntry({ item }: { item: AgendaItem }) {
  const isPlayful = item.tone === "playful";
  const choices = item.tone === "choice" ? item.choices ?? [] : [];
  const showChoiceImages = choices.some((choice) => publicAssetExists(choice.image));

  return (
    <article className="relative py-7 md:py-9">
      <span
        aria-hidden="true"
        className="absolute top-9 -left-[1.62rem] hidden h-2.5 w-2.5 rounded-full bg-forge md:block"
      />
      <p className="text-[0.95rem] tracking-wide text-forge sm:text-base">
        {item.time}
        {item.note ? (
          <span className="ml-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            {item.note}
          </span>
        ) : null}
      </p>
      <h4
        className={
          isPlayful
            ? "mt-2 font-display text-5xl leading-none text-ink italic sm:text-6xl"
            : "mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl"
        }
      >
        {item.title}
        {isPlayful ? <span className="text-forge">.</span> : null}
      </h4>
      {item.description ? (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {item.description}
        </p>
      ) : null}

      {choices.length > 0 && showChoiceImages ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {choices.map((choice, index) => (
            <div key={choice.label}>
              {index > 0 ? (
                <p className="mb-4 text-center font-display text-lg text-muted italic sm:hidden">
                  or
                </p>
              ) : null}
              <MediaSlot
                src={choice.image}
                label={choice.label}
                placeholderTint={choiceTints[index % choiceTints.length]}
                aspect="aspect-[5/4]"
              />
            </div>
          ))}
        </div>
      ) : null}

      {choices.length > 0 && !showChoiceImages ? (
        <div className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:items-baseline sm:gap-6">
          {choices.map((choice, index) => (
            <span key={choice.label} className="contents">
              {index > 0 ? (
                <span className="font-display text-xl text-muted italic">or</span>
              ) : null}
              <span className="font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
                {choice.label}
              </span>
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function DayChapter({ day }: { day: AgendaDay }) {
  const isHeart = day.energy === "heart";

  return (
    <div
      className={
        isHeart
          ? "bg-ivory-2 px-5 py-12 sm:px-10 sm:py-16 lg:px-16"
          : "px-5 py-12 sm:px-10 sm:py-16 lg:px-16"
      }
    >
      <Reveal className="mx-auto max-w-3xl">
        <p className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl">
          {day.weekday}
        </p>
        <p className="mt-2 text-lg text-muted">{day.date}</p>
        <p className="mt-4 max-w-md font-display text-xl text-ink-soft italic">
          {day.feeling}
        </p>

        <div className="relative mt-8 border-t border-ink/10 md:border-t-0 md:border-l md:pl-10">
          {day.items.map((item) => (
            <AgendaEntry
              key={`${day.id}-${item.time}-${item.title}`}
              item={item}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-24 pb-8">
      <Reveal className="px-5 pt-8 pb-4 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
            {agenda.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-soft sm:text-xl">
            {agenda.subtitle}
          </p>
        </div>
      </Reveal>

      {agenda.days.map((day) => (
        <DayChapter key={day.id} day={day} />
      ))}
    </section>
  );
}
