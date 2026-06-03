const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'llama-3.3-70b-versatile';

function fallbackResult(problem) {
  return {
    category: 'General Legal Issue',
    subcategory: 'Needs Review',
    severity: 'Medium',
    rights:
      'You may have legal remedies depending on the facts, documents, limitation period, and the authority involved. Preserve evidence and avoid making admissions until you understand your options.',
    evidence: [
      'Identity proof and contact details',
      'Written agreements, invoices, receipts, notices, or chats',
      'Screenshots, bank records, payment references, emails, and call logs',
      'Names and contact details of witnesses',
      'A short timeline of events with dates',
    ],
    roadmap: [
      'Write down the full timeline with dates, amounts, people involved, and promises made.',
      'Collect and safely store all documents, screenshots, and payment records.',
      'Send a clear written request or notice asking for resolution within a reasonable deadline.',
      'If there is no response, approach the correct forum such as police, cyber crime portal, labour authority, consumer commission, RERA, or civil court.',
    ],
    timeline: 'Initial notice or complaint can usually be prepared in 1-2 days. Authority response may take 7-45 days depending on the forum.',
    documents: ['Legal Notice', 'Complaint Letter'],
    summary: problem.slice(0, 240),
  };
}

function extractJson(text) {
  try {
    return JSON.parse(text);
  } catch {}

  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;

  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

function normalizeAnalysis(data, problem) {
  const fallback = fallbackResult(problem);
  return {
    category: String(data?.category || fallback.category),
    subcategory: String(data?.subcategory || fallback.subcategory),
    severity: String(data?.severity || fallback.severity),
    rights: String(data?.rights || fallback.rights),
    evidence: Array.isArray(data?.evidence) ? data.evidence.map(String).filter(Boolean) : fallback.evidence,
    roadmap: Array.isArray(data?.roadmap) ? data.roadmap.map(String).filter(Boolean).slice(0, 6) : fallback.roadmap,
    timeline: String(data?.timeline || fallback.timeline),
    documents: Array.isArray(data?.documents) ? data.documents.map(String).filter(Boolean) : fallback.documents,
  };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const problem = typeof body?.problem === 'string' ? body.problem.trim() : '';
  if (problem.length < 20) {
    return Response.json({ error: 'Please describe the problem in more detail.' }, { status: 400 });
  }

  if (!process.env.GROQ_API_KEY) {
    return Response.json(
      {
        error:
          'Groq API key is not configured. Add GROQ_API_KEY to your environment variables and redeploy.',
      },
      { status: 500 }
    );
  }

  const systemPrompt = `You are NyayMitra Legal GPS for India. Return only valid JSON. Give plain-English legal information, not legal representation. Be practical, calm, and concise.

JSON schema:
{
  "category": "string",
  "subcategory": "string",
  "severity": "Low | Medium | High | Urgent",
  "rights": "plain English explanation",
  "evidence": ["checklist item"],
  "roadmap": ["step 1", "step 2", "step 3", "step 4"],
  "timeline": "estimated duration",
  "documents": ["recommended document names"]
}`;

  try {
    const groqResponse = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        temperature: 0.2,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Analyze this legal problem in India:\n\n${problem}` },
        ],
      }),
    });

    const payload = await groqResponse.json();
    if (!groqResponse.ok) {
      const message = payload?.error?.message || 'Groq could not analyze this problem right now.';
      return Response.json({ error: message }, { status: groqResponse.status });
    }

    const content = payload?.choices?.[0]?.message?.content;
    const parsed = typeof content === 'string' ? extractJson(content) : null;

    if (!parsed) {
      return Response.json(normalizeAnalysis(fallbackResult(problem), problem));
    }

    return Response.json(normalizeAnalysis(parsed, problem));
  } catch {
    return Response.json(
      { error: 'Unable to connect to Groq right now. Please try again in a moment.' },
      { status: 502 }
    );
  }
}
