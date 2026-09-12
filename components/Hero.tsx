import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center px-5 pb-12 pt-24 sm:px-10 sm:pb-14 sm:pt-28"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <Image
          src="/brand/dragonforge-logo.png"
          alt="DragonForge"
          width={834}
          height={322}
          priority
          className="mx-auto h-auto w-[min(78vw,24rem)]"
        />

        <h1 className="mt-8 font-sans text-[0.7rem] uppercase tracking-[0.42em] text-ink sm:mt-10 sm:text-xs">
          {site.title}
        </h1>

        <p className="mt-5 font-display text-[2.75rem] leading-[0.92] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          {site.eventName}
          <span className="text-forge">.</span>
        </p>

        <p className="mt-6 text-xl tracking-wide text-ink sm:text-2xl">
          {site.datesShort}
        </p>
        <p className="mt-1.5 text-lg text-ink-soft sm:text-xl">
          {site.locationName}
          <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-forge align-middle" />
        </p>

        <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">
          {site.positioning}
        </p>
      </div>
    </section>
  );
}
