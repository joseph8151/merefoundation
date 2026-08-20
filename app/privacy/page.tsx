import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PlaceholderPanel } from "@/components/PlaceholderNote";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "순전한 재단 MERE 개인정보처리방침 (준비 중).",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL"
        titleKo="개인정보처리방침"
        titleEn="PRIVACY POLICY"
      />
      <div className="mx-auto max-w-[800px] px-6 py-16 md:px-10 md:py-24">
        <PlaceholderPanel
          title="실제 법률 검토 후 확정 필요"
          description="아래 내용은 사이트 레이아웃 확인을 위한 임시 구성이며, 실제 개인정보처리방침이 아닙니다. 반드시 법률 전문가의 검토를 거쳐 최종본으로 교체해주세요."
        />

        <div className="mt-12 flex flex-col gap-8 text-sm leading-relaxed text-charcoal/70">
          <section>
            <h2 className="font-display text-lg text-charcoal">1. 수집하는 개인정보 항목</h2>
            <p className="mt-3">
              [작성 예정] 재단이 실제로 수집하는 개인정보 항목(이름, 연락처,
              이메일 등)을 서비스 운영 방식에 맞추어 구체적으로 명시해야
              합니다.
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">2. 개인정보의 수집 및 이용 목적</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">4. 개인정보의 제3자 제공</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">5. 이용자의 권리와 행사 방법</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">6. 개인정보 보호책임자</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
        </div>
      </div>
    </>
  );
}
