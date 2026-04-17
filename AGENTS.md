<!-- GSD:project-start source:PROJECT.md -->
## Project

**Bostrich**

A satirical SaaS website at bostri.ch that uses corporate tech buzzwords to describe ordinary physical goods. The humor comes from the deadpan presentation of literal products—ladders, ramps, slides—through the lens of enterprise software marketing, with "features," "pricing tiers," and serious aesthetics applied to absurd subjects.

**Core Value:** Deliver absurd humor through the stark contrast between polished SaaS aesthetics and literal physical goods with buzzword descriptions.

### Constraints

- **Domain**: Must deploy to bostri.ch
- **V1 completion criteria**: Site is live and deployed at bostri.ch
- **Tech stack**: Static site generator (e.g., Next.js, Astro, Hugo)
- **Budget**: Not specified
- **Timeline**: Not specified
- **Static site**: No backend or database required — static HTML/CSS/JS
- **No external services**: Avoid dependencies on APIs, auth providers, payment processing
- **Brand name**: Bostrich
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core Technologies
| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Astro | v6.1.7 | Static site generator | Zero JavaScript by default, content-focused, excellent static site generation with modern architecture. Perfect for static sites with no backend requirements. Simple learning curve compared to Next.js. |
| Tailwind CSS | v4.2.0 | Utility-first CSS framework | CSS-native configuration with `@theme` directive, perfect for Stripe/Vercel aesthetic. Enables rapid development of clean, minimal designs with mobile-first responsive patterns built-in. Zero runtime overhead. |
| Node.js | v20 LTS | Runtime | Required by Astro and modern build tools. LTS version ensures stability and security updates through 2027. |
### Supporting Libraries
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @astrojs/tailwind | Latest | Astro integration for Tailwind CSS | Required for seamless Tailwind integration with Astro's build process |
| @astrojs/sitemap | Latest | Generate sitemap.xml | Recommended for SEO and search engine discovery |
| @astrojs/partytown | Latest | Third-party script management | Use if adding analytics (e.g., Google Analytics) to improve performance |
### Development Tools
| Tool | Purpose | Notes |
|------|---------|-------|
| Vite | Build tool | Built into Astro, provides fast hot module replacement and optimized production builds |
| TypeScript | Type safety | Optional but recommended for catching errors during development. Astro supports TS out of the box. |
| ESLint + Prettier | Code quality | Maintain consistent code style and catch common issues. Configure for Astro + TypeScript. |
## Installation
# Create new Astro project with Tailwind CSS
# Navigate to project
# Install Tailwind CSS v4 and Vite plugin
# Install Astro integrations
# For TypeScript support (recommended)
# Dev dependencies for code quality
## Alternatives Considered
| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Astro | Next.js v16.2.4 | Use Next.js if planning to add backend features, authentication, or server-side rendering later. Next.js is overkill for pure static sites. |
| Astro | Hugo | Use Hugo if content is primarily Markdown and you don't need interactive components. Hugo is faster for very large content sites (>10k pages) but has steeper learning curve. |
| Astro | Gatsby | Use Gatsby if building a Jamstack site with complex data fetching from multiple sources. Gatsby has better GraphQL integration but is heavier and more complex. |
| Vercel | Cloudflare Pages | Use Cloudflare Pages if you need the fastest possible edge performance (up to 115% faster than competitors) or want free tier with unlimited bandwidth. |
| Vercel | Netlify | Use Netlify if you prefer Netlify's UI or need specific Netlify features like edge functions with Go language. |
## What NOT to Use
| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Next.js with static export | Overkill for pure static site. More complex configuration, larger bundle size, slower build times. Use Astro instead. |
| Traditional CSS/SASS | Requires writing custom CSS for responsive design, harder to maintain consistent design system. Use Tailwind CSS for utility-first approach. |
| Create React App | No built-in routing or static export optimization. Requires additional configuration. Use Astro or Next.js instead. |
| Jekyll | Ruby-based, less active development in 2025, limited modern framework support. Use Astro for better TypeScript support and ecosystem. |
| WordPress CMS | Violates "static site only" constraint. Adds database, PHP backend, and security maintenance. Use Astro with hardcoded content. |
| Styled Components / Emotion | Adds runtime overhead for static site where styles can be pre-generated. Use Tailwind CSS for zero runtime cost. |
## Stack Patterns by Variant
- Use Astro with static output (`output: 'static'`)
- Because zero JavaScript by default, faster page loads, simpler deployment
- Use Next.js with App Router
- Because built-in server capabilities, seamless migration from static to dynamic
- Use Cloudflare Pages
- Because Swiss/EU data residency options, fast European edge network
- Use Astro + Cloudflare Pages
- Because Astro's zero-JS architecture combined with Cloudflare's edge network provides sub-100ms global response times
- Use Vercel
- Because best-in-class dashboard experience, preview deployments, integrated analytics
## Version Compatibility
| Package | Compatible With | Notes |
|-----------|-----------------|-------|
| astro@6.1.7 | tailwindcss@4.2.0 | Fully compatible. Use @astrojs/tailwind integration for seamless setup. |
| tailwindcss@4.2.0 | @tailwindcss/vite@latest | Required for Vite-based projects (Astro uses Vite internally). |
| Node.js@20 LTS | All packages | Required minimum for Astro 6.x. Node.js 18+ also supported but 20 LTS recommended for security. |
| astro@6.1.7 | TypeScript 5.x | Full support. Add `@astrojs/ts-plugin` for improved IDE integration. |
## Deployment Options for bostri.ch
| Platform | Free Tier | Custom Domain | Build Time | Global CDN | Recommendation |
|----------|-----------|---------------|--------------|-------------|----------------|
| Vercel | 100GB bandwidth/month, 100 deployments | Included (unlimited) | ~2 minutes | Yes, Edge Network | **Primary choice** - best DX, excellent documentation |
| Cloudflare Pages | Unlimited bandwidth, 500 builds/month | Included (100 domains) | ~1 minute | Yes, Global Edge | Best performance, great free tier |
| Netlify | 100GB bandwidth/month, 300 builds/month | Included (50 domains) | ~3 minutes | Yes, Edge Network | Good alternative if team prefers Netlify |
## Design System Recommendations (Stripe/Vercel Aesthetic)
- Font family: Inter or system-ui (built-in to Tailwind)
- Headings: `text-4xl` to `text-6xl`, font-bold, tight tracking (`-tracking-tight`)
- Body: `text-base` to `text-lg`, leading-relaxed
- Mobile-first: `text-base` on mobile, `text-lg` on desktop (`lg:text-lg`)
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Cards: `bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition`
- Whitespace: Generous padding `py-16 md:py-24`, sections separated by `space-y-24`
- `sm`: 640px (small phones)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large desktops)
## Sources
- **/vercel/next.js** — Static site generation capabilities, Next.js v16.2.4 features
- **/withastro/astro** — Astro v6.1.7 static output, zero JavaScript architecture
- **/withastro/docs** — Astro configuration, deployment guides
- **/tailwindlabs/tailwindcss.com** — Tailwind CSS v4 installation, responsive design patterns
- **https://vercel.com/docs/concepts/deployments/overview** — Vercel deployment methods, custom domain support
- **https://pages.cloudflare.com/** — Cloudflare Pages features, free tier details, edge performance
- **https://stripe.com/en-gb-us/** — SaaS design patterns, modern aesthetic reference
- **https://vercel.com/templates** — Framework support, template ecosystem
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
