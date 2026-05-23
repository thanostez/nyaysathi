'use client';

import { useState } from 'react';
import { trafficFines, searchTrafficFines } from '@/data';

export default function TrafficFinesPage() {
  const [query, setQuery] = useState('');
  
  const displayedFines = query.trim().length >= 2 
    ? searchTrafficFines(query) 
    : trafficFines;

  return (
    <div className="min-h-[calc(100vh-64px)] pb-20">
      {/* Header */}
      <div className="bg-surface border-b border-primary/10 pt-24 sm:pt-28 pb-8 px-4 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-32 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-[1600px] mx-auto relative z-10 text-center">
          <span className="inline-block text-4xl mb-4">🚦</span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">
            Traffic Fines & RTO Rules
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Know the latest official penalties under the Motor Vehicles Act. Don&apos;t get overcharged.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-8">
        {/* Search Bar */}
        <div className="mb-8 relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-secondary">
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search offenses (e.g. helmet, license, speeding)..."
            className="w-full pl-12 pr-4 py-4 rounded-xl glass border-primary/20 text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/40 transition-all"
          />
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedFines.length > 0 ? (
            displayedFines.map((item) => (
              <div key={item.id} className="glass rounded-xl p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-3">
                  <h3 className="font-semibold text-text-primary text-lg font-[family-name:var(--font-outfit)] leading-tight">
                    {item.offense}
                  </h3>
                  <span className="shrink-0 inline-block px-3 py-1.5 rounded-lg bg-accent/10 text-accent font-bold text-sm sm:text-base border border-accent/20">
                    {item.fine}
                  </span>
                </div>
                <div className="text-xs text-text-secondary uppercase tracking-widest font-bold mb-2">
                  {item.section}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed bg-surface-light/40 p-3 rounded-lg border border-surface-light">
                  <span className="font-semibold text-text-primary mr-1">💡 What to do:</span>
                  {item.action}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center glass rounded-2xl border-dashed">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">No offenses found</h3>
              <p className="text-text-secondary">Try searching for different keywords</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
