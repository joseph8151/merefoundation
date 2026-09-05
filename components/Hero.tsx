"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HERO_IMAGE = "/images/hero-02.jpg";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const node = imgRef.current;
        if (!node) return;
        const offset = Math.min(window.scrollY * 0.06, 40);
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.02)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-charcoal text-pure-white md:h-[92vh] md:min-h-[640px] md:flex-row lg:h-[100vh]">
      <div className="relative z-10 order-2 flex w-full flex-col justify-center px-6 py-14 md:order-1 md:w-[46%] md:py-0 md:pl-10 lg:pl-16">
        <div className="hero-copy max-w-xl">
          <p className="eyebrow mb-6 text-xs text-pure-white/75 md:text-sm">
            MERE FOUNDATION — For People. For Communities. For Tomorrow.
          </p>
          <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-5xl lg:text-7xl">
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
              className="group inline-flex items-center gap-2 bg-pure-white px-6 py-3.5 text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-gold hover:text-pure-white"
            >
              MERE 알아보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/together"
              className="group inline-flex items-center gap-2 border border-pure-white/70 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white transition-colors hover:border-pure-white hover:bg-pure-white/10"
            >
              함께하기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative order-1 h-[46vh] min-h-[300px] w-full md:order-2 md:h-auto md:w-[54%]">
        <div
          ref={imgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transform: "translate3d(0,0,0) scale(1.02)" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="과테말라 현지 아이들과 함께한 순전한재단 봉사팀"
            fill
            priority
            sizes="(min-width: 768px) 54vw, 100vw"
            className="object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/40 md:hidden" />
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden text-right text-[11px] uppercase tracking-[0.2em] text-pure-white/60 md:block">
        MERE FOUNDATION
        <br />
        For People. For Communities. For Tomorrow.
      </div>
    </section>
  );
}
