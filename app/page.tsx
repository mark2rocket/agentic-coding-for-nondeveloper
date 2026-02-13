import Link from 'next/link';
import { getNavigation } from '@/lib/navigation';

export default function Home() {
  const navigation = getNavigation();

  // 첫 번째 실제 페이지 찾기 (자식 항목 중 첫 번째)
  let firstDocSlug: string | undefined;
  for (const section of navigation.sections) {
    for (const item of section.items) {
      if (item.slug) {
        firstDocSlug = item.slug;
        break;
      } else if (item.children && item.children.length > 0) {
        firstDocSlug = item.children[0].slug;
        break;
      }
    }
    if (firstDocSlug) break;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-2xl px-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Agentic Coding Guide for 비개발자</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          AI 에이전트와 함께하는 코딩 여정
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          AI 에이전트와 함께하는 코딩. 코딩 지식 없이도 서비스를 만들 수 있습니다.
        </p>
        {firstDocSlug && (
          <Link
            href={`/docs/${firstDocSlug}`}
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            시작하기 →
          </Link>
        )}
      </div>
    </div>
  );
}
