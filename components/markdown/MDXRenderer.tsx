import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { SectionCard, SectionCardsGrid } from './SectionCard';
import { Badge, MetaInfo } from './Badge';
import { ImageWithCaption } from './ImageWithCaption';
import { SectionDivider } from './SectionDivider';
import { generateHeadingId } from '@/lib/markdown';
import { ClientServerDiagram } from '../diagrams/ClientServerDiagram';
import { FrontendBackendDiagram } from '../diagrams/FrontendBackendDiagram';
import { AgenticProcessDiagram } from '../diagrams/AgenticProcessDiagram';
import { ToolComparisonDiagram } from '../diagrams/ToolComparisonDiagram';
import { FlowchartDiagram } from '../diagrams/FlowchartDiagram';
import { ProcessFlowDiagram } from '../diagrams/ProcessFlowDiagram';
import { OrchestrationArchitecture } from '../diagrams/OrchestrationArchitecture';
import { SequenceDiagram } from '../diagrams/SequenceDiagram';

const components = {
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-tight" {...props} />,
  h2: (props: any) => {
    const id = props.children ? generateHeadingId(props.children.toString()) : undefined;
    return (
      <>
        <div className="mt-16 mb-8 border-t-2 border-gray-200 dark:border-gray-700"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" id={id} {...props} />
      </>
    );
  },
  h3: (props: any) => {
    const id = props.children ? generateHeadingId(props.children.toString()) : undefined;
    return <h3 className="text-2xl md:text-3xl font-bold mb-5 mt-12 leading-snug" id={id} {...props} />;
  },
  h4: (props: any) => <h4 className="text-xl md:text-2xl font-bold mb-4 mt-8 leading-snug" {...props} />,
  p: (props: any) => <p className="mb-8 leading-8 text-base md:text-lg text-gray-900 dark:text-gray-100 font-normal" {...props} />,
  hr: (props: any) => <SectionDivider spacing="medium" style="gradient" {...props} />,
  a: (props: any) => <a className="text-orange-500 hover:text-orange-600 underline font-medium" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-7 space-y-3" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-7 space-y-3" {...props} />,
  li: (props: any) => {
    // 체크리스트 스타일
    const content = props.children;
    if (typeof content === 'string' && (content.startsWith('✅ ') || content.startsWith('❌ '))) {
      return <li className="leading-8 text-base md:text-lg text-gray-900 dark:text-gray-100 font-normal list-none -ml-6" {...props} />;
    }
    return <li className="leading-8 text-base md:text-lg text-gray-900 dark:text-gray-100 font-normal" {...props} />;
  },
  kbd: (props: any) => (
    <kbd className="px-2 py-1 text-sm font-mono bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm" {...props} />
  ),
  img: (props: any) => <ImageWithCaption {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-orange-500 pl-6 py-2 italic my-6 text-gray-700 dark:text-gray-300 bg-orange-50 dark:bg-gray-800" {...props} />
  ),
  code: (props: any) => {
    const { children, className } = props;
    const isInline = !className;

    if (isInline) {
      return <code className="bg-orange-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono text-orange-700 dark:text-orange-300" {...props} />;
    }

    return <CodeBlock {...props} />;
  },
  pre: (props: any) => <div className="my-6">{props.children}</div>,
  table: (props: any) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-gray-100 dark:bg-gray-700" {...props} />,
  th: (props: any) => <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-base" {...props} />,
  td: (props: any) => <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-base leading-relaxed" {...props} />,
  Callout,
  SectionCard,
  SectionCardsGrid,
  Badge,
  MetaInfo,
  SectionDivider,
  ClientServerDiagram,
  FrontendBackendDiagram,
  AgenticProcessDiagram,
  ToolComparisonDiagram,
  FlowchartDiagram,
  ProcessFlowDiagram,
  OrchestrationArchitecture,
  SequenceDiagram,
};

interface MDXRendererProps {
  content: string;
}

export function MDXRenderer({ content }: MDXRendererProps) {
  return (
    <div className="prose prose-slate dark:prose-invert prose-lg max-w-4xl mx-auto prose-headings:scroll-mt-20 prose-a:text-orange-500 hover:prose-a:text-orange-600 prose-code:text-orange-600 dark:prose-code:text-orange-400">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
