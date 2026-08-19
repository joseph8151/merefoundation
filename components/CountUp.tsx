"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  isPlaceholder?: boolean;
};

/**
 * Counts up from 0 to `value` once scrolled into view. When isPlaceholder is
 * true, renders "00+" style placeholder text instead of animating a fake
 * number, per the no-fabricated-figures rule.
 */
export default function CountUp({
  value,
  suffix = "",
  duration = 1600,
  isPlaceholder = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (isPlaceholder) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, isPlaceholder, value]);

  if (isPlaceholder) {
    return (
      <span ref={ref} aria-label="집계 준비 중">
        00{suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
