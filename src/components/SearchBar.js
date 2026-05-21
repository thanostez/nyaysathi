'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ large = false }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ rights: [], templates: [], helplines: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);
  const router = useRouter();

  const allResults = [
    ...results.rights.map((r) => ({ ...r, type: 'right', href: `/rights/${r.id}` })),
    ...results.templates.map((t) => ({ ...t, type: 'template', href: '/templates' })),
    ...results.helplines.map((h) => ({ ...h, type: 'helpline', href: '/helplines' })),
  ];

  const doSearch = useCallback(async (q) => {
    if (!q || q.trim().length < 2) {
      setResults({ rights: [], templates: [], helplines: [] });
      setIsOpen(false);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
      const data = await res.json();
      setResults(data);
      setIsOpen(true);
      setHighlightIndex(-1);
    } catch {
      setResults({ rights: [], templates: [], helplines: [] });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => doSearch(val), 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen || allResults.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => (i < allResults.length - 1 ? i + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => (i > 0 ? i - 1 : allResults.length - 1));
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      e.preventDefault();
      const item = allResults[highlightIndex];
      setIsOpen(false);
      setQuery('');
      router.push(item.href);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const typeLabels = { right: '📜 Right', template: '📄 Template', helpline: '📞 Helpline' };
  const typeColors = {
    right: 'bg-primary/20 text-primary-light',
    template: 'bg-accent/20 text-accent-light',
    helpline: 'bg-success/20 text-success',
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <form onSubmit={handleSubmit} role="search" aria-label="Search legal rights">
        <div className={`relative flex items-center glass ${large ? 'rounded-2xl' : 'rounded-xl'} transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-lg focus-within:shadow-primary/10`}>
          {/* Search icon */}
          <div className="pl-4 text-text-secondary" aria-hidden="true">
            <svg className={`${large ? 'w-6 h-6' : 'w-5 h-5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => query.trim().length >= 2 && allResults.length > 0 && setIsOpen(true)}
            placeholder='Describe your situation... e.g. "landlord not returning deposit"'
            className={`w-full bg-transparent border-none outline-none ${large ? 'px-4 py-4 text-base sm:text-lg' : 'px-3 py-3 text-sm sm:text-base'} text-text-primary placeholder:text-text-secondary/60`}
            aria-label="Search"
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-expanded={isOpen}
            role="combobox"
          />

          {isLoading && (
            <div className="pr-4" aria-hidden="true">
              <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}

          {query && !isLoading && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults({ rights: [], templates: [], helplines: [] });
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="pr-4 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </form>

      {/* Dropdown results */}
      {isOpen && allResults.length > 0 && (
        <div
          id="search-results"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-3 bg-surface border border-primary/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] max-h-[28rem] overflow-y-auto z-50 overflow-hidden custom-scrollbar"
        >
          {results.rights.length > 0 && (
            <div className="py-2">
              <div className="px-5 py-2 flex items-center gap-2 border-b border-primary/10 bg-surface-light/30">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Legal Rights</span>
                <span className="text-[10px] font-bold bg-primary/20 text-primary-light px-2 py-0.5 rounded-full">{results.rights.length}</span>
              </div>
              <div className="flex flex-col">
                {results.rights.slice(0, 4).map((r) => {
                  const idx = allResults.findIndex((item) => item.id === r.id && item.type === 'right');
                  return (
                    <button
                      key={r.id}
                      role="option"
                      aria-selected={highlightIndex === idx}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                        router.push(`/rights/${r.id}`);
                      }}
                      className={`w-full text-left px-5 py-3 border-b border-primary/5 last:border-0 flex items-center justify-between gap-4 transition-all ${
                        highlightIndex === idx ? 'bg-primary/15 pl-6' : 'hover:bg-surface-light/50 hover:pl-6'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-text-primary mb-0.5 truncate">{r.title}</h4>
                        <p className="text-xs text-text-secondary truncate">{r.description}</p>
                      </div>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {results.templates.length > 0 && (
            <div className="py-2 border-t border-primary/10">
              <div className="px-5 py-2 flex items-center gap-2 border-b border-primary/10 bg-surface-light/30">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Templates</span>
                <span className="text-[10px] font-bold bg-accent/20 text-accent-light px-2 py-0.5 rounded-full">{results.templates.length}</span>
              </div>
              <div className="flex flex-col">
                {results.templates.slice(0, 3).map((t, i) => {
                  const idx = allResults.findIndex((item) => item.id === t.id && item.type === 'template');
                  return (
                    <button
                      key={t.id || i}
                      role="option"
                      aria-selected={highlightIndex === idx}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                        router.push('/templates');
                      }}
                      className={`w-full text-left px-5 py-3 border-b border-primary/5 last:border-0 flex items-center justify-between gap-4 transition-all ${
                        highlightIndex === idx ? 'bg-primary/15 pl-6' : 'hover:bg-surface-light/50 hover:pl-6'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-text-primary mb-0.5 truncate">{t.title}</h4>
                        <p className="text-xs text-text-secondary truncate">{t.description}</p>
                      </div>
                      <span className="shrink-0 text-[10px] uppercase font-bold text-accent border border-accent/30 rounded px-1.5 py-0.5">{t.category}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {results.helplines.length > 0 && (
            <div className="py-2 border-t border-primary/10">
              <div className="px-5 py-2 flex items-center gap-2 border-b border-primary/10 bg-surface-light/30">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Helplines</span>
                <span className="text-[10px] font-bold bg-success/20 text-success px-2 py-0.5 rounded-full">{results.helplines.length}</span>
              </div>
              <div className="flex flex-col">
                {results.helplines.slice(0, 3).map((h, i) => {
                  const idx = allResults.findIndex((item) => item.id === h.id && item.type === 'helpline');
                  return (
                    <button
                      key={h.id || i}
                      role="option"
                      aria-selected={highlightIndex === idx}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery('');
                        router.push('/helplines');
                      }}
                      className={`w-full text-left px-5 py-3 border-b border-primary/5 last:border-0 flex items-center justify-between gap-4 transition-all ${
                        highlightIndex === idx ? 'bg-primary/15 pl-6' : 'hover:bg-surface-light/50 hover:pl-6'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-text-primary mb-0.5 truncate">{h.name}</h4>
                        <p className="text-xs text-text-secondary truncate">Call: <span className="font-bold text-success">{h.number}</span></p>
                      </div>
                      <span className="shrink-0">
                        <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* View all results link */}
          <div className="bg-surface border-t border-primary/20 sticky bottom-0">
            <button
              onClick={() => {
                setIsOpen(false);
                router.push(`/search?q=${encodeURIComponent(query.trim())}`);
              }}
              className="w-full text-center text-sm font-semibold text-primary hover:text-primary-light hover:bg-primary/10 transition-colors py-4 flex items-center justify-center gap-2"
            >
              See all {allResults.length} results
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      )}

      {isOpen && allResults.length === 0 && query.trim().length >= 2 && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-strong rounded-xl shadow-2xl shadow-primary/10 z-50 p-6 text-center">
          <p className="text-text-secondary text-sm">No results found for &ldquo;{query}&rdquo;</p>
          <p className="text-text-secondary/60 text-xs mt-1">Try different keywords or browse categories</p>
        </div>
      )}
    </div>
  );
}
