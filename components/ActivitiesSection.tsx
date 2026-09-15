import { activities } from "@/data/activities";

export function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-16 px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          {activities.title}
          <span className="text-forge">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink-soft sm:text-xl">
          {activities.subtitle}
        </p>

        <div className="mt-10 grid gap-0 md:grid-cols-2">
          {activities.groups.map((group, index) => (
            <article
              key={group.id}
              className={`py-8 md:py-2 ${
                index === 0 ? "md:border-r md:border-ink/10 md:pr-12" : "md:pl-12"
              } ${index > 0 ? "border-t border-ink/10 md:border-t-0" : ""}`}
            >
              <div
                className={`border-l-2 pl-5 ${
                  group.id === "canoeing" ? "border-navy" : "border-forge"
                }`}
              >
              <p
                className={`text-[0.7rem] uppercase tracking-[0.32em] ${
                  group.id === "canoeing" ? "text-navy" : "text-forge"
                }`}
              >
                {group.name}
              </p>
              <p className="mt-4 font-display text-4xl leading-none tracking-tight text-ink sm:text-5xl">
                {group.meetTime}
              </p>
              <p className="mt-3 text-lg text-ink-soft">{group.meetPlace}</p>
              <ol className="mt-8 space-y-2.5">
                {group.participants.map((name) => (
                  <li key={name} className="text-lg leading-snug text-ink sm:text-xl">
                    {name}
                  </li>
                ))}
              </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
