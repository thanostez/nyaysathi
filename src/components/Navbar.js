'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageTranslate from '@/components/LanguageTranslate';
import { useTheme } from 'next-themes';
import { Sun, Moon, Search, ChevronDown, Scale } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rights', label: 'Legal Rights' },
  { href: '/templates', label: 'Templates' },
  { href: '/helplines', label: 'Helplines' },
  { href: '/traffic', label: 'Traffic Fines' },
];

const categoryLinks = [
  { href: '/categories/employment', label: 'Employment & Labor' },
  { href: '/categories/tenant', label: 'Tenant & Housing' },
  { href: '/categories/consumer', label: 'Consumer Protection' },
  { href: '/categories/women-safety', label: "Women's Safety" },
  { href: '/categories/police', label: 'Police & Criminal' },
  { href: '/categories/cyber-crime', label: 'Cyber Crime' },
  { href: '/categories/family', label: 'Family Law' },
  { href: '/categories/student', label: 'Student & Education' },
];

export default function Navbar() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none flex justify-center">
      <nav 
        className={`pointer-events-auto transition-all duration-500 flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 h-16 rounded-full border ${
          scrolled 
            ? 'glass-strong shadow-xl border-primary/20 bg-surface/80' 
            : 'glass shadow-lg border-primary/10 bg-surface/50'
        }`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold font-[family-name:var(--font-outfit)] hover:scale-105 transition-transform"
          aria-label="NyaySathi Home"
        >
          <Scale className="w-8 h-8 text-primary drop-shadow-md" aria-hidden="true" />
          <span className="gradient-text tracking-tight">NyaySathi</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isActive(link.href)
                  ? 'text-primary bg-primary/10 shadow-inner'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/60'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                pathname.startsWith('/categories')
                  ? 'text-primary bg-primary/10 shadow-inner'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/60'
              }`}
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
            >
              Categories
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesOpen && (
              <div
                className="absolute right-0 top-full mt-3 w-64 glass-strong border border-primary/20 rounded-2xl shadow-2xl py-2 animate-slide-down overflow-hidden backdrop-blur-xl"
                role="menu"
              >
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    role="menuitem"
                    className={`block px-5 py-3 text-sm font-medium transition-all ${
                      pathname === cat.href
                        ? 'text-primary bg-primary/10 pl-6 border-l-2 border-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-light/80 hover:pl-6'
                    }`}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search link */}
          <Link
            href="/search"
            className="p-2.5 rounded-full text-text-secondary hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-text-secondary hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          {/* Language Translation (hidden on very small screens) */}
          <div className="hidden sm:block pl-2 border-l border-primary/10">
            <LanguageTranslate />
          </div>
        </div>
      </nav>
    </header>
  );
}
