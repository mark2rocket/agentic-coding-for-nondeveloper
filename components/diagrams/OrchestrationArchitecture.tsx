'use client';

import { useState } from 'react';

export function OrchestrationArchitecture() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="my-8">
      <svg viewBox="0 0 900 750" className="w-full h-auto">
        <defs>
          <marker id="arrow-solid" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
          </marker>
          <marker id="arrow-dotted" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 사용자 레이어 */}
        <rect x="50" y="30" width="800" height="80" rx="8" fill="#60a5fa" fillOpacity="0.1" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
        <text x="70" y="55" fill="#60a5fa" fontSize="14" fontWeight="600">👤 사용자 레이어</text>

        <g onMouseEnter={() => setHoveredNode('user')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="350" y="50" width="200" height="50" rx="8" fill="#60a5fa" opacity={hoveredNode === 'user' ? 1 : 0.9} filter={hoveredNode === 'user' ? 'url(#glow)' : ''} />
          <text x="450" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">사용자</text>
          <text x="450" y="95" textAnchor="middle" fill="white" fontSize="12">"블로그 만들어줘"</text>
        </g>

        {/* 매니저 레이어 */}
        <rect x="50" y="150" width="800" height="80" rx="8" fill="#f87171" fillOpacity="0.1" stroke="#f87171" strokeWidth="2" strokeDasharray="5,5" />
        <text x="70" y="175" fill="#f87171" fontSize="14" fontWeight="600">🎯 매니저 레이어</text>

        <g onMouseEnter={() => setHoveredNode('manager')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="325" y="170" width="250" height="50" rx="8" fill="#f87171" opacity={hoveredNode === 'manager' ? 1 : 0.9} filter={hoveredNode === 'manager' ? 'url(#glow)' : ''} />
          <text x="450" y="195" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">매니저 에이전트</text>
          <text x="450" y="215" textAnchor="middle" fill="white" fontSize="12">Task 분배 & 조율</text>
        </g>

        {/* 사용자 -> 매니저 */}
        <line x1="450" y1="100" x2="450" y2="170" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />

        {/* 작업 에이전트 레이어 */}
        <rect x="50" y="270" width="800" height="220" rx="8" fill="#fbbf24" fillOpacity="0.1" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,5" />
        <text x="70" y="295" fill="#fbbf24" fontSize="14" fontWeight="600">🤖 작업 에이전트 레이어</text>

        {/* Planner */}
        <g onMouseEnter={() => setHoveredNode('planner')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="70" y="310" width="130" height="70" rx="8" fill="#fbbf24" opacity={hoveredNode === 'planner' ? 1 : 0.9} filter={hoveredNode === 'planner' ? 'url(#glow)' : ''} />
          <text x="135" y="335" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">📋 Planner</text>
          <text x="135" y="355" textAnchor="middle" fill="white" fontSize="11">기획 &</text>
          <text x="135" y="370" textAnchor="middle" fill="white" fontSize="11">요구사항</text>
        </g>

        {/* Architect */}
        <g onMouseEnter={() => setHoveredNode('architect')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="220" y="310" width="130" height="70" rx="8" fill="#fbbf24" opacity={hoveredNode === 'architect' ? 1 : 0.9} filter={hoveredNode === 'architect' ? 'url(#glow)' : ''} />
          <text x="285" y="335" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">🏛️ Architect</text>
          <text x="285" y="355" textAnchor="middle" fill="white" fontSize="11">구조</text>
          <text x="285" y="370" textAnchor="middle" fill="white" fontSize="11">설계</text>
        </g>

        {/* Executor */}
        <g onMouseEnter={() => setHoveredNode('executor')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="370" y="310" width="130" height="70" rx="8" fill="#fbbf24" opacity={hoveredNode === 'executor' ? 1 : 0.9} filter={hoveredNode === 'executor' ? 'url(#glow)' : ''} />
          <text x="435" y="335" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">⚙️ Executor</text>
          <text x="435" y="355" textAnchor="middle" fill="white" fontSize="11">코드</text>
          <text x="435" y="370" textAnchor="middle" fill="white" fontSize="11">작성</text>
        </g>

        {/* Reviewer */}
        <g onMouseEnter={() => setHoveredNode('reviewer')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="520" y="310" width="130" height="70" rx="8" fill="#10b981" opacity={hoveredNode === 'reviewer' ? 1 : 0.9} filter={hoveredNode === 'reviewer' ? 'url(#glow)' : ''} />
          <text x="585" y="335" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">🔍 Reviewer</text>
          <text x="585" y="355" textAnchor="middle" fill="white" fontSize="11">코드</text>
          <text x="585" y="370" textAnchor="middle" fill="white" fontSize="11">검증</text>
        </g>

        {/* Tester */}
        <g onMouseEnter={() => setHoveredNode('tester')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="670" y="310" width="130" height="70" rx="8" fill="#10b981" opacity={hoveredNode === 'tester' ? 1 : 0.9} filter={hoveredNode === 'tester' ? 'url(#glow)' : ''} />
          <text x="735" y="335" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">🧪 Tester</text>
          <text x="735" y="355" textAnchor="middle" fill="white" fontSize="11">테스트</text>
          <text x="735" y="370" textAnchor="middle" fill="white" fontSize="11">실행</text>
        </g>

        {/* 매니저 -> 작업 에이전트들 */}
        <line x1="380" y1="220" x2="135" y2="310" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="420" y1="220" x2="285" y2="310" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="450" y1="220" x2="435" y2="310" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="480" y1="220" x2="585" y2="310" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="520" y1="220" x2="735" y2="310" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />

        {/* 작업 흐름 */}
        <line x1="200" y1="345" x2="220" y2="345" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-dotted)" />
        <text x="210" y="335" textAnchor="middle" fill="#94a3b8" fontSize="10">기획서</text>

        <line x1="350" y1="345" x2="370" y2="345" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow-dotted)" />
        <text x="360" y="335" textAnchor="middle" fill="#94a3b8" fontSize="10">설계도</text>

        <line x1="500" y1="345" x2="520" y2="345" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <text x="510" y="335" textAnchor="middle" fill="#6366f1" fontSize="10">코드</text>

        {/* Reviewer -> Executor 피드백 */}
        <path d="M 585 380 Q 510 420 435 380" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" fill="none" markerEnd="url(#arrow-dotted)" />
        <text x="510" y="415" textAnchor="middle" fill="#94a3b8" fontSize="10">피드백</text>

        {/* Reviewer -> Tester */}
        <line x1="650" y1="345" x2="670" y2="345" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <text x="660" y="335" textAnchor="middle" fill="#6366f1" fontSize="10">승인</text>

        {/* 도구 레이어 */}
        <rect x="50" y="530" width="800" height="180" rx="8" fill="#8b5cf6" fillOpacity="0.1" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
        <text x="70" y="555" fill="#8b5cf6" fontSize="14" fontWeight="600">📦 도구 레이어</text>

        {/* Git */}
        <g onMouseEnter={() => setHoveredNode('git')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="120" y="580" width="100" height="60" rx="8" fill="#8b5cf6" opacity={hoveredNode === 'git' ? 1 : 0.9} filter={hoveredNode === 'git' ? 'url(#glow)' : ''} />
          <text x="170" y="605" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Git</text>
          <text x="170" y="625" textAnchor="middle" fill="white" fontSize="11">버전관리</text>
        </g>

        {/* NPM */}
        <g onMouseEnter={() => setHoveredNode('npm')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="280" y="580" width="100" height="60" rx="8" fill="#8b5cf6" opacity={hoveredNode === 'npm' ? 1 : 0.9} filter={hoveredNode === 'npm' ? 'url(#glow)' : ''} />
          <text x="330" y="605" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">NPM</text>
          <text x="330" y="625" textAnchor="middle" fill="white" fontSize="11">패키지 설치</text>
        </g>

        {/* Build */}
        <g onMouseEnter={() => setHoveredNode('build')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="440" y="580" width="100" height="60" rx="8" fill="#8b5cf6" opacity={hoveredNode === 'build' ? 1 : 0.9} filter={hoveredNode === 'build' ? 'url(#glow)' : ''} />
          <text x="490" y="605" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Build</text>
          <text x="490" y="625" textAnchor="middle" fill="white" fontSize="11">빌드 시스템</text>
        </g>

        {/* Deploy */}
        <g onMouseEnter={() => setHoveredNode('deploy')} onMouseLeave={() => setHoveredNode(null)} className="cursor-pointer">
          <rect x="600" y="580" width="100" height="60" rx="8" fill="#8b5cf6" opacity={hoveredNode === 'deploy' ? 1 : 0.9} filter={hoveredNode === 'deploy' ? 'url(#glow)' : ''} />
          <text x="650" y="605" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Deploy</text>
          <text x="650" y="625" textAnchor="middle" fill="white" fontSize="11">배포</text>
        </g>

        {/* 에이전트 -> 도구 */}
        <line x1="435" y1="380" x2="170" y2="580" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="435" y1="380" x2="330" y2="580" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="735" y1="380" x2="490" y2="580" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />
        <line x1="735" y1="380" x2="650" y2="580" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-solid)" />

        {/* 매니저 -> 사용자 (최종 결과) */}
        <path d="M 325 195 Q 200 120 350 100" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#arrow-solid)" />
        <text x="240" y="140" fill="#10b981" fontSize="11" fontWeight="600">최종 결과</text>
      </svg>

      {/* 범례 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">사용자</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-400 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">매니저</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">작업 에이전트</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-500 rounded"></div>
          <span className="text-gray-700 dark:text-gray-300">도구</span>
        </div>
      </div>
    </div>
  );
}
