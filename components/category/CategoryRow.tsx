import { motion } from 'framer-motion';
import CategoryCard from '@/components/category/CategoryCard';
import { Category } from '@/types/categories';

interface CategoryRowProps {
  categories: Category[];
}

export default function CategoryRow({ categories }: CategoryRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CategoryCard {...category} />
        </motion.div>
      ))}
    </div>
  );
}