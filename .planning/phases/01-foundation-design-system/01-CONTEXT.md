# Phase 01: Foundation & Design System - Context

**Gathered:** 2025-04-17
**Status:** Ready for planning

## Phase Boundary

Project foundation is set up with design system and core structure. This phase establishes the technical foundation that all subsequent phases depend on — Astro setup, Tailwind CSS configuration, design tokens, semantic HTML structure, and product data management.

## Implementation Decisions

### Design Tokens & CSS Configuration

**D-01:** CSS variables with @theme directive in Tailwind CSS v4
- **Rationale:** Tailwind CSS v4 introduces @theme directive as the modern way to define design tokens. This is the official best practice for v4 and simplifies customization compared to v3's theme extension. Research confirmed this is the recommended approach.
- **Locked:** Yes — this decision is made and will guide the planner

**D-02:** Design tokens defined in dedicated CSS file (src/styles/design-tokens.css)
- **Rationale:** Separating design tokens into a dedicated file makes the design system explicit, maintainable, and reusable. This pattern is standard in modern design systems (referenced in Stripe/Vercel analysis in research). The file will contain color variables, typography tokens, spacing constants that can be imported across components.
- **Locked:** Yes — provides clear design system contract for all downstream work

**D-03:** Color palette using neutral grays with accent color (like Stripe's indigo)
- **Rationale:** The Stripe/Vercel aesthetic is characterized by neutral backgrounds (whites, light grays) with a single accent color for CTAs and interactive elements. Indigo (#6366f1) is Stripe's signature color and aligns with the "premium developer tool" aesthetic while remaining neutral enough for the parody content. This is a deliberate aesthetic choice that makes the absurdity more effective by contrast.
- **Locked:** Yes — defines the visual language for the entire site

**D-04:** CSS custom properties for all design tokens
- **Rationale:** Using CSS custom properties (CSS variables) ensures design tokens are consistent across all components and can be referenced in Tailwind via CSS variables. This prevents hardcoded values scattered throughout the codebase. Tailwind v4 supports CSS variables directly, making this a clean integration.
- **Locked:** Yes — enforces consistency through the component system

### Project Initialization

**D-05:** Start from Astro's minimal template
- **Rationale:** Astro's minimal template provides a modern, opinionated structure with TypeScript, Tailwind, and SEO best practices already configured. Starting from a template is significantly faster than from scratch and ensures we're following current Astro patterns. The template can be modified incrementally.
- **Locked:** Yes — sets up the project structure correctly from the start

### Typography

**D-06:** System fonts (Inter fallback to sans-serif)
- **Rationale:** System fonts require no external requests, have zero layout shift risk, and load instantly. The Inter font is available on most systems as a system font, making it a safe default. This aligns with the performance requirement from REQUIRMENTS.md (PERF-04: font loading configured). If Inter isn't available, it falls back gracefully to sans-serif.
- **Locked:** Yes — prioritizes performance and eliminates web font complexity

**D-07:** Font loading strategy: Use `font-display: swap`
- **Rationale:** Even with system fonts, setting `font-display: swap` is a best practice that prevents layout shifts if we ever add web fonts later. This is specified in REQUIRMENTS.md (PERF-04) and follows web.dev recommendations.
- **Locked:** Yes — implements the font loading strategy from requirements

### Component Structure

**D-08:** Standard Astro structure — src/components/ for reusable components, src/layouts/ for page wrappers
- **Rationale:** Astro's standard structure is the convention and provides clear separation of concerns. Components are reusable UI elements, layouts are page shells that wrap components with navigation and footer. This aligns with the architecture research (component boundaries and layout inheritance pattern).
- **Locked:** Yes — follows Astro and modern SaaS best practices

**D-09:** Separate UI primitives (Button, Card, Badge) in src/components/ui/
- **Rationale:** Organizing UI primitives separately makes the component system explicit. Button, Card, and Badge are fundamental components that will be used across many pages. Grouping them in src/components/ui/ makes them discoverable and prevents duplication. This pattern from shadcn/ui and component systems research.
- **Locked:** Yes — establishes clear component hierarchy

### Product Data Structure

**D-10:** TypeScript interface for product type
- **Rationale:** TypeScript interface ensures type safety for product properties (name, description, pricing tiers, features). With 7+ products and buzzword descriptions, having compile-time type checking prevents bugs. This is especially important given the satirical nature requires consistent structure across products.
- **Locked:** Yes — provides type safety for all product-related code

**D-11:** Array of objects in src/lib/data.ts
- **Rationale:** A simple array of product objects is easy to query, filter, and map through without a database. This is static-site appropriate (no CMS per PROJECT.md constraints). The array can be imported into any component for rendering.
- **Locked:** Yes — simple, maintainable data structure with no external dependencies

## Agent's Discretion

No areas delegated to agent discretion. All implementation decisions were explicitly made.

## Canonical References

### Downstream agents MUST read these before planning or implementing:

- **.planning/REQUIREMENTS.md** — Phase 1 requirements: FND-01 through FND-06
  - FND-01: Project initialized with Astro v6.1.7 and configured for static output
  - FND-02: Tailwind CSS v4.2.0 installed and configured with Stripe/Vercel aesthetic design tokens
  - FND-03: Design system established with CSS custom properties (colors, typography, spacing, borders)
  - FND-04: Base layout component created with semantic HTML structure (header, main, footer)
  - FND-05: Product data structure defined in src/lib/data.ts with 7+ products and buzzword descriptions
  - FND-06: Viewport meta tag configured for responsive design

- **.planning/research/STACK.md** — Technology stack recommendations
  - Astro v6.1.7: Static site generator — zero JavaScript by default, content-focused architecture
  - Tailwind CSS v4.2.0: Utility-first CSS framework — CSS-native configuration with @theme directive
  - Node.js v20 LTS: Runtime — required by Astro
  - Vercel (primary) or Cloudflare Pages (alternative): Deployment platforms

- **.planning/research/ARCHITECTURE.md** — Component organization patterns
  - Page Components (src/pages/) — route definitions with unique layouts
  - Shared Components (src/components/) — reusable UI elements (Button, Card, Navigation, Footer)
  - Layouts (src/layouts/) — shared page structure (header, footer, navigation)
  - Product Data (src/lib/data.ts) — static product definitions with hardcoded content

- **.planning/research/SUMMARY.md** — Phase 1 roadmap implications
  - Phase 1 (Foundation & Design System): Addresses project structure, responsive design system
  - Must come before Phase 2 (Shared Components) to enable component development

## Specific Ideas

No specific product references or examples captured in discussion. Decisions were driven by research-backed best practices and requirements.

## Deferred Ideas

None — discussion stayed within Phase 1 scope.

---
*Phase 01: Foundation & Design System*
*Context gathered: 2025-04-17*
