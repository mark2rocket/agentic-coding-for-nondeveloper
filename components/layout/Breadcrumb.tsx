'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <Link
        href="/"
        className="flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        title="홈"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
            {isLast || !item.href ? (
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {item.title}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.title}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
