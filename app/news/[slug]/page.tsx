import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { newsItems } from "@/data/news";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${slug}` },
    openGraph: { title: item.title, description: item.excerpt, images: [item.image] },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-[900px] px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <Eyebrow>{item.category}</Eyebrow>
        <h1 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-charcoal md:text-5xl">
          {item.title}
        </h1>
        <time dateTime={item.date} className="mt-4 block text-sm text-charcoal/50">
          {item.date}
        </time>
      </Reveal>

      <Reveal delay={80}>
        <Frame
          src={item.image}
          alt={item.imageAlt}
          className="mt-10 aspect-[16/9] w-full"
        />
      </Reveal>

      <Reveal delay={140} className="mt-10 flex flex-col gap-5 text-[16px] leading-loose text-charcoal/80">
        {item.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Reveal>

      {item.gallery && item.gallery.length > 0 ? (
        <Reveal delay={180} className="mt-10 grid gap-4 sm:grid-cols-2">
          {item.gallery.map((photo) => (
            <Frame
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="aspect-[4/3] w-full"
            />
          ))}
        </Reveal>
      ) : null}

      <Link
        href="/news"
        className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold"
      >
        ← 모든 소식 보기
      </Link>
    </article>
  );
}
