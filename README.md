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

## Deploying to Cloudflare Pages

This site has no API routes, middleware, or server actions — everything is
static or SSG (`generateStaticParams`) — so `next.config.ts` sets
`output: "export"` and it deploys as a plain static site via **Cloudflare
Pages** (no Workers/OpenNext adapter needed).

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, and pick this repository.
2. Build settings:
   - **Framework preset**: Next.js (Static HTML Export) — or set manually:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (repo root)
3. Environment: no environment variables are required for the build.
   Node 18+ is fine (Cloudflare Pages' default works).
4. Once a custom production domain is decided, update `siteUrl` in
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
| `data/programs.ts` | The 6 "우리가 하는 일" program areas (title, description, photo, bullet lines) shown on the homepage and `/what-we-do` |
| `data/impactStats.ts` | The 4 "MERE Impact" counters |
| `data/stories.ts` | "MERE STORIES" articles (index + detail pages) |
| `data/partnership.ts` | The 6 partnership types shown on the homepage and `/together` |
| `data/transparency.ts` | The transparency/report list on the homepage and `/transparency` |
| `data/news.ts` | "MERE NEWS" articles (index + detail pages) |

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
business/corporation registration numbers, representative name, and bank
account. Update each `value` and flip `isPlaceholder` to `false` once
confirmed.

## Known placeholders still needed before launch

- Organization address, phone, fax, email (`data/site.ts`)
- Business registration number / corporation registration number (`data/site.ts`)
- Representative (대표자) name and the 대표인사말 greeting letter + photo (`app/about/page.tsx`)
- Organization chart / board & office structure details (`app/about/page.tsx`, "조직 및 운영")
- Map/address for "오시는 길" (`app/about/page.tsx`)
- Donation bank account details (`data/site.ts`)
- Real impact numbers (`data/impactStats.ts`)
- Real transparency reports/PDFs (`data/transparency.ts`)
- SNS links (Instagram/YouTube/Blog) (`data/site.ts`)
- Payment gateway integration for `/donate` (`components/DonationForm.tsx` — currently a non-functional intent form)
- Contact form backend for `/contact` (`components/ContactForm.tsx` — currently client-side only)
- Final legal review of `/privacy` and `/terms` (currently template placeholders)

## Project structure

```
app/                  Routes (App Router)
components/           Shared UI components
data/                 Editable "CMS" content (see above)
lib/                  Small shared helpers/types
```
