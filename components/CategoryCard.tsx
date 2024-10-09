import React from 'react';
import type { Category } from '../types/categories';
import { getColorConfig } from '@/lib/utils';

type CategoryCardProps = Category;

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon: Icon,
  colorName,
  description,
  status,
  graphic: Graphic
}) => {
  const { text, gradient, iconBg } = getColorConfig(colorName);
  const isComingSoon = status === 'Coming Soon';

  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-4 text-white w-92 h-[380px] flex flex-col relative shadow-lg transition-transform duration-300 ease-in-out hover:scale-105`}>
      {(status === 'New' || status === 'Coming Soon') && (
        <div className={`absolute top-2 right-2 ${iconBg} ${text} text-xs font-bold py-1 px-2 rounded-full`}>
          New
        </div>
      )}
      <div className="flex items-center mb-3">
        <div className={`${iconBg} ${text} p-1.5 rounded-full mr-2`}>
          <Icon size={20} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="mb-3 flex-grow">
        <Graphic />
      </div>
      <p className="text-xs mb-3 leading-tight">{description}</p>
      <button 
        className={`w-full bg-white ${text} py-2 px-3 rounded-lg text-sm font-semibold transition-colors mt-auto ${
          isComingSoon ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
        }`}
        disabled={isComingSoon}
      >
        {isComingSoon ? 'Coming Soon' : 'View Tools'}
      </button>
    </div>
  );
};

export default CategoryCard;