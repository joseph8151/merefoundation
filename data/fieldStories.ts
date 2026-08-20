// data/fieldStories.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "STORIES FROM THE FIELD" 섹션에 노출되는 실제 현장 사례입니다.
// 클라이언트가 제공한 실제 활동자료를 근거로 한 내용이며, 확인되지 않은
// 세부 사실(인원수, 금액, 기관명, 날짜 등)을 임의로 추가하지 마세요.
//
// image 는 아직 업로드되지 않은 실제 사진의 자리표시자 경로입니다. 실제
// 사진 파일이 준비되면 public/images/archive/ 아래에 같은 파일명으로
// 저장하세요 -- 코드 수정 없이 자동으로 반영됩니다.
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
    imageAlt: "과테말라 현지 교육 활동 사진 (실제 활동사진 교체 예정)",
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
    imageAlt: "미얀마 현지 선교 지원 활동 사진 (실제 활동사진 교체 예정)",
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
    imageAlt: "카자흐스탄 중앙아시아 선교 네트워크 활동 사진 (실제 활동사진 교체 예정)",
  },
];
