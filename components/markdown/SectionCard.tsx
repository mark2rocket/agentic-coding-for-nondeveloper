interface SectionCardProps {
  number: number;
  title: string;
  href?: string;
  children?: React.ReactNode;
}

export function SectionCard({ number, title, href, children }: SectionCardProps) {
  const CardContent = () => (
    <div className="group relative flex items-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-orange-500 dark:hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        {children && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {children}
          </p>
        )}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}

interface SectionCardsGridProps {
  children: React.ReactNode;
}

export function SectionCardsGrid({ children }: SectionCardsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {children}
    </div>
  );
}
