import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogCategories, getBlogCategoryBySlug, getBlogPostsByCategory } from '@/data';

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Blog Category Not Found - NyayMitra',
    };
  }

  return {
    title: `${category.title} Blog - NyayMitra`,
    description: category.description,
  };
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  const category = getBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(slug);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-12 w-full mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="size-4" />
        Blog
      </Link>

      <header className="mb-10 max-w-3xl">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Blog category</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mt-3 mb-4">
          {category.title}
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{category.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-xs text-text-secondary">{post.published}</span>
              <span className="text-xs text-text-secondary">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 leading-snug">{post.title}</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">{post.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Read article
              <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
