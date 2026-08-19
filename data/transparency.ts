// data/transparency.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "투명성(Transparency)" 페이지/섹션에 노출되는 자료 목록입니다.
// 실제 자료(PDF 등)가 준비되면:
//   1) fileUrl 에 실제 파일 경로 또는 링크를 입력하고
//   2) isReady 를 true 로 바꾸세요.
// isReady 가 false 인 항목은 "자료 준비 중 — 추후 업로드 예정" 상태로
// 표시됩니다. fileUrl 은 나중에 실제 PDF/외부링크를 넣을 자리이며,
// 지금은 반드시 null 로 두어야 합니다.
// ---------------------------------------------------------------------------

export type TransparencyItem = {
  id: string;
  title: string;
  description: string;
  isReady: boolean;
  fileUrl: string | null;
};

export const transparencyItems: TransparencyItem[] = [
  {
    id: "operating-principles",
    title: "재단 운영 원칙",
    description: "재단의 운영 원칙과 윤리 기준을 안내합니다.",
    isReady: false,
    fileUrl: null,
  },
  {
    id: "business-report",
    title: "사업보고",
    description: "연간 추진 사업의 세부 내용과 결과를 공개합니다.",
    isReady: false,
    fileUrl: null,
  },
  {
    id: "annual-report",
    title: "연차보고서",
    description: "한 해의 활동과 성과를 정리한 연차보고서입니다.",
    isReady: false,
    fileUrl: null,
  },
  {
    id: "financial-report",
    title: "재정보고",
    description: "재단의 수입·지출 내역을 담은 재정보고서입니다.",
    isReady: false,
    fileUrl: null,
  },
  {
    id: "donation-usage",
    title: "기부금 사용 내역",
    description: "후원금이 어떻게 사용되었는지 항목별로 안내합니다.",
    isReady: false,
    fileUrl: null,
  },
  {
    id: "public-interest-corp",
    title: "공익법인 관련 자료",
    description: "공익법인 등록 및 관련 공시 자료입니다.",
    isReady: false,
    fileUrl: null,
  },
  {
    id: "notices",
    title: "공지사항",
    description: "재단 운영과 관련된 주요 공지사항입니다.",
    isReady: false,
    fileUrl: null,
  },
];
