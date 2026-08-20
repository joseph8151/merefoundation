"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const SCRIPTURE_IMAGE =
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2400&q=80";

/**
 * "Scripture Moment" full-bleed break section. Reuses the same plain
 * scroll-listener + CSS transform parallax technique already used in
 * components/Hero.tsx (no new animation library).
 */
export default function ScriptureMoment() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = imgRef.current;
        if (!node) return;
        const rect = node.parentElement?.getBoundingClientRect();
        if (!rect) return;
        const offset = Math.min(Math.max(rect.top * 0.12, -80), 80);
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-charcoal text-pure-white">
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0,0,0) scale(1.1)" }}
      >
        <Image
          src={SCRIPTURE_IMAGE}
          alt="고요한 새벽빛이 비치는 풍경"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center md:px-10">
        <p className="text-balance font-display text-2xl italic leading-relaxed text-pure-white md:text-4xl">
          &ldquo;우리가 사랑함은
          <br />
          그가 먼저 우리를 사랑하셨음이라.&rdquo;
        </p>
        <p className="mt-5 text-xs tracking-[0.14em] text-pure-white/60">요한일서 4:19</p>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-gold md:text-base">
          THIS IS WHY WE SERVE.
        </p>
      </div>
    </section>
  );
}
