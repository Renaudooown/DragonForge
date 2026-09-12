import Image from "next/image";
import type { Participant } from "@/data/participants";
import { initials, portraitTint } from "@/lib/names";
import { publicAssetExists } from "@/lib/publicAsset";

export function ParticipantPortrait({ participant }: { participant: Participant }) {
  const hasImage = publicAssetExists(participant.image);
  const letters = initials(participant.firstName, participant.lastName);
  const fullName = `${participant.firstName} ${participant.lastName}`;
  const tint = portraitTint(fullName);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden">
        {hasImage ? (
          <Image
            src={encodeURI(participant.image)}
            alt={fullName}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="flex h-full items-end p-3 sm:p-4"
            style={{ backgroundColor: tint }}
            aria-hidden="true"
          >
            <span className="font-display text-3xl leading-none text-ink/80 sm:text-4xl">
              {letters}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-2.5 font-display text-[1.15rem] leading-tight text-ink transition-colors duration-200 group-hover:text-forge sm:text-xl">
        {fullName}
      </h3>
      {participant.organisation ? (
        <p className="mt-0.5 text-[0.8rem] tracking-wide text-muted sm:text-sm">
          {participant.organisation}
        </p>
      ) : null}
    </article>
  );
}
