/**
 * Portfolio videos. To add a video:
 *  1. Copy the ID from the YouTube URL: youtube.com/watch?v=THIS_PART
 *  2. Add an object below. `featured: true` also shows it on the home page.
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
  location: string;
  thumbnail?: string;
  title: { nl: string; en: string };
  description: { nl: string; en: string };
}

/** Order of the filter buttons on the Work page. */
export const categories: Category[] = ['hotels', 'realestate', 'landscapes', 'concerts'];

export const videos: Video[] = [
  {
    youtubeId: '5zmlwPqb3NQ',
    category: 'hotels',
    featured: true,
    year: 2026,
    location: 'Nederland',
    title: { nl: 'La Vie en Rose Hotel', en: 'La Vie en Rose Hotel' },
    description: {
      nl: 'Eén vloeiende vlucht van entree tot suite: lobby, gangen en kamers in één doorlopend shot.',
      en: 'One continuous flight from entrance to suite: lobby, corridors and rooms in a single take.',
    },
  },
  {
    youtubeId: 'GsvJfQgOj-c',
    category: 'realestate',
    featured: true,
    year: 2026,
    location: 'Zeeland',
    title: { nl: 'Run of the Mill: Oostmolen', en: 'Run of the Mill: Oostmolen' },
    description: {
      nl: 'Een historische molen in Zeeland, van buitenaf tot binnen tussen het houtwerk door gevlogen.',
      en: 'A historic windmill in Zeeland, flown from the outside in, threading through the timber frame.',
    },
  },
  {
    youtubeId: 'vcMELd609mM',
    category: 'landscapes',
    featured: true,
    year: 2026,
    location: 'Madeira',
    title: { nl: 'Madeira FPV', en: 'Madeira FPV' },
    description: {
      nl: 'Kliffen, bergkammen en kustlijn. Freestyle in manual mode, met cinematische controle.',
      en: 'Cliffs, ridgelines and coastline. Manual-mode freestyle with cinematic control.',
    },
  },
  {
    youtubeId: '-ZX2yu7T9zk',
    category: 'landscapes',
    start: 57,
    year: 2025,
    location: 'IJsland',
    title: { nl: 'IJsland', en: 'Iceland' },
    description: {
      nl: 'Watervallen, lavavelden en gletsjers, laag en snel gevlogen.',
      en: 'Waterfalls, lava fields and glaciers, flown low and fast.',
    },
  },
];
