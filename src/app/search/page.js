'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search as SearchIcon, X, ArrowLeft, Sparkles, Scale, Info } from 'lucide-react';
import RightsAccordion from '@/components/RightsAccordion';
import TemplateCard from '@/components/TemplateCard';
import HelplineCard from '@/components/HelplineCard';

function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState({ rights: [], templates: [], helplines: [] });
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Update input value when query parameter changes
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults({ rights: [], templates: [], helplines: [] });
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  const handleClear = () => {
    setInputValue('');
    router.push('/search');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleTagClick = (tag) => {
    setInputValue(tag);
    router.push(`/search?q=${encodeURIComponent(tag)}`);
  };

  const popularSearches = [
    { text: "Security deposit", icon: "🏠", category: "Tenant Rights" },
    { text: "FIR registration", icon: "👮", category: "Police Rules" },
    { text: "Cyber fraud refund", icon: "💻", category: "Cyber Crime" },
    { text: "Unpaid salary", icon: "💼", category: "Employment" },
    { text: "Maternity benefit", icon: "🤰", category: "Women Safety" },
    { text: "Defective product", icon: "🛍️", category: "Consumer Law" },
    { text: "Traffic fine rules", icon: "🚦", category: "Traffic Laws" },
    { text: "Ragging prevention", icon: "🎓", category: "Student Rights" }
  ];

  const totalResults = results.rights.length + results.templates.length + results.helplines.length;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back button and title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors group w-fit"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Legal Search Engine</span>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="mb-12">
        <form onSubmit={handleSearchSubmit} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-10 group-focus-within:opacity-30 blur transition-all duration-300 pointer-events-none" />
          <div className="relative flex items-center glass rounded-2xl border border-surface-light shadow-xl transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-primary/5 p-1">
            <div className="pl-4 text-text-secondary" aria-hidden="true">
              <SearchIcon className="w-6 h-6 text-primary/80" />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search rights, procedures, templates, or helplines..."
              className="w-full bg-transparent border-none outline-none px-4 py-4 text-base sm:text-lg text-text-primary placeholder:text-text-secondary/50 font-[family-name:var(--font-outfit)]"
              aria-label="Search NyaySathi"
            />

            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 mr-1 rounded-xl text-text-secondary hover:text-text-primary hover:bg-surface-light transition-all"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 text-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Results / Empty States */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-text-secondary font-medium animate-pulse">Searching NyaySathi database...</p>
        </div>
      ) : !query.trim() ? (
        /* Blank/Initial state */
        <div className="space-y-12 animate-fade-in">
          <div className="text-center py-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
              How can we assist you legally today?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              Type your query above to search through our database of structured legal rights, downloadable documents, and support helplines.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                Popular Search Queries
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {popularSearches.map((search) => (
                <button
                  key={search.text}
                  onClick={() => handleTagClick(search.text)}
                  className="flex items-start gap-3 p-4 rounded-xl glass border border-surface-light hover:border-primary/30 hover:bg-surface-light/50 transition-all text-left group"
                >
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{search.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                      {search.text}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-text-secondary mt-1 block">
                      {search.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass border border-surface-light bg-surface-light/10 flex items-start gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-1">Confidential & Private</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Your search queries are processed locally and securely. NyaySathi does not log your personal legal questions or queries. Use plain English or simple terms to find specific sections.
              </p>
            </div>
          </div>
        </div>
      ) : totalResults === 0 ? (
        /* No results state */
        <div className="space-y-12 animate-fade-in">
          <div className="glass p-12 text-center rounded-2xl border border-surface-light shadow-xl">
            <span className="text-5xl mb-4 block">🔍</span>
            <h2 className="text-xl font-bold text-text-primary mb-2">No results found for "{query}"</h2>
            <p className="text-text-secondary max-w-md mx-auto mb-6">
              We couldn't find any matching rights, templates, or helplines. Try checking your spelling or using simpler keywords.
            </p>
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/20 hover:border-primary/50 text-sm font-semibold text-primary bg-primary/5 transition-all"
            >
              Reset Search Filter
            </button>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                Try a popular topic instead
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {popularSearches.map((search) => (
                <button
                  key={search.text}
                  onClick={() => handleTagClick(search.text)}
                  className="flex items-start gap-3 p-4 rounded-xl glass border border-surface-light hover:border-primary/30 hover:bg-surface-light/50 transition-all text-left group"
                >
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{search.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                      {search.text}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-text-secondary mt-1 block">
                      {search.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Results state */
        <div className="space-y-12 animate-fade-in">
          <div className="border-b border-surface-light pb-4">
            <h2 className="text-lg font-bold text-text-primary">
              Search results for "{query}"
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Showing {totalResults} result{totalResults !== 1 ? 's' : ''} in total
            </p>
          </div>

          {/* Rights Results */}
          {results.rights.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary border-l-4 border-primary pl-3">
                Legal Rights & Protections ({results.rights.length})
              </h3>
              <div className="space-y-4">
                <RightsAccordion rights={results.rights} />
              </div>
            </section>
          )}

          {/* Templates Results */}
          {results.templates.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary border-l-4 border-accent pl-3">
                Legal Document Templates ({results.templates.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.templates.map(template => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </section>
          )}

          {/* Helplines Results */}
          {results.helplines.length > 0 && (
            <section className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary border-l-4 border-success pl-3">
                Emergency Helplines ({results.helplines.length})
              </h3>
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
      <div className="min-h-screen pt-28 pb-12 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

