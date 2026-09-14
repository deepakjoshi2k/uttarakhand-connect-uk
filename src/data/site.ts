// Single place for the details that appear in several components.
// TODO: replace the three placeholder URLs below before going live.
export const site = {
  name: 'Uttarakhandi Didi Bhula in UK',
  email: 'connectus@ukdbuk.com',
  donateUrl: 'https://example.org/donate', // TODO: real donation link
  social: {
    facebook: 'https://facebook.com', // TODO: real page
    instagram: 'https://instagram.com', // TODO: real profile
    youtube: 'https://youtube.com', // TODO: real channel
  },
} as const;

export type MembershipTier = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    name: 'Friend',
    price: '£25',
    cadence: 'a year',
    summary: 'For anyone who wants to stay close and lend a hand now and then.',
    includes: ['Invitations to every gathering', 'Monthly newsletter', 'Member directory access'],
  },
  {
    name: 'Family',
    price: '£60',
    cadence: 'a year',
    summary: 'Covers a whole household, including children’s language and culture sessions.',
    includes: [
      'Everything in Friend',
      'Household-wide event places',
      'Children’s language workshops',
      'Priority booking for festivals',
    ],
    featured: true,
  },
  {
    name: 'Patron',
    price: '£250',
    cadence: 'a year',
    summary: 'For members funding a named share of a programme back home.',
    includes: [
      'Everything in Family',
      'Named support for one programme',
      'Annual impact briefing',
      'Invitation to the trustees’ evening',
    ],
  },
];

export const volunteerRoles = [
  { title: 'Event crew', text: 'Set up, welcome families and help gatherings run calmly.' },
  { title: 'Language teaching', text: 'Lead Garhwali or Kumaoni sessions for children and adults.' },
  { title: 'Fundraising', text: 'Plan appeals, apply for grants and steward our supporters.' },
  { title: 'Media and design', text: 'Photography, newsletters, social posts and this website.' },
];
