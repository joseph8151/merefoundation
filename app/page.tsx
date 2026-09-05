import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import Divider from "@/components/Divider";
import ProgramRow from "@/components/ProgramRow";
import StoryCard from "@/components/StoryCard";
import NewsCard from "@/components/NewsCard";
import ImpactStats from "@/components/ImpactStats";
import TransparencyList from "@/components/TransparencyList";
import GlobalMap from "@/components/GlobalMap";
import FieldCaseCard from "@/components/FieldCaseCard";
import CountUp from "@/components/CountUp";
import ScriptureMoment from "@/components/ScriptureMoment";
import PrayAcknowledgeButton from "@/components/PrayAcknowledgeButton";
import { PlaceholderPanel } from "@/components/PlaceholderNote";
import { pendingArtFor } from "@/components/PendingIllustrations";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";
import { newsItems } from "@/data/news";
import { transparencyItems } from "@/data/transparency";
import { footprintStats, footprintBasisLabel } from "@/data/footprint";
import { fieldStories } from "@/data/fieldStories";
import { currentProjects } from "@/data/currentProjects";
import { archiveEditions } from "@/data/archive";
import { weeklyPrayer } from "@/data/weeklyPrayer";
import { orgInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "순전한 마음에서 변화는 시작됩니다",
  description:
    "순전한재단 MERE는 도움이 필요한 이웃의 오늘을 함께하고 더 나은 내일을 만들어가는 비영리재단입니다.",
  alternates: { canonical: "/" },
};

const latestArchiveEdition = archiveEditions[0];

const nextSteps = [
  {
    en: "GIVE",
    line: "정기·일시후원으로 함께하기",
    cta: "GIVE TODAY",
    href: "/donate",
  },
  {
    en: "PARTNER",
    line: "기업·교회·기관으로 함께하기",
    cta: "PARTNER WITH US",
    href: "/together",
  },
  {
    en: "VOLUNTEER",
    line: "시간과 재능으로 함께하기",
    cta: "VOLUNTEER",
    href: "/together#volunteer",
  },
  {
    en: "DONATE GOODS",
    line: "물품으로 함께하기",
    cta: "DONATE GOODS",
    href: "/contact?type=csr",
  },
  {
    en: "PRAY",
    line: "기도로 함께하기",
    cta: "PRAY WITH US",
    href: "/contact?type=prayer",
  },
  {
    en: "SHARE",
    line: "MERE의 이야기를 주변에 알리기",
    cta: "SHARE MERE",
    href: "/",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Faith Statement */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-charcoal px-6 py-28 text-pure-white md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <Frame
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2200&q=80"
          alt="아이의 손을 잡고 웃으며 걷는 봉사자"
          className="absolute inset-0"
          sizes="100vw"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/55 to-charcoal/45" />
        </Frame>
        <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            ROOTED IN CHRIST.
            <br />
            MOVED BY LOVE.
          </h2>
          <p className="mt-6 text-lg font-medium text-pure-white/95 md:text-xl">
            그리스도 안에 뿌리내리고, 사랑으로 움직입니다.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-pure-white/80 md:text-base">
            <p>
              순전한재단 MERE는 예수 그리스도의 사랑으로부터 모든 사역을
              시작합니다. 우리는 믿음이 마음속에 머무는 것이 아니라 누군가를
              찾아가고, 손을 내밀고, 함께 울고, 필요를 채우는 삶으로 나타나야
              한다고 믿습니다.
            </p>
            <p>
              우리가 보내는 하나의 상자, 한 아이에게 전하는 배움의 기회, 한
              지역을 위한 작은 지원까지도 하나님의 사랑을 세상 가운데
              나타내는 일이 되기를 소망합니다.
            </p>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-gold md:text-base">
            Faith becomes love. Love becomes action. Action brings hope.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/about#statement-of-faith"
              className="group inline-flex items-center gap-2 bg-pure-white px-6 py-3.5 text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-gold hover:text-pure-white"
            >
              OUR FAITH{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/together"
              className="group inline-flex items-center gap-2 border border-pure-white/70 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white transition-colors hover:border-pure-white hover:bg-pure-white/10"
            >
              JOIN THE MISSION{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* MERE Philosophy */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="text-center">MERE FOUNDATION</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              순전한 마음에서
              <br />
              변화는 시작됩니다.
            </h2>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-forest md:text-sm">
              PURE LOVE. REAL CHANGE.
            </p>
            <div className="mx-auto mt-10 flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              <p>
                순전한재단은 예수 그리스도의 사랑과 가르침을 바탕으로 세상을
                변화시키는 미션을 가지고 있습니다.
              </p>
              <p>
                &ldquo;너희가 거저 받았으니 거저 주라&rdquo;는 말씀을 따라
                기독교적인 가치와 이념을 바탕으로, 교회와 기업이 함께 손을
                맞잡고 선교와 사회봉사를 실천하는 모범이 되고자 합니다.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-xl">
              <Divider />
              <p className="mt-8 font-display text-2xl italic leading-relaxed text-forest md:text-3xl">
                &ldquo;{orgInfo.verse.text}&rdquo;
              </p>
              <p className="mt-3 text-xs tracking-[0.14em] text-charcoal/45">
                {orgInfo.verse.reference}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* From the Field -- Guatemala photo banner */}
      <section className="relative flex h-[420px] items-end overflow-hidden bg-charcoal text-pure-white md:h-[480px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <Frame
          src="/images/archive/guatemala-01.jpg"
          alt="과테말라 이글레시아 그라시아 교회에서 만난 아이들과 순전한재단 봉사팀"
          className="absolute inset-0"
          sizes="100vw"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
        </Frame>
        <Reveal className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-10 md:px-10 md:pb-14">
          <p className="eyebrow text-xs text-pure-white/70 md:text-sm">
            FROM THE FIELD · GUATEMALA
          </p>
          <p className="mt-3 max-w-xl text-lg font-medium leading-snug text-pure-white md:text-2xl">
            교육은 한 아이의 미래뿐 아니라 한 지역의 미래를 변화시킬 수
            있습니다.
          </p>
        </Reveal>
      </section>

      {/* Scripture Moment */}
      <ScriptureMoment />

      {/* Our Footprint */}
      <section className="relative bg-forest px-6 py-24 text-pure-white md:px-10 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        />
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow tone="light">OUR FOOTPRINT</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              작은 나눔이 세계 곳곳의 삶에 닿았습니다.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 border-t border-pure-white/15 pt-12 sm:grid-cols-2 sm:gap-10">
            {footprintStats.map((stat, i) => (
              <Reveal key={stat.id} delay={i * 100}>
                <p className="font-display text-5xl font-semibold tracking-tight tabular-nums text-gold md:text-7xl">
                  <CountUp
                    value={stat.value.value}
                    isPlaceholder={stat.value.isPlaceholder}
                  />
                </p>
                <span aria-hidden className="mt-3 block h-px w-10 bg-gold/40" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-pure-white/85">
                  {stat.unitEn}
                </p>
                <p className="mt-1 text-sm text-pure-white/65">{stat.label}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.1em] text-pure-white/40">
                  {footprintBasisLabel}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>LOVE ACROSS BORDERS</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              국경을 넘어 이어지는 순전한 마음
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <GlobalMap />
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-warm-ivory px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>WHAT WE DO</Eyebrow>
              <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                사랑을 말하는 것에서 멈추지 않습니다.
              </h2>
            </div>
            <Link
              href="/what-we-do"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              전체 사업 보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
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

      {/* Stories from the Field */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>STORIES FROM THE FIELD</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              우리의 이야기는 현장에서 시작됩니다.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {fieldStories.map((story, i) => (
              <FieldCaseCard key={story.id} story={story} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* One Box, Many Hearts */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <Reveal delay={100} className="group order-1 md:order-2">
            <Frame
              src="/images/archive/clothing-support-01.jpg"
              alt="나눔받은 겉옷을 들고 있는 사람들"
              className="aspect-[4/5] w-full shadow-[0_30px_60px_-32px_rgba(37,37,37,0.4)]"
              pendingArt={pendingArtFor("clothing")}
            />
          </Reveal>
          <Reveal className="order-2 flex flex-col justify-center md:order-1">
            <Eyebrow>ONE BOX, MANY HEARTS</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-4xl">
              하나의 옷이 누군가에게는 사랑이 됩니다.
            </h2>
            <p className="mt-8 font-display text-xl italic leading-relaxed text-forest md:text-2xl">
              &ldquo;이 옷은 단순한 의류가 아니라
              <br />
              한국 교회의 따뜻한 사랑의 손길이었습니다.&rdquo;
            </p>
            <div className="mt-8 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75">
              <p>
                추운 지역의 선교 현장으로 전달된 의류와 생활물품은 단순한
                물건에 그치지 않았습니다.
              </p>
              <p>
                필요한 이웃에게는 따뜻한 겨울을 보낼 수 있는 힘이 되었고,
                멀리 떨어진 누군가가 자신을 기억하고 있다는 위로가 되었습니다.
              </p>
              <p>
                순전한재단은 물품 하나를 전달하는 일에서도 사람과 사람을
                연결하고, 사랑이 실제 삶에 닿도록 노력합니다.
              </p>
            </div>
            <Link
              href="/stories/one-box-many-hearts"
              className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              나눔 이야기 더보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Your Next Step */}
      <section className="bg-forest-dark px-6 py-24 text-pure-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">YOUR NEXT STEP</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              당신은 어떤 방법으로 함께하시겠습니까?
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-pure-white/10 pt-12 sm:grid-cols-2">
            {nextSteps.map((step, i) => (
              <Reveal key={step.en} delay={i * 90} className="flex flex-col gap-3">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-gold md:text-4xl">
                  {step.en}
                </h3>
                <p className="text-[15px] leading-relaxed text-pure-white/75">
                  {step.line}
                </p>
                <Link
                  href={step.href}
                  className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-wide text-pure-white hover:text-gold"
                >
                  {step.cta}{" "}
                  <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-14 max-w-xl border-t border-pure-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold md:text-base">
              Every Heart Matters. Every Action Counts.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-pure-white/75 md:text-base">
              한 사람의 순전한 마음이 또 다른 한 사람의 삶에 닿습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Current Projects */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>CURRENT PROJECTS</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              지금 진행 중인 프로젝트
            </h2>
          </Reveal>

          {currentProjects.length === 0 ? (
            <Reveal delay={100} className="mt-12">
              <PlaceholderPanel
                title="현재 준비 중인 프로젝트 소식을 이 영역에 안내드릴 예정입니다."
                description="새로운 프로젝트가 확정되는 대로 이 자리에 안내해드리겠습니다."
              />
            </Reveal>
          ) : currentProjects.length === 1 ? (
            (() => {
              const p = currentProjects[0];
              return (
                <Reveal delay={100} className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
                  <div className="group">
                    <Frame
                      src={p.image}
                      alt={p.imageAlt}
                      className="aspect-[4/3] w-full shadow-[0_30px_60px_-32px_rgba(37,37,37,0.4)]"
                      pendingArt={pendingArtFor(p.theme)}
                    />
                  </div>
                  <div>
                    <p className="eyebrow text-xs text-gold">{p.titleEn}</p>
                    <h3 className="mt-3 font-display text-2xl font-medium text-charcoal md:text-3xl">
                      {p.titleKo}
                    </h3>
                    <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75">
                      {(p.body ?? [p.summary]).map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    {p.highlights && p.highlights.length > 0 && (
                      <div className="mt-8 flex flex-col gap-2 border-t border-sand-beige pt-6">
                        {p.highlights.map((h) => (
                          <p
                            key={h}
                            className="text-sm font-semibold tracking-tight text-forest"
                          >
                            {h}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })()
          ) : (
            <Reveal delay={100} className="mt-12">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((p) => (
                  <div key={p.id} className="group flex flex-col gap-4">
                    <Frame
                      src={p.image}
                      alt={p.imageAlt}
                      className="aspect-[4/3] w-full shadow-[0_24px_50px_-30px_rgba(37,37,37,0.4)]"
                      pendingArt={pendingArtFor(p.theme)}
                    />
                    <h3 className="font-display text-lg text-charcoal">{p.titleKo}</h3>
                    <p className="text-sm text-charcoal/65">{p.summary}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {currentProjects.length > 0 && (
            <Reveal delay={160} className="mt-12 text-sm text-charcoal/50">
              새로운 프로젝트와 현지 지원 소식은 이곳을 통해 지속적으로
              안내해드리겠습니다.
            </Reveal>
          )}
        </div>
      </section>

      {/* MERE Stories */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>MERE STORIES</Eyebrow>
              <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                숫자 너머, 사람의 이야기
              </h2>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest md:text-sm">
                STORIES OF GOD&rsquo;S FAITHFULNESS
              </p>
              <p className="mt-1 text-sm text-charcoal/60">
                우리가 만난 은혜의 이야기
              </p>
            </div>
            <Link
              href="/stories"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              모든 이야기 보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {stories.slice(0, 3).map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* This Week We Pray For */}
      <section className="relative bg-forest px-6 py-24 text-pure-white md:px-10 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        />
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow tone="light" className="text-center">THIS WEEK WE PRAY FOR</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              이번 주 우리는 ______을 위해 기도합니다.
            </h2>
          </Reveal>

          {weeklyPrayer.isPlaceholder ? (
            <Reveal delay={100} className="mt-12">
              <PlaceholderPanel
                title="이번 주 기도제목은 준비 중입니다."
                description="담당자가 이번 주 기도 지역과 제목을 정리하는 대로 이 자리에 안내해드리겠습니다."
              />
            </Reveal>
          ) : (
            <Reveal delay={100} className="mt-12">
              <p className="font-display text-2xl font-semibold tracking-tight text-gold md:text-3xl">
                {weeklyPrayer.value.region}
              </p>
              <ul className="mx-auto mt-6 flex max-w-md flex-col gap-3 text-left text-[15px] leading-relaxed text-pure-white/80">
                {weeklyPrayer.value.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden className="text-gold">·</span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={160} className="mt-12">
            <PrayAcknowledgeButton className="mx-auto" />
          </Reveal>
        </div>
      </section>

      {/* Archive teaser */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>ARCHIVE</Eyebrow>
              <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                순전한재단의 기록
              </h2>
            </div>
            <Link
              href="/archive"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              아카이브 전체 보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          {latestArchiveEdition ? (
            <Reveal
              delay={100}
              className="group mt-12 grid gap-8 border border-sand-beige bg-pure-white p-6 shadow-[0_30px_70px_-40px_rgba(37,37,37,0.25)] sm:grid-cols-[180px_1fr] sm:items-center md:p-10"
            >
              <Frame
                src={latestArchiveEdition.coverImage}
                alt={latestArchiveEdition.coverImageAlt}
                className="aspect-[3/4] w-full"
                pendingArt={pendingArtFor("newsletter")}
              />
              <div className="flex flex-col gap-3">
                <p className="font-display text-xl text-charcoal">
                  {latestArchiveEdition.title.value}
                </p>
                <p className="text-sm leading-relaxed text-charcoal/65">
                  {latestArchiveEdition.description.value}
                </p>
                <Link
                  href="/archive#newsletter"
                  className="group/link mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
                >
                  {latestArchiveEdition.year} 활동 이야기 보기{" "}
                  <span aria-hidden className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Give With MERE */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-charcoal px-6 py-28 text-pure-white md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
        <Frame
          src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=2200&q=80"
          alt="아침 햇살 속에서 서로를 마주보며 웃는 사람들"
          className="absolute inset-0"
          sizes="100vw"
        >
          <div className="absolute inset-0 bg-charcoal/70" />
        </Frame>
        <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
          <Eyebrow tone="light" className="text-center">GIVE WITH MERE</Eyebrow>
          <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            당신의 순전한 마음이
            <br />
            누군가의 내일을 바꿉니다.
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

      {/* Transparency */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <Eyebrow>TRANSPARENCY</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              신뢰할 수 있는 나눔을 위해
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <TransparencyList items={transparencyItems} />
          </Reveal>
          <Reveal delay={150} className="mt-10">
            <Link
              href="/transparency"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              투명성 페이지 전체 보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MERE Impact */}
      <ImpactStats />

      {/* News */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>MERE NEWS</Eyebrow>
              <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
                소식
              </h2>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              모든 소식 보기{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {newsItems.slice(0, 3).map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* A Letter from MERE */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="text-center">A LETTER FROM MERE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              순전한 마음으로 시작합니다.
            </h2>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              <p>
                세상을 변화시키는 일이 언제나 거대한 것으로부터 시작된다고
                생각하지 않습니다.
              </p>
              <p>
                누군가를 한 번 더 바라보는 마음, 어려운 사람을 지나치지
                않는 마음, 내가 가진 것을 조금 나누는 마음에서 변화는 이미
                시작되고 있습니다.
              </p>
              <p>
                순전한재단은 그 작은 마음들이 실제적인 행동으로 이어질 수
                있도록 돕겠습니다.
              </p>
              <p>
                우리가 가진 모든 것을 다 줄 수는 없지만 우리가 가진 것 중
                하나를 나눌 수는 있습니다.
              </p>
              <p>
                모든 사람을 도울 수는 없지만 우리 앞에 있는 한 사람을 도울
                수는 있습니다.
              </p>
              <p>그 한 사람으로부터 새로운 변화가 시작될 것이라고 믿습니다.</p>
            </div>
            <div className="mx-auto mt-12 max-w-xl">
              <Divider />
              <p className="mt-8 font-display text-lg font-medium tracking-tight text-forest">
                {orgInfo.nameEn}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-charcoal/50">
                {orgInfo.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest-dark px-6 py-28 text-center text-pure-white md:px-10 md:py-36">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-[11vw] font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            THE MISSION
            <br />
            CONTINUES.
          </h2>
          <p className="mt-6 text-lg text-pure-white/75 md:text-xl">
            사랑받은 우리가{" "}
            <br className="hidden sm:block" />
            이제 사랑을 전합니다.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-pure-white/70 md:text-base">
            누군가를 위해 기도하는 것부터 하나의 물품을 나누는 것까지. 당신의
            작은 순종이 누군가에게는 새로운 희망의 시작이 될 수 있습니다.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold tracking-wide">
            <Link href="/donate" className="underline underline-offset-4 hover:text-gold">
              GIVE →
            </Link>
            <Link href="/together#volunteer" className="underline underline-offset-4 hover:text-gold">
              SERVE →
            </Link>
            <Link href="/contact?type=prayer" className="underline underline-offset-4 hover:text-gold">
              PRAY →
            </Link>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-pure-white/45">
            All for His glory.
          </p>
          <p className="mt-8 text-xs text-pure-white/50">
            <Link href="/together#help" className="underline underline-offset-4 hover:text-gold">
              도움이 필요하신가요? 함께 방법을 찾아보겠습니다 →
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
