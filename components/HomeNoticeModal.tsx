"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mere-notice-dismissed-mere-video-2026";

/**
 * Time-limited homepage notice, shown once per visitor until dismissed.
 * Update STORAGE_KEY (and the content below) when this is replaced by a
 * different notice -- a new key means it shows again even to past visitors.
 * Remove this component from app/page.tsx entirely once the notice is no
 * longer current; there's no need to keep it mounted-but-hidden.
 */
export default function HomeNoticeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Intentionally reads localStorage post-mount rather than via a lazy
    // useState initializer: this is a static export with no server to read
    // localStorage from, so the first client render must match the static
    // "closed" markup exactly (avoiding a hydration mismatch) and only then
    // open if this visitor hasn't dismissed it yet. Single one-time sync on
    // mount, not a render loop.
    let shouldOpen = true;
    try {
      shouldOpen = !localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode, etc.) -- default to showing it
    }
    if (shouldOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage unavailable (private mode, etc.) -- fine, it'll just show again next visit
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-notice-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-pure-white p-8 shadow-[0_40px_80px_-30px_rgba(37,37,37,0.5)] md:p-10"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="닫기"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-xl text-charcoal/40 transition-colors hover:text-charcoal"
        >
          ×
        </button>

        <p className="eyebrow text-xs text-gold">NEW VIDEO</p>
        <h2 id="emergency-notice-title" className="mt-4 font-display text-2xl font-medium leading-tight text-charcoal md:text-3xl">
          순전한재단 MERE
          <br />
          영상을 소개합니다
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
          순전한재단의 이야기를 담은 영상을 새롭게 공유합니다. 영상을 통해
          재단이 걸어온 발걸음을 더 생생하게 만나보세요.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/news/mere-video-2026"
            onClick={dismiss}
            className="group inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white transition-colors hover:bg-gold"
          >
            영상 보러가기{" "}
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
