'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import RightsAccordion from '@/components/RightsAccordion';
import TemplateCard from '@/components/TemplateCard';
import HelplineCard from '@/components/HelplineCard';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState({ rights: [], templates: [], helplines: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults({ rights: [], templates: [], helplines: [] });
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const totalResults = results.rights.length + results.templates.length + results.helplines.length;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-8 transition-colors">
        &larr; Back to Home
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Search Results for "{query}"
        </h1>
        {!loading && (
          <p className="text-text-secondary">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : totalResults === 0 ? (
        <div className="glass p-12 text-center rounded-2xl">
          <span className="text-4xl mb-4 block">🔍</span>
          <h2 className="text-xl font-bold text-text-primary mb-2">No results found</h2>
          <p className="text-text-secondary mb-6">We couldn't find any rights, templates, or helplines matching your query.</p>
          <Link href="/" className="text-accent hover:underline">
            Try a different search
          </Link>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Rights Results */}
          {results.rights.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-primary/20 pb-2">
                Legal Rights ({results.rights.length})
              </h2>
              <div className="space-y-4">
                <RightsAccordion rights={results.rights} />
              </div>
            </section>
          )}

          {/* Templates Results */}
          {results.templates.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-primary/20 pb-2">
                Document Templates ({results.templates.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.templates.map(template => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </section>
          )}

          {/* Helplines Results */}
          {results.helplines.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-primary/20 pb-2">
                Emergency Helplines ({results.helplines.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.helplines.map(helpline => (
                  <HelplineCard key={helpline.id} helpline={helpline} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-24 pb-12 flex justify-center">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
