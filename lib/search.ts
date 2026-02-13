import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  section: string;
}

/**
 * 모든 마크다운 콘텐츠를 검색 가능한 형태로 인덱싱
 */
export function buildSearchIndex(): SearchItem[] {
  const contentDir = path.join(process.cwd(), 'content');
  const items: SearchItem[] = [];

  function traverseDirectory(dir: string, baseSlug = '') {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDirectory(fullPath, baseSlug ? `${baseSlug}/${file}` : file);
      } else if (file.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(fileContent);

        const slug = baseSlug
          ? `${baseSlug}/${file.replace('.md', '')}`
          : file.replace('.md', '');

        // 콘텐츠를 섹션별로 분할
        const sections = content.split(/\n## /g);

        sections.forEach((section, index) => {
          const lines = section.split('\n');
          const sectionTitle = index === 0 ? data.title : lines[0];
          const sectionContent = index === 0 ? section : lines.slice(1).join('\n');

          // 마크다운 문법 제거 (간단한 처리)
          const cleanContent = sectionContent
            .replace(/```[\s\S]*?```/g, '') // 코드 블록 제거
            .replace(/`[^`]+`/g, '') // 인라인 코드 제거
            .replace(/[#*_\[\]()]/g, '') // 마크다운 기호 제거
            .replace(/\n+/g, ' ') // 줄바꿈을 공백으로
            .trim();

          if (cleanContent.length > 20) { // 의미있는 콘텐츠만
            items.push({
              id: `${slug}-${index}`,
              title: sectionTitle || data.title,
              description: data.description || '',
              content: cleanContent.substring(0, 300), // 처음 300자만
              slug,
              section: baseSlug || '기타',
            });
          }
        });
      }
    }
  }

  if (fs.existsSync(contentDir)) {
    traverseDirectory(contentDir);
  }

  return items;
}

/**
 * 검색 결과 하이라이트 처리
 */
export function highlightSearchTerm(text: string, term: string): string {
  if (!term) return text;

  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
