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
import GlobalMap from "@/components/GlobalMap";
import FieldCaseCard from "@/components/FieldCaseCard";
import CountUp from "@/components/CountUp";
import ScriptureMoment from "@/components/ScriptureMoment";
import PrayAcknowledgeButton from "@/components/PrayAcknowledgeButton";
import { PlaceholderBadge, PlaceholderPanel } from "@/components/PlaceholderNote";
import { programs } from "@/data/programs";
import { stories } from "@/data/stories";
import { newsItems } from "@/data/news";
import { partnershipTypes } from "@/data/partnership";
import { transparencyItems } from "@/data/transparency";
import { footprintStats, footprintBasisLabel } from "@/data/footprint";
import { fieldStories } from "@/data/fieldStories";
import { currentProjects } from "@/data/currentProjects";
import { archiveEditions } from "@/data/archive";
import { weeklyPrayer } from "@/data/weeklyPrayer";
import { monthlyMission } from "@/data/monthlyMission";
import { orgInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "순전한 마음에서 변화는 시작됩니다",
  description:
    "순전한재단 MERE는 도움이 필요한 이웃의 오늘을 함께하고 더 나은 내일을 만들어가는 비영리재단입니다.",
  alternates: { canonical: "/" },
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

const ourValues = [
  {
    mark: "01",
    en: "FAITH",
    ko: "신앙",
    line: "예수 그리스도를 중심으로 모든 사업을 진행하며 그리스도의 사랑과 가르침을 따릅니다.",
  },
  {
    mark: "02",
    en: "SERVING",
    ko: "섬김",
    line: "예수님의 모범을 따라 서로를 섬기며 사랑으로 행동합니다.",
  },
  {
    mark: "03",
    en: "HOPE",
    ko: "희망",
    line: "희망의 메시지를 전하고 세상에 새로운 가능성을 심습니다.",
  },
  {
    mark: "04",
    en: "TRUST",
    ko: "믿음",
    line: "하나님의 뜻을 향해 믿음으로 나아가며 세상을 변화시키는 일에 참여합니다.",
  },
  {
    mark: "05",
    en: "LOVE",
    ko: "사랑",
    line: "모든 사람을 사랑으로 대하고 사랑이 있는 세상을 만들기 위해 노력합니다.",
  },
];

const churchBusinessNodes = [
  { en: "CHURCH", ko: "사랑과 섬김" },
  { en: "BUSINESS", ko: "자원과 전문성" },
  { en: "MERE FOUNDATION", ko: "연결과 실행" },
];

const wellProgramAreas = ["의료사업", "교육사업", "보건·위생사업", "긴급구호·봉사단 파견", "기관협력"];

const latestArchiveEdition = archiveEditions[0];

const prayerCards = [
  {
    en: "PRAY FOR PEOPLE",
    line: "도움이 필요한 가정과 아이들이 희망을 잃지 않도록 기도합니다.",
  },
  {
    en: "PRAY FOR THE FIELD",
    line: "세계 곳곳에서 지역사회를 섬기고 있는 교회와 선교사들을 위해 기도합니다.",
  },
  {
    en: "PRAY FOR THE NEXT GENERATION",
    line: "다음세대가 믿음과 교육 안에서 새로운 미래를 만들어갈 수 있도록 기도합니다.",
  },
];

const nextSteps = [
  {
    en: "GIVE",
    line: "나눔으로 함께하세요. 작은 후원도 누군가에게는 새로운 내일의 시작이 될 수 있습니다.",
    cta: "GIVE TODAY",
    href: "/donate",
  },
  {
    en: "SERVE",
    line: "당신의 시간을 나누세요. 봉사, 전문기술, 재능을 통해 사람과 지역사회를 직접 섬길 수 있습니다.",
    cta: "SERVE WITH US",
    href: "/together#volunteer",
  },
  {
    en: "PRAY",
    line: "기도로 함께하세요. 보이지 않는 곳에서 시작된 기도가 한 사람의 삶을 변화시키는 시작이 될 수 있습니다.",
    cta: "PRAY WITH US",
    href: "/contact?type=prayer",
  },
  {
    en: "GO",
    line: "현장으로 나아가세요. 국내외 봉사와 미션 프로젝트에 참여하여 사랑이 필요한 현장을 직접 만나보세요.",
    cta: "EXPLORE MISSIONS",
    href: "/what-we-do",
  },
];

const localChurchPrograms = [
  { en: "MISSION PARTNERSHIP", ko: "해외 선교 및 현지 교회 지원" },
  { en: "RELIEF PROJECT", ko: "구호물품 수집 및 해외 전달" },
  { en: "MISSION SUNDAY", ko: "교회 공동체가 함께 참여하는 특별 프로젝트" },
  { en: "CHURCH VOLUNTEER TEAM", ko: "교회 청년부·대학부·성도 봉사 참여" },
  { en: "NEXT GENERATION MISSION", ko: "청소년과 다음세대를 위한 봉사 및 선교 프로그램" },
];

const sendHopeNodes = ["한국", "LOCAL PARTNER", "LOCAL CHURCH", "FAMILY", "HOPE"];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Faith Statement */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-charcoal px-6 py-28 text-pure-white md:px-10">
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
              className="inline-flex items-center gap-2 bg-pure-white px-6 py-3.5 text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-gold hover:text-pure-white"
            >
              OUR FAITH <span aria-hidden>→</span>
            </Link>
            <Link
              href="/together"
              className="inline-flex items-center gap-2 border border-pure-white/70 px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white transition-colors hover:border-pure-white hover:bg-pure-white/10"
            >
              JOIN THE MISSION <span aria-hidden>→</span>
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
            <div className="mx-auto mt-12 max-w-xl border-t border-gold/40 pt-10">
              <p className="font-display text-2xl italic leading-relaxed text-forest md:text-3xl">
                &ldquo;{orgInfo.verse.text}&rdquo;
              </p>
              <p className="mt-3 text-xs tracking-[0.14em] text-charcoal/45">
                {orgInfo.verse.reference}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="text-center">WHY WE EXIST</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              우리는 사랑받았기에 사랑합니다.
            </h2>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              <p>
                순전한재단의 사명은 단순히 필요한 물품을 전달하는 데 있지
                않습니다. 우리는 하나님께 받은 사랑을 도움이 필요한 이웃에게
                다시 흘려보내고자 합니다.
              </p>
              <p>
                국가와 언어, 문화와 환경이 달라도 모든 사람은 존중받아야 할
                하나님의 소중한 창조물이라는 믿음 아래 현지 교회, 선교사,
                기업, 기관과 함께합니다.
              </p>
            </div>
            <p className="mx-auto mt-8 max-w-xl font-display text-lg italic leading-relaxed text-forest md:text-xl">
              We exist to love God, serve people, and bring hope wherever it
              is needed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scripture Moment */}
      <ScriptureMoment />

      {/* Our Footprint */}
      <section className="bg-forest px-6 py-24 text-pure-white md:px-10 md:py-32">
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
                <p className="font-display text-5xl font-semibold tracking-tight text-gold md:text-7xl">
                  <CountUp
                    value={stat.value.value}
                    isPlaceholder={stat.value.isPlaceholder}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-pure-white/85">
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

      {/* From Our Neighborhood to the Nations */}
      <section className="bg-warm-ivory px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="text-center">FROM OUR NEIGHBORHOOD TO THE NATIONS</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-4xl">
              가까운 이웃에서 열방까지
            </h2>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              <p>
                우리가 바라보는 선교지는 지도 위의 국가 이름이 아닙니다.
                그곳에는 한 아이가 있고, 한 가족이 있고, 지역을 섬기는
                교회와 사역자가 있습니다.
              </p>
              <p>
                순전한재단은 한 번의 방문보다 관계를 만들고 함께 걸어가는
                사역을 지향합니다.
              </p>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
              We don&rsquo;t simply go to places. We walk with people.
            </p>
          </Reveal>
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

      {/* Our Belief */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
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
                이름과 이야기를 가진 소중한 존재입니다. 순전한재단 MERE는 그
                한 사람에게 진심으로 다가가는 것에서부터 변화가 시작된다고
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

      {/* Why MERE */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>OUR PHILOSOPHY</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
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

      {/* Faith in Action */}
      <section className="bg-forest px-6 py-24 text-pure-white md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="light" className="text-center">FAITH IN ACTION</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              믿음이 삶이 되는 순간
            </h2>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-pure-white/80 md:text-base">
              <p>
                우리는 거창한 일을 기다리지 않습니다. 누군가에게 필요한 옷 한
                벌, 아이에게 필요한 책 한 권, 한 가족에게 필요한 식사, 선교
                현장에 필요한 작은 물품.
              </p>
              <p>
                작아 보이는 행동 하나가 누군가에게는 하나님이 자신을 잊지
                않으셨다는 메시지가 될 수 있습니다.
              </p>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-gold md:text-base">
              Small acts. Eternal purpose.
            </p>
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
          <Reveal delay={100} className="order-1 md:order-2">
            <div className="relative">
              <Frame
                src="/images/archive/clothing-support-01.jpg"
                alt="선교 현장에 전달된 의류와 생활물품 (실제 활동사진 교체 예정)"
                className="aspect-[4/5] w-full"
              />
              <div className="absolute left-4 top-4">
                <PlaceholderBadge className="bg-pure-white/90" />
              </div>
            </div>
            <p className="mt-3 text-[11px] text-charcoal/40">실제 활동사진 교체 예정</p>
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
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              나눔 이야기 더보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Send Hope */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>SEND HOPE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              하나의 상자에 사랑을 담아 보냅니다.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              순전한재단은 동남아시아를 비롯한 세계 여러 지역의 현지 교회와
              공동체를 통해 필요한 물품을 전달합니다. 옷, 생활필수품, 교육용품
              그리고 작은 선물이 긴 여정을 지나 한 사람의 손에 도착할 때까지
              우리는 모든 과정을 소중하게 생각합니다.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-sand-beige pt-12 md:gap-4">
            {sendHopeNodes.map((node, i) => (
              <div key={node} className="flex items-center gap-3 md:gap-4">
                <Reveal delay={i * 100}>
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-forest/30 bg-warm-ivory px-2 text-center md:h-28 md:w-28">
                    <span className="font-display text-xs font-semibold text-forest md:text-sm">
                      {node}
                    </span>
                  </div>
                </Reveal>
                {i < sendHopeNodes.length - 1 ? (
                  <span aria-hidden className="text-lg text-gold md:text-xl">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <Reveal delay={160} className="mx-auto mt-14 max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
              PACK LOVE.
              <br className="hidden sm:block" /> SEND HOPE.
              <br className="hidden sm:block" /> CHANGE A LIFE.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-forest-dark px-6 py-24 text-pure-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">OUR VALUES</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-5xl">
              우리가 어떤 마음으로 일하는지가 중요합니다.
            </h2>
          </Reveal>

          <div className="mt-16 flex flex-col divide-y divide-pure-white/10 border-y border-pure-white/10">
            {ourValues.map((v, i) => (
              <Reveal
                key={v.mark}
                delay={i * 70}
                className="grid gap-2 py-8 sm:grid-cols-[100px_220px_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="font-display text-3xl font-semibold text-gold">
                  {v.mark}
                </span>
                <h3 className="font-display text-xl font-medium">
                  {v.en} <span className="text-pure-white/60">{v.ko}</span>
                </h3>
                <p className="text-sm leading-relaxed text-pure-white/70">
                  {v.line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pray with MERE */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-center">PRAY WITH MERE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              모든 사역은 기도에서 시작됩니다.
            </h2>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              <p>
                우리는 우리의 능력만으로 세상을 바꿀 수 있다고 생각하지
                않습니다. 그래서 순전한재단은 도움이 필요한 한 사람을 만나기
                전에도, 새로운 지역으로 물품을 보내기 전에도, 새로운 사역을
                시작하기 전에도 기도합니다.
              </p>
              <p>
                우리와 함께 세계 곳곳의 이웃과 현지 교회, 선교사, 다음세대를
                위해 기도해주세요.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-sand-beige pt-12 md:grid-cols-3 md:gap-8">
            {prayerCards.map((card, i) => (
              <Reveal key={card.en} delay={i * 100} className="text-center md:text-left">
                <h3 className="font-display text-lg font-medium text-forest">
                  {card.en}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {card.line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=prayer"
              className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
            >
              기도제목 보기 <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact?type=prayer"
              className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
            >
              기도로 함께하기 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Faith & Mission */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="gold" className="text-center">
              FAITH IN ACTION / LOVE IN ACTION
            </Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-4xl">
              사랑은 말이 아니라
              <br />
              삶으로 이어져야 합니다.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              순전한재단 MERE는 기독교 정신에 바탕을 두고, 모든 사람이 있는
              모습 그대로 존중받아야 할 존재라고 믿습니다. 우리는 사랑과
              섬김이 말이 아닌 삶으로 드러나야 한다고 믿으며, 돕는 사람과
              도움을 받는 사람이라는 구분 없이, 함께 살아가는 이웃으로서
              서로를 마주합니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* For the Local Church */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>FOR THE LOCAL CHURCH</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              교회가 세상을 섬기는 길을 함께 만듭니다.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              순전한재단은 지역교회가 가진 사랑과 선교의 마음이 실제 필요한
              현장에 닿을 수 있도록 연결합니다. 교회 규모와 관계없이 참여할
              수 있습니다.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 border-t border-sand-beige pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {localChurchPrograms.map((p, i) => (
              <Reveal key={p.en} delay={(i % 3) * 80}>
                <h3 className="font-display text-lg font-medium text-charcoal">
                  {p.en}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {p.ko}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14">
            <Link
              href="/contact?type=church"
              className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
            >
              우리 교회와 함께하기 <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Church x Business x MERE */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>CHURCH × BUSINESS × MERE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              선한 마음과 전문성이 만나면{" "}
              <br className="hidden md:block" />
              더 큰 변화가 시작됩니다.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              순전한재단은 교회와 기업, 전문기관이 각자의 강점을 나누어 더
              지속적이고 실제적인 사회적 변화를 만들어갈 수 있도록 연결합니다.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-16 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {churchBusinessNodes.map((node, i) => (
                <div key={node.en} className="flex items-center gap-4 md:gap-8">
                  <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-forest/30 bg-warm-ivory text-center md:h-40 md:w-40">
                    <span className="font-display text-sm font-semibold text-forest md:text-base">
                      {node.en}
                    </span>
                    <span className="mt-1 px-3 text-xs text-charcoal/60">
                      {node.ko}
                    </span>
                  </div>
                  {i < churchBusinessNodes.length - 1 ? (
                    <span aria-hidden className="text-xl text-gold md:text-2xl">
                      ＋
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
            <span aria-hidden className="text-2xl text-gold">
              ↓
            </span>
            <div className="border border-gold/50 px-8 py-4 text-center">
              <span className="font-display text-lg font-semibold tracking-tight text-forest md:text-xl">
                SUSTAINABLE CHANGE
              </span>
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-14 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?type=church"
              className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
            >
              교회 협력 문의
            </Link>
            <Link
              href="/contact?type=csr"
              className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
            >
              기업 CSR 문의
            </Link>
            <Link
              href="/contact?type=institution"
              className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
            >
              기관 Partnership 문의
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Partners in Change -- WELL International */}
      <section className="bg-warm-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>PARTNERS IN CHANGE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
              혼자보다 함께할 때
              <br />
              더 멀리 갈 수 있습니다.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
              순전한재단은 전문성을 가진 국내외 선교·의료·교육 기관과
              협력하여 필요한 곳에 더욱 효과적인 도움을 연결합니다.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-14 grid gap-10 border-t border-sand-beige pt-12 md:grid-cols-[1fr_1.2fr] md:gap-16"
          >
            <div className="relative">
              <Frame
                src="/images/archive/well-international-01.jpg"
                alt="WELL International 협력 활동 사진 (실제 활동사진 교체 예정)"
                className="aspect-[4/3] w-full"
              />
              <div className="absolute left-4 top-4">
                <PlaceholderBadge className="bg-pure-white/90" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="eyebrow text-xs text-gold">협력기관 · PARTNER ORGANIZATION</p>
              <h3 className="font-display text-2xl font-medium text-charcoal">
                WELL International
                <span className="mt-1 block text-base font-medium text-charcoal/60">
                  영원한 빛과 사랑의 샘 · Well of Eternal Love &amp; Light
                </span>
              </h3>
              <p className="text-[15px] leading-relaxed text-charcoal/75">
                WELL International은 순전한재단과 협력하는 독립된
                선교·의료·교육 전문기관입니다. 순전한재단이 직접 운영하는
                사업이 아니라, 각자의 전문성으로 함께 협력하는 파트너
                네트워크입니다.
              </p>
              <ul className="flex flex-col gap-2 border-t border-sand-beige pt-4 text-sm text-charcoal/70">
                {wellProgramAreas.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden className="text-gold">·</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Together with MERE (existing partnership types) */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow>TOGETHER WITH MERE</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium tracking-tight text-charcoal md:text-5xl">
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
              href="/together"
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

      {/* Your Next Step */}
      <section className="bg-forest-dark px-6 py-24 text-pure-white md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">YOUR NEXT STEP</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              당신의 다음 한 걸음은 무엇인가요?
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
                  className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-wide text-pure-white hover:text-gold"
                >
                  {step.cta} <span aria-hidden>→</span>
                </Link>
              </Reveal>
            ))}
          </div>
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
                  <Frame src={p.image} alt={p.imageAlt} className="aspect-[4/3] w-full" />
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
                  <div key={p.id} className="flex flex-col gap-4">
                    <Frame src={p.image} alt={p.imageAlt} className="aspect-[4/3] w-full" />
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

      {/* This Week We Pray For */}
      <section className="bg-forest px-6 py-24 text-pure-white md:px-10 md:py-32">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              아카이브 전체 보기 <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {latestArchiveEdition ? (
            <Reveal
              delay={100}
              className="mt-12 grid gap-8 border border-sand-beige bg-pure-white p-6 sm:grid-cols-[180px_1fr] sm:items-center md:p-10"
            >
              <Frame
                src={latestArchiveEdition.coverImage}
                alt={latestArchiveEdition.coverImageAlt}
                className="aspect-[3/4] w-full"
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
                  className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
                >
                  {latestArchiveEdition.year} 활동 이야기 보기 <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* One Month. One Mission. */}
      <section className="bg-pure-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="text-center">ONE MONTH. ONE MISSION.</Eyebrow>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-5xl">
              이번 달, 우리가 함께할 한 가지.
            </h2>
          </Reveal>

          {monthlyMission.isPlaceholder ? (
            <Reveal delay={100} className="mt-12">
              <PlaceholderPanel
                title="이번 달 미션이 아직 준비되지 않았습니다."
                description="새로운 월간 미션이 확정되는 대로 목표와 현재 진행 상황을 이 자리에 안내해드리겠습니다."
              />
            </Reveal>
          ) : (
            <Reveal delay={100} className="mt-12 border border-sand-beige bg-warm-ivory px-6 py-10 text-left md:px-10">
              <p className="eyebrow text-xs text-gold">{monthlyMission.value.titleEn}</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-charcoal md:text-3xl">
                {monthlyMission.value.titleKo}
              </h3>
              <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-sand-beige">
                <div
                  className="h-full rounded-full bg-forest"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.round(
                        (monthlyMission.value.current / monthlyMission.value.target) * 100
                      )
                    )}%`,
                  }}
                />
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-forest md:text-4xl">
                <CountUp value={monthlyMission.value.current} />
                {" / "}
                {monthlyMission.value.target} {monthlyMission.value.unit}
              </p>
              <Link
                href="/donate"
                className="mt-8 inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
              >
                THIS MISSION에 참여하기 <span aria-hidden>→</span>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* Give With MERE */}
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
            >
              투명성 페이지 전체 보기 <span aria-hidden>→</span>
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
