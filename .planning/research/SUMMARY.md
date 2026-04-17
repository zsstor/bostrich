# Project Research Summary

**Project:** Bostrich
**Domain:** Satirical SaaS Website (Static)
**Researched:** 2025-04-17
**Confidence:** HIGH

## Executive Summary

Bostrich is a satirical SaaS website that delivers absurd humor through the contrast between polished enterprise software aesthetics and literal physical goods—ladders, ramps, slides—described with corporate buzzwords. Research indicates this type of static parody site is best built using Astro v6.1.7 for static site generation, Tailwind CSS v4.2.0 for the Stripe/Vercel aesthetic, and deployment to Vercel or Cloudflare Pages. The recommended approach prioritizes a clean, component-based architecture with hardcoded product data (no CMS), mobile-first responsive design, and strict adherence to modern web performance standards (Core Web Vitals).

Key risks center on performance (image optimization, layout shifts), accessibility (semantic HTML, color contrast), and design consistency. Mitigation strategies include using CSS custom properties for design tokens, implementing proper image dimensions and optimization, following semantic HTML patterns from the start, and establishing accessibility standards during the initial design system phase. The research is HIGH confidence across all domains, backed by official documentation from web.dev, Astro, Vercel, and WCAG standards.

## Key Findings

### Recommended Stack

Based on modern SaaS site analysis (Stripe, Vercel, Linear, Notion) and static site best practices, the recommended stack prioritizes simplicity, performance, and the clean aesthetic required for effective parody.

**Core technologies:**
- **Astro v6.1.7** — Static site generator — Zero JavaScript by default, excellent for static sites, simpler than Next.js
- **Tailwind CSS v4.2.0** — Utility-first CSS framework — CSS-native configuration, perfect for Stripe/Vercel aesthetic, zero runtime overhead
- **Node.js v20 LTS** — Runtime — Required by Astro, LTS ensures stability through 2027
- **Vercel** (primary) or **Cloudflare Pages** (alternative) — Deployment — Best-in-class developer experience and free tier for static sites

**What to avoid:** Next.js (overkill for static sites), traditional CSS/SASS (harder to maintain), WordPress CMS (violates static constraint), Styled Components (adds runtime overhead).

### Expected Features

Modern SaaS sites share a consistent set of table stakes features that users expect to be present. Missing these makes the site feel incomplete and breaks the parody effect (the humor only works if the site looks legitimate).

**Must have (table stakes):**
- **Hero section with clear value proposition** — First impression, establishes SaaS credibility
- **Persistent navigation header** — Consistent routing across pages
- **Responsive design** — Mobile and desktop layouts must work
- **Product/service showcase section** — Users need to understand offerings
- **Social proof section** — Trust signals (testimonials, logos, stats)
- **About/Mission section** — Critical for Bostrich's satire (buzzword mission statement)
- **Pricing page** — Tiered subscriptions enhance absurdity
- **Contact page** — Enterprise inquiry form completes SaaS structure
- **Consistent visual hierarchy** — Professional appearance requires thoughtful typography and spacing
- **Fast page load** — Users abandon slow sites; Core Web Vitals matter
- **Professional imagery** — High-quality photos of ladders/ramps/slides
- **Internal linking/routing** — Broken links feel unfinished

**Should have (competitive):**
- **Bento-grid layouts** — Modern, visually organized presentation
- **Micro-interactions** — Adds polish, feels premium
- **Customer stories with quotes** — More compelling than logos
- **Feature comparison tables** — Deepens absurdity with detailed comparisons

**Defer (v2+):**
- **Interactive product tours** — Animated walkthroughs (high complexity)
- **Dark mode toggle** — Nice-to-have but not essential for satire
- **Blog/News section** — Satirical articles about verticality
- **Search functionality** — Only needed if catalog expands significantly

### Architecture Approach

The recommended architecture follows modern component-based patterns used by top SaaS sites: file-based routing with static generation, mobile-first responsive design, and separation of concerns between pages, shared components, layouts, and static data.

**Major components:**
1. **Page Components** (`src/pages/`) — Route definitions with unique layouts, file-based routing
2. **Shared Components** (`src/components/`) — Reusable UI elements (Button, Card, Navigation, Footer)
3. **Layouts** (`src/layouts/`) — Shared page structure (header, footer, navigation) wrapped with slots
4. **Product Data** (`src/lib/data.ts`) — Static product definitions with buzzword descriptions (no database)
5. **Navigation & Routing** — Internal routing with active page highlighting, mobile menu toggle

**Key patterns:**
- **File-based routing with static generation** — Maps directory structure to URLs, `getStaticPaths()` for dynamic product pages
- **Component composition with props** — Build complex UIs from smaller, reusable components
- **Mobile-first responsive design** — Design for mobile first, enhance with Tailwind breakpoints
- **Layout inheritance** — Nested layouts provide shared structure across multiple pages

**Recommended build order:** 1) Foundation (project structure, Tailwind, base layout), 2) Shared Components (UI primitives, navigation), 3) Page Components (all 7+ pages), 4) Refinement (responsive adjustments, image optimization, accessibility).

### Critical Pitfalls

Research identified performance, accessibility, and consistency pitfalls that are common in static site development. Addressing these early prevents rewrites and major issues.

1. **Missing Image Dimensions Causing Layout Shifts** — Always include `width` and `height` attributes to prevent Cumulative Layout Shift (CLS), which harms Core Web Vitals and user experience. Use `max-width: 100%` for responsiveness.

2. **Lazy Loading Largest Contentful Paint Images** — Never lazy load hero images or LCP elements; add `fetchpriority="high"` to LCP candidates. Lazy loading delays above-fold images, harming LCP metric.

3. **Missing Viewport Meta Tag** — Always include `<meta name="viewport" content="width=device-width, initial-scale=1">` in `<head>`. Without it, mobile browsers render at desktop width, making text microscopic.

4. **Font Loading Causing Layout Shifts** — Use `font-display: swap` with matching fallback fonts, preload critical fonts, and consider system fonts to eliminate web font loading delays.

5. **Poor Accessibility from Missing Semantic HTML** — Use semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) instead of generic `<div>`. Screen readers can't navigate non-semantic structures efficiently.

6. **DNS Configuration Blocking Site Launch** — Follow Vercel's domain wizard exactly, use CNAME records for subdomains, test propagation with `dig` and `curl -I`, and allow 48 hours for DNS changes.

**Moderate pitfalls:** Inconsistent design without CSS custom properties, fixed pixel layouts breaking responsive design, poor color contrast failing accessibility, missing alt text on images, unoptimized images bloating page size, keyboard navigation not working.

**Minor pitfalls:** Duplicate CSS across pages, heading hierarchy issues, external fonts slowing first paint, missing page title and meta description.

## Implications for Roadmap

Based on combined research across stack, features, architecture, and pitfalls, the recommended phase structure prioritizes foundation first, then shared components, then page implementation, and finally refinement. This ordering prevents rework, ensures consistency, and avoids critical pitfalls.

### Phase 1: Foundation & Design System
**Rationale:** Architecture research establishes that foundation must come before components—design tokens, base layout, and project structure enable consistent development. Pitfalls research emphasizes that addressing semantic HTML, viewport meta tag, and CSS custom properties early prevents rework and accessibility issues.

**Delivers:** Astro project setup, Tailwind CSS configuration, base layout with global styles, CSS custom properties (design tokens), semantic HTML structure, product data definitions (src/lib/data.ts), navigation structure.

**Addresses:** Project structure, responsive design system, typography hierarchy, color palette, product data structure.

**Avoids:** Missing viewport meta tag, poor accessibility from non-semantic HTML, inconsistent design without CSS variables, fixed pixel layouts breaking mobile.

### Phase 2: Shared Components
**Rationale:** Component composition pattern requires reusable UI primitives before building pages. Shared components are dependencies for all pages; building them first ensures DRY code and consistent design. Navigation and footer components enable internal routing.

**Delivers:** UI primitives (Button, Card, Badge), layout components (Header, Footer, Navigation), Product Card component, CTA component, mobile navigation menu (hamburger).

**Uses:** Astro component architecture, Tailwind CSS utility classes, design tokens from Phase 1, product data structure.

**Implements:** Component composition with props pattern, mobile navigation responsive pattern, layout inheritance pattern.

**Avoids:** Hardcoding navigation links in every page (anti-pattern), duplicate CSS across pages.

### Phase 3: Core Pages (Home, Products, About, Pricing, Contact)
**Rationale:** After shared components exist, all pages can be built. Feature research identifies these as table stakes—essential for launch. Architecture recommends building pages in any order after components are ready.

**Delivers:** Home page (hero, featured products), Products catalog page (product grid), About page (mission statement), Pricing page (tiered subscriptions), Contact page (enterprise form), responsive layouts for all pages, page titles and meta descriptions, semantic HTML structure per page.

**Addresses:** Hero section with value proposition, product showcase, social proof section, about/mission, pricing tiers, contact form, responsive design, internal routing.

**Avoids:** Missing page titles and meta descriptions, poor accessibility in content structure.

### Phase 4: Individual Product Pages (7 Products)
**Rationale:** Feature research establishes individual product pages as MVP requirement (critical for parody effect). Architecture recommends using dynamic routes [slug].astro with getStaticPaths() for static generation. This phase can only start after shared components are ready.

**Delivers:** Individual product pages for ladder, agile ladder, ramp, slide, thin slide, cliff, scaffolding (7 total), SaaS-style product page layout (hero, features, pricing tiers, imagery), dynamic routing with getStaticPaths(), product imagery display, product-specific buzzword descriptions.

**Uses:** File-based routing with static generation pattern, Product Card component, Product Hero component, product data from src/lib/data.ts, design tokens.

**Addresses:** Product-specific landing pages, feature comparison tables, product imagery, individual product value propositions.

**Avoids:** Hardcoding page URLs (anti-pattern), missing image dimensions, lazy loading LCP images.

### Phase 5: Refinement & Polish
**Rationale:** Architecture research places refinement last to avoid rework. This phase addresses differentiators (micro-interactions, social proof section) and optimizations (image optimization, accessibility improvements).

**Delivers:** Micro-interactions and animations (hover effects, scroll animations), social proof section (testimonials, logos), image optimization (WebP format, responsive srcset), accessibility improvements (alt text, color contrast verification, keyboard navigation testing), Lighthouse performance optimization, responsive design adjustments, dark mode toggle (optional).

**Addresses:** Micro-interactions, social proof, product imagery optimization, accessibility compliance, Core Web Vitals (LCP, CLS).

**Avoids:** Unoptimized images bloating page size, poor color contrast, missing alt text, font loading causing layout shifts.

### Phase 6: Deployment & Launch
**Rationale:** Deployment comes last after all content is built and optimized. Pitfalls research emphasizes DNS configuration as critical launch blocker.

**Delivers:** Vercel/Cloudflare Pages deployment, custom domain configuration (bostri.ch), DNS record setup, SSL certificate verification, sitemap.xml generation, robots.txt configuration, live deployment verification, Lighthouse audit on production.

**Uses:** Astro static export configuration, Vercel/Cloudflare deployment platforms.

**Addresses:** Live deployment at bostri.ch, custom domain setup, search engine optimization.

**Avoids:** DNS configuration blocking launch, deployment errors, missing sitemap/robots.txt.

### Phase Ordering Rationale

- **Foundation first:** Design tokens, semantic HTML, and project structure are prerequisites for all subsequent work. Architecture research identifies component dependencies; pitfalls research shows fixing foundation issues later requires rework.
- **Shared components before pages:** Component composition pattern requires UI primitives to build pages. Navigation, footer, and card components are used across multiple pages. This follows DRY principles and avoids duplicate code.
- **Core pages before individual product pages:** Core pages (Home, About, Pricing) use the same shared components as product pages. Building core pages first validates the component system before investing in 7 individual product pages.
- **Individual product pages as single phase:** These share identical structure and components; grouping them together allows efficient implementation using dynamic routing patterns.
- **Refinement last:** Micro-interactions, animations, and optimizations can be added after core functionality works. This prevents wasting polish on features that might change or be removed.
- **Deployment as final phase:** Cannot deploy until all pages and content are complete. DNS configuration and live deployment require finished site.

**This ordering aligns with:**
- Architecture build order (Foundation → Shared Components → Page Components → Refinement)
- Feature dependencies (Navigation structure requires pages, hero requires design system)
- Pitfall prevention (Semantic HTML and design tokens established early, DNS addressed at launch)

### Research Flags

Phases likely needing deeper research during planning:

- **Phase 4 (Individual Product Pages):** Dynamic routing with getStaticPaths() is straightforward, but research flagged that proper image optimization and responsive srcset generation for 7 product images requires careful implementation. Consider `/gsd-research-phase` if unfamiliar with Astro's Image component.

- **Phase 5 (Refinement & Polish):** Micro-interactions and animations can significantly impact Core Web Vitals if implemented poorly. Research flagged that script-heavy animations may harm LCP/CLS. Consider `/gsd-research-phase` if adding complex animations.

Phases with standard patterns (skip research-phase):

- **Phase 1 (Foundation & Design System):** Well-documented patterns for Astro setup, Tailwind configuration, and CSS custom properties. Official docs cover this thoroughly.

- **Phase 2 (Shared Components):** Component composition is standard Astro/React pattern. No novel challenges expected.

- **Phase 3 (Core Pages):** Building static pages with components is fundamental static site work. No research needed.

- **Phase 6 (Deployment & Launch):** Vercel/Cloudflare deployment is extensively documented. DNS configuration has clear guidelines.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Astro, Tailwind, and Vercel choices backed by official documentation and modern SaaS site analysis |
| Features | HIGH | Table stakes based on direct observation of Stripe, Vercel, Linear, Notion. MVP requirements clear from PROJECT.md |
| Architecture | HIGH | Component-based architecture and file-based routing patterns from Astro docs. Build order validated by dependency analysis |
| Pitfalls | HIGH | All critical pitfalls backed by web.dev official documentation, WCAG standards, and Vercel DNS guides |
| Performance | HIGH | Core Web Vitals guidance from web.dev official docs. Image optimization strategies well-documented |
| Accessibility | HIGH | Semantic HTML, ARIA, and WCAG standards from web.dev Learn Accessibility course |

**Overall confidence:** HIGH

All research areas are based on official documentation (web.dev, Astro, Vercel) or direct observation of industry-leading SaaS sites. No single-source inferences; multiple sources confirm findings. The stack is well-established, feature requirements are derived from existing SaaS patterns, architecture follows modern best practices, and pitfalls are documented in official standards.

### Gaps to Address

No major gaps identified. Research is comprehensive across stack, features, architecture, and pitfalls. However, minor areas that may need attention during implementation:

- **Image sourcing:** Research doesn't address where to obtain high-quality product photos (ladders, ramps, slides). This will be resolved during Phase 4 (Individual Product Pages) planning.

- **Buzzword content quality:** Research assumes satirical copywriting skills for product descriptions. This is creative work that happens during implementation, not a technical gap.

- **Cross-browser testing:** Research focused on Chromium/Chrome. Safari and Firefox may have subtle rendering differences. Address with cross-browser testing during Phase 5 (Refinement).

These gaps are minor and do not require research-phase work; they can be handled during implementation with standard web development practices.

## Sources

### Primary (HIGH confidence)
- **web.dev Core Web Vitals** — LCP, CLS, INP metrics
- **web.dev Optimize LCP** — Detailed LCP optimization guide
- **web.dev Optimize CLS** — Layout shift prevention
- **web.dev Font best practices** — Font loading and delivery
- **web.dev Responsive web design basics** — Responsive patterns
- **web.dev Learn Accessibility** — Accessibility fundamentals
- **web.dev Learn HTML - Semantic HTML** — Semantic structure
- **web.dev Learn HTML - Metadata** — Page metadata
- **web.dev Learn HTML - Headings and sections** — Heading hierarchy
- **web.dev Style focus** — Focus indicators
- **web.dev Accessible tap targets** — Touch target sizing
- **web.dev Content reordering** — Content structure
- **Vercel Domains Overview** — DNS fundamentals
- **Vercel Working with DNS** — DNS configuration
- **Lighthouse Performance Scoring** — How Lighthouse calculates scores
- **WCAG 2.1 Contrast Requirements** — W3C accessibility standard
- **/withastro/astro** — Astro v6.1.7 static output, zero JavaScript architecture
- **/withastro/docs** — Astro configuration, deployment guides
- **/tailwindlabs/tailwindcss.com** — Tailwind CSS v4 installation, responsive design patterns
- **Astro Documentation** — Official routing and static site generation guides
- **Next.js Documentation** — Static export configuration and patterns

### Secondary (MEDIUM confidence)
- **Stripe.com** — Premium SaaS design example, analyzed hero section, product showcases, customer stories, pricing patterns
- **Vercel.com** — Modern developer-focused SaaS, studied navigation structure, product cards, clean typography, visual hierarchy
- **Linear.app** — Productivity SaaS with excellent UX, analyzed product pages, pricing comparison tables, dark theme, feature organization
- **Notion.so** — Workspace SaaS, studied bento-grid layouts, customer testimonials, feature showcases, responsive design
- **Awwwards.com/saas** — Directory of award-winning SaaS sites, reviewed patterns across multiple modern SaaS designs
- **https://stripe.com/en-gb-us/** — SaaS design patterns, modern aesthetic reference
- **https://vercel.com/templates** — Framework support, template ecosystem
- **shadcn/ui Documentation** — Component organization patterns

### Tertiary (LOW confidence)
- **Modern SaaS design patterns** — General consensus from community, but less formally documented than official sources
- **Static site optimization patterns** — Common practices, but vary by implementation

---
*Research completed: 2025-04-17*
*Ready for roadmap: yes*
