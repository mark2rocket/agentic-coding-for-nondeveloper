'use client';

import { useState } from 'react';

export function SequenceDiagram() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const participants = [
    { id: 'user', label: '👤 사용자', x: 100 },
    { id: 'manager', label: '🎯 매니저', x: 250 },
    { id: 'planner', label: '📋 Planner', x: 400 },
    { id: 'architect', label: '🏛️ Architect', x: 550 },
    { id: 'executor', label: '⚙️ Executor', x: 700 },
    { id: 'reviewer', label: '🔍 Reviewer', x: 850 },
  ];

  const messages = [
    { from: 0, to: 1, y: 100, label: '"To-Do 앱 만들어줘"', type: 'request' },
    { from: 1, to: 2, y: 140, label: '기획 요청', type: 'request' },
    { from: 2, to: 1, y: 180, label: '✅ 기획서 (기능 명세)', type: 'response' },
    { from: 1, to: 3, y: 220, label: '설계 요청 + 기획서', type: 'request' },
    { from: 3, to: 1, y: 260, label: '✅ 아키텍처 (파일 구조)', type: 'response' },
    { from: 1, to: 4, y: 300, label: '구현 요청 + 설계도', type: 'request' },
    { from: 4, to: 1, y: 340, label: '✅ 코드 (10개 파일)', type: 'response' },
    { from: 1, to: 5, y: 380, label: '검증 요청 + 코드', type: 'request' },
    { from: 5, to: 1, y: 420, label: '❌ 3개 파일 에러 발견', type: 'error' },
    { from: 1, to: 4, y: 460, label: '수정 요청 + 에러 리스트', type: 'request' },
    { from: 4, to: 1, y: 500, label: '✅ 수정 완료', type: 'response' },
    { from: 1, to: 5, y: 540, label: '재검증 요청', type: 'request' },
    { from: 5, to: 1, y: 580, label: '✅ 모두 통과', type: 'response' },
    { from: 1, to: 0, y: 620, label: '🎉 완성된 To-Do 앱', type: 'final' },
  ];

  return (
    <div className="my-8 overflow-x-auto">
      <svg viewBox="0 0 1000 700" className="w-full h-auto min-w-[900px]">
        <defs>
          <marker id="seq-arrow-request" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
          </marker>
          <marker id="seq-arrow-response" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="seq-arrow-error" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#ef4444" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 참가자 헤더 */}
        {participants.map((p, i) => (
          <g key={p.id}>
            <rect
              x={p.x - 60}
              y={20}
              width="120"
              height="50"
              rx="8"
              fill="#6366f1"
              opacity="0.9"
            />
            <text
              x={p.x}
              y={50}
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="600"
            >
              {p.label}
            </text>
            {/* 생명선 */}
            <line
              x1={p.x}
              y1={70}
              x2={p.x}
              y2={660}
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </g>
        ))}

        {/* 메시지들 */}
        {messages.map((msg, i) => {
          const fromX = participants[msg.from].x;
          const toX = participants[msg.to].x;
          const isRequest = msg.type === 'request';
          const isError = msg.type === 'error';
          const isFinal = msg.type === 'final';

          let strokeColor = '#10b981'; // response
          let markerId = 'seq-arrow-response';

          if (isRequest) {
            strokeColor = '#6366f1';
            markerId = 'seq-arrow-request';
          } else if (isError) {
            strokeColor = '#ef4444';
            markerId = 'seq-arrow-error';
          } else if (isFinal) {
            strokeColor = '#22c55e';
            markerId = 'seq-arrow-response';
          }

          const isHovered = hoveredStep === i;

          return (
            <g
              key={i}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
              className="cursor-pointer"
              opacity={hoveredStep !== null && !isHovered ? 0.3 : 1}
            >
              <line
                x1={fromX}
                y1={msg.y}
                x2={toX}
                y2={msg.y}
                stroke={strokeColor}
                strokeWidth={isHovered ? 3 : 2}
                markerEnd={`url(#${markerId})`}
                filter={isHovered ? 'url(#glow)' : ''}
              />
              <rect
                x={Math.min(fromX, toX) + Math.abs(toX - fromX) / 2 - msg.label.length * 3}
                y={msg.y - 20}
                width={msg.label.length * 6}
                height="20"
                fill="white"
                fillOpacity="0.95"
                stroke={strokeColor}
                strokeWidth="1"
                rx="4"
              />
              <text
                x={(fromX + toX) / 2}
                y={msg.y - 5}
                textAnchor="middle"
                fill={strokeColor}
                fontSize="11"
                fontWeight="600"
              >
                {msg.label}
              </text>
              {/* 순서 번호 */}
              <circle
                cx={fromX}
                cy={msg.y}
                r="12"
                fill={strokeColor}
                opacity="0.9"
              />
              <text
                x={fromX}
                y={msg.y + 4}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontWeight="600"
              >
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 범례 */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <svg width="40" height="10">
            <line x1="0" y1="5" x2="40" y2="5" stroke="#6366f1" strokeWidth="2" markerEnd="url(#seq-arrow-request)" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">요청 (Request)</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="40" height="10">
            <line x1="0" y1="5" x2="40" y2="5" stroke="#10b981" strokeWidth="2" markerEnd="url(#seq-arrow-response)" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">응답 성공 (✅)</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="40" height="10">
            <line x1="0" y1="5" x2="40" y2="5" stroke="#ef4444" strokeWidth="2" markerEnd="url(#seq-arrow-error)" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">에러 (❌)</span>
        </div>
      </div>
    </div>
  );
}
