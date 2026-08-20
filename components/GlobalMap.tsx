"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { footprintCountries } from "@/data/footprintCountries";

/**
 * Lightweight, brand-styled world map. No external map library/tiles --
 * just a hand-simplified continent silhouette (inline SVG) plus markers
 * positioned with a simple equirectangular projection:
 *   x = (lng + 180) / 360 * width
 *   y = (90 - lat) / 180 * height
 *
 * Markers are real <button> elements (not divs) laid out with absolute
 * percentage positioning over the map, so they stay fully keyboard/AT
 * accessible without relying on SVG <foreignObject> support.
 */
export default function GlobalMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = footprintCountries.find((c) => c.id === activeId) ?? null;

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[2/1] w-full overflow-hidden border border-sand-beige bg-warm-ivory">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
          className="absolute inset-0 h-full w-full"
        >
          {/* Stylized, simplified continent silhouettes -- not intended to
              be cartographically precise, matching the simplified world-map
              aesthetic already used in the foundation's printed materials. */}
          <g fill="var(--color-sand-beige)" stroke="var(--color-pure-white)" strokeWidth="2">
            <path d="M120,50 C180,35 240,45 265,80 C290,115 280,150 255,175 Q230,200 195,195 C165,190 140,175 120,150 C100,120 90,80 120,50 Z" />
            <path d="M235,230 C270,220 300,240 310,280 C320,330 315,380 290,420 C270,445 240,440 225,405 C210,365 210,300 220,260 C225,248 230,238 235,230 Z" />
            <path d="M470,60 C510,45 550,55 565,80 C575,100 560,120 530,120 C500,120 470,105 465,85 C463,75 465,68 470,60 Z" />
            <path d="M480,150 C530,140 575,160 595,210 C615,270 605,330 575,375 C550,410 510,405 490,365 C468,320 460,240 470,180 C473,170 476,160 480,150 Z" />
            <path d="M560,35 C660,15 790,25 870,70 C920,100 925,150 890,180 C830,220 720,215 650,190 C600,170 570,130 560,90 C555,70 555,50 560,35 Z" />
            <path d="M790,330 C835,318 880,330 900,360 C912,382 895,405 860,408 C825,410 795,392 788,365 C785,352 786,340 790,330 Z" />
          </g>
        </svg>

        {footprintCountries.map((c) => {
          const x = ((c.lng + 180) / 360) * 100;
          const y = ((90 - c.lat) / 180) * 100;
          const isActive = c.id === activeId;
          return (
            <button
              key={c.id}
              type="button"
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => setActiveId(isActive ? null : c.id)}
              aria-pressed={isActive}
              aria-label={`${c.nameKo} (${c.nameEn})`}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                isActive
                  ? "h-4 w-4 border-gold bg-gold shadow-[0_0_0_6px_rgba(184,160,113,0.25)]"
                  : "h-3 w-3 border-forest bg-forest hover:h-3.5 hover:w-3.5 hover:border-gold hover:bg-gold"
              )}
            />
          );
        })}
      </div>

      <div className="min-h-[104px] border border-sand-beige bg-pure-white p-6" aria-live="polite">
        {active ? (
          <>
            <p className="font-display text-xl text-charcoal">
              {active.nameEn}
              <span className="ml-2 font-sans text-sm font-normal text-charcoal/50">
                {active.nameKo}
              </span>
            </p>
            {active.description ? (
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {active.description}
              </p>
            ) : (
              <p className="mt-2 text-sm text-charcoal/40">
                세부 활동 내용은 확인되는 대로 안내드리겠습니다.
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-charcoal/45">
            지도 위 표시를 선택하면 국가 정보를 확인할 수 있습니다.
          </p>
        )}
      </div>
    </div>
  );
}
