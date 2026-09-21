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

function ArrivalGroups() {
  const blocks = groupedPickups("arrival");

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
        {blocks.map((block) => (
          <div
            key={`arrival-${block.pickupTime}-${block.location}-${block.names[0]}`}
            className="border-t border-ink/10 pt-5"
          >
            <p className="text-[1.05rem] tracking-wide text-forge sm:text-lg">
              {block.pickupTime}
            </p>
            {block.location ? (
              <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
                {block.location}
              </p>
            ) : null}

            {block.pickupPoint ? (
              <p className="mt-4">
                <span className="block text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                  {block.pickupPointLabel}
                </span>
                <span className="mt-1.5 block font-display text-xl leading-snug text-ink sm:text-2xl">
                  {block.pickupPoint}
                </span>
              </p>
            ) : null}

            {block.mapUrl ? (
              <a
                href={block.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm tracking-wide text-forge underline decoration-forge/30 underline-offset-4 transition-colors hover:decoration-forge"
              >
                {transfers.arrival.mapsLabel}
              </a>
            ) : null}

            {block.meetingNote ? (
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                {block.meetingNote}
              </p>
            ) : null}

            <ul className="mt-5 space-y-1.5">
              {block.names.map((name) => (
                <li
                  key={name}
                  className="font-display text-2xl leading-snug text-ink sm:text-[1.85rem]"
                >
                  {name}
                </li>
              ))}
            </ul>

            <DriverContact name={block.driverName} phone={block.driverPhone} />
          </div>
        ))}
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
