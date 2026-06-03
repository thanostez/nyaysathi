import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import EmergencyStrip from '@/components/EmergencyStrip';
import StatsBar from '@/components/StatsBar';
import { categories } from '@/data';
import Link from 'next/link';
import NearestPoliceBtn from '@/components/NearestPoliceBtn';

import { Search, BookOpen, Zap, Car, ArrowRight, WandSparkles } from 'lucide-react';

const howItWorks = [
  {
    icon: <Search className="size-10 text-primary" />,
    title: 'Search',
    description: 'Describe your situation in plain language or browse categories to find the rights that apply to you.',
  },
  {
    icon: <BookOpen className="size-10 text-accent" />,
    title: 'Learn',
    description: 'Read easy-to-understand explanations of your legal rights, relevant laws, and what protections you have.',
  },
  {
    icon: <Zap className="size-10 text-warning" />,
    title: 'Act',
    description: 'Follow step-by-step action guides, use ready-made templates, and connect with helplines for support.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero with Search */}
      <Hero />

      {/* Emergency Strip */}
      <EmergencyStrip />

      {/* Solve My Problem Banner */}
      <section className="py-8 bg-surface border-y border-primary/10" aria-label="Solve My Problem">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-12">
          <Link
            href="/solve-my-problem"
            className="group flex flex-col gap-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/15 via-surface to-accent/15 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                <WandSparkles className="size-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary">
                  Have a Legal Problem?
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-text-secondary leading-relaxed">
                  Describe your situation and get a step-by-step legal roadmap in seconds.
                </p>
              </div>
            </div>
            <span className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white group-hover:bg-primary-hover">
              Solve My Problem
              <ArrowRight className="size-5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="py-8 bg-surface-light/30 border-b border-primary/10" aria-label="Quick Tools">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/traffic" 
              className="w-full sm:w-auto flex items-center justify-center gap-4 px-6 py-4 rounded-xl glass hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="p-2 bg-primary/20 rounded-full text-primary">
                <Car className="size-8" />
              </div>
              <div className="text-left">
                <div className="font-bold text-text-primary">Traffic Fines Lookup</div>
                <div className="text-xs text-text-secondary">Check official penalties & rules</div>
              </div>
            </Link>
            
            <NearestPoliceBtn className="w-full sm:w-auto py-4 px-6 h-[74px]" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20" aria-labelledby="categories-heading">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              id="categories-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-[family-name:var(--font-outfit)] mb-4"
            >
              <span className="gradient-text">Know Your Rights</span> By Category
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore legal rights organized by topic. Each category covers key laws, plain-language explanations, and actionable steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <Link
              href="/rights"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 text-base"
            >
              Browse All Legal Rights
              <span className="text-lg">⚖️</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-surface/50" aria-labelledby="how-it-works-heading">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-outfit)] mb-4"
            >
              How <span className="gradient-text">NyayMitra</span> Works
            </h2>
            <p className="text-text-secondary">
              Three simple steps to understanding your legal rights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="glass rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/25"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {step.icon}
                </div>
                <div className="inline-flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary text-sm font-bold mb-3" aria-hidden="true">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-text-primary font-[family-name:var(--font-outfit)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />
    </>
  );
}

