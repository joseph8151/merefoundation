// data/fieldStories.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "STORIES FROM THE FIELD" 섹션에 노출되는 실제 현장 사례입니다.
// 클라이언트가 제공한 실제 활동자료를 근거로 한 내용이며, 확인되지 않은
// 세부 사실(인원수, 금액, 기관명, 날짜 등)을 임의로 추가하지 마세요.
//
// image 는 실제 사진 파일이 없는 경우 테마별 일러스트(components/
// PendingIllustrations.tsx)로 자동 대체됩니다. 실제 사진을 구하게 되면
// public/images/archive/ 아래에 같은 파일명으로 저장하세요 -- 코드 수정
// 없이 자동으로 반영됩니다 (카자흐스탄은 이미 실제 사진으로 교체됨).
// ---------------------------------------------------------------------------

export type FieldStory = {
  id: string;
  caseNumber: string;
  countryKo: string;
  countryEn: string;
  quote: string[];
  footerCaption: string;
  image: string;
  imageAlt: string;
  /** Themed stand-in illustration shown while the real photo is pending -- see components/PendingIllustrations.tsx */
  theme: "education" | "mission" | "network";
};

export const fieldStories: FieldStory[] = [
  {
    id: "guatemala",
    caseNumber: "CASE 01",
    countryKo: "과테말라 · 글로벌선진학교",
    countryEn: "GLOBAL EDUCATION",
    quote: [
      "교육은 한 아이의 미래뿐 아니라 한 지역의 미래를 변화시킬 수 있습니다.",
      "순전한재단은 해외 교육 현장과 다음세대를 섬기는 사역자 및 기관들과 함께 교육을 통한 지속적인 변화를 만들어갑니다.",
    ],
    footerCaption: "Guatemala · Education · Next Generation",
    image: "/images/archive/guatemala-01.jpg",
    imageAlt: "과테말라 교육 지원 활동을 상징하는 일러스트",
    theme: "education",
  },
  {
    id: "myanmar",
    caseNumber: "CASE 02",
    countryKo: "미얀마 · 현지 선교 지원",
    countryEn: "MISSION SUPPORT",
    quote: [
      "낯선 땅에서 오랜 시간 지역사회를 섬기는 선교사들과 현지 교회가 있습니다.",
      "순전한재단은 현지 사역이 지속될 수 있도록 필요한 연결과 나눔을 이어갑니다.",
    ],
    footerCaption: "Myanmar · Mission · Community",
    image: "/images/archive/myanmar-01.jpg",
    imageAlt: "미얀마 현지 선교 지원 활동을 상징하는 일러스트",
    theme: "mission",
  },
  {
    id: "kazakhstan",
    caseNumber: "CASE 03",
    countryKo: "카자흐스탄 · 중앙아시아 선교",
    countryEn: "CENTRAL ASIA MISSION",
    quote: [
      "도시와 지역을 넘어 현지 공동체가 스스로 성장하고 복음과 사랑을 이어갈 수 있도록 장기적인 관계를 만들어갑니다.",
    ],
    footerCaption: "Kazakhstan · Church · Mission Network",
    image: "/images/archive/kazakhstan-01.jpg",
    imageAlt: "카자흐스탄 현지 여름 크리스천 캠프에 함께한 아이들과 봉사자들",
    theme: "network",
  },
];
