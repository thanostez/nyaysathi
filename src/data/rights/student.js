const studentRights = [
  {
    id: 'student-anti-ragging',
    categorySlug: 'student',
    title: 'Zero Tolerance for Ragging',
    description: 'Ragging is a criminal offense, not a tradition.',
    plainLanguage: 'Ragging in any form (physical abuse, verbal abuse, forcing you to do tasks, isolation) is strictly illegal across all educational institutions in India. You do not have to suffer in silence. Colleges are legally bound to take immediate action against the culprits.',
    relevantLaw: {
      act: 'UGC Regulations on Curbing the Menace of Ragging',
      section: 'Various Sections & State Laws',
      text: 'Ragging is a criminal offence as per the law of the land and UGC regulations.',
      year: 2009
    },
    punishment: 'Expulsion from the institution, cancellation of admission, and criminal prosecution (imprisonment).',
    actionSteps: [
      'Step 1: Immediately call the National Anti-Ragging Helpline at 1800-180-5522.',
      'Step 2: File a written complaint with your college\'s Anti-Ragging Squad or the Principal/Dean.',
      'Step 3: Register a complaint online at antiragging.in.',
      'Step 4: If the college does not take action, you can file an FIR at the nearest police station.',
      'Step 5: Document any injuries or abusive messages as evidence.'
    ],
    requiredDocuments: [
      'Written complaint detailing names, dates, and incidents',
      'Screenshots of messages (if cyber-ragging)'
    ],
    relatedTemplateId: null,
    relatedRightsIds: ['cyber-bullying'],
    keywords: ['ragging', 'bullying', 'seniors', 'hostel', 'college'],
    severity: 'high'
  },
  {
    id: 'student-fee-refund',
    categorySlug: 'student',
    title: 'Right to Fee Refund',
    description: 'Colleges must refund fees if you withdraw admission early.',
    plainLanguage: 'If you cancel your admission before the course starts or within a specific timeframe, the college CANNOT keep your entire fee. They must refund your money according to UGC/AICTE rules. They also cannot hold your original certificates hostage.',
    relevantLaw: {
      act: 'UGC/AICTE Fee Refund Guidelines',
      section: 'Guidelines',
      text: 'Institutions must refund fees if admission is withdrawn before the stipulated date. Retention of original certificates is strictly prohibited.',
      year: 2023
    },
    punishment: 'Heavy fines on the college and potential loss of affiliation/recognition.',
    actionSteps: [
      'Step 1: Submit a formal written application for withdrawal of admission and fee refund.',
      'Step 2: Keep an acknowledged copy of your application (with date and stamp).',
      'Step 3: If the college refuses, write an email to the UGC (grievance portal) or AICTE.',
      'Step 4: Send a legal notice to the college citing UGC guidelines.',
      'Step 5: You can also file a case in the Consumer Court for "deficiency in service."'
    ],
    requiredDocuments: [
      'Fee receipt',
      'Admission withdrawal application',
      'Prospectus/Rules of the college (showing refund policy)'
    ],
    relatedTemplateId: 'consumer-notice',
    relatedRightsIds: ['consumer-defective-products'],
    keywords: ['fee', 'refund', 'admission', 'withdrawal', 'certificates', 'UGC'],
    severity: 'medium'
  },
  {
    id: 'student-rte',
    categorySlug: 'student',
    title: 'Right to Education (RTE)',
    description: 'Free and compulsory education for children aged 6 to 14.',
    plainLanguage: 'Every child between the ages of 6 and 14 has a fundamental right to free and compulsory education in a neighborhood school. Private schools must reserve 25% of their seats for children from disadvantaged groups and weaker sections at the entry level.',
    relevantLaw: {
      act: 'Right of Children to Free and Compulsory Education Act',
      section: 'Section 12(1)(c)',
      text: 'Specified private schools to admit in class I, to the extent of at least 25% of the strength of that class, children belonging to weaker section and disadvantaged group.',
      year: 2009
    },
    punishment: 'Fines on schools denying admission or charging capitation fees.',
    actionSteps: [
      'Step 1: Check your state\'s RTE portal for the admission schedule and eligibility criteria.',
      'Step 2: Apply online through the portal with required documents (income certificate, caste certificate, address proof).',
      'Step 3: If a school denies admission despite allotment, complain to the District Education Officer (DEO).',
      'Step 4: File a complaint with the State Commission for Protection of Child Rights (SCPCR).'
    ],
    requiredDocuments: [
      'Birth certificate',
      'Address proof',
      'Income/Caste certificate (for 25% quota)'
    ],
    relatedTemplateId: null,
    relatedRightsIds: [],
    keywords: ['school', 'RTE', 'free education', 'admission', 'child'],
    severity: 'medium'
  },
  {
    id: 'student-rti',
    categorySlug: 'student',
    title: 'Right to View Answer Sheets',
    description: 'You can use RTI to view your checked exam answer sheets.',
    plainLanguage: 'If you suspect an error in your marks, you don\'t have to just accept the result. The Supreme Court has ruled that students have a fundamental right under the RTI Act to inspect and obtain copies of their evaluated answer sheets from examination boards (CBSE, State Boards, Universities).',
    relevantLaw: {
      act: 'Right to Information Act, 2005 & Supreme Court Ruling',
      section: 'Section 2(j)',
      text: 'Right to Information includes the right to inspect works, documents, records.',
      year: 2005
    },
    punishment: 'Penalty on the Public Information Officer (PIO) for refusing the information without valid grounds.',
    actionSteps: [
      'Step 1: File an RTI application addressed to the Public Information Officer (PIO) of your university/board.',
      'Step 2: Clearly state your roll number, subject, and request a certified copy of the answer sheet.',
      'Step 3: Pay the nominal RTI fee (usually Rs. 10) and document charges (usually Rs. 2 per page).',
      'Step 4: The PIO must provide the copy within 30 days.',
      'Step 5: If denied, file a First Appeal under the RTI Act.'
    ],
    requiredDocuments: [
      'Admit card copy',
      'RTI Application',
      'Fee payment proof'
    ],
    relatedTemplateId: 'rti-application',
    relatedRightsIds: [],
    keywords: ['exam', 'answer sheet', 'marks', 'RTI', 're-evaluation'],
    severity: 'low'
  }
];

export default studentRights;
