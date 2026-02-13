'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  title?: string;
}

export function ImageWithCaption({ src, alt, title }: ImageWithCaptionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 이미지와 캡션 */}
      <figure className="my-8 group">
        <div
          className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 cursor-zoom-in transition-all hover:shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto transition-transform group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
              <ZoomIn className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>
        {(title || alt) && (
          <figcaption className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400 italic">
            {title || alt}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
