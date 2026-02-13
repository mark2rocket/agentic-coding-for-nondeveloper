'use client';

import { useState } from 'react';

export function ProcessFlowDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="my-8">
      <svg viewBox="0 0 900 700" className="w-full h-auto">
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
          </marker>
          <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
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

        {/* 1. 기획 단계 */}
        <g onMouseEnter={() => setHoveredNode('planning')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="300" y="30" width="300" height="60" rx="8" fill="#60a5fa" opacity={hoveredNode === 'planning' ? 1 : 0.9} filter={hoveredNode === 'planning' ? 'url(#glow)' : ''} />
          <text x="450" y="65" textAnchor="middle" fill="white" fontSize="18" fontWeight="600">
            💡 1. 기획 및 요구사항 정의
          </text>
        </g>

        {/* 명확한가? */}
        <line x1="450" y1="90" x2="450" y2="140" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
        <g onMouseEnter={() => setHoveredNode('check1')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <polygon points="450,140 550,180 450,220 350,180" fill="#8b5cf6" opacity={hoveredNode === 'check1' ? 1 : 0.9} filter={hoveredNode === 'check1' ? 'url(#glow)' : ''} />
          <text x="450" y="185" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">명확한가?</text>
        </g>

        {/* No -> 구체화 */}
        <line x1="350" y1="180" x2="150" y2="180" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
        <text x="250" y="170" fill="#ef4444" fontSize="14" fontWeight="600">No</text>

        <g onMouseEnter={() => setHoveredNode('refine')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="20" y="140" width="130" height="80" rx="8" fill="#f97316" opacity={hoveredNode === 'refine' ? 1 : 0.9} filter={hoveredNode === 'refine' ? 'url(#glow)' : ''} />
          <text x="85" y="165" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">구체화하기</text>
          <text x="85" y="185" textAnchor="middle" fill="white" fontSize="11">기능 명세</text>
          <text x="85" y="200" textAnchor="middle" fill="white" fontSize="11">디자인 스타일</text>
          <text x="85" y="215" textAnchor="middle" fill="white" fontSize="11">사용자 시나리오</text>
        </g>

        {/* 구체화 -> 기획 */}
        <path d="M 85 140 Q 85 60 300 60" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrow-red)" />

        {/* Yes -> 생성 */}
        <line x1="550" y1="180" x2="700" y2="180" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
        <text x="620" y="170" fill="#10b981" fontSize="14" fontWeight="600">Yes</text>

        <g onMouseEnter={() => setHoveredNode('generate')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="700" y="140" width="180" height="80" rx="8" fill="#fbbf24" opacity={hoveredNode === 'generate' ? 1 : 0.9} filter={hoveredNode === 'generate' ? 'url(#glow)' : ''} />
          <text x="790" y="170" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">🤖 2. 생성 및 구현</text>
          <text x="790" y="195" textAnchor="middle" fill="white" fontSize="13">AI가 코드 작성</text>
        </g>

        {/* 생성 -> 검증 */}
        <line x1="790" y1="220" x2="790" y2="280" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />

        <g onMouseEnter={() => setHoveredNode('verify')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="700" y="280" width="180" height="80" rx="8" fill="#ec4899" opacity={hoveredNode === 'verify' ? 1 : 0.9} filter={hoveredNode === 'verify' ? 'url(#glow)' : ''} />
          <text x="790" y="310" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">🧪 3. 검증 및 수정</text>
          <text x="790" y="335" textAnchor="middle" fill="white" fontSize="13">실행 & 테스트</text>
        </g>

        {/* 검증 -> 완성도? */}
        <line x1="790" y1="360" x2="790" y2="420" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />

        <g onMouseEnter={() => setHoveredNode('check2')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <polygon points="790,420 890,460 790,500 690,460" fill="#8b5cf6" opacity={hoveredNode === 'check2' ? 1 : 0.9} filter={hoveredNode === 'check2' ? 'url(#glow)' : ''} />
          <text x="790" y="465" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">완성도?</text>
        </g>

        {/* 에러 발생 */}
        <line x1="690" y1="440" x2="550" y2="400" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
        <g onMouseEnter={() => setHoveredNode('error')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="450" y="370" width="100" height="60" rx="8" fill="#f87171" opacity={hoveredNode === 'error' ? 1 : 0.9} filter={hoveredNode === 'error' ? 'url(#glow)' : ''} />
          <text x="500" y="395" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">에러 발생</text>
          <text x="500" y="415" textAnchor="middle" fill="white" fontSize="11">로그 복사</text>
        </g>

        {/* 기능 부족 */}
        <line x1="690" y1="460" x2="550" y2="480" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrow-red)" />
        <g onMouseEnter={() => setHoveredNode('feature')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="450" y="450" width="100" height="60" rx="8" fill="#fb923c" opacity={hoveredNode === 'feature' ? 1 : 0.9} filter={hoveredNode === 'feature' ? 'url(#glow)' : ''} />
          <text x="500" y="475" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">기능 부족</text>
          <text x="500" y="495" textAnchor="middle" fill="white" fontSize="11">추가 요구사항</text>
        </g>

        {/* 디자인 수정 */}
        <line x1="690" y1="480" x2="550" y2="560" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow-red)" />
        <g onMouseEnter={() => setHoveredNode('design')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="450" y="530" width="100" height="60" rx="8" fill="#fbbf24" opacity={hoveredNode === 'design' ? 1 : 0.9} filter={hoveredNode === 'design' ? 'url(#glow)' : ''} />
          <text x="500" y="555" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">디자인 수정</text>
          <text x="500" y="575" textAnchor="middle" fill="white" fontSize="11">UI/UX 피드백</text>
        </g>

        {/* 피드백들 -> 생성 */}
        <path d="M 450 400 Q 350 300 700 180" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow-red)" />
        <path d="M 450 480 Q 350 340 700 180" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrow-red)" />
        <path d="M 450 560 Q 350 380 700 180" stroke="#fbbf24" strokeWidth="2" fill="none" markerEnd="url(#arrow-red)" />

        {/* 완료 -> 배포 */}
        <line x1="790" y1="500" x2="790" y2="560" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />
        <text x="810" y="530" fill="#10b981" fontSize="14" fontWeight="600">완료!</text>

        <g onMouseEnter={() => setHoveredNode('deploy')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="700" y="560" width="180" height="60" rx="8" fill="#10b981" opacity={hoveredNode === 'deploy' ? 1 : 0.9} filter={hoveredNode === 'deploy' ? 'url(#glow)' : ''} />
          <text x="790" y="585" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">🎉 배포</text>
          <text x="790" y="605" textAnchor="middle" fill="white" fontSize="13">Deploy</text>
        </g>

        {/* 배포 -> 완료 */}
        <line x1="790" y1="620" x2="790" y2="650" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-green)" />

        <g onMouseEnter={() => setHoveredNode('done')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="700" y="650" width="180" height="40" rx="8" fill="#22c55e" opacity={hoveredNode === 'done' ? 1 : 0.9} filter={hoveredNode === 'done' ? 'url(#glow)' : ''} />
          <text x="790" y="675" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">✅ 프로덕션 완료</text>
        </g>
      </svg>

      {/* 범례 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">기획 (사람)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">구현 (AI)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-pink-500 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">검증 (협업)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">완료</span>
        </div>
      </div>
    </div>
  );
}
