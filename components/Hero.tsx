import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-svh flex-col justify-center px-5 pb-20 pt-28 sm:px-10"
      >
        <div className="mx-auto w-full max-w-4xl text-center">
          <Image
            src="/brand/dragonforge-logo.png"
            alt="DragonForge"
            width={834}
            height={322}
            priority
            className="mx-auto h-auto w-[min(82vw,28rem)]"
          />

          <h1 className="mt-12 font-sans text-[0.7rem] uppercase tracking-[0.42em] text-ink sm:mt-16 sm:text-xs">
            {site.title}
          </h1>

          <p className="mt-5 font-display text-[2.75rem] leading-[0.95] tracking-tight text-ink italic sm:text-6xl md:text-7xl lg:text-8xl">
            {site.eventName}
          </p>

          <p className="mt-8 text-xl tracking-wide text-ink sm:text-2xl">
            {site.datesShort}
          </p>
          <p className="mt-2 text-lg text-ink-soft sm:text-xl">
            {site.locationName}
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-forge align-middle" />
          </p>

          <p className="mx-auto mt-10 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">
            {site.positioning}
          </p>
        </div>
      </section>

      <p className="mx-auto max-w-3xl px-6 pb-24 text-center font-display text-2xl leading-snug text-ink italic sm:pb-32 sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {site.bridge}
      </p>
    </>
  );
}
