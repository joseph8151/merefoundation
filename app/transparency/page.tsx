import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PlaceholderBadge } from "@/components/PlaceholderNote";
import { transparencyItems } from "@/data/transparency";

export const metadata: Metadata = {
  title: "투명성",
  description: "신뢰할 수 있는 나눔을 위한 순전한 재단 MERE의 투명성 자료.",
  alternates: { canonical: "/transparency" },
};

export default function TransparencyPage() {
  return (
    <>
      <PageHeader
        eyebrow="TRANSPARENCY"
        titleKo="신뢰할 수 있는 나눔을 위해"
        titleEn="TRANSPARENCY"
        description="재단의 운영과 재정은 투명하게 공개되어야 한다고 믿습니다. 아래 자료들은 준비되는 대로 이 페이지에 순차적으로 업로드됩니다."
      />

      <div className="mx-auto max-w-[1000px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col divide-y divide-sand-beige border-y border-sand-beige">
          {transparencyItems.map((item, i) => (
            <Reveal
              key={item.id}
              as="section"
              id={item.id}
              delay={i * 40}
              mode="fade"
              className="scroll-mt-28 py-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-xl text-charcoal">{item.title}</h2>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal/60">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0">
                  {item.isReady && item.fileUrl ? (
                    <a
                      href={item.fileUrl}
                      className="text-sm font-semibold text-forest hover:text-gold"
                    >
                      자료 보기 →
                    </a>
                  ) : (
                    <PlaceholderBadge />
                  )}
                </div>
              </div>
              {!item.isReady ? (
                <p className="mt-3 text-xs text-charcoal/40">
                  자료 준비 중 — 추후 업로드 예정
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
