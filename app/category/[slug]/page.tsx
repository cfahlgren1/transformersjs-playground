import CategoryContent from '@/components/category/CategoryContent';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryContent slug={params.slug} />
    </div>
  );
}
