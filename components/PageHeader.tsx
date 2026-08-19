import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  titleKo,
  titleEn,
  description,
}: {
  eyebrow: string;
  titleKo: string;
  titleEn?: string;
  description?: string;
}) {
  return (
    <section className="border-b border-sand-beige bg-warm-ivory px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-4xl font-medium tracking-tight text-charcoal md:text-6xl">
            {titleKo}
          </h1>
          {titleEn ? (
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-charcoal/40">
              {titleEn}
            </p>
          ) : null}
          {description ? (
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-charcoal/70 md:text-base">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
