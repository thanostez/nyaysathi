const templates = [
  {
    id: 'fir-application',
    title: 'Application for filing FIR',
    category: 'Police',
    description: 'A formal letter to the Station House Officer (SHO) requesting the registration of an FIR for a cognizable offense.',
    whenToUse: 'Use this when you need to submit a written complaint at a police station about a crime (theft, assault, fraud, etc.).',
    templateText: `To,
The Station House Officer (SHO),
[NAME OF POLICE STATION] Police Station,
[CITY, STATE, PIN CODE]

Date: [DATE]

Subject: Request for registration of an F.I.R. regarding [BRIEF DESCRIPTION OF CRIME, e.g., Theft / Assault / Fraud]

Respected Sir/Madam,

I, [YOUR FULL NAME], son/daughter/wife of [FATHER'S/HUSBAND'S NAME], residing at [YOUR COMPLETE ADDRESS], would like to report the following incident:

1. Date and Time of Incident: [DATE] at approximately [TIME].
2. Place of Incident: [EXACT LOCATION OF THE INCIDENT].
3. Details of the Incident: [DESCRIBE CLEARLY WHAT HAPPENED. Include sequence of events. Do not exaggerate. Stick to the facts.]
4. Suspect(s) Details (if known): [NAME, DESCRIPTION, OR IDENTIFYING FEATURES OF THE ACCUSED].
5. Witnesses (if any): [NAMES AND CONTACT DETAILS OF ANY PERSON WHO SAW THE INCIDENT].
6. Items Stolen/Damaged (if applicable): [LIST ITEMS WITH ESTIMATED VALUE].

I request you to kindly register an F.I.R. under the relevant sections of the Bharatiya Nyaya Sanhita (BNS) and initiate an immediate investigation into this matter.

I am attaching [LIST ANY EVIDENCE, e.g., photographs, medical report, bills] with this complaint.

Kindly provide me with a free copy of the registered F.I.R. as per the law.

Thanking you.

Yours faithfully,

(Signature)
[YOUR FULL NAME]
[YOUR MOBILE NUMBER]
[YOUR EMAIL ADDRESS]`,
    instructions: [
      'Print this out or write it clearly on plain paper.',
      'Make sure you have two copies. Give one to the police.',
      'Ask the officer receiving it to put a stamp, date, and their signature on your copy as an "acknowledgement".',
      'Keep the acknowledged copy safely.'
    ]
  },
  {
    id: 'rti-application',
    title: 'RTI Application',
    category: 'General',
    description: 'Standard format to request information from any government department under the Right to Information Act, 2005.',
    whenToUse: 'Use this to ask for government records, status of your complaints, copies of exam answer sheets, or details of public works.',
    templateText: `FORM A
Application for seeking information under the Right to Information Act, 2005

To,
The Public Information Officer (PIO),
[NAME OF THE DEPARTMENT/OFFICE],
[COMPLETE ADDRESS OF THE OFFICE]

1. Full Name of the Applicant: [YOUR FULL NAME]
2. Father / Spouse Name: [FATHER'S/HUSBAND'S NAME]
3. Complete Address: [YOUR COMPLETE MAILING ADDRESS WITH PIN CODE]
4. Mobile Number: [YOUR MOBILE NUMBER]
5. Email ID: [YOUR EMAIL ADDRESS]

6. Particulars of Information Required:
[BE VERY SPECIFIC ABOUT WHAT YOU WANT. USE BULLET POINTS]
a) Please provide the certified copy of...
b) Please provide the daily progress report of...
c) Please state the reason on record for...
d) Please provide the names of officials responsible for...

7. Time period to which the information relates: [e.g., "From 01-Jan-2023 to 31-Dec-2023"]

8. Details of Application Fee Paid:
Fee of Rs. 10/- paid vide [Indian Postal Order / Demand Draft / Cash receipt] No. [NUMBER] dated [DATE] in favor of [FAVORING AUTHORITY].

9. Below Poverty Line (BPL) status: [YES/NO] (If yes, attach BPL card copy. No fee is required for BPL).

I state that the information sought does not fall within the restrictions contained in Section 8 and 9 of the Act and to the best of my knowledge it pertains to your office.

Place: [YOUR CITY]
Date: [DATE]

Signature of Applicant
[YOUR FULL NAME]`,
    instructions: [
      'Send this via Speed Post or Registered Post. Keep the postal receipt.',
      'You can also file RTI online for central govt departments at rtionline.gov.in.',
      'The PIO must reply within 30 days.'
    ]
  },
  {
    id: 'legal-notice-employer',
    title: 'Legal Notice for Unpaid Salary',
    category: 'Employment',
    description: 'A formal legal notice to an employer demanding payment of unpaid wages/salary.',
    whenToUse: 'Use this when you have resigned or been terminated and the employer is refusing to clear your full and final settlement or unpaid salary.',
    templateText: `REGISTERED A.D. / SPEED POST

Date: [DATE]

To,
[NAME OF THE MANAGING DIRECTOR / HR HEAD],
[NAME OF THE COMPANY],
[ADDRESS OF THE COMPANY]

Subject: LEGAL NOTICE FOR NON-PAYMENT OF SALARY AND DUES.

Under instructions from and on behalf of my client / I, [YOUR FULL NAME], residing at [YOUR ADDRESS], I hereby issue this Legal Notice to you on the following terms:

1. That I was employed in your company as [YOUR JOB TITLE/DESIGNATION] vide offer letter dated [DATE OF JOINING] bearing Employee ID: [YOUR EMP ID].
2. That I diligently performed my duties during my tenure. I resigned / was terminated from my services on [LAST WORKING DATE].
3. That as per the company policy and employment contract, my Full and Final (F&F) settlement was supposed to be cleared within [NO. OF DAYS] days.
4. That an amount of Rs. [TOTAL PENDING AMOUNT] (Rupees [AMOUNT IN WORDS]) is due and payable by you towards my unpaid salary for the months of [MONTHS], leave encashment, and other dues.
5. That despite my repeated reminders via emails dated [DATES OF EMAILS] and phone calls, you have failed to clear my legitimate dues.

I, therefore, call upon you through this Legal Notice to clear my outstanding dues of Rs. [TOTAL AMOUNT] along with interest @ [18]% per annum from the due date, within 15 days of receiving this notice.

If you fail to comply, I shall be constrained to initiate strict legal action against you under the relevant labor laws, civil laws for recovery, and criminal laws for cheating/breach of trust, at your sole risk, cost, and consequence.

Copy kept for record.

[YOUR SIGNATURE]
[YOUR FULL NAME]
[YOUR PHONE NUMBER]`,
    instructions: [
      'It is highly recommended to have a lawyer send this on their letterhead, but you can send it yourself as well.',
      'Send via Speed Post or Registered Post with Acknowledgment Due (AD). Do not just email it.',
      'Attach copies of your appointment letter, resignation acceptance, and salary slips.'
    ]
  },
  {
    id: 'consumer-notice',
    title: 'Notice to Seller for Defective Product',
    category: 'Consumer',
    description: 'Notice to a company/seller demanding replacement or refund for a defective product or deficient service.',
    whenToUse: 'Use this before filing a case in the Consumer Court. It shows the court you tried to resolve the issue directly with the seller.',
    templateText: `REGISTERED POST WITH A.D.

Date: [DATE]

To,
[NAME OF THE MANAGER / GRIEVANCE OFFICER],
[NAME OF THE SELLER / E-COMMERCE PLATFORM],
[COMPANY ADDRESS]

Subject: Notice demanding refund/replacement for defective [NAME OF PRODUCT].

Dear Sir/Madam,

1. On [DATE OF PURCHASE], I purchased a [FULL NAME OF PRODUCT AND MODEL NUMBER] from your store / website vide Invoice/Order No. [INVOICE NUMBER] for a sum of Rs. [AMOUNT PAID].
2. The product carried a warranty of [WARRANTY PERIOD].
3. Shortly after purchase, on [DATE WHEN DEFECT WAS NOTICED], I discovered that the product is defective. Specifically, [DESCRIBE THE EXACT DEFECT/PROBLEM].
4. I registered a complaint with your customer care on [DATE OF COMPLAINT] bearing Complaint Ticket No. [TICKET NUMBER], but the issue remains unresolved.
5. Supplying a defective product constitutes a "defect" and "deficiency in service" as well as an "unfair trade practice" under the Consumer Protection Act, 2019.

I therefore call upon you to either:
a) Replace the defective product with a new defect-free product, OR
b) Refund the entire amount of Rs. [AMOUNT PAID] along with 18% interest.

Please comply with this demand within 15 days of receiving this notice.

Should you fail to do so, I will be forced to file a formal complaint against you before the appropriate Consumer Disputes Redressal Commission seeking the refund, compensation for mental agony, and legal costs, at your sole risk and responsibility.

Yours sincerely,

(Signature)
[YOUR FULL NAME]
[YOUR COMPLETE ADDRESS]
[YOUR PHONE NUMBER]
[YOUR EMAIL]`,
    instructions: [
      'Keep copies of the invoice, warranty card, and customer care emails/chats.',
      'Send via Speed Post. Keep the tracking receipt.'
    ]
  },
  {
    id: 'tenant-eviction-response',
    title: 'Reply to Illegal Eviction Notice',
    category: 'Tenant',
    description: 'A formal reply to a landlord who is trying to evict you illegally or without proper notice.',
    whenToUse: 'Use this when your landlord asks you to vacate immediately without giving the notice period mentioned in your rent agreement.',
    templateText: `REGISTERED POST WITH A.D.

Date: [DATE]

To,
[NAME OF LANDLORD],
[ADDRESS OF LANDLORD]

Subject: Reply to your illegal verbal/written demand to vacate the rented premises.

Dear [Landlord's Name],

This is in response to your demand dated [DATE OF DEMAND] asking me to vacate the rented premises located at [FULL ADDRESS OF RENTED HOUSE].

1. I am a lawful tenant of the said premises under the Rent Agreement dated [DATE OF AGREEMENT], valid until [END DATE OF AGREEMENT].
2. I have been regularly paying the monthly rent of Rs. [RENT AMOUNT] and there are no arrears pending from my side.
3. You also hold a security deposit of Rs. [DEPOSIT AMOUNT] paid by me.
4. As per Clause [CLAUSE NUMBER] of our Rent Agreement, either party must give a minimum notice of [NOTICE PERIOD, e.g., 1 month/2 months] to terminate the tenancy.
5. Your sudden demand to vacate immediately is arbitrary, illegal, and in direct violation of our agreement and the Rent Control Act.

I am willing to vacate the premises upon completion of a valid notice period, provided you refund my full security deposit at the time of handing over the keys.

If you attempt to illegally evict me by force or disconnect essential services (electricity, water), I will be constrained to file a police complaint and approach the civil court for an injunction against you.

I hope good sense prevails and you act in accordance with the law.

Yours faithfully,

(Signature)
[YOUR FULL NAME]
[YOUR PHONE NUMBER]`,
    instructions: [
      'Send via Speed Post so you have proof of delivery.',
      'Never stop paying rent, even if there is a dispute. Pay via bank transfer so there is a record.'
    ]
  }
];

export default templates;
