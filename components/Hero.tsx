import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-center px-5 pb-8 pt-20 sm:px-10 sm:pb-10 sm:pt-24"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <Image
          src="/brand/dragonforge-logo.png"
          alt="DragonForge"
          width={834}
          height={322}
          priority
          className="mx-auto h-auto w-[min(72vw,22rem)]"
        />

        <h1 className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.42em] text-ink sm:mt-7 sm:text-xs">
          {site.title}
        </h1>

        <p className="mt-4 font-display text-[2.5rem] leading-[0.92] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {site.eventName}
          <span className="text-forge">.</span>
        </p>

        <p className="mt-4 text-xl tracking-wide text-ink sm:text-2xl">
          {site.datesShort}
        </p>
        <p className="mt-1.5 text-lg text-ink-soft sm:text-xl">
          {site.locationName}
          <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-forge align-middle" />
        </p>

        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">
          {site.positioning}
        </p>
      </div>
    </section>
  );
}
