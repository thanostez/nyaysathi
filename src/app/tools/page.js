import Link from 'next/link';
import { FileText, Landmark, Search, ShieldCheck, WandSparkles } from 'lucide-react';

export const metadata = {
  title: 'Legal Tools India - NyayMitra',
  description:
    'Use practical legal tools for India including complaint letter generator, FIR draft generator, legal notice generator, rights checker, and legal terminology simplifier.',
};

const priorityTools = [
  {
    title: 'Complaint Letter Generator',
    description: 'Create structured complaint letters for consumer, landlord, employer, and service disputes.',
    href: '/templates/consumer-notice',
    icon: FileText,
  },
  {
    title: 'FIR Draft Generator',
    description: 'Prepare a clear FIR application with incident facts, witnesses, evidence, and requested action.',
    href: '/templates/fir-application',
    icon: Landmark,
  },
  {
    title: 'Legal Notice Generator',
    description: 'Start from ready-to-use notice formats and adapt them to your dispute.',
    href: '/templates',
    icon: ShieldCheck,
  },
];

const upcomingTools = [
  {
    title: 'IPC/BNS Search',
    description: 'Search common offence terms and understand current BNS context in simple language.',
    href: '/guides/ipc-sections-simplified',
    icon: Search,
  },
  {
    title: 'Rights Checker',
    description: 'Search your situation and get matching rights, guides, templates, and helplines.',
    href: '/search',
    icon: WandSparkles,
  },
  {
    title: 'Legal Terminology Simplifier',
    description: 'Understand legal words through plain-language explainers and examples.',
    href: '/guides',
    icon: FileText,
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-12 w-full mx-auto">
      <header className="mb-12 max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-4 uppercase tracking-wider">
          Legal tools
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mb-4">
          Practical Legal Tools for Indian Citizens
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          Generate first drafts, search your issue, and move from confusion to a clear next step.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-5 font-[family-name:var(--font-outfit)]">
          Start here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {priorityTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.title} href={tool.href} className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all">
                <Icon className="size-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-3">{tool.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-5 font-[family-name:var(--font-outfit)]">
          Explore more
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {upcomingTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.title} href={tool.href} className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all">
                <Icon className="size-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-3">{tool.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
