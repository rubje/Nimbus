/**
 * Services shown on the home page (overview) and the Services page (full).
 * status: 'available' or 'soon' (shows a "coming soon" label).
 */
type L = { nl: string; en: string };

export interface Service {
  id: string;
  status: 'available' | 'soon';
  title: L;
  summary: L;
  included: L[];
  idealFor: L;
}

export const services: Service[] = [
  {
    id: 'hotels',
    status: 'available',
    title: { nl: 'FPV fly-through voor hotels', en: 'FPV fly-through for hotels' },
    summary: {
      nl: 'Eén doorlopende vlucht die gasten meeneemt van de oprit tot het balkon van de suite. Geen montage-trucs, gewoon de beleving zoals een gast hem heeft. Ideaal voor je website, booking-platforms en social.',
      en: 'One continuous flight that takes guests from the driveway to the suite balcony. No editing tricks, just the stay as a guest would experience it. Made for your website, booking platforms and social.',
    },
    included: [
      { nl: 'Voorverkenning en vliegplan per ruimte', en: 'Site recce and a flight plan per space' },
      { nl: 'Eén hoofdvideo (60–90 sec) in 4K', en: 'One hero film (60–90 sec) in 4K' },
      { nl: 'Verticale versies voor Reels en TikTok', en: 'Vertical cuts for Reels and TikTok' },
      { nl: 'Kleurcorrectie en licentievrije muziek', en: 'Colour grade and licensed music' },
      { nl: 'Twee correctierondes', en: 'Two rounds of revisions' },
    ],
    idealFor: {
      nl: 'Boutique hotels, resorts, B&B’s, wellness en restaurants.',
      en: 'Boutique hotels, resorts, B&Bs, spas and restaurants.',
    },
  },
  {
    id: 'realestate',
    status: 'available',
    title: { nl: 'Vastgoed walkthroughs', en: 'Real estate walkthroughs' },
    summary: {
      nl: 'Een rustige, nauwkeurige vlucht die de indeling van een woning of pand in één keer laat zien. Kopers voelen de ruimte en de flow, beter dan met een fotoserie.',
      en: 'A calm, precise flight that shows the layout of a home or building in one go. Buyers get a feel for the space and how it flows, better than a photo series can.',
    },
    included: [
      { nl: 'Binnen én buiten in één vlucht', en: 'Interior and exterior in a single flight' },
      { nl: 'Video in 4K, geschikt voor Funda en social', en: '4K film, ready for listings and social' },
      { nl: 'Optionele luchtfoto’s van omgeving en kavel', en: 'Optional aerial stills of plot and surroundings' },
      { nl: 'Levering binnen 5 werkdagen', en: 'Delivery within 5 working days' },
    ],
    idealFor: {
      nl: 'Makelaars, projectontwikkelaars, vakantieparken en bijzondere locaties.',
      en: 'Estate agents, developers, holiday parks and unique venues.',
    },
  },
  {
    id: 'events',
    status: 'soon',
    title: { nl: 'Events en concerten', en: 'Events and concerts' },
    summary: {
      nl: 'FPV tussen het publiek, over het podium en door de lichtshow, gevlogen met oog voor veiligheid en de artiest. Binnenkort beschikbaar. Plan nu al je event voor 2027.',
      en: 'FPV through the crowd, over the stage and into the light show, flown with care for safety and for the artist. Coming soon. Book your 2027 event now.',
    },
    included: [
      { nl: 'Afstemming met productie en veiligheid', en: 'Coordination with production and safety' },
      { nl: 'Aftermovie en losse highlight-shots', en: 'Aftermovie plus standalone highlight shots' },
      { nl: 'Snelle social-edit binnen 48 uur', en: 'Fast social edit within 48 hours' },
    ],
    idealFor: {
      nl: 'Festivals, concerten, bedrijfsevents en lanceringen.',
      en: 'Festivals, concerts, corporate events and launches.',
    },
  },
];

/** "How it works" steps, shown on the Services page. */
export const process: { title: L; text: L }[] = [
  {
    title: { nl: 'Kennismaking', en: 'Intro call' },
    text: {
      nl: 'We bespreken je doel, de locatie en waar de video gebruikt gaat worden.',
      en: 'We discuss your goal, the location and where the film will be used.',
    },
  },
  {
    title: { nl: 'Verkenning & vliegplan', en: 'Recce & flight plan' },
    text: {
      nl: 'Ik bekijk de locatie, check regelgeving en toestemming en teken de route uit.',
      en: 'I scout the location, check regulations and permissions, and map out the route.',
    },
  },
  {
    title: { nl: 'Opnamedag', en: 'Shoot day' },
    text: {
      nl: 'Meerdere takes per route, tot de vlucht klopt. Meestal binnen een halve dag.',
      en: 'Several takes per route until the flight is right. Usually within half a day.',
    },
  },
  {
    title: { nl: 'Montage & levering', en: 'Edit & delivery' },
    text: {
      nl: 'Kleurcorrectie, muziek en formaten voor elk kanaal. Inclusief twee correctierondes.',
      en: 'Colour grade, music and formats for every channel. Two revision rounds included.',
    },
  },
];
