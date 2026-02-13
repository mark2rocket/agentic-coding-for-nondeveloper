import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/docs/guide/tool-guide/choosing-tools',
        destination: '/docs/guide/tool-guide/agentic-tools',
        permanent: true,
      },
      {
        source: '/docs/guide/tool-guide/selection-flowchart',
        destination: '/docs/guide/tool-guide/agentic-tools',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
