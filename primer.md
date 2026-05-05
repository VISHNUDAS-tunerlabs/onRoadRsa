# Project State — onRoadRsa

## Current State
Fully scaffolded and running Astro v4 + Tailwind CSS v3 static site. Dev server runs at `http://localhost:4321`. Production build verified clean. All 7 sections built and styled.

## What Was Accomplished This Session
- Scaffolded complete project from scratch: `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
- Built 8 components: Header, Hero, About, Services, WhyUs, Contact, Footer, MobileCallButton
- **Header:** Sticky glassmorphism on scroll (`blur(28px) saturate(160%)`, `bg opacity 0.55`), centered desktop nav with animated underlines, hamburger mobile menu. Call button removed from both desktop and mobile header. Border on scroll removed.
- **Hero:** Full-viewport, real hero image (`/car-breakdown-main.jpeg`) at `opacity-90` with gradient overlay (`from-[#0B0B0B]/75 via-[#0B0B0B]/35 to-transparent`). H1 reads "On Call / Roadside Assistance". Green glowing badge (`bg-green-400/10`, `border-green-400/40`, `shadow` glow). Green icons on trust signals. Staggered fade-up animations.
- **About:** Two-column layout. 4 stats cards redesigned — amber (`bg-amber-400`) background, no border, black icons (SVG, matching WhyUs style) and black text. Label text `font-semibold text-black/80`. Quote card below grid.
- **Services:** Horizontal CSS marquee (pause on hover). Cards completely redesigned — `w-80 h-96`, real service images as full-bleed backgrounds, dark gradient overlay, amber icon badge, image zoom on hover, lift + shadow effect. Images mapped: battery-change.jpg, flat-tyre.jpg, fuel-fill.jpg, oil-change.jpg, scan.jpg, ac-gas-filling.jpg, towing.jpg.
- **WhyUs:** 5-card grid, SVG icons in amber containers, stagger scroll reveal.
- **Contact:** Split layout — info left, amber CTA card right, green "online" status dot.
- **Footer:** 3-column layout, unified `bg-[#0B0B0B]`.
- **MobileCallButton:** Component exists but removed from `index.astro` (not rendered).
- **Fonts:** Poppins (headings `h1–h4` via global CSS) + Nunito (body text via `font-sans`). Both loaded from Google Fonts.
- **Background:** Unified to `#0B0B0B` across all sections.

## Immediate Next Steps
1. **Logo asset** — replace text logo "OnCallRSA" in Header + Footer with actual SVG/PNG file
2. **Active nav indicator** — highlight current section's nav link on scroll (IntersectionObserver per section)
3. **GitHub Pages deployment** — add `base` to `astro.config.mjs`, create `.github/workflows/deploy.yml`
4. **Sitemap + SEO** — add `@astrojs/sitemap`, canonical URLs, update `site` in config to final domain
5. **Mobile QA** — test service card swipe, hero on small screens, overall layout on real device
6. **Hero image positioning** — verify `object-center` is the right focal point for the hero image on all viewports

## Open Blockers
- No contact form yet (intentional — static-first phase). Future: Formspree or Netlify Forms
- 3 npm audit vulnerabilities (2 moderate, 1 high) — non-critical for static site, review before launch
- Phone number `800 2477` hardcoded everywhere — confirm this is final before launch

## Key Decisions This Session
- Call button removed from header entirely (both desktop + mobile) — user preference
- Sticky mobile call button (`MobileCallButton.astro`) removed from render — component kept in case needed later
- Services redesigned to image-card style (full-bleed photo + overlay) replacing plain icon cards
- About stats cards use solid amber background (not dark card) to visually stand out from rest of page
- Font split: Poppins for headings, Nunito for body — applied via global CSS rule on `h1–h4`
- All section backgrounds unified to `#0B0B0B` — no more alternating navy sections
