"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isOverlay = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isOverlay
          ? "bg-transparent"
          : "bg-pure-white/95 shadow-[0_1px_0_rgba(37,37,37,0.08)] backdrop-blur"
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:h-24 md:px-10">
        <Link
          href="/"
          className={cn(
            "flex flex-col leading-none transition-colors duration-500",
            isOverlay ? "text-pure-white" : "text-charcoal"
          )}
        >
          <span className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            MERE
          </span>
          <span className="mt-1 text-[11px] tracking-[0.2em] opacity-80">
            순전한 재단
          </span>
        </Link>

        <nav
          aria-label="주요 메뉴"
          className={cn(
            "hidden items-center gap-9 text-sm font-medium tracking-wide lg:flex",
            isOverlay ? "text-pure-white" : "text-charcoal"
          )}
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className={cn(
              "hidden items-center border px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors sm:inline-flex",
              isOverlay
                ? "border-pure-white text-pure-white hover:bg-pure-white hover:text-forest"
                : "border-forest bg-forest text-pure-white hover:bg-forest-dark"
            )}
          >
            후원하기
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden",
              isOverlay ? "text-pure-white" : "text-charcoal"
            )}
          >
            <span
              className={cn(
                "block h-px w-6 bg-current transition-transform duration-300",
                menuOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col bg-forest text-pure-white transition-opacity duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center gap-8 px-8 py-24">
          <nav aria-label="모바일 메뉴" className="flex flex-col gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-medium tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex w-fit items-center border border-gold px-6 py-3 text-sm font-semibold tracking-wide text-gold"
          >
            후원하기 →
          </Link>
        </div>
      </div>
    </header>
  );
}
