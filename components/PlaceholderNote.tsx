import { cn } from "@/lib/cn";

/**
 * Visual marker for any unconfirmed / placeholder fact (contact info,
 * figures, reports, etc). Never let placeholder data render as if it were
 * confirmed -- always pair it with this badge or the inline variant below.
 */
export function PlaceholderBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-none border border-gold/60 bg-warm-ivory px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest",
        className
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
      준비 중
    </span>
  );
}

export function PlaceholderPanel({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-dashed border-gold/50 bg-warm-ivory px-6 py-8 text-center",
        className
      )}
    >
      <PlaceholderBadge className="mb-4" />
      <p className="font-display text-lg text-charcoal">{title}</p>
      {description ? (
        <p className="mt-2 text-sm text-charcoal/60">{description}</p>
      ) : null}
    </div>
  );
}
