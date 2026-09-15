import { wifi } from "@/data/wifi";

export function WifiSection() {
  return (
    <section
      id="wifi"
      className="scroll-mt-16 border-t border-ink/10 bg-ivory-2 px-5 py-12 sm:px-10 sm:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-forge">
          {wifi.kicker}
        </p>
        <h2 className="mt-3 font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
          {wifi.title}
          <span className="text-forge">.</span>
        </h2>
        <div className="mt-10 max-w-xl border-t border-ink/15 pt-6">
          {wifi.network ? (
            <>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
                Network
              </p>
              <p className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
                {wifi.network}
              </p>
            </>
          ) : null}
          <p
            className={`text-[0.7rem] uppercase tracking-[0.28em] text-muted ${
              wifi.network ? "mt-8" : ""
            }`}
          >
            Password
          </p>
          <p className="mt-2 font-display text-4xl leading-tight tracking-wide text-ink sm:text-5xl">
            {wifi.password}
          </p>
        </div>
      </div>
    </section>
  );
}
