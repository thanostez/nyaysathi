'use client';

import { useState } from 'react';
import { helplines } from '@/data';
import HelplineCard from '@/components/HelplineCard';
import Link from 'next/link';
import NearestPoliceBtn from '@/components/NearestPoliceBtn';

export default function HelplinesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(helplines.map(h => h.category))];

  // Separate emergency numbers (112, 100, etc.) from others for top display
  const emergencyHelplines = helplines.filter(h => h.number.length <= 4);
  const regularHelplines = helplines.filter(h => h.number.length > 4);

  const displayHelplines = activeCategory === 'All' 
    ? helplines 
    : helplines.filter(h => h.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link href="/" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-8 transition-colors">
        &larr; Back to Home
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-text-primary mb-4">Emergency Helplines & Legal Aid</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Verified contact numbers for immediate assistance, reporting crimes, or seeking free legal advice.
        </p>
      </div>

      {/* Immediate Emergency Section */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-danger flex items-center gap-2">
            <span className="relative flex size-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
              <span className="relative inline-flex rounded-full size-3 bg-danger"></span>
            </span>
            Critical Emergency Numbers
          </h2>
          <NearestPoliceBtn className="py-2.5 px-4 text-sm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyHelplines.map(helpline => (
            <HelplineCard key={helpline.id} helpline={helpline} isEmergency={true} />
          ))}
        </div>
      </section>

      {/* Directory Section */}
      <section>
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <h2 className="text-2xl font-semibold text-text-primary">Helpline Directory</h2>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayHelplines.map(helpline => (
            <HelplineCard key={helpline.id} helpline={helpline} />
          ))}
        </div>
      </section>

      {/* Legal Aid Info */}
      <section className="mt-16 glass p-8 border-accent/30">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Free Legal Aid (NALSA)</h2>
        <p className="text-text-secondary mb-4">
          Under the Legal Services Authorities Act, 1987, certain categories of citizens are entitled to free legal services (lawyers, court fees, etc.) across India.
        </p>
        <h3 className="font-semibold text-text-primary mb-2">Who is eligible?</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1 mb-6">
          <li>Women and children</li>
          <li>Members of SC/ST</li>
          <li>Industrial workmen</li>
          <li>Victims of mass disaster, violence, flood, drought, earthquake</li>
          <li>Persons with annual income less than the amount prescribed by state govt. (usually Rs. 1-3 Lakhs)</li>
          <li>Persons in custody</li>
        </ul>
        <a 
          href="https://nalsa.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-accent hover:bg-accent-light text-bg-dark rounded-xl font-bold transition-colors"
        >
          Apply Online at NALSA
        </a>
      </section>
    </div>
  );
}
