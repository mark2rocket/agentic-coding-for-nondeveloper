interface SectionDividerProps {
  spacing?: 'small' | 'medium' | 'large';
  style?: 'line' | 'dots' | 'gradient';
}

export function SectionDivider({ spacing = 'medium', style = 'gradient' }: SectionDividerProps) {
  const spacingClasses = {
    small: 'my-8',
    medium: 'my-12',
    large: 'my-16',
  };

  const styles = {
    line: (
      <hr className="border-0 h-px bg-gray-200 dark:bg-gray-700" />
    ),
    dots: (
      <div className="flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
      </div>
    ),
    gradient: (
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
    ),
  };

  return (
    <div className={spacingClasses[spacing]}>
      {styles[style]}
    </div>
  );
}
