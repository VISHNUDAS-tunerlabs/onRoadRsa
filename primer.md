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
  - Pill navigation buttons below the heading — clicking jumps to that card and resets autoplay
  - Active pill highlighted in amber; updates automatically as carousel advances
  - Dot indicators below carousel — active dot expands to a wide amber bar
  - Auto-advances every 5 seconds, pauses on hover, supports touch swipe on mobile
  - Loops infinitely (wraps back to first after last)
  - Card number badges removed
  - Heading changed to *Our Roadside Assistance / Services* (removed "in UAE")
- **Restored `battery-change.jpg`** — was deleted from `public/`; copied back from `dist/`
- **Created brand icon (`public/logo-icon.svg` and `public/favicon.svg`):**
  - Shield shape with amber border and dark fill
  - Amber perspective road trapezoid inside (wide at bottom, narrows to vanishing point)
  - Four decreasing centre-line dashes for depth effect
  - Replaces old "R" text placeholder favicon
- **Header (`src/components/Header.astro`):**
  - Replaced "OnCallRSA" text with logo icon only (`logo-icon.svg`)
  - Reduced header height from `h-16/h-20` to `h-12/h-14`
- **Footer (`src/components/Footer.astro`):**
  - Added logo icon to the left of "OnCallRSA" text in the brand section

## Pending Push
Latest commit `6e94aac` is ready locally but **not yet pushed** — network was blocking GitHub at end of session.
Run `git push origin master` on a working network to deploy.

## Immediate Next Steps
1. **Push pending commit** — `git push origin master` (switch to hotspot/VPN if UAE network blocks)
2. **Logo refinement** — review icon on live site; may want to adjust stroke width or proportions
3. **Active nav indicator** — highlight current section's nav link on scroll (IntersectionObserver per section)
4. **Sitemap + SEO** — add `@astrojs/sitemap`, canonical URLs
5. **Mobile QA** — test carousel swipe, pill nav, and card layout on real device
6. **Custom domain** — when `oncallrsa.ae` DNS is ready:
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
- UAE ISPs (Etisalat/du) intermittently block Fastly CDN (GitHub Pages). Use mobile hotspot or VPN to verify deployments and push to GitHub
- `guides/whatWedo.md` contains the canonical service copy — always derive service descriptions and highlights from this file
- `public/logo-icon.svg` is the master brand icon — used in both header and footer
