// data/archive.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "/archive" 페이지의 "소식지" 섹션과 홈페이지 ARCHIVE 미리보기에 노출되는
// 소식지(뉴스레터) 목록입니다.
//
// 2024년 제01호는 실제로 발행이 확인된 자료이므로 title/description 은
// confirmed 로 표시되어 있습니다. 다만 실제 PDF 파일은 아직 없으므로
// downloadUrl 은 placeholder(null) 로 두었고, 화면에서는 "보기" 버튼이
// 비활성화된 "준비 중" 상태로 표시됩니다.
//
// 실제 PDF가 준비되면:
//   1) downloadUrl 을 confirmed("/실제/파일/경로.pdf") 로 바꾸세요.
// 다음 호(2025, 2026...)를 추가하려면 배열 맨 위에 새 객체를 추가하세요.
// ---------------------------------------------------------------------------

import { confirmed, placeholder, type MaybePlaceholder } from "@/lib/types";

export type ArchiveEdition = {
  year: number;
  issueLabel: string;
  title: MaybePlaceholder<string>;
  description: MaybePlaceholder<string>;
  coverImage: string;
  coverImageAlt: string;
  downloadUrl: MaybePlaceholder<string | null>;
};

export const archiveEditions: ArchiveEdition[] = [
  {
    year: 2024,
    issueLabel: "제01호",
    title: confirmed("2024 순전한재단 나눔 제01호"),
    description: confirmed(
      "순전한재단이 걸어온 나눔의 현장과 국내외 파트너들의 이야기를 기록합니다."
    ),
    coverImage: "/images/archive/newsletter-2024-01-cover.jpg",
    coverImageAlt: "2024 순전한재단 나눔 제01호 표지 (실제 표지 이미지 교체 예정)",
    downloadUrl: placeholder(null),
  },
];
