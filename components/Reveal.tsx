"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  mode?: "up" | "fade";
  id?: string;
};

/**
 * Lightweight scroll-reveal using IntersectionObserver + CSS transitions
 * (see [data-reveal] rules in globals.css). Deliberately avoids bounce,
 * scale or 3D -- a calm opacity + translateY only.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  mode = "up",
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-revealed");
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      id={id}
      data-reveal={mode}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
