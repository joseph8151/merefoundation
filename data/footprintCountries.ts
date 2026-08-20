// data/footprintCountries.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "LOVE ACROSS BORDERS" 세계지도(components/GlobalMap.tsx)에
// 표시되는 국가 목록입니다. 순전한재단의 실제 활동 기록에서 확인된 국가만
// 여기에 추가하세요 -- 확인되지 않은 국가를 추측해서 넣지 마세요.
//
// - lat/lng: 대략적인 위도/경도 (지도 위 위치 계산용, 정밀한 지도가 아닌
//   브랜드 스타일의 단순화된 세계지도이므로 정확한 좌표일 필요는 없습니다)
// - description: 해당 국가에서의 활동을 설명하는 한 줄. 아직 확인되지 않은
//   국가는 이 필드를 비워두세요(이름만 표시됩니다) -- 임의로 문구를 만들어
//   채우지 마세요.
// ---------------------------------------------------------------------------

export type FootprintCountry = {
  id: string;
  nameKo: string;
  nameEn: string;
  lat: number;
  lng: number;
  /** 확인된 활동 설명이 있을 때만 채우세요. 없으면 국가명만 노출됩니다. */
  description?: string;
};

export const footprintCountries: FootprintCountry[] = [
  {
    id: "guatemala",
    nameKo: "과테말라",
    nameEn: "GUATEMALA",
    lat: 15.5,
    lng: -90.25,
    description: "교육 · 선교 · 다음세대",
  },
  {
    id: "myanmar",
    nameKo: "미얀마",
    nameEn: "MYANMAR",
    lat: 21.9,
    lng: 95.96,
    description: "현지 선교사 · 교회 · 지역사회",
  },
  {
    id: "kazakhstan",
    nameKo: "카자흐스탄",
    nameEn: "KAZAKHSTAN",
    lat: 43.2,
    lng: 76.9,
    description: "중앙아시아 선교 네트워크",
  },
  { id: "mongolia", nameKo: "몽골", nameEn: "MONGOLIA", lat: 46.86, lng: 103.85 },
  { id: "cambodia", nameKo: "캄보디아", nameEn: "CAMBODIA", lat: 12.57, lng: 104.99 },
  { id: "philippines", nameKo: "필리핀", nameEn: "PHILIPPINES", lat: 12.88, lng: 121.77 },
  { id: "nepal", nameKo: "네팔", nameEn: "NEPAL", lat: 28.39, lng: 84.12 },
  { id: "india", nameKo: "인도", nameEn: "INDIA", lat: 20.59, lng: 78.96 },
  { id: "pakistan", nameKo: "파키스탄", nameEn: "PAKISTAN", lat: 30.38, lng: 69.35 },
  { id: "burundi", nameKo: "부룬디", nameEn: "BURUNDI", lat: -3.37, lng: 29.92 },
  { id: "tanzania", nameKo: "탄자니아", nameEn: "TANZANIA", lat: -6.37, lng: 34.89 },
  { id: "madagascar", nameKo: "마다가스카르", nameEn: "MADAGASCAR", lat: -18.77, lng: 46.87 },
  { id: "ukraine", nameKo: "우크라이나", nameEn: "UKRAINE", lat: 48.38, lng: 31.17 },
];
