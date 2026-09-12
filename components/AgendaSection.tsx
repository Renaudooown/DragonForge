import type { AgendaDay, AgendaItem } from "@/data/agenda";
import { agenda } from "@/data/agenda";
import { MediaSlot } from "@/components/MediaSlot";
import { publicAssetExists } from "@/lib/publicAsset";

const choiceTints = ["#C6B48A", "#A9B6A7", "#D2C4B0", "#B7AB90"];

function AgendaEntry({
  item,
  showChoiceSlots,
}: {
  item: AgendaItem;
  showChoiceSlots?: boolean;
}) {
  const isPlayful = item.tone === "playful";
  const choices = item.tone === "choice" ? item.choices ?? [] : [];
  const showChoiceImages =
    choices.length > 0 &&
    (Boolean(showChoiceSlots) ||
      choices.some((choice) => publicAssetExists(choice.image)));
  const hasMomentImage = Boolean(item.image);

  return (
    <article className="relative py-5 md:py-6">
      <span
        aria-hidden="true"
        className="absolute top-7 -left-[1.62rem] hidden h-2.5 w-2.5 rounded-full bg-forge md:block"
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
            ? "mt-1.5 font-display text-5xl leading-none text-ink italic sm:text-6xl"
            : "mt-1.5 font-display text-3xl leading-tight text-ink sm:text-4xl"
        }
      >
        {item.title}
        {isPlayful ? <span className="text-forge">.</span> : null}
      </h4>
      {item.description ? (
        <p className="mt-2.5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {item.description}
        </p>
      ) : null}

      {choices.length > 0 && showChoiceImages ? (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {choices.map((choice, index) => (
            <div key={choice.label}>
              {index > 0 ? (
                <p className="mb-3 text-center font-display text-lg text-forge italic sm:hidden">
                  or
                </p>
              ) : null}
              <MediaSlot
                src={choice.image}
                label={choice.label}
                placeholderTint={choiceTints[index % choiceTints.length]}
                aspect="aspect-[3/2]"
              />
            </div>
          ))}
        </div>
      ) : null}

      {choices.length > 0 && !showChoiceImages ? (
        <div className="mt-5 flex flex-col items-start gap-2 sm:flex-row sm:items-baseline sm:gap-6">
          {choices.map((choice, index) => (
            <span key={choice.label} className="contents">
              {index > 0 ? (
                <span className="font-display text-xl text-forge italic">or</span>
              ) : null}
              <span className="font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
                {choice.label}
              </span>
            </span>
          ))}
        </div>
      ) : null}

      {hasMomentImage ? (
        <div className="mt-5">
          <MediaSlot
            src={item.image}
            label={item.imageLabel ?? item.title}
            caption={item.imageCaption}
            placeholderTint="#CDB59A"
            aspect="aspect-[16/9] md:aspect-[2/1]"
            sizes="(max-width: 768px) 100vw, 768px"
            objectPosition={item.imagePosition}
            still
          />
        </div>
      ) : null}
    </article>
  );
}

function DayChapter({ day }: { day: AgendaDay }) {
  const isHeart = day.energy === "heart";

  return (
    <div
      id={day.id}
      className={
        isHeart
          ? "border-y border-ink/10 bg-ivory-2 px-5 py-10 sm:px-10 sm:py-14 lg:px-16"
          : "px-5 py-8 sm:px-10 sm:py-12 lg:px-16"
      }
    >
      <div className="mx-auto max-w-3xl">
        {isHeart ? (
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">
            The heart of it
          </p>
        ) : null}
        <p
          className={
            isHeart
              ? "mt-3 font-display text-6xl leading-none tracking-tight text-ink sm:text-7xl md:text-8xl"
              : "font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl"
          }
        >
          {day.weekday}
          {isHeart ? <span className="text-forge">.</span> : null}
        </p>
        <p className="mt-2 text-lg text-muted">{day.date}</p>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">
          {day.feeling}
        </p>

        <div className="relative mt-6 border-t border-ink/10 md:border-t-0 md:border-l md:pl-10">
          {day.items.map((item) => (
            <AgendaEntry
              key={`${day.id}-${item.time}-${item.title}`}
              item={item}
              showChoiceSlots={isHeart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-20 pb-6">
      <div className="px-5 pt-6 pb-3 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
            {agenda.title}
            <span className="text-forge">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-soft sm:text-xl">
            {agenda.subtitle}
          </p>
        </div>
      </div>

      {agenda.days.map((day) => (
        <DayChapter key={day.id} day={day} />
      ))}
    </section>
  );
}
