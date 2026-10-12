import nl from './nl';
import en from './en';

export const languages = { nl: 'Nederlands', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'nl';

const dictionaries = { nl, en };

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

/** Translated URL slugs. Add a page here to give it NL and EN URLs. */
export const routes = {
  home: { nl: '/', en: '/en/' },
  work: { nl: '/werk/', en: '/en/work/' },
  services: { nl: '/diensten/', en: '/en/services/' },
  about: { nl: '/over/', en: '/en/about/' },
  contact: { nl: '/contact/', en: '/en/contact/' },
  privacy: { nl: '/privacy/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;

export function path(key: RouteKey, lang: Lang) {
  return routes[key][lang];
}

/** Find the route key for a URL path, e.g. '/en/work/' → 'work'. */
export function routeKeyFromPath(pathname: string): RouteKey | undefined {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  return (Object.keys(routes) as RouteKey[]).find((k) => routes[k].nl === p || routes[k].en === p);
}
