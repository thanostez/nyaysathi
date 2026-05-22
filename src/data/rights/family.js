const familyRights = [
  {
    id: 'family-domestic-violence',
    categorySlug: 'family',
    title: 'Protection from Domestic Violence',
    description: 'Protection from physical, emotional, or economic abuse at home.',
    plainLanguage: 'You have the right to live in a violence-free home. Domestic violence isn\'t just physical beating; it includes emotional abuse, verbal insults, sexual abuse, and economic deprivation (like taking away your salary or not providing food).',
    relevantLaw: {
      act: 'Protection of Women from Domestic Violence Act',
      section: 'Section 3',
      text: 'Definition of domestic violence includes physical, sexual, verbal, emotional and economic abuse.',
      year: 2005
    },
    punishment: 'Protection orders against the abuser; violation leads to immediate arrest and up to 1 year imprisonment.',
    actionSteps: [
      'Step 1: In an emergency, call 112 (Police) or 181 (Women Helpline).',
      'Step 2: Contact a Protection Officer in your district or an NGO for help.',
      'Step 3: You can file an application before a Magistrate for a Protection Order (stopping the violence).',
      'Step 4: You can ask for a Residence Order (the abuser cannot kick you out of the shared house).',
      'Step 5: You can ask for Monetary Relief (maintenance for you and your children).'
    ],
    requiredDocuments: [
      'Medical reports (if physically harmed)',
      'Any proof of abuse (messages, audio recordings, witness statements)',
      'Marriage certificate or proof of living together'
    ],
    relatedTemplateId: 'domestic-violence-complaint',
    relatedRightsIds: ['women-safety-dowry', 'family-maintenance'],
    keywords: ['domestic violence', 'abuse', 'beating', 'husband', 'in-laws', 'residence right'],
    severity: 'high'
  },
  {
    id: 'family-maintenance',
    categorySlug: 'family',
    title: 'Right to Maintenance (Alimony)',
    description: 'Right to financial support from a spouse or children.',
    plainLanguage: 'If you are unable to maintain yourself financially, you have the right to claim maintenance (monthly financial support) from your husband. This applies during separation or after divorce. Elderly parents can also claim maintenance from their adult children.',
    relevantLaw: {
      act: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) & Hindu Marriage Act',
      section: 'Section 144 (BNSS) / Section 24 (HMA)',
      text: 'Order for maintenance of wives, children and parents.',
      year: 2023
    },
    punishment: 'Failure to pay court-ordered maintenance can lead to attachment of property or imprisonment.',
    actionSteps: [
      'Step 1: Gather details of your husband\'s income (salary slips, bank statements, property documents).',
      'Step 2: Hire a lawyer or approach the District Legal Services Authority (DLSA) for free legal aid.',
      'Step 3: File a petition for maintenance in the Family Court.',
      'Step 4: You can file an application for "Interim Maintenance" to get financial support while the main case is going on.'
    ],
    requiredDocuments: [
      'Proof of marriage',
      'Details of husband\'s income and assets',
      'Details of your own income/expenses and children\'s expenses'
    ],
    relatedTemplateId: 'maintenance-petition',
    relatedRightsIds: ['family-divorce'],
    keywords: ['maintenance', 'alimony', 'financial support', 'money', 'expenses'],
    severity: 'high'
  },
  {
    id: 'family-divorce',
    categorySlug: 'family',
    title: 'Right to Seek Divorce',
    description: 'Legal ways to dissolve a marriage (Mutual or Contested).',
    plainLanguage: 'You can end your marriage legally through two ways: Mutual Consent (if both agree, it is faster, takes about 6 months) or Contested Divorce (if one person does not agree, you must prove grounds like cruelty, adultery, or desertion).',
    relevantLaw: {
      act: 'Hindu Marriage Act, 1955 / Special Marriage Act',
      section: 'Section 13 & 13B (HMA)',
      text: 'Divorce by mutual consent and grounds for contested divorce.',
      year: 1955
    },
    punishment: 'N/A (Civil matter, though cruelty can lead to criminal charges under BNS).',
    actionSteps: [
      'Step 1: Try mediation or counseling if both parties are willing.',
      'Step 2: If both agree to part ways, file a joint petition for Mutual Consent Divorce.',
      'Step 3: If contesting, gather evidence for your grounds (e.g., proof of cruelty or adultery).',
      'Step 4: File the divorce petition in the Family Court where you last resided together or where the wife currently resides.',
      'Step 5: Decide on issues of child custody, alimony, and property division during the process.'
    ],
    requiredDocuments: [
      'Marriage certificate',
      'Wedding photographs',
      'Evidence supporting your grounds for divorce (if contested)'
    ],
    relatedTemplateId: null,
    relatedRightsIds: ['family-maintenance', 'family-child-custody'],
    keywords: ['divorce', 'separation', 'mutual consent', 'cruelty', 'marriage'],
    severity: 'medium'
  },
  {
    id: 'family-child-custody',
    categorySlug: 'family',
    title: 'Child Custody Rights',
    description: 'The welfare of the child is the supreme consideration in custody battles.',
    plainLanguage: 'In a divorce, the court decides child custody based strictly on what is best for the child, not just the rights of the parents. Generally, custody of a child under 5 years is given to the mother. Fathers have an equal right to claim custody and visitation.',
    relevantLaw: {
      act: 'Guardians and Wards Act, 1890 / Hindu Minority and Guardianship Act',
      section: 'Various Sections',
      text: 'Welfare of the minor to be paramount consideration.',
      year: 1890
    },
    punishment: 'N/A (Civil family matter).',
    actionSteps: [
      'Step 1: Try to reach an amicable agreement on shared parenting or visitation with your spouse.',
      'Step 2: If disagreeing, file a custody petition in the Family Court.',
      'Step 3: Demonstrate to the court your ability to provide a safe, stable, and loving environment (financial stability, time, support system).',
      'Step 4: Request interim custody or visitation rights while the case is pending.'
    ],
    requiredDocuments: [
      'Child\'s birth certificate',
      'School records',
      'Proof of income and living conditions'
    ],
    relatedTemplateId: null,
    relatedRightsIds: ['family-divorce'],
    keywords: ['custody', 'child', 'visitation', 'minor', 'guardianship'],
    severity: 'high'
  },
  {
    id: 'family-inheritance',
    categorySlug: 'family',
    title: 'Equal Right to Ancestral Property',
    description: 'Daughters have an equal right to inherit ancestral property as sons.',
    plainLanguage: 'Since 2005, Hindu daughters (whether married or unmarried) have the exact same rights as sons to inherit ancestral property (coparcenary property). You cannot be denied your share just because you are a woman or married.',
    relevantLaw: {
      act: 'Hindu Succession (Amendment) Act',
      section: 'Section 6',
      text: 'Devolution of interest in coparcenary property - daughter of a coparcener shall by birth become a coparcener in her own right in the same manner as the son.',
      year: 2005
    },
    punishment: 'Courts can partition the property and nullify illegal transfers made to deny a daughter\'s share.',
    actionSteps: [
      'Step 1: Gather documents related to the ancestral property.',
      'Step 2: Try to resolve the division of property amicably through a family settlement deed.',
      'Step 3: If denied your share, send a legal notice to your family members.',
      'Step 4: If they still refuse, file a "Partition Suit" in the civil court to claim your legal share.'
    ],
    requiredDocuments: [
      'Property documents',
      'Death certificate of the ancestor (if applicable)',
      'Proof of relationship (birth certificate)'
    ],
    relatedTemplateId: 'legal-notice-general',
    relatedRightsIds: [],
    keywords: ['property', 'inheritance', 'daughter', 'ancestral', 'share'],
    severity: 'medium'
  }
];

export default familyRights;
