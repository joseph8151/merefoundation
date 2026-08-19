// data/programs.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "우리가 하는 일" 섹션(홈페이지 + /what-we-do)에 노출되는 6개 사업 영역입니다.
// - image: Unsplash 사진 URL입니다. 실제 활동 사진이 준비되면 이 URL만
//   교체하면 사이트 전체(홈페이지 미리보기 + 상세 페이지)에 반영됩니다.
// - slug: 주소(/what-we-do#slug)에 사용되는 영문 식별자이니 함부로 바꾸지 마세요.
// - lines: 짧은 소개 문장 목록입니다. 필요에 따라 추가/수정 가능합니다.
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
    slug: "children",
    titleEn: "CHILDREN & NEXT GENERATION",
    titleKo: "아동·다음세대",
    summary:
      "오늘의 어려움이 한 아이의 내일을 가로막지 않도록, 배움과 돌봄이 끊기지 않는 환경을 만듭니다.",
    lines: [
      "결식·돌봄 공백 아동을 위한 정기 지원",
      "학습 결손을 줄이는 교육 멘토링 연계",
      "정서적 안정과 성장을 위한 돌봄 프로그램",
    ],
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "교실에서 손을 들고 있는 아이들",
  },
  {
    number: "02",
    slug: "family-community",
    titleEn: "FAMILY & COMMUNITY",
    titleKo: "가정·지역사회",
    summary:
      "가정이 흔들릴 때 지역사회가 함께 버팀목이 되어줄 수 있도록, 촘촘한 돌봄 네트워크를 만듭니다.",
    lines: [
      "위기 가정 생계·주거 안정 지원",
      "지역 복지기관·이웃과의 연계 돌봄망 구축",
      "고립을 예방하는 커뮤니티 프로그램 운영",
    ],
    image:
      "https://images.unsplash.com/photo-1560252829-804f1aedf1be?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "함께 모여 이야기를 나누는 지역 주민들",
  },
  {
    number: "03",
    slug: "education",
    titleEn: "EDUCATION",
    titleKo: "교육지원",
    summary:
      "배움은 삶을 바꾸는 가장 확실한 사다리입니다. 형편과 관계없이 배울 수 있는 기회를 잇습니다.",
    lines: [
      "학습 기자재·장학금 지원",
      "진로·직업 교육 프로그램 연계",
      "지역 학습 공간 및 도서 지원",
    ],
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "책을 읽고 있는 아이의 모습",
  },
  {
    number: "04",
    slug: "mission-global",
    titleEn: "MISSION & GLOBAL",
    titleKo: "해외·선교지원",
    summary:
      "국경을 넘어, 도움이 필요한 곳이라면 어디든 순전한 마음으로 함께합니다.",
    lines: [
      "해외 협력기관과의 현지 지원 사업",
      "선교·구호 단체와의 파트너십",
      "현지 공동체 자립을 위한 장기 프로젝트",
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "함께 손을 맞잡은 사람들",
  },
  {
    number: "05",
    slug: "emergency-support",
    titleEn: "EMERGENCY SUPPORT",
    titleKo: "긴급지원",
    summary:
      "재난과 위기는 예고 없이 찾아옵니다. 가장 빠르게, 가장 필요한 곳에 손을 내밉니다.",
    lines: [
      "재해·재난 발생 시 긴급 구호물자 지원",
      "위기가정 긴급 생계비 지원",
      "지역 협력기관과의 신속 대응 체계",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "물품을 전달하며 돕는 손길",
  },
  {
    number: "06",
    slug: "partnership",
    titleEn: "PARTNERSHIP",
    titleKo: "파트너십",
    summary:
      "혼자서는 멀리 갈 수 없습니다. 기업, 교회, 기관과 함께 더 크고 지속가능한 변화를 만듭니다.",
    lines: [
      "기업 사회공헌(CSR) 프로그램 공동 기획",
      "교회·기관 협력 사업 운영",
      "공동 캠페인 및 프로젝트 후원 연계",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "회의 테이블에 둘러앉아 협력하는 사람들",
  },
];
