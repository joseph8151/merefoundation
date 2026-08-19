import { cn } from "@/lib/cn";

export default function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light" | "gold";
}) {
  return (
    <p
      className={cn(
        "eyebrow text-xs md:text-sm",
        tone === "dark" && "text-charcoal/60",
        tone === "light" && "text-pure-white/70",
        tone === "gold" && "text-gold",
        className
      )}
    >
      <span className="mr-3 inline-block h-px w-8 -translate-y-1 bg-gold align-middle" aria-hidden />
      {children}
    </p>
  );
}
