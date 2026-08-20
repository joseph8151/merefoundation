import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import { PlaceholderBadge } from "@/components/PlaceholderNote";
import type { Story } from "@/data/stories";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Reveal as="article" className="group flex flex-col">
      <Link href={`/stories/${story.slug}`} className="flex flex-col gap-5">
        <Frame
          src={story.image}
          alt={story.imageAlt}
          className="aspect-[4/3] w-full transition-opacity duration-500 group-hover:opacity-90"
        >
          {story.imagePending ? (
            <div className="absolute left-3 top-3">
              <PlaceholderBadge className="bg-pure-white/90" />
            </div>
          ) : null}
        </Frame>
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-[11px] text-gold">{story.category}</span>
          <h3 className="font-display text-xl font-medium leading-snug text-charcoal">
            {story.title}
          </h3>
          <p className="text-sm leading-relaxed text-charcoal/65">
            {story.excerpt}
          </p>
          <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest">
            READ STORY <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
