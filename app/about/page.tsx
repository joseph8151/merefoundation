import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InPageNav from "@/components/InPageNav";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import { PlaceholderBadge, PlaceholderPanel } from "@/components/PlaceholderNote";
import { orgInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "재단소개",
  description:
    "순전한 재단 MERE의 설립취지, Mission & Vision, 핵심가치와 조직 소개.",
};

const sections = [
  { id: "founding", label: "설립취지" },
  { id: "mission-vision", label: "Mission & Vision" },
  { id: "core-values", label: "핵심가치" },
  { id: "greeting", label: "대표인사말" },
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
            </section>

            {/* 대표인사말 */}
            <section id="greeting" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  대표인사말
                </h2>
              </Reveal>
              <Reveal delay={80} className="mt-8 grid gap-10 md:grid-cols-[280px_1fr]">
                <Frame
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
                  alt="대표자 인물 사진 (준비 중 — 실제 사진으로 교체 필요)"
                  className="aspect-[4/5] w-full max-w-[280px]"
                />
                <div>
                  <PlaceholderBadge className="mb-4" />
                  <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75">
                    <p>
                      안녕하십니까. 순전한 재단 MERE를 찾아주신 여러분께
                      깊이 감사드립니다.
                    </p>
                    <p>
                      우리 재단은 순전한 마음으로 이웃의 오늘을 함께하고,
                      더 나은 내일을 만들어가고자 하는 뜻으로 시작되었습니다.
                      앞으로도 한 사람 한 사람을 소중히 여기는 마음으로
                      걸어가겠습니다. 많은 관심과 동행 부탁드립니다.
                    </p>
                    <p className="text-charcoal/50">
                      [대표자 성함] 드림
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-charcoal/40">
                    ※ 위 인사말은 예시 템플릿입니다. 대표자 확정 및 검수 후
                    실제 인사말과 성함, 사진으로 교체해주세요.
                  </p>
                </div>
              </Reveal>
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
                  <div
                    aria-hidden
                    className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border border-dashed border-gold/50 bg-sand-beige text-charcoal/40"
                  >
                    <span className="text-sm">지도 영역 (준비 중)</span>
                    <span className="text-xs">실제 지도 embed로 교체 예정</span>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <PlaceholderPanel
                      title={orgInfo.address.value}
                      description="정확한 주소가 확정되는 대로 이 영역을 실제 주소와 지도로 교체해주세요."
                    />
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
