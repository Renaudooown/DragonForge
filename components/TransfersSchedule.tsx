import { groupedPickups, transfers } from "@/data/transfers";

function PickupDay({
  direction,
  title,
  dayLabel,
}: {
  direction: "arrival" | "departure";
  title: string;
  dayLabel: string;
}) {
  const blocks = groupedPickups(direction);

  return (
    <article
      className={
        direction === "arrival" ? "md:border-r md:border-ink/10 md:pr-12" : ""
      }
    >
      <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">{title}</p>
      <h3 className="mt-3 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
        {dayLabel}
      </h3>

      <div className="mt-8 space-y-8">
        {blocks.map((block) => (
          <div
            key={`${direction}-${block.pickupTime}-${block.group ?? "none"}`}
            className="border-t border-ink/10 pt-5"
          >
            <p className="text-[1.05rem] tracking-wide text-forge sm:text-lg">
              {block.pickupTime}
            </p>
            {block.groupLabel ? (
              <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                {block.groupLabel}
              </p>
            ) : null}
            <ul className="mt-3 space-y-1.5">
              {block.names.map((name) => (
                <li
                  key={name}
                  className="font-display text-2xl leading-snug text-ink sm:text-[1.85rem]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {direction === "departure" ? (
        <div className="mt-10 border-t border-ink/15 pt-6">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-forge">
            {transfers.lunch.title}
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
            {transfers.lunch.body}
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ink">
            {transfers.lunch.note}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export function TransfersSchedule() {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          {transfers.intro}
        </p>
        <div className="mt-10 grid gap-14 md:grid-cols-2 md:gap-16">
          <PickupDay
            direction="arrival"
            title={transfers.arrival.title}
            dayLabel={transfers.arrival.dayLabel}
          />
          <PickupDay
            direction="departure"
            title={transfers.departure.title}
            dayLabel={transfers.departure.dayLabel}
          />
        </div>
      </div>
    </section>
  );
}
