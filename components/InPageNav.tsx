"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type NavSection = { id: string; label: string };

export default function InPageNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="페이지 내 이동"
      className="sticky top-20 z-10 -mx-6 flex gap-6 overflow-x-auto border-b border-sand-beige bg-pure-white/95 px-6 py-4 backdrop-blur md:top-24 md:mx-0 md:flex-col md:gap-1 md:overflow-visible md:border-b-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            "shrink-0 whitespace-nowrap border-b-2 py-1 text-sm font-medium transition-colors md:border-b-0 md:border-l-2 md:py-2 md:pl-4",
            active === s.id
              ? "border-gold text-forest"
              : "border-transparent text-charcoal/50 hover:text-charcoal"
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
