// data/footprint.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "OUR FOOTPRINT" 섹션에 노출되는 두 개의 핵심 숫자입니다.
// 순전한재단 2024 활동자료를 기준으로 확정된 실제 수치입니다.
//
// 다음 해 자료(2025, 2026...)가 나오면:
//   1) 각 stat 의 value 를 confirmed(새 숫자) 로 갱신하고
//   2) footprintBasisLabel 의 연도를 함께 갱신하세요.
// 이 숫자들은 반드시 footprintBasisLabel 캡션과 함께 노출되어야 하며,
// 절대 "현재" 시점의 수치처럼 단독으로 표시되어서는 안 됩니다.
// ---------------------------------------------------------------------------

import { confirmed, type MaybePlaceholder } from "@/lib/types";

export type FootprintStat = {
  id: string;
  value: MaybePlaceholder<number>;
  unitEn: string;
  label: string;
};

// 기준 자료 -- 새 자료가 나오면 이 라벨을 함께 갱신하세요.
export const footprintBasisLabel = "순전한재단 2024 활동자료 기준";

export const footprintStats: FootprintStat[] = [
  {
    id: "countries",
    value: confirmed(27),
    unitEn: "COUNTRIES",
    label: "사랑이 전해진 국가",
  },
  {
    id: "regions",
    value: confirmed(45),
    unitEn: "REGIONS",
    label: "나눔과 선교가 이어진 지역",
  },
];
