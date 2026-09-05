import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import { pendingArtFor } from "@/components/PendingIllustrations";
import type { Story } from "@/data/stories";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Reveal as="article" className="group flex flex-col">
      <Link href={`/stories/${story.slug}`} className="flex flex-col gap-5">
        <Frame
          src={story.image}
          alt={story.imageAlt}
          className="aspect-[4/3] w-full shadow-[0_30px_60px_-32px_rgba(37,37,37,0.4)]"
          pendingArt={pendingArtFor(story.theme)}
        />
        <div className="flex flex-col gap-3">
          <span className="eyebrow text-[11px] text-gold">{story.category}</span>
          <h3 className="font-display text-xl font-medium leading-snug text-charcoal transition-colors group-hover:text-forest">
            {story.title}
          </h3>
          <p className="text-sm leading-relaxed text-charcoal/65">
            {story.excerpt}
          </p>
          <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest">
            READ STORY{" "}
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
