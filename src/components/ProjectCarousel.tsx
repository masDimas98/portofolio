"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type CarouselImage = {
  src: string;
  alt: string;
};

type ProjectCarouselProps = {
  images: CarouselImage[];
  className?: string;
};

export function ProjectCarousel({ images, className }: ProjectCarouselProps) {
  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images]);
  const [idx, setIdx] = useState(0);

  if (safeImages.length === 0) return null;

  const current = safeImages[idx] ?? safeImages[0]!;

  const prev = () => setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  const next = () => setIdx((i) => (i + 1) % safeImages.length);

  return (
    <div className={className}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover"
        />

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/70 px-2 py-1 text-xs text-slate-100 shadow-sm shadow-slate-950/60 backdrop-blur transition hover:border-slate-500"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/70 px-2 py-1 text-xs text-slate-100 shadow-sm shadow-slate-950/60 backdrop-blur transition hover:border-slate-500"
            >
              Next
            </button>
          </>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {safeImages.map((_, i) => (
              <span
                key={i}
                className={[
                  "h-1.5 w-1.5 rounded-full",
                  i === idx ? "bg-emerald-400" : "bg-slate-700",
                ].join(" ")}
                aria-hidden
              />
            ))}
          </div>
          <p className="text-[0.7rem] text-slate-400">
            {idx + 1}/{safeImages.length}
          </p>
        </div>
      )}
    </div>
  );
}


