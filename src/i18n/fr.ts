import type nl from './nl';

/** French copy. Keep the same keys as nl.ts. */
const fr: typeof nl = {
  meta: {
    home: {
      title: 'Vidéo par drone FPV pour hôtels et immobilier',
      description:
        'Nimbus réalise des vols FPV fluides à travers hôtels et biens immobiliers aux Pays-Bas. Un seul plan continu, cadré comme au cinéma, prêt pour votre marketing.',
    },
    work: {
      title: 'Réalisations',
      description: 'Portfolio de vidéos par drone FPV : hôtels, immobilier, paysages et, bientôt, concerts.',
    },
    services: {
      title: 'Services',
      description: 'Vols FPV pour hôtels, visites immobilières, mariages et, bientôt, événements et concerts. Ce que vous obtenez et comment ça marche.',
    },
    about: {
      title: 'À propos',
      description: 'Pilote de drone FPV certifié et enregistré, basé à Hilversum (Pays-Bas). Parcours, méthode et matériel.',
    },
    contact: {
      title: 'Contact',
      description: 'Demandez un devis pour un film par drone FPV de votre hôtel, bien immobilier ou lieu.',
    },
    privacy: {
      title: 'Confidentialité',
      description: 'Comment Nimbus traite vos données : aucun cookie de suivi, et les vidéos ne se chargent qu’après un clic.',
    },
  },

  nav: {
    home: 'Accueil',
    work: 'Réalisations',
    services: 'Services',
    about: 'À propos',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Fermer',
    skip: 'Aller au contenu',
    switchLang: 'Langue',
  },

  categories: {
    all: 'Tout',
    hotels: 'Hôtels',
    realestate: 'Immobilier',
    landscapes: 'Paysages',
    concerts: 'Concerts',
  },

  video: {
    play: 'Lire la vidéo',
    close: 'Fermer la vidéo',
    consent: 'La vidéo est chargée depuis YouTube (mode confidentialité renforcée).',
  },

  home: {
    heroKicker: 'Vidéo par drone FPV',
    heroTitle: 'Un seul vol. Toute votre histoire.',
    heroLead: 'Des vols fluides à travers hôtels et biens immobiliers, en un seul plan continu.',
    heroCta: 'Voir les réalisations',
    heroCta2: 'Demander un devis',
    introTitle: 'Précision à l’intérieur. Liberté à l’extérieur.',
    introText:
      'Un drone FPV passe là où un drone classique ou un gimbal ne passe pas : par les portes, le long des escaliers, sous les plafonds et jusqu’au-dessus de la piscine. Je combine un pilotage au centimètre près à l’intérieur et du freestyle en mode manuel à l’extérieur. L’image reste calme et soigneusement cadrée, prête pour votre site web, votre plateforme de réservation ou votre campagne.',
    featuredTitle: 'Réalisations à la une',
    featuredAll: 'Tous les projets',
    servicesTitle: 'Ce que je fais',
    servicesMore: 'Tous les services',
    ctaTitle: 'Un lieu qui mérite d’être vu ?',
    ctaText: 'Parlez-moi de votre lieu. Sous deux jours ouvrés, vous recevez une proposition avec plan de vol et tarif.',
    ctaButton: 'Me contacter',
  },

  work: {
    title: 'Réalisations',
    lead: 'Une sélection de vols récents. Cliquez sur un projet pour le lancer.',
    filterLabel: 'Filtrer par catégorie',
    count: '{n} projets affichés',
    empty: 'Les images de concerts arrivent bientôt. Réservez dès maintenant votre événement 2027.',
  },

  services: {
    title: 'Services',
    lead: 'Chaque projet commence par un plan de vol. Vous savez à l’avance ce que vous obtiendrez, et je sais où se trouve chaque centimètre de marge.',
    included: 'Inclus',
    idealFor: 'Idéal pour',
    soon: 'Bientôt',
    more: 'En savoir plus',
    processTitle: 'Comment ça marche',
    ctaButton: 'Demander un devis',
  },

  about: {
    title: 'À propos de Nimbus',
    bio: [
      'Je suis Ruben, pilote FPV basé à Hilversum. Je vole en freestyle depuis des années et j’ai constaté que la même technique, pilotée plus calmement et selon un plan, montre les espaces comme ni les photos ni les images de drone classiques ne le peuvent.',
      'C’est ainsi qu’est né Nimbus : des vols cinématographiques pour hôtels et biens immobiliers. À l’intérieur, je pilote avec précision et de façon prévisible. À l’extérieur, là où c’est sûr, le freestyle en mode manuel donne plus d’énergie aux plans. Le cadrage reste toujours calme, car le film doit mettre en valeur votre lieu, pas le pilote.',
    ],
    certTitle: 'Certifié et enregistré',
    certText:
      'Je suis exploitant de drone enregistré auprès de la RDW (autorité néerlandaise) et je vole avec la certification EASA requise, dans le cadre de la catégorie ouverte. Je suis assuré et, si nécessaire, j’obtiens au préalable l’autorisation du lieu et de la commune.',
    operatorLabel: 'Numéro d’exploitant',
    photoAlt: 'Ruben avec casque FPV et radiocommande, assis sur un rocher parmi les lupins en Islande',
    gearTitle: 'Matériel',
    approachTitle: 'Méthode',
    approach: [
      'La sécurité d’abord : protections d’hélices à l’intérieur, briefing avec le personnel et les invités.',
      'Plusieurs prises par trajet, jusqu’à ce que la ligne soit parfaite.',
      'Livraison dans les formats que vous utilisez vraiment.',
    ],
  },

  contact: {
    title: 'Contact',
    lead: 'Parlez-moi de votre lieu et de ce que vous souhaitez obtenir. Je réponds sous deux jours ouvrés.',
    quoteTitle: 'Pour demander un devis',
    quoteSteps: [
      'Type de lieu (hôtel, bien immobilier, mariage, événement) et la ville.',
      'Taille approximative, ou nombre d’espaces à filmer.',
      'Utilisation du film : site web, réseaux sociaux, annonces, campagne.',
      'Date de tournage souhaitée ou échéance.',
    ],
    emailLabel: 'Vous préférez l’e-mail ?',
    form: {
      name: 'Nom',
      email: 'E-mail',
      company: 'Entreprise (facultatif)',
      type: 'Type de projet',
      typeOptions: ['Hôtel', 'Immobilier', 'Mariage', 'Événement / concert', 'Autre'],
      date: 'Date souhaitée (facultatif)',
      message: 'Message',
      submit: 'Envoyer la demande',
      sending: 'Envoi…',
      success: 'Merci ! Votre message a bien été envoyé. Je vous réponds sous deux jours ouvrés.',
      error: 'Une erreur est survenue. Veuillez réessayer plus tard.',
      privacy: 'Vos données servent uniquement à répondre à votre demande.',
    },
  },

  privacy: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : octobre 2026',
    contactLink: 'Formulaire de contact',
    sections: [
      {
        h: 'Aucun cookie de suivi',
        p: 'Ce site ne dépose aucun cookie de suivi ou publicitaire. C’est pourquoi il n’y a pas de bannière cookies.',
      },
      {
        h: 'Vidéos',
        p: 'Les vidéos sont hébergées sur YouTube et ne se chargent que lorsque vous cliquez sur lecture. Elles s’affichent alors en mode confidentialité renforcée (youtube-nocookie.com) et, à partir de ce moment, la politique de confidentialité de Google s’applique également. Les images d’aperçu sont servies par ce site lui-même, sans contacter YouTube.',
      },
      {
        h: 'Formulaire de contact',
        p: 'Lorsque vous envoyez le formulaire de contact, votre nom, votre adresse e-mail et votre message me sont transmis via Formspree. J’utilise ces informations uniquement pour répondre à votre demande et ne les conserve pas plus longtemps que nécessaire.',
      },
      {
        h: 'Statistiques',
        p: 'Si les statistiques sont activées, j’utilise Cloudflare Web Analytics, qui fonctionne sans cookies et ne stocke aucune donnée personnelle.',
      },
      {
        h: 'Vos droits',
        p: 'Vous pouvez toujours demander quelles données je détiens à votre sujet, et les faire corriger ou supprimer. Il suffit de me contacter via le formulaire de contact.',
      },
    ],
  },

  footer: {
    tagline: 'Vidéo par drone FPV pour hôtels et immobilier.',
    based: 'Basé à',
    serving: 'actif dans tous les Pays-Bas',
    privacy: 'Confidentialité',
    kvk: 'KvK (registre du commerce)',
  },
};

export default fr;
