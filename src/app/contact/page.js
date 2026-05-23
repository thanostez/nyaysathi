import { Mail, MapPin, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Contact NyayMitra',
  description:
    'Contact NyayMitra for feedback, corrections, partnerships, and legal awareness collaboration. NyayMitra does not provide personal legal advice by email.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <header className="mb-10 max-w-3xl">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Contact</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mt-3 mb-4">
          Get in touch with NyayMitra
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          Reach out for corrections, feedback, partnerships, accessibility issues, or public legal awareness collaboration.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <section className="glass p-6 rounded-2xl border border-primary/10">
          <Mail className="size-8 text-primary mb-4" />
          <h2 className="text-xl font-semibold text-text-primary mb-2">Email</h2>
          <a href="mailto:contact@nyaymitra.help" className="text-primary font-semibold hover:text-primary-light">
            contact@nyaymitra.help
          </a>
          <p className="text-sm text-text-secondary leading-relaxed mt-3">
            Best for feedback, corrections, partnerships, media, and product queries.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl border border-primary/10">
          <MapPin className="size-8 text-primary mb-4" />
          <h2 className="text-xl font-semibold text-text-primary mb-2">Service area</h2>
          <p className="text-text-secondary leading-relaxed">
            NyayMitra is made for users in India and focuses on Indian legal information.
          </p>
        </section>
      </div>

      <section className="rounded-2xl border border-warning/30 bg-warning/10 p-6">
        <div className="flex gap-4">
          <ShieldAlert className="size-7 text-warning flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-2">For urgent legal or safety issues</h2>
            <p className="text-text-secondary leading-relaxed">
              Do not wait for an email reply. Contact emergency services, local police, a qualified advocate, or a legal aid authority. You can call NALSA legal aid at 15100 where available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
