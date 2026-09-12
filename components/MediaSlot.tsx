import Image from "next/image";
import { publicAssetExists } from "@/lib/publicAsset";

type MediaSlotProps = {
  src?: string;
  label: string;
  caption?: string;
  placeholderTint?: string;
  aspect?: string;
  className?: string;
};

export function MediaSlot({
  src,
  label,
  caption,
  placeholderTint = "#D4C6B3",
  aspect = "aspect-[4/3]",
  className = "",
}: MediaSlotProps) {
  const hasImage = publicAssetExists(src);

  return (
    <figure className={className}>
      <div className={`relative overflow-hidden ${aspect}`}>
        {hasImage && src ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        ) : (
          <div
            data-placeholder="true"
            className="flex h-full flex-col justify-between p-4 sm:p-5"
            style={{ backgroundColor: placeholderTint }}
          >
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-ink/55">
              Photo to come
            </span>
            <span className="font-display text-2xl leading-tight text-ink/80 italic sm:text-3xl">
              {label}
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm tracking-wide text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
