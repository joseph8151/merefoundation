import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import { pendingArtFor } from "@/components/PendingIllustrations";
import type { FieldStory } from "@/data/fieldStories";

export default function FieldCaseCard({
  story,
  delay = 0,
}: {
  story: FieldStory;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="group flex flex-col">
      <Frame
        src={story.image}
        alt={story.imageAlt}
        className="aspect-[4/5] w-full shadow-[0_30px_60px_-32px_rgba(37,37,37,0.4)]"
        pendingArt={pendingArtFor(story.theme)}
      />
      <div className="mt-4 flex flex-1 flex-col gap-3">
        <span className="eyebrow text-[11px] text-gold">
          {story.caseNumber} · {story.countryEn}
        </span>
        <h3 className="font-display text-lg font-medium text-charcoal">
          {story.countryKo}
        </h3>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-charcoal/70">
          {story.quote.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <p className="mt-auto border-t border-sand-beige pt-4 text-xs uppercase tracking-[0.14em] text-charcoal/40">
          {story.footerCaption}
        </p>
      </div>
    </Reveal>
  );
}
