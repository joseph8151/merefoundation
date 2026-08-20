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
}: FrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-sand-beige", className)}>
      {failed ? (
        <PhotoPendingIllustration />
      ) : fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
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
          className="h-full w-full object-cover"
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
      {children}
    </div>
  );
}

function PhotoPendingIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-sand-beige"
    >
      <svg
        viewBox="0 0 120 90"
        className="h-1/3 max-h-24 w-1/3 max-w-32 min-h-12 min-w-16"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="112"
          height="82"
          rx="2"
          stroke="var(--color-forest)"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        <circle cx="34" cy="30" r="9" stroke="var(--color-gold)" strokeWidth="2" />
        <path
          d="M4 68 L38 44 L64 62 L84 40 L116 66"
          stroke="var(--color-forest)"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
