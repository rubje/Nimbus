# Nimbus: FPV drone videography website

This is the static website for **Nimbus Netherlands**, built with [Astro](https://astro.build) and plain CSS. It has no backend and no tracking cookies, and it deploys to Cloudflare Pages.

- Dutch is the default language (`/`, `/werk/`, `/diensten/`, `/over/`, `/contact/`, `/privacy/`)
- English lives under `/en/` (`/en/work/`, `/en/services/`, `/en/about/`, `/en/contact/`, `/en/privacy/`)

## Quick start

Requirements: **Node.js 22.12 or newer** ([nodejs.org](https://nodejs.org)).

```bash
npm install      # once
npm run dev      # local preview at http://localhost:4321 (live reload)
npm run build    # production build into ./dist
npm run preview  # serve the production build locally
```

> The build downloads YouTube thumbnails and optimises them, so it needs an internet connection.

---

## Editing content

You never need to touch the components. Everything editable lives in these files:

| What | File |
|---|---|
| Brand name, domain, email, phone, KvK, city, socials, Formspree ID, analytics | `src/config/site.ts` |
| Portfolio videos | `src/data/videos.ts` |
| Services, what's included, "how it works" steps | `src/data/services.ts` |
| Equipment list (About page) | `src/data/equipment.ts` |
| All other text: headings, intro, bio, contact text, privacy page, SEO titles and descriptions | `src/i18n/nl.ts` (Dutch) and `src/i18n/en.ts` (English) |
| Colours, fonts, spacing | `src/styles/global.css` (variables at the top) |
| URL slugs per language | `src/i18n/utils.ts` (`routes`) |

**Changing the brand name:** change `brand` and `legalName` in `src/config/site.ts`. The page `<title>`s, logo text, footer and structured data all update. Also search the two `src/i18n/*.ts` files for "Nimbus", where it appears in a few sentences.

**Changing the domain:** change `url` in `src/config/site.ts` **and** `SITE` in `astro.config.mjs`, and update the sitemap line in `public/robots.txt`.

**Phone / KvK / operator number:** fill in `phone`, `kvk` or `operatorId` in `src/config/site.ts`. Empty fields are hidden everywhere.

## Adding a new video

1. Upload the video to YouTube (public or unlisted).
2. Copy the ID from the URL: `https://www.youtube.com/watch?v=`**`GsvJfQgOj-c`**
3. Add an entry to `src/data/videos.ts`:

```ts
{
  youtubeId: 'GsvJfQgOj-c',
  category: 'hotels',          // 'hotels' | 'realestate' | 'landscapes' | 'concerts'
  featured: true,              // also show on the home page (first 3 featured are used)
  start: 57,                   // optional: start at 57 seconds
  year: 2026,
  location: 'Amsterdam',
  title: { nl: 'Hotel X', en: 'Hotel X' },
  description: {
    nl: 'Eén zin over de vlucht.',
    en: 'One sentence about the flight.',
  },
},
```

4. Save. The order in the file is the order on the site.

The thumbnail is downloaded from YouTube at build time and served from your own domain as optimised WebP. To use your own thumbnail instead, put a 1280×720 JPG in `public/thumbs/` and add `thumbnail: '/thumbs/hotel-x.jpg'`.

**How embeds work:** no YouTube code loads until the visitor clicks play. The video then opens in a pop-up player using `youtube-nocookie.com` (privacy-enhanced mode). Without JavaScript, the card simply links to YouTube.

## Replacing the logo

Open `src/components/Logo.astro` and replace the `<svg>…</svg>` with your own SVG markup, or put `logo.svg` in `public/` and use `<img src="/logo.svg" alt="" width="120" height="32" />`. Delete the `logo__text` span if your logo already contains the name. Replace `public/favicon.svg` with your icon too.

## Hero video

Put your files in `public/video/`:

| File | Purpose |
|---|---|
| `hero.mp4` | **Required for video.** Without it only the poster is shown. |
| `hero.webm` | Optional, smaller VP9/AV1 version that browsers prefer if present |
| `hero-poster.jpg` | First frame / fallback image (shown instantly, and to reduced-motion users) |
| `hero-poster-960.webp`, `hero-poster-1920.webp` | Optional lighter poster versions (recommended) |

The current poster is a frame from the La Vie en Rose thumbnail, used as a placeholder.

**Recommended specs:**

- **Length:** 8–15 seconds, with a seamless loop (end frame ≈ start frame).
- **Resolution:** 1920×1080 (1280×720 is fine, because it sits under a dark gradient).
- **Codec:** H.264 (MP4), High profile, `yuv420p`, **no audio track**, `+faststart`.
- **Bitrate:** 2.5–4 Mbps.
- **Max file size:** **under 5 MB**, ideally around 3 MB.
- **Content:** calm, slow movement reads best behind text. Avoid fast freestyle in the hero.
- **Poster:** 1920×1080 JPG under 250 KB. WebP versions at 960 and 1920 px wide, about 60–70% quality.

With [ffmpeg](https://ffmpeg.org) installed:

```bash
# MP4 (H.264), 1080p, no audio
ffmpeg -i source.mov -t 12 -vf "scale=1920:-2,fps=30" -c:v libx264 -profile:v high -preset slow -crf 26 -maxrate 4M -bufsize 8M -pix_fmt yuv420p -an -movflags +faststart public/video/hero.mp4

# Optional WebM (VP9), usually 30-40% smaller
ffmpeg -i source.mov -t 12 -vf "scale=1920:-2,fps=30" -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 -an public/video/hero.webm

# Poster from the first frame
ffmpeg -i public/video/hero.mp4 -frames:v 1 -q:v 4 public/video/hero-poster.jpg
ffmpeg -i public/video/hero-poster.jpg -vf scale=1920:-2 -quality 65 public/video/hero-poster-1920.webp
ffmpeg -i public/video/hero-poster.jpg -vf scale=960:-2  -quality 65 public/video/hero-poster-960.webp
```

The video doesn't load at all for visitors with "reduce motion" turned on or with data-saver mode on. They see the poster.

## Open Graph image

`public/og/default.jpg` (1200×630) is shown when the site is shared on WhatsApp, LinkedIn and similar. Replace it with a strong still plus your logo, and keep it under about 300 KB.

## Contact form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io) and make a new form. Set the notification email to your address.
2. Copy the form ID (the part after `https://formspree.io/f/`).
3. Paste it into `formspreeId` in `src/config/site.ts`.
4. In Formspree, under **Settings → Restrict to domain**, add `nimbusnetherlands.nl`.

The form has a hidden spam trap (honeypot). Messages include the language the visitor used.

## Analytics (optional, cookieless)

The easiest option is the Cloudflare Pages dashboard: your project → **Metrics → Web Analytics → Enable**. That needs no code and no cookies.
Alternatively, create a site under **Cloudflare → Analytics & Logs → Web Analytics** and paste its token into `cfAnalyticsToken` in `src/config/site.ts`.

No cookie banner is needed for either option. If you ever add a tool that sets cookies, update the privacy page.

---

## Deploying

### 1. Push to GitHub

The project is already a git repository (branch `main`) with a first commit. Connect it to GitHub and push:

```bash
cd C:\Users\rvandervelde\Projects\Nimbus
git remote add origin https://github.com/rubje/Nimbus.git
git push -u origin main
```

If GitHub rejects the push because the repo already has commits (e.g. a README made on github.com):

```bash
git pull origin main --allow-unrelated-histories   # merge, resolve conflicts if any
git push -u origin main
```

After that, deploying a change is:

```bash
git add -A
git commit -m "Add new hotel video"
git push
```

Cloudflare rebuilds the site automatically within about a minute.

### 2. Connect Cloudflare Pages

1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com) (a free account is enough).
2. **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorise GitHub and select the **rubje/Nimbus** repository.
4. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22`
5. **Save and Deploy**. Your site is live at `https://<project>.pages.dev`.

`public/_headers` already sets caching and security headers for Cloudflare.

### 3. Connect nimbusnetherlands.nl

**Option A (recommended): move DNS to Cloudflare.** This gives the apex domain (no www) plus free SSL with the least hassle.

1. In Cloudflare: **Add a domain** → `nimbusnetherlands.nl` → Free plan.
2. Cloudflare shows two nameservers (e.g. `xxx.ns.cloudflare.com`).
3. At your registrar (TransIP, Hostnet, Strato, Versio…), replace the nameservers with Cloudflare's. This can take from a few minutes up to 24 hours.
   - If you use email on this domain, check that your MX records were copied to Cloudflare DNS.
4. In your Pages project: **Custom domains → Set up a custom domain** → `nimbusnetherlands.nl`, then add `www.nimbusnetherlands.nl` as well.
5. Redirect www to the main domain: **Rules → Redirect Rules → Create rule**, using the "Redirect from WWW to root" template (301).

**Option B: keep DNS at your registrar.** This works for `www` only. Most Dutch registrars can't CNAME the apex domain.

1. In Pages: **Custom domains** → add `www.nimbusnetherlands.nl`.
2. At your registrar, add a **CNAME** record: `www` → `<project>.pages.dev`.
3. Use the registrar's forwarding/redirect to send `nimbusnetherlands.nl` → `https://www.nimbusnetherlands.nl`.
4. Change `url` in `site.ts` and `SITE` in `astro.config.mjs` to the www address.

After the domain works:

- Submit `https://nimbusnetherlands.nl/sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console).
- Optionally create a Google Business Profile for Hilversum.

---

## Project structure

```
src/
  config/site.ts       ← business details and settings
  data/                ← videos, services, equipment
  i18n/                ← nl.ts, en.ts (all copy) + utils.ts (routes/slugs)
  components/          ← Header, Footer, Logo, HeroVideo, VideoCard, VideoModal, WorkGrid, …
  views/               ← one view per page, shared by both languages
  pages/               ← Dutch pages; pages/en/ English pages (thin wrappers)
  layouts/Base.astro   ← <head>, SEO, hreflang, JSON-LD
  scripts/main.ts      ← menu, video player, filter, form, scroll animations
  styles/global.css    ← design tokens and base styles
public/
  fonts/               ← self-hosted Sora (OFL licence)
  video/               ← hero video + poster
  og/                  ← social share image
  robots.txt, _headers, favicon.svg
```

**What's built in:**

- **SEO:** per-page title and description, Open Graph and Twitter cards, canonical URLs, `hreflang` (nl / en / x-default), a sitemap with language alternates, robots.txt, `ProfessionalService` JSON-LD (Hilversum, serving all of NL), and `VideoObject` JSON-LD on the Work page.
- **Accessibility:** skip link, keyboard-friendly menu, filter and video dialog (Esc closes it), visible focus rings, AA colour contrast, and reduced-motion support.
- **Lighthouse (local, production build):** Performance 95–100 and Accessibility, Best Practices and SEO 100, on both mobile and desktop.

---

## Still to supply (checklist)

- [ ] **Logo:** SVG for `src/components/Logo.astro`, plus a favicon (`public/favicon.svg`)
- [ ] **Hero video:** `public/video/hero.mp4` (+ poster), see the specs above
- [ ] **OG image:** `public/og/default.jpg` with your own still and logo
- [ ] **Formspree form ID** in `src/config/site.ts` (the form won't send until this is set)
- [ ] **Domain:** connect `nimbusnetherlands.nl` to Cloudflare Pages
- [ ] **Copy review:** check the bio, services, prices/inclusions and delivery times in `src/i18n/*.ts` and `src/data/services.ts`
- [ ] **Equipment:** replace the example gear in `src/data/equipment.ts` with your actual setup
- [ ] **Operator registration:** RDW operator number (optional) in `operatorId`, and check the certification sentence on the About page matches your certificates (A1/A3, A2)
- [ ] **Video details:** correct year/location/descriptions in `src/data/videos.ts`. Check whether the Oostmolen video belongs under Real estate.
- [ ] **Business email:** consider `info@nimbusnetherlands.nl` instead of Gmail once the domain is live
- [ ] **Concert footage:** add it when available (category `concerts`)
- [ ] Optional: phone number, KvK number, Instagram link
