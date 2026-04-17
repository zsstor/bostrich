# Phase 03: Core Pages - Context

**Gathered:** 2025-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all main pages (Home, About, Pricing, Contact) with hero sections, featured products, pricing tiers, and contact forms. These pages establish the core SaaS structure for the satire. Navigation and routing already exist from Phase 2 — this phase focuses on page content and layout implementation.
</domain>

<decisions>
## Implementation Decisions

### Home Page Layout
- **D-01:** Hero section uses single column (centered) layout
  - **Rationale:** Clean, focused layout works well with text-heavy SaaS hero sections. Simpler than split layout, doesn't require visual assets. Consistent with Stripe/Vercel aesthetic (Phase 1 D-03).
  - **Locked:** Yes — establishes home page visual pattern

- **D-02:** Featured products show first 3-4 products from data array
  - **Rationale:** Simple, deterministic approach uses existing product order from src/lib/data.ts. No manual curation needed. 3-4 products provides variety without overwhelming the hero section.
  - **Locked:** Yes — uses existing product data structure (Phase 1 D-11)

- **D-03:** Hero section includes primary + secondary CTAs
  - **Rationale:** Standard SaaS pattern (e.g., "Get Started" + "Learn More"). Provides clear primary action while offering low-friction alternative. Buttons use accent color (indigo) from design system (Phase 1 D-03).
  - **Locked:** Yes — establishes CTA pattern for hero sections

### About Page Content
- **D-04:** Mission statement uses single headline + paragraph structure
  - **Rationale:** Concise, focused structure is easy to scan and digest. Single paragraph keeps satirical message punchy. Consistent with minimalist SaaS communication style.
  - **Locked:** Yes — defines About page information architecture

- **D-05:** Satirical buzzword density is exaggerated
  - **Rationale:** Heavy satire with obvious absurdity delivers stronger parody effect. Deadpan factual with exaggerated buzzwords creates humor through contrast with polished SaaS design. Aligns with PROJECT.md core value (stark contrast between aesthetics and absurd products).
  - **Locked:** Yes — establishes satirical tone for content

- **D-06:** About page is text-only (no illustrations)
  - **Rationale:** Focuses purely on language and satirical message without visual distraction. Simpler to implement, no illustration assets needed. Text-only approach strengthens deadpan presentation.
  - **Locked:** Yes — defines About page minimal approach

### Pricing Page Structure
- **D-07:** Pricing tables organized as product-specific sections (one table per product)
  - **Rationale:** Each product gets dedicated pricing section, making individual products easier to understand. 7 products with separate tables is manageable given vertical page layout. Product-specific approach fits with individual product pages coming in Phase 4.
  - **Locked:** Yes — defines pricing page section organization

- **D-08:** Features displayed as full feature list per tier
  - **Rationale:** Comprehensive approach shows all features for each tier, removing ambiguity. Full feature lists are standard in SaaS pricing pages (Stripe, Vercel). Features array exists in product data structure (Phase 1 D-11).
  - **Locked:** Yes — establishes feature display pattern

- **D-09:** "Business" tier highlighted as recommended across all products
  - **Rationale:** Standard SaaS pattern encourages mid-tier selection (typically highest-converting tier). Business tier (8 rungs for ladders, 15ft ramp, etc.) provides good balance of absurdity and seriousness. Adds visual hierarchy with recommended badge or highlighting.
  - **Locked:** Yes — establishes pricing tier emphasis pattern

### Contact Form Implementation
- **D-10:** Form submission uses JavaScript prevent-default with success message
  - **Rationale:** No backend required (per PROJECT.md constraints), but provides user feedback when form is submitted. Prevents default form submission behavior and replaces form with success message. Simple Vanilla JS pattern (Phase 2 D-04).
  - **Locked:** Yes — defines static form interaction pattern

- **D-11:** Form fields include standard enterprise set (name, email, company, message)
  - **Rationale:** Enterprise-appropriate field set without being excessive. Company field reinforces SaaS enterprise theme. Four fields is reasonable friction for parody site. Standard input patterns with labels and validation feedback.
  - **Locked:** Yes — defines contact form field structure

- **D-12:** Success message replaces form after submission
  - **Rationale:** More dramatic feedback confirms submission clearly. Replacing entire form with "Thank you" message is satisfying and feels complete. Consistent with static site approach (no page reload needed).
  - **Locked:** Yes — defines form feedback mechanism

### SEO & Meta Descriptions
- **D-13:** Page meta descriptions use concise summaries (1-2 sentences, ~150 chars)
  - **Rationale:** SEO best practice for meta descriptions. Concise summaries fit search result snippet length. 150 characters provides enough context without getting truncated. Each page needs unique description (PAGE-07 requirement).
  - **Locked:** Yes — establishes meta description length pattern

### Page Titles
- **D-14:** All pages use descriptive, keyword-rich titles
  - **Rationale:** SEO best practice (PAGE-07 requirement). Titles follow pattern: "Page Name | Bostrich" for consistent branding. Home page title: "Bostrich — Scalable Solutions to Take Your Business to the Next Level".
  - **Locked:** Yes — defines page title pattern

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase 3 Requirements
- **.planning/REQUIREMENTS.md** — Phase 3 requirements: PAGE-01 through PAGE-07
  - PAGE-01: Home page with hero section (headline, subheadline, primary CTA, secondary CTA)
  - PAGE-02: Home page includes featured products section showcasing 3-4 products
  - PAGE-03: About page with satirical mission statement about democratizing verticality/agility
  - PAGE-04: Pricing page with tiered subscriptions (Free/Basic/Business/Enterprise) for each product type
  - PAGE-05: Pricing page includes feature comparison tables across tiers
  - PAGE-06: Contact page with enterprise inquiry form
  - PAGE-07: All pages have proper page titles and meta descriptions

### Prior Phase Decisions (Foundation & Shared Components)
- **.planning/phases/01-foundation-design-system/01-CONTEXT.md** — Design tokens and component structure
  - D-01 through D-04: Design tokens (CSS variables, Stripe/Vercel aesthetic, gray palette, indigo accent)
  - D-06, D-07: Typography (system fonts, font-display: swap)
  - D-08, D-09: Component structure (src/components/, src/layouts/, src/components/ui/)
  - D-10, D-11: Product data structure (TypeScript interface, array in src/lib/data.ts)

- **.planning/phases/02-shared-components/02-CONTEXT.md** — Navigation and layout patterns
  - D-01 through D-03: Navigation structure (semantic HTML, container pattern, links to all 5 pages)
  - D-04 through D-06: Mobile menu implementation (Vanilla JS, hamburger button, smooth transitions)
  - D-07 through D-09: Active page highlighting (Astro.url.pathname, indigo accent)
  - D-10 through D-14: Footer structure (multi-column grid, navigation links, social icons)
  - D-16: Routing configuration (file-based routing in Astro)

### Technology Stack
- **.planning/research/STACK.md** — Tech stack recommendations
  - Astro v6.1.7: Static site generator with zero JavaScript by default
  - Tailwind CSS v4.2.0: Utility-first CSS with @theme directive and design tokens
  - Node.js v20 LTS: Runtime environment
  - Vercel (primary) or Cloudflare Pages: Deployment platforms

### Existing Codebase
- **src/lib/data.ts** — Product definitions with 7 products
  - Product interface: id, name, slug, tagline, description, features[], pricing{free, basic, business, enterprise}
  - Helper functions: getAllProducts(), getProductBySlug()
  - All products have pricing tiers and feature arrays ready for display

- **src/components/Header.astro** — Navigation with links to all 5 pages
  - Desktop navigation: 5 links (Home, Products, About, Pricing, Contact) with active highlighting
  - Mobile menu: Hamburger button with smooth transition animations
  - Uses container pattern (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)

- **src/components/Footer.astro** — Multi-column footer with navigation and social links
  - Left column: Navigation links (same 5 links as header)
  - Center column: Social media links (Twitter, GitHub, LinkedIn)
  - Right column: Legal links (Privacy, Terms) and copyright

- **src/layouts/Layout.astro** — Base layout with Header and Footer
  - Imports Header.astro and Footer.astro
  - Wraps page content in `<main>` element
  - Provides layout inheritance pattern for all pages

- **src/pages/index.astro** — Existing home page (minimal)
  - Currently has basic "Welcome to Bostrich" title and description
  - Needs hero section, featured products section, and CTAs per PAGE-01 and PAGE-02

- **src/styles/design-tokens.css** — Complete design system
  - Colors: gray palette (gray-50 through gray-900), indigo accent (indigo-50 through indigo-900)
  - Typography: system fonts, display variants, body text scales
  - Spacing: 1px through 6rem scale
  - Semantic color aliases: background, surface, border, text-primary, text-secondary, accent

### SEO Best Practices
- **https://developers.google.com/search/docs/appearance/google-search** — SEO guidelines for meta descriptions and titles
  - Meta description length: ~150-160 characters optimal
  - Title tag format: Primary keyword | Brand name
  - Unique descriptions per page to avoid duplicate content issues

- **https://www.w3schools.com/html/html_head.asp** — HTML head element reference
  - Meta description element usage and best practices
  - Title element guidelines for search engines

### Product Content & Satire
- **PROJECT.md** — Core value and product definitions
  - Core value: Deliver absurd humor through stark contrast between polished SaaS aesthetics and literal physical goods with buzzword descriptions
  - Products: Ladders, Agile ladders, Ramps, Slides, Thin slides, Cliffs, Scaffolding (7 total)
  - Each product has satirical tagline and description with corporate buzzwords

### SaaS Pricing Patterns
- **https://stripe.com/pricing** — Stripe pricing page reference (implied by design aesthetic)
  - Three-tier structure (Basic/Pro/Enterprise) with feature comparison
  - Highlighted recommended tier with visual emphasis
  - Feature list format and presentation style

- **https://vercel.com/pricing** — Vercel pricing page reference (implied by design aesthetic)
  - Multi-tier pricing tables with feature breakdown
  - Clean, minimal presentation matching Stripe/Vercel aesthetic
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **Header.astro** (src/components/Header.astro) — Desktop and mobile navigation with active page highlighting, links to all 5 pages
- **Footer.astro** (src/components/Footer.astro) — Multi-column footer with navigation, social, and legal links
- **Layout.astro** (src/layouts/Layout.astro) — Base layout importing Header and Footer, wraps page content in `<main>`
- **design-tokens.css** (src/styles/design-tokens.css) — Complete design system (colors, typography, spacing, semantic aliases)
- **Product data** (src/lib/data.ts) — 7 products with TypeScript interface, pricing tiers, and feature arrays

### Established Patterns
- **Container pattern**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 — Used in Header, Footer, should apply to page content sections
- **Typography hierarchy**: text-4xl for hero headlines, text-lg for body, text-sm for metadata — Consistent with design tokens
- **Color usage**: gray-900 for headings, gray-600 for body text, indigo-600 for accent/CTAs — Established in design system
- **Semantic HTML**: <header>, <nav>, <main>, <footer>, <section>, <article> — Required for accessibility (A11Y-01)
- **Tailwind responsive breakpoints**: sm: (640px), md: (768px), lg: (1024px) — Used for responsive design

### Integration Points
- **Page creation**: New pages created in src/pages/ as .astro files — Astro's file-based routing (Phase 2 D-16)
- **Layout inheritance**: All pages should import and use Layout.astro — Ensures Header and Footer display consistently
- **Product data import**: Home and Pricing pages import from src/lib/data.ts — Access products array and helper functions
- **Navigation links**: New pages automatically appear in Header and Footer navigation — Layout inheritance applies navigation to all pages
- **Mobile menu**: New pages work automatically with existing mobile menu — Menu reads from navLinks array in Header

### Creative Options
- **Hero section variations**: Single column, split layout, full-width background — Design system supports any layout via Tailwind grid/flex utilities
- **Featured products display**: Grid layout (grid-cols-1 md:grid-cols-3) or horizontal scroll — Tailwind provides both options
- **Pricing table layout**: Side-by-side tier comparison or stacked cards — Design tokens provide consistent spacing and borders
- **Contact form styling**: Minimal inputs with simple validation or rich form with detailed feedback — Both possible with existing design tokens
</code_context>

<specifics>
## Specific Ideas

### Home Page Hero
- Hero headline should be: "Scalable Solutions to Take Your Business to the Next Level" — Reinforces ladder/verticality theme
- Subheadline: "Industry-leading vertical mobility and offboarding accelerators for modern enterprises" — Adds absurdity
- Primary CTA: "Get Started" (links to /products) — Standard SaaS pattern
- Secondary CTA: "Learn More" (links to /about) — Low-friction exploration option

### Featured Products Section
- Section heading: "Featured Products" — Simple, clear
- Product cards should show: name, tagline, and brief description — No pricing (pricing pages handle that)
- Grid layout: 3 columns on desktop (grid-cols-1 md:grid-cols-3) — Matches Stripe/Vercel aesthetic

### About Page Content
- Headline: "Democratizing Verticality and Accelerating Agility" — Satirical mission statement
- Paragraph: "At Bostrich, we believe every enterprise deserves scalable solutions to reach new heights. Our offboarding accelerators help teams transition smoothly to their next opportunity. Join thousands of organizations leveraging our infrastructure for growth and strategic exits." — Corporate-speak with absurdity
- No call to action on About page — Informational page

### Pricing Page Structure
- Section per product (7 sections total) — Each product gets dedicated pricing area
- Product section includes: Product name, tagline, pricing table for 4 tiers (Free/Basic/Business/Enterprise)
- Pricing table columns: Tier name, price (e.g., "3 rungs"), feature list (checkmarks for included features)
- Recommended tier (Business) highlighted with: "Recommended" badge, slightly larger border, subtle background color

### Contact Page
- Form heading: "Enterprise Inquiries" — Fits SaaS theme
- Form fields (with labels): Name, Email, Company, Message — Standard enterprise contact form
- Submit button: "Submit Inquiry" — Professional, action-oriented
- Success message: "Thank you for your inquiry. Our enterprise team will respond within 1-2 business days." — SaaS-standard response time
- Form uses semantic HTML: <form>, <label>, <input>, <textarea>, <button> — Accessibility best practice

### Page Titles and Meta Descriptions
- Home: "Bostrich — Scalable Solutions to Take Your Business to the Next Level"
  - Meta: "Industry-leading vertical mobility solutions and offboarding accelerators for modern enterprises. Take your business to new heights with Bostrich."

- About: "About Bostrich — Democratizing Verticality and Agility"
  - Meta: "Our mission is to democratize verticality and accelerate agility for modern enterprises. Learn about our scalable infrastructure solutions."

- Pricing: "Pricing — Bostrich Enterprise Solutions"
  - Meta: "Tiered pricing for vertical mobility, offboarding accelerators, and growth infrastructure. Choose the plan that fits your enterprise needs."

- Contact: "Contact — Bostrich Enterprise Inquiries"
  - Meta: "Enterprise inquiries and partnership opportunities. Contact our team to discuss scalable solutions for your organization."

### Satirical Tone
- Use corporate buzzwords: scalable, leverage, infrastructure, accelerate, enterprise-grade, optimize, empower
- Describe literal products absurdly: ladders as "vertical scaling," slides as "offboarding accelerators"
- Keep deadpan delivery — present absurd content seriously, let humor come from contrast
- Avoid jokes or winking at audience — satire works best when presented sincerely
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 3 scope (core pages: Home, About, Pricing, Contact).
</deferred>

---

*Phase: 03-core-pages*
*Context gathered: 2025-04-17*
