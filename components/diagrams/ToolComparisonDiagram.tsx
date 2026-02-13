'use client';

import { useState } from 'react';

interface Tool {
  name: string;
  icon: string;
  difficulty: number; // 1-3
  speed: number; // 1-3
  features: number; // 1-3
  color: string;
  description: string;
}

export function ToolComparisonDiagram() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools: Tool[] = [
    {
      name: '안티그래비티',
      icon: '🌐',
      difficulty: 1,
      speed: 2,
      features: 2,
      color: 'blue',
      description: '웹 기반, 초보자 친화적',
    },
    {
      name: '클로드코드',
      icon: '💻',
      difficulty: 2,
      speed: 3,
      features: 3,
      color: 'purple',
      description: 'CLI 기반, 빠르고 강력',
    },
    {
      name: '오마이클로드',
      icon: '⚡',
      difficulty: 3,
      speed: 3,
      features: 3,
      color: 'orange',
      description: '확장팩, 전문가용',
    },
  ];

  const renderStars = (count: number) => {
    return '⭐'.repeat(count) + '☆'.repeat(3 - count);
  };

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      blue: {
        bg: isSelected ? 'bg-blue-500' : 'bg-blue-400',
        light: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-900 dark:text-blue-300',
        border: 'border-blue-500',
      },
      purple: {
        bg: isSelected ? 'bg-purple-500' : 'bg-purple-400',
        light: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-900 dark:text-purple-300',
        border: 'border-purple-500',
      },
      orange: {
        bg: isSelected ? 'bg-orange-500' : 'bg-orange-400',
        light: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-900 dark:text-orange-300',
        border: 'border-orange-500',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        🛠️ 도구 비교
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const isSelected = selectedTool === tool.name;
          const colors = getColorClasses(tool.color, isSelected);

          return (
            <div
              key={tool.name}
              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? `${colors.border} shadow-2xl scale-105`
                  : 'border-gray-200 dark:border-gray-700 hover:shadow-lg'
              }`}
              onMouseEnter={() => setSelectedTool(tool.name)}
              onMouseLeave={() => setSelectedTool(null)}
            >
              {/* 아이콘과 제목 */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{tool.icon}</div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                  {tool.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.description}
                </p>
              </div>

              {/* 능력치 바 */}
              <div className="space-y-4">
                {/* 난이도 (역방향: 낮을수록 좋음) */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      난이도
                    </span>
                    <span className="text-xs text-gray-500">
                      {renderStars(tool.difficulty)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        tool.difficulty === 1
                          ? 'bg-green-500'
                          : tool.difficulty === 2
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${(tool.difficulty / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 속도 */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      속도
                    </span>
                    <span className="text-xs text-gray-500">
                      {renderStars(tool.speed)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-500 bg-blue-500`}
                      style={{ width: `${(tool.speed / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 기능 */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      기능
                    </span>
                    <span className="text-xs text-gray-500">
                      {renderStars(tool.features)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-500 bg-purple-500`}
                      style={{ width: `${(tool.features / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* 추천 대상 */}
              <div className={`mt-6 p-3 rounded-lg ${colors.light}`}>
                <p className={`text-sm font-semibold ${colors.text}`}>
                  {tool.difficulty === 1 && '👶 초보자 추천'}
                  {tool.difficulty === 2 && '🎯 중급자 추천'}
                  {tool.difficulty === 3 && '🚀 전문가 추천'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 선택 가이드 */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
          💡 선택 가이드
        </h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• <strong>처음 시작</strong>한다면 → 안티그래비티 (웹 기반)</li>
          <li>• <strong>터미널이 익숙</strong>하다면 → 클로드코드 (CLI)</li>
          <li>• <strong>고급 기능</strong>이 필요하다면 → 오마이클로드 (확장팩)</li>
        </ul>
      </div>
    </div>
  );
}
