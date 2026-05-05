# Project: onRoadRsa

## What This Project Is

onRoadRsa is a modern, high-performance static website built using Astro and Tailwind CSS. The primary goal is to create a fast, responsive, and SEO-friendly web presence.

The site will initially be deployed on GitHub Pages as a fully static site. It will serve as a product/landing platform showcasing services related to roadside assistance (RSA).

The architecture is intentionally designed to be static-first, with the flexibility to introduce backend capabilities in the future (e.g., email handling, APIs, or integrations via serverless platforms like Vercel or Netlify).

Target users:
- End customers looking for roadside assistance services
- Potential partners or stakeholders

Key characteristics:
- Fast load times (minimal JavaScript)
- Mobile-first responsive design
- Clean UI with modern animations
- SEO optimized

---

## Code Conventions

General:
- Use 2 spaces for indentation (no tabs)
- Use single quotes (' ') for JavaScript/TypeScript
- Use consistent semicolon usage (prefer semicolons)

Naming:
- Components: PascalCase (e.g., `HeroSection.astro`)
- Files: kebab-case for routes/pages (e.g., `contact-us.astro`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE

Styling:
- Tailwind CSS only (avoid custom CSS unless necessary)
- Prefer utility-first approach
- Extract reusable patterns into components instead of repeating classes

Astro:
- Keep components small and focused
- Use `.astro` for layout and static components
- Use framework components (React, etc.) only when necessary

---

## Architecture Rules

Core Stack:
- Astro (static site generation)
- Tailwind CSS (styling)

Project Structure:
- `/src/pages` → Route-based pages
- `/src/components` → Reusable UI components
- `/src/layouts` → Shared layouts
- `/public` → Static assets

Rendering Strategy:
- Default to static rendering
- Use client-side hydration only when required (`client:*` directives in Astro)

Performance:
- Avoid unnecessary JavaScript
- Prefer static HTML wherever possible
- Lazy load heavy components

Animations:
- Use Tailwind for basic animations
- Use lightweight libraries (e.g., GSAP) only when needed
- Avoid heavy animation frameworks globally

Future Backend Strategy:
- No backend in initial phase
- For forms/email: use third-party services (e.g., APIs)
- Future migration path: Vercel/Netlify serverless functions

---

## Never Do

- Do NOT introduce a full backend in the initial phase
- Do NOT add heavy JavaScript frameworks globally
- Do NOT compromise performance for visual effects
- Do NOT duplicate components or styling unnecessarily
- Do NOT bypass Astro’s static-first philosophy
- Do NOT hardcode environment-specific values
- Do NOT introduce large dependencies without clear justification

---

## SESSION MANAGEMENT (CRITICAL)

At the end of EVERY session, you must rewrite primer.md completely.

Include:
1. Current state of the project
2. What was accomplished this session
3. Immediate next steps (specific, actionable)
4. Any open blockers or unresolved issues
5. Any important decisions made this session