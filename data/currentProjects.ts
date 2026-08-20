// data/currentProjects.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "CURRENT PROJECTS" 섹션에 노출되는, 현재 진행 중인 프로젝트
// 목록입니다. 아직 공개 가능한 형태로 확정된 프로젝트가 없어 배열이
// 비어 있습니다. 이 동안 화면에는 "현재 준비 중인 프로젝트 소식을 이
// 영역에 안내드릴 예정입니다" 라는 안내 문구가 자동으로 표시됩니다.
//
// 실제 프로젝트가 확정되면 아래 배열에 객체를 추가하세요:
//   {
//     id: "project-slug",
//     titleKo: "프로젝트 이름",
//     titleEn: "PROJECT NAME",
//     summary: "한두 문장 소개",
//     image: "https://images.unsplash.com/... 또는 /images/archive/...",
//     imageAlt: "사진 설명",
//   }
// ---------------------------------------------------------------------------

export type CurrentProject = {
  id: string;
  titleKo: string;
  titleEn: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const currentProjects: CurrentProject[] = [];
