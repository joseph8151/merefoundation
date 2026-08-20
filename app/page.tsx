import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import ProgramRow from "@/components/ProgramRow";
import StoryCard from "@/components/StoryCard";
import NewsCard from "@/components/NewsCard";
import ImpactStats from "@/components/ImpactStats";
import TransparencyList from "@/components/TransparencyList";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";
import { newsItems } from "@/data/news";
import { partnershipTypes } from "@/data/partnership";
import { transparencyItems } from "@/data/transparency";
import { orgInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "순전한 마음에서 변화는 시작됩니다",
  description:
    "순전한 재단 MERE는 도움이 필요한 이웃의 오늘을 함께하고 더 나은 내일을 만들어가는 비영리재단입니다.",
};

const philosophy = [
  {
    number: "01",
    en: "PURE HEART",
    ko: "순전한 마음",
    line: "계산 없이, 조건 없이 먼저 마음을 내어주는 것에서 모든 일이 시작됩니다.",
  },
  {
    number: "02",
    en: "REAL ACTION",
    ko: "실제적인 행동",
    line: "마음은 구체적인 도움과 실천으로 이어질 때 비로소 힘을 가집니다.",
  },
  {
    number: "03",
    en: "LASTING CHANGE",
    ko: "지속되는 변화",
    line: "한 번의 도움을 넘어, 삶이 스스로 일어설 수 있는 변화를 함께 만듭니다.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 2. Our Belief */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow>OUR BELIEF</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              한 사람의 삶이
              <br />
              소중하다고 믿습니다.
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              <p>
                한 사람, 한 아이, 한 가정의 삶은 통계 속 숫자가 아니라 저마다의
                이름과 이야기를 가진 소중한 존재입니다. 순전한 재단 MERE는
                그 한 사람에게 진심으로 다가가는 것에서부터 변화가 시작된다고
                믿습니다.
              </p>
              <p>
                우리는 크고 화려한 성과보다, 순전한 마음으로 한 사람 한 사람의
                삶에 다가가는 일을 더 소중히 여깁니다. 그 순전한 마음이 모일
                때, 한 가정과 한 지역사회, 그리고 더 넓은 세상의 변화로
                이어진다고 믿습니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Frame
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80"
              alt="따뜻한 햇살 아래 함께 있는 가족의 모습"
              className="aspect-[3/4] w-full md:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* 3. Why MERE */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>OUR PHILOSOPHY</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              Why MERE?
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              MERE는 &lsquo;꾸밈없는&rsquo;, &lsquo;순수한&rsquo;이라는 뜻을 가진
              단어입니다. 우리는 화려한 수식이나 조건 없이, 본질적인 마음으로
              사람을 대하고 돕는 재단이 되고자 이 이름을 선택했습니다. 순전한
              마음은 우리가 하는 모든 일의 시작점입니다.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-sand-beige pt-12 md:grid-cols-3 md:gap-8">
            {philosophy.map((item, i) => (
              <Reveal key={item.number} delay={i * 100}>
                <span className="font-display text-4xl font-semibold text-gold">
                  {item.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-charcoal">
                  {item.en}
                  <span className="ml-2 text-base font-medium text-charcoal/60">
                    {item.ko}
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {item.line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="bg-pure-white px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>OUR WORK</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                우리가 하는 일
              </h2>
            </div>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              전체 사업 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <div className="mt-8 divide-y divide-sand-beige">
            {programs.map((program, i) => (
              <ProgramRow
                key={program.slug}
                program={program}
                reverse={i % 2 === 1}
                linkTo={`/what-we-do#${program.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MERE Impact */}
      <ImpactStats />

      {/* 6. MERE Stories */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>MERE STORIES</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                숫자 너머, 사람의 이야기
              </h2>
            </div>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              모든 이야기 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {stories.slice(0, 3).map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Faith & Mission */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="gold">FAITH IN ACTION / LOVE IN ACTION</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-4xl">
              사랑은 말이 아니라
              <br />삶으로 이어져야 합니다.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              순전한 재단 MERE는 기독교 정신에 바탕을 두고, 모든 사람이 있는
              모습 그대로 존중받아야 할 존재라고 믿습니다. 우리는 사랑과
              섬김이 말이 아닌 삶으로 드러나야 한다고 믿으며, 돕는 사람과
              도움을 받는 사람이라는 구분 없이, 함께 살아가는 이웃으로서
              서로를 마주합니다.
            </p>
            <p className="mx-auto mt-10 max-w-xl font-display text-xl italic leading-relaxed text-forest md:text-2xl">
              &ldquo;{orgInfo.verse.text}&rdquo;
            </p>
            <p className="mt-3 text-xs tracking-[0.14em] text-charcoal/45">
              {orgInfo.verse.reference}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. Partnership */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>TOGETHER WITH MERE</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              더 큰 변화는
              <br />
              함께할 때 가능합니다.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 border-t border-sand-beige pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((type, i) => (
              <Reveal key={type.id} delay={(i % 3) * 80}>
                <h3 className="font-display text-lg font-medium text-charcoal">
                  {type.titleKo}
                  <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-charcoal/40">
                    {type.titleEn}
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {type.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
            >
              파트너십 문의 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
            >
              후원 참여 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 9. Donation */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-charcoal px-6 py-28 text-pure-white md:px-10">
        <Frame
          src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=2200&q=80"
          alt="아침 햇살 속에서 서로를 마주보며 웃는 사람들"
          className="absolute inset-0"
          sizes="100vw"
        >
          <div className="absolute inset-0 bg-charcoal/70" />
        </Frame>
        <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            당신의 순전한 마음이
            <br />
            누군가의 내일이 됩니다.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-pure-white/80 md:text-base">
            한 번의 나눔도, 오랜 시간 이어지는 동행도 변화의 시작이 될 수
            있습니다.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-pure-white px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-gold hover:text-pure-white"
            >
              정기 후원하기
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 border border-pure-white/70 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-pure-white/10"
            >
              일시 후원하기
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white/80 underline underline-offset-4 hover:text-pure-white"
            >
              후원 안내 보기
            </Link>
          </div>
        </Reveal>
      </section>

      {/* 10. Transparency */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <Eyebrow>TRANSPARENCY</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              신뢰할 수 있는 나눔을 위해
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <TransparencyList items={transparencyItems} />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              투명성 페이지 전체 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 11. News */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>MERE NEWS</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                소식
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              모든 소식 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {newsItems.slice(0, 3).map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="bg-forest-dark px-6 py-28 text-center text-pure-white md:px-10 md:py-36">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-[12vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            BE PART OF
            <br />
            SOMETHING MERE.
          </h2>
          <p className="mt-6 text-lg text-pure-white/75 md:text-xl">
            순전한 마음이 세상을 바꿉니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold tracking-wide">
            <Link href="/donate" className="underline underline-offset-4 hover:text-gold">
              후원하기
            </Link>
            <Link href="/together#volunteer" className="underline underline-offset-4 hover:text-gold">
              자원봉사
            </Link>
            <Link href="/together" className="underline underline-offset-4 hover:text-gold">
              파트너십
            </Link>
            <Link href="/contact" className="underline underline-offset-4 hover:text-gold">
              문의하기
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
