'use client';

import { useState, useMemo } from 'react';
import { getAllRights, categories } from '@/data';
import Link from 'next/link';
import { Scale, Search, X, Sparkles, ChevronRight } from 'lucide-react';
import RightsAccordion from '@/components/RightsAccordion';

export default function AllRightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allRights = useMemo(() => getAllRights(), []);

  const filteredRights = useMemo(() => {
    return allRights.filter((right) => {
      const matchesCategory = selectedCategory === 'all' || right.categorySlug === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        right.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        right.plainLanguage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (right.keywords && right.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [allRights, selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const getCategoryCount = (slug) => {
    if (slug === 'all') return allRights.length;
    return allRights.filter(r => r.categorySlug === slug).length;
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header section with background glow */}
      <div className="relative mb-12 text-center py-10 rounded-3xl glass border border-surface-light overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-4 uppercase tracking-wider">
            <Scale className="size-4" />
            Consolidated legal database
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
            Legal Rights Directory
          </h1>
          <p className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            Browse through simplified legal protections in plain language. Filter by category or search for specific legal issues below.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left column: Filters & Search */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Search container */}
          <div className="glass p-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">Search Rights</h3>
            <div className="relative flex items-center bg-surface/50 border border-surface-light rounded-xl focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/20 transition-all p-1">
              <Search className="size-5 text-text-secondary ml-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type keywords (e.g. salary, rent)..."
                className="w-full bg-transparent border-none outline-none py-2 px-3 text-sm text-text-primary placeholder:text-text-secondary/50 font-[family-name:var(--font-outfit)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 mr-1 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-light transition-colors"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>

          {/* Categories select (Sidebar desktop / Pills mobile) */}
          <div className="glass p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">Categories</h3>
              {selectedCategory !== 'all' && (
                <button 
                  onClick={() => setSelectedCategory('all')} 
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>

            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none lg:overflow-visible">
              {/* All Categories Button */}
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex-shrink-0 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border text-left ${
                  selectedCategory === 'all'
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface/50 border-surface-light text-text-secondary hover:text-text-primary hover:bg-surface-light/60'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>📂</span> All Categories
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-surface-light border border-surface-light text-text-secondary'
                }`}>
                  {getCategoryCount('all')}
                </span>
              </button>

              {/* Individual Category Buttons */}
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`flex-shrink-0 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border text-left ${
                      isSelected
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                        : 'bg-surface/50 border-surface-light text-text-secondary hover:text-text-primary hover:bg-surface-light/60'
                    }`}
                    style={isSelected ? { backgroundColor: cat.color, borderColor: cat.color } : {}}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span>{cat.icon}</span> {cat.title}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-surface-light border border-surface-light text-text-secondary'
                    }`}>
                      {getCategoryCount(cat.slug)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: Results List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between border-b border-surface-light pb-4">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                {selectedCategory === 'all' 
                  ? 'All Protections' 
                  : `${categories.find(c => c.slug === selectedCategory)?.title} Rights`
                }
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Showing {filteredRights.length} right{filteredRights.length !== 1 ? 's' : ''}
              </p>
            </div>

            {selectedCategory === 'all' && !searchQuery && (
              <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                <Sparkles className="size-3.5 text-accent animate-pulse" />
                Click titles to expand & read law
              </div>
            )}
          </div>

          {filteredRights.length === 0 ? (
            <div className="glass p-12 text-center rounded-2xl border border-surface-light shadow-xl">
              <span className="text-4xl mb-4 block">🔍</span>
              <h3 className="text-lg font-semibold text-text-primary mb-2">No matching rights found</h3>
              <p className="text-text-secondary max-w-md mx-auto mb-6 text-sm">
                We couldn't find any rights matching your current search or category selections. Try adjusting your inputs.
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl border border-primary/20 hover:border-primary/50 text-sm font-semibold text-primary bg-primary/5 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <RightsAccordion rights={filteredRights} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
