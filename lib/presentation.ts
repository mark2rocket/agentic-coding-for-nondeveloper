export interface Slide {
  id: string;
  title: string;
  content: string;
  index: number;
}

/**
 * 마크다운 콘텐츠를 ## 헤딩 기준으로 슬라이드 분할
 */
export function parseSlides(markdown: string, documentTitle: string): Slide[] {
  const slides: Slide[] = [];

  // ## 로 시작하는 라인을 찾아서 분할
  const sections = markdown.split(/\n(?=## )/);

  sections.forEach((section, index) => {
    const lines = section.trim().split('\n');
    if (lines.length === 0) return;

    // 첫 번째 라인이 ## 헤딩인지 확인
    const firstLine = lines[0];
    let title = documentTitle;
    let content = section;

    if (firstLine.startsWith('## ')) {
      title = firstLine.replace(/^##\s+/, '').trim();
      content = lines.slice(1).join('\n').trim();
    }

    slides.push({
      id: `slide-${index}`,
      title,
      content,
      index,
    });
  });

  return slides;
}

/**
 * 슬라이드 진행률 계산
 */
export function calculateProgress(currentIndex: number, totalSlides: number): number {
  if (totalSlides === 0) return 0;
  return Math.round(((currentIndex + 1) / totalSlides) * 100);
}

/**
 * 타이머 포맷 (초 → mm:ss)
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
