import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import DonationForm from "@/components/DonationForm";
import { PlaceholderBadge } from "@/components/PlaceholderNote";
import { orgInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "후원",
  description: "정기후원과 일시후원으로 순전한 재단 MERE와 함께해주세요.",
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="DONATE"
        titleKo="후원"
        titleEn="GIVE TO MERE"
        description="당신의 순전한 마음이 누군가의 내일이 됩니다. 한 번의 나눔도, 오랜 시간 이어지는 동행도 변화의 시작이 될 수 있습니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-16">
            <Reveal>
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
                일시후원
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                긴급한 상황이나 특정 프로젝트를 위한 한 번의 나눔도 소중한
                변화의 시작이 됩니다. 원하시는 사업이나 목적을 지정하여
                후원하실 수 있습니다.
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
              <div className="mt-4 flex items-center gap-3 border border-sand-beige bg-warm-ivory px-5 py-4">
                <div className="text-sm text-charcoal/70">
                  <p>{orgInfo.bankAccount.value.bank} {orgInfo.bankAccount.value.number}</p>
                  <p className="mt-1 text-charcoal/50">예금주: {orgInfo.bankAccount.value.holder}</p>
                </div>
                {orgInfo.bankAccount.isPlaceholder && (
                  <PlaceholderBadge className="ml-auto shrink-0" />
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="border border-sand-beige bg-pure-white p-8 md:p-10">
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
      </div>
    </>
  );
}
