// data/news.ts
// ---------------------------------------------------------------------------
// 관리자 편집 가이드
// ---------------------------------------------------------------------------
// "MERE NEWS" 목록/상세 페이지에 노출되는 소식입니다. 새 글을 추가하려면
// 배열 맨 위에 객체를 하나 추가하세요(최신순 정렬은 date 기준 자동입니다).
// category 는 활동소식 / 공지사항 / 언론보도 / 행사 / 사업보고 중 하나를
// 사용하세요. body 는 문단 배열입니다.
// 아래 항목들은 사이트 레이아웃 확인용 예시 소식이며, 실제 소식이 준비되면
// 이 배열의 내용을 교체해주세요.
// ---------------------------------------------------------------------------

export type NewsCategory = "활동소식" | "공지사항" | "언론보도" | "행사" | "사업보고";

export type NewsItem = {
  slug: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "site-launch",
    category: "공지사항",
    title: "순전한 재단 MERE 공식 홈페이지를 새롭게 엽니다.",
    excerpt:
      "순전한 재단 MERE의 활동과 비전을 더 많은 분들과 나누기 위해 공식 홈페이지를 새롭게 오픈했습니다.",
    date: "2026-08-01",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "노트북 화면을 함께 보는 사람들",
    body: [
      "순전한 재단 MERE가 공식 홈페이지를 새롭게 열었습니다. 재단의 설립 취지와 비전, 우리가 하는 일, 함께하는 방법을 한눈에 확인하실 수 있습니다.",
      "앞으로 이 공간을 통해 재단의 활동 소식과 이야기를 꾸준히 전해드리겠습니다.",
    ],
  },
  {
    slug: "community-visit-report",
    category: "활동소식",
    title: "지역사회 현장 방문 및 협력기관 간담회 진행",
    excerpt:
      "지역 복지기관과의 협력 강화를 위한 현장 방문과 간담회를 진행했습니다.",
    date: "2026-07-18",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "테이블에 둘러앉아 대화하는 사람들",
    body: [
      "지역사회 협력기관과의 관계를 강화하고 현장의 필요를 파악하기 위한 방문과 간담회가 진행되었습니다.",
      "앞으로도 현장의 목소리를 반영한 지원 방향을 함께 고민해나가겠습니다.",
    ],
  },
  {
    slug: "volunteer-orientation",
    category: "행사",
    title: "자원봉사자 오리엔테이션 프로그램 안내",
    excerpt:
      "MERE와 함께할 자원봉사자를 위한 오리엔테이션 프로그램을 준비 중입니다.",
    date: "2026-06-30",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "함께 모여 이야기하는 자원봉사자들",
    body: [
      "MERE의 활동에 함께해 주실 자원봉사자분들을 위한 오리엔테이션 프로그램을 준비하고 있습니다.",
      "세부 일정과 신청 방법은 추후 공지사항을 통해 다시 안내드리겠습니다.",
    ],
  },
  {
    slug: "education-support-kickoff",
    category: "사업보고",
    title: "교육지원 사업 시범 운영을 시작합니다.",
    excerpt: "형편이 어려운 학생들을 위한 교육지원 사업의 시범 운영을 시작했습니다.",
    date: "2026-05-22",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "책상에서 공부하는 학생의 손",
    body: [
      "교육지원 사업의 시범 운영이 시작되었습니다. 세부 성과와 진행 경과는 사업보고를 통해 순차적으로 공개할 예정입니다.",
    ],
  },
  {
    slug: "partnership-announcement",
    category: "언론보도",
    title: "[보도자료 준비 중] 재단 협력 소식",
    excerpt: "관련 보도자료는 확정되는 대로 이 페이지를 통해 공개할 예정입니다.",
    date: "2026-04-10",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "회의실에서 협력을 논의하는 사람들",
    body: [
      "이 글은 언론보도 카테고리의 레이아웃 확인을 위한 예시 항목입니다. 실제 보도자료가 준비되는 대로 교체될 예정입니다.",
    ],
  },
];
