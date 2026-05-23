import Link from 'next/link';
import { ArrowRight, BookOpen, FolderOpen } from 'lucide-react';
import { blogCategories, blogPosts, getBlogCategoryBySlug } from '@/data';

export const metadata = {
  title: 'Legal Blog India - NyayMitra',
  description:
    'Legal awareness blog for Indians covering consumer rights, cyber crime, rental laws, employment laws, women rights, traffic rules, and startup legal guides.',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const featuredCategory = getBlogCategoryBySlug(featured.categorySlug);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-4 uppercase tracking-wider">
          <BookOpen className="size-4" />
          Made for Indians
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-end">
          <div className="lg:col-span-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
              Legal Blog for Everyday Problems
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl">
              Practical explainers for common legal questions in India, written in plain language before you take the next step.
            </p>
          </div>
          <Link
            href={`/blog/${featured.slug}`}
            className="lg:col-span-2 glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all group"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{featuredCategory?.title}</span>
            <h2 className="text-xl font-semibold text-text-primary mt-3 mb-3 leading-snug">{featured.title}</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">{featured.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Read featured article
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-5 font-[family-name:var(--font-outfit)]">
          Browse by category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="glass p-5 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all"
            >
              <FolderOpen className="size-7 text-primary mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">{category.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-5 font-[family-name:var(--font-outfit)]">
          Latest articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogPosts.map((post) => {
            const category = getBlogCategoryBySlug(post.categorySlug);

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category?.title}</span>
                  <span className="text-xs text-text-secondary">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 leading-snug">{post.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read article
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
