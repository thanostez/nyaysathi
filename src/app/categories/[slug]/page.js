import { getCategoryBySlug, getRightsByCategory, categories } from '@/data';
import RightsAccordion from '@/components/RightsAccordion';
import Link from 'next/link';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return {
    title: `${category?.title || 'Category'} Rights - NyayMitra`,
    description: category?.description || 'Learn about your legal rights.',
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const rights = getRightsByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-text-primary mb-4">Category Not Found</h1>
        <Link href="/" className="text-accent hover:text-accent-light transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-8 lg:px-12 w-full mx-auto">
      <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-8 transition-colors">
        &larr; Back to Home
      </Link>
      
      <div className="glass p-8 mb-12" style={{ borderColor: `${category.color}40` }}>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{category.icon}</span>
          <h1 className="text-3xl md:text-4xl font-semibold text-text-primary">{category.title}</h1>
        </div>
        <p className="text-lg text-text-secondary max-w-3xl">{category.description}</p>
        <div className="mt-4 inline-block px-3 py-1 rounded-full bg-surface-light border border-primary/20 text-sm text-text-secondary">
          {rights.length} Rights Covered
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Know Your Rights</h2>
          <div className="space-y-4">
            <RightsAccordion rights={rights} />
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="glass p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="text-accent">💡</span> Need to take action?
            </h3>
            <p className="text-text-secondary mb-6 text-sm">
              We have ready-to-use legal templates that you can download and use for formal complaints or notices.
            </p>
            <Link 
              href="/templates" 
              className="block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl transition-colors font-medium"
            >
              Browse Templates
            </Link>
          </div>
          
          <div className="glass p-6 border-danger/30">
            <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span className="text-danger">📞</span> Emergency?
            </h3>
            <p className="text-text-secondary mb-6 text-sm">
              If you are in immediate danger, call the national emergency numbers right away.
            </p>
            <Link 
              href="/helplines" 
              className="block w-full text-center bg-surface-light hover:bg-surface border border-danger/50 text-text-primary py-3 rounded-xl transition-colors font-medium"
            >
              View Helplines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

