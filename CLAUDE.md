# Nimbus Netherlands: project notes for Claude

Portfolio site for Ruben's FPV drone videography business (hotels, real estate, weddings; concerts "coming soon"). Based in Hilversum. Read this first; it replaces re-exploring the repo. The README has user-facing how-tos.

## Stack and commands
- Astro 7 (static output), plain CSS, vanilla TS in `src/scripts/main.ts`. No framework runtime, no backend.
- `npm run dev` (port 4321), `npm run build` (→ `dist/`, 13 pages), `npm run preview`.
- Node 22 (`.node-version`). Deps: astro, @astrojs/sitemap (sharp comes with astro).

## Hosting / deploy (live)
- GitHub `rubje/Nimbus` (branch `main`). The remote URL uses `https://rubje@github.com/...` so git uses Ruben's personal account, not the work account (RubenHyland, which gets a 403). `git push origin main` works from this machine.
- Cloudflare **Workers** project `nimbus` (not Pages), Workers Builds connected to the repo. Build `npm run build`, deploy `npx wrangler deploy`, config in `wrangler.jsonc` (assets `./dist`, 404-page, auto-trailing-slash). Push to main = deploy (~2 min).
- Live: https://nimbus.rubenvandv.workers.dev
- **Lock file must satisfy npm 10** (Cloudflare runs `npm ci` with npm 10.9). Local npm is 11, which omits optional `@emnapi/*` from the lock and breaks the CF build. After dependency changes, run `npx --yes npm@10.9.2 install --package-lock-only` and commit the lock.

## Domain status (as of 2026-10-12)
- `nimbusnetherlands.nl` bought at TransIP. Nameservers changed to `adele.ns.cloudflare.com` / `dane.ns.cloudflare.com` (TransIP confirmed). The zone was waiting to become **Active** in Cloudflare (new .nl domain, SIDN zone not yet published at last check).
- TODO once Active: on worker nimbus → Domains → Add Domain `nimbusnetherlands.nl` + `www.nimbusnetherlands.nl`; Redirect Rule www → root (301); verify https; optional Email Routing `info@` → Gmail (then update `email` in `src/config/site.ts`); Search Console sitemap.
- Check DNS from the shell with DoH, e.g. `curl -s "https://dns.google/resolve?name=nimbusnetherlands.nl&type=NS"` (Status 3 = NXDOMAIN, i.e. not yet published).
- TransIP registrant "Bedrijfsnaam" still says **Hyland**. The user should change it (Gegevens beheren).

## Where things live
- `src/config/site.ts`: brand, domain, email (`rubenvandv@gmail.com`), city, socials, `formspreeId` (still placeholder `YOUR_FORM_ID`), `cfAnalyticsToken`.
- `src/data/videos.ts`: YouTube videos (4, all `featured`, max 4 shown on home); categories hotels/realestate/landscapes/concerts.
- `src/data/services.ts`: hotels, realestate, weddings, events (`soon`) + process steps. `src/data/equipment.ts`: example gear.
- `src/i18n/nl.ts` / `en.ts`: all copy (NL default). `src/i18n/utils.ts`: translated slugs (`/werk/` ↔ `/en/work/`, `/diensten/`, `/over/`, `/contact/`, `/privacy/`).
- `src/views/*.astro`: one view per page shared by both languages; `src/pages/**` are thin wrappers. `src/layouts/Base.astro`: head, SEO, hreflang, JSON-LD.
- Components: Header (overlay on home, blur on `::before` so the fixed mobile menu isn't trapped), Logo, HeroVideo (renders `<video>` only if `public/video/hero.mp4` exists; poster = Madeira thumbnail), VideoCard (YouTube thumbs downloaded and optimised at build via `getImage`, click-to-load), VideoModal (`<dialog>`, youtube-nocookie, sized to viewport width AND height), WorkGrid (filter), ServiceCard (icon, 3 inclusions + link on home; full on services page), CTA, ContactForm (Formspree + honeypot), SEO, JsonLd.

## Design decisions
- Colours in `src/styles/global.css`: petrol `#0B3C49`, orange `#FF6A1A` (`--orange-text #FF7F3A` for small text, AA), off-white `#F4F1EC`, near-black `--black #030809`. Premium dark look: black sections, film grain (`body::after`), glows, card shadows.
- Fonts self-hosted: **Outfit** for headings/logo (Sora's "Y" looked bent at display sizes), **Sora** for body.
- Logo: traced to vectors from the user's JPG (`nimbus.jfif` in OneDrive Pictures). Paths are in `src/components/logo-paths.ts` (generated; parts: mark/word/props/trails/tagline). Files in `public/brand/`, favicon/app icons/manifest in `public/`, OG image `public/og/default.jpg` (Madeira + logo).
- Logo animation: propellers spin on hover; on **every page load** they flap twice (`logo--intro` class added in `main.ts`; the user wants it on reload too); disabled for reduced motion.
- Accessibility/perf baseline: Lighthouse mobile 98–100 on all categories. Keep heading order valid (ServiceCard has `headingLevel`).

## Working notes
- The user prefers concise answers; mixes Dutch and English.
- Visual checks: puppeteer-core + Edge (`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`) installed in the session scratchpad, not in the repo; reinstall there if needed. Lighthouse via `npx lighthouse` with `CHROME_PATH` set to Edge.
- Destructive shell commands (rm -rf on node_modules etc.) may be denied by policy; prefer non-destructive alternatives.

## Open items (user to supply)
Formspree ID, hero video (`public/video/hero.mp4`, H.264 1080p, 8–15 s, no audio, <5 MB), copy review, real equipment, RDW operator number, video year/location check, wedding videos, concert footage, optional phone/KvK/Instagram.
