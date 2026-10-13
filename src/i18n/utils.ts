import nl from './nl';
import en from './en';
import fr from './fr';

export const languages = { nl: 'Nederlands', en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'nl';
export const langs = Object.keys(languages) as Lang[];

/** Open Graph locale per language. */
export const locales: Record<Lang, string> = { nl: 'nl_NL', en: 'en_GB', fr: 'fr_FR' };

const dictionaries = { nl, en, fr };

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

/** Translated URL slugs. Add a page here to give it a URL in every language. */
export const routes = {
  home: { nl: '/', en: '/en/', fr: '/fr/' },
  work: { nl: '/werk/', en: '/en/work/', fr: '/fr/realisations/' },
  services: { nl: '/diensten/', en: '/en/services/', fr: '/fr/services/' },
  about: { nl: '/over/', en: '/en/about/', fr: '/fr/a-propos/' },
  contact: { nl: '/contact/', en: '/en/contact/', fr: '/fr/contact/' },
  privacy: { nl: '/privacy/', en: '/en/privacy/', fr: '/fr/confidentialite/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

export function path(key: RouteKey, lang: Lang) {
  return routes[key][lang];
}

/** Find the route key for a URL path, e.g. '/en/work/' → 'work'. */
export function routeKeyFromPath(pathname: string): RouteKey | undefined {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  return (Object.keys(routes) as RouteKey[]).find((k) => langs.some((l) => routes[k][l] === p));
}
