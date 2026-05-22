'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Scale } from 'lucide-react';

export default function InstallPWA() {
  const [show, setShow] = useState(false);
  const deferredPromptRef = useRef(null);
  const timerRef = useRef(null);

  const handler = useCallback((e) => {
    e.preventDefault();
    deferredPromptRef.current = e;

    // Show after 30s or if second visit
    const visits = parseInt(localStorage.getItem('nyaysathi-visit-count') || '0', 10) + 1;
    localStorage.setItem('nyaysathi-visit-count', String(visits));

    if (visits >= 2) {
      setShow(true);
    } else {
      timerRef.current = setTimeout(() => setShow(true), 30000);
    }
  }, []);

  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    // Don't show if previously dismissed
    const dismissed = localStorage.getItem('nyaysathi-pwa-dismissed');
    if (dismissed) return;

    // Check if already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const eventListener = (e) => handlerRef.current(e);

    window.addEventListener('beforeinstallprompt', eventListener);

    return () => {
      window.removeEventListener('beforeinstallprompt', eventListener);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleInstall = async () => {
    const promptEvent = deferredPromptRef.current;
    if (!promptEvent) return;
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      setShow(false);
    }
    deferredPromptRef.current = null;
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('nyaysathi-pwa-dismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-28 md:bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 animate-slide-up">
      <div className="glass-strong rounded-2xl p-5 shadow-2xl shadow-primary/20 border border-primary/25">
        <div className="flex items-start gap-4">
          {/* App icon */}
          <div className="shrink-0 size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Scale className="size-7 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text-primary mb-1">
              Install NyaySathi
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              Get quick access to your legal rights (works offline too!)
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
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
