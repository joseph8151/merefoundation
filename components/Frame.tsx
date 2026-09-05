"use client";

import { useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FrameProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** Optional overlay content rendered above the image (e.g. a dark scrim). */
  children?: ReactNode;
  /**
   * Themed illustration to show instead of the generic PhotoPendingIllustration
   * when the image fails to load (see components/PendingIllustrations.tsx).
   * Falls back to the generic illustration when omitted.
   */
  pendingArt?: ReactNode;
};

/**
 * Wraps every editorial photo in a Sand Beige backdrop so that a failed
 * image load (a local placeholder path with no file uploaded yet, an
 * Unsplash URL swapped out, a network hiccup) never shows the browser's
 * broken-image icon -- it falls back to a quiet line-art illustration
 * instead, so an unfilled photo slot still reads as an intentional design
 * choice rather than something broken.
 */
export default function Frame({
  src,
  alt,
  className,
  fill = true,
  width,
  height,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  children,
  pendingArt,
}: FrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-sand-beige", className)}>
      {failed ? (
        (pendingArt ?? <PhotoPendingIllustration />)
      ) : fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
          priority={priority}
          onError={() => setFailed(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
      {children}
    </div>
  );
}

/**
 * A small brand illustration (cupped hands holding a heart, with a few
 * gentle light marks above) standing in for a photo that hasn't been
 * uploaded yet. Deliberately a finished little scene -- warm and
 * intentional -- rather than a generic "broken photo" glyph, so an empty
 * slot still reads as considered design.
 */
function PhotoPendingIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-sand-beige"
    >
      <svg
        viewBox="0 0 160 160"
        className="h-2/5 max-h-40 w-2/5 max-w-40 min-h-20 min-w-20"
        fill="none"
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="var(--color-warm-ivory)"
          stroke="var(--color-gold)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />

        {/* gentle light marks */}
        <path
          d="M80 32v10M56 40l6 8M104 40l-6 8"
          stroke="var(--color-gold)"
          strokeOpacity="0.7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* heart */}
        <path
          d="M80 96c-16-11-27-20-27-32a15 15 0 0 1 27-9 15 15 0 0 1 27 9c0 12-11 21-27 32Z"
          fill="var(--color-forest)"
          fillOpacity="0.16"
          stroke="var(--color-forest)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* cupped hands */}
        <path
          d="M34 118c6-16 20-26 46-26s40 10 46 26c-10 8-24 13-46 13s-36-5-46-13Z"
          fill="var(--color-forest)"
          fillOpacity="0.08"
          stroke="var(--color-forest)"
          strokeOpacity="0.75"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 118c-4-9-4-19 2-27M126 118c4-9 4-19-2-27"
          stroke="var(--color-forest)"
          strokeOpacity="0.75"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
