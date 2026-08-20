// data/weeklyPrayer.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "THIS WEEK WE PRAY FOR" 섹션에 노출되는, 이번 주 기도제목입니다.
//
// 아직 실제로 확정된 이번 주 기도 지역/제목이 없으므로 아래 값은
// placeholder({ region: "", points: [] }) 로 비어 있습니다. 화면에는 "이번
// 주 기도제목은 준비 중입니다" 안내가 표시됩니다.
//
// 매주(또는 필요할 때) 실제 기도제목으로 갱신하려면:
//   1) region 에 나라/지역 이름을 영문 대문자로 입력하세요 (예: "MYANMAR").
//      -- 이 값은 예시 형식일 뿐이며, 실제로 그 주에 기도하고 있는 지역을
//         넣어야 합니다. 확인되지 않은 지역을 임의로 넣지 마세요.
//   2) points 에 기도제목 2~3개를 짧은 문장으로 입력하세요.
//   3) confirmed(...) 로 감싸고, 기존 placeholder(...) 호출을 지우세요.
//
// 예시:
//   export const weeklyPrayer = confirmed({
//     region: "MYANMAR",
//     points: [
//       "현지 교회와 사역자들의 안전을 위해",
//       "이번 주 전달될 물품이 필요한 가정에 잘 닿도록",
//       "다음세대를 위한 교육 사역이 계속되도록",
//     ],
//   });
//
// 절대로 실제로 확정되지 않은 지역/기도제목을 마치 이번 주의 진짜 기도제목인
// 것처럼 임의로 채워 넣지 마세요.
// ---------------------------------------------------------------------------

import { placeholder, type MaybePlaceholder } from "@/lib/types";

export type WeeklyPrayerFocus = {
  region: string;
  points: string[];
};

export const weeklyPrayer: MaybePlaceholder<WeeklyPrayerFocus> = placeholder({
  region: "",
  points: [],
});
