'use client';

import { useState } from 'react';

export function AgenticProcessDiagram() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | null>(null);

  const steps = [
    {
      id: 1,
      title: '기획',
      icon: '💡',
      color: 'blue',
      description: '아이디어를 구체화',
      x: 150,
      y: 200,
    },
    {
      id: 2,
      title: '생성',
      icon: '🤖',
      color: 'purple',
      description: 'AI가 코드 작성',
      x: 400,
      y: 200,
    },
    {
      id: 3,
      title: '검증',
      icon: '✅',
      color: 'green',
      description: '테스트 및 개선',
      x: 650,
      y: 200,
    },
  ];

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        🔄 에이전틱 코딩 프로세스
      </h3>

      <svg
        viewBox="0 0 800 350"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 연결선 */}
        <defs>
          <marker id="arrow-process" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" className="fill-gray-400 dark:fill-gray-500" />
          </marker>
        </defs>

        {/* Step 1 -> Step 2 */}
        <path
          d="M 220 200 L 330 200"
          className="stroke-gray-300 dark:stroke-gray-600 stroke-[4] stroke-dasharray-[8,4]"
          markerEnd="url(#arrow-process)"
        />

        {/* Step 2 -> Step 3 */}
        <path
          d="M 470 200 L 580 200"
          className="stroke-gray-300 dark:stroke-gray-600 stroke-[4] stroke-dasharray-[8,4]"
          markerEnd="url(#arrow-process)"
        />

        {/* Step 3 -> Step 2 (피드백 루프) */}
        <path
          d="M 650 250 Q 535 310, 420 250"
          className="stroke-orange-400 dark:stroke-orange-500 stroke-[3] stroke-dasharray-[6,3]"
          markerEnd="url(#arrow-feedback)"
        />
        <defs>
          <marker id="arrow-feedback" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" className="fill-orange-400 dark:fill-orange-500" />
          </marker>
        </defs>
        <text x="535" y="330" className="fill-orange-600 dark:fill-orange-400 text-sm font-semibold" textAnchor="middle">
          🔁 수정 및 개선
        </text>

        {/* 각 단계 */}
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const colorClasses = {
            blue: {
              fill: isActive ? 'fill-blue-500' : 'fill-blue-400',
              bg: 'bg-blue-100 dark:bg-blue-900/30',
              text: 'text-blue-900 dark:text-blue-300',
              border: 'border-blue-400',
            },
            purple: {
              fill: isActive ? 'fill-purple-500' : 'fill-purple-400',
              bg: 'bg-purple-100 dark:bg-purple-900/30',
              text: 'text-purple-900 dark:text-purple-300',
              border: 'border-purple-400',
            },
            green: {
              fill: isActive ? 'fill-green-500' : 'fill-green-400',
              bg: 'bg-green-100 dark:bg-green-900/30',
              text: 'text-green-900 dark:text-green-300',
              border: 'border-green-400',
            },
          };

          const colors = colorClasses[step.color as keyof typeof colorClasses];

          return (
            <g
              key={step.id}
              onMouseEnter={() => setActiveStep(step.id as 1 | 2 | 3)}
              onMouseLeave={() => setActiveStep(null)}
              className="cursor-pointer transition-all duration-300"
              style={{
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                transformOrigin: `${step.x}px ${step.y}px`,
              }}
            >
              {/* 원형 배경 */}
              <circle
                cx={step.x}
                cy={step.y}
                r="60"
                className={`${colors.fill} transition-all duration-300`}
                opacity="0.9"
              />

              {/* 아이콘 (텍스트로 표시) */}
              <text
                x={step.x}
                y={step.y + 10}
                className="text-5xl"
                textAnchor="middle"
              >
                {step.icon}
              </text>

              {/* 단계 번호 */}
              <circle
                cx={step.x}
                cy={step.y - 50}
                r="18"
                className="fill-white dark:fill-gray-800"
                opacity="0.95"
              />
              <text
                x={step.x}
                y={step.y - 45}
                className="fill-gray-700 dark:fill-gray-300 font-bold text-lg"
                textAnchor="middle"
              >
                {step.id}
              </text>

              {/* 제목 */}
              <text
                x={step.x}
                y={step.y + 85}
                className="fill-gray-800 dark:fill-gray-200 font-bold text-xl"
                textAnchor="middle"
              >
                {step.title}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 설명 카드 */}
      <div className="mt-8 space-y-3">
        {steps.map((step) => {
          const colorClasses = {
            blue: 'bg-blue-100 dark:bg-blue-900/30 border-blue-400 text-blue-900 dark:text-blue-300',
            purple: 'bg-purple-100 dark:bg-purple-900/30 border-purple-400 text-purple-900 dark:text-purple-300',
            green: 'bg-green-100 dark:bg-green-900/30 border-green-400 text-green-900 dark:text-green-300',
          };

          return (
            <div
              key={step.id}
              className={`p-4 rounded-lg border-l-4 transition-all duration-300 ${
                colorClasses[step.color as keyof typeof colorClasses]
              } ${activeStep === step.id ? 'shadow-lg scale-105' : ''}`}
              onMouseEnter={() => setActiveStep(step.id as 1 | 2 | 3)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{step.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">
                    {step.id}. {step.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
