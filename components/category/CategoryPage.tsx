"use client"

import React from 'react';
import Link from 'next/link';
import { getColorConfig, cn } from '@/lib/utils';

interface CategoryPageProps {
  category: {
    title: string;
    description: string;
    colorName: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const { title, description, colorName } = category;
  const colorConfig = getColorConfig(colorName);

  return (
    <div className={cn('min-h-screen', colorConfig.bg, colorConfig.text)}>
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-3 text-sm sm:text-base">
            <li className="flex items-center">
              <Link href="/" className="hover:underline transition-colors duration-200 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 font-medium">{title}</span>
            </li>
          </ol>
        </nav>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">
            {title}
          </h1>
          <p className="font-bold font-mono italic text-lg mb-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;