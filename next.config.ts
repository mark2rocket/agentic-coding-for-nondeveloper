import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      // 삭제된 페이지들을 첫 페이지로 리다이렉트
      {
        source: '/docs/guide/tool-guide/:path*',
        destination: '/docs/guide/basics/service-structure',
        permanent: true,
      },
      {
        source: '/docs/guide/tutorials/:path*',
        destination: '/docs/guide/basics/service-structure',
        permanent: true,
      },
      {
        source: '/docs/guide/troubleshooting/:path*',
        destination: '/docs/guide/basics/service-structure',
        permanent: true,
      },
      {
        source: '/docs/guide/faq/:path*',
        destination: '/docs/guide/basics/service-structure',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
