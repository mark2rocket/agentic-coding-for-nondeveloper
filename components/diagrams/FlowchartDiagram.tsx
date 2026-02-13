'use client';

import { useState } from 'react';

export function FlowchartDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = {
    start: { x: 400, y: 50, label: '처음 코딩해보시나요?', type: 'question' },
    beginner_yes: { x: 200, y: 180, label: '웹 기반 IDE', type: 'answer' },
    beginner_no: { x: 600, y: 180, label: '터미널이 편하신가요?', type: 'question' },

    // 초보자 경로
    stackblitz: { x: 100, y: 310, label: 'StackBlitz', type: 'tool' },
    replit: { x: 300, y: 310, label: 'Replit', type: 'tool' },

    // 숙련자 경로
    terminal_yes: { x: 500, y: 310, label: '클로드코드', type: 'tool' },
    terminal_no: { x: 700, y: 310, label: '웹 기반 IDE', type: 'answer' },

    // 고급 기능
    advanced: { x: 500, y: 440, label: '고급 기능 필요?', type: 'question' },
    omc: { x: 400, y: 570, label: '오마이클로드', type: 'tool' },
    claude_only: { x: 600, y: 570, label: '클로드코드만', type: 'tool' },
  };

  const connections = [
    // 첫 번째 질문
    { from: 'start', to: 'beginner_yes', label: 'Yes', color: '#10b981' },
    { from: 'start', to: 'beginner_no', label: 'No', color: '#f59e0b' },

    // 초보자 경로
    { from: 'beginner_yes', to: 'stackblitz', label: '', color: '#10b981' },
    { from: 'beginner_yes', to: 'replit', label: '', color: '#10b981' },

    // 터미널 질문
    { from: 'beginner_no', to: 'terminal_yes', label: 'Yes', color: '#10b981' },
    { from: 'beginner_no', to: 'terminal_no', label: 'No', color: '#f59e0b' },

    // 고급 기능
    { from: 'terminal_yes', to: 'advanced', label: '', color: '#6366f1' },
    { from: 'advanced', to: 'omc', label: 'Yes', color: '#10b981' },
    { from: 'advanced', to: 'claude_only', label: 'No', color: '#f59e0b' },
  ];

  const getNodeStyle = (type: string) => {
    const baseStyle = "transition-all duration-300";
    switch (type) {
      case 'question':
        return `${baseStyle} fill-blue-500 dark:fill-blue-600`;
      case 'answer':
        return `${baseStyle} fill-purple-500 dark:fill-purple-600`;
      case 'tool':
        return `${baseStyle} fill-orange-500 dark:fill-orange-600`;
      default:
        return `${baseStyle} fill-gray-500`;
    }
  };

  const getNodeShape = (type: string) => {
    if (type === 'question') {
      return 'polygon'; // 다이아몬드
    }
    return 'rect'; // 사각형
  };

  return (
    <div className="my-8">
      <svg viewBox="0 0 800 650" className="w-full h-auto">
        <defs>
          <marker
            id="arrowhead-green"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker
            id="arrowhead-orange"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
          </marker>
          <marker
            id="arrowhead-blue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
          </marker>
        </defs>

        {/* 연결선 */}
        {connections.map((conn, idx) => {
          const from = nodes[conn.from as keyof typeof nodes];
          const to = nodes[conn.to as keyof typeof nodes];
          const markerId = conn.color === '#10b981' ? 'arrowhead-green' :
                          conn.color === '#f59e0b' ? 'arrowhead-orange' : 'arrowhead-blue';

          return (
            <g key={idx}>
              <line
                x1={from.x}
                y1={from.y + 30}
                x2={to.x}
                y2={to.y - 30}
                stroke={conn.color}
                strokeWidth="2"
                markerEnd={`url(#${markerId})`}
                opacity={hoveredNode && (hoveredNode !== conn.from && hoveredNode !== conn.to) ? 0.2 : 1}
              />
              {conn.label && (
                <text
                  x={(from.x + to.x) / 2 + 15}
                  y={(from.y + to.y) / 2}
                  fill={conn.color}
                  fontSize="14"
                  fontWeight="600"
                  className="dark:fill-white"
                >
                  {conn.label}
                </text>
              )}
            </g>
          );
        })}

        {/* 노드 */}
        {Object.entries(nodes).map(([key, node]) => {
          const isHovered = hoveredNode === key;
          const shape = getNodeShape(node.type);

          return (
            <g
              key={key}
              onMouseEnter={() => setHoveredNode(key)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {shape === 'polygon' ? (
                // 다이아몬드 (질문)
                <polygon
                  points={`${node.x},${node.y - 30} ${node.x + 80},${node.y} ${node.x},${node.y + 30} ${node.x - 80},${node.y}`}
                  className={getNodeStyle(node.type)}
                  opacity={isHovered ? 1 : 0.9}
                  filter={isHovered ? 'url(#glow)' : ''}
                />
              ) : (
                // 사각형 (도구/답변)
                <rect
                  x={node.x - 70}
                  y={node.y - 25}
                  width="140"
                  height="50"
                  rx="8"
                  className={getNodeStyle(node.type)}
                  opacity={isHovered ? 1 : 0.9}
                  filter={isHovered ? 'url(#glow)' : ''}
                />
              )}
              <text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="600"
                className="pointer-events-none select-none"
              >
                {node.label.split(' ').map((word, i) => (
                  <tspan key={i} x={node.x} dy={i === 0 ? 0 : 16}>
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Glow 효과 */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* 범례 */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <svg width="30" height="30">
            <polygon points="15,5 25,15 15,25 5,15" className="fill-blue-500" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">질문</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="30" height="30">
            <rect x="5" y="10" width="20" height="10" rx="2" className="fill-purple-500" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">중간 답변</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="30" height="30">
            <rect x="5" y="10" width="20" height="10" rx="2" className="fill-orange-500" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">최종 도구</span>
        </div>
      </div>
    </div>
  );
}
