'use client';

import { useEffect, useRef } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi (हिंदी)' },
  { code: 'bn', label: 'Bengali (বাংলা)' },
  { code: 'te', label: 'Telugu (తెలుగు)' },
  { code: 'mr', label: 'Marathi (मराठी)' },
  { code: 'ta', label: 'Tamil (தமிழ்)' },
  { code: 'gu', label: 'Gujarati (ગુજરાતી)' },
  { code: 'ur', label: 'Urdu (اردو)' },
  { code: 'kn', label: 'Kannada (ಕನ್ನಡ)' },
  { code: 'or', label: 'Odia (ଓଡ଼ିଆ)' },
  { code: 'ml', label: 'Malayalam (മലയാളം)' },
  { code: 'pa', label: 'Punjabi (ਪੰਜਾਬੀ)' },
  { code: 'as', label: 'Assamese (অসমীয়া)' },
];

const getCookieDomains = () => {
  if (typeof window === 'undefined') return [];
  const hostname = window.location.hostname;
  const domains = [hostname];
  
  if (hostname.includes('.') && !/^[0-9.]+$/.test(hostname)) {
    const parts = hostname.split('.');
    if (parts.length > 2) {
      const apexDomain = parts.slice(-2).join('.');
      domains.push(apexDomain);
      domains.push(`.${apexDomain}`);
      domains.push(`.${hostname}`);
    } else {
      domains.push(`.${hostname}`);
    }
  }
  return domains;
};

const clearLanguageCookie = () => {
  if (typeof document === 'undefined') return;
  const domains = getCookieDomains();
  
  // Clear without domain (defaults to current host)
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
  // Clear with domains
  domains.forEach((domain) => {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=/;`;
  });
};

const setLanguageCookie = (lang) => {
  if (typeof document === 'undefined') return;
  
  // Clear any existing ones on different domains to prevent duplicates
  clearLanguageCookie();

  const value = `/en/${lang}`;
  const domains = getCookieDomains();

  // Set on default host
  document.cookie = `googtrans=${value}; path=/;`;
  
  // Set on all domains
  domains.forEach((domain) => {
    document.cookie = `googtrans=${value}; domain=${domain}; path=/;`;
  });
};

function getSavedLanguage() {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
  return match?.[1]?.split('/')[2] || 'en';
}

function loadGoogleTranslate() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('google-translate-script')) return;

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  script.onerror = () => {
    console.warn('Google Translate failed to load.');
  };
  document.body.appendChild(script);
}

export default function LanguageTranslate() {
  const selectRef = useRef(null);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,bn,as,pa,mr,ta,te,gu,kn,ml,or,ur,en',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    const savedLang = getSavedLanguage();
    if (selectRef.current) {
      selectRef.current.value = savedLang;
    }

    if (savedLang !== 'en') {
      loadGoogleTranslate();
    }
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;

    if (selectedLang === 'en') {
      clearLanguageCookie();
    } else {
      setLanguageCookie(selectedLang);
    }

    loadGoogleTranslate();
    window.location.reload();
  };
  return (
    <div className="relative inline-block">
      
      {/* 100% Custom Native UI */}
      <div className="relative flex items-center">
        <div className="absolute left-3 pointer-events-none text-text-secondary z-10 flex items-center justify-center">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <select
          ref={selectRef}
          defaultValue="en"
          onChange={handleLanguageChange}
          onFocus={loadGoogleTranslate}
          className="appearance-none bg-surface-light/30 hover:bg-surface-light/50 border border-primary/20 text-text-primary text-xs md:text-sm rounded-lg pl-8 md:pl-9 pr-6 md:pr-8 py-1.5 md:py-2 outline-none cursor-pointer backdrop-blur-md transition-all font-medium focus:border-primary/50 shadow-sm shadow-primary/5 max-w-[100px] sm:max-w-[130px] md:max-w-none truncate"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-surface text-text-primary">
              {lang.label}
            </option>
          ))}
        </select>

        <div className="absolute right-2.5 pointer-events-none text-text-secondary">
          <svg className="size-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Hidden Google Translate Engine */}
      <div id="google_translate_element" className="hidden"></div>

      <style>{`
        /* Eradicate the Google banner perfectly */
        .goog-te-banner-frame,
        .VIpgJd-ZVi9od-ORHb-OEVmcd,
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
        #goog-gt-tt {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        body {
          top: 0px !important;
          position: relative !important;
        }
      `}</style>
    </div>
  );
}
