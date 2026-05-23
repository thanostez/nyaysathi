export const metadata = {
  title: 'Privacy Policy - NyayMitra',
  description:
    'Privacy policy for NyayMitra, including what information may be processed and how users can contact us.',
};

const sections = [
  {
    title: 'Information you provide',
    body:
      'If you contact us by email, we may receive your name, email address, message, and any details you choose to share. Avoid sending sensitive personal case details unless necessary.',
  },
  {
    title: 'Usage and analytics',
    body:
      'NyayMitra may use privacy-conscious analytics and hosting logs to understand performance, traffic, device type, pages visited, and errors. This helps improve the service.',
  },
  {
    title: 'Templates and local inputs',
    body:
      'Document template fields are designed for user convenience. Do not enter highly sensitive information unless you understand where and how your browser or device stores it.',
  },
  {
    title: 'Third-party links',
    body:
      'The site links to government portals, helplines, maps, and external resources. Their privacy practices are governed by their own policies.',
  },
  {
    title: 'Contact',
    body:
      'For privacy questions or correction requests, email contact@nyaymitra.help.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-12 w-full mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Trust and safety</span>
        <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mt-3 mb-4">
          Privacy Policy
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
