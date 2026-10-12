/**
 * Site-wide settings. Change the brand name, domain or contact details here
 * and they update everywhere (header, footer, SEO tags, structured data).
 */
export const site = {
  /** Short brand name used in the logo, titles and copy. */
  brand: 'Nimbus',
  /** Full business name, used in structured data and the footer. */
  legalName: 'Nimbus Netherlands',
  /** Production URL, no trailing slash. Also set in astro.config.mjs. */
  url: 'https://nimbusnetherlands.nl',

  email: 'rubenvandv@gmail.com',
  /** Leave empty to hide. Example: '+31 6 12345678' */
  phone: '',
  /** Chamber of Commerce number. Leave empty to hide. */
  kvk: '',

  city: 'Hilversum',
  region: 'Noord-Holland',
  country: 'NL',

  /**
   * Drone operator registration (RDW / EASA). Leave operatorId empty to show
   * only the general statement on the About page.
   */
  operatorId: '',

  socials: {
    youtube: 'https://www.youtube.com/@NimbusNetherlands',
    instagram: '',
  },

  /**
   * Formspree form ID: the part after https://formspree.io/f/
   * Create a form at formspree.io and paste the ID here.
   */
  formspreeId: 'mnpjbgnb',

  /**
   * Cloudflare Web Analytics token (cookieless). Leave empty to disable.
   * Not needed if you enable analytics directly in the Cloudflare Pages dashboard.
   */
  cfAnalyticsToken: '',

  /** Default Open Graph image in /public. 1200×630. */
  ogImage: '/og/default.jpg',
} as const;

export type Site = typeof site;
