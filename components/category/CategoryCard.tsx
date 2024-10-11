import React from 'react';
import Link from 'next/link';
import type { Category } from '../../types/categories';
import { getColorConfig } from '../../lib/utils';

type CategoryCardProps = Category;

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon: Icon,
  colorName,
  description,
  status,
  graphic: Graphic,
  slug,
}) => {
  const { bg, text, gradient, iconBg } = getColorConfig(colorName);
  const isComingSoon = status === 'Coming Soon';

  const CardContent = () => (
    <>
      {(status === 'New' || status === 'Coming Soon') && (
        <div className={`absolute top-4 right-4 ${bg} ${text} text-xs font-bold py-1 px-2 rounded-full`}>
          {status}
        </div>
      )}
      <div className="mb-2">
        <div className="flex items-center">
          <div className={`${iconBg} ${text} p-2 rounded-full mr-3`}>
            <Icon size={20} />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex-grow px-8 py-4"> 
        <Graphic />
      </div>
      <p className="text-sm font-medium leading-tight mt-2">{description}</p>
    </>
  );

  return (
    <div className={`rounded-xl max-w-sm mx-auto p-6 text-white w-92 h-72 flex flex-col relative shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 ${gradient}`}>
      {isComingSoon ? (
        <>
          <CardContent />
          <button 
            className="w-full bg-white opacity-50 cursor-not-allowed py-2 px-3 rounded-lg text-xs transition-colors mt-3 text-black font-extrabold"
            disabled
          >
            Coming Soon
          </button>
        </>
      ) : (
        <Link href={`/category/${slug}`} className="flex flex-col flex-grow">
          <CardContent />
        </Link>
      )}
    </div>
  );
};

export default CategoryCard;