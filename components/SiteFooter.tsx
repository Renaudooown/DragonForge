import Image from "next/image";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy px-5 py-12 text-ivory sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <Image
          src="/brand/dragonforge-logo-on-dark.png"
          alt="DragonForge"
          width={834}
          height={322}
          className="mx-auto h-auto w-40 sm:w-52"
        />
        <p className="mt-8 font-sans text-[0.7rem] uppercase tracking-[0.35em]">
          {site.title}
        </p>
        <p className="mt-4 text-lg text-ivory/80">
          {site.locationName}
          <br />
          {site.locationRegion}
        </p>
        <p className="mt-2 text-ivory/70">{site.datesFull}</p>
        <p className="mt-8 font-display text-xl text-ivory/80">
          {site.footerLine.replace(/\.$/, "")}
          <span className="text-forge">.</span>
        </p>
      </div>
    </footer>
  );
}
