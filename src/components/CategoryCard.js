import Link from 'next/link';

export default function CategoryCard({ category }) {
  const { slug, title, icon, description, color, count } = category;

  return (
    <Link
      href={`/categories/${slug}`}
      className="group relative block rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 focus-visible:-translate-y-2 bg-surface/50 backdrop-blur-xl border border-surface-light hover:shadow-2xl overflow-hidden"
      style={{
        '--card-color': color,
        boxShadow: 'var(--glass-shadow)',
      }}
    >
      {/* Background Glow */}
      <div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${color}22 0%, transparent 60%, ${color}11 100%)`,
          boxShadow: `inset 0 0 0 1px ${color}40`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Icon with gradient bounce */}
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}05)`,
            border: `1px solid ${color}30`,
          }}
          aria-hidden="true"
        >
          <span className="drop-shadow-md">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 font-[family-name:var(--font-outfit)] transition-colors duration-300"
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2 transition-colors duration-300 group-hover:text-text-primary/80">
          {description}
        </p>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-light transition-colors duration-300 group-hover:border-[color:var(--card-color)]/20">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md"
            style={{
              backgroundColor: `${color}15`,
              color: color,
              border: `1px solid ${color}30`
            }}
          >
            {count} Rights
          </span>
          <span 
            className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary group-hover:text-white transition-all duration-300 group-hover:translate-x-1" 
            style={{ backgroundColor: 'transparent' }}
            aria-hidden="true"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
