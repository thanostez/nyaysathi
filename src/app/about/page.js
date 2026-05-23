import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react';

export const metadata = {
  title: 'About NyayMitra - Made for Indians',
  description:
    'NyayMitra is a legal awareness project made for Indians, focused on plain-language rights, templates, helplines, and practical legal guides.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <header className="mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-4 uppercase tracking-wider">
          <HeartHandshake className="size-4" />
          Made for Indians
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mb-5">
          Legal information should feel understandable.
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
          NyayMitra helps Indian citizens understand common legal rights, prepare basic documents, and find useful next steps without getting lost in legal jargon.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          {
            icon: ShieldCheck,
            title: 'Plain-language rights',
            text: 'Complex legal topics are converted into simple explanations, checklists, and action steps.',
          },
          {
            icon: Users,
            title: 'Built around Indian problems',
            text: 'Consumer complaints, rent disputes, cyber fraud, employment issues, family matters, traffic rules, and more.',
          },
          {
            icon: HeartHandshake,
            title: 'Trust first',
            text: 'We clearly separate legal information from legal advice and point users toward qualified help when needed.',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <section key={item.title} className="glass p-6 rounded-2xl border border-primary/10">
              <Icon className="size-8 text-primary mb-4" />
              <h2 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
            </section>
          );
        })}
      </div>

      <section id="founder-story" className="glass p-6 sm:p-8 rounded-2xl border border-primary/10 mb-10">
        <h2 className="text-2xl font-semibold text-text-primary mb-4 font-[family-name:var(--font-outfit)]">
          Founder story
        </h2>
        <div className="space-y-4 text-text-secondary leading-relaxed">
          <p>
            NyayMitra began with a simple observation: many people do not need a courtroom on day one. They first need to know what their problem is called, what documents matter, what deadlines may apply, and where to ask for help.
          </p>
          <p>
            The project is built as a public legal awareness companion for everyday Indian situations. It does not replace an advocate, but it can help a person walk into a police station, consumer helpline, employer conversation, landlord dispute, or legal aid office with more confidence.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-warning/30 bg-warning/10 p-6 text-text-secondary leading-relaxed">
        <h2 className="text-lg font-semibold text-text-primary mb-2">Important trust note</h2>
        <p className="mb-4">
          NyayMitra provides general legal information only. For advice on your personal facts, speak to a qualified advocate.
        </p>
        <Link href="/legal-disclaimer" className="text-primary font-semibold hover:text-primary-light">
          Read the full legal disclaimer
        </Link>
      </section>
    </div>
  );
}
