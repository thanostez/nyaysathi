'use client';

import { useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Check,
  Clipboard,
  ClipboardCheck,
  Download,
  FileSignature,
  FileText,
  Gavel,
  Loader2,
  Mail,
  MessageSquareText,
  Scale,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const examples = [
  'My employer has not paid my salary for two months and is ignoring my messages.',
  'I was cheated through a UPI payment after a fake online seller promised delivery.',
  "My landlord is refusing to return my security deposit even after I vacated the flat.",
  'A builder took booking money but has stopped construction and is not answering calls.',
];

const quickFacts = ['Money involved', 'Dates and timeline', 'Messages or notices', 'Authority to approach'];

const emptyResult = {
  category: '',
  subcategory: '',
  severity: '',
  rights: '',
  evidence: [],
  roadmap: [],
  timeline: '',
  documents: [],
};

const baseDraftTypes = [
  'FIR Draft',
  'Police Complaint',
  'Legal Notice',
  'Consumer Complaint',
  'Cyber Crime Complaint',
  'Recovery Notice',
];

function normalizeList(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
}

function cleanDocumentName(name) {
  return String(name || '')
    .replace(/^generate\s+/i, '')
    .trim();
}

function getDraftTypes(result) {
  const suggested = normalizeList(result.documents).map(cleanDocumentName).filter(Boolean);
  return Array.from(new Set([...suggested, ...baseDraftTypes]));
}

function severityTone(severity) {
  const value = String(severity || '').toLowerCase();
  if (value.includes('urgent')) return 'border-danger/25 bg-danger/10 text-danger';
  if (value.includes('high')) return 'border-warning/30 bg-warning/10 text-warning';
  if (value.includes('low')) return 'border-success/25 bg-success/10 text-success';
  return 'border-primary/20 bg-primary/10 text-primary';
}

function buildDocumentDraft(type, problem, result) {
  const today = new Date().toLocaleDateString('en-IN');
  const issue = result.subcategory || result.category || 'legal issue';
  const evidence = normalizeList(result.evidence);
  const roadmap = normalizeList(result.roadmap);
  const evidenceText = evidence.length
    ? evidence.map((item) => `- ${item}`).join('\n')
    : '- Identity proof\n- Screenshots, receipts, agreements, bank records, notices, and call logs\n- Names and contact details of witnesses';
  const requestedActions = roadmap.length
    ? roadmap.map((step, index) => `${index + 1}. ${step}`).join('\n')
    : '1. Take the complaint on record.\n2. Review the attached evidence.\n3. Call the opposite party or responsible person for response.\n4. Provide written acknowledgement and next steps.';

  const commonHeader = `Date: ${today}

To,
The Concerned Authority / Opposite Party

Subject: ${type} regarding ${issue}

Applicant / Complainant:
Name:
Phone:
Email:
Address:

Opposite Party / Accused:
Name:
Phone / Email:
Address, if known:
`;

  if (type.toLowerCase().includes('fir')) {
    return `${commonHeader}
Request for registration of FIR

Respected Sir/Madam,

I request you to register an FIR and take lawful action based on the facts below.

Brief Facts:
${problem}

Possible Legal Concern:
${result.rights || 'The facts may disclose a cognizable offence or other legal violation. The exact sections should be confirmed by the police or a qualified lawyer.'}

Evidence Available:
${evidenceText}

Requested Action:
1. Register my complaint/FIR after reviewing the facts.
2. Preserve relevant digital or documentary evidence.
3. Investigate the persons involved and recover the loss, if applicable.
4. Provide a complaint/FIR acknowledgement number.

Expected Timeline:
${result.timeline || 'Please treat this as time-sensitive and confirm the next step in writing.'}

Signature:
Name:`;
  }

  if (type.toLowerCase().includes('cyber')) {
    return `${commonHeader}
Cyber Crime Complaint

Respected Sir/Madam,

I request urgent assistance for the cyber incident described below.

Incident Summary:
${problem}

Evidence and Digital Details:
${evidenceText}

Relief Requested:
1. Record this cyber complaint.
2. Freeze or trace the relevant account, wallet, UPI ID, phone number, email, website, or social profile where possible.
3. Help recover the money/data and take action against the responsible persons.
4. Share acknowledgement and case reference details.

Legal Position:
${result.rights || 'Cyber fraud and online harassment may require immediate reporting with complete digital evidence.'}

Signature:
Name:`;
  }

  return `${commonHeader}
${type}

Facts:
${problem}

Legal Position:
${result.rights || 'The issue may involve enforceable legal rights. Please verify this draft with a qualified lawyer before sending.'}

Evidence Available / Required:
${evidenceText}

Requested Action:
${requestedActions}

Timeline / Deadline:
${result.timeline || 'Please respond within a reasonable period from receipt of this communication.'}

Declaration:
The facts stated above are true to the best of my knowledge and supported by the available records.

Signature:
Name:`;
}

export default function SolveMyProblemClient() {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState(null);
  const [activeDraft, setActiveDraft] = useState('FIR Draft');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const safeResult = useMemo(() => ({ ...emptyResult, ...(result || {}) }), [result]);
  const evidence = useMemo(() => normalizeList(safeResult.evidence), [safeResult.evidence]);
  const roadmap = useMemo(() => normalizeList(safeResult.roadmap), [safeResult.roadmap]);
  const draftTypes = useMemo(() => getDraftTypes(safeResult), [safeResult]);
  const activeDraftContent = useMemo(
    () => buildDocumentDraft(activeDraft, problem, safeResult),
    [activeDraft, problem, safeResult]
  );

  async function analyzeProblem(event) {
    event.preventDefault();
    setError('');
    setCopied(false);

    if (problem.trim().length < 20) {
      setError('Please add a few more facts so the generated roadmap and drafts are useful.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/solve-my-problem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to analyze the situation right now.');
      }

      setResult(data);
      const firstDraft = getDraftTypes(data)[0] || 'FIR Draft';
      setActiveDraft(firstDraft);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function copyDraft() {
    if (!activeDraftContent) return;
    await navigator.clipboard.writeText(activeDraftContent);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function downloadDraft() {
    if (!activeDraftContent) return;
    const blob = new Blob([activeDraftContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeDraft.toLowerCase().replaceAll(' ', '-')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen px-4 pb-16 pt-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="grid items-end gap-6 pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.45fr)]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase text-primary">
              <Sparkles className="size-4" />
              AI Legal GPS
            </span>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-outfit)] text-3xl font-semibold leading-tight text-text-primary sm:text-5xl">
              Turn a legal problem into a clear action plan and ready drafts.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
              Describe what happened once. NyayMitra prepares the issue summary, rights position, evidence checklist,
              action roadmap, timeline, and document drafts including FIR format.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {quickFacts.map((fact) => (
              <div key={fact} className="rounded-lg border border-primary/10 bg-surface px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-text-primary">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(340px,0.42fr)_minmax(0,0.58fr)]">
          <section className="rounded-lg border border-primary/10 bg-surface p-5 shadow-xl shadow-primary/5 sm:p-6">
            <form onSubmit={analyzeProblem} className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-text-primary">Case Intake</h2>
                  <p className="mt-1 text-sm text-text-secondary">{problem.trim().length} characters entered</p>
                </div>
                <ShieldCheck className="size-9 text-primary" />
              </div>

              <textarea
                id="problem"
                value={problem}
                onChange={(event) => setProblem(event.target.value)}
                placeholder="Example: On 12 May, I paid Rs. 25,000 through UPI to an online seller for a phone. They stopped replying and blocked my number. I have screenshots, payment reference, and chat history."
                className="min-h-72 w-full resize-y rounded-lg border border-primary/15 bg-bg-dark/5 px-4 py-4 text-sm leading-6 text-text-primary placeholder:text-text-secondary/70 focus:border-primary focus:outline-none dark:bg-surface-light/35"
              />

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-text-secondary">Quick examples</p>
                {examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setProblem(example)}
                    className="group flex w-full items-center justify-between gap-3 rounded-lg border border-primary/10 bg-surface-light/35 px-4 py-3 text-left text-sm text-text-secondary hover:border-primary/40 hover:text-text-primary"
                  >
                    <span>{example}</span>
                    <ArrowRight className="size-4 shrink-0 opacity-60 group-hover:translate-x-1" />
                  </button>
                ))}
              </div>

              {error ? (
                <div className="flex items-start gap-3 rounded-lg border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-text-primary">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-danger" />
                  <p>{error}</p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
                {isLoading ? 'Generating dossier...' : 'Generate Legal Dossier'}
              </button>
            </form>
          </section>

          <section className="space-y-5">
            {!result ? (
              <div className="rounded-lg border border-primary/10 bg-surface p-6 shadow-xl shadow-primary/5 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Issue summary', 'Category, subcategory, and severity'],
                    ['Rights position', 'Plain-English legal information'],
                    ['Evidence list', 'Documents and proofs to preserve'],
                    ['Generated drafts', 'FIR, complaint, notice, and more'],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-lg border border-primary/10 bg-surface-light/35 p-5">
                      <BadgeCheck className="mb-4 size-6 text-primary" />
                      <h3 className="font-semibold text-text-primary">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-text-secondary">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="rounded-lg border border-primary/10 bg-surface p-5 shadow-xl shadow-primary/5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase text-text-secondary">Problem identified</p>
                      <h2 className="mt-2 text-2xl font-semibold text-text-primary">
                        {safeResult.subcategory || safeResult.category || 'Legal Issue'}
                      </h2>
                    </div>
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-bold ${severityTone(safeResult.severity)}`}>
                      <Scale className="size-4" />
                      {safeResult.severity || 'Medium'}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg bg-surface-light/35 p-4">
                      <p className="text-xs font-bold uppercase text-text-secondary">Category</p>
                      <p className="mt-2 font-semibold text-text-primary">{safeResult.category || 'Not specified'}</p>
                    </div>
                    <div className="rounded-lg bg-surface-light/35 p-4">
                      <p className="text-xs font-bold uppercase text-text-secondary">Timeline</p>
                      <p className="mt-2 text-sm leading-6 text-text-primary">{safeResult.timeline || 'Depends on forum and urgency.'}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.65fr)]">
                  <div className="rounded-lg border border-primary/10 bg-surface p-5 shadow-xl shadow-primary/5 sm:p-6">
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
                      <Gavel className="size-5 text-primary" />
                      Rights Position
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-text-secondary">{safeResult.rights}</p>
                  </div>

                  <div className="rounded-lg border border-primary/10 bg-surface p-5 shadow-xl shadow-primary/5 sm:p-6">
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
                      <ClipboardCheck className="size-5 text-accent" />
                      Evidence
                    </h2>
                    <div className="mt-4 space-y-2">
                      {evidence.map((item) => (
                        <label key={item} className="flex items-start gap-3 rounded-lg bg-surface-light/35 p-3 text-sm text-text-secondary">
                          <input type="checkbox" className="mt-1 size-4 accent-primary" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-primary/10 bg-surface p-5 shadow-xl shadow-primary/5 sm:p-6">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
                    <MessageSquareText className="size-5 text-primary" />
                    Action Roadmap
                  </h2>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {roadmap.map((step, index) => (
                      <div key={`${step}-${index}`} className="flex gap-3 rounded-lg border border-primary/10 bg-surface-light/30 p-4">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-text-secondary">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-primary/10 bg-surface p-5 shadow-xl shadow-primary/5 sm:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
                        <FileSignature className="size-5 text-primary" />
                        Generated Drafts
                      </h2>
                      <p className="mt-1 text-sm text-text-secondary">All drafts are generated from your problem summary and analysis.</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={copyDraft}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/15 px-4 py-2 text-sm font-bold text-text-primary hover:border-primary/50"
                      >
                        {copied ? <Check className="size-4 text-success" /> : <Clipboard className="size-4" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                      <button
                        type="button"
                        onClick={downloadDraft}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-bg-dark hover:opacity-90"
                      >
                        <Download className="size-4" />
                        Download
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
                    {draftTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setActiveDraft(type)}
                        className={`whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-semibold ${
                          activeDraft === type
                            ? 'border-primary bg-primary text-white'
                            : 'border-primary/15 bg-surface-light/35 text-text-secondary hover:border-primary/50 hover:text-text-primary'
                        }`}
                      >
                        {type.toLowerCase().includes('fir') ? <FileText className="mr-2 inline size-4" /> : <Mail className="mr-2 inline size-4" />}
                        {type}
                      </button>
                    ))}
                  </div>

                  <pre className="mt-4 max-h-[520px] overflow-auto whitespace-pre-wrap rounded-lg border border-primary/10 bg-bg-dark/70 p-4 text-sm leading-7 text-slate-100 dark:bg-black/25">
                    {activeDraftContent}
                  </pre>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-text-secondary">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-warning" />
                  <p>
                    This is AI-generated legal information and a draft starting point. Review names, dates, sections, forum,
                    jurisdiction, and attachments before submitting anything.
                  </p>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
