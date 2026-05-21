import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
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
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, #6C5CE7, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float"
        style={{
          background: 'radial-gradient(circle, #00CEC9, transparent 70%)',
          animationDelay: '-3s',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-10 blur-2xl animate-float"
        style={{
          background: 'radial-gradient(circle, #A29BFE, transparent 70%)',
          animationDelay: '-1.5s',
        }}
        aria-hidden="true"
      />

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-4 h-4 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '-2s' }} aria-hidden="true" />
      <div className="absolute top-40 left-20 w-3 h-3 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '-4s' }} aria-hidden="true" />
      <div className="absolute bottom-32 left-1/3 w-5 h-5 rounded-full bg-primary-light/20 animate-float" style={{ animationDelay: '-1s' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary-light border border-primary/20">
            Free Legal Rights Assistant for India
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 animate-slide-up"
        >
          <span className="gradient-text">Know Your Rights.</span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Understand the law. Protect yourself. Take action.
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <SearchBar />
        </div>

        {/* Floating stats */}
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 animate-slide-up"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { number: '80+', label: 'Rights Covered' },
            { number: '15+', label: 'Legal Templates' },
            { number: '50+', label: 'Helplines' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 text-sm sm:text-base"
            >
              <span className="font-bold gradient-text text-lg sm:text-xl">
                {stat.number}
              </span>
              <span className="text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
