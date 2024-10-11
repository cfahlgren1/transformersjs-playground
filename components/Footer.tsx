import React from 'react';
import Link from 'next/link';
import { categories } from '../lib/categories';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-400/80 p-6 sm:p-10 md:p-20 relative overflow-hidden rounded-xl">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-between items-center gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              href={`/category/${category.slug}`}
              className="text-base sm:text-lg font-bold text-emerald-800 hover:text-emerald-900 transition-colors duration-300 ease-in-out relative group"
            >
              {category.title}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 text-center py-2 sm:py-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-red-500 tracking-tighter transform -skew-x-6">
          TRANSFORMERS.JS
        </h1>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-black rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
