import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react';
import { blogPosts, getBlogCategoryBySlug, getBlogPostBySlug } from '@/data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - NyayMitra',
    };
  }

  return {
    title: `${post.title} - NyayMitra Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} - NyayMitra Blog`,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getBlogCategoryBySlug(post.categorySlug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: post.published,
    author: {
      '@type': 'Organization',
      name: 'NyayMitra',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NyayMitra',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.nyaymitra.help/blog/${post.slug}`,
    },
  };

  return (
    <article className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <Script
        id={`blog-jsonld-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="size-4" />
          Blog
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Link
              href={`/blog/category/${category?.slug}`}
              className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
            >
              {category?.title}
            </Link>
            <span className="inline-flex items-center gap-2 text-xs text-text-secondary">
              <CalendarDays className="size-4" />
              {post.published}
            </span>
            <span className="text-xs text-text-secondary">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="glass p-6 sm:p-8 rounded-2xl border border-primary/10 mb-10">
          <p className="text-text-secondary leading-relaxed text-base sm:text-lg">{post.intro}</p>
        </div>

        <div className="space-y-10 mb-12">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                {section.heading}
              </h2>
              <p className="text-text-secondary leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="glass p-6 rounded-2xl border border-primary/10 mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Related resources</h2>
          <div className="space-y-3">
            {post.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
                <ArrowRight className="size-4" />
              </Link>
            ))}
          </div>
        </section>

        <div className="rounded-2xl border border-warning/30 bg-warning/10 p-5 text-sm text-text-secondary leading-relaxed">
          This article is general legal information for India and not legal advice. For urgent or personal matters, consult a qualified advocate or contact the appropriate authority.
        </div>
      </div>
    </article>
  );
}
