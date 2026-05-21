'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageTranslate from '@/components/LanguageTranslate';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/templates', label: 'Templates' },
  { href: '/helplines', label: 'Helplines' },
  { href: '/traffic', label: 'Traffic Fines' },
];

const categoryLinks = [
  { href: '/categories/employment', label: '💼 Employment & Labor' },
  { href: '/categories/tenant', label: '🏠 Tenant & Housing' },
  { href: '/categories/consumer', label: '🛒 Consumer Protection' },
  { href: '/categories/women-safety', label: "🛡️ Women's Safety" },
  { href: '/categories/police', label: '⚖️ Police & Criminal' },
  { href: '/categories/cyber-crime', label: '💻 Cyber Crime' },
  { href: '/categories/family', label: '👨‍👩‍👧‍👦 Family Law' },
  { href: '/categories/student', label: '🎓 Student & Education' },
];

export default function Navbar() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCategoriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold font-[family-name:var(--font-space-grotesk)] hover:opacity-80 transition-opacity"
            aria-label="NyaySathi Home"
          >
            <span className="text-2xl" aria-hidden="true">⚖️</span>
            <span className="gradient-text">NyaySathi</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Categories dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/categories')
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/50'
                }`}
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
              >
                Categories
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {categoriesOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-64 glass-strong rounded-xl shadow-xl shadow-primary/10 py-2 animate-slide-down"
                  role="menu"
                >
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      role="menuitem"
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === cat.href
                          ? 'text-primary bg-primary/10'
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/50'
                      }`}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search link */}
            <Link
              href="/search"
              className="ml-2 p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>

          <div className="flex items-center gap-2 ml-auto md:ml-4">
            <LanguageTranslate />
          </div>
        </div>
      </nav>
    </header>
  );
}
