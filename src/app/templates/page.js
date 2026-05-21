'use client';

import { useState } from 'react';
import { templates, categories } from '@/data';
import TemplateCard from '@/components/TemplateCard';
import Link from 'next/link';

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories from templates
  const templateCategories = ['All', ...new Set(templates.map(t => t.category))];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = activeCategory === 'All' || template.category === activeCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-8 transition-colors">
        &larr; Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">Legal Document Templates</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Ready-to-use, legally sound templates for complaints, notices, and applications. Just fill in the blanks and you're ready to take action.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between">
        {/* Search */}
        <div className="w-full md:w-96 relative">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-light border border-primary/20 rounded-xl py-3 pl-10 pr-4 text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
          <span className="absolute left-3 top-3.5 text-text-secondary">🔍</span>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
          {templateCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-surface border border-primary/20 text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass rounded-2xl">
          <p className="text-text-secondary text-lg">No templates found matching your search.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
