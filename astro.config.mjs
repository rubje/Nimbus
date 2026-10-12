// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { routes, routeKeyFromPath } from './src/i18n/utils.ts';

// Keep in sync with site.url in src/config/site.ts
const SITE = 'https://nimbusnetherlands.nl';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  // YouTube thumbnails are downloaded and optimised at build time.
  image: { domains: ['i.ytimg.com'] },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Pair NL and EN pages (translated slugs) as hreflang alternates.
      serialize(item) {
        const key = routeKeyFromPath(new URL(item.url).pathname);
        if (key) {
          item.links = [
            { lang: 'nl', url: SITE + routes[key].nl },
            { lang: 'en', url: SITE + routes[key].en },
            { lang: 'x-default', url: SITE + routes[key].nl },
          ];
        }
        return item;
      },
    }),
  ],
});
