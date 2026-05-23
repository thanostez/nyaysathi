import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, ChevronRight, ExternalLink } from 'lucide-react';
import { getGuideBySlug, guides } from '@/data';

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: 'Legal Guide Not Found - NyayMitra',
    };
  }

  return {
    title: `${guide.searchTitle} - NyayMitra`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.searchTitle} - NyayMitra`,
      description: guide.description,
      type: 'article',
      url: `/guides/${guide.slug}`,
    },
  };
}

export default async function GuideDetailPage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.searchTitle,
    description: guide.description,
    dateModified: guide.updated,
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
      '@id': `https://nyaymitra.help/guides/${guide.slug}`,
    },
  };

  return (
    <article className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <Script
        id={`guide-jsonld-${guide.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="size-4" />
          All guides
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-text-secondary">
              <CalendarDays className="size-4" />
              Updated {guide.updated}
            </span>
            <span className="text-xs text-text-secondary">{guide.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary leading-tight mb-5">
            {guide.searchTitle}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            {guide.description}
          </p>
        </header>

        <div className="glass p-6 sm:p-8 rounded-2xl border border-primary/10 mb-10">
          <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
            {guide.intro}
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-5 font-[family-name:var(--font-outfit)]">
            Step-by-step
          </h2>
          <ol className="space-y-4">
            {guide.steps.map((step, index) => (
              <li key={step} className="flex gap-4 glass p-4 rounded-xl border border-primary/10">
                <span className="flex-shrink-0 inline-flex items-center justify-center size-8 rounded-full bg-primary text-white text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-text-secondary leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="space-y-10 mb-12">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
                {section.heading}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <section className="glass p-6 rounded-2xl border border-primary/10">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Related tools</h2>
            <div className="space-y-3">
              {guide.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                  <ChevronRight className="size-4" />
                </Link>
              ))}
            </div>
          </section>

          <section className="glass p-6 rounded-2xl border border-primary/10">
            <h2 className="text-lg font-semibold text-text-primary mb-4">Official references</h2>
            <div className="space-y-3">
              {guide.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {source.label}
                  <ExternalLink className="size-4" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="rounded-2xl border border-warning/30 bg-warning/10 p-5 text-sm text-text-secondary leading-relaxed">
          This guide is general legal information for India and not a substitute for advice from a qualified advocate. Timelines, documents, and procedure can change based on state, facts, and court practice.
        </div>
      </div>
    </article>
  );
}
