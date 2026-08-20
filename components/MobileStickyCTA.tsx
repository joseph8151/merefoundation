"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Fixed bottom bar, mobile-only. Tapping it opens a small sheet with the
 * three most common next actions. Kept calm -- a simple slide-up, no bounce.
 */
export default function MobileStickyCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div
        className={cn(
          "grid gap-2 border-t border-sand-beige bg-pure-white px-4 pb-2 pt-3 shadow-[0_-4px_20px_rgba(37,37,37,0.08)] transition-[grid-template-rows] duration-300",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-2 pb-3">
            <Link
              href="/donate"
              className="flex items-center justify-between border border-forest bg-forest px-4 py-3 text-sm font-semibold text-pure-white"
              onClick={() => setOpen(false)}
            >
              후원하기 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/together#volunteer"
              className="flex items-center justify-between border border-charcoal/15 px-4 py-3 text-sm font-semibold text-charcoal"
              onClick={() => setOpen(false)}
            >
              자원봉사 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact?type=prayer"
              className="flex items-center justify-between border border-charcoal/15 px-4 py-3 text-sm font-semibold text-charcoal"
              onClick={() => setOpen(false)}
            >
              기도로 함께하기 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-between border border-charcoal/15 px-4 py-3 text-sm font-semibold text-charcoal"
              onClick={() => setOpen(false)}
            >
              파트너십 문의 <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-sticky-sheet"
        className="flex w-full items-center justify-center gap-2 bg-charcoal px-4 py-4 text-sm font-semibold tracking-wide text-pure-white"
      >
        MERE와 함께하기
        <span
          aria-hidden
          className={cn("transition-transform duration-300", open && "rotate-180")}
        >
          ▲
        </span>
      </button>
    </div>
  );
}
