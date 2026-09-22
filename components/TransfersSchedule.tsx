import type { ArrivalGroup, ArrivalStop } from "@/data/transfers";
import { groupedPickups, telHref, transfers } from "@/data/transfers";

function DriverContact({ name, phone }: { name?: string; phone?: string }) {
  if (!name && !phone) return null;

  return (
    <p className="mt-5">
      <span className="block text-[0.7rem] uppercase tracking-[0.22em] text-muted">
        {transfers.arrival.driverLabel}
      </span>
      <span className="mt-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 font-display text-xl leading-snug text-ink sm:text-2xl">
        {name ? <span>{name}</span> : null}
        {name && phone ? <span className="text-forge">·</span> : null}
        {phone ? (
          <a
            href={telHref(phone)}
            className="text-forge underline decoration-forge/30 underline-offset-4 transition-colors hover:decoration-forge"
          >
            {phone}
          </a>
        ) : null}
      </span>
    </p>
  );
}

function ArrivalStopBody({ stop }: { stop: ArrivalStop }) {
  return (
    <>
      <p className="text-[1.05rem] tracking-wide text-forge sm:text-lg">{stop.time}</p>
      <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
        {stop.location}
      </p>
      {stop.pickupPoint ? (
        <p className="mt-4">
          <span className="block text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            {transfers.arrival.pickupPointLabel}
          </span>
          <span className="mt-1.5 block font-display text-xl leading-snug text-ink sm:text-2xl">
            {stop.pickupPoint}
          </span>
        </p>
      ) : null}
      {stop.mapUrl ? (
        <a
          href={stop.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm tracking-wide text-forge underline decoration-forge/30 underline-offset-4 transition-colors hover:decoration-forge"
        >
          {transfers.arrival.mapsLabel}
        </a>
      ) : null}
      {stop.meetingNote ? (
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          {stop.meetingNote}
        </p>
      ) : null}
      <ul className="mt-5 space-y-1.5">
        {stop.participants.map((name) => (
          <li
            key={name}
            className="font-display text-2xl leading-snug text-ink sm:text-[1.85rem]"
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

function SingleStopArrival({ group }: { group: ArrivalGroup }) {
  const stop = group.stops[0];

  return (
    <div className="border-t border-ink/10 pt-5">
      <ArrivalStopBody stop={stop} />
      <DriverContact name={group.driverName} phone={group.driverPhone} />
    </div>
  );
}

function MultiStopArrival({ group }: { group: ArrivalGroup }) {
  return (
    <div className="border-t border-ink/10 pt-5">
      <p className="font-display text-3xl leading-none tracking-tight text-ink sm:text-4xl">
        {group.title}
      </p>
      <DriverContact name={group.driverName} phone={group.driverPhone} />
      <ol className="mt-8">
        {group.stops.map((stop, index) => {
          const hasNext = index < group.stops.length - 1;
          return (
            <li key={`${group.id}-${stop.time}-${stop.location}`} className="relative pl-7">
              {hasNext ? (
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-0 left-[0.2rem] w-px bg-ink/15"
                />
              ) : null}
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 h-2 w-2 rounded-full bg-forge"
              />
              <ArrivalStopBody stop={stop} />
              {hasNext ? (
                <p className="py-6 text-[0.7rem] uppercase tracking-[0.28em] text-muted">
                  {transfers.arrival.nextStopLabel}
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ArrivalGroups() {
  return (
    <article className="md:border-r md:border-ink/10 md:pr-12">
      <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">
        {transfers.arrival.title}
      </p>
      <h3 className="mt-3 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
        {transfers.arrival.dayLabel}
      </h3>

      <div className="mt-8 max-w-md border-t border-ink/15 pt-5">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-forge">
          {transfers.arrival.delay.title}
        </p>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          {transfers.arrival.delay.body}
        </p>
      </div>

      <div className="mt-8 space-y-10">
        {transfers.arrivalGroups.map((group) =>
          group.stops.length > 1 ? (
            <MultiStopArrival key={group.id} group={group} />
          ) : (
            <SingleStopArrival key={group.id} group={group} />
          ),
        )}
      </div>
    </article>
  );
}

function DepartureGroups() {
  const blocks = groupedPickups("departure");

  return (
    <article>
      <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">
        {transfers.departure.title}
      </p>
      <h3 className="mt-3 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
        {transfers.departure.dayLabel}
      </h3>

      <div className="mt-8 space-y-8">
        {blocks.map((block) => (
          <div
            key={`departure-${block.pickupTime}-${block.group ?? "none"}`}
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
            {block.location ? (
              <p className="mt-2 max-w-md">
                {block.locationLabel ? (
                  <span className="mb-1 block text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                    {block.locationLabel}
                  </span>
                ) : null}
                <span className="font-display text-xl leading-snug text-ink sm:text-2xl">
                  {block.location}
                </span>
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
          <ArrivalGroups />
          <DepartureGroups />
        </div>
      </div>
    </section>
  );
}
