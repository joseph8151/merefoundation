import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import { PlaceholderBadge } from "@/components/PlaceholderNote";
import { pendingArtFor } from "@/components/PendingIllustrations";
import { partnershipTypes } from "@/data/partnership";

export const metadata: Metadata = {
  title: "함께하기",
  description: "개인, 기업, 교회·기관 — 각자의 자리에서 MERE와 함께하는 방법.",
  alternates: { canonical: "/together" },
};

const audiences = [
  {
    id: "individual",
    label: "개인",
    en: "INDIVIDUAL",
    intro: "정기후원, 재능기부, 자원봉사로 한 사람의 삶에 가까이 다가갈 수 있습니다.",
  },
  {
    id: "corporate",
    label: "기업",
    en: "CORPORATE",
    intro: "사회공헌 방향에 맞춘 프로젝트 후원과 임직원 참여 프로그램을 함께 설계합니다.",
  },
  {
    id: "church",
    label: "교회·기관",
    en: "CHURCH & INSTITUTION",
    intro: "지역 안팎의 필요를 함께 살피고, 지속 가능한 협력 사업을 만들어갑니다.",
  },
] as const;

const prayerFocusPoints = [
  "도움이 필요한 국가와 지역을 위해",
  "현지에서 사역하는 선교사와 봉사자를 위해",
  "교육의 기회를 기다리는 다음세대를 위해",
  "질병과 어려움 속에 있는 이웃을 위해",
  "재단의 모든 결정이 정직하고 바르게 이루어지도록",
];

const localChurchPrograms = [
  { en: "MISSION PROJECTS", ko: "해외 선교 프로젝트" },
  { en: "MISSIONARY & CHURCH SUPPORT", ko: "선교사 및 현지교회 지원" },
  { en: "RELIEF SUPPLIES", ko: "구호물품 후원" },
  { en: "VOLUNTEER ACTIVITIES", ko: "국내외 봉사활동" },
  { en: "NEXT GENERATION EDUCATION", ko: "다음세대 교육" },
  { en: "MEDICAL & HEALTH PROJECTS", ko: "의료·보건 프로젝트" },
  { en: "JOINT GIVING CAMPAIGNS", ko: "교회 공동 후원 캠페인" },
];

const churchBusinessNodes = [
  { en: "CHURCH", ko: "사랑과 섬김" },
  { en: "BUSINESS", ko: "자원과 전문성" },
  { en: "MERE FOUNDATION", ko: "연결과 실행" },
];

const corporatePartnershipOfferings = [
  { en: "물품 기부", line: "재고·의류·생활용품·교육용품 등 기업의 자원을 필요한 현장에 연결합니다." },
  { en: "프로젝트 후원", line: "특정 국가 또는 사업을 지정하여 프로젝트를 공동으로 진행합니다." },
  { en: "임직원 봉사", line: "기업 구성원이 직접 참여할 수 있는 봉사 프로그램을 기획합니다." },
  { en: "전문성 기부", line: "기업이 가진 기술·서비스·콘텐츠·전문성을 사회적 가치와 연결합니다." },
];

const wellProgramAreas = ["의료사업", "교육사업", "보건·위생사업", "긴급구호·봉사단 파견", "기관협력"];

const voicesFromField = [
  {
    quote: "멀리 떨어진 한국에서 우리를 기억하고 있다는 것 자체가 큰 힘이 되었습니다.",
    source: "LOCAL PARTNER · ASIA",
  },
  {
    quote: "필요했던 것은 거창한 것이 아니었습니다. 아이들이 다시 공부할 수 있는 작은 기회였습니다.",
    source: "EDUCATION PARTNER",
  },
  {
    quote: "한 번의 지원으로 끝나는 관계가 아니라 계속 우리의 이야기를 들어주는 사람들이 있다는 것이 감사했습니다.",
    source: "MISSION FIELD PARTNER",
  },
];

const peopleBehindMere = [
  { en: "MISSIONARIES", line: "현장을 오랫동안 섬기며 지역사회의 필요를 연결합니다." },
  { en: "CHURCHES", line: "기도와 나눔을 통해 지속적인 사역의 기반을 만듭니다." },
  { en: "BUSINESSES", line: "기업이 가진 자원과 전문성을 사회적 가치로 연결합니다." },
  { en: "PROFESSIONALS", line: "의료·교육·법률·디자인·통번역 등 전문성을 나눕니다." },
  { en: "DONORS", line: "작은 후원을 지속적인 변화의 힘으로 만듭니다." },
];

export default function TogetherPage() {
  return (
    <>
      <PageHeader
        eyebrow="TOGETHER WITH MERE"
        titleKo="함께하기"
        titleEn="TOGETHER"
        description="더 큰 변화는 함께할 때 가능합니다. 개인, 기업, 교회·기관 — 각자의 자리에서 MERE와 함께하는 방법을 소개합니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-24 md:gap-32">
          {/* 도움이 필요하신가요? */}
          <section
            id="help"
            className="scroll-mt-28 border border-gold/40 bg-warm-ivory px-6 py-12 md:px-10 md:py-16"
          >
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                도움이 필요하신가요?
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/75">
                도움이 필요한 순간, 혼자 감당하지 않아도 됩니다. 모든 요청을
                지원할 수는 없지만 상황을 확인하고 가능한 방법을 함께
                찾아보겠습니다.
              </p>
            </Reveal>
            <Reveal delay={80} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?type=support"
                className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
              >
                지원 문의하기 <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact?type=referral"
                className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
              >
                도움이 필요한 이웃 추천하기 <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact?type=institution"
                className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
              >
                기관 지원 문의 <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </section>

          {/* 함께 기도해주세요 (원래 홈페이지 "Pray with MERE" 섹션) */}
          <section id="pray" className="scroll-mt-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-xs text-gold">PRAY WITH MERE</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                함께 기도해주세요.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75">
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

            <div className="mt-10 border-t border-sand-beige pt-10">
              <ul className="flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-charcoal/80">
                {prayerFocusPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="text-gold">·</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal delay={100} className="mt-10 flex flex-wrap gap-4">
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
          </section>

          {audiences.map((audience) => {
            const items = partnershipTypes.filter((t) => t.audience === audience.id);
            return (
              <section key={audience.id} id={audience.id} className="scroll-mt-28">
                <Reveal>
                  <p className="eyebrow text-xs text-gold">{audience.en}</p>
                  <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                    {audience.label}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                    {audience.intro}
                  </p>
                </Reveal>

                <div className="mt-10 grid gap-8 border-t border-sand-beige pt-10 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, i) => (
                    <Reveal
                      key={item.id}
                      delay={i * 60}
                      id={item.id === "volunteer" ? "volunteer" : undefined}
                      className={item.id === "volunteer" ? "scroll-mt-28" : undefined}
                    >
                      <h3 className="font-display text-lg font-medium text-charcoal">
                        {item.titleKo}
                        <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-charcoal/40">
                          {item.titleEn}
                        </span>
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                        {item.description}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
                  >
                    {audience.id === "individual" ? "참여 문의" : "파트너십 문의"} <span aria-hidden>→</span>
                  </Link>
                  {audience.id === "individual" ? (
                    <Link
                      href="/donate"
                      className="inline-flex items-center gap-2 border border-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-forest hover:bg-forest hover:text-pure-white"
                    >
                      후원 참여 <span aria-hidden>→</span>
                    </Link>
                  ) : null}
                </div>
              </section>
            );
          })}

          {/* For the Local Church (원래 홈페이지 "For the Local Church" 섹션) */}
          <section id="local-church" className="scroll-mt-28">
            <Reveal>
              <p className="eyebrow text-xs text-gold">FOR THE LOCAL CHURCH</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                교회가 세상을 섬기는 길을 함께 만듭니다.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                순전한재단은 지역교회가 가진 사랑과 선교의 마음이 실제 필요한
                현장에 닿을 수 있도록 연결합니다. 교회 규모와 관계없이 참여할
                수 있습니다.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-10 border-t border-sand-beige pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {localChurchPrograms.map((p, i) => (
                <Reveal key={p.en} delay={(i % 3) * 60}>
                  <h3 className="font-display text-lg font-medium text-charcoal">
                    {p.en}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                    {p.ko}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140} className="mt-10">
              <Link
                href="/contact?type=church"
                className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
              >
                우리 교회와 함께하기 <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </section>

          {/* Church x Business x MERE (원래 홈페이지 섹션) */}
          <section id="church-business" className="scroll-mt-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-xs text-gold">CHURCH × BUSINESS × MERE</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                선한 마음과 전문성이 만나면 더 큰 변화가 시작됩니다.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                순전한재단은 교회와 기업, 전문기관이 각자의 강점을 나누어 더
                지속적이고 실제적인 사회적 변화를 만들어갈 수 있도록 연결합니다.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-10 flex flex-col items-center gap-6 border-t border-sand-beige pt-10">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {churchBusinessNodes.map((node, i) => (
                  <div key={node.en} className="flex items-center gap-4 md:gap-8">
                    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-forest/30 bg-warm-ivory text-center md:h-36 md:w-36">
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

            <Reveal delay={140} className="mt-10 flex flex-wrap gap-4">
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
          </section>

          {/* MERE Corporate Partnership */}
          <section id="corporate-partnership" className="scroll-mt-28">
            <Reveal>
              <p className="eyebrow text-xs text-gold">MERE CORPORATE PARTNERSHIP</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                기업의 선한 영향력이 실제 변화가 되도록.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                기업의 사회공헌은 단순한 기부를 넘어 기업이 가진 자원과
                전문성을 사회와 나누는 새로운 방법이 될 수 있습니다. 순전한재단은
                기업의 목적과 특성에 맞춰 국내외 사회공헌 프로젝트를 함께
                기획합니다.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-10 border-t border-sand-beige pt-10 sm:grid-cols-2">
              {corporatePartnershipOfferings.map((item, i) => (
                <Reveal key={item.en} delay={i * 60}>
                  <h3 className="font-display text-lg font-medium text-charcoal">{item.en}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                    {item.line}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100} className="mt-10 grid gap-x-10 gap-y-3 border-t border-sand-beige pt-10 sm:grid-cols-2">
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-charcoal/75">
                {[
                  "기업 지정기탁 프로젝트",
                  "해외 교육지원",
                  "해외 의료·구호 프로젝트",
                  "임직원 봉사 프로그램",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden className="text-gold">·</span>
                    {line}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-charcoal/75">
                {[
                  "물품 기부",
                  "캠페인 공동기획",
                  "취약계층 지원",
                  "ESG·CSR 연계 프로젝트",
                  "프로젝트 결과 리포트",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span aria-hidden className="text-gold">·</span>
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <Link
                href="/contact?type=csr"
                className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
              >
                CSR Partnership 문의 <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </section>

          {/* Partners in Change -- WELL International (원래 홈페이지 섹션) */}
          <section id="partners-in-change" className="scroll-mt-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-xs text-gold">PARTNERS IN CHANGE</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                혼자보다 함께할 때 더 멀리 갈 수 있습니다.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                순전한재단은 전문성을 가진 국내외 선교·의료·교육 기관과
                협력하여 필요한 곳에 더욱 효과적인 도움을 연결합니다.
              </p>
            </Reveal>

            <Reveal
              delay={80}
              className="mt-10 grid gap-10 border-t border-sand-beige pt-10 md:grid-cols-[1fr_1.2fr] md:gap-16"
            >
              <Frame
                src="/images/archive/well-international-01.jpg"
                alt="WELL International 사무실에 전시된 세계 선교 활동 지도"
                className="aspect-[4/3] w-full"
                pendingArt={pendingArtFor("partnership")}
              />
              <div className="flex flex-col gap-5">
                <p className="eyebrow text-xs text-gold">협력기관 · PARTNER ORGANIZATION</p>
                <h3 className="font-display text-xl font-medium text-charcoal">
                  WELL International
                  <span className="mt-1 block text-sm font-medium text-charcoal/60">
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
          </section>

          {/* Voices from the Field (원래 홈페이지 섹션) */}
          <section id="voices" className="scroll-mt-28">
            <Reveal className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-xs text-gold">VOICES FROM THE FIELD</p>
                <PlaceholderBadge />
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                현장에서 들려오는 이야기
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-10 border-t border-sand-beige pt-10 md:grid-cols-3 md:gap-8">
              {voicesFromField.map((v, i) => (
                <Reveal key={v.source} delay={i * 80}>
                  <p className="font-display text-lg italic leading-relaxed text-charcoal/85">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                    {v.source}
                  </p>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-[11px] text-charcoal/40">
              예시 인용구입니다. 실제 인터뷰가 확보되는 대로 실제
              이름·국가·사진으로 교체할 예정입니다.
            </p>
          </section>

          {/* The People Behind MERE (원래 홈페이지 섹션) */}
          <section id="people-behind-mere" className="scroll-mt-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-xs text-gold">THE PEOPLE BEHIND MERE</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                모든 변화 뒤에는 사람이 있습니다.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                순전한재단의 활동은 한 기관만으로 만들어지지 않습니다. 현장의
                필요를 가장 가까이에서 알고 있는 선교사, 아이들을 가르치는
                교사, 환자를 돌보는 의료인, 필요한 물품을 지원하는 기업,
                기도와 후원으로 함께하는 교회와 후원자까지. 서로 다른 자리에서
                가진 것을 나눌 때 더 큰 변화가 만들어집니다.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-10 border-t border-sand-beige pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {peopleBehindMere.map((p, i) => (
                <Reveal key={p.en} delay={(i % 3) * 60}>
                  <h3 className="font-display text-lg font-medium text-charcoal">
                    {p.en}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                    {p.line}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
