// data/footprintCountries.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// 홈페이지 "LOVE ACROSS BORDERS" 세계지도(components/GlobalMap.tsx)에
// 표시되는 국가 목록입니다. 순전한재단의 실제 활동 기록에서 확인된 국가만
// 여기에 추가하세요 -- 확인되지 않은 국가를 추측해서 넣지 마세요.
//
// 아래 40개국은 재단이 제공한 공식 "LOVE ACROSS BORDERS" 팜플렛(사역 국가
// 가나다순 · 40개국)을 근거로 합니다. 이 팜플렛은 OUR FOOTPRINT 섹션의
// "27개국·45개 지역"(2024 활동자료 기준) 수치와는 별개의, 더 포괄적인
// 사역 국가 전체 목록입니다 -- 두 수치가 다르다고 해서 오류가 아니라, 서로
// 다른 기준 시점/범위의 자료입니다.
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
  { id: "ghana", nameKo: "가나", nameEn: "GHANA", lat: 7.95, lng: -1.02 },
  {
    id: "guatemala",
    nameKo: "과테말라",
    nameEn: "GUATEMALA",
    lat: 15.5,
    lng: -90.25,
    description: "교육 · 선교 · 다음세대",
  },
  { id: "nigeria", nameKo: "나이지리아", nameEn: "NIGERIA", lat: 9.08, lng: 8.68 },
  { id: "nepal", nameKo: "네팔", nameEn: "NEPAL", lat: 28.39, lng: 84.12 },
  { id: "taiwan", nameKo: "대만", nameEn: "TAIWAN", lat: 23.7, lng: 121.0 },
  { id: "laos", nameKo: "라오스", nameEn: "LAOS", lat: 19.85, lng: 102.5 },
  { id: "rwanda", nameKo: "르완다", nameEn: "RWANDA", lat: -1.94, lng: 29.87 },
  { id: "madagascar", nameKo: "마다가스카르", nameEn: "MADAGASCAR", lat: -18.77, lng: 46.87 },
  { id: "malawi", nameKo: "말라위", nameEn: "MALAWI", lat: -13.25, lng: 34.3 },
  { id: "malaysia", nameKo: "말레이시아", nameEn: "MALAYSIA", lat: 4.2, lng: 101.98 },
  { id: "mexico", nameKo: "멕시코", nameEn: "MEXICO", lat: 23.6, lng: -102.55 },
  { id: "mongolia", nameKo: "몽골", nameEn: "MONGOLIA", lat: 46.86, lng: 103.85 },
  { id: "mozambique", nameKo: "모잠비크", nameEn: "MOZAMBIQUE", lat: -18.67, lng: 35.53 },
  {
    id: "myanmar",
    nameKo: "미얀마",
    nameEn: "MYANMAR",
    lat: 21.9,
    lng: 95.96,
    description: "현지 선교사 · 교회 · 지역사회",
  },
  { id: "bangladesh", nameKo: "방글라데시", nameEn: "BANGLADESH", lat: 23.68, lng: 90.36 },
  { id: "vietnam", nameKo: "베트남", nameEn: "VIETNAM", lat: 14.06, lng: 108.28 },
  { id: "bolivia", nameKo: "볼리비아", nameEn: "BOLIVIA", lat: -16.29, lng: -63.59 },
  { id: "brazil", nameKo: "브라질", nameEn: "BRAZIL", lat: -14.24, lng: -51.93 },
  { id: "sri-lanka", nameKo: "스리랑카", nameEn: "SRI LANKA", lat: 7.87, lng: 80.77 },
  { id: "el-salvador", nameKo: "엘살바도르", nameEn: "EL SALVADOR", lat: 13.79, lng: -88.9 },
  { id: "ethiopia", nameKo: "에티오피아", nameEn: "ETHIOPIA", lat: 9.15, lng: 40.49 },
  { id: "honduras", nameKo: "온두라스", nameEn: "HONDURAS", lat: 15.2, lng: -86.24 },
  { id: "uganda", nameKo: "우간다", nameEn: "UGANDA", lat: 1.37, lng: 32.29 },
  { id: "uzbekistan", nameKo: "우즈베키스탄", nameEn: "UZBEKISTAN", lat: 41.38, lng: 64.59 },
  { id: "ukraine", nameKo: "우크라이나", nameEn: "UKRAINE", lat: 48.38, lng: 31.17 },
  { id: "india", nameKo: "인도", nameEn: "INDIA", lat: 20.59, lng: 78.96 },
  { id: "indonesia", nameKo: "인도네시아", nameEn: "INDONESIA", lat: -0.79, lng: 113.92 },
  { id: "japan", nameKo: "일본", nameEn: "JAPAN", lat: 36.2, lng: 138.25 },
  { id: "china", nameKo: "중국", nameEn: "CHINA", lat: 35.86, lng: 104.2 },
  {
    id: "kazakhstan",
    nameKo: "카자흐스탄",
    nameEn: "KAZAKHSTAN",
    lat: 43.2,
    lng: 76.9,
    description: "중앙아시아 선교 네트워크",
  },
  { id: "cambodia", nameKo: "캄보디아", nameEn: "CAMBODIA", lat: 12.57, lng: 104.99 },
  { id: "kenya", nameKo: "케냐", nameEn: "KENYA", lat: -0.02, lng: 37.9 },
  { id: "colombia", nameKo: "콜롬비아", nameEn: "COLOMBIA", lat: 4.57, lng: -74.3 },
  { id: "kyrgyzstan", nameKo: "키르기스스탄", nameEn: "KYRGYZSTAN", lat: 41.2, lng: 74.77 },
  { id: "tajikistan", nameKo: "타지키스탄", nameEn: "TAJIKISTAN", lat: 38.86, lng: 71.28 },
  { id: "thailand", nameKo: "태국", nameEn: "THAILAND", lat: 15.87, lng: 100.99 },
  { id: "tanzania", nameKo: "탄자니아", nameEn: "TANZANIA", lat: -6.37, lng: 34.89 },
  { id: "pakistan", nameKo: "파키스탄", nameEn: "PAKISTAN", lat: 30.38, lng: 69.35 },
  { id: "peru", nameKo: "페루", nameEn: "PERU", lat: -9.19, lng: -75.02 },
  { id: "philippines", nameKo: "필리핀", nameEn: "PHILIPPINES", lat: 12.88, lng: 121.77 },
];
