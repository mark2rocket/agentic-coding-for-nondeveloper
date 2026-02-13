import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <Link href="/" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
