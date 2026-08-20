"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Small self-contained copy-to-clipboard button, reusable anywhere a value
 * (bank account number, email, etc.) needs a one-tap copy affordance.
 */
export default function CopyButton({
  value,
  label = "계좌번호 복사",
  copiedLabel = "복사됨",
  className,
}: {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (unsupported browser/permissions) --
      // fail silently, the button simply won't confirm a copy.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 border border-forest px-4 py-2.5 text-xs font-semibold tracking-wide text-forest transition-colors hover:bg-forest hover:text-pure-white",
        className
      )}
    >
      {copied ? `${copiedLabel} ✓` : label}
    </button>
  );
}
