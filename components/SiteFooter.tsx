import Image from "next/image";
import { site } from "@/data/site";
import { SponsorLockup } from "@/components/SponsorLockup";
import { logoutAction } from "@/app/login/actions";

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
        <SponsorLockup onDark className="mt-12 flex flex-col items-center" />
        <form action={logoutAction} className="mt-8">
          <button
            type="submit"
            className="text-sm tracking-wide text-ivory/45 transition-colors hover:text-ivory"
          >
            Log out
          </button>
        </form>
      </div>
    </footer>
  );
}
