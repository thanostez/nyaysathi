const cyberCrimeRights = [
  {
    id: 'cyber-fraud-reporting',
    categorySlug: 'cyber-crime',
    title: 'Right to Report Online Financial Fraud',
    description: 'Report UPI or bank fraud immediately to stop the transaction.',
    plainLanguage: 'If you have been scammed online (UPI, credit card, or bank fraud), you have the right to report it immediately. If you report it to your bank and the national cyber crime portal within 3 days, your liability is zero, and you can get your money back.',
    relevantLaw: {
      act: 'Information Technology Act, 2000 & RBI Guidelines',
      section: 'Section 66D',
      text: 'Punishment for cheating by personation by using computer resource.',
      year: 2000
    },
    punishment: 'Imprisonment up to 3 years and a fine up to 1 lakh rupees.',
    actionSteps: [
      'Step 1: Immediately call the National Cyber Crime Helpline at 1930.',
      'Step 2: Inform your bank to block your card/account and dispute the transaction.',
      'Step 3: Register a formal complaint at cybercrime.gov.in.',
      'Step 4: Save all screenshots, transaction IDs, and communication with the scammer.',
      'Step 5: Follow up with your bank for a refund based on RBI zero-liability guidelines.'
    ],
    requiredDocuments: [
      'Bank statement showing the fraudulent transaction',
      'Screenshots of SMS/emails/WhatsApp chats',
      'Transaction ID'
    ],
    relatedTemplateId: 'cyber-crime-complaint',
    relatedRightsIds: ['consumer-defective-product'],
    keywords: ['fraud', 'scam', 'UPI', 'money lost', 'bank', '1930'],
    severity: 'high'
  },
  {
    id: 'cyber-revenge-porn',
    categorySlug: 'cyber-crime',
    title: 'Protection Against Revenge Porn & Non-Consensual Images',
    description: 'Sharing private images without consent is a serious crime.',
    plainLanguage: 'If someone shares or threatens to share your private, intimate photos or videos online without your permission, it is a serious criminal offense. You can get these removed and the offender arrested.',
    relevantLaw: {
      act: 'Information Technology Act, 2000',
      section: 'Section 66E & 67A',
      text: 'Punishment for violation of privacy and publishing sexually explicit act in electronic form.',
      year: 2000
    },
    punishment: 'Imprisonment up to 5 years (7 years for repeat offense) and hefty fines.',
    actionSteps: [
      'Step 1: Do NOT delete the messages. Take screenshots as evidence (including URL/profile links).',
      'Step 2: File an anonymous or named complaint at cybercrime.gov.in (they have a specific section for women/children).',
      'Step 3: You can approach the police station and file an FIR under IT Act.',
      'Step 4: Use the "Report" button on the social media platform to get the content taken down.',
      'Step 5: Contact organizations like the Internet Freedom Foundation or StopNCII.org for help removing the images.'
    ],
    requiredDocuments: [
      'Screenshots of the content and threats',
      'URLs of the websites where it was posted'
    ],
    relatedTemplateId: 'cyber-crime-complaint',
    relatedRightsIds: ['women-safety-stalking'],
    keywords: ['revenge porn', 'nudes', 'leaked', 'private photos', 'blackmail'],
    severity: 'high'
  },
  {
    id: 'cyber-bullying',
    categorySlug: 'cyber-crime',
    title: 'Protection Against Cyberbullying & Harassment',
    description: 'Online abuse, threats, and harassment are punishable by law.',
    plainLanguage: 'You do not have to tolerate online abuse, threats of violence, or continuous harassment on social media. This includes fake profiles created to defame you or sending obscene messages.',
    relevantLaw: {
      act: 'Information Technology Act, 2000 & BNS',
      section: 'Section 67 (IT Act) & Section 356 (BNS)',
      text: 'Punishment for publishing or transmitting obscene material in electronic form; Defamation.',
      year: 2000
    },
    punishment: 'Imprisonment up to 3 years and fines.',
    actionSteps: [
      'Step 1: Block the abusive account immediately.',
      'Step 2: Take screenshots of the abuse, threats, and the user\'s profile URL.',
      'Step 3: Report the account to the platform (Instagram, Twitter, etc.).',
      'Step 4: File a complaint on the National Cyber Crime portal or at your local police station.',
      'Step 5: If there is a physical threat, file an FIR immediately.'
    ],
    requiredDocuments: [
      'Screenshots of the abuse/harassment',
      'Links to the abusive profiles'
    ],
    relatedTemplateId: 'cyber-crime-complaint',
    relatedRightsIds: ['women-safety-stalking'],
    keywords: ['bullying', 'troll', 'abuse', 'harassment', 'fake profile'],
    severity: 'medium'
  },
  {
    id: 'cyber-data-privacy',
    categorySlug: 'cyber-crime',
    title: 'Right to Data Privacy',
    description: 'Companies cannot misuse or sell your personal data without consent.',
    plainLanguage: 'Your personal data (phone number, financial details, medical records) cannot be collected, shared, or sold by apps or companies without your explicit consent. If they leak your data, you can seek compensation.',
    relevantLaw: {
      act: 'Digital Personal Data Protection Act, 2023',
      section: 'Various Sections',
      text: 'Obligations of Data Fiduciaries to protect personal data and rights of Data Principals.',
      year: 2023
    },
    punishment: 'Massive financial penalties for companies (up to Rs. 250 Crores) for data breaches.',
    actionSteps: [
      'Step 1: If an app is misusing your data, withdraw your consent in their settings.',
      'Step 2: Write an email to the company\'s Data Protection Officer demanding deletion of your data.',
      'Step 3: If your data is breached, you can file a complaint with the Data Protection Board of India.',
      'Step 4: If you suffered financial loss due to the breach, file a case in consumer court.'
    ],
    requiredDocuments: [
      'Proof of data misuse (emails, spam calls, leaked documents)',
      'Correspondence with the company'
    ],
    relatedTemplateId: null,
    relatedRightsIds: [],
    keywords: ['privacy', 'data breach', 'leak', 'consent', 'DPDP Act'],
    severity: 'medium'
  }
];

export default cyberCrimeRights;
