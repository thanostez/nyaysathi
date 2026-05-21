import Link from 'next/link';

export default function CategoryCard({ category }) {
  const { slug, title, icon, description, color, count } = category;

  return (
    <Link
      href={`/categories/${slug}`}
      className="group relative block glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 focus-visible:scale-[1.03]"
      style={{
        '--card-color': color,
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${color}22, transparent 50%, ${color}11)`,
          border: `1px solid ${color}40`,
          borderRadius: 'inherit',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="text-4xl mb-4" aria-hidden="true">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Count badge + arrow */}
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: `${color}20`,
              color: color,
            }}
          >
            {count} Rights
          </span>
          <span className="text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all duration-300" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
