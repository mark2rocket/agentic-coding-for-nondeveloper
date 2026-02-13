interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'gradient';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles = {
    default: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-700',
    outline: 'bg-transparent border-2 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-400',
    gradient: 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-0',
  };

  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
}

interface MetaInfoProps {
  readTime?: string;
  difficulty?: string;
}

export function MetaInfo({ readTime, difficulty }: MetaInfoProps) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-4">
      {readTime && (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{readTime}</span>
        </div>
      )}
      {difficulty && (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>{difficulty}</span>
        </div>
      )}
    </div>
  );
}
