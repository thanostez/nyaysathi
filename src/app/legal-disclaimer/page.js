export const metadata = {
  title: 'Legal Disclaimer - NyayMitra',
  description:
    'NyayMitra legal disclaimer explaining that the site provides general legal information and not legal advice.',
};

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <header className="mb-10">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Legal disclaimer</span>
        <h1 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-outfit)] text-text-primary mt-3 mb-4">
          Legal Disclaimer
        </h1>
        <p className="text-text-secondary leading-relaxed">Last updated: 23 May 2026</p>
      </header>

      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">General information only</h2>
          <p>
            NyayMitra provides general legal information for awareness and education. It is not legal advice, and it should not be treated as a substitute for advice from a qualified advocate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">No professional relationship</h2>
          <p>
            Use of this website, templates, guides, or contact email does not create a lawyer-client, advisor-client, or confidential professional relationship.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Laws and facts vary</h2>
          <p>
            Legal outcomes depend on facts, documents, deadlines, jurisdiction, court practice, and changes in law. Always verify current rules before taking action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Urgent situations</h2>
          <p>
            For emergencies, safety risks, arrest, domestic violence, cyber blackmail, financial fraud, or court deadlines, contact emergency services, police, legal aid, or a qualified advocate immediately.
          </p>
        </section>
      </div>
    </div>
  );
}
