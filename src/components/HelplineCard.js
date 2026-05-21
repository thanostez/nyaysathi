export default function HelplineCard({ helpline }) {
  const { name, number, description, category, hours, languages, is24x7 } = helpline;

  return (
    <div className="glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/25">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)] mb-1">
            {name}
          </h3>
          <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-primary/15 text-primary-light font-medium">
            {category}
          </span>
        </div>

        {/* 24/7 indicator */}
        {is24x7 && (
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping"
                aria-hidden="true"
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" aria-hidden="true" />
            </span>
            <span className="text-xs font-medium text-success">24/7</span>
          </div>
        )}
      </div>

      {/* Phone number — large, click-to-call */}
      <a
        href={`tel:${number}`}
        className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity mb-3 font-[family-name:var(--font-space-grotesk)]"
        aria-label={`Call ${name} at ${number}`}
      >
        <svg className="w-6 h-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {number}
      </a>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-3">
        {description}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
        {hours && (
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {hours}
          </div>
        )}
        {languages && (
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {Array.isArray(languages) ? languages.join(', ') : languages}
          </div>
        )}
      </div>
    </div>
  );
}
