'use client';

import { useState, useEffect, useRef } from 'react';

export default function InstallPWA() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Don't show if previously dismissed
    const dismissed = localStorage.getItem('nyaysathi-pwa-dismissed');
    if (dismissed) return;

    // Check if already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Show after 30s or if second visit
      const visits = parseInt(localStorage.getItem('nyaysathi-visit-count') || '0', 10) + 1;
      localStorage.setItem('nyaysathi-visit-count', String(visits));

      if (visits >= 2) {
        setShow(true);
      } else {
        timerRef.current = setTimeout(() => setShow(true), 30000);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('nyaysathi-pwa-dismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 animate-slide-up">
      <div className="glass-strong rounded-2xl p-5 shadow-2xl shadow-primary/20 border border-primary/25">
        <div className="flex items-start gap-4">
          {/* App icon */}
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
            ⚖️
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text-primary mb-1">
              Install NyaySathi
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              Get quick access to your legal rights — works offline too!
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={handleInstall}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-primary to-primary-dark text-white hover:opacity-90 transition-opacity"
              >
                Install App
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-light/50 transition-colors"
              >
                Not now
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="shrink-0 p-1 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-light/50 transition-colors"
            aria-label="Close install prompt"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
