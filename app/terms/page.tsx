import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PlaceholderPanel } from "@/components/PlaceholderNote";

export const metadata: Metadata = {
  title: "이용약관",
  description: "순전한 재단 MERE 이용약관 (준비 중).",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="LEGAL" titleKo="이용약관" titleEn="TERMS OF USE" />
      <div className="mx-auto max-w-[800px] px-6 py-16 md:px-10 md:py-24">
        <PlaceholderPanel
          title="실제 법률 검토 후 확정 필요"
          description="아래 내용은 사이트 레이아웃 확인을 위한 임시 구성이며, 실제 이용약관이 아닙니다. 반드시 법률 전문가의 검토를 거쳐 최종본으로 교체해주세요."
        />

        <div className="mt-12 flex flex-col gap-8 text-sm leading-relaxed text-charcoal/70">
          <section>
            <h2 className="font-display text-lg text-charcoal">제1조 (목적)</h2>
            <p className="mt-3">[작성 예정] 본 약관의 목적을 명시합니다.</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">제2조 (용어의 정의)</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">제3조 (약관의 효력 및 변경)</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">제4조 (서비스의 내용)</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">제5조 (이용자의 의무)</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
          <section>
            <h2 className="font-display text-lg text-charcoal">제6조 (면책조항)</h2>
            <p className="mt-3">[작성 예정]</p>
          </section>
        </div>
      </div>
    </>
  );
}
