import Link from "next/link";
import type { TransparencyItem } from "@/data/transparency";
import { PlaceholderBadge } from "@/components/PlaceholderNote";
import Reveal from "@/components/Reveal";

export default function TransparencyList({
  items,
  linkToDetail = true,
}: {
  items: TransparencyItem[];
  linkToDetail?: boolean;
}) {
  return (
    <ul className="divide-y divide-sand-beige border-y border-sand-beige">
      {items.map((item) => {
        const content = (
          <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
              <p className="mt-1 text-sm text-charcoal/60">{item.description}</p>
            </div>
            <div className="shrink-0">
              {item.isReady ? (
                <span className="text-sm font-semibold text-forest">
                  자료 보기 →
                </span>
              ) : (
                <PlaceholderBadge />
              )}
            </div>
          </div>
        );

        return (
          <Reveal as="li" key={item.id} mode="fade">
            {linkToDetail ? (
              <Link href={`/transparency#${item.id}`} className="block hover:bg-warm-ivory">
                {content}
              </Link>
            ) : (
              content
            )}
          </Reveal>
        );
      })}
    </ul>
  );
}
