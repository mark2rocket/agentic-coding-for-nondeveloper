'use client';

import { useState } from 'react';

export function ClientServerDiagram() {
  const [hoveredPart, setHoveredPart] = useState<'client' | 'server' | null>(null);

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 클라이언트 (왼쪽) */}
        <g
          onMouseEnter={() => setHoveredPart('client')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer transition-all duration-300"
          style={{
            transform: hoveredPart === 'client' ? 'scale(1.05)' : 'scale(1)',
            transformOrigin: '150px 200px',
          }}
        >
          {/* 클라이언트 박스 */}
          <rect
            x="50"
            y="120"
            width="200"
            height="160"
            rx="16"
            className={`transition-all duration-300 ${
              hoveredPart === 'client'
                ? 'fill-blue-500 dark:fill-blue-600'
                : 'fill-blue-400 dark:fill-blue-500'
            }`}
            opacity="0.9"
          />

          {/* 브라우저 아이콘 */}
          <rect x="90" y="150" width="120" height="80" rx="8" className="fill-white" opacity="0.95" />
          <rect x="90" y="150" width="120" height="20" className="fill-gray-200" />
          <circle cx="105" cy="160" r="4" className="fill-red-400" />
          <circle cx="120" cy="160" r="4" className="fill-yellow-400" />
          <circle cx="135" cy="160" r="4" className="fill-green-400" />

          {/* 텍스트 */}
          <text
            x="150"
            y="260"
            className="fill-white font-bold text-xl"
            textAnchor="middle"
          >
            클라이언트
          </text>
          <text
            x="150"
            y="285"
            className="fill-white text-sm"
            textAnchor="middle"
          >
            (손님 / 브라우저)
          </text>
        </g>

        {/* 양방향 화살표 */}
        <g>
          {/* 요청 화살표 (오른쪽으로) */}
          <defs>
            <marker
              id="arrowhead-right"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" className="fill-green-500" />
            </marker>
          </defs>
          <path
            d="M 260 170 Q 400 150, 540 170"
            className="stroke-green-500 stroke-[3] fill-none"
            markerEnd="url(#arrowhead-right)"
          />
          <text x="400" y="145" className="fill-green-600 dark:fill-green-400 text-sm font-semibold" textAnchor="middle">
            요청 (Request)
          </text>

          {/* 응답 화살표 (왼쪽으로) */}
          <defs>
            <marker
              id="arrowhead-left"
              markerWidth="10"
              markerHeight="10"
              refX="1"
              refY="3"
              orient="auto"
            >
              <polygon points="10 0, 0 3, 10 6" className="fill-purple-500" />
            </marker>
          </defs>
          <path
            d="M 540 230 Q 400 250, 260 230"
            className="stroke-purple-500 stroke-[3] fill-none"
            markerEnd="url(#arrowhead-left)"
          />
          <text x="400" y="270" className="fill-purple-600 dark:fill-purple-400 text-sm font-semibold" textAnchor="middle">
            응답 (Response)
          </text>
        </g>

        {/* 서버 (오른쪽) */}
        <g
          onMouseEnter={() => setHoveredPart('server')}
          onMouseLeave={() => setHoveredPart(null)}
          className="cursor-pointer transition-all duration-300"
          style={{
            transform: hoveredPart === 'server' ? 'scale(1.05)' : 'scale(1)',
            transformOrigin: '650px 200px',
          }}
        >
          {/* 서버 박스 */}
          <rect
            x="550"
            y="120"
            width="200"
            height="160"
            rx="16"
            className={`transition-all duration-300 ${
              hoveredPart === 'server'
                ? 'fill-purple-500 dark:fill-purple-600'
                : 'fill-purple-400 dark:fill-purple-500'
            }`}
            opacity="0.9"
          />

          {/* 서버 아이콘 (스택) */}
          <rect x="610" y="150" width="80" height="20" rx="4" className="fill-white" opacity="0.95" />
          <circle cx="625" cy="160" r="3" className="fill-green-400" />
          <rect x="610" y="175" width="80" height="20" rx="4" className="fill-white" opacity="0.95" />
          <circle cx="625" cy="185" r="3" className="fill-green-400" />
          <rect x="610" y="200" width="80" height="20" rx="4" className="fill-white" opacity="0.95" />
          <circle cx="625" cy="210" r="3" className="fill-green-400" />

          {/* 텍스트 */}
          <text
            x="650"
            y="260"
            className="fill-white font-bold text-xl"
            textAnchor="middle"
          >
            서버
          </text>
          <text
            x="650"
            y="285"
            className="fill-white text-sm"
            textAnchor="middle"
          >
            (주방 / 24시간 컴퓨터)
          </text>
        </g>
      </svg>

      {/* 설명 */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">📱 클라이언트</h4>
          <p className="text-gray-700 dark:text-gray-300">
            사용자가 보는 화면 (웹브라우저, 앱)
          </p>
        </div>
        <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">🖥️ 서버</h4>
          <p className="text-gray-700 dark:text-gray-300">
            데이터를 처리하고 응답하는 컴퓨터
          </p>
        </div>
      </div>
    </div>
  );
}
