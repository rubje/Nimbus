/**
 * Portfolio videos. To add a video:
 *  1. Copy the ID from the YouTube URL: youtube.com/watch?v=THIS_PART
 *  2. Add an object below. `featured: true` also shows it on the home page (max 4).
 *  3. Optional `start` = start time in seconds (like &t=57s).
 *  4. Optional `thumbnail` = a file in /public (e.g. '/thumbs/hotel.jpg').
 *     Without it, the YouTube thumbnail is used.
 */
export type Category = 'hotels' | 'realestate' | 'landscapes' | 'concerts';

export interface Video {
  youtubeId: string;
  category: Category;
  featured?: boolean;
  start?: number;
  year: number;
  location: { nl: string; en: string; fr: string };
  thumbnail?: string;
  title: { nl: string; en: string; fr: string };
  description: { nl: string; en: string; fr: string };
}

/** Order of the filter buttons on the Work page. */
export const categories: Category[] = ['hotels', 'realestate', 'landscapes', 'concerts'];

export const videos: Video[] = [
  {
    youtubeId: '5zmlwPqb3NQ',
    category: 'hotels',
    featured: true,
    year: 2026,
    location: { nl: 'Nederland', en: 'Netherlands', fr: 'Pays-Bas' },
    title: { nl: 'La Vie en Rose Hotel', en: 'La Vie en Rose Hotel', fr: 'La Vie en Rose Hotel' },
    description: {
      nl: 'Eén vloeiende vlucht van entree tot suite: lobby, gangen en kamers in één doorlopend shot.',
      en: 'One continuous flight from entrance to suite: lobby, corridors and rooms in a single take.',
      fr: 'Un vol continu de l’entrée à la suite : hall, couloirs et chambres en une seule prise.',
    },
  },
  {
    youtubeId: 'BffGNegjQeg',
    category: 'realestate',
    featured: true,
    year: 2026,
    location: { nl: 'Zeeland', en: 'Zeeland', fr: 'Zélande' },
    title: { nl: 'Run of the Mill: Oostmolen', en: 'Run of the Mill: Oostmolen', fr: 'Run of the Mill : Oostmolen' },
    description: {
      nl: 'Een historische molen in Zeeland, van buitenaf tot binnen tussen het houtwerk door gevlogen.',
      en: 'A historic windmill in Zeeland, flown from the outside in, threading through the timber frame.',
      fr: 'Un moulin historique en Zélande, survolé de l’extérieur vers l’intérieur, à travers la charpente.',
    },
  },
  {
    youtubeId: 'vcMELd609mM',
    category: 'landscapes',
    featured: true,
    year: 2026,
    location: { nl: 'Madeira', en: 'Madeira', fr: 'Madère' },
    title: { nl: 'Madeira FPV', en: 'Madeira FPV', fr: 'Madère FPV' },
    description: {
      nl: 'Kliffen, bergkammen en kustlijn. Freestyle in manual mode, met cinematische controle.',
      en: 'Cliffs, ridgelines and coastline. Manual-mode freestyle with cinematic control.',
      fr: 'Falaises, crêtes et littoral. Du freestyle en mode manuel, avec une maîtrise cinématographique.',
    },
  },
  {
    youtubeId: '-ZX2yu7T9zk',
    category: 'landscapes',
    featured: true,
    start: 57,
    year: 2025,
    location: { nl: 'IJsland', en: 'Iceland', fr: 'Islande' },
    title: { nl: 'IJsland', en: 'Iceland', fr: 'Islande' },
    description: {
      nl: 'Watervallen, lavavelden en gletsjers, laag en snel gevlogen.',
      en: 'Waterfalls, lava fields and glaciers, flown low and fast.',
      fr: 'Cascades, champs de lave et glaciers, survolés bas et vite.',
    },
  },
];
