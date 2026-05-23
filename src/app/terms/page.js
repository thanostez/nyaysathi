export const metadata = {
  title: 'Terms of Use - NyayMitra',
  description:
    'Terms of use for NyayMitra, including acceptable use, legal information limits, and user responsibility.',
};

const sections = [
  {
    title: 'Use of the site',
    body:
      'NyayMitra is provided for general legal awareness and educational use. You agree to use the site lawfully and responsibly.',
  },
  {
    title: 'No lawyer-client relationship',
    body:
      'Using this site, reading guides, downloading templates, or contacting us does not create a lawyer-client relationship.',
  },
  {
    title: 'User responsibility',
    body:
      'You are responsible for checking facts, deadlines, documents, local rules, and seeking professional advice before acting in a personal legal matter.',
  },
  {
    title: 'Templates',
    body:
      'Templates are starting points and may need changes for your facts, state, forum, court, department, or legal strategy.',
  },
  {
    title: 'Changes',
    body:
      'We may update content, features, policies, and these terms as the project improves.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-12 w-full mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Terms</span>
        <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mt-3 mb-4">
          Terms of Use
        </h1>
        <p className="text-text-secondary leading-relaxed">Last updated: 23 May 2026</p>
      </header>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-text-primary mb-3">{section.title}</h2>
            <p className="text-text-secondary leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
