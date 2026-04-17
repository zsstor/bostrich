# Bostrich Roadmap

**Version:** v1
**Last updated:** 2025-04-17
**Granularity:** Coarse

## Phases

- [x] **Phase 1: Foundation & Design System** - Project setup with Astro, Tailwind, design tokens, and core structure
- [ ] **Phase 2: Shared Components** - Reusable UI components, navigation header, footer, and mobile menu
- [ ] **Phase 3: Core Pages** - Home, About, Pricing, and Contact pages with all sections
- [ ] **Phase 4: Individual Product Pages** - 7 product pages with dynamic routing and SaaS-style layouts
- [ ] **Phase 5: Refinement & Polish** - Responsive design, image optimization, accessibility, and performance
- [ ] **Phase 6: Deployment & Launch** - Deploy to production, configure domain, verify live site

## Phase Details

### Phase 1: Foundation & Design System

**Goal:** Project foundation is set up with design system and core structure

**Depends on:** Nothing (first phase)

**Requirements:** FND-01, FND-02, FND-03, FND-04, FND-05, FND-06

**Success Criteria** (what must be TRUE):
1. Astro project initializes and builds static output without errors
2. Tailwind CSS configured with design tokens (colors, typography, spacing) matching Stripe/Vercel aesthetic
3. Base layout component renders semantic HTML structure (header, main, footer)
4. Product data structure defined in src/lib/data.ts with 7+ products and buzzword descriptions
5. Viewport meta tag configured and site displays correctly on mobile devices

**Plans:** 5 plans
- [x] 01-01-PLAN.md — Initialize Astro v6.1.7 project with static output (FND-01)
- [x] 01-02-PLAN.md — Configure Tailwind CSS v4.2.0 with design tokens (FND-02, FND-03)
- [x] 01-03-PLAN.md — Create base layout with semantic HTML (FND-04)
- [x] 01-04-PLAN.md — Configure viewport meta tag for responsive design (FND-06)
- [x] 01-05-PLAN.md — Define product data structure (FND-05)

### Phase 2: Shared Components

**Goal:** Reusable UI components and navigation system work across all pages

**Depends on:** Phase 1

**Requirements:** NAV-01, NAV-02, NAV-03, NAV-04, NAV-05, NAV-06

**Success Criteria** (what must be TRUE):
1. Navigation header displays on all pages with working links to Home, Products, About, Pricing, Contact
2. Mobile navigation menu (hamburger) toggles open/closed on mobile devices
3. Active page highlighting works correctly across all routes
4. Footer component displays consistently on all pages with links and copyright
5. Layout inheritance pattern prevents duplicate navigation/footer code across pages

**Plans:** 2/2 plans executed
- [x] 02-01-PLAN.md — Desktop navigation header with links and active page highlighting (NAV-01, NAV-02, NAV-04, NAV-05)
- [x] 02-02-PLAN.md — Footer enhancement with multi-column layout and mobile navigation menu (NAV-03, NAV-06)

### Phase 3: Core Pages

**Goal:** All main pages (Home, About, Pricing, Contact) are functional and complete

**Depends on:** Phase 2

**Requirements:** PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07

**Success Criteria** (what must be TRUE):
1. Home page displays hero section with headline, subheadline, CTAs, and featured products section
2. About page shows satirical mission statement about democratizing verticality/agility
3. Pricing page displays tiered subscriptions (Free/Basic/Business/Enterprise) with feature comparison tables
4. Contact page shows enterprise inquiry form
5. All pages have proper page titles and meta descriptions for SEO
6. Internal routing works without errors across all pages

**Plans:** TBD
**UI hint**: yes

### Phase 4: Individual Product Pages

**Goal:** Seven product pages exist with dynamic routing and SaaS-style layouts

**Depends on:** Phase 3

**Requirements:** PROD-01, PROD-02, PROD-03, PROD-04, PROD-05, PROD-06, PROD-07, PROD-08

**Success Criteria** (what must be TRUE):
1. Products catalog page displays all 7+ products in grid layout
2. Individual product pages exist for ladder, agile ladder, ramp, slide, thin slide, cliff, scaffolding (7 total)
3. Dynamic routing with getStaticPaths() generates static pages for all products
4. Product pages include SaaS-style hero section with product-specific value proposition
5. Product pages include features list with technical buzzwords
6. Product pages display high-quality product imagery
7. Product pages include pricing tiers specific to that product

**Plans:** TBD
**UI hint**: yes

### Phase 5: Refinement & Polish

**Goal:** Site meets performance, accessibility, and visual quality standards

**Depends on:** Phase 4

**Requirements:** DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05, DSGN-06, PERF-01, PERF-02, PERF-03, PERF-04, A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05

**Success Criteria** (what must be TRUE):
1. Responsive design works correctly on mobile, tablet, and desktop breakpoints
2. Consistent visual hierarchy with H1/H2/H3 typography throughout all pages
3. All images have width and height attributes to prevent Cumulative Layout Shift (CLS)
4. Hero images and LCP candidates use fetchpriority="high" (not lazy loaded)
5. Images optimized with WebP format and responsive srcset
6. Font loading configured with font-display: swap to prevent layout shifts
7. Semantic HTML structure throughout (header, nav, main, section, article, footer)
8. Color contrast meets WCAG AA standards (4.5:1 for text)
9. All images have alt text for screen readers
10. Keyboard navigation works (focus visible, tab order logical)
11. Touch targets meet minimum size (44x44px) for mobile
12. Clean, minimal aesthetic matching Stripe/Vercel design language
13. High-quality product imagery displayed on all product pages

**Plans:** TBD
**UI hint**: yes

### Phase 6: Deployment & Launch

**Goal:** Site is live and accessible at bostri.ch

**Depends on:** Phase 5

**Requirements:** DEPLOY-01, DEPLOY-02, DEPLOY-03, DEPLOY-04, DEPLOY-05, DEPLOY-06, DEPLOY-07

**Success Criteria** (what must be TRUE):
1. Site deployed to production environment (Vercel or Cloudflare Pages)
2. Custom domain configured and accessible at bostri.ch
3. DNS records configured correctly (CNAME/A records)
4. SSL certificate verified and working (HTTPS redirects properly)
5. Sitemap.xml generated for SEO
6. robots.txt configured
7. Lighthouse audit run on production with passing scores (Performance, Accessibility, Best Practices)

**Plans:** TBD

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Design System | 5/5 | Complete | 2025-04-17 |
| 2. Shared Components | 2/2 | Complete | 2026-04-17 |
| 3. Core Pages | 0/0 | Not started | - |
| 4. Individual Product Pages | 0/0 | Not started | - |
| 5. Refinement & Polish | 0/0 | Not started | - |
| 6. Deployment & Launch | 0/0 | Not started | - |

## Dependencies

```
Phase 1 (Foundation)
    ↓
Phase 2 (Shared Components)
    ↓
Phase 3 (Core Pages)
    ↓
Phase 4 (Individual Product Pages)
    ↓
Phase 5 (Refinement & Polish)
    ↓
Phase 6 (Deployment & Launch)
```

---

*Roadmap created: 2025-04-17*
*Next action: /gsd-plan-phase 1*
