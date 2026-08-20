import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { PlaceholderBadge } from "@/components/PlaceholderNote";
import { orgInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "문의",
  description: "순전한 재단 MERE에 대한 문의는 아래 양식을 이용해주세요.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        titleKo="문의"
        titleEn="GET IN TOUCH"
        description="파트너십, 후원, 자원봉사, 그 밖의 모든 문의를 환영합니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="flex flex-col gap-8">
            <div>
              <p className="eyebrow text-xs text-gold">CONTACT INFO</p>
              <dl className="mt-6 flex flex-col gap-5 text-sm">
                <div>
                  <dt className="text-charcoal/45">주소</dt>
                  <dd className="mt-1 flex items-center gap-2 text-charcoal/80">
                    {orgInfo.address.value}
                    {orgInfo.address.isPlaceholder && <PlaceholderBadge />}
                  </dd>
                </div>
                <div>
                  <dt className="text-charcoal/45">대표전화</dt>
                  <dd className="mt-1 flex items-center gap-2 text-charcoal/80">
                    {orgInfo.phone.value}
                    {orgInfo.phone.isPlaceholder && <PlaceholderBadge />}
                  </dd>
                </div>
                <div>
                  <dt className="text-charcoal/45">이메일</dt>
                  <dd className="mt-1 flex items-center gap-2 text-charcoal/80">
                    {orgInfo.email.value}
                    {orgInfo.email.isPlaceholder && <PlaceholderBadge />}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="border-t border-sand-beige pt-6 text-sm leading-relaxed text-charcoal/60">
              문의 주신 내용은 확인 후 순서대로 답변드리고 있습니다. 빠른
              확인이 필요하신 경우 이메일로 직접 연락해주세요.
            </div>
          </Reveal>

          <Reveal delay={100} className="border border-sand-beige bg-pure-white p-8 md:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </>
  );
}
