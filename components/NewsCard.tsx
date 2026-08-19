import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import type { NewsItem } from "@/data/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Reveal as="article" className="flex flex-col border-t border-sand-beige pt-6">
      <Link href={`/news/${item.slug}`} className="group flex flex-col gap-4">
        <Frame
          src={item.image}
          alt={item.imageAlt}
          className="aspect-[16/10] w-full transition-opacity duration-500 group-hover:opacity-90"
        />
        <div className="flex items-center gap-3 text-xs text-charcoal/50">
          <span className="eyebrow text-gold">{item.category}</span>
          <time dateTime={item.date}>{item.date}</time>
        </div>
        <h3 className="font-display text-lg font-medium leading-snug text-charcoal">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-charcoal/60">
          {item.excerpt}
        </p>
      </Link>
    </Reveal>
  );
}
