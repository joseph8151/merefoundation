import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InPageNav from "@/components/InPageNav";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";
import { PlaceholderPanel, PlaceholderBadge } from "@/components/PlaceholderNote";
import { pendingArtFor } from "@/components/PendingIllustrations";
import { archiveEditions } from "@/data/archive";

export const metadata: Metadata = {
  title: "아카이브",
  description:
    "순전한재단이 걸어온 활동의 기록 -- 활동보고, 나눔 이야기, 해외 활동, 소식지, 재정보고, 후원금 사용내역.",
  alternates: { canonical: "/archive" },
};

const sections = [
  { id: "activity-report", label: "활동보고" },
  { id: "sharing-stories", label: "나눔 이야기" },
  { id: "overseas-activity", label: "해외 활동" },
  { id: "newsletter", label: "소식지" },
  { id: "financial-report", label: "재정보고" },
  { id: "donation-usage", label: "후원금 사용내역" },
];

export default function ArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="ARCHIVE"
        titleKo="순전한재단이 걸어온 기록"
        titleEn="ARCHIVE"
        description="활동보고, 나눔 이야기, 해외 활동, 소식지, 재정보고까지 -- 순전한재단의 발자취를 이 곳에 차곡차곡 기록해 나갑니다."
      />

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <InPageNav sections={sections} />

          <div className="flex flex-col gap-24 md:gap-32">
            <section id="activity-report" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  활동보고
                </h2>
                <PlaceholderPanel
                  className="mt-8"
                  title="활동보고 자료 준비 중"
                  description="연간 활동보고 자료는 확정되는 대로 이 자리에 업로드됩니다."
                />
              </Reveal>
            </section>

            <section id="sharing-stories" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  나눔 이야기
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  실제 나눔의 현장 이야기는 MERE STORIES 페이지에서도 만나실
                  수 있습니다.
                </p>
              </Reveal>
              <Reveal
                delay={80}
                className="mt-8 grid gap-8 border border-sand-beige sm:grid-cols-[240px_1fr]"
              >
                <Frame
                  src="/images/archive/guatemala-01.jpg"
                  alt="과테말라 이글레시아 그라시아 교회에서 만난 아이들과 순전한재단 봉사팀"
                  className="aspect-[4/3] w-full sm:aspect-auto sm:h-full"
                />
                <div className="flex flex-col justify-center gap-2 p-6 pt-0 sm:pt-6">
                  <p className="eyebrow text-xs text-gold">GUATEMALA · EDUCATION</p>
                  <p className="font-display text-lg text-charcoal">
                    과테말라 이글레시아 그라시아 교회에서 만난 아이들
                  </p>
                  <p className="text-sm leading-relaxed text-charcoal/65">
                    교육은 한 아이의 미래뿐 아니라 한 지역의 미래를 변화시킬
                    수 있습니다. 순전한재단은 해외 교육 현장과 다음세대를
                    섬기는 사역자 및 기관들과 함께합니다.
                  </p>
                </div>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-6 grid gap-8 border border-sand-beige sm:grid-cols-[240px_1fr]"
              >
                <Frame
                  src="/images/archive/guatemala-02.jpg"
                  alt="과테말라 현지 아이들과 함께한 순간"
                  className="aspect-[4/3] w-full sm:aspect-auto sm:h-full"
                />
                <div className="flex flex-col justify-center gap-2 p-6 pt-0 sm:pt-6">
                  <p className="eyebrow text-xs text-gold">GUATEMALA</p>
                  <p className="font-display text-lg text-charcoal">
                    과테말라 현지 아이들과 함께한 순간
                  </p>
                  <p className="text-sm leading-relaxed text-charcoal/65">
                    교실 밖에서도 아이들과 마음을 나누는 시간은 이어집니다.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <PlaceholderPanel
                  className="mt-8"
                  title="나눔 이야기 아카이브 준비 중"
                  description="더 많은 나눔 이야기가 확정되는 대로 이 자리에 함께 정리해드리겠습니다."
                />
              </Reveal>
            </section>

            <section id="overseas-activity" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  해외 활동
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  국가별 활동 현황은 홈페이지의 세계지도(LOVE ACROSS
                  BORDERS)에서 먼저 확인하실 수 있습니다.
                </p>
                <PlaceholderPanel
                  className="mt-8"
                  title="해외 활동 아카이브 준비 중"
                  description="국가·연도별 상세 활동 기록은 확정되는 대로 이 자리에 정리해드리겠습니다."
                />
              </Reveal>
            </section>

            <section id="newsletter" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  소식지
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {archiveEditions.map((edition, i) => (
                  <Reveal
                    key={`${edition.year}-${edition.issueLabel}`}
                    delay={i * 80}
                    className="flex flex-col border border-sand-beige"
                  >
                    <Frame
                      src={edition.coverImage}
                      alt={edition.coverImageAlt}
                      className="aspect-[3/4] w-full"
                      pendingArt={pendingArtFor("newsletter")}
                    />
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="font-display text-lg text-charcoal">
                        {edition.title.value}
                      </p>
                      <p className="text-sm leading-relaxed text-charcoal/65">
                        {edition.description.value}
                      </p>
                      <div className="mt-auto pt-2">
                        {edition.downloadUrl.isPlaceholder || !edition.downloadUrl.value ? (
                          <div className="flex items-center gap-3">
                            <span className="pointer-events-none text-sm font-semibold text-charcoal/35">
                              {edition.year} 활동 이야기 보기 →
                            </span>
                            <PlaceholderBadge />
                          </div>
                        ) : (
                          <a
                            href={edition.downloadUrl.value}
                            className="text-sm font-semibold text-forest hover:text-gold"
                          >
                            {edition.year} 활동 이야기 보기 →
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            <section id="financial-report" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  재정보고
                </h2>
                <PlaceholderPanel
                  className="mt-8"
                  title="재정보고 자료 준비 중"
                  description="재단의 수입·지출 내역을 담은 재정보고서는 확정되는 대로 이 자리와 /transparency 페이지에 함께 공개됩니다."
                />
              </Reveal>
            </section>

            <section id="donation-usage" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                  후원금 사용내역
                </h2>
                <PlaceholderPanel
                  className="mt-8"
                  title="후원금 사용내역 자료 준비 중"
                  description="후원금이 어떻게 사용되었는지 항목별 내역은 확정되는 대로 이 자리에 안내드리겠습니다."
                />
              </Reveal>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
