import { transport } from "@/data/transport";
import { Reveal } from "@/components/Reveal";
import { VenueMoment } from "@/components/VenueMoment";

export function GettingThereSection() {
  return (
    <div id="getting-there" className="scroll-mt-20">
      <section className="bg-charcoal px-5 py-16 text-ivory sm:px-10 sm:py-24 lg:px-16">
        <Reveal className="mx-auto max-w-5xl">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-forge">
            {transport.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {transport.promise}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75 sm:text-xl">
            {transport.summary}
          </p>

          <div className="mt-14 border-t border-ivory/15 pt-12 sm:mt-20">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-ivory/55">
              {transport.arrival.dayLabel}
            </p>
            <p className="mt-3 font-display text-5xl leading-none tracking-tight text-forge sm:text-7xl md:text-8xl">
              {transport.arrival.window}
            </p>
            <p className="mt-4 text-xl text-ivory sm:text-2xl">
              {transport.arrival.windowNote}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <Reveal className="mx-auto max-w-6xl">
          <h3 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {transport.hubsIntro}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {transport.grouping}
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            {transport.hubs.map((hub) => (
              <article key={hub.n} className="border-t border-ink/15 pt-6">
                <p className="text-sm tracking-[0.28em] text-forge">{hub.n}</p>
                <h4 className="mt-4 font-display text-3xl leading-tight text-ink">
                  {hub.name}
                </h4>
                <ul className="mt-4 space-y-1 text-base text-muted">
                  {hub.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <VenueMoment />

      <section className="px-5 pb-20 sm:px-10 sm:pb-28 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
          <div>
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              {transport.independent.title}
            </h3>
            <p className="mt-3 max-w-md text-base text-muted">
              {transport.independent.intro}
            </p>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {transport.independent.stations.map((station) => (
                <li
                  key={station.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-lg text-ink">{station.name}</span>
                  <span className="text-sm text-muted sm:text-right">
                    {station.distance}
                    <span className="mx-2 text-forge">·</span>
                    {station.duration}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              {transport.driving.title}
            </h3>
            <p className="mt-3 text-base text-muted">{transport.driving.intro}</p>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-ink-soft">
              {transport.driving.notes.map((note) => (
                <li key={note} className="pl-0">
                  {note}
                </li>
              ))}
            </ul>
            {transport.driving.googleMapsUrl ? (
              <a
                href={transport.driving.googleMapsUrl}
                className="mt-6 inline-block text-sm tracking-wide text-forge underline decoration-forge/30 underline-offset-4 transition-colors hover:decoration-forge"
              >
                Open in Google Maps
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
