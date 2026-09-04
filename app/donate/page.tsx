import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import DonationForm from "@/components/DonationForm";
import CopyButton from "@/components/CopyButton";
import CountUp from "@/components/CountUp";
import { PlaceholderBadge, PlaceholderPanel } from "@/components/PlaceholderNote";
import { orgInfo } from "@/data/site";
import { monthlyMission } from "@/data/monthlyMission";

export const metadata: Metadata = {
  title: "후원",
  description: "정기후원과 일시후원으로 순전한재단 MERE와 함께해주세요.",
  alternates: { canonical: "/donate" },
};

const donationTypes = [
  "정기후원",
  "일시후원",
  "분기후원",
  "해외선교 지정후원",
  "교육지원",
  "긴급구호",
  "기업·기관 후원",
  "물품후원",
];

const sendHopeNodes = [
  "당신의 후원",
  "현장의 필요 확인",
  "지원 프로젝트 선정",
  "물품·교육·의료·구호 지원",
  "현지 파트너 전달",
  "한 사람과 한 공동체의 변화",
];

const givingTiles = [
  { amount: "₩30,000", line: "작은 필요에 응답하는 나눔" },
  { amount: "₩50,000", line: "한 가정과 아이를 위한 생활·교육 지원" },
  { amount: "₩100,000", line: "현지 프로젝트와 구호활동을 위한 후원" },
  { amount: "자유 금액", line: "원하는 금액으로 자유롭게 참여" },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="DONATE"
        titleKo="당신의 순전한 마음이 누군가의 내일을 바꿉니다."
        titleEn="GIVE WITH MERE"
        description="한 번의 나눔도, 오랜 시간 이어지는 동행도 변화의 시작이 될 수 있습니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-16">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                후원 유형
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                순전한재단은 다음과 같은 방식의 나눔을 지원합니다. 아래
                후원신청 양식에서 원하시는 후원 방식과 목적을 선택하실 수
                있습니다.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-sand-beige pt-6 text-sm text-charcoal/75 sm:grid-cols-4">
                {donationTypes.map((type) => (
                  <li key={type} className="flex gap-2">
                    <span aria-hidden className="text-gold">·</span>
                    {type}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                정기후원
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                매월 정기적인 나눔은 재단이 이웃을 향한 지원을 안정적이고
                지속적으로 이어갈 수 있는 가장 큰 힘이 됩니다. 작은 금액이라도
                꾸준히 이어지는 마음이 한 사람의 삶을 바꾸는 지속가능한
                변화를 만듭니다.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                일시후원 · 분기후원
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                긴급한 상황이나 특정 프로젝트를 위한 한 번의 나눔, 혹은
                분기마다 이어가는 나눔도 소중한 변화의 시작이 됩니다.
                원하시는 사업이나 목적을 지정하여 후원하실 수 있습니다.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                후원 안내
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-charcoal/70">
                <p>
                  기부금 영수증 발급 및 세제혜택은 관련 법령에 따라 공익법인
                  등록 이후 안내드릴 예정입니다. 구체적인 공제 한도와 절차는
                  세법 개정 및 재단의 공익법인 지정 여부에 따라 달라질 수
                  있으므로, 확정된 사항이 아닌 일반적인 안내로 참고해주시기
                  바랍니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                후원 계좌 안내
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-4 border border-sand-beige bg-warm-ivory px-5 py-5">
                <div className="text-sm text-charcoal/70">
                  <p className="font-display text-lg text-charcoal">
                    {orgInfo.bankAccount.value.bank} {orgInfo.bankAccount.value.number}
                  </p>
                  <p className="mt-1 text-charcoal/50">
                    예금주: {orgInfo.bankAccount.value.holder}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  {orgInfo.bankAccount.isPlaceholder ? (
                    <PlaceholderBadge className="shrink-0" />
                  ) : (
                    <CopyButton
                      value={orgInfo.bankAccount.value.number}
                      label="계좌번호 복사"
                    />
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={100}
            id="give-form"
            className="scroll-mt-28 border border-sand-beige bg-pure-white p-8 md:p-10"
          >
            <h2 className="font-display text-xl font-medium text-charcoal">
              후원 의사 남기기
            </h2>
            <p className="mt-2 text-sm text-charcoal/55">
              아래 정보를 남겨주시면, 결제 시스템 준비가 완료되는 대로
              안내드리겠습니다.
            </p>
            <div className="mt-8">
              <DonationForm />
            </div>
          </Reveal>
        </div>

        {/* Where Your Giving Goes (원래 홈페이지 섹션) */}
        <div className="mt-24 border-t border-sand-beige pt-16 md:mt-32 md:pt-24">
          <Reveal>
            <p className="eyebrow text-xs text-gold">WHERE YOUR GIVING GOES</p>
            <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
              한 번의 후원은 이렇게 변화로 이어집니다.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
              후원은 단순히 재단에 머무는 금액이 아닙니다.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-sand-beige pt-10 md:gap-4">
            {sendHopeNodes.map((node, i) => (
              <div key={node} className="flex items-center gap-3 md:gap-4">
                <Reveal delay={i * 80}>
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

          <Reveal delay={140} className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest md:text-base">
              순전한재단은 후원자의 마음이 현장까지 온전히 이어질 수 있도록
              책임 있게 관리하겠습니다.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 border-t border-sand-beige pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {givingTiles.map((tile, i) => (
              <Reveal key={tile.amount} delay={i * 60}>
                <a
                  href="#give-form"
                  className="block h-full border border-sand-beige bg-warm-ivory px-6 py-8 text-center transition-colors hover:border-forest"
                >
                  <span className="font-display text-2xl font-semibold text-forest">
                    {tile.amount}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                    {tile.line}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-charcoal/40">
            ※ 실제 후원금 사용 항목 및 예시는 재단의 실제 사업 기준에 맞추어
            조정됩니다.
          </p>
        </div>

        {/* One Month. One Mission. (원래 홈페이지 섹션) */}
        <div className="mt-24 border-t border-sand-beige pt-16 md:mt-32 md:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow text-xs text-gold">ONE MONTH. ONE MISSION.</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                이번 달, 우리가 함께할 한 가지.
              </h2>
            </Reveal>

            {monthlyMission.isPlaceholder ? (
              <Reveal delay={100} className="mt-10">
                <PlaceholderPanel
                  title="이번 달 미션이 아직 준비되지 않았습니다."
                  description="새로운 월간 미션이 확정되는 대로 목표와 현재 진행 상황을 이 자리에 안내해드리겠습니다."
                />
              </Reveal>
            ) : (
              <Reveal delay={100} className="mt-10 border border-sand-beige bg-warm-ivory px-6 py-10 text-left md:px-10">
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
                <a
                  href="#give-form"
                  className="mt-8 inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
                >
                  THIS MISSION에 참여하기 <span aria-hidden>→</span>
                </a>
              </Reveal>
            )}
          </div>
        </div>

        {/* MERE 365 (원래 홈페이지 섹션) */}
        <div className="mt-24 border-t border-sand-beige pt-16 md:mt-32 md:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow text-xs text-gold">MERE 365</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                사랑은 특별한 날에만 필요한 것이 아닙니다.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-charcoal/75">
                재난이 발생했을 때만, 연말이 되었을 때만 누군가에게 도움이
                필요한 것은 아닙니다. 교육이 필요한 아이도, 도움이 필요한
                가정도, 해외에서 지역사회를 섬기는 사역자도 365일 자신의
                자리에서 하루를 살아갑니다. 그래서 순전한재단은 365일
                이어지는 나눔을 만들어가고자 합니다. 오늘의 작은 참여가
                누군가의 평범한 내일을 지켜줄 수 있습니다.
              </p>
              <Link
                href="#give-form"
                className="mt-8 inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
              >
                BECOME A MONTHLY PARTNER <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
