/**
 * Services shown on the home page (overview) and the Services page (full).
 * status: 'available' or 'soon' (shows a "coming soon" label).
 */
type L = { nl: string; en: string; fr: string };

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
    title: { nl: 'FPV fly-through voor hotels', en: 'FPV fly-through for hotels', fr: 'Vol FPV pour hôtels' },
    summary: {
      nl: 'Eén doorlopende vlucht die gasten meeneemt van de oprit tot het balkon van de suite. Geen montage-trucs, gewoon de beleving zoals een gast hem heeft. Ideaal voor je website, booking-platforms en social.',
      en: 'One continuous flight that takes guests from the driveway to the suite balcony. No editing tricks, just the stay as a guest would experience it. Made for your website, booking platforms and social.',
      fr: 'Un vol continu qui emmène vos clients de l’allée jusqu’au balcon de la suite. Aucun artifice de montage, simplement le séjour tel qu’un client le vit. Conçu pour votre site web, les plateformes de réservation et les réseaux sociaux.',
    },
    included: [
      { nl: 'Voorverkenning en vliegplan per ruimte', en: 'Site recce and a flight plan per space', fr: 'Repérage sur place et plan de vol pour chaque espace' },
      { nl: 'Eén hoofdvideo (60–90 sec) in 4K', en: 'One hero film (60–90 sec) in 4K', fr: 'Un film principal (60–90 s) en 4K' },
      { nl: 'Verticale versies voor Reels en TikTok', en: 'Vertical cuts for Reels and TikTok', fr: 'Versions verticales pour Reels et TikTok' },
      { nl: 'Kleurcorrectie en licentievrije muziek', en: 'Colour grade and licensed music', fr: 'Étalonnage et musique sous licence' },
      { nl: 'Twee correctierondes', en: 'Two rounds of revisions', fr: 'Deux séries de corrections' },
    ],
    idealFor: {
      nl: 'Boutique hotels, resorts, B&B’s, wellness en restaurants.',
      en: 'Boutique hotels, resorts, B&Bs, spas and restaurants.',
      fr: 'Hôtels de charme, resorts, chambres d’hôtes, spas et restaurants.',
    },
  },
  {
    id: 'realestate',
    status: 'available',
    title: { nl: 'Vastgoed walkthroughs', en: 'Real estate walkthroughs', fr: 'Visites immobilières' },
    summary: {
      nl: 'Een rustige, nauwkeurige vlucht die de indeling van een woning of pand in één keer laat zien. Kopers voelen de ruimte en de flow, beter dan met een fotoserie.',
      en: 'A calm, precise flight that shows the layout of a home or building in one go. Buyers get a feel for the space and how it flows, better than a photo series can.',
      fr: 'Un vol calme et précis qui montre l’agencement d’une maison ou d’un bâtiment d’un seul tenant. Les acheteurs ressentent l’espace et la circulation, mieux qu’avec une série de photos.',
    },
    included: [
      { nl: 'Binnen én buiten in één vlucht', en: 'Interior and exterior in a single flight', fr: 'Intérieur et extérieur en un seul vol' },
      { nl: 'Video in 4K, geschikt voor Funda en social', en: '4K film, ready for listings and social', fr: 'Film 4K, prêt pour les annonces et les réseaux sociaux' },
      { nl: 'Optionele luchtfoto’s van omgeving en kavel', en: 'Optional aerial stills of plot and surroundings', fr: 'En option : photos aériennes du terrain et des environs' },
      { nl: 'Levering binnen 5 werkdagen', en: 'Delivery within 5 working days', fr: 'Livraison sous 5 jours ouvrés' },
    ],
    idealFor: {
      nl: 'Makelaars, projectontwikkelaars, vakantieparken en bijzondere locaties.',
      en: 'Estate agents, developers, holiday parks and unique venues.',
      fr: 'Agents immobiliers, promoteurs, parcs de vacances et lieux d’exception.',
    },
  },
  {
    id: 'weddings',
    status: 'available',
    title: { nl: 'Bruiloften', en: 'Weddings', fr: 'Mariages' },
    summary: {
      nl: 'Eén vlucht door je hele dag: van de ceremonie naar de feestzaal, langs de gasten en de tafels. Ingetogen en dichtbij, zonder dat het ooit stoort. Als aanvulling op je fotograaf of videograaf, of als losse highlight.',
      en: 'One flight through your whole day: from the ceremony to the reception, past the guests and the tables. Discreet and close up, without ever getting in the way. Alongside your photographer or videographer, or as a standalone highlight.',
      fr: 'Un vol à travers toute votre journée : de la cérémonie à la réception, entre les invités et les tables. Discret et au plus près, sans jamais gêner. En complément de votre photographe ou vidéaste, ou comme film à part entière.',
    },
    included: [
      { nl: 'Locatiecheck en afstemming met trouwlocatie', en: 'Venue check and coordination with the venue', fr: 'Repérage et coordination avec le lieu de réception' },
      { nl: 'Afstemming met je fotograaf en videograaf', en: 'Coordination with your photographer and videographer', fr: 'Coordination avec votre photographe et votre vidéaste' },
      { nl: 'Doorlopende fly-through van ceremonie en feest', en: 'Continuous fly-through of ceremony and party', fr: 'Vol continu de la cérémonie et de la fête' },
      { nl: 'Highlight-film (1–2 min) in 4K, plus verticale versie', en: 'Highlight film (1–2 min) in 4K, plus a vertical cut', fr: 'Film souvenir (1–2 min) en 4K, plus une version verticale' },
      { nl: 'Ruwe beelden op aanvraag voor je videograaf', en: 'Raw footage on request for your videographer', fr: 'Rushes sur demande pour votre vidéaste' },
    ],
    idealFor: {
      nl: 'Bruidsparen, weddingplanners, trouwlocaties en videografen.',
      en: 'Couples, wedding planners, venues and videographers.',
      fr: 'Futurs mariés, wedding planners, lieux de réception et vidéastes.',
    },
  },
  {
    id: 'events',
    status: 'soon',
    title: { nl: 'Events en concerten', en: 'Events and concerts', fr: 'Événements et concerts' },
    summary: {
      nl: 'FPV tussen het publiek, over het podium en door de lichtshow, gevlogen met oog voor veiligheid en de artiest. Binnenkort beschikbaar. Plan nu al je event voor 2027.',
      en: 'FPV through the crowd, over the stage and into the light show, flown with care for safety and for the artist. Coming soon. Book your 2027 event now.',
      fr: 'Du FPV à travers la foule, au-dessus de la scène et dans le show lumière, piloté avec soin pour la sécurité et pour l’artiste. Bientôt disponible. Réservez dès maintenant votre événement 2027.',
    },
    included: [
      { nl: 'Afstemming met productie en veiligheid', en: 'Coordination with production and safety', fr: 'Coordination avec la production et la sécurité' },
      { nl: 'Aftermovie en losse highlight-shots', en: 'Aftermovie plus standalone highlight shots', fr: 'Aftermovie et plans forts séparés' },
      { nl: 'Snelle social-edit binnen 48 uur', en: 'Fast social edit within 48 hours', fr: 'Montage express pour les réseaux sous 48 heures' },
    ],
    idealFor: {
      nl: 'Festivals, concerten, bedrijfsevents en lanceringen.',
      en: 'Festivals, concerts, corporate events and launches.',
      fr: 'Festivals, concerts, événements d’entreprise et lancements.',
    },
  },
];

/** "How it works" steps, shown on the Services page. */
export const process: { title: L; text: L }[] = [
  {
    title: { nl: 'Kennismaking', en: 'Intro call', fr: 'Premier échange' },
    text: {
      nl: 'We bespreken je doel, de locatie en waar de video gebruikt gaat worden.',
      en: 'We discuss your goal, the location and where the film will be used.',
      fr: 'Nous parlons de votre objectif, du lieu et de l’utilisation du film.',
    },
  },
  {
    title: { nl: 'Verkenning & vliegplan', en: 'Recce & flight plan', fr: 'Repérage & plan de vol' },
    text: {
      nl: 'Ik bekijk de locatie, check regelgeving en toestemming en teken de route uit.',
      en: 'I scout the location, check regulations and permissions, and map out the route.',
      fr: 'Je repère le lieu, vérifie la réglementation et les autorisations, et trace le parcours.',
    },
  },
  {
    title: { nl: 'Opnamedag', en: 'Shoot day', fr: 'Jour de tournage' },
    text: {
      nl: 'Meerdere takes per route, tot de vlucht klopt. Meestal binnen een halve dag.',
      en: 'Several takes per route until the flight is right. Usually within half a day.',
      fr: 'Plusieurs prises par trajet jusqu’à ce que le vol soit parfait. Généralement en une demi-journée.',
    },
  },
  {
    title: { nl: 'Montage & levering', en: 'Edit & delivery', fr: 'Montage & livraison' },
    text: {
      nl: 'Kleurcorrectie, muziek en formaten voor elk kanaal. Inclusief twee correctierondes.',
      en: 'Colour grade, music and formats for every channel. Two revision rounds included.',
      fr: 'Étalonnage, musique et formats pour chaque canal. Deux séries de corrections incluses.',
    },
  },
];
