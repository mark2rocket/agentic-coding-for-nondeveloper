import fs from 'fs';
import path from 'path';
import { Navigation, NavItem } from '@/types/content';

export function getNavigation(): Navigation {
  const navigationPath = path.join(process.cwd(), 'content', 'navigation.json');

  try {
    const fileContents = fs.readFileSync(navigationPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    // 기본 네비게이션 반환
    return {
      sections: []
    };
  }
}

/**
 * 모든 페이지를 평탄화된 리스트로 변환
 */
function flattenNavigation(navigation: Navigation): Array<{ title: string; slug: string }> {
  const pages: Array<{ title: string; slug: string }> = [];

  function traverse(items: NavItem[]) {
    for (const item of items) {
      if (item.slug && !item.slug.startsWith('#')) {
        pages.push({ title: item.title, slug: item.slug });
      }
      if (item.children) {
        traverse(item.children);
      }
    }
  }

  for (const section of navigation.sections) {
    traverse(section.items);
  }

  return pages;
}

/**
 * 현재 페이지의 이전/다음 페이지 찾기
 */
export function getAdjacentPages(navigation: Navigation, currentSlug: string) {
  const pages = flattenNavigation(navigation);
  const currentIndex = pages.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? pages[currentIndex - 1] : undefined,
    next: currentIndex < pages.length - 1 ? pages[currentIndex + 1] : undefined,
  };
}

/**
 * Breadcrumb 생성
 */
export function getBreadcrumb(navigation: Navigation, currentSlug: string): Array<{ title: string; href?: string }> {
  const breadcrumb: Array<{ title: string; href?: string }> = [];

  function findPath(items: NavItem[], targetSlug: string, path: Array<{ title: string; href?: string }> = []): boolean {
    for (const item of items) {
      const newPath = [...path, { title: item.title, href: item.slug ? `/docs/${item.slug}` : undefined }];

      if (item.slug === targetSlug) {
        breadcrumb.push(...newPath);
        return true;
      }

      if (item.children && findPath(item.children, targetSlug, newPath)) {
        return true;
      }
    }
    return false;
  }

  for (const section of navigation.sections) {
    if (findPath(section.items, currentSlug)) {
      break;
    }
  }

  return breadcrumb;
}
