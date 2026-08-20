# MERE FOUNDATION — 순전한 재단

Official website for 순전한 재단 (MERE FOUNDATION), a Korean Christian nonprofit.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (theme tokens defined in `app/globals.css` via `@theme`, not a `tailwind.config.js`)
- **Fonts**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif, English headlines) via `next/font/google`, and **Pretendard** (Korean-capable sans, body/UI) loaded from the jsDelivr CDN in `app/layout.tsx`, with a full system-font fallback stack so the site still looks fine if the CDN is blocked
- **Animation**: no external animation library — a small `Reveal` component (`components/Reveal.tsx`) uses `IntersectionObserver` + CSS transitions for fade-up/reveal effects, and `components/CountUp.tsx` does the same for the impact counters. The hero's parallax is a plain scroll-listener + CSS transform. All motion is intentionally calm: opacity + translateY only, no bounce/scale/3D.
- **Images**: [Unsplash](https://unsplash.com) photo URLs configured via `next/image` + `remotePatterns` (see `next.config.ts`). Every image wraps in `components/Frame.tsx`, which paints a Sand Beige backdrop so a broken/replaced image never breaks the layout.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build (also runs the TypeScript check)
npm run lint     # ESLint
npm run start    # serve the production build
```

## Deploying to Cloudflare

This site has no API routes, middleware, or server actions — everything is
static or SSG (`generateStaticParams`) — so `next.config.ts` sets
`output: "export"` and it deploys as a plain static site (no
Workers/OpenNext adapter needed).

Cloudflare's Git integration now has two flavors, and both work here:

### Option A — Cloudflare Pages (classic, "Pages" project type)

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, and pick this repository.
2. Build settings:
   - **Framework preset**: Next.js (Static HTML Export) — or set manually:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (repo root)
3. No environment variables are required for the build.

### Option B — Cloudflare Workers (newer unified "Workers" project type)

If you connected the repo under **Workers & Pages → Create → Workers →
Import a repository** instead, Cloudflare's deploy step runs
`npx wrangler versions upload`, which needs a `wrangler.jsonc` telling it
where the static assets live — this repo already includes one at the root:

```jsonc
{
  "name": "merefoundation",
  "compatibility_date": "2026-08-15",
  "assets": { "directory": "./out", "not_found_handling": "404-page" }
}
```

Build settings in this mode:

- **Build command**: `npm run build`
- **Deploy command**: `npx wrangler versions upload` (Cloudflare sets this
  automatically for a Workers project — leave it as-is)

Either option serves the same static `out/` directory; pick whichever
project type you already created in the Cloudflare dashboard.

Once a custom production domain is decided, update `siteUrl` in
`data/site.ts` (currently a placeholder) — it feeds `metadataBase`, the
sitemap, and Open Graph URLs in `app/layout.tsx`.

Local sanity check before pushing a change that touches routing/data
fetching: `rm -rf .next out && npm run build` should finish with no errors
and produce a populated `out/` directory (`out/index.html`,
`out/sitemap.xml`, `out/robots.txt`, etc.).

If server-side features are ever needed later (a real payment webhook, a
contact-form API route, etc.), switch to the
[`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) adapter and
deploy via **Cloudflare Workers** instead of Pages static export.

## How a non-developer admin edits content

**All editable content lives under `/data/*.ts`.** Each file starts with a
comment block explaining what it controls and how to edit it. You do not
need to touch any component or page file to update text, images, or numbers
— just edit the values in these files and redeploy.

| File | Controls |
| --- | --- |
| `data/site.ts` | Org name, tagline, address/phone/email/bank account/registration numbers, main navigation, footer links, SNS links |
| `data/programs.ts` | The 6 "WHAT WE DO" program areas (title, description, photo, bullet lines) shown on the homepage and `/what-we-do` |
| `data/impactStats.ts` | The 4 "MERE Impact" counters |
| `data/footprint.ts` | The "OUR FOOTPRINT" numbers (27 countries / 45 regions) and their basis-year caption, shown on the homepage |
| `data/footprintCountries.ts` | Country markers shown on the homepage "LOVE ACROSS BORDERS" world map (`components/GlobalMap.tsx`). The land outline itself is real geography (Natural Earth data), pre-generated into `lib/worldMapPath.ts` -- see `scripts/generate-world-map-path.mjs` if it ever needs regenerating. |
| `data/fieldStories.ts` | The 3 real "STORIES FROM THE FIELD" case studies (Guatemala / Myanmar / Kazakhstan) on the homepage |
| `data/stories.ts` | "MERE STORIES" articles (index + detail pages), including the real "One Box, Many Hearts" clothing-donation story |
| `data/archive.ts` | Newsletter/소식지 editions shown on `/archive` and the homepage ARCHIVE teaser |
| `data/currentProjects.ts` | The homepage "CURRENT PROJECTS" list -- currently empty (renders a "준비 중" panel until entries are added) |
| `data/partnership.ts` | The 6 partnership types shown on the homepage and `/together` |
| `data/transparency.ts` | The transparency/report list on the homepage and `/transparency` |
| `data/news.ts` | "MERE NEWS" articles (index + detail pages) |
| `data/weeklyPrayer.ts` | The homepage "THIS WEEK WE PRAY FOR" region + prayer points -- defaults to placeholder (renders a "준비 중" panel) until an admin fills in a real weekly focus |
| `data/monthlyMission.ts` | The homepage "ONE MONTH. ONE MISSION." project title + progress (current/target) -- defaults to placeholder (renders a "준비 중" panel) until an admin fills in a real monthly project |

### Example: adding a new story

Open `data/stories.ts` and add a new object to the `stories` array:

```ts
{
  slug: "a-new-beginning",           // used in the URL: /stories/a-new-beginning
  category: "아동·다음세대",
  title: "새로운 시작",
  excerpt: "짧은 한 줄 요약...",
  quote: "새로운 시작",
  date: "2026-09-01",
  image: "https://images.unsplash.com/photo-...",
  imageAlt: "사진에 대한 설명 (스크린 리더용)",
  body: ["첫 번째 문단...", "두 번째 문단..."],
  pullQuote: "본문 중 강조하고 싶은 한 문장",
},
```

It will automatically appear on `/stories` and get its own page at
`/stories/a-new-beginning` — no other code changes needed. The same pattern
applies to `data/news.ts`.

### Example: updating impact numbers

Open `data/impactStats.ts`. Each stat currently looks like:

```ts
{ id: "projects", value: 0, suffix: "+", label: "지원 프로젝트", isPlaceholder: true },
```

Once the real number is confirmed, set `value` to the real number and
change `isPlaceholder` to `false`. Placeholder stats render as `00+` on the
site; once `isPlaceholder` is `false`, the number animates (counts up) into
view as visitors scroll to it.

### Example: filling in this week's prayer focus

Open `data/weeklyPrayer.ts`. It currently looks like:

```ts
export const weeklyPrayer = placeholder({ region: "", points: [] });
```

To publish a real weekly focus, replace it with `confirmed(...)`:

```ts
export const weeklyPrayer = confirmed({
  region: "MYANMAR",
  points: [
    "현지 교회와 사역자들의 안전을 위해",
    "이번 주 전달될 물품이 필요한 가정에 잘 닿도록",
    "다음세대를 위한 교육 사역이 계속되도록",
  ],
});
```

Do this every week (or whenever the focus changes) -- switch it back to
`placeholder({ region: "", points: [] })` between updates rather than
leaving an old week's focus displayed as if it were current.

### Example: filling in this month's mission

Open `data/monthlyMission.ts`. It currently looks like:

```ts
export const monthlyMission = placeholder({
  titleEn: "", titleKo: "", unit: "", target: 0, current: 0,
});
```

To publish a real monthly project with a real, currently-countable target
and progress, replace it with `confirmed(...)`:

```ts
export const monthlyMission = confirmed({
  titleEn: "FILL 500 BOXES WITH HOPE",
  titleKo: "희망을 담은 상자 500개 채우기",
  unit: "BOXES",
  target: 500,
  current: 128,
});
```

Update `current` as real progress comes in. **Never invent `current` or
`target` numbers** -- leave it as `placeholder(...)` until there is a real
count to report.

### Placeholder / "준비 중" fields

Any field wrapped as `{ value: "...", isPlaceholder: true }` (see
`lib/types.ts`) is rendered with a visible "준비 중" badge across the site
instead of being presented as a confirmed fact. **Never replace a
placeholder with a fake-looking but unconfirmed number, name, or figure.**
Only flip `isPlaceholder` to `false` once the real value is confirmed.

### Replacing placeholder photos

Every photo URL lives in the `data/*.ts` files (or, for the homepage hero,
`components/Hero.tsx`, and for the donation section, `app/page.tsx`). They
are all Unsplash CDN URLs chosen for a documentary/NGO feel. To swap a
photo, replace the URL with another `https://images.unsplash.com/...` URL
(or point it at your own hosted image once you have real photography —
just make sure the image host is added to `remotePatterns` in
`next.config.ts` if it isn't Unsplash).

### Replacing placeholder org info

`data/site.ts` → `orgInfo` holds the foundation's address, phone, email,
business/corporation registration numbers, and bank account. Each field is
wrapped with `confirmed(...)` once it's real, or `placeholder(...)` while
still unconfirmed — flip between the two as facts get confirmed.

### Videos

`data/videos.ts` lists YouTube videos embedded on the About page — each
entry is just the video's 11-character YouTube id plus a caption.

### Real photos still needed (local placeholder paths)

The sections below are tied to specific real, confirmed events/partners (per
the client's 2024 활동자료 and printed 정기후원 신청서), so — unlike the
site's other decorative Unsplash photography — they intentionally do **not**
use stock photos standing in for real documentation. Each points at a local
path under `public/images/archive/` that does not yet contain a file; until
a real photo is uploaded there, `components/Frame.tsx`'s Sand Beige backdrop
covers the gap and a "준비 중" badge marks the spot as pending. Drop the real
photo in at the exact path below (same filename) and it appears automatically
— no code changes needed.

| Path | Used for |
| --- | --- |
| `public/images/archive/guatemala-01.jpg` | STORIES FROM THE FIELD — Guatemala / 글로벌선진학교 case (`data/fieldStories.ts`) |
| `public/images/archive/myanmar-01.jpg` | STORIES FROM THE FIELD — Myanmar mission support case (`data/fieldStories.ts`) |
| `public/images/archive/kazakhstan-01.jpg` | STORIES FROM THE FIELD — Kazakhstan Central Asia mission case (`data/fieldStories.ts`) |
| `public/images/archive/clothing-support-01.jpg` | "ONE BOX, MANY HEARTS" clothing-donation story (homepage + `data/stories.ts` → `one-box-many-hearts`) |
| `public/images/archive/well-international-01.jpg` | "PARTNERS IN CHANGE" — WELL International partner card (homepage) |
| `public/images/archive/newsletter-2024-01-cover.jpg` | "2024 순전한재단 나눔 제01호" newsletter cover (`data/archive.ts`, `/archive` + homepage teaser) |

## Known placeholders still needed before launch

- Corporation registration number (`data/site.ts`) — the 고유번호 (National Tax
  Service unique number for non-profits, 310-82-78207) is now confirmed; the
  separate 법인등록번호 is still unconfirmed
- Organization chart / board & office structure details (`app/about/page.tsx`, "조직 및 운영")
- Map embed for "오시는 길" (`app/about/page.tsx`) — address/phone are already real
- Real impact numbers (`data/impactStats.ts`) — note this is separate from the
  now-confirmed "OUR FOOTPRINT" numbers (`data/footprint.ts`, 27 countries /
  45 regions per the 2024 활동자료)
- Real transparency reports/PDFs (`data/transparency.ts`)
- SNS links (Instagram/YouTube/Blog) (`data/site.ts`)
- Payment gateway integration for `/donate` (`components/DonationForm.tsx` — currently a non-functional intent form)
- Contact form backend for `/contact` (`components/ContactForm.tsx` — currently client-side only)
- Final legal review of `/privacy` and `/terms` (currently template placeholders)
- The 6 real photos listed above under "Real photos still needed"
- Real downloadable PDF for "2024 순전한재단 나눔 제01호" (`data/archive.ts` → `downloadUrl`; the edition's title/description are confirmed real, only the file itself is pending)
- `/archive` sub-sections still fully "준비 중": 활동보고, 나눔 이야기, 해외 활동, 재정보고, 후원금 사용내역
- Real "CURRENT PROJECTS" entries (`data/currentProjects.ts` — intentionally empty for now)

## Project structure

```
app/                  Routes (App Router)
components/           Shared UI components
data/                 Editable "CMS" content (see above)
lib/                  Small shared helpers/types
```
