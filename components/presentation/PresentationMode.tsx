'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { parseSlides, calculateProgress, formatTime, Slide } from '@/lib/presentation';

// 간단한 마크다운 렌더링 (클라이언트 사이드)
function SimpleMarkdown({ content }: { content: string }) {
  // 기본적인 마크다운 변환
  const html = content
    .replace(/### (.*?)$/gm, '<h3 class="text-3xl font-bold mt-6 mb-4">$1</h3>')
    .replace(/## (.*?)$/gm, '<h2 class="text-4xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-blue-600">$1</code>')
    .replace(/^- (.*?)$/gm, '<li class="ml-6 mb-2">• $1</li>')
    .replace(/^\d+\. (.*?)$/gm, '<li class="ml-6 mb-2">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/```[\s\S]*?```/g, (match) => {
      const code = match.replace(/```.*?\n/, '').replace(/```$/, '');
      return `<pre class="bg-gray-100 p-4 rounded my-4 overflow-x-auto"><code>${code}</code></pre>`;
    });

  return (
    <div
      className="prose-presentation"
      dangerouslySetInnerHTML={{ __html: `<p class="mb-4">${html}</p>` }}
    />
  );
}

interface PresentationModeProps {
  markdown: string;
  documentTitle: string;
  onClose: () => void;
}

export function PresentationMode({ markdown, documentTitle, onClose }: PresentationModeProps) {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // 슬라이드 파싱
  useEffect(() => {
    const parsedSlides = parseSlides(markdown, documentTitle);
    setSlides(parsedSlides);
  }, [markdown, documentTitle]);

  // 타이머
  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          goToPrevious();
          break;
        case 'Escape':
          onClose();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentIndex(slides.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, currentIndex, onClose]);

  const goToNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, slides.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const progress = calculateProgress(currentIndex, slides.length);
  const currentSlide = slides[currentIndex];

  if (!currentSlide) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <p className="text-gray-500">슬라이드를 로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* 상단 컨트롤 바 */}
      <div className="h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded transition-colors"
            title="발표 모드 종료 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-sm font-medium">{documentTitle}</div>
        </div>

        <div className="flex items-center gap-6">
          {/* 타이머 */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">{formatTime(timer)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
            >
              {isTimerRunning ? '일시정지' : '재개'}
            </button>
          </div>

          {/* 슬라이드 번호 */}
          <div className="text-sm font-medium">
            {currentIndex + 1} / {slides.length}
          </div>

          {/* 진행률 */}
          <div className="flex items-center gap-2">
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        </div>
      </div>

      {/* 슬라이드 콘텐츠 */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-5xl w-full">
            {/* 슬라이드 제목 */}
            <h1 className="text-5xl font-bold mb-8 text-gray-900">
              {currentSlide.title}
            </h1>

            {/* 슬라이드 내용 */}
            <div className="prose prose-lg max-w-none">
              <SimpleMarkdown content={currentSlide.content} />
            </div>
          </div>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        title="이전 슬라이드 (←)"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={goToNext}
        disabled={currentIndex === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        title="다음 슬라이드 (→)"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* 하단 인디케이터 */}
      <div className="h-16 bg-gray-100 flex items-center justify-center gap-2 px-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-blue-600'
                : index < currentIndex
                ? 'w-2 bg-gray-400'
                : 'w-2 bg-gray-300'
            }`}
            title={`슬라이드 ${index + 1}: ${slide.title}`}
          />
        ))}
      </div>

      {/* 단축키 힌트 (5초 후 사라짐) */}
      {currentIndex === 0 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white px-6 py-3 rounded-lg text-sm animate-fade-out">
          <p>
            <kbd className="px-2 py-1 bg-gray-800 rounded">→</kbd> 다음 |{' '}
            <kbd className="px-2 py-1 bg-gray-800 rounded">←</kbd> 이전 |{' '}
            <kbd className="px-2 py-1 bg-gray-800 rounded">Esc</kbd> 종료
          </p>
        </div>
      )}
    </div>
  );
}
