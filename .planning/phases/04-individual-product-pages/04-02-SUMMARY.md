---
phase: 04-individual-product-pages
plan: 02
subsystem: pages
tags: [astro, tailwind, dynamic-routing, getStaticPaths, product-pages, hero-section, features, pricing]
dependency_graph:
  provides: [Individual product pages for all 7 products]
  requires: [Layout.astro, getAllProducts(), getProductBySlug() from src/lib/data.ts, products catalog page]
  affects: [Pricing page (links to /pricing), Contact page (enterprise tier links)]
# Tech tracking
tech-stack:
  added: []
  patterns: [dynamic-routing, getStaticPaths, hero-section, features-grid, pricing-grid, business-tier-highlighting]
key-files:
  created:
    - src/pages/products/[slug].astro
  modified:
    - src/lib/data.ts
key-decisions:
  - "Use getStaticPaths() to generate static pages for all 7 products at build time"
  - "Pass product object in props from getStaticPaths() to avoid duplicate data fetching"
  - "Hero section uses 2-column grid layout (1 column mobile, 2 columns desktop)"
  - "Features section uses 2-column grid for buzzword list with checkmarks"
  - "Pricing section uses 4-column grid matching pricing.astro pattern"
  - "Business tier highlighting: border-2 border-indigo-600 and 'Recommended' badge"
  - "Enterprise tier CTA: Contact Sales (outline button) instead of Get Started"
  - "Hero image: loading='lazy' with width/height attributes to prevent CLS"
  - "Dynamic page title: \${product.name} — Bostrich Enterprise Solutions"
patterns-established:
  - "Pattern: Dynamic routing with getStaticPaths() - Generates static paths for all products at build time"
  - "Pattern: Product object in props - Pass product data from getStaticPaths() to avoid duplicate data fetching"
  - "Pattern: Hero section layout - 2-column grid (1 mobile, 2 desktop) with image and content"
  - "Pattern: Features grid - 2-column grid for buzzword list with indigo checkmarks"
  - "Pattern: Pricing grid - 4-column grid (1 mobile, 2 tablet, 4 desktop) with tier highlighting"
  - "Pattern: Business tier highlighting - Thicker border (border-2) + 'Recommended' badge (inline-block)"
  - "Pattern: Enterprise tier CTA - Contact Sales with outline button (bg-white text-indigo-600 border)"
requirements-completed: [PROD-03, PROD-04, PROD-05, PROD-06, PROD-07, PROD-08]

# Metrics
duration: 2min
completed: 2026-04-17T20:42:09Z
---

# Phase 04 Plan 02: Dynamic Product Pages Summary

**Dynamic product pages for all 7 products with hero section, features list, product imagery, and pricing tiers using Astro's getStaticPaths()**

## Performance

- **Duration:** 2 min
- **Started:** 2026-04-17T20:41:22Z
- **Completed:** 2026-04-17T20:42:09Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Added imageUrl field to Product interface in src/lib/data.ts
- Added Unsplash image URLs to all 7 products (ladder, agile-ladder, ramp, slide, thin-slide, cliff, scaffolding)
- Created src/pages/products/[slug].astro with dynamic routing
- Implemented getStaticPaths() to generate static paths for all 7 products
- Hero section with product-specific imagery, name, tagline, description, and CTA
- Features section with technical buzzwords and indigo checkmarks
- Pricing section with 4 tiers (Free, Basic, Business, Enterprise)
- Business tier highlighted with "Recommended" badge and thicker indigo border
- Enterprise tier CTA links to /contact (Contact Sales)
- Responsive layout (1 column mobile, 2-column tablet, 4-column desktop)
- Verified all 7 product pages generate successfully at build time
- Generated HTML includes proper semantic structure and design tokens

## Task Commits

Each task was committed atomically:

1. **Task 1: Add image URLs to product data structure** - `04f908b` (feat)
2. **Task 2: Create dynamic product page route with getStaticPaths()** - `7372b38` (feat)

**Plan metadata:** TBD (docs: complete plan)

## Files Created/Modified

- `src/lib/data.ts` - Updated Product interface with imageUrl field, added image URLs to all 7 products
- `src/pages/products/[slug].astro` - Dynamic product page route with hero, features, and pricing, 142 lines

## Decisions Made

- Use getStaticPaths() to generate static paths for all 7 products at build time
- Pass product object in props from getStaticPaths() to avoid duplicate data fetching
- Hero section uses 2-column grid layout (1 column mobile, 2 columns desktop)
- Features section uses 2-column grid for buzzword list with indigo checkmarks
- Pricing section uses 4-column grid matching pricing.astro pattern from Phase 3
- Business tier highlighting: border-2 border-indigo-600 and "Recommended" badge (inline-block)
- Enterprise tier CTA: Contact Sales (outline button) instead of Get Started
- Hero image: loading="lazy" with width="800" height="600" attributes to prevent CLS
- Dynamic page title: `${product.name} — Bostrich Enterprise Solutions`
- Dynamic page description: `${product.tagline}. ${product.description}` for SEO
- Container pattern: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 for consistent spacing

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None - all tasks completed successfully without blocking issues or errors.

## User Setup Required

None - no external service configuration required. All images are from Unsplash (free public image service).

## Next Phase Readiness

- All 7 product pages exist and are statically generated
- Dynamic routing with getStaticPaths() works correctly
- Hero section displays product-specific value proposition and imagery
- Features list shows technical buzzwords with checkmarks
- Pricing tiers match product data (Free, Basic, Business, Enterprise)
- Business tier is highlighted with "Recommended" badge and thicker border
- Pages are responsive across all breakpoints
- No blockers or concerns
- Phase 4 complete and ready for Phase 5: Refinement & Polish

## Threat Flags

None - no new security-relevant surfaces introduced. Dynamic routing uses getStaticPaths() which only generates valid slugs from product data, preventing arbitrary slug injection. Product data is static at build time with no user modification possible.

## Known Stubs

None - all data sources wired to product data from src/lib/data.ts. All pricing tiers are fully populated with features and CTAs.

## Self-Check: PASSED

- [x] Commit 04f908b exists: Image URLs added to product data
- [x] Commit 7372b38 exists: Dynamic product pages created with getStaticPaths
- [x] File exists: src/lib/data.ts with imageUrl field
- [x] File exists: src/pages/products/[slug].astro (142 lines)
- [x] Build succeeds: `npm run build` completed without errors
- [x] All 7 product pages generated: /products/ladder, /products/agile-ladder, /products/ramp, /products/slide, /products/thin-slide, /products/cliff, /products/scaffolding
- [x] getStaticPaths() returns array of 7 slugs
- [x] Hero section displays product name, tagline, and description
- [x] Hero images load from Unsplash URLs
- [x] Features section displays all product features with checkmarks
- [x] Pricing section displays 4 tiers with business tier highlighting
- [x] Pages are responsive (stacked mobile, 2-column tablet, 4-column desktop)
- [x] Generated HTML has semantic structure

---
*Phase: 04-individual-product-pages*
*Plan: 02*
*Completed: 2026-04-17*
