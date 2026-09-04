"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { footprintCountries } from "@/data/footprintCountries";
import { worldMapPath } from "@/lib/worldMapPath";

/**
 * Lightweight, brand-styled world map. No map library/tiles/runtime
 * dependency -- the land outline is a real geography path (Natural Earth
 * 110m land data via world-atlas, public domain) pre-generated at dev time
 * with d3-geo (see scripts/generate-world-map-path.mjs) and pasted into
 * lib/worldMapPath.ts as a plain string, so nothing extra ships to the
 * browser. It's projected with the same simple equirectangular projection
 * fitted to a 1000x500 box, so it lines up exactly with the marker formula
 * used below:
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
  const sortedNames = [...footprintCountries]
    .map((c) => c.nameKo)
    .sort((a, b) => a.localeCompare(b, "ko"));

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[2/1] w-full overflow-hidden border border-sand-beige bg-warm-ivory">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
          className="absolute inset-0 h-full w-full"
        >
          <path
            d={worldMapPath}
            fill="var(--color-sand-beige)"
            stroke="var(--color-pure-white)"
            strokeWidth="0.75"
            strokeLinejoin="round"
          />
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
              className="group absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span
                aria-hidden
                className={cn(
                  "rounded-full border-2 transition-all duration-300",
                  isActive
                    ? "h-4 w-4 border-gold bg-gold shadow-[0_0_0_6px_rgba(184,160,113,0.25)]"
                    : "h-3 w-3 border-forest bg-forest group-hover:h-3.5 group-hover:w-3.5 group-hover:border-gold group-hover:bg-gold"
                )}
              />
            </button>
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

      <div className="border border-sand-beige bg-warm-ivory p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/45">
          사역 국가 · 가나다순 · {footprintCountries.length}개국
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-charcoal/75 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {sortedNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] text-charcoal/40">
          LOVE ACROSS BORDERS 팜플렛 기준
        </p>
      </div>
    </div>
  );
}
