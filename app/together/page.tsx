import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
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

          {/* MERE Corporate Partnership */}
          <section id="corporate-partnership" className="scroll-mt-28">
            <Reveal>
              <p className="eyebrow text-xs text-gold">MERE CORPORATE PARTNERSHIP</p>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
                기업의 선한 영향력이 실제 변화가 되도록.
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-10 grid gap-x-10 gap-y-3 border-t border-sand-beige pt-10 sm:grid-cols-2">
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
        </div>
      </div>
    </>
  );
}
