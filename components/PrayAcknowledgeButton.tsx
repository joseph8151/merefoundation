"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * "함께 기도했습니다 ♡" button for the "THIS WEEK WE PRAY FOR" section.
 *
 * This is intentionally a purely local, client-side acknowledgment -- like
 * CopyButton's local "복사됨" confirmation -- and does NOT persist, count,
 * or display any number of prayers (real or fake). Per the site's
 * no-fabricated-figures rule, a shared "N people prayed" counter must not
 * be shown until there is a real backend to aggregate it.
 *
 * TODO (backend): once a real backend exists to aggregate prayer
 * participation, this can be wired up to actually record/count a prayer
 * (e.g. POST to an API route) and optionally surface a real aggregate
 * number here -- not before.
 */
export default function PrayAcknowledgeButton({ className }: { className?: string }) {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAcknowledged(true)}
      disabled={acknowledged}
      className={cn(
        "inline-flex w-fit items-center gap-2 border border-pure-white/70 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white transition-colors hover:bg-pure-white/10 disabled:pointer-events-none disabled:border-gold disabled:text-gold",
        className
      )}
    >
      {acknowledged ? "기도해주셔서 감사합니다 ♡" : "함께 기도했습니다 ♡"}
    </button>
  );
}
