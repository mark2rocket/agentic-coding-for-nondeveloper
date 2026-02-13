'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageLink {
  title: string;
  slug: string;
}

interface PageNavigationProps {
  prev?: PageLink;
  next?: PageLink;
}

export function PageNavigation({ prev, next }: PageNavigationProps) {
  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      {/* 이전 페이지 */}
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group flex-1"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500 dark:text-gray-400">이전</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {prev.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {/* 다음 페이지 */}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group flex-1 justify-end text-right"
        >
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">다음</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {next.title}
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
