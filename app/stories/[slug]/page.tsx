import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: [story.image],
    },
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const related = stories.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <article>
      <div className="relative h-[56vh] min-h-[380px] w-full overflow-hidden bg-sand-beige">
        <Frame src={story.image} alt={story.imageAlt} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[900px] px-6 pb-12 md:px-10">
          <Eyebrow tone="light">{story.category}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-medium leading-tight text-pure-white md:text-5xl">
            {story.title}
          </h1>
          <time dateTime={story.date} className="mt-4 block text-sm text-pure-white/70">
            {story.date}
          </time>
        </div>
      </div>

      <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
        <Reveal className="flex flex-col gap-6 text-[17px] leading-loose text-charcoal/80">
          {story.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={100} className="my-14 border-l-2 border-gold pl-6">
          <p className="font-display text-2xl italic leading-snug text-charcoal md:text-3xl">
            &ldquo;{story.pullQuote}&rdquo;
          </p>
        </Reveal>

        <Link
          href="/stories"
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
        >
          ← 모든 이야기 보기
        </Link>
      </div>

      {related.length > 0 ? (
        <div className="border-t border-sand-beige bg-warm-ivory px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-display text-2xl text-charcoal">다른 이야기</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
