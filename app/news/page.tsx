import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "소식",
  description: "순전한 재단 MERE의 활동소식, 공지사항, 언론보도를 전합니다.",
};

export default function NewsPage() {
  const sorted = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHeader
        eyebrow="MERE NEWS"
        titleKo="소식"
        titleEn="NEWS & NOTICE"
        description="활동소식, 공지사항, 언론보도, 행사, 사업보고를 한곳에서 확인하세요."
      />
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {sorted.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
