export const blogCategories = [
  {
    slug: 'consumer-rights',
    title: 'Consumer Rights',
    description: 'Refunds, defective products, online shopping disputes, warranties, and consumer complaints.',
  },
  {
    slug: 'cyber-crime',
    title: 'Cyber Crime',
    description: 'Online fraud, UPI scams, cyber harassment, phishing, and digital safety complaints.',
  },
  {
    slug: 'rental-laws',
    title: 'Rental Laws',
    description: 'Tenant rights, rent agreements, deposits, eviction, repairs, and landlord disputes.',
  },
  {
    slug: 'employment-laws',
    title: 'Employment Laws',
    description: 'Salary, termination, workplace harassment, offer letters, benefits, and labour rights.',
  },
  {
    slug: 'women-rights',
    title: 'Women Rights',
    description: 'Domestic violence, workplace safety, stalking, dowry harassment, and support systems.',
  },
  {
    slug: 'traffic-rules',
    title: 'Traffic Rules',
    description: 'Traffic fines, challans, driving licence rules, insurance, and road safety duties.',
  },
  {
    slug: 'startup-legal-guides',
    title: 'Startup Legal Guides',
    description: 'Simple legal explainers for founders, freelancers, creators, and small businesses.',
  },
];

const blogPosts = [
  {
    slug: 'how-to-get-refund-for-defective-product-india',
    title: 'How to Get a Refund for a Defective Product in India',
    categorySlug: 'consumer-rights',
    excerpt:
      'A practical checklist for asking for repair, replacement, refund, or compensation when a product is defective.',
    published: '2026-05-23',
    readTime: '5 min read',
    keywords: ['defective product refund India', 'consumer rights refund', 'consumer complaint'],
    intro:
      'If a product is defective, damaged, fake, unsafe, or different from what was promised, Indian consumer law gives you options. The fastest path is usually written escalation with proof.',
    sections: [
      {
        heading: 'Start with written proof',
        body:
          'Email the seller, platform, or manufacturer with invoice details, photos, videos, warranty information, and the exact remedy you want. Written proof matters more than phone calls.',
      },
      {
        heading: 'Ask for a clear remedy',
        body:
          'State whether you want repair, replacement, refund, cancellation, or compensation. Give a reasonable deadline and keep all support ticket numbers.',
      },
      {
        heading: 'Escalate if ignored',
        body:
          'Use the platform grievance channel, National Consumer Helpline, and e-Daakhil if the issue remains unresolved. Keep the product and packaging if they are evidence.',
      },
    ],
    related: [
      { href: '/templates/consumer-notice', label: 'Consumer notice template' },
      { href: '/categories/consumer', label: 'Consumer protection rights' },
    ],
  },
  {
    slug: 'upi-fraud-what-to-do-first-24-hours',
    title: 'UPI Fraud: What to Do in the First 24 Hours',
    categorySlug: 'cyber-crime',
    excerpt:
      'Immediate steps after UPI fraud, including bank reporting, cyber complaint filing, and evidence preservation.',
    published: '2026-05-23',
    readTime: '6 min read',
    keywords: ['UPI fraud complaint', 'cyber crime complaint', 'online fraud India'],
    intro:
      'In financial cyber fraud, time is the most important factor. Quick reporting can improve the chance of freezing or tracing the transaction.',
    sections: [
      {
        heading: 'Call your bank or payment app',
        body:
          'Report the transaction immediately, ask for a complaint number, and request blocking or marking of the transaction. Do not wait for the scammer to respond.',
      },
      {
        heading: 'File a cyber complaint',
        body:
          'Use the National Cyber Crime Reporting Portal and submit transaction IDs, phone numbers, UPI IDs, screenshots, chats, and bank alerts.',
      },
      {
        heading: 'Preserve evidence',
        body:
          'Do not delete messages, call logs, emails, links, or app notifications. Save screenshots and original files where possible.',
      },
    ],
    related: [
      { href: '/guides/how-to-file-cyber-complaint', label: 'How to file cyber complaint' },
      { href: '/categories/cyber-crime', label: 'Cyber crime rights' },
    ],
  },
  {
    slug: 'security-deposit-not-returned-by-landlord',
    title: 'Security Deposit Not Returned by Landlord: What Can a Tenant Do?',
    categorySlug: 'rental-laws',
    excerpt:
      'How tenants can document deductions, send a demand, and respond when a landlord refuses deposit refund.',
    published: '2026-05-23',
    readTime: '5 min read',
    keywords: ['security deposit not returned', 'tenant rights India', 'rental deposit refund'],
    intro:
      'A landlord can usually deduct agreed unpaid rent, utility dues, or actual damage. Arbitrary deductions or refusal without explanation can be challenged.',
    sections: [
      {
        heading: 'Check the agreement first',
        body:
          'Read the deposit clause, notice period, repair clause, and handover terms. Compare deductions with the written agreement.',
      },
      {
        heading: 'Ask for itemised deductions',
        body:
          'Request a written breakup of deductions with bills, photos, and repair proof. Keep move-in and move-out photos if available.',
      },
      {
        heading: 'Send a formal demand',
        body:
          'If the landlord does not respond, send a written notice asking for refund within a clear timeline. Keep postal and email proof.',
      },
    ],
    related: [
      { href: '/guides/rent-agreement-format', label: 'Rent agreement format guide' },
      { href: '/rights/tenant-security-deposit', label: 'Security deposit rights' },
    ],
  },
  {
    slug: 'salary-not-paid-by-employer-india',
    title: 'Salary Not Paid by Employer in India: First Steps',
    categorySlug: 'employment-laws',
    excerpt:
      'A simple action plan for unpaid salary, pending full and final settlement, and delayed wages.',
    published: '2026-05-23',
    readTime: '6 min read',
    keywords: ['salary not paid employer India', 'unpaid wages India', 'full and final settlement'],
    intro:
      'Unpaid salary disputes are easier to pursue when you have appointment letters, attendance records, salary slips, emails, and bank statements.',
    sections: [
      {
        heading: 'Collect employment proof',
        body:
          'Save offer letters, appointment letters, payslips, ID cards, attendance screenshots, emails, resignation proof, and bank statements.',
      },
      {
        heading: 'Write a clear demand',
        body:
          'Ask HR or management for pending salary, incentives, reimbursements, or full and final settlement with amount and period clearly mentioned.',
      },
      {
        heading: 'Escalate through the right forum',
        body:
          'Depending on your role and state, options may include labour department complaint, legal notice, civil recovery, or other remedies.',
      },
    ],
    related: [
      { href: '/categories/employment', label: 'Employment rights' },
      { href: '/rights/employment-unpaid-wages', label: 'Unpaid wages right' },
    ],
  },
  {
    slug: 'domestic-violence-help-india',
    title: 'Domestic Violence Help in India: Rights and Immediate Support',
    categorySlug: 'women-rights',
    excerpt:
      'Where to seek help, what evidence to preserve, and what protections may be available in domestic violence situations.',
    published: '2026-05-23',
    readTime: '6 min read',
    keywords: ['domestic violence help India', 'women rights India', 'protection order'],
    intro:
      'Domestic violence can include physical, emotional, verbal, sexual, and economic abuse. If there is immediate danger, emergency services and local police support matter first.',
    sections: [
      {
        heading: 'Prioritise safety',
        body:
          'Move to a safe place if possible, contact trusted people, and call emergency services when there is immediate danger.',
      },
      {
        heading: 'Preserve evidence safely',
        body:
          'Keep medical records, photos, messages, call logs, witness details, bank records, and proof of shared residence where safe to do so.',
      },
      {
        heading: 'Know possible protections',
        body:
          'Depending on facts, remedies may include protection orders, residence orders, maintenance, custody-related orders, and police complaints.',
      },
    ],
    related: [
      { href: '/categories/women-safety', label: 'Women safety rights' },
      { href: '/helplines', label: 'Emergency helplines' },
    ],
  },
  {
    slug: 'traffic-challan-wrongly-issued-what-to-do',
    title: 'Traffic Challan Wrongly Issued: What to Do',
    categorySlug: 'traffic-rules',
    excerpt:
      'How to check a traffic challan, gather proof, and contest or pay it through official channels.',
    published: '2026-05-23',
    readTime: '5 min read',
    keywords: ['wrong traffic challan', 'traffic fine India', 'contest challan'],
    intro:
      'Traffic challans can be wrong because of camera errors, wrong vehicle numbers, outdated ownership records, or missing context. Check details before paying.',
    sections: [
      {
        heading: 'Verify challan details',
        body:
          'Check vehicle number, offence, date, time, location, photo evidence, and issuing authority. Save screenshots.',
      },
      {
        heading: 'Collect your proof',
        body:
          'Keep toll receipts, parking proof, travel records, dashcam footage, ownership transfer documents, or insurance records if relevant.',
      },
      {
        heading: 'Use official channels',
        body:
          'Pay or contest through official traffic police or e-challan systems. Avoid unofficial payment links shared by unknown numbers.',
      },
    ],
    related: [
      { href: '/traffic', label: 'Traffic fines lookup' },
    ],
  },
  {
    slug: 'startup-legal-checklist-india',
    title: 'Startup Legal Checklist for Indian Founders',
    categorySlug: 'startup-legal-guides',
    excerpt:
      'A founder-friendly checklist for contracts, co-founder terms, compliance, IP, invoices, and hiring basics.',
    published: '2026-05-23',
    readTime: '7 min read',
    keywords: ['startup legal checklist India', 'founder legal guide', 'startup contracts India'],
    intro:
      'Early legal hygiene prevents expensive disputes later. Founders should document ownership, money, roles, customer terms, and compliance from the start.',
    sections: [
      {
        heading: 'Document co-founder terms',
        body:
          'Agree on equity, roles, vesting, exits, decision-making, IP ownership, and what happens if someone leaves.',
      },
      {
        heading: 'Use basic contracts',
        body:
          'Have clear customer terms, vendor agreements, freelancer contracts, NDAs when needed, invoices, and payment terms.',
      },
      {
        heading: 'Protect assets and compliance',
        body:
          'Track trademarks, domain ownership, code ownership, tax registrations, data handling, employee records, and statutory filings.',
      },
    ],
    related: [
      { href: '/templates', label: 'Legal document templates' },
      { href: '/guides/how-to-send-legal-notice-in-india', label: 'Legal notice basics' },
    ],
  },
];

export function getBlogCategoryBySlug(slug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(categorySlug) {
  return blogPosts.filter((post) => post.categorySlug === categorySlug);
}

export default blogPosts;
