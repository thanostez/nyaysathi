'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Rights Covered', target: 80, suffix: '+' },
  { label: 'Legal Templates', target: 15, suffix: '+' },
  { label: 'Helplines Listed', target: 50, suffix: '+' },
];

function AnimatedCounter({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    let raf;

    const step = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
      } else {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [isVisible, target]);

  return (
    <span className="text-4xl sm:text-5xl font-bold gradient-text font-[family-name:var(--font-outfit)]">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20" aria-label="Platform statistics">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
                <p className="text-sm sm:text-base text-text-secondary font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
