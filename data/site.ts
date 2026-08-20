// data/site.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드 (For non-developer admins)
// ---------------------------------------------------------------------------
// 이 파일은 재단의 기본 정보(주소, 연락처, 계좌, SNS)와 전역 내비게이션을
// 관리합니다. `value` 값을 실제 정보로 바꾸고, 정보가 "확정된 사실"이 되면
// `isPlaceholder: true` 를 `false` 로 바꿔주세요. `isPlaceholder: true` 로
// 남아있는 항목은 사이트 곳곳에서 "준비 중" 스타일로 표시됩니다.
// 절대로 실제처럼 보이는 가짜 숫자/주소/사업자번호를 입력하지 마세요.
// ---------------------------------------------------------------------------

import { placeholder, confirmed, type MaybePlaceholder } from "@/lib/types";

export const orgInfo = {
  nameKo: "순전한 재단",
  nameEn: "MERE FOUNDATION",
  mark: "MERE",
  tagline: "For People. For Communities. For Tomorrow.",
  // 마태복음 10:8 -- 재단 슬로건으로 사용
  verse: {
    text: "너희가 거저 받았으니 거저 주라",
    reference: "마태복음 10:8",
  },

  address: confirmed("경기도 성남시 분당구 이매로 132, 3교육관 1층 순전한 재단"),
  addressEn: placeholder("Foundation address to be added"),
  phone: confirmed("031-789-8840"),
  fax: placeholder("000-0000-0000"),
  email: confirmed("jesus_mere@naver.com"),

  // 사업자등록번호 / 고유번호 등 법인 관련 정보 -- 후원 신청서에는 없어 아직 placeholder
  businessRegistrationNumber: placeholder("000-00-00000"),
  corporationRegistrationNumber: placeholder("000000-0000000"),

  bankAccount: confirmed({
    bank: "수협은행",
    number: "1010-2749-9731",
    holder: "순전한 재단",
  }),

  sns: {
    instagram: "#",
    youtube: "#",
    blog: "#",
  },
} satisfies {
  nameKo: string;
  nameEn: string;
  mark: string;
  tagline: string;
  verse: { text: string; reference: string };
  address: MaybePlaceholder<string>;
  addressEn: MaybePlaceholder<string>;
  phone: MaybePlaceholder<string>;
  fax: MaybePlaceholder<string>;
  email: MaybePlaceholder<string>;
  businessRegistrationNumber: MaybePlaceholder<string>;
  corporationRegistrationNumber: MaybePlaceholder<string>;
  bankAccount: MaybePlaceholder<{ bank: string; number: string; holder: string }>;
  sns: { instagram: string; youtube: string; blog: string };
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "재단소개", href: "/about" },
  { label: "우리가 하는 일", href: "/what-we-do" },
  { label: "MERE STORIES", href: "/stories" },
  { label: "함께하기", href: "/together" },
  { label: "소식", href: "/news" },
  { label: "ARCHIVE", href: "/archive" },
  { label: "문의", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
  { label: "투명성", href: "/transparency" },
];

export const siteUrl = "https://www.merefoundation.example";
