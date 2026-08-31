"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HERO_IMAGE = "/images/hero-01.jpg";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = imgRef.current;
        if (!node) return;
        const offset = Math.min(window.scrollY * 0.18, 140);
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex h-[92vh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal text-pure-white md:h-[100vh]">
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0,0,0) scale(1.08)" }}
      >
        <Image
          src={HERO_IMAGE}
          alt="해외 현지 학교 앞에 모인 아이들과 순전한재단 봉사팀"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
        <div className="hero-copy max-w-3xl">
          <p className="eyebrow mb-6 text-xs text-pure-white/75 md:text-sm">
            MERE FOUNDATION — For People. For Communities. For Tomorrow.
          </p>
          <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            PURE LOVE.
            <br />
            REAL CHANGE.
          </h1>
          <p className="mt-6 text-xl font-medium leading-snug text-pure-white/95 md:text-2xl">
            순전한 마음에서
            <br className="hidden sm:block" /> 변화는 시작됩니다.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-pure-white/75 md:text-base">
            순전한 재단 MERE는 도움이 필요한 이웃의 오늘을 함께하고 더 나은
            내일을 만들어가는 비영리재단입니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-pure-white px-6 py-3.5 text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-gold hover:text-pure-white"
            >
              MERE 알아보기 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/together"
              className="inline-flex items-center gap-2 border border-pure-white/70 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white transition-colors hover:border-pure-white hover:bg-pure-white/10"
            >
              함께하기 <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden text-right text-[11px] uppercase tracking-[0.2em] text-pure-white/60 md:block">
        MERE FOUNDATION
        <br />
        For People. For Communities. For Tomorrow.
      </div>
    </section>
  );
}
