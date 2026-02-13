import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { TableOfContents } from '@/components/layout/TableOfContents';
import { Header } from '@/components/layout/Header';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageNavigation } from '@/components/layout/PageNavigation';
import { MDXRenderer } from '@/components/markdown/MDXRenderer';
import { PresentationButton } from '@/components/presentation/PresentationButton';
import { ReadingProgress } from '@/components/reading/ReadingProgress';
import { getContentBySlug, getAllContentSlugs, extractHeadings } from '@/lib/markdown';
import { getNavigation, getBreadcrumb, getAdjacentPages } from '@/lib/navigation';
import { buildSearchIndex } from '@/lib/search';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllContentSlugs();
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join('/');
  const content = getContentBySlug(slug);

  if (!content) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${content.frontMatter.title} | Agentic Guide`,
    description: content.frontMatter.description || '',
  };
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join('/');
  const content = getContentBySlug(slug);
  const navigation = getNavigation();
  const searchIndex = buildSearchIndex();

  if (!content) {
    notFound();
  }

  const headings = extractHeadings(content.content);
  const breadcrumb = getBreadcrumb(navigation, slug);
  const { prev, next } = getAdjacentPages(navigation, slug);

  return (
    <div className="flex flex-col min-h-screen">
      <ReadingProgress />
      <Header searchIndex={searchIndex} />
      <div className="flex flex-1 w-full">
        <Sidebar navigation={navigation} />
        <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8">
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumb} />

            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{content.frontMatter.title}</h1>
              {content.frontMatter.description && (
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{content.frontMatter.description}</p>
              )}
            </header>

            <MDXRenderer content={content.content} />

            {/* 페이지 네비게이션 */}
            <PageNavigation prev={prev} next={next} />
          </article>
        </main>
        <TableOfContents headings={headings} />
      </div>

      {/* 발표 모드 버튼 */}
      <PresentationButton
        markdown={content.content}
        documentTitle={content.frontMatter.title}
      />
    </div>
  );
}
