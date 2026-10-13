// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { routes, langs, routeKeyFromPath } from './src/i18n/utils.ts';

// Keep in sync with site.url in src/config/site.ts
const SITE = 'https://nimbusnetherlands.nl';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  // YouTube thumbnails are downloaded and optimised at build time.
  image: { domains: ['i.ytimg.com'] },
  build: { format: 'directory' },
  // Content-Security-Policy as a <meta> tag with hashes for every script and
  // style Astro renders. frame-ancestors and HSTS live in public/_headers.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "media-src 'self'",
        "connect-src 'self' https://formspree.io https://cloudflareinsights.com",
        'frame-src https://www.youtube-nocookie.com',
        "form-action 'self' https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { resources: ["'self'", 'https://static.cloudflareinsights.com'] },
    },
  },
  integrations: [
    sitemap({
      // Pair NL, EN and FR pages (translated slugs) as hreflang alternates.
      serialize(item) {
        const key = routeKeyFromPath(new URL(item.url).pathname);
        if (key) {
          item.links = [
            ...langs.map((lang) => ({ lang, url: SITE + routes[key][lang] })),
            { lang: 'x-default', url: SITE + routes[key].nl },
          ];
        }
        return item;
      },
    }),
  ],
});
