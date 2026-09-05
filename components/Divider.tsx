import { cn } from "@/lib/cn";

/**
 * Small centered ornament (line - diamond - line) used in place of a plain
 * border rule wherever a moment deserves a quieter, more considered pause --
 * e.g. above a pull-quote. Purely decorative.
 */
export default function Divider({
  tone = "gold",
  className,
}: {
  tone?: "gold" | "light";
  className?: string;
}) {
  const lineColor = tone === "light" ? "bg-pure-white/30" : "bg-gold/40";
  const dotColor = tone === "light" ? "bg-pure-white/60" : "bg-gold/70";

  return (
    <div
      aria-hidden
      className={cn("mx-auto flex w-full max-w-[120px] items-center gap-3", className)}
    >
      <span className={cn("h-px flex-1", lineColor)} />
      <span className={cn("h-1.5 w-1.5 shrink-0 rotate-45", dotColor)} />
      <span className={cn("h-px flex-1", lineColor)} />
    </div>
  );
}
