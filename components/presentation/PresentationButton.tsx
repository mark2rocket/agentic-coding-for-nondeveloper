'use client';

import { useState } from 'react';
import { Presentation } from 'lucide-react';
import { PresentationMode } from './PresentationMode';

interface PresentationButtonProps {
  markdown: string;
  documentTitle: string;
}

export function PresentationButton({ markdown, documentTitle }: PresentationButtonProps) {
  const [isPresenting, setIsPresenting] = useState(false);

  const handleStartPresentation = () => {
    setIsPresenting(true);
    // 전체화면 요청
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('전체화면 모드 실패:', err);
      });
    }
  };

  const handleEndPresentation = () => {
    setIsPresenting(false);
    // 전체화면 종료
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.warn('전체화면 종료 실패:', err);
      });
    }
  };

  return (
    <>
      <button
        onClick={handleStartPresentation}
        className="fixed right-6 bottom-6 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all hover:scale-110 z-40 group"
        title="발표 모드 시작 (P)"
      >
        <Presentation className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          발표 모드
        </span>
      </button>

      {isPresenting && (
        <PresentationMode
          markdown={markdown}
          documentTitle={documentTitle}
          onClose={handleEndPresentation}
        />
      )}
    </>
  );
}
