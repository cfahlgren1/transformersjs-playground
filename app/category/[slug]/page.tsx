import CategoryContent from '@/components/category/CategoryContent';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryContent slug={slug} />
    </div>
  );
}
