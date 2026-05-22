import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[85vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            'linear-gradient(135deg, #05051A 0%, #1a0a3e 25%, #0D0D2B 50%, #05201f 75%, #05051A 100%)',
          backgroundSize: '400% 400%',
        }}
        aria-hidden="true"
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-1/4 left-1/4 size-72 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #6C5CE7, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 size-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00CEC9, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="animate-fade-in mb-8">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase bg-primary/10 text-primary-light border border-primary/20 shadow-[0_0_15px_rgba(108,92,231,0.2)]">
            Free Legal Rights Assistant for India
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-tight font-semibold font-[family-name:var(--font-outfit)] mb-8 animate-slide-up tracking-tight"
        >
          <span className="gradient-text drop-shadow-lg">Know Your Rights.</span>
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary max-w-3xl mx-auto mb-14 animate-slide-up leading-relaxed"
          style={{ animationDelay: '0.15s' }}
        >
          Understand the law. Protect yourself. <span className="text-text-primary font-medium">Take action.</span>
        </p>

        {/* Search bar */}
        <div className="w-full max-w-3xl mx-auto mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <SearchBar large={true} />
        </div>

        {/* Floating stats */}
        <div
          className="flex flex-wrap justify-center gap-8 sm:gap-16 animate-slide-up bg-surface/30 backdrop-blur-md border border-white/5 py-6 px-10 rounded-3xl"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { number: '80+', label: 'Rights Covered' },
            { number: '15+', label: 'Legal Templates' },
            { number: '50+', label: 'Helplines' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-semibold gradient-text text-3xl sm:text-4xl">
                {stat.number}
              </span>
              <span className="text-sm sm:text-base text-text-secondary font-medium tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-dark to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
