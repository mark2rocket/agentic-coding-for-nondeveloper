import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error' | 'tip';
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 dark:bg-blue-950/30 border-blue-500 dark:border-blue-500/50 text-blue-900 dark:text-blue-200',
    warning: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-500 dark:border-yellow-500/50 text-yellow-900 dark:text-yellow-200',
    success: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-200',
    error: 'bg-red-50 dark:bg-red-950/30 border-red-500 dark:border-red-500/50 text-red-900 dark:text-red-200',
    tip: 'bg-purple-50 dark:bg-purple-950/30 border-purple-500 dark:border-purple-500/50 text-purple-900 dark:text-purple-200',
  };

  const iconColors = {
    info: 'text-blue-500',
    warning: 'text-yellow-500',
    success: 'text-emerald-500',
    error: 'text-red-500',
    tip: 'text-purple-500',
  };

  const icons = {
    info: <Info size={24} />,
    warning: <AlertTriangle size={24} />,
    success: <CheckCircle size={24} />,
    error: <XCircle size={24} />,
    tip: <Lightbulb size={24} />,
  };

  const defaultTitles = {
    info: '정보',
    warning: '주의',
    success: '성공',
    error: '오류',
    tip: '팁',
  };

  return (
    <div className={`callout border-l-4 p-6 my-6 rounded-lg shadow-sm ${styles[type]} transition-all hover:shadow-md`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 ${iconColors[type]}`}>
          {icons[type]}
        </div>
        <div className="flex-1">
          {(title || defaultTitles[type]) && (
            <div className="font-bold text-lg mb-2">
              {title || defaultTitles[type]}
            </div>
          )}
          <div className="callout-content [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
