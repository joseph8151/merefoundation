// data/partnership.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "함께하기 / Partnership" 섹션에 노출되는 6가지 협력 방식입니다. 문구를
// 다듬거나 새로운 협력 유형을 추가할 때 이 배열을 편집하세요.
// audience 는 /together 페이지에서 대상별(개인/기업/교회·기관) 탭 구분에
// 사용됩니다.
// ---------------------------------------------------------------------------

export type PartnershipType = {
  id: string;
  titleKo: string;
  titleEn: string;
  description: string;
  audience: "individual" | "corporate" | "church";
};

export const partnershipTypes: PartnershipType[] = [
  {
    id: "csr",
    titleKo: "기업 사회공헌",
    titleEn: "Corporate CSR",
    description:
      "기업의 사회공헌 방향에 맞춘 공동 프로젝트를 기획하고, 임직원 참여 프로그램까지 함께 설계합니다.",
    audience: "corporate",
  },
  {
    id: "church-institution",
    titleKo: "교회·기관 협력",
    titleEn: "Church & Institution Partnership",
    description:
      "교회·선교단체·복지기관과 지역 안팎의 지원 사업을 함께 기획하고 운영합니다.",
    audience: "church",
  },
  {
    id: "project-sponsorship",
    titleKo: "프로젝트 후원",
    titleEn: "Project Sponsorship",
    description:
      "특정 사업(교육, 긴급지원, 해외지원 등)을 지정하여 후원하고 진행 경과를 공유받습니다.",
    audience: "corporate",
  },
  {
    id: "regular-giving",
    titleKo: "정기후원",
    titleEn: "Regular Giving",
    description:
      "매월 정기적인 나눔으로 지속가능한 지원 활동의 기반이 되어주세요.",
    audience: "individual",
  },
  {
    id: "in-kind",
    titleKo: "재능기부",
    titleEn: "Skills & In-kind Giving",
    description:
      "디자인, 통번역, 콘텐츠, 법률·회계 등 전문성을 살려 재단의 활동을 도울 수 있습니다.",
    audience: "individual",
  },
  {
    id: "volunteer",
    titleKo: "자원봉사",
    titleEn: "Volunteering",
    description:
      "현장에서 함께 손을 보태는 봉사활동으로 이웃과 직접 만나는 시간을 가져보세요.",
    audience: "individual",
  },
];
