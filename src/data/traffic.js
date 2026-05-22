const trafficFines = [
  {
    id: 'tf-helmet',
    offense: 'Driving without Helmet',
    fine: '₹1,000',
    section: 'Section 194D',
    action: 'Always wear an ISI marked helmet. Fine can also include disqualification of license for 3 months.'
  },
  {
    id: 'tf-license',
    offense: 'Driving without License',
    fine: '₹5,000',
    section: 'Section 181',
    action: 'Always carry a physical or digital (DigiLocker/mParivahan) copy of your valid Driving License.'
  },
  {
    id: 'tf-drunk',
    offense: 'Drunk Driving',
    fine: '₹10,000 and/or 6 months prison',
    section: 'Section 185',
    action: 'Never drink and drive. Repeat offense fine is ₹15,000 and/or 2 years prison.'
  },
  {
    id: 'tf-seatbelt',
    offense: 'Driving without Seatbelt',
    fine: '₹1,000',
    section: 'Section 194B',
    action: 'Ensure both driver and front passenger are wearing seatbelts.'
  },
  {
    id: 'tf-speeding',
    offense: 'Overspeeding',
    fine: '₹1,000 to ₹2,000',
    section: 'Section 183',
    action: 'Light motor vehicles: ₹1,000-₹2,000. Medium/Heavy passenger vehicles: ₹2,000-₹4,000.'
  },
  {
    id: 'tf-insurance',
    offense: 'Driving without Insurance',
    fine: '₹2,000 and/or 3 months prison',
    section: 'Section 196',
    action: 'Always carry valid third-party insurance at minimum.'
  },
  {
    id: 'tf-phone',
    offense: 'Using Mobile Phone while Driving',
    fine: '₹1,000 to ₹5,000',
    section: 'Section 184',
    action: 'Using a phone for navigation is allowed if mounted properly, but texting/calling is punishable.'
  },
  {
    id: 'tf-pollution',
    offense: 'Driving without valid PUC Certificate',
    fine: '₹10,000',
    section: 'Section 190(2)',
    action: 'Ensure your Pollution Under Control (PUC) certificate is renewed regularly.'
  },
  {
    id: 'tf-signal',
    offense: 'Jumping Red Light',
    fine: '₹1,000 to ₹5,000',
    section: 'Section 184',
    action: 'Follow traffic signals. License can be suspended for repeat offenses.'
  },
  {
    id: 'tf-emergency',
    offense: 'Not giving way to Emergency Vehicles',
    fine: '₹10,000',
    section: 'Section 194E',
    action: 'Always pull over to the left to let Ambulances and Fire Engines pass.'
  }
];

export default trafficFines;
