// data/programs.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "WHAT WE DO" 섹션(홈페이지 + /what-we-do)에 노출되는 6개 사업 영역입니다.
// - image: Unsplash 사진 URL입니다. 실제 활동 사진이 준비되면 이 URL만
//   교체하면 사이트 전체(홈페이지 미리보기 + 상세 페이지)에 반영됩니다.
// - slug: 주소(/what-we-do#slug)에 사용되는 영문 식별자이니 함부로 바꾸지 마세요.
// - lines: 짧은 소개 문장 목록(선택). 확인된 사실만 추가하고, 예산·수혜자
//   수 등 확인되지 않은 숫자는 절대 넣지 마세요. 비워두면 자동으로
//   숨겨집니다.
// ---------------------------------------------------------------------------

export type Program = {
  number: string;
  slug: string;
  titleEn: string;
  titleKo: string;
  summary: string;
  lines: string[];
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    number: "01",
    slug: "mission-support",
    titleEn: "OVERSEAS MISSION SUPPORT",
    titleKo: "해외 선교 지원",
    summary:
      "현지 선교사, 교회 및 선교기관과 협력하여 지속적인 사역이 가능하도록 지원합니다.",
    lines: [],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "함께 손을 맞잡은 사람들",
  },
  {
    number: "02",
    slug: "education-support",
    titleEn: "OVERSEAS EDUCATION SUPPORT",
    titleKo: "해외 교육 지원",
    summary:
      "학교와 교육시설, 다음세대 교육 및 현지 교육활동을 지원합니다.",
    lines: [],
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "책을 읽고 있는 아이의 모습",
  },
  {
    number: "03",
    slug: "emergency-relief",
    titleEn: "EMERGENCY RELIEF",
    titleKo: "긴급구호",
    summary:
      "전쟁, 재난, 빈곤 등 긴급한 도움이 필요한 지역에 필요한 지원을 연결합니다.",
    lines: [],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "물품을 전달하며 돕는 손길",
  },
  {
    number: "04",
    slug: "medical-health",
    titleEn: "MEDICAL & HEALTH COOPERATION",
    titleKo: "의료·보건 협력",
    summary:
      "의료 전문기관 및 NGO와 협력하여 의료, 보건, 위생 지원사업에 참여합니다.",
    lines: [],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "협력을 논의하는 사람들",
  },
  {
    number: "05",
    slug: "clothing-goods",
    titleEn: "CLOTHING & GOODS SHARING",
    titleKo: "의류·생활물품 나눔",
    summary:
      "필요한 지역에 의류와 생활물품을 전달하여 가장 현실적인 필요를 채웁니다.",
    lines: [],
    image:
      "https://images.unsplash.com/photo-1560252829-804f1aedf1be?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "나눔을 위해 모인 사람들",
  },
  {
    number: "06",
    slug: "partnership",
    titleEn: "CHURCH · BUSINESS · INSTITUTION PARTNERSHIP",
    titleKo: "교회·기업·기관 Partnership",
    summary:
      "교회, 기업, NGO, 교육기관과 함께 지속 가능한 사회공헌과 선교 프로젝트를 만듭니다.",
    lines: [],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "함께 모여 협력을 논의하는 사람들",
  },
];
