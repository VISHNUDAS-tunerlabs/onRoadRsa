# Project State — onRoadRsa

## Current State
Fully built Astro v4 + Tailwind CSS v3 static site, live on GitHub Pages at:
**https://vishnudas-tunerlabs.github.io/onRoadRsa/**

GitHub Actions auto-deploys on every push to `master`. All images loading correctly.

## What Was Accomplished This Session
- **Redesigned "What We Do" section (`src/components/Services.astro`) completely:**
  - Replaced horizontal marquee with a full-screen horizontal infinity carousel
  - Each card is `min-h-[88vh]` — fills the viewport
  - Left side: service image in its own `rounded-2xl` curved card (with padding inside outer card)
  - Right side: amber icon, title, full description (from `guides/whatWedo.md`), bullet highlights, CTA button
  - Pill navigation buttons below the heading — clicking a pill smooth-scrolls/jumps to that card
  - Active pill highlighted in amber; updates automatically as carousel advances
  - Dot indicators below carousel — active dot expands to a wide amber bar
  - Auto-advances every 5 seconds, pauses on hover, supports touch swipe on mobile
  - Loops infinitely (wraps back to first after last)
- **Content enriched** — all service descriptions and highlights pulled from `guides/whatWedo.md`
- **Heading updated** — removed "in UAE" → now reads *Our Roadside Assistance / Services*
- **Removed card number badges** (01, 02... overlays on images)
- **Restored `battery-change.jpg`** — was accidentally deleted from `public/`; copied back from `dist/`

## Immediate Next Steps
1. **Logo asset** — replace text logo "OnCallRSA" in Header + Footer with actual SVG/PNG file
2. **Active nav indicator** — highlight current section's nav link on scroll (IntersectionObserver per section)
3. **Sitemap + SEO** — add `@astrojs/sitemap`, canonical URLs
4. **Mobile QA** — test carousel swipe, pill nav, and card layout on real device
5. **Custom domain** — when `oncallrsa.ae` DNS is ready:
   - Add `public/CNAME` file containing `oncallrsa.ae`
   - Update `astro.config.mjs`: `site: 'https://oncallrsa.ae'`, remove `base`
   - Revert all `${import.meta.env.BASE_URL}image.jpg` back to `/image.jpg`
   - Add DNS A records pointing to GitHub Pages IPs

## Open Blockers
- No contact form yet (intentional — static-first phase). Future: Formspree or Netlify Forms
- Phone number `800 2477` hardcoded everywhere — confirm this is final before launch
- 3 npm audit vulnerabilities (2 moderate, 1 high) — non-critical for static site, review before launch

## Key Decisions & Notes
- `base: '/onRoadRsa/'` with trailing slash is critical — controls `BASE_URL` and all asset paths
- All public asset references use `import.meta.env.BASE_URL` prefix — must be reverted when switching to custom domain
- `dist/` excluded from git — GitHub Actions builds fresh on every deploy
- GitHub Pages source set to **GitHub Actions** (not branch deploy)
- UAE ISPs (Etisalat/du) intermittently block Fastly CDN (GitHub Pages). Use mobile hotspot or VPN to verify deployments if the site appears unreachable on office/home network
- `guides/whatWedo.md` contains the canonical service copy — always derive service descriptions and highlights from this file
