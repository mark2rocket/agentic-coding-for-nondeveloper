'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Fuse, { FuseResult } from 'fuse.js';
import { Search, X, FileText } from 'lucide-react';
import type { SearchItem } from '@/lib/search';

interface SearchBarProps {
  searchIndex: SearchItem[];
}

// 추천 검색어 목록
const SUGGESTED_SEARCHES = [
  '에이전트',
  'MCP',
  '튜토리얼',
  'Hook',
  'Subagent',
  '플랜 모드',
  'Ultrawork',
  'Skill',
];

export function SearchBar({ searchIndex }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<FuseResult<SearchItem>[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Fuse.js 설정 (memoized)
  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'content', weight: 1 },
          { name: 'description', weight: 1.5 },
        ],
        threshold: 0.3,
        includeScore: true,
        includeMatches: true,
        minMatchCharLength: 2,
      }),
    [searchIndex]
  );

  // 최근 검색어 로드
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // 최근 검색어 저장
  const saveRecentSearch = (searchQuery: string) => {
    const updated = [searchQuery, ...recentSearches.filter((s) => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recent-searches', JSON.stringify(updated));
  };

  // 검색 실행 (debounced)
  const performSearch = useCallback(
    (searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([]);
        return;
      }

      const searchResults = fuse.search(searchQuery);
      setResults(searchResults.slice(0, 10)); // 상위 10개만
      setSelectedIndex(0);
    },
    [fuse]
  );

  // 검색어 변경 시 (200ms debounce)
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, performSearch]);

  // 키보드 단축키 (Cmd+K 또는 Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }

      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }

      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter' && results[selectedIndex]) {
          e.preventDefault();
          handleResultClick(results[selectedIndex].item);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // 결과 클릭 시
  const handleResultClick = (item: SearchItem) => {
    saveRecentSearch(query);
    router.push(`/docs/${item.slug}`);
    setIsOpen(false);
    setQuery('');
  };

  // 추천 검색어 클릭 시
  const handleSuggestedClick = (suggested: string) => {
    setQuery(suggested);
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node) &&
        !inputRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full max-w-md">
      {/* 검색 입력창 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="검색... (⌘K)"
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* 검색 결과 */}
      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
        >
          {results.map((result, index) => (
            <button
              key={result.item.id}
              onClick={() => handleResultClick(result.item)}
              className={`w-full text-left px-4 py-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                index === selectedIndex ? 'bg-blue-50 dark:bg-blue-900/30' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {result.item.title}
                  </div>
                  <div className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {result.item.content}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {result.item.section}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 검색어 입력했지만 결과 없음 */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
        >
          <p className="text-gray-500 text-center">검색 결과가 없습니다.</p>
        </div>
      )}

      {/* 추천 검색어 (검색창이 비어있을 때) */}
      {isOpen && query.length === 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
        >
          {/* 최근 검색어 */}
          {recentSearches.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                최근 검색
              </h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((recent, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedClick(recent)}
                    className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    🕐 {recent}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 추천 검색어 */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">
              추천 검색어
            </h3>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_SEARCHES.map((suggested, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedClick(suggested)}
                  className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-full text-blue-700 dark:text-blue-400 transition-colors"
                >
                  🔍 {suggested}
                </button>
              ))}
            </div>
          </div>

          {/* 팁 */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              💡 <span className="font-medium">Tip:</span> ⌘K 또는 Ctrl+K로 빠르게 검색창을 열 수 있습니다
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
