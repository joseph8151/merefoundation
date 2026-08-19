// data/impactStats.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "MERE Impact" 섹션의 숫자 카운터입니다. 아직 실제 집계된 성과 지표가 없으므로
// 모든 값이 0이며 isPlaceholder: true 로 표시되어 있습니다.
// 실제 수치가 확정되면:
//   1) value 를 실제 숫자로 바꾸고
//   2) isPlaceholder 를 false 로 바꾸세요.
// isPlaceholder 가 true 인 항목은 화면에 "00+" 형태(자리표시자)로만 표시되고,
// false 가 되면 스크롤 시 숫자가 실제 값까지 카운트업됩니다.
// ---------------------------------------------------------------------------

export type ImpactStat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  isPlaceholder: boolean;
};

export const impactStats: ImpactStat[] = [
  {
    id: "projects",
    value: 0,
    suffix: "+",
    label: "지원 프로젝트",
    isPlaceholder: true,
  },
  {
    id: "beneficiaries",
    value: 0,
    suffix: "+",
    label: "함께한 이웃",
    isPlaceholder: true,
  },
  {
    id: "partners",
    value: 0,
    suffix: "+",
    label: "협력 기관·교회",
    isPlaceholder: true,
  },
  {
    id: "years",
    value: 0,
    suffix: "",
    label: "함께한 시간(년)",
    isPlaceholder: true,
  },
];
