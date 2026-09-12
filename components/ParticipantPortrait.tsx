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
      <div className="relative aspect-[3/4] overflow-hidden">
        {hasImage ? (
          <Image
            src={participant.image}
            alt={fullName}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="flex h-full items-end p-4 sm:p-5"
            style={{ backgroundColor: tint }}
            aria-hidden="true"
          >
            <span className="font-display text-4xl leading-none text-ink/80 italic sm:text-5xl">
              {letters}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl leading-tight text-ink transition-colors duration-200 group-hover:text-forge sm:text-[1.35rem]">
        {fullName}
      </h3>
      {participant.organisation ? (
        <p className="mt-1 text-sm tracking-wide text-muted">
          {participant.organisation}
        </p>
      ) : null}
    </article>
  );
}
