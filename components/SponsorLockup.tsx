import { sponsor } from "@/data/sponsor";
import { publicAssetExists } from "@/lib/publicAsset";

export function SponsorLockup({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  const hasLogo = publicAssetExists(sponsor.logo);

  return (
    <div className={className}>
      <p
        className={`text-[0.65rem] uppercase tracking-[0.28em] ${
          onDark ? "text-ivory/45" : "text-muted"
        }`}
      >
        {sponsor.line}
      </p>
      {hasLogo ? (
        // Native img: thin outline wordmark, avoid Next optimizer crushing strokes.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          width={876}
          height={251}
          className="mt-3 h-12 w-auto sm:h-14"
        />
      ) : (
        <p
          className={`mt-1 font-display text-xl tracking-wide ${
            onDark ? "text-ivory/80" : "text-ink"
          }`}
        >
          {sponsor.name}
        </p>
      )}
    </div>
  );
}
