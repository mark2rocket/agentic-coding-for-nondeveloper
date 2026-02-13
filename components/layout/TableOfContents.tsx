'use client';

import { useEffect, useState } from 'react';
import { Heading } from '@/types/content';

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="toc">
      <div className="toc-title">목차</div>
      <div className="toc-list">
        {headings.map((heading, index) => (
          <a
            key={`${heading.id}-${index}`}
            href={`#${heading.id}`}
            className={`toc-item level-${heading.level} ${
              activeId === heading.id ? 'active' : ''
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
