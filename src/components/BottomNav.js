'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaTrafficLight, FaFileAlt, FaPhoneAlt, FaList } from 'react-icons/fa';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/rights', label: 'Rights', icon: FaList },
    { href: '/traffic', label: 'Traffic', icon: FaTrafficLight },
    { href: '/templates', label: 'Docs', icon: FaFileAlt },
    { href: '/helplines', label: 'Helpline', icon: FaPhoneAlt },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false; // Anchor links don't have a strict active state
    return pathname.startsWith(href);
  };

  return (
    <nav className="md:hidden fixed bottom-4 left-3 right-3 z-50 glass-strong border border-primary/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between p-2">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full gap-1 transition-colors duration-200 ${
                active ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <div
                className={`relative flex items-center justify-center w-10 h-8 rounded-full transition-all duration-300 ${
                  active ? 'bg-primary/20 scale-110' : 'bg-transparent'
                }`}
              >
                <Icon className={`text-lg ${active ? 'animate-pulse' : ''}`} />
              </div>
              <span className={`text-[10px] tracking-tight ${active ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
