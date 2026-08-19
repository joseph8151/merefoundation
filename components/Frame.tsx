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
 * remote image load (Unsplash placeholder swapped out later, network
 * hiccup, etc.) never breaks the layout -- the frame simply shows as a
 * warm neutral panel instead of a broken-image icon.
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
  return (
    <div className={cn("relative overflow-hidden bg-sand-beige", className)}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
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
        />
      )}
      {children}
    </div>
  );
}
