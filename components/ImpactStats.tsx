import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { impactStats } from "@/data/impactStats";

export default function ImpactStats() {
  return (
    <section className="bg-forest px-6 py-24 text-pure-white md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Eyebrow tone="light">OUR IMPACT</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            작은 시작이 더 큰 변화를 만듭니다.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-pure-white/15 pt-12 md:grid-cols-4 md:gap-6">
          {impactStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 80}>
              <p className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  isPlaceholder={stat.isPlaceholder}
                />
              </p>
              <p className="mt-3 text-sm text-pure-white/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-16 max-w-xl border-t border-pure-white/15 pt-8 text-sm leading-relaxed text-pure-white/60">
            숫자보다 중요한 것은 그 안에 담긴 한 사람의 이야기입니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
