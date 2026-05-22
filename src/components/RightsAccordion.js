'use client';

import { useState } from 'react';
import Link from 'next/link';

const severityColors = {
  high: 'bg-danger/20 text-danger',
  medium: 'bg-warning/20 text-warning',
  low: 'bg-success/20 text-success',
};

const severityLabels = {
  high: 'High Impact',
  medium: 'Medium Impact',
  low: 'Low Impact',
};

export default function RightsAccordion({ rights }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (!rights || rights.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-text-secondary">No rights found in this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3" role="region" aria-label="Rights list">
      {rights.map((right) => {
        const isOpen = openId === right.id;
        const severity = right.severity || 'medium';

        return (
          <div
            key={right.id}
            className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen ? 'shadow-lg shadow-primary/10 border-primary/30' : ''
            }`}
          >
            {/* Header / Toggle button */}
            <button
              onClick={() => toggle(right.id)}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-surface-light/30 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`rights-panel-${right.id}`}
              id={`rights-header-${right.id}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary truncate">
                    {right.title}
                  </h3>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${severityColors[severity]}`}>
                    {severityLabels[severity]}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary line-clamp-1">
                  {right.description}
                </p>
              </div>

              <svg
                className={`w-5 h-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Expandable content */}
            <div
              id={`rights-panel-${right.id}`}
              role="region"
              aria-labelledby={`rights-header-${right.id}`}
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-4 border-t border-primary/10">
                {/* Plain language */}
                <div className="pt-4">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    In Simple Words
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {right.plainLanguage}
                  </p>
                </div>

                {/* Relevant law */}
                {right.relevantLaw && (
                  <div>
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      Relevant Law
                    </h4>
                    <div className="bg-surface/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-text-primary">
                        {right.relevantLaw.act}
                        {right.relevantLaw.section && ` — ${right.relevantLaw.section}`}
                      </p>
                      {right.relevantLaw.description && (
                        <p className="text-xs text-text-secondary mt-1">
                          {right.relevantLaw.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* View full details link */}
                <Link
                  href={`/rights/${right.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors group"
                >
                  View Full Details
                  <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
