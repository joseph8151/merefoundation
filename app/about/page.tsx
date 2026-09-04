import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InPageNav from "@/components/InPageNav";
import Reveal from "@/components/Reveal";
import VideoEmbed from "@/components/VideoEmbed";
import { orgInfo } from "@/data/site";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "재단소개",
  description:
    "순전한 재단 MERE의 설립취지, Mission & Vision, 핵심가치와 조직 소개.",
  alternates: { canonical: "/about" },
};

const sections = [
  { id: "founding", label: "설립취지" },
  { id: "identity", label: "우리는 누구인가" },
  { id: "videos", label: "영상으로 만나는 MERE" },
  { id: "mission-vision", label: "Mission & Vision" },
  { id: "reach", label: "가까운 이웃에서 열방까지" },
  { id: "statement-of-faith", label: "우리가 믿는 것" },
  { id: "how-it-works", label: "HOW MERE WORKS" },
  { id: "core-values", label: "핵심가치" },
  { id: "mere-promise", label: "MERE의 약속" },
  { id: "organization", label: "조직 및 운영" },
  { id: "location", label: "오시는 길" },
];

const coreValues = [
  { mark: "01", en: "PURITY", ko: "순전함", line: "계산이나 조건 없이, 있는 그대로의 진심으로 사람을 대합니다." },
  { mark: "02", en: "LOVE", ko: "사랑", line: "사랑은 감정이 아니라 실천이라는 것을 삶으로 보여줍니다." },
  { mark: "03", en: "DIGNITY", ko: "존엄", line: "모든 사람은 조건 없이 존중받아야 할 존재임을 기억합니다." },
  { mark: "04", en: "ACTION", ko: "행동", line: "마음에 머물지 않고, 구체적인 행동으로 옮깁니다." },
  { mark: "05", en: "TOGETHER", ko: "함께함", line: "혼자가 아니라 함께일 때 더 멀리, 더 오래 갈 수 있습니다." },
];

// MERE라는 이름의 의미를 풀어내는 세 가지 축 (원래 홈페이지 "Why MERE?" 섹션)
const namePhilosophy = [
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

// 신앙에 뿌리를 둔 다섯 가지 가치 (원래 홈페이지 "Our Values" 섹션) --
// 조직 운영 원칙인 위 핵심가치와는 별도의, 신앙적 가치 목록입니다.
const faithValues = [
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

const howMereWorksSteps = [
  {
    number: "01",
    en: "LISTEN",
    ko: "현장의 목소리를 듣습니다",
    line: "현지 파트너, 교회, 선교사 및 기관을 통해 가장 필요한 지원을 확인합니다.",
  },
  {
    number: "02",
    en: "CONNECT",
    ko: "필요한 자원을 연결합니다",
    line: "교회, 기업, 후원자, 전문가의 자원과 현장의 필요를 연결합니다.",
  },
  {
    number: "03",
    en: "ACT",
    ko: "실제적인 도움으로 움직입니다",
    line: "교육, 의료, 구호물품, 생활지원 등 현장 상황에 맞는 프로젝트를 실행합니다.",
  },
  {
    number: "04",
    en: "FOLLOW",
    ko: "전달 이후도 확인합니다",
    line: "도움이 어디에 어떻게 전달되었는지 확인하고 지속적인 지원 가능성을 살펴봅니다.",
  },
  {
    number: "05",
    en: "GROW",
    ko: "지속 가능한 변화로 이어갑니다",
    line: "일회성 지원을 넘어 현지 공동체가 스스로 성장할 수 있는 관계를 만들어갑니다.",
  },
];

const merePromiseItems = [
  {
    mark: "01",
    en: "NEED FIRST",
    ko: "현장의 필요가 먼저입니다.",
    line: "보여주기 위한 사업보다 실제로 필요한 도움을 우선합니다.",
  },
  {
    mark: "02",
    en: "PEOPLE FIRST",
    ko: "숫자보다 사람을 먼저 생각합니다.",
    line: "모든 지원의 중심에는 한 사람과 한 가정이 있습니다.",
  },
  {
    mark: "03",
    en: "PARTNERSHIP",
    ko: "혼자 하지 않습니다.",
    line: "현장을 잘 아는 기관과 협력하고 서로의 전문성을 존중합니다.",
  },
  {
    mark: "04",
    en: "RESPONSIBILITY",
    ko: "책임 있게 사용합니다.",
    line: "후원금과 지원물품이 목적에 맞게 사용되도록 관리합니다.",
  },
  {
    mark: "05",
    en: "CONTINUITY",
    ko: "한 번보다 지속성을 생각합니다.",
    line: "일회성 이벤트가 아닌 장기적인 변화를 추구합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT MERE"
        titleKo="재단소개"
        titleEn="ABOUT MERE FOUNDATION"
        description="순전한 재단 MERE가 걸어온 이유와 앞으로 걸어갈 방향을 소개합니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <InPageNav sections={sections} />

          <div className="flex flex-col gap-24 md:gap-32">
            {/* 설립취지 */}
            <section id="founding" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  설립취지
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  <p>
                    순전한 재단 MERE는 도움이 필요한 이웃이 오늘을 견디는 것을
                    넘어, 더 나은 내일을 그릴 수 있도록 함께하기 위해
                    세워졌습니다. 우리는 크고 화려한 성과보다, 한 사람에게
                    진심으로 다가가는 순전한 마음이 진짜 변화를 만든다고
                    믿습니다.
                  </p>
                  <p>
                    아동과 다음세대, 가정과 지역사회, 그리고 국경 너머의 이웃까지
                    — 형편과 배경에 관계없이 존엄한 존재로 존중받고, 함께
                    살아갈 수 있는 사회를 만들어가는 것이 우리의 시작이자
                    목표입니다.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* 우리는 누구인가 (원래 홈페이지 "Who We Are" + "Why MERE?" 섹션) */}
            <section id="identity" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  WHO WE ARE
                  <span className="ml-3 text-lg font-medium text-charcoal/50">
                    우리는 누구인가
                  </span>
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  <p>
                    순전한 재단 MERE Foundation은 도움이 필요한 한 사람의 삶을
                    바라보는 것에서 시작합니다.
                  </p>
                  <p>
                    우리는 단순히 물품을 보내거나 일회성 지원을 제공하는 데
                    머물지 않습니다. 현지 교회, 선교사, 교육기관, 의료기관,
                    기업 및 다양한 파트너들과 함께 각 지역에 실제로 필요한 것이
                    무엇인지 찾고 지속 가능한 방법으로 연결합니다.
                  </p>
                </div>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
                  Compassion · Connection · Action · Change
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  마음에서 시작하여,
                  <br />
                  사람과 사람을 연결하고,
                  <br />
                  실제적인 행동으로 옮기며,
                  <br />
                  지속되는 변화를 만들어갑니다.
                </p>
              </Reveal>

              <Reveal delay={80} className="mt-14 border-t border-sand-beige pt-10">
                <h3 className="font-display text-xl font-medium text-charcoal">
                  Why MERE?
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  MERE는 &lsquo;꾸밈없는&rsquo;, &lsquo;순수한&rsquo;이라는 뜻을 가진
                  단어입니다. 우리는 화려한 수식이나 조건 없이, 본질적인 마음으로
                  사람을 대하고 돕는 재단이 되고자 이 이름을 선택했습니다. 순전한
                  마음은 우리가 하는 모든 일의 시작점입니다.
                </p>
                <div className="mt-10 grid gap-10 border-t border-sand-beige pt-10 md:grid-cols-3 md:gap-8">
                  {namePhilosophy.map((item, i) => (
                    <Reveal key={item.number} delay={i * 80}>
                      <span className="font-display text-3xl font-semibold text-gold">
                        {item.number}
                      </span>
                      <h4 className="mt-4 font-display text-lg font-medium text-charcoal">
                        {item.en}
                        <span className="ml-2 text-sm font-medium text-charcoal/60">
                          {item.ko}
                        </span>
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                        {item.line}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* 영상으로 만나는 MERE */}
            <section id="videos" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  영상으로 만나는 MERE
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  순전한 재단 MERE의 이야기를 영상으로도 만나보세요.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {videos.map((video, i) => (
                  <Reveal key={video.youtubeId} delay={i * 80}>
                    <VideoEmbed video={video} />
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission-vision" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  Mission &amp; Vision
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <Reveal className="border border-sand-beige bg-warm-ivory p-8">
                  <p className="eyebrow text-xs text-gold">MISSION</p>
                  <p className="mt-4 text-balance font-display text-xl font-medium leading-snug text-charcoal md:text-2xl">
                    순전한 마음으로 사람을 연결하고 삶의 지속 가능한 변화를
                    만듭니다.
                  </p>
                </Reveal>
                <Reveal delay={100} className="border border-sand-beige bg-warm-ivory p-8">
                  <p className="eyebrow text-xs text-gold">VISION</p>
                  <p className="mt-4 text-balance font-display text-xl font-medium leading-snug text-charcoal md:text-2xl">
                    모든 사람이 존중받고 희망을 꿈꿀 수 있는 사회
                  </p>
                </Reveal>
              </div>

              <Reveal delay={140} className="mt-10 border-t border-sand-beige pt-10">
                <p className="eyebrow text-xs text-gold">WHY WE EXIST</p>
                <h3 className="mt-4 font-display text-xl font-medium text-charcoal md:text-2xl">
                  우리는 사랑받았기에 사랑합니다.
                </h3>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
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
                <p className="mt-6 font-display text-lg italic leading-relaxed text-forest md:text-xl">
                  We exist to love God, serve people, and bring hope wherever it
                  is needed.
                </p>
              </Reveal>
            </section>

            {/* 가까운 이웃에서 열방까지 (원래 홈페이지 "From Our Neighborhood to the Nations" 섹션) */}
            <section id="reach" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  FROM OUR NEIGHBORHOOD TO THE NATIONS
                  <span className="ml-3 block text-lg font-medium text-charcoal/50 sm:inline sm:ml-3">
                    가까운 이웃에서 열방까지
                  </span>
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  <p>
                    대한민국에서 시작된 나눔이 세계 곳곳으로 향합니다. 작은
                    상자 하나, 한 사람의 후원, 한 기업의 참여가 국경을 넘어
                    새로운 희망이 될 수 있습니다. 순전한재단은 동남아시아를
                    비롯하여 아시아, 중앙아시아 및 다양한 해외 지역의 파트너들과
                    협력하며 교육·선교·의료·생활지원·긴급구호 활동을 확대하고
                    있습니다.
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
                  KOREA → ASIA → CENTRAL ASIA → GLOBAL
                </p>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
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
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
                  We don&rsquo;t simply go to places. We walk with people.
                </p>
              </Reveal>
            </section>

            {/* What We Believe (Statement of Faith) */}
            <section id="statement-of-faith" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  WHAT WE BELIEVE
                  <span className="ml-3 text-lg font-medium text-charcoal/50">
                    우리가 믿는 것
                  </span>
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  <p>
                    우리는 하나님께서 세상을 사랑하시며 모든 사람이 존엄하고
                    소중한 존재라고 믿습니다.
                  </p>
                  <p>
                    우리는 예수 그리스도의 사랑과 섬김을 따라 도움이 필요한
                    이웃을 조건 없이 사랑하고 섬기는 것이 우리에게 주어진
                    부르심이라고 믿습니다.
                  </p>
                  <p>
                    우리는 기도와 믿음에서 시작된 작은 행동이 가정과 공동체
                    그리고 다음세대의 삶을 변화시킬 수 있다고 믿습니다.
                  </p>
                  <p>
                    그리고 교회와 하나님의 사람들이 함께할 때 그 사랑이
                    국경을 넘어 더 멀리 흘러갈 수 있다고 믿습니다.
                  </p>
                </div>
                <p className="mt-8 border-t border-sand-beige pt-8 text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
                  LOVE GOD. LOVE PEOPLE. SERVE THE WORLD.
                </p>
              </Reveal>

              <Reveal delay={100} className="mt-14 border-t border-sand-beige pt-10">
                <p className="eyebrow text-xs text-gold">OUR BELIEF</p>
                <h3 className="mt-4 font-display text-xl font-medium text-charcoal md:text-2xl">
                  한 사람의 삶이 소중하다고 믿습니다.
                </h3>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
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

              <Reveal delay={140} className="mt-14 border-t border-sand-beige pt-10">
                <p className="eyebrow text-xs text-gold">FAITH IN ACTION</p>
                <h3 className="mt-4 font-display text-xl font-medium text-charcoal md:text-2xl">
                  믿음이 삶이 되는 순간
                </h3>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  <p>
                    우리는 거창한 일을 기다리지 않습니다. 누군가에게 필요한 옷 한
                    벌, 아이에게 필요한 책 한 권, 한 가족에게 필요한 식사, 선교
                    현장에 필요한 작은 물품.
                  </p>
                  <p>
                    작아 보이는 행동 하나가 누군가에게는 하나님이 자신을 잊지
                    않으셨다는 메시지가 될 수 있습니다.
                  </p>
                  <p>
                    사랑은 말이 아니라 삶으로 이어져야 합니다. 순전한재단 MERE는
                    기독교 정신에 바탕을 두고, 모든 사람이 있는 모습 그대로
                    존중받아야 할 존재라고 믿습니다. 우리는 사랑과 섬김이 말이
                    아닌 삶으로 드러나야 한다고 믿으며, 돕는 사람과 도움을 받는
                    사람이라는 구분 없이, 함께 살아가는 이웃으로서 서로를
                    마주합니다.
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
                  Small acts. Eternal purpose.
                </p>
              </Reveal>
            </section>

            {/* HOW MERE WORKS (원래 홈페이지 "How MERE Works" 섹션) */}
            <section id="how-it-works" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  HOW MERE WORKS
                  <span className="ml-3 text-lg font-medium text-charcoal/50">
                    하나의 도움이 현장에 도착하기까지
                  </span>
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75 md:text-base">
                  순전한재단의 모든 프로젝트는 현장의 필요를 먼저 듣는 것에서
                  시작합니다.
                </p>
              </Reveal>

              <div className="mt-10 flex flex-col divide-y divide-sand-beige border-y border-sand-beige">
                {howMereWorksSteps.map((step, i) => (
                  <Reveal
                    key={step.number}
                    delay={i * 60}
                    className="grid gap-2 py-7 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-display text-2xl font-semibold text-gold">
                      {step.number}
                    </span>
                    <h3 className="font-display text-lg font-medium text-charcoal">
                      {step.en} <span className="text-charcoal/60">{step.ko}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {step.line}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 핵심가치 */}
            <section id="core-values" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  핵심가치
                </h2>
              </Reveal>
              <div className="mt-8 flex flex-col divide-y divide-sand-beige border-y border-sand-beige">
                {coreValues.map((v, i) => (
                  <Reveal
                    key={v.mark}
                    delay={i * 60}
                    className="grid gap-2 py-6 sm:grid-cols-[80px_180px_1fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-display text-2xl font-semibold text-gold">
                      {v.mark}
                    </span>
                    <h3 className="font-display text-lg font-medium text-charcoal">
                      {v.en} <span className="text-charcoal/60">{v.ko}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {v.line}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={80} className="mt-14 border-t border-sand-beige pt-10">
                <h3 className="font-display text-xl font-medium text-charcoal">
                  신앙의 가치
                  <span className="ml-3 text-sm font-medium text-charcoal/50">
                    FAITH VALUES
                  </span>
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75">
                  위 핵심가치가 재단이 일하는 방식이라면, 아래 다섯 가지는 그
                  일의 뿌리가 되는 신앙적 가치입니다.
                </p>
              </Reveal>
              <div className="mt-8 flex flex-col divide-y divide-sand-beige border-y border-sand-beige">
                {faithValues.map((v, i) => (
                  <Reveal
                    key={v.mark}
                    delay={i * 60}
                    className="grid gap-2 py-6 sm:grid-cols-[80px_180px_1fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-display text-2xl font-semibold text-gold">
                      {v.mark}
                    </span>
                    <h3 className="font-display text-lg font-medium text-charcoal">
                      {v.en} <span className="text-charcoal/60">{v.ko}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {v.line}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* MERE의 약속 (원래 홈페이지 "MERE Promise" 섹션) */}
            <section id="mere-promise" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  MERE PROMISE
                  <span className="ml-3 text-lg font-medium text-charcoal/50">
                    우리가 지키고 싶은 약속
                  </span>
                </h2>
              </Reveal>

              <div className="mt-8 flex flex-col divide-y divide-sand-beige border-y border-sand-beige">
                {merePromiseItems.map((item, i) => (
                  <Reveal
                    key={item.mark}
                    delay={i * 60}
                    className="grid gap-2 py-6 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-display text-2xl font-semibold text-gold">
                      {item.mark}
                    </span>
                    <h3 className="font-display text-lg font-medium text-charcoal">
                      {item.en} <span className="text-charcoal/60">{item.ko}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {item.line}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* 조직 및 운영 */}
            <section id="organization" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  조직 및 운영
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75">
                  <p>
                    순전한 재단 MERE는 일반적인 비영리재단의 구조에 따라
                    이사회와 사무국을 중심으로 운영될 예정입니다. 이사회는
                    재단의 주요 의사결정과 감독을, 사무국은 실무 사업의
                    기획과 집행을 담당하는 형태를 기본으로 검토하고
                    있습니다.
                  </p>
                </div>
                <p className="mt-6 text-xs text-charcoal/40">
                  ※ 위 조직 구조 설명은 일반적인 비영리 구조를 바탕으로 한
                  예시이며, 실제 정관 및 이사회 확정 내용에 따라 수정이
                  필요합니다.
                </p>
              </Reveal>
            </section>

            {/* 오시는 길 */}
            <section id="location" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  오시는 길
                </h2>
                <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr]">
                  <div className="aspect-[4/3] w-full overflow-hidden border border-sand-beige bg-sand-beige">
                    <iframe
                      title={`${orgInfo.nameKo} 위치 지도`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        orgInfo.address.value
                      )}&output=embed`}
                      className="h-full w-full grayscale-[15%]"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <p className="eyebrow text-xs text-gold">ADDRESS</p>
                    <p className="font-display text-lg text-charcoal">
                      {orgInfo.address.value}
                    </p>
                    <p className="text-sm text-charcoal/60">
                      Tel. {orgInfo.phone.value}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        orgInfo.address.value
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest underline decoration-gold/50 underline-offset-4 hover:text-gold"
                    >
                      지도 앱에서 크게 보기 →
                    </a>
                  </div>
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
