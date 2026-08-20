// data/videos.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드 (For non-developer admins)
// ---------------------------------------------------------------------------
// 재단 소개/사역 영상 목록입니다. YouTube 영상의 11자리 id만 있으면 되며,
// 워치 URL(https://www.youtube.com/watch?v=XXXXXXXXXXX)에서 v= 뒤의 값을
// 그대로 넣으면 됩니다. title은 화면에 노출되는 캡션이니 실제 영상 제목으로
// 자유롭게 바꿔주세요.
// ---------------------------------------------------------------------------

export type Video = {
  youtubeId: string;
  title: string;
};

export const videos: Video[] = [
  { youtubeId: "3_33_3862cM", title: "순전한 재단 MERE 소개 영상" },
  { youtubeId: "7LwoTHTbCmc", title: "순전한 재단 MERE 사역 영상" },
];
