'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories } from '@/lib/categories';
import type { Category } from '@/types/categories';
import { getColorConfig, cn } from '@/lib/utils';

export default function CategoryContent({ slug }: { slug: string }) {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundCategory = categories.find((cat) => cat.slug === slug);
    setCategory(foundCategory || null);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!category) {
    notFound();
  }

  const colorConfig = getColorConfig(category.colorName);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb category={category} colorConfig={colorConfig} />
      <Header category={category} colorConfig={colorConfig} />
      <div className="mt-12">
        <DemoCards category={category} colorConfig={colorConfig} />
      </div>
    </div>
  );
}


function Breadcrumb({ category, colorConfig }: { category: Category; colorConfig: ReturnType<typeof getColorConfig> }) {
  return (
    <nav className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-slate-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-slate-400">/</span>
        </li>
        <li className={cn("text-opacity-80", colorConfig.text)}>{category.title}</li>
      </ol>
    </nav>
  );
}

function Header({ category, colorConfig }: { category: Category; colorConfig: ReturnType<typeof getColorConfig> }) {
  return (
    <header className="text-center">
      <h1 className={cn("text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4", colorConfig.text)}>
        {category.title}
      </h1>
      <p className="font-bold text-slate-700 font-mono italic text-lg mb-10">
        {category.description}
      </p>
    </header>
  );
}

function DemoCards({ category, colorConfig }: { category: Category; colorConfig: ReturnType<typeof getColorConfig> }) {
  if (!category.demos || category.demos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 md:h-96 px-4 py-8 bg-gray-50 rounded-lg shadow-inner">
        <div className={cn("text-6xl mb-4", colorConfig.text)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-16 h-16">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className={cn("text-2xl md:text-3xl font-bold text-center mb-2")}>
          No demos available yet
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-md">
          We&apos;re working on exciting demos for this category. Check back soon to see what&apos;s new!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {category.demos.map((Demo, index) => (
        <div key={index} className={cn("rounded-lg shadow-md p-6", colorConfig.bg)}>
          <Demo />
        </div>
      ))}
    </div>
  );
}