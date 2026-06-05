# Project State — onRoadRsa

## Current State
Fully built Astro v4 + Tailwind CSS v3 static site, live on GitHub Pages at:
**https://vishnudas-tunerlabs.github.io/onRoadRsa/**

GitHub Actions auto-deploys on every push to `master`. All images loading correctly.
Latest commit on `master`: `6e24fe5` — fully pushed and deploying.

## What Was Accomplished This Session
- **WhatsApp number corrected** in `src/components/Contact.astro`:
  - Changed from `9633076761` to `9718002477` (UAE country code `971` + toll-free `8002477`)
  - The number is stored as `WA_NUMBER` constant at the top of `Contact.astro` and passed to the client script via Astro `define:vars`

## Immediate Next Steps
1. **QA on live site** — verify WhatsApp form opens correct pre-filled message on mobile with updated number
2. **Active nav indicator** — highlight current section's nav link on scroll (IntersectionObserver)
3. **Sitemap + SEO** — add `@astrojs/sitemap`, canonical URLs
4. **Mobile QA** — test carousel swipe, pill nav, card layout on real device
5. **Custom domain** — when `oncallrsa.ae` DNS is ready:
   - Add `public/CNAME` file containing `oncallrsa.ae`
   - Update `astro.config.mjs`: `site: 'https://oncallrsa.ae'`, remove `base`
   - Revert all `${import.meta.env.BASE_URL}image.jpg` back to `/image.jpg`
   - Add DNS A records pointing to GitHub Pages IPs

## Open Blockers
- 3 npm audit vulnerabilities (2 moderate, 1 high) — non-critical for static site, review before launch

## Key Decisions & Notes
- `base: '/onRoadRsa/'` with trailing slash is critical — controls `BASE_URL` and all asset paths
- All public asset references use `import.meta.env.BASE_URL` prefix — must be reverted when switching to custom domain
- `dist/` excluded from git — GitHub Actions builds fresh on every deploy
- GitHub Pages source set to **GitHub Actions** (not branch deploy)
- UAE ISPs (Etisalat/du) intermittently block Fastly CDN (GitHub Pages). Use mobile hotspot or VPN to verify deployments and push to GitHub
- `guides/whatWedo.md` contains the canonical service copy — always derive service descriptions and highlights from this file
- `public/logo-icon.svg` is the master brand icon — used in both header and footer
- WhatsApp contact form uses Astro `define:vars` to pass `WA_NUMBER` from frontmatter to the client script — to change the number, update the `WA_NUMBER` constant at the top of `Contact.astro`
- WhatsApp number is `9718002477` — UAE country code `971` + toll-free number `8002477`
