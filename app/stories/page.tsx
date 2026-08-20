import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "MERE STORIES",
  description: "순전한 재단 MERE가 함께한 사람들의 이야기.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="MERE STORIES"
        titleKo="숫자 너머, 사람의 이야기"
        titleEn="STORIES"
        description="MERE가 함께한 시간 속, 한 사람 한 사람의 이야기를 전합니다."
      />
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </>
  );
}
