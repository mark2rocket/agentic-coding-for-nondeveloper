'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Navigation, NavItem } from '@/types/content';

interface SidebarProps {
  navigation: Navigation;
}

export function Sidebar({ navigation }: SidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [currentHash, setCurrentHash] = useState('');
  const isInitialized = useRef(false);

  // localStorage에서 펼침 상태 로드 및 hash 감지
  useEffect(() => {
    const saved = localStorage.getItem('sidebar-expanded');
    if (saved) {
      setExpandedItems(new Set(JSON.parse(saved)));
    }
    isInitialized.current = true;

    // 초기 hash 설정
    setCurrentHash(window.location.hash);

    // hash 변경 감지
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 펼침 상태 저장 (초기화 후에만)
  useEffect(() => {
    if (isInitialized.current) {
      localStorage.setItem('sidebar-expanded', JSON.stringify(Array.from(expandedItems)));
    }
  }, [expandedItems]);

  const toggleItem = (slug: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug);
    } else {
      newExpanded.add(slug);
    }
    setExpandedItems(newExpanded);
  };

  const renderNavItem = (item: NavItem, level: number = 0, parentKey: string = 'root') => {
    // 고유한 key 생성: slug 또는 부모key-title 조합
    const itemKey = item.slug || `${parentKey}-${item.title}`;
    const isExpanded = expandedItems.has(itemKey);

    // active 상태 판별: pathname과 hash 비교
    let isActive = false;
    if (item.slug) {
      const slugParts = item.slug.split('#');
      const slugPath = slugParts[0];
      const slugHash = slugParts[1] ? `#${slugParts[1]}` : '';

      if (slugHash && currentHash) {
        // 둘 다 hash가 있는 경우: 정확히 일치해야 함
        isActive = pathname === `/docs/${slugPath}` && currentHash === slugHash;
      } else if (!slugHash && !currentHash) {
        // 둘 다 hash가 없는 경우: pathname만 일치
        isActive = pathname === `/docs/${slugPath}`;
      } else if (slugHash && !currentHash) {
        // slug에 hash가 있지만 현재 hash가 없는 경우: pathname만 일치하면 약한 매치
        isActive = pathname === `/docs/${slugPath}`;
      }
    }

    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={itemKey} className="nav-item-wrapper">
        <div className={`nav-item ${isActive ? 'active' : ''}`} style={{ paddingLeft: `${level * 16 + 16}px` }}>
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(itemKey);
              }}
              className="expand-button"
              aria-label={isExpanded ? '접기' : '펼치기'}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
          {item.slug ? (
            <Link href={`/docs/${item.slug}`} className="nav-link">
              {item.icon && <span className="nav-icon">{item.icon}</span>}
              <span>{item.title}</span>
            </Link>
          ) : (
            <button className="nav-folder" onClick={() => toggleItem(itemKey)}>
              {item.icon && <span className="nav-icon">{item.icon}</span>}
              <span>{item.title}</span>
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="nav-children">
            {item.children!.map((child) => renderNavItem(child, level + 1, itemKey))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navigation.sections.map((section, sectionIndex) => {
          const sectionKey = section.slug || `section-${sectionIndex}`;
          return (
            <div key={sectionKey} className="nav-section">
              <div className="nav-section-title">
                <span>{section.title}</span>
              </div>
              {section.items.map((item) => renderNavItem(item, 0, sectionKey))}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
