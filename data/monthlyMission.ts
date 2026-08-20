// data/monthlyMission.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "ONE MONTH. ONE MISSION." 섹션에 노출되는, 이번 달 참여 목표입니다.
//
// 아직 실제로 확정된 이번 달 미션이 없으므로 아래 값은
// placeholder({ ... target: 0, current: 0 ... }) 로 비어 있습니다. 화면에는
// "이번 달 미션이 아직 준비되지 않았습니다" 안내가 표시됩니다.
//
// 실제 프로젝트가 확정되면:
//   1) titleEn / titleKo 에 이번 달 미션 이름을 입력하세요.
//   2) unit 에 세는 단위를 입력하세요 (예: "BOXES", "가정", "명").
//   3) target 에 실제 목표 수량을, current 에 실제 현재 진행 수량을
//      입력하세요 -- 절대로 임의의 숫자를 만들어 넣지 마세요. 집계 방식이
//      아직 없다면 실제로 셀 수 있을 때까지 placeholder 상태를 유지하세요.
//   4) confirmed(...) 로 감싸고, 기존 placeholder(...) 호출을 지우세요.
//
// 예시 (실제 값이 확정되었을 때):
//   export const monthlyMission = confirmed({
//     titleEn: "FILL 500 BOXES WITH HOPE",
//     titleKo: "희망을 담은 상자 500개 채우기",
//     unit: "BOXES",
//     target: 500,
//     current: 128,
//   });
//
// current/target 이 confirmed 상태가 되면 진행률 바와 CountUp 카운터가 실제
// 숫자로 애니메이션됩니다. 절대로 confirmed 상태에서 임의의(가짜) 숫자를
// 사용하지 마세요.
// ---------------------------------------------------------------------------

import { placeholder, type MaybePlaceholder } from "@/lib/types";

export type MonthlyMissionGoal = {
  titleEn: string;
  titleKo: string;
  unit: string;
  target: number;
  current: number;
};

export const monthlyMission: MaybePlaceholder<MonthlyMissionGoal> = placeholder({
  titleEn: "",
  titleKo: "",
  unit: "",
  target: 0,
  current: 0,
});
