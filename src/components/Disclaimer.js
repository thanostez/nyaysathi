'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  const [dismissed, setDismissed] = useState(true); // Start hidden, show after mount check

  useEffect(() => {
    const stored = localStorage.getItem('nyaysathi-disclaimer-dismissed');
    if (!stored) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('nyaysathi-disclaimer-dismissed', 'true');
  };

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-24 md:bottom-0 left-0 right-0 z-40 animate-slide-up px-4 md:px-0"
      role="alert"
    >
      <div className="glass-strong border border-warning/20 md:border-b-0 md:border-x-0 md:border-t shadow-lg shadow-warning/5 rounded-2xl md:rounded-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <AlertTriangle className="text-warning w-6 h-6 shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-text-secondary">
              <span className="font-semibold text-warning">Disclaimer:</span>{' '}
              This platform provides general legal information only and does not constitute legal advice. Always consult a qualified lawyer for specific situations.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="shrink-0 px-3 py-1.5 text-xs font-bold rounded-lg bg-warning/15 text-warning hover:bg-warning/25 transition-colors"
            aria-label="Dismiss disclaimer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
