/**
 * Themed line-art illustrations used in place of the generic Frame fallback
 * for photo slots that don't have a real activity photo (field cases,
 * current projects, partner photos, newsletter cover). Real photos for
 * these are hard to obtain, so this illustration is the finished, intended
 * treatment -- not a "coming soon" placeholder -- while still never being
 * presented as documentary evidence of the event itself. If a real photo
 * is ever dropped into public/images/archive/ under the matching filename,
 * Frame's onError fallback means it displays automatically with no code
 * change. Same visual grammar throughout: a warm-ivory circle badge with
 * gold accents and forest-green linework.
 */
import type { ComponentType, ReactNode } from "react";

function IllustrationShell({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-sand-beige"
    >
      <svg
        viewBox="0 0 160 160"
        className="h-2/5 max-h-40 w-2/5 max-w-40 min-h-20 min-w-20"
        fill="none"
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="var(--color-warm-ivory)"
          stroke="var(--color-gold)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        {children}
      </svg>
    </div>
  );
}

const forest = "var(--color-forest)";
const gold = "var(--color-gold)";

/** Guatemala · 교육 현장 -- open book with a small mark of light above. */
export function EducationIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M80 40v10M64 44l4 8M96 44l-4 8"
        stroke={gold}
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M80 70v40M40 62c14-6 30-4 40 8 10-12 26-14 40-8v42c-14-6-30-4-40 8-10-12-26-14-40-8Z"
        fill={forest}
        fillOpacity="0.1"
        stroke={forest}
        strokeOpacity="0.75"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </IllustrationShell>
  );
}

/** Myanmar · 현지 선교 지원 -- a simple chapel with warmth radiating from within. */
export function MissionIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M80 34l6 10h-12l6-10Z"
        fill={gold}
        fillOpacity="0.5"
        stroke={gold}
        strokeOpacity="0.7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M80 44v8" stroke={gold} strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M42 118V88l38-26 38 26v30Z"
        fill={forest}
        fillOpacity="0.1"
        stroke={forest}
        strokeOpacity="0.75"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M70 118V96a10 10 0 0 1 20 0v22"
        stroke={forest}
        strokeOpacity="0.75"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </IllustrationShell>
  );
}

/** Kazakhstan · 중앙아시아 선교 네트워크 -- connected community nodes. */
export function NetworkIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M80 52L46 100M80 52l34 48M46 100h68"
        stroke={forest}
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="80" cy="52" r="9" fill={forest} fillOpacity="0.14" stroke={forest} strokeOpacity="0.8" strokeWidth="2.5" />
      <circle cx="46" cy="100" r="9" fill={forest} fillOpacity="0.14" stroke={forest} strokeOpacity="0.8" strokeWidth="2.5" />
      <circle cx="114" cy="100" r="9" fill={forest} fillOpacity="0.14" stroke={forest} strokeOpacity="0.8" strokeWidth="2.5" />
    </IllustrationShell>
  );
}

/** 구호물품 지원 -- an open relief box with a heart. */
export function ReliefBoxIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M40 76l40-16 40 16-40 16Z"
        fill={forest}
        fillOpacity="0.12"
        stroke={forest}
        strokeOpacity="0.8"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M40 76v34l40 16 40-16V76M80 92v34"
        stroke={forest}
        strokeOpacity="0.8"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M80 58c-7-9-20-6-20 3 0 8 9 14 20 22 11-8 20-14 20-22 0-9-13-12-20-3Z"
        fill={gold}
        fillOpacity="0.4"
        stroke={gold}
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IllustrationShell>
  );
}

/** 의류·생활물품 나눔 -- a folded garment with a small heart. */
export function ClothingIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M62 46l18 8 18-8 12 14-10 8v42a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V68l-10-8Z"
        fill={forest}
        fillOpacity="0.1"
        stroke={forest}
        strokeOpacity="0.8"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M80 90c-6-6-14-4-14 3 0 6 6 10 14 16 8-6 14-10 14-16 0-7-8-9-14-3Z"
        fill={gold}
        fillOpacity="0.45"
        stroke={gold}
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </IllustrationShell>
  );
}

/** 협력기관 파트너십 (WELL International 등) -- two joined hands. */
export function PartnershipIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M36 88c8-10 18-14 26-8l10 8M124 88c-8-10-18-14-26-8l-10 8"
        stroke={forest}
        strokeOpacity="0.75"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M46 88l16 12a8 8 0 0 0 10-1l18-17a6 6 0 0 1 9 8l-4 5M114 88l-16 12a8 8 0 0 1-10-1l-4-4"
        fill="none"
        stroke={forest}
        strokeOpacity="0.8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="52" r="6" fill={gold} fillOpacity="0.5" stroke={gold} strokeOpacity="0.75" strokeWidth="2" />
    </IllustrationShell>
  );
}

/** 소식지 표지 -- a folded newsletter with text lines. */
export function NewsletterIllustration() {
  return (
    <IllustrationShell>
      <path
        d="M50 42h44l16 16v56a4 4 0 0 1-4 4H50a4 4 0 0 1-4-4V46a4 4 0 0 1 4-4Z"
        fill={forest}
        fillOpacity="0.08"
        stroke={forest}
        strokeOpacity="0.8"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M94 42v16h16" stroke={forest} strokeOpacity="0.8" strokeWidth="2.5" strokeLinejoin="round" />
      <path
        d="M56 70h48M56 82h48M56 94h30"
        stroke={gold}
        strokeOpacity="0.65"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </IllustrationShell>
  );
}

export type PendingTheme =
  | "education"
  | "mission"
  | "network"
  | "relief"
  | "clothing"
  | "partnership"
  | "newsletter";

const themeMap: Record<PendingTheme, ComponentType> = {
  education: EducationIllustration,
  mission: MissionIllustration,
  network: NetworkIllustration,
  relief: ReliefBoxIllustration,
  clothing: ClothingIllustration,
  partnership: PartnershipIllustration,
  newsletter: NewsletterIllustration,
};

/** Resolves a theme key to its illustration element, or undefined to fall back to Frame's generic pending art. */
export function pendingArtFor(theme?: PendingTheme) {
  if (!theme) return undefined;
  const Component = themeMap[theme];
  return <Component />;
}
