'use client';

import { useState } from 'react';

export function FrontendBackendDiagram() {
  const [activeLayer, setActiveLayer] = useState<'frontend' | 'backend' | 'database' | null>(null);

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
      <svg
        viewBox="0 0 900 500"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 프론트엔드 레이어 */}
        <g
          onMouseEnter={() => setActiveLayer('frontend')}
          onMouseLeave={() => setActiveLayer(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <rect
            x="50"
            y="100"
            width="250"
            height="300"
            rx="16"
            className={`transition-all duration-300 ${
              activeLayer === 'frontend'
                ? 'fill-green-500 dark:fill-green-600'
                : 'fill-green-400 dark:fill-green-500'
            }`}
            opacity="0.15"
            stroke={activeLayer === 'frontend' ? '#22c55e' : '#86efac'}
            strokeWidth="3"
          />

          {/* UI 요소들 */}
          <g transform="translate(80, 130)">
            {/* 버튼 */}
            <rect x="0" y="0" width="80" height="30" rx="6" className="fill-blue-400" />
            <text x="40" y="20" className="fill-white text-sm font-semibold" textAnchor="middle">버튼</text>

            {/* 입력 필드 */}
            <rect x="100" y="0" width="100" height="30" rx="6" className="fill-white stroke-gray-300" strokeWidth="2" />
            <text x="150" y="20" className="fill-gray-400 text-sm" textAnchor="middle">입력...</text>

            {/* 카드 */}
            <rect x="0" y="50" width="190" height="80" rx="8" className="fill-white dark:fill-gray-100 shadow-lg" />
            <rect x="10" y="60" width="60" height="60" rx="4" className="fill-gray-200" />
            <line x1="80" y1="70" x2="170" y2="70" className="stroke-gray-300" strokeWidth="3" />
            <line x1="80" y1="85" x2="150" y2="85" className="stroke-gray-200" strokeWidth="3" />
            <line x1="80" y1="100" x2="160" y2="100" className="stroke-gray-200" strokeWidth="3" />

            {/* 이미지 */}
            <rect x="0" y="150" width="190" height="100" rx="8" className="fill-gradient-to-br from-purple-200 to-pink-200" />
            <circle cx="95" cy="190" r="20" className="fill-yellow-300" />
            <polygon points="40,220 70,180 100,220" className="fill-green-300" />
            <polygon points="100,220 130,190 160,220" className="fill-green-400" />
          </g>

          <text x="175" y="80" className="fill-green-700 dark:fill-green-400 font-bold text-2xl" textAnchor="middle">
            프론트엔드
          </text>
          <text x="175" y="430" className="fill-gray-600 dark:fill-gray-400 text-sm" textAnchor="middle">
            HTML / CSS / JavaScript
          </text>
        </g>

        {/* 화살표 */}
        <g>
          <defs>
            <marker id="arrow-right" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" className="fill-orange-500" />
            </marker>
            <marker id="arrow-left" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
              <polygon points="10 0, 0 3, 10 6" className="fill-blue-500" />
            </marker>
          </defs>

          <path
            d="M 310 220 L 390 220"
            className="stroke-orange-500 stroke-[3]"
            markerEnd="url(#arrow-right)"
          />
          <text x="350" y="210" className="fill-orange-600 dark:fill-orange-400 text-xs font-semibold" textAnchor="middle">
            API 호출
          </text>

          <path
            d="M 390 280 L 310 280"
            className="stroke-blue-500 stroke-[3]"
            markerEnd="url(#arrow-left)"
          />
          <text x="350" y="300" className="fill-blue-600 dark:fill-blue-400 text-xs font-semibold" textAnchor="middle">
            데이터 응답
          </text>
        </g>

        {/* 백엔드 레이어 */}
        <g
          onMouseEnter={() => setActiveLayer('backend')}
          onMouseLeave={() => setActiveLayer(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <rect
            x="400"
            y="100"
            width="250"
            height="300"
            rx="16"
            className={`transition-all duration-300 ${
              activeLayer === 'backend'
                ? 'fill-orange-500 dark:fill-orange-600'
                : 'fill-orange-400 dark:fill-orange-500'
            }`}
            opacity="0.15"
            stroke={activeLayer === 'backend' ? '#f97316' : '#fb923c'}
            strokeWidth="3"
          />

          {/* 서버 코드 표현 */}
          <g transform="translate(420, 140)">
            {/* 코드 블록 */}
            <rect x="0" y="0" width="210" height="220" rx="8" className="fill-gray-800 dark:fill-gray-900" />

            {/* 코드 라인들 */}
            <line x1="15" y1="25" x2="120" y2="25" className="stroke-green-400" strokeWidth="3" />
            <line x1="15" y1="45" x2="80" y2="45" className="stroke-blue-400" strokeWidth="3" />
            <line x1="30" y1="65" x2="150" y2="65" className="stroke-purple-400" strokeWidth="3" />
            <line x1="30" y1="85" x2="100" y2="85" className="stroke-yellow-400" strokeWidth="3" />
            <line x1="30" y1="105" x2="130" y2="105" className="stroke-pink-400" strokeWidth="3" />
            <line x1="15" y1="125" x2="90" y2="125" className="stroke-blue-400" strokeWidth="3" />

            {/* 함수 아이콘 */}
            <circle cx="25" cy="160" r="8" className="fill-orange-400" />
            <text x="40" y="165" className="fill-orange-300 text-xs font-mono">function()</text>

            <circle cx="25" cy="185" r="8" className="fill-green-400" />
            <text x="40" y="190" className="fill-green-300 text-xs font-mono">if/else</text>

            <circle cx="25" cy="210" r="8" className="fill-blue-400" />
            <text x="40" y="215" className="fill-blue-300 text-xs font-mono">return</text>
          </g>

          <text x="525" y="80" className="fill-orange-700 dark:fill-orange-400 font-bold text-2xl" textAnchor="middle">
            백엔드
          </text>
          <text x="525" y="430" className="fill-gray-600 dark:fill-gray-400 text-sm" textAnchor="middle">
            Python / Node.js / Java
          </text>
        </g>

        {/* 화살표 (백엔드 → 데이터베이스) */}
        <g>
          <path
            d="M 660 220 L 720 220"
            className="stroke-purple-500 stroke-[3]"
            markerEnd="url(#arrow-db)"
          />
          <defs>
            <marker id="arrow-db" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" className="fill-purple-500" />
            </marker>
            <marker id="arrow-db-left" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
              <polygon points="10 0, 0 3, 10 6" className="fill-indigo-500" />
            </marker>
          </defs>
          <text x="690" y="210" className="fill-purple-600 dark:fill-purple-400 text-xs font-semibold" textAnchor="middle">
            저장
          </text>

          <path
            d="M 720 280 L 660 280"
            className="stroke-indigo-500 stroke-[3]"
            markerEnd="url(#arrow-db-left)"
          />
          <text x="690" y="300" className="fill-indigo-600 dark:fill-indigo-400 text-xs font-semibold" textAnchor="middle">
            조회
          </text>
        </g>

        {/* 데이터베이스 */}
        <g
          onMouseEnter={() => setActiveLayer('database')}
          onMouseLeave={() => setActiveLayer(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <ellipse cx="800" cy="180" rx="60" ry="20" className="fill-indigo-400 dark:fill-indigo-500" opacity="0.9" />
          <rect x="740" y="180" width="120" height="80" className="fill-indigo-400 dark:fill-indigo-500" opacity="0.9" />
          <ellipse cx="800" cy="260" rx="60" ry="20" className="fill-indigo-500 dark:fill-indigo-600" opacity="0.9" />
          <ellipse cx="800" cy="180" rx="60" ry="20" className="fill-indigo-300 dark:fill-indigo-400" opacity="0.9" />

          {/* DB 라인들 */}
          <line x1="760" y1="210" x2="840" y2="210" className="stroke-white" strokeWidth="2" opacity="0.5" />
          <line x1="760" y1="230" x2="840" y2="230" className="stroke-white" strokeWidth="2" opacity="0.5" />

          <text x="800" y="310" className="fill-indigo-700 dark:fill-indigo-400 font-bold text-lg" textAnchor="middle">
            데이터베이스
          </text>
        </g>
      </svg>

      {/* 설명 카드 */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
        <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">🎨 프론트엔드</h4>
          <p className="text-gray-700 dark:text-gray-300 text-xs">
            사용자가 보는 화면 디자인과 상호작용
          </p>
        </div>
        <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
          <h4 className="font-bold text-orange-900 dark:text-orange-300 mb-2">⚙️ 백엔드</h4>
          <p className="text-gray-700 dark:text-gray-300 text-xs">
            비즈니스 로직, 계산, 처리
          </p>
        </div>
        <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
          <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">💾 데이터베이스</h4>
          <p className="text-gray-700 dark:text-gray-300 text-xs">
            데이터 저장 및 관리
          </p>
        </div>
      </div>
    </div>
  );
}
