'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TemplateCard({ template }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const { id, title, category, description, whenToUse, templateText } = template;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(templateText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = templateText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary font-[family-name:var(--font-outfit)]">
            {title}
          </h3>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent font-medium">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {description}
        </p>

        {/* When to use */}
        {whenToUse && (
          <div className="mb-4 p-3 rounded-lg bg-surface/50 border border-primary/10">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              When to use
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              {whenToUse}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/templates/${id}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Auto-Fill PDF
          </Link>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-surface-light/50 text-text-primary hover:bg-surface-light transition-colors"
            aria-expanded={isExpanded}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {isExpanded ? 'Hide' : 'Read'}
          </button>
        </div>
      </div>

      {/* Expandable preview */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-primary/10 p-5 sm:p-6 bg-surface/30">
          <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
            Template Preview
          </h4>
          <pre className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap font-sans bg-bg-dark/50 rounded-lg p-4 max-h-96 overflow-y-auto">
            {templateText}
          </pre>
        </div>
      </div>
    </div>
  );
}
