# Requirements: Bostrich

**Defined:** 2025-04-17
**Core Value:** Deliver absurd humor through the stark contrast between polished SaaS aesthetics and literal physical goods with buzzword descriptions.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation & Setup

- [ ] **FND-01**: Project initialized with Astro v6.1.7 and configured for static output
- [ ] **FND-02**: Tailwind CSS v4.2.0 installed and configured with Stripe/Vercel aesthetic design tokens
- [ ] **FND-03**: Design system established with CSS custom properties (colors, typography, spacing, borders)
- [ ] **FND-04**: Base layout component created with semantic HTML structure (header, main, footer)
- [ ] **FND-05**: Product data structure defined in src/lib/data.ts with 7+ products and buzzword descriptions
- [ ] **FND-06**: Viewport meta tag configured for responsive design

### Navigation & Routing

- [ ] **NAV-01**: Persistent navigation header with logo and links to all pages (Home, Products, About, Pricing, Contact)
- [ ] **NAV-02**: Navigation component uses layout inheritance pattern for consistency across all pages
- [ ] **NAV-03**: Mobile navigation menu (hamburger) with responsive behavior
- [ ] **NAV-04**: Internal routing configured with file-based routing pattern
- [ ] **NAV-05**: Active page highlighting in navigation
- [ ] **NAV-06**: Footer component with links, social media, and copyright

### Pages

- [ ] **PAGE-01**: Home page with hero section (headline, subheadline, primary CTA, secondary CTA)
- [ ] **PAGE-02**: Home page includes featured products section showcasing 3-4 products
- [ ] **PAGE-03**: About page with satirical mission statement about democratizing verticality/agility
- [ ] **PAGE-04**: Pricing page with tiered subscriptions (Free/Basic/Business/Enterprise) for each product type
- [ ] **PAGE-05**: Pricing page includes feature comparison tables across tiers
- [ ] **PAGE-06**: Contact page with enterprise inquiry form
- [ ] **PAGE-07**: All pages have proper page titles and meta descriptions

### Products

- [ ] **PROD-01**: Products catalog page displaying all 7+ products in grid layout
- [ ] **PROD-02**: Product card component with name, buzzword description, and product imagery
- [ ] **PROD-03**: Individual product pages for all 7 products (ladder, agile ladder, ramp, slide, thin slide, cliff, scaffolding)
- [ ] **PROD-04**: Product pages use dynamic routing with getStaticPaths() for static generation
- [ ] **PROD-05**: Product pages include SaaS-style hero section with product-specific value proposition
- [ ] **PROD-06**: Product pages include features list with technical buzzwords
- [ ] **PROD-07**: Product pages display high-quality product imagery
- [ ] **PROD-08**: Product pages include pricing tiers specific to that product

### Design & Visual

- [ ] **DSGN-01**: Responsive design works on mobile, tablet, and desktop
- [ ] **DSGN-02**: Mobile-first responsive design with Tailwind breakpoints (sm:, md:, lg:)
- [ ] **DSGN-03**: Consistent visual hierarchy with H1/H2/H3 typography
- [ ] **DSGN-04**: Professional, high-quality imagery for all 7 products (ladders, ramps, slides, cliffs, scaffolding)
- [ ] **DSGN-05**: Clean, minimal aesthetic matching Stripe/Vercel design language
- [ ] **DSGN-06**: Footer component with consistent layout across all pages

### Performance & Accessibility

- [ ] **PERF-01**: All images have width and height attributes to prevent layout shifts
- [ ] **PERF-02**: Hero images and LCP candidates use fetchpriority="high" (not lazy loaded)
- [ ] **PERF-03**: Images optimized with WebP format and responsive srcset
- [ ] **PERF-04**: Font loading configured with font-display: swap to prevent layout shifts
- [ ] **A11Y-01**: Semantic HTML structure throughout (header, nav, main, section, article, footer)
- [ ] **A11Y-02**: Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] **A11Y-03**: All images have alt text for screen readers
- [ ] **A11Y-04**: Keyboard navigation works (focus visible, tab order logical)
- [ ] **A11Y-05**: Touch targets meet minimum size (44x44px) for mobile

### Deployment

- [ ] **DEPLOY-01**: Site deployed to production environment (Vercel or Cloudflare Pages)
- [ ] **DEPLOY-02**: Custom domain configured at bostri.ch
- [ ] **DEPLOY-03**: DNS records configured correctly (CNAME/A records)
- [ ] **DEPLOY-04**: SSL certificate verified and working
- [ ] **DEPLOY-05**: Sitemap.xml generated for SEO
- [ ] **DEPLOY-06**: robots.txt configured
- [ ] **DEPLOY-07**: Lighthouse audit run on production with passing scores (Performance, Accessibility, Best Practices)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Social Proof & Polish

- **SOC-01**: Social proof section with fictional customer testimonials and logos
- **SOC-02**: Customer quotes with satirical metrics ("99.999% cliff uptime")
- **SOC-03**: Micro-interactions and animations (hover effects, scroll animations, smooth transitions)

### Advanced Features

- **ADV-01**: Feature comparison tables on individual product pages
- **ADV-02**: Dark mode toggle
- **ADV-03**: Changelog/What's New section with fake announcements
- **ADV-04**: Blog section with satirical articles about verticality/agility

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| E-commerce purchasing | Satire site is for browsing/humor only, not selling products |
| User accounts/authentication | No login or user sessions needed; browse-only experience |
| Content Management System (CMS) | Static site with hardcoded content is simpler and sufficient |
| Search functionality | Simple catalog browse is adequate for 7 products |
| Real-time search or filtering | Can add later if catalog expands significantly |
| Live chat widgets | Contact form is sufficient for parody effect |
| Interactive product tours | High complexity, not essential for MVP parody |
| Mobile apps | Responsive web design covers mobile use case |
| A/B testing infrastructure | Overkill for static parody site |
| Backend or database | Static site only, no server-side processing |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FND-01 | Phase 1 | Pending |
| FND-02 | Phase 1 | Pending |
| FND-03 | Phase 1 | Pending |
| FND-04 | Phase 1 | Pending |
| FND-05 | Phase 1 | Pending |
| FND-06 | Phase 1 | Pending |
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Pending |
| NAV-03 | Phase 2 | Pending |
| NAV-04 | Phase 2 | Pending |
| NAV-05 | Phase 2 | Pending |
| NAV-06 | Phase 2 | Pending |
| PAGE-01 | Phase 3 | Pending |
| PAGE-02 | Phase 3 | Pending |
| PAGE-03 | Phase 3 | Pending |
| PAGE-04 | Phase 3 | Pending |
| PAGE-05 | Phase 3 | Pending |
| PAGE-06 | Phase 3 | Pending |
| PAGE-07 | Phase 3 | Pending |
| PROD-01 | Phase 4 | Pending |
| PROD-02 | Phase 4 | Pending |
| PROD-03 | Phase 4 | Pending |
| PROD-04 | Phase 4 | Pending |
| PROD-05 | Phase 4 | Pending |
| PROD-06 | Phase 4 | Pending |
| PROD-07 | Phase 4 | Pending |
| PROD-08 | Phase 4 | Pending |
| DSGN-01 | Phase 5 | Pending |
| DSGN-02 | Phase 5 | Pending |
| DSGN-03 | Phase 5 | Pending |
| DSGN-04 | Phase 5 | Pending |
| DSGN-05 | Phase 5 | Pending |
| DSGN-06 | Phase 5 | Pending |
| PERF-01 | Phase 5 | Pending |
| PERF-02 | Phase 5 | Pending |
| PERF-03 | Phase 5 | Pending |
| PERF-04 | Phase 5 | Pending |
| A11Y-01 | Phase 5 | Pending |
| A11Y-02 | Phase 5 | Pending |
| A11Y-03 | Phase 5 | Pending |
| A11Y-04 | Phase 5 | Pending |
| A11Y-05 | Phase 5 | Pending |
| DEPLOY-01 | Phase 6 | Pending |
| DEPLOY-02 | Phase 6 | Pending |
| DEPLOY-03 | Phase 6 | Pending |
| DEPLOY-04 | Phase 6 | Pending |
| DEPLOY-05 | Phase 6 | Pending |
| DEPLOY-06 | Phase 6 | Pending |
| DEPLOY-07 | Phase 6 | Pending |

**Coverage:**
- v1 requirements: 48 total
- Mapped to phases: 48
- Unmapped: 0 ✓

---
*Requirements defined: 2025-04-17*
*Last updated: 2025-04-17 after initial definition*
