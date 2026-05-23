import Link from 'next/link';
import { BookOpen, ChevronRight, Search } from 'lucide-react';
import { guides } from '@/data';

export const metadata = {
  title: 'Legal Guides India - NyayMitra',
  description:
    'Plain-language legal guides for India covering legal notices, consumer complaints, rent agreements, cyber complaints, IPC and BNS sections, divorce, and cheque bounce complaints.',
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-12 w-full mx-auto">
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-4 uppercase tracking-wider">
          <Search className="size-4" />
          Popular legal searches
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
          Legal Guides for India
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          Clear, practical explainers for common legal questions people search for before taking action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light text-xs font-semibold text-text-secondary border border-primary/10">
                <BookOpen className="size-3.5 text-primary" />
                {guide.category}
              </span>
              <span className="text-xs text-text-secondary">{guide.readTime}</span>
            </div>

            <h2 className="text-xl font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)] leading-snug">
              {guide.searchTitle}
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              {guide.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Read guide
              <ChevronRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
