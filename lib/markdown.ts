import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FrontMatter, MarkdownContent, Heading } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

// Heading ID를 생성하는 공통 함수 (MDXRenderer와 동일한 로직)
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-');
}

export function getContentBySlug(slug: string): MarkdownContent | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.md`);

    // Path traversal 방지: 파일 경로가 content 디렉토리 안에 있는지 확인
    const resolvedPath = path.resolve(filePath);
    const resolvedContentDir = path.resolve(contentDirectory);
    if (!resolvedPath.startsWith(resolvedContentDir + path.sep)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontMatter: data as FrontMatter,
      content,
      slug
    };
  } catch (error) {
    return null;
  }
}

export function getAllContentSlugs(): string[] {
  function getSlugsRecursively(dir: string, basePath: string = ''): string[] {
    const slugs: string[] = [];

    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          const subPath = basePath ? `${basePath}/${entry.name}` : entry.name;
          slugs.push(...getSlugsRecursively(path.join(dir, entry.name), subPath));
        } else if (entry.name.endsWith('.md')) {
          const fileName = entry.name.replace(/\.md$/, '');
          const slug = basePath ? `${basePath}/${fileName}` : fileName;
          slugs.push(slug);
        }
      }
    } catch (error) {
      // Directory doesn't exist yet
    }

    return slugs;
  }

  return getSlugsRecursively(contentDirectory);
}

export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  const usedIds = new Set<string>();
  let match;
  let counter = 0;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    let id = generateHeadingId(text);

    // 빈 ID 방지: fallback으로 고유 ID 생성
    if (!id || id.length === 0) {
      id = `heading-${counter}`;
    }

    // 중복 ID 방지: 같은 ID가 있으면 숫자 추가
    let uniqueId = id;
    let duplicateCounter = 1;
    while (usedIds.has(uniqueId)) {
      uniqueId = `${id}-${duplicateCounter}`;
      duplicateCounter++;
    }

    usedIds.add(uniqueId);
    headings.push({ id: uniqueId, text, level });
    counter++;
  }

  return headings;
}
