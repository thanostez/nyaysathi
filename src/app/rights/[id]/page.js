import { getRightById, getAllRights, getCategoryBySlug } from '@/data';
import ActionSteps from '@/components/ActionSteps';
import Link from 'next/link';

export async function generateStaticParams() {
  const rights = getAllRights();
  return rights.map((right) => ({
    id: right.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const right = getRightById(id);
  return {
    title: `${right?.title || 'Right Details'} - NyaySathi`,
    description: right?.description || 'Understand your legal rights.',
  };
}

export default async function RightDetailPage({ params }) {
  const { id } = await params;
  const right = getRightById(id);

  if (!right) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-text-primary mb-4">Right Not Found</h1>
        <Link href="/" className="text-accent hover:text-accent-light transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  const category = getCategoryBySlug(right.categorySlug);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-danger bg-danger/10 border-danger/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-text-secondary bg-surface-light border-primary/20';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex text-sm mb-8 text-text-secondary">
        <ol className="flex items-center gap-x-2">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li>
            <Link href={`/categories/${category?.slug}`} className="hover:text-primary transition-colors">
              {category?.title}
            </Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="text-text-primary truncate max-w-[200px] sm:max-w-xs">{right.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${getSeverityColor(right.severity)}`}>
            {right.severity} PRIORITY
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold border border-primary/20 bg-surface text-text-secondary uppercase tracking-wider">
            {category?.title}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary mb-6 leading-tight">
          {right.title}
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          {right.description}
        </p>
      </div>

      <div className="space-y-10">
        {/* Plain Language Box */}
        <section className="glass p-6 sm:p-8 border-accent/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
          <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
            <span>🗣️</span> What this means for you
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {right.plainLanguage}
          </p>
        </section>

        {/* Action Steps */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Step-by-Step Action Plan</h2>
          <div className="glass p-6 sm:p-8">
            <ActionSteps steps={right.actionSteps} />
          </div>
        </section>

        {/* Legal Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Law */}
          <section className="glass p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span>⚖️</span> The Relevant Law
            </h2>
            <div className="bg-surface-light rounded-xl p-4 border border-primary/10">
              <p className="font-semibold text-text-primary mb-1">{right.relevantLaw.act} ({right.relevantLaw.year})</p>
              <p className="text-accent text-sm font-medium mb-3">{right.relevantLaw.section}</p>
              <p className="text-sm text-text-secondary italic border-l-2 border-primary/30 pl-3">
                &quot;{right.relevantLaw.text}&quot;
              </p>
            </div>
          </section>

          {/* Punishment */}
          <section className="glass p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <span>⚠️</span> Punishment / Penalty
            </h2>
            <div className="bg-danger/5 rounded-xl p-4 border border-danger/20 h-full">
              <p className="text-text-secondary">
                {right.punishment || 'Civil remedy available.'}
              </p>
            </div>
          </section>
        </div>

        {/* Required Documents */}
        {right.requiredDocuments && right.requiredDocuments.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Required Documents</h2>
            <div className="glass p-6">
              <ul className="space-y-3">
                {right.requiredDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <span className="text-accent mt-1">📄</span>
                    <span className="text-text-secondary">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Next Steps CTA */}
        <section className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {right.relatedTemplateId && (
            <Link 
              href="/templates" 
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-medium transition-colors text-center"
            >
              Get Template Document
            </Link>
          )}
          <Link 
            href="/helplines" 
            className="px-6 py-3 bg-surface border border-primary/30 hover:border-primary text-text-primary rounded-xl font-medium transition-colors text-center"
          >
            Find Helplines
          </Link>
        </section>
      </div>
    </div>
  );
}
