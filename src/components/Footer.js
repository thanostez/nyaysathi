import Link from 'next/link';

const footerCategories = [
  { href: '/categories/employment', label: 'Employment & Labor' },
  { href: '/categories/tenant', label: 'Tenant & Housing' },
  { href: '/categories/consumer', label: 'Consumer Protection' },
  { href: '/categories/women-safety', label: "Women's Safety" },
  { href: '/categories/police', label: 'Police & Criminal' },
  { href: '/categories/cyber-crime', label: 'Cyber Crime' },
  { href: '/categories/family', label: 'Family Law' },
  { href: '/categories/student', label: 'Student & Education' },
  { href: '/categories/government-services', label: 'Government & Civic' },
  { href: '/categories/health', label: 'Health & Patient' },
  { href: '/categories/banking-finance', label: 'Banking & Finance' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/templates', label: 'Templates' },
  { href: '/helplines', label: 'Helplines' },
  { href: '/search', label: 'Search' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold font-[family-name:var(--font-outfit)] mb-4 hover:opacity-80 transition-opacity">
              <span className="text-2xl" aria-hidden="true">⚖️</span>
              <span className="gradient-text">NyaySathi</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-xs">
              Empowering every Indian citizen to understand their legal rights in plain, simple language.
            </p>
            <p className="text-sm text-text-secondary">
              Made with <span className="text-danger" aria-label="love">❤️</span> for India
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {footerCategories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Legal
            </h3>
            <div className="text-xs text-text-secondary leading-relaxed space-y-3">
              <p>
                This platform provides general legal information based on Indian laws and is not a substitute for professional legal advice.
              </p>
              <p>
                Always consult a qualified advocate enrolled with the Bar Council of India for specific legal situations.
              </p>
              <p>
                Call <a href="tel:15100" className="text-primary hover:text-primary-light transition-colors font-medium">15100</a> for free government legal aid (NALSA).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary" suppressHydrationWarning>
            © {new Date().getFullYear()} NyaySathi. Open-source legal awareness project.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary">
              🇮🇳 For Indian citizens
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
