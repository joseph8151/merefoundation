import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import type { Program } from "@/data/programs";
import { cn } from "@/lib/cn";

export default function ProgramRow({
  program,
  reverse,
  linkTo,
}: {
  program: Program;
  reverse?: boolean;
  linkTo?: string;
}) {
  return (
    <div
      id={program.slug}
      className={cn(
        "group grid scroll-mt-28 items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-20",
      )}
    >
      <Reveal
        as="div"
        className={cn("order-1", reverse ? "md:order-2" : "md:order-1")}
      >
        <Frame
          src={program.image}
          alt={program.imageAlt}
          className="aspect-[4/5] w-full shadow-[0_30px_60px_-32px_rgba(37,37,37,0.4)]"
        />
      </Reveal>

      <Reveal
        as="div"
        delay={100}
        className={cn(
          "order-2 flex flex-col gap-5",
          reverse ? "md:order-1 md:pr-6" : "md:order-2 md:pl-6"
        )}
      >
        <span className="font-display text-sm text-gold">{program.number}</span>
        <h3 className="font-display text-2xl font-medium tracking-tight text-charcoal transition-colors md:text-3xl group-hover:text-forest">
          {program.titleEn}
          <span className="mt-1 block text-base font-medium text-charcoal/60">
            {program.titleKo}
          </span>
        </h3>
        <p className="text-[15px] leading-relaxed text-charcoal/75">
          {program.summary}
        </p>
        {program.lines.length > 0 ? (
          <ul className="flex flex-col gap-2 border-t border-sand-beige pt-4 text-sm text-charcoal/70">
            {program.lines.map((line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden className="text-gold">·</span>
                {line}
              </li>
            ))}
          </ul>
        ) : null}
        {linkTo ? (
          <Link
            href={linkTo}
            className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
          >
            자세히 보기{" "}
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        ) : null}
      </Reveal>
    </div>
  );
}
