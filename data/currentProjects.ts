// data/currentProjects.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "CURRENT PROJECTS" 섹션에 노출되는, 현재 진행 중인 프로젝트
// 목록입니다.
//
// - 항목이 1개일 때는 이미지 + 전체 본문(body) + 강조 문구(highlights)를
//   보여주는 큰 에디토리얼 레이아웃으로 표시됩니다.
// - 항목이 2개 이상이면 간단한 카드 그리드로 표시되며, 이때는 body/
//   highlights 없이 summary 한두 문장만 노출됩니다.
//
// 새 프로젝트를 추가하려면 아래 배열에 객체를 추가하세요:
//   {
//     id: "project-slug",
//     titleKo: "프로젝트 이름",
//     titleEn: "PROJECT NAME",
//     summary: "한두 문장 요약 (카드형으로 표시될 때 사용)",
//     body: ["문단1", "문단2", ...],           // 선택 -- 상세 설명
//     highlights: ["강조 문구1", "강조 문구2"], // 선택 -- 짧은 강조 라인
//     image: "https://images.unsplash.com/... 또는 /images/archive/...",
//     imageAlt: "사진 설명",
//   }
// ---------------------------------------------------------------------------

export type CurrentProject = {
  id: string;
  titleKo: string;
  titleEn: string;
  summary: string;
  body?: string[];
  highlights?: string[];
  image: string;
  imageAlt: string;
  /** Themed illustration shown in place of a real photo -- see components/PendingIllustrations.tsx */
  theme?: "education" | "mission" | "network" | "relief" | "clothing" | "partnership" | "newsletter";
};

export const currentProjects: CurrentProject[] = [
  {
    id: "global-relief-supplies",
    titleKo: "전 세계를 향한 구호물품 지원",
    titleEn: "GLOBAL RELIEF SUPPLIES",
    summary:
      "동남아시아를 비롯한 전 세계 수십 개 국가에 생활필수품과 구호물품을 전달하고 있습니다.",
    body: [
      "순전한재단(MERE Foundation)은 현재 동남아시아를 비롯한 전 세계 수십 개 국가를 대상으로 구호물품 지원 활동을 진행하고 있습니다.",
      "도움이 필요한 지역과 공동체에 실질적인 힘이 될 수 있도록 생활필수품과 다양한 구호물품을 준비하여 전달하고 있으며, 현지 상황과 필요에 맞춘 지원을 지속적으로 확대해 나가고 있습니다.",
      "단순히 물품을 전달하는 일에 그치지 않고, 도움이 필요한 사람들에게 희망과 회복의 기회를 전하는 것을 순전한재단의 중요한 사명으로 생각합니다.",
      "앞으로도 새로운 국가 및 지역과의 협력을 확대하며 더 많은 곳에 따뜻한 나눔이 닿을 수 있도록 활동을 이어가겠습니다.",
      "물품 하나가 출발하는 순간부터 한 사람에게 전달되는 순간까지 책임 있는 나눔을 지향합니다.",
    ],
    highlights: [
      "동남아시아 및 전 세계 수십 개국 지원 진행 중",
      "구호물품 · 생활필수품 · 지역 맞춤형 지원",
      "지원 준비 → 분류 → 포장 → 해외 운송 → 현지 전달 → 활동 기록",
    ],
    image: "/images/archive/relief-supplies-01.jpg",
    imageAlt: "전 세계 구호물품 지원 활동을 상징하는 일러스트",
    theme: "relief",
  },
];
