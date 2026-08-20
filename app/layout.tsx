import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { orgInfo, siteUrl } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${orgInfo.mark} | ${orgInfo.nameKo} MERE FOUNDATION`,
    template: `%s | ${orgInfo.mark}`,
  },
  description:
    "순전한 재단 MERE는 도움이 필요한 이웃의 오늘을 함께하고 더 나은 내일을 만들어가는 비영리재단입니다.",
  openGraph: {
    title: `${orgInfo.mark} | ${orgInfo.nameKo}`,
    description:
      "순전한 마음에서 변화는 시작됩니다. 순전한 재단 MERE의 이야기를 만나보세요.",
    url: siteUrl,
    siteName: `${orgInfo.mark} FOUNDATION`,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${orgInfo.mark} | ${orgInfo.nameKo}`,
    description: "순전한 마음에서 변화는 시작됩니다.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: orgInfo.nameKo,
    alternateName: orgInfo.nameEn,
    url: siteUrl,
    description:
      "순전한 재단 MERE는 도움이 필요한 이웃의 오늘을 함께하고 더 나은 내일을 만들어가는 비영리재단입니다.",
  };

  return (
    <html lang="ko" className={`${fraunces.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/pretendard.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-pure-white text-charcoal">
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
