'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const language = className ? className.replace('language-', '') : 'text';
  const code = String(children).trim();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block relative my-4 rounded-lg overflow-hidden">
      <div className="code-header flex justify-between items-center px-4 py-2 bg-gray-800 text-white text-sm">
        <span className="font-mono">{language}</span>
        <button
          onClick={copyToClipboard}
          className="copy-button flex items-center gap-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded transition"
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-content p-4 overflow-x-auto bg-gray-900 text-gray-100">
        <code className={className}>{code}</code>
      </pre>
    </div>
  );
}
