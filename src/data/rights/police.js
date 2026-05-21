const policeRights = [
  {
    id: 'police-fir-filing',
    categorySlug: 'police',
    title: 'Right to File an FIR',
    description: 'Police cannot refuse to register an FIR for cognizable offenses.',
    plainLanguage: 'If you are a victim of a serious (cognizable) crime like theft, assault, or murder, the police are legally bound to register your First Information Report (FIR). They cannot turn you away citing jurisdiction or other reasons. If they do, you have specific remedies available.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      section: 'Section 173',
      text: 'Information in cognizable cases. Every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing by him or under his direction.',
      year: 2023
    },
    punishment: 'Police officers refusing to register FIRs for certain serious offenses against women can be prosecuted under BNS 2023 and face imprisonment.',
    actionSteps: [
      'Step 1: Go to the nearest police station and narrate the incident. You can give a written complaint or speak orally (which they must write down).',
      'Step 2: Read the written complaint carefully before signing it.',
      'Step 3: Demand a free copy of the FIR immediately. It is your right.',
      'Step 4: If the officer refuses, send the complaint in writing by post to the Superintendent of Police (SP) or Commissioner of Police (CP).',
      'Step 5: If the SP also fails to act, you can file a private complaint before a Magistrate under Section 175(3) of BNSS.'
    ],
    requiredDocuments: [
      'Written complaint detailing the incident (Date, Time, Location, What happened)',
      'Any evidence (photos, videos, medical reports)',
      'ID proof (optional but helpful)'
    ],
    relatedTemplateId: 'police-complaint-refusal',
    relatedRightsIds: ['police-zero-fir'],
    keywords: ['FIR', 'complaint', 'refusal', 'cognizable', 'report'],
    severity: 'high'
  },
  {
    id: 'police-zero-fir',
    categorySlug: 'police',
    title: 'Right to Zero FIR',
    description: 'File an FIR at any police station regardless of where the crime occurred.',
    plainLanguage: 'You do not need to figure out which police station has jurisdiction over the area where the crime happened. You can walk into ANY police station in India and file a "Zero FIR". The police station will register it under serial number "0" and then transfer it to the correct jurisdiction.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      section: 'Section 173',
      text: 'Information in cognizable cases regardless of the area where the offence is committed.',
      year: 2023
    },
    punishment: 'Dereliction of duty and departmental action against the refusing officer.',
    actionSteps: [
      'Step 1: Go to the nearest or most convenient police station.',
      'Step 2: Clearly state that you want to file a Zero FIR as the incident happened outside their regular jurisdiction.',
      'Step 3: Narrate the facts and ensure they are recorded accurately.',
      'Step 4: Collect your free copy of the Zero FIR.',
      'Step 5: Follow up later to get the actual FIR number from the transferred jurisdiction.'
    ],
    requiredDocuments: [
      'Written complaint',
      'Details of the exact location of the incident'
    ],
    relatedTemplateId: 'fir-application',
    relatedRightsIds: ['police-fir-filing'],
    keywords: ['Zero FIR', 'jurisdiction', 'any police station', 'transfer'],
    severity: 'high'
  },
  {
    id: 'police-arrest-rights',
    categorySlug: 'police',
    title: 'Rights During Arrest',
    description: 'Know your rights if the police are arresting you.',
    plainLanguage: 'The police cannot arrest you arbitrarily. You have the right to know the grounds of arrest, the right to inform a relative or friend, and the right to meet a lawyer. The arresting officer must wear a clear name tag and prepare an arrest memo.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      section: 'Sections 47-50',
      text: 'Rights of arrested person to meet legal practitioner, to be informed of grounds of arrest, and right to bail in bailable offences.',
      year: 2023
    },
    punishment: 'Illegal arrest can lead to departmental action against the officer and compensation for the victim.',
    actionSteps: [
      'Step 1: Ask the officer for the exact reason and grounds for arrest.',
      'Step 2: Insist that they prepare an "Arrest Memo" noting the date and time, and ensure it is countersigned by an independent witness or family member.',
      'Step 3: Request them to immediately inform your nominated relative or friend about the arrest and the location where you are being held.',
      'Step 4: Request to meet your lawyer during interrogation.',
      'Step 5: Demand a medical examination by a qualified doctor immediately after arrest.'
    ],
    requiredDocuments: [],
    relatedTemplateId: null,
    relatedRightsIds: ['police-bail-right'],
    keywords: ['arrest', 'memo', 'lawyer', 'inform relative', 'DK Basu guidelines'],
    severity: 'high'
  },
  {
    id: 'police-bail-right',
    categorySlug: 'police',
    title: 'Right to Bail in Bailable Offenses',
    description: 'Bail is a matter of right in bailable offenses, not a favor.',
    plainLanguage: 'If you are arrested for a "bailable offense" (usually less serious crimes), you have an absolute right to be released on bail from the police station itself. The police cannot deny it if you are ready to provide the required bail bond.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      section: 'Section 480',
      text: 'In what cases bail to be taken. When any person other than a person accused of a non-bailable offence is arrested or detained without warrant... he shall be released on bail.',
      year: 2023
    },
    punishment: 'Wrongful confinement charges against the police officer if bail is illegally denied.',
    actionSteps: [
      'Step 1: Ask the arresting officer if the offense is bailable or non-bailable.',
      'Step 2: If bailable, state that you are ready to furnish a bail bond/surety.',
      'Step 3: Contact a family member or friend to arrange the bail amount or stand as a surety.',
      'Step 4: Sign the bail bond and secure your release directly from the police station.',
      'Step 5: If denied, your lawyer can immediately move the court.'
    ],
    requiredDocuments: [
      'Bail bond/Surety documents',
      'ID proof of surety'
    ],
    relatedTemplateId: null,
    relatedRightsIds: ['police-arrest-rights'],
    keywords: ['bail', 'bailable', 'release', 'bond', 'surety'],
    severity: 'medium'
  },
  {
    id: 'police-women-arrest',
    categorySlug: 'police',
    title: 'Special Arrest Rules for Women',
    description: 'Women cannot be arrested after sunset or by male officers.',
    plainLanguage: 'A woman can only be arrested by a female police officer. Furthermore, a woman cannot be arrested after sunset and before sunrise, except in exceptional circumstances where written permission from a Judicial Magistrate is obtained.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      section: 'Section 43',
      text: 'No woman shall be arrested after sunset and before sunrise... and where such exceptional circumstances exist, the woman police officer shall, by making a written report, obtain the prior permission of the Judicial Magistrate.',
      year: 2023
    },
    punishment: 'Strict disciplinary action and potential criminal charges for illegal detention.',
    actionSteps: [
      'Step 1: If a male officer tries to arrest a woman, object and demand a female officer.',
      'Step 2: If it is after sunset, refuse to accompany the police unless they produce a specific written order from a Judicial Magistrate.',
      'Step 3: Immediately contact a lawyer or family member.',
      'Step 4: If forced, record the incident if possible and file a complaint with the SP or Magistrate later.'
    ],
    requiredDocuments: [],
    relatedTemplateId: null,
    relatedRightsIds: ['women-safety-domestic-violence'],
    keywords: ['women arrest', 'sunset', 'sunrise', 'female officer'],
    severity: 'high'
  },
  {
    id: 'police-search-warrant',
    categorySlug: 'police',
    title: 'Right Against Illegal Search',
    description: 'Police generally need a warrant to search your home.',
    plainLanguage: 'The police cannot simply walk into your house and search it. They usually need a search warrant issued by a court. They can search without a warrant only in specific urgent situations (like chasing a suspect or preventing destruction of evidence), but they must record their reasons in writing before doing so.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)',
      section: 'Sections 96-103',
      text: 'Provisions regarding search warrants and search by police officer.',
      year: 2023
    },
    punishment: 'Action for trespass and illegal search.',
    actionSteps: [
      'Step 1: Politely ask the officers to show their ID cards and the search warrant.',
      'Step 2: Read the warrant carefully to see if it specifically mentions your address.',
      'Step 3: Before they enter, you have the right to search the police officers to ensure they aren\'t planting evidence.',
      'Step 4: Insist that two independent respectable locals (panchas) are present during the search.',
      'Step 5: Ask for a copy of the "Search/Seizure Memo" (panchnama) listing all items taken, signed by the witnesses.'
    ],
    requiredDocuments: [
      'Copy of the Search Warrant',
      'Copy of the Seizure Memo (Panchnama)'
    ],
    relatedTemplateId: null,
    relatedRightsIds: [],
    keywords: ['search', 'warrant', 'seizure', 'home', 'panchnama'],
    severity: 'high'
  },
  {
    id: 'police-confession',
    categorySlug: 'police',
    title: 'Confessions to Police are Invalid',
    description: 'A confession made to a police officer cannot be used against you in court.',
    plainLanguage: 'Even if you are pressured or beaten into signing a confession at the police station, do not panic. Under Indian law, a confession made to a police officer is not admissible as evidence in court. Only a confession made before a Magistrate is legally binding.',
    relevantLaw: {
      act: 'Bharatiya Sakshya Adhiniyam (BSA) / Indian Evidence Act',
      section: 'Section 23 (BSA)',
      text: 'Confession to police officer not to be proved. No confession made to a police officer shall be proved as against a person accused of any offence.',
      year: 2023
    },
    punishment: 'Police using force to extract confessions can be prosecuted for custodial torture.',
    actionSteps: [
      'Step 1: If forced, sign the document to protect yourself from physical harm.',
      'Step 2: When you are produced before a Magistrate (which must happen within 24 hours), clearly state that you were forced to confess.',
      'Step 3: Show any marks of physical abuse to the Magistrate.',
      'Step 4: Request the Magistrate for a medical examination.'
    ],
    requiredDocuments: [
      'Medical examination report (if abused)'
    ],
    relatedTemplateId: null,
    relatedRightsIds: ['police-arrest-rights'],
    keywords: ['confession', 'evidence', 'torture', 'magistrate', 'statement'],
    severity: 'high'
  },
  {
    id: 'police-24-hours',
    categorySlug: 'police',
    title: 'Production Before Magistrate in 24 Hours',
    description: 'Police cannot hold you for more than 24 hours without court permission.',
    plainLanguage: 'If you are arrested, the police MUST present you before a Judicial Magistrate within 24 hours of your arrest (excluding travel time). They cannot keep you locked up in the police station indefinitely.',
    relevantLaw: {
      act: 'Constitution of India & BNSS',
      section: 'Article 22(2) & Section 58 BNSS',
      text: 'Person arrested not to be detained more than twenty-four hours without special order of a Magistrate.',
      year: 2023
    },
    punishment: 'Habeas Corpus petition can be filed against the police, leading to severe penalties for illegal detention.',
    actionSteps: [
      'Step 1: Note the exact time of your arrest.',
      'Step 2: Ensure your family knows the time of arrest.',
      'Step 3: If 24 hours pass, your lawyer or family should immediately file a Writ of Habeas Corpus in the High Court.',
      'Step 4: When produced before the Magistrate, inform them if you were held for more than 24 hours.'
    ],
    requiredDocuments: [
      'Arrest memo showing time of arrest'
    ],
    relatedTemplateId: null,
    relatedRightsIds: ['police-arrest-rights'],
    keywords: ['24 hours', 'detention', 'magistrate', 'illegal custody', 'habeas corpus'],
    severity: 'high'
  }
];

export default policeRights;
