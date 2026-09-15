import { packing } from "@/data/packing";

export function PackingSection() {
  return (
    <section id="pack" className="scroll-mt-16 px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          {packing.title}
          <span className="text-forge">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft sm:text-xl">
          {packing.subtitle}
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {packing.items.map((item) => (
            <article key={item.kicker} className="border-t border-ink/15 pt-5">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-forge">
                {item.kicker}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-ink sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 max-w-3xl border-t border-ink/15 pt-8">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-forge">
            {packing.dayBag.kicker}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            {packing.dayBag.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {packing.dayBag.body}
          </p>
          <ul className="mt-6 space-y-2 text-lg text-ink">
            {packing.dayBag.essentials.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forge" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
