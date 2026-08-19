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

import { placeholder, type Placeholder } from "@/lib/types";

export const orgInfo = {
  nameKo: "순전한 재단",
  nameEn: "MERE FOUNDATION",
  mark: "MERE",
  tagline: "For People. For Communities. For Tomorrow.",

  address: placeholder("재단 주소를 입력해주세요 (예: 서울특별시 OO구 OO로 00, 0층)"),
  addressEn: placeholder("Foundation address to be added"),
  phone: placeholder("000-0000-0000"),
  fax: placeholder("000-0000-0000"),
  email: placeholder("info@merefoundation.example"),

  // 사업자등록번호 / 고유번호 등 법인 관련 정보
  businessRegistrationNumber: placeholder("000-00-00000"),
  corporationRegistrationNumber: placeholder("000000-0000000"),
  representativeName: placeholder("[대표자 성함]"),

  bankAccount: placeholder({
    bank: "은행명 입력",
    number: "000-0000-0000-00",
    holder: "순전한재단",
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
  address: Placeholder<string>;
  addressEn: Placeholder<string>;
  phone: Placeholder<string>;
  fax: Placeholder<string>;
  email: Placeholder<string>;
  businessRegistrationNumber: Placeholder<string>;
  corporationRegistrationNumber: Placeholder<string>;
  representativeName: Placeholder<string>;
  bankAccount: Placeholder<{ bank: string; number: string; holder: string }>;
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
  { label: "문의", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
  { label: "투명성", href: "/transparency" },
];

export const siteUrl = "https://www.merefoundation.example";
