# Project State — onRoadRsa

## Current State
Fully built Astro v4 + Tailwind CSS v3 static site, live on GitHub Pages at:
**https://vishnudas-tunerlabs.github.io/onRoadRsa/**

GitHub Actions auto-deploys on every push to `master`. All images loading correctly.

## What Was Accomplished This Session
- **GitHub Pages deployment configured end-to-end:**
  - Created `.github/workflows/deploy.yml` — builds with Node 20, `npm ci` + `npm run build`, uploads `dist/` via `actions/upload-pages-artifact@v3`, deploys via `actions/deploy-pages@v4`
  - Updated `astro.config.mjs`: `site` set to `https://vishnudas-tunerlabs.github.io`, `base` set to `/onRoadRsa/` (trailing slash required)
  - Updated `.gitignore` to exclude `dist/`, `.astro/`, `.DS_Store`
- **Fixed broken images on GitHub Pages:**
  - Root cause: absolute paths like `/battery-change.jpg` don't include the base path
  - Fix: replaced all `/image.jpg` references with `${import.meta.env.BASE_URL}image.jpg` in `Hero.astro`, `Services.astro`, and `Layout.astro` (favicon)
  - Secondary fix: `base` needed a trailing slash — without it, `BASE_URL` = `/onRoadRsa` (no slash) causing paths like `/onRoadRsaimage.jpg`. With trailing slash, `BASE_URL` = `/onRoadRsa/` → correct paths.

## Immediate Next Steps
1. **Logo asset** — replace text logo "OnCallRSA" in Header + Footer with actual SVG/PNG file
2. **Active nav indicator** — highlight current section's nav link on scroll (IntersectionObserver per section)
3. **Sitemap + SEO** — add `@astrojs/sitemap`, canonical URLs
4. **Mobile QA** — test on real device: service card marquee, hero image, overall layout
5. **Custom domain** — when `oncallrsa.ae` DNS is ready:
   - Add `public/CNAME` file containing `oncallrsa.ae`
   - Update `astro.config.mjs`: `site: 'https://oncallrsa.ae'`, remove `base`
   - Revert all `${import.meta.env.BASE_URL}image.jpg` back to `/image.jpg`
   - Add DNS A records pointing to GitHub Pages IPs

## Open Blockers
- No contact form yet (intentional — static-first phase). Future: Formspree or Netlify Forms
- Phone number `800 2477` hardcoded everywhere — confirm this is final before launch
- 3 npm audit vulnerabilities (2 moderate, 1 high) — non-critical for static site, review before launch

## Key Decisions This Session
- GitHub Pages source set to **GitHub Actions** (not branch deploy) — required for the workflow to serve output
- `base: '/onRoadRsa/'` with trailing slash is critical — controls `BASE_URL` and all asset paths
- All public asset references use `import.meta.env.BASE_URL` prefix — must be reverted when switching to custom domain
- `dist/` excluded from git — GitHub Actions builds it fresh on every deploy from source
