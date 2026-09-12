import Image from "next/image";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal px-5 py-16 text-ivory sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <Image
          src="/brand/dragonforge-logo-on-dark.png"
          alt="DragonForge"
          width={834}
          height={322}
          className="mx-auto h-auto w-44 sm:w-56"
        />
        <p className="mt-10 font-sans text-[0.7rem] uppercase tracking-[0.35em]">
          {site.title}
        </p>
        <p className="mt-5 text-lg text-ivory/80">
          {site.locationName}
          <br />
          {site.locationRegion}
        </p>
        <p className="mt-3 text-ivory/70">{site.datesFull}</p>
        <p className="mt-10 font-display text-xl text-ivory/80 italic">
          {site.footerLine}
        </p>
      </div>
    </footer>
  );
}
