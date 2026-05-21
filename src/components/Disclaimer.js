'use client';

import { useState, useEffect } from 'react';

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
      className="fixed bottom-0 left-0 right-0 z-40 animate-slide-up"
      role="alert"
    >
      <div className="glass-strong border-t border-warning/20 shadow-lg shadow-warning/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-warning text-lg shrink-0" aria-hidden="true">⚠️</span>
            <p className="text-xs sm:text-sm text-text-secondary">
              <span className="font-semibold text-warning">Disclaimer:</span>{' '}
              This platform provides general legal information only and does not constitute legal advice. Always consult a qualified lawyer for specific situations.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg bg-warning/15 text-warning hover:bg-warning/25 transition-colors"
            aria-label="Dismiss disclaimer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
