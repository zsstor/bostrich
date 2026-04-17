# Phase 02: Shared Components - Context

**Gathered:** 2025-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Reusable UI components and navigation system work across all pages. This phase builds navigation header with links, mobile hamburger menu, active page highlighting, and footer with links and social media. Implements layout inheritance pattern to ensure navigation/footer display consistently across all pages without duplication.
</domain>

<decisions>
## Implementation Decisions

### Navigation Structure
- **D-01:** Navigation links added directly to Header.astro as a `<nav>` element with semantic HTML (nested `<ul>`, `<li>` structure)
- **D-02:** Navigation uses existing Header.astro container pattern (max-w-7xl, px-4 sm:px-6 lg:px-8) for visual consistency
- **D-03:** Navigation links point to: Home (/), Products (/products), About (/about), Pricing (/pricing), Contact (/contact)
- **Rationale:** Header.astro already exists and is imported by Layout.astro, ensuring NAV-02 (layout inheritance pattern) is satisfied without modifying every page. This follows Phase 1 decision D-08 where shared components go in src/components/.

### Mobile Menu Implementation
- **D-04:** Mobile menu implemented as client-side Vanilla JavaScript using Astro's `<script>` tag with `isMenuOpen` boolean state
- **D-05:** Hamburger button (three-line icon) visible on mobile (< md breakpoint) with click event listener toggling menu state
- **D-06:** Mobile menu dropdown uses smooth transition animations (Tailwind transition classes) for open/close
- **Rationale:** Research confirms Vanilla JS adds 0KB overhead for a simple boolean toggle, while Alpine.js would add ~10KB. Astro's `<script>` tags are processed, bundled, and inlined automatically for small scripts, making this the most performant choice for static sites. Tailwind's responsive breakpoints (md:) are already configured in design system.

### Active Page Highlighting
- **D-07:** Active page highlighting uses `Astro.url.pathname` to detect current route during static build
- **D-08:** Conditional CSS classes: `text-indigo-600` for active link, `text-gray-600` for inactive links
- **D-09:** Exact path matching for main routes (/products matches /products but not /products/[slug])
- **Rationale:** `Astro.url.pathname` API provides server-side route detection perfect for static site generation. This requires zero client-side JavaScript and works during build. The indigo accent color (--color-indigo-600) is already defined in design tokens (Phase 1 D-03).

### Footer Enhancement
- **D-10:** Footer uses multi-column layout with navigation links, social media links, and copyright/legal links
- **D-11:** Footer grid: 1 column on mobile, 3 columns on desktop (grid-cols-1 md:grid-cols-3)
- **D-12:** Left column: navigation links (Home, Products, About, Pricing, Contact)
- **D-13:** Center column: social media links using Lucide icons (Twitter, GitHub, LinkedIn placeholders)
- **D-14:** Right column: copyright text and legal links (Privacy, Terms placeholder)
- **Rationale:** NAV-06 requires links, social media, and copyright. Multi-column grid is standard SaaS footer pattern matching Stripe/Vercel aesthetic. Responsive grid (1 → 3 columns) uses Tailwind's md: breakpoint already in design system. Maintains consistency with header's container pattern (Phase 1 D-02).

### Icon Library
- **D-15:** Social media icons use Lucide via `@lucide/astro` package
- **Rationale:** Research confirms Lucide has official Astro integration, renders icons as inline SVG components with zero runtime JavaScript, is fully TypeScript typed, and supports tree-shaking (only imports used icons). Heroicons and Tabler lack official Astro packages, adding complexity. Lucide provides comprehensive social icon set with smallest bundle size for static sites.

### Routing Configuration
- **D-16:** Internal routing uses Astro's file-based routing pattern (src/pages/ directory structure)
- **Rationale:** NAV-04 requires file-based routing, which is Astro's default. No additional configuration needed—creating .astro files in src/pages/ automatically generates routes. This aligns with Phase 1 decision D-05 (standard Astro structure).

## Agent's Discretion

No areas delegated to agent discretion. All implementation decisions were explicitly made through assumption analysis and research.

## Folded Todos

No todos were folded into this phase's scope.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase 2 Requirements
- **.planning/REQUIREMENTS.md** — Navigation requirements (NAV-01 through NAV-06)
  - NAV-01: Persistent navigation header with logo and links to all pages (Home, Products, About, Pricing, Contact)
  - NAV-02: Navigation component uses layout inheritance pattern for consistency across all pages
  - NAV-03: Mobile navigation menu (hamburger) with responsive behavior
  - NAV-04: Internal routing configured with file-based routing pattern
  - NAV-05: Active page highlighting in navigation
  - NAV-06: Footer component with links, social media, and copyright

### Prior Phase Decisions (Foundation)
- **.planning/phases/01-foundation-design-system/01-CONTEXT.md** — Design tokens and component structure decisions
  - D-01 through D-04: Design tokens (CSS variables, Stripe/Vercel aesthetic, gray palette, indigo accent)
  - D-08: Component structure (src/components/ for shared components, src/layouts/ for page wrappers)
  - D-09: UI primitives organization (src/components/ui/ for Button, Card, Badge)

### Technology Stack
- **.planning/research/STACK.md** — Tech stack recommendations
  - Astro v6.1.7: Static site generator with zero JavaScript by default
  - Tailwind CSS v4.2.0: Utility-first CSS with @theme directive and design tokens
  - Node.js v20 LTS: Runtime environment
  - Vercel (primary) or Cloudflare Pages: Deployment platforms

### Existing Codebase
- **src/styles/design-tokens.css** — Design tokens (colors, spacing, typography, border radius)
  - Semantic color aliases: background, surface, border, text-primary, text-secondary, accent
  - Gray palette: gray-50 through gray-900 (Stripe/Vercel aesthetic)
  - Indigo accent: indigo-50 through indigo-900 (accent color: indigo-500, hover: indigo-600)
  - Spacing scale: 1px through 6rem (Tailwind standard)
  - Border radius: sm (0.25rem), md (0.375rem), lg (0.5rem)

- **src/components/Header.astro** — Existing header component (needs navigation enhancement)
  - Currently displays logo/title only
  - Uses semantic HTML with correct container pattern (max-w-7xl, px-4 sm:px-6 lg:px-8)
  - Imported by Layout.astro and renders on all pages

- **src/components/Footer.astro** — Existing footer component (needs enhancement)
  - Currently displays copyright only
  - Uses semantic HTML with correct container pattern
  - Imported by Layout.astro and renders on all pages

- **src/layouts/Layout.astro** — Base layout with semantic HTML structure
  - Imports Header and Footer components
  - Wraps page content in `<main>` element
  - Provides layout inheritance pattern for all pages

### Research Sources
- **https://docs.astro.build/en/guides/client-side-scripts/** — Astro client-side scripts documentation (Vanilla JS pattern)
- **https://docs.astro.build/en/guides/integrations-guide/alpinejs/** — Alpine.js integration guide (research comparison)
- **https://lucide.dev/guide/packages/lucide-astro** — Lucide Astro integration documentation
- **https://github.com/lucide-icons/lucide** — Lucide icons source (1000+ icons, TypeScript support)
- **https://heroicons.com/** — Heroicons documentation (alternative, lacks Astro package)

### Product Data Structure
- **src/lib/data.ts** — Product definitions and helper functions
  - Product interface with name, slug, description, pricingTiers, features
  - getAllProducts() function returns all 7 products
  - getProductBySlug(slug) function returns single product by slug
  - Used by Phase 3 and Phase 4 for product rendering
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **Header.astro** (src/components/Header.astro) — Existing header with logo display, needs navigation links added
- **Footer.astro** (src/components/Footer.astro) — Existing footer with copyright, needs multi-column layout and social links
- **Layout.astro** (src/layouts/Layout.astro) — Base layout importing Header and Footer, provides slot for content
- **design-tokens.css** (src/styles/design-tokens.css) — Complete design system with colors, spacing, typography, border radius

### Established Patterns
- **Container pattern**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 — used in Header and Footer for consistent spacing
- **Semantic HTML**: All components use proper semantic elements (header, footer, nav, main)
- **Tailwind responsive breakpoints**: sm: (640px), md: (768px), lg: (1024px) — defined in design system
- **Layout inheritance**: Layout.astro wraps all page content, ensuring Header and Footer display consistently
- **Component organization**: src/components/ for shared UI elements, src/layouts/ for page wrappers (Phase 1 D-08)

### Integration Points
- **Layout.astro** → Header.astro and Footer.astro: Navigation and footer enhancements automatically apply to all pages
- **Navigation links** → Astro's file-based routing: Pages will be at /, /products, /about, /pricing, /contact
- **Active page highlighting** → Astro.url.pathname API: Server-side route detection during static build
- **Mobile menu** → Astro's `<script>` tag: Client-side interactivity with automatic bundling
- **Social icons** → Lucide @lucide/astro package: Official Astro integration with TypeScript support
</code_context>

<specifics>
## Specific Ideas

No specific product references or examples captured. Decisions were driven by codebase analysis, research, and requirements alignment.
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 2 scope (navigation system and shared components).
</deferred>

---

*Phase: 02-shared-components*
*Context gathered: 2025-04-17 (assumptions mode)*
