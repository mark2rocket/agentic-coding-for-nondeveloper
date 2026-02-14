import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb, Tag, FileText, Target } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error' | 'tip' | 'danger';
  title?: string;
  number?: number;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, number, children }: CalloutProps) {
  // 카드 스타일 배경색
  const bgColors = {
    info: 'bg-blue-900/20 dark:bg-blue-950/30',
    warning: 'bg-orange-900/20 dark:bg-orange-950/30',
    success: 'bg-emerald-900/20 dark:bg-emerald-950/30',
    error: 'bg-red-900/20 dark:bg-red-950/30',
    tip: 'bg-purple-900/20 dark:bg-purple-950/30',
    danger: 'bg-red-900/30 dark:bg-red-950/40',
  };

  const iconColors = {
    info: 'text-blue-400',
    warning: 'text-orange-400',
    success: 'text-emerald-400',
    error: 'text-red-400',
    tip: 'text-purple-400',
    danger: 'text-red-400',
  };

  const icons = {
    info: <Info size={20} />,
    warning: <Target size={20} />,
    success: <CheckCircle size={20} />,
    error: <AlertTriangle size={20} />,
    tip: <Lightbulb size={20} />,
    danger: <XCircle size={20} />,
  };

  const defaultTitles = {
    info: '정보',
    warning: '주의',
    success: '성공',
    error: '오류',
    tip: '팁',
    danger: '위험',
  };

  return (
    <div className={`callout rounded-xl p-6 my-8 ${bgColors[type]} border border-gray-700/50 dark:border-gray-600/30`}>
      <div className="flex items-start gap-4">
        {/* 숫자 + 아이콘 */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {number && (
            <div className={`flex items-center justify-center w-8 h-8 rounded-lg border-2 border-current ${iconColors[type]} font-bold text-lg`}>
              {number}
            </div>
          )}
          {!number && (
            <div className={iconColors[type]}>
              {icons[type]}
            </div>
          )}
        </div>

        {/* 콘텐츠 */}
        <div className="flex-1 min-w-0">
          {(title || defaultTitles[type]) && (
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
              {title || defaultTitles[type]}
            </h3>
          )}
          <div className="callout-content text-gray-800 dark:text-gray-200 [&>p:last-child]:mb-0 [&>p]:leading-relaxed [&>p]:mb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// 중첩 박스 컴포넌트 (예시나 추가 정보용)
interface InfoBoxProps {
  icon?: 'file' | 'tag' | 'check' | 'error';
  title?: string;
  children: React.ReactNode;
}

export function InfoBox({ icon = 'file', title, children }: InfoBoxProps) {
  const icons = {
    file: <FileText size={18} />,
    tag: <Tag size={18} />,
    check: <CheckCircle size={18} />,
    error: <XCircle size={18} />,
  };

  return (
    <div className="rounded-lg p-5 my-4 bg-orange-950/40 dark:bg-orange-950/30 border border-orange-800/30">
      {title && (
        <div className="flex items-center gap-2 mb-3 text-orange-400">
          {icons[icon]}
          <h4 className="font-bold text-base">{title}</h4>
        </div>
      )}
      <div className="text-gray-300 dark:text-gray-400 [&>p:last-child]:mb-0 [&>p]:leading-relaxed [&>p]:mb-2 text-sm">
        {children}
      </div>
    </div>
  );
}

// 레벨 박스 컴포넌트 (투명한 배경, 왼쪽 보더 - 통일된 스타일)
interface LevelBoxProps {
  level?: 1 | 2 | 3;
  title?: string;
  children: React.ReactNode;
}

export function LevelBox({ level = 1, title, children }: LevelBoxProps) {
  // 모든 레벨이 같은 스타일 사용 (색깔 없는 투명 배경, 아이콘 없음)
  return (
    <div className="rounded-lg p-5 pl-6 my-6 border-l-4 border-gray-400 dark:border-gray-600 bg-transparent">
      <div className="flex-1">
        {title && (
          <h4 className="font-bold text-base mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h4>
        )}
        <div className="text-gray-800 dark:text-gray-300 [&>p:last-child]:mb-0 [&>p]:leading-relaxed [&>p]:mb-2 [&>ul]:mb-6 text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
