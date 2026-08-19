import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { partnershipTypes } from "@/data/partnership";

export const metadata: Metadata = {
  title: "함께하기",
  description: "개인, 기업, 교회·기관 — 각자의 자리에서 MERE와 함께하는 방법.",
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
        </div>
      </div>
    </>
  );
}
