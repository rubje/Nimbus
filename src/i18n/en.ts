import type nl from './nl';

/** English copy. Keep the same keys as nl.ts. */
const en: typeof nl = {
  meta: {
    home: {
      title: 'FPV drone video for hotels and real estate',
      description:
        'Nimbus creates smooth FPV fly-throughs of hotels and real estate across the Netherlands. One continuous shot, cinematically framed, ready for your marketing.',
    },
    work: {
      title: 'Work',
      description: 'FPV drone video portfolio: hotels, real estate, landscapes and, soon, concerts.',
    },
    services: {
      title: 'Services',
      description: 'FPV fly-throughs for hotels, real estate walkthroughs, weddings and, soon, event and concert footage. What you get and how it works.',
    },
    about: {
      title: 'About',
      description: 'Certified and registered FPV drone pilot based in Hilversum, the Netherlands. Bio, approach and equipment.',
    },
    contact: {
      title: 'Contact',
      description: 'Request a quote for an FPV drone film of your hotel, property or venue.',
    },
    privacy: {
      title: 'Privacy',
      description: 'How Nimbus handles your data: no tracking cookies, and videos load only after you click.',
    },
  },

  nav: {
    home: 'Home',
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    switchLang: 'Language',
  },

  categories: {
    all: 'All',
    hotels: 'Hotels',
    realestate: 'Real estate',
    landscapes: 'Landscapes',
    concerts: 'Concerts',
  },

  video: {
    play: 'Play video',
    close: 'Close video',
    consent: 'The video loads from YouTube (privacy-enhanced mode).',
  },

  home: {
    heroKicker: 'FPV drone videography',
    heroTitle: 'One flight. Your whole story.',
    heroLead: 'Smooth fly-throughs of hotels and real estate, in one continuous shot.',
    heroCta: 'See the work',
    heroCta2: 'Request a quote',
    introTitle: 'Precision inside. Freedom outside.',
    introText:
      'An FPV drone flies where a regular drone or gimbal can’t: through doorways, along staircases, under ceilings and out over the pool. I combine centimetre-precise flying indoors with manual-mode freestyle outdoors. The footage stays calm and tightly framed, so it’s ready for your website, booking platform or campaign.',
    featuredTitle: 'Featured work',
    featuredAll: 'All projects',
    servicesTitle: 'What I do',
    servicesMore: 'All services',
    ctaTitle: 'Have a place worth showing?',
    ctaText: 'Tell me about your location. Within two working days you get a proposal with a flight plan and price.',
    ctaButton: 'Get in touch',
  },

  work: {
    title: 'Work',
    lead: 'A selection of recent flights. Click a project to play it.',
    filterLabel: 'Filter by category',
    count: '{n} projects shown',
    empty: 'Concert footage is on its way. Book your 2027 event now.',
  },

  services: {
    title: 'Services',
    lead: 'Every job starts with a flight plan. You know up front what you’ll get, and I know where every centimetre of clearance is.',
    included: 'Included',
    idealFor: 'Ideal for',
    soon: 'Coming soon',
    more: 'Learn more',
    processTitle: 'How it works',
    ctaButton: 'Request a quote',
  },

  about: {
    title: 'About Nimbus',
    bio: [
      'I’m Ruben, an FPV pilot based in Hilversum. I’ve flown freestyle for years and noticed that the same technique, flown calmer and to a plan, shows spaces in a way photos and regular drone footage can’t.',
      'That’s where Nimbus came from: cinematic fly-throughs for hotels and real estate. Indoors I fly precisely and predictably. Outdoors, where it’s safe, manual-mode freestyle gives the shots extra energy. The framing always stays calm, because the film should sell your location, not the pilot.',
    ],
    certTitle: 'Certified and registered',
    certText:
      'I’m a registered drone operator with the Dutch RDW and fly with the required EASA certification, within the rules of the open category. I’m insured, and where needed I arrange permission with the venue and municipality in advance.',
    operatorLabel: 'Operator number',
    photoAlt: 'Ruben wearing FPV goggles and holding the controller, sitting on a rock among lupines in Iceland',
    gearTitle: 'Equipment',
    approachTitle: 'Approach',
    approach: [
      'Safety first: prop guards indoors, briefings with staff and guests.',
      'Several takes per route until the line is perfect.',
      'Delivered in the formats you actually use.',
    ],
  },

  contact: {
    title: 'Contact',
    lead: 'Tell me about your location and what you want to achieve. I reply within two working days.',
    quoteTitle: 'How to request a quote',
    quoteSteps: [
      'Type of location (hotel, property, wedding, event) and the town or city.',
      'Approximate size, or the number of spaces to cover.',
      'Where the film will be used: website, social, listings, campaign.',
      'Preferred shoot date or deadline.',
    ],
    emailLabel: 'Prefer email?',
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company (optional)',
      type: 'Project type',
      typeOptions: ['Hotel', 'Real estate', 'Wedding', 'Event / concert', 'Other'],
      date: 'Preferred date (optional)',
      message: 'Message',
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Thanks! Your message has been sent. You’ll hear from me within two working days.',
      error: 'Something went wrong. Please try again later.',
      privacy: 'Your details are only used to reply to your request.',
    },
  },

  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: October 2026',
    contactLink: 'Contact form',
    sections: [
      {
        h: 'No tracking cookies',
        p: 'This website sets no tracking or advertising cookies, which is why there is no cookie banner.',
      },
      {
        h: 'Videos',
        p: 'Videos are hosted on YouTube and only load when you click play. They then run in YouTube’s privacy-enhanced mode (youtube-nocookie.com), and from that point Google’s privacy policy also applies. Preview images are served from this website itself, without contacting YouTube.',
      },
      {
        h: 'Contact form',
        p: 'When you submit the contact form, your name, email address and message are sent to me via Formspree. I only use this information to reply to your request and keep it no longer than necessary.',
      },
      {
        h: 'Analytics',
        p: 'If analytics are enabled, I use Cloudflare Web Analytics, which works without cookies and does not store personal data.',
      },
      {
        h: 'Your rights',
        p: 'You can always ask what data I hold about you and have it corrected or deleted. Just get in touch through the contact form.',
      },
    ],
  },

  footer: {
    tagline: 'FPV drone videography for hotels and real estate.',
    based: 'Based in',
    serving: 'working across the Netherlands',
    privacy: 'Privacy',
    kvk: 'Chamber of Commerce',
  },
};

export default en;
