import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProgramRow from "@/components/ProgramRow";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "우리가 하는 일",
  description: "순전한재단 MERE의 6가지 사업 영역을 소개합니다.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        eyebrow="WHAT WE DO"
        titleKo="사랑을 말하는 것에서 멈추지 않습니다."
        titleEn="WHAT WE DO"
        description="해외 선교부터 교회·기업 Partnership까지, 순전한재단이 함께하는 여섯 가지 사업 영역입니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-4 md:px-10">
        <nav
          aria-label="사업 영역 바로가기"
          className="flex flex-wrap gap-3 border-b border-sand-beige py-8 text-sm"
        >
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="border border-sand-beige px-4 py-2 text-charcoal/70 transition-colors hover:border-forest hover:text-forest"
            >
              {p.number} {p.titleKo}
            </a>
          ))}
        </nav>

        <div className="divide-y divide-sand-beige">
          {programs.map((program, i) => (
            <ProgramRow key={program.slug} program={program} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="border-t border-sand-beige py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow className="text-center">SERVE BEYOND BORDERS</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-4xl">
                도움이 필요한 곳으로 갑니다.
              </h2>
              <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 text-[15px] leading-relaxed text-charcoal/75">
                <p>
                  순전한재단은 예수 그리스도의 사랑을 전하기 위해 해외
                  봉사와 나눔을 이어갑니다.
                </p>
                <p>
                  전쟁과 재난, 빈곤과 어려움으로 고통받는 이웃을 위로하고
                  필요한 도움을 연결합니다.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-16 max-w-3xl border-t border-sand-beige pt-12 text-center">
            <Reveal delay={80}>
              <Eyebrow className="text-center">EDUCATION CHANGES FUTURES</Eyebrow>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-charcoal/75">
                해외 교육시설과 교육기관의 설립·운영을 지원하고, 기독교적
                가치를 바탕으로 사람의 존엄성을 존중하는 교육이 지속될 수
                있도록 돕습니다.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-sand-beige py-16 text-center">
          <p className="font-display text-xl text-charcoal">
            함께 만들어갈 변화가 있다면 언제든 문을 두드려주세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
          >
            파트너십 문의 <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
