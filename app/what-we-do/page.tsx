import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProgramRow from "@/components/ProgramRow";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "우리가 하는 일",
  description: "순전한 재단 MERE의 6가지 사업 영역을 소개합니다.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHeader
        eyebrow="OUR WORK"
        titleKo="우리가 하는 일"
        titleEn="WHAT WE DO"
        description="아동과 다음세대부터 국경 너머의 이웃까지, 순전한 재단 MERE가 함께하는 여섯 가지 사업 영역입니다."
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
