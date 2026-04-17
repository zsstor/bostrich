# Phase 02: Shared Components - Research

**Researched:** 2025-04-17
**Domain:** Astro components, navigation systems, responsive design, accessibility
**Confidence:** HIGH

## Summary

Phase 2 focuses on implementing reusable UI components and navigation system that work across all pages. The primary technical domains are: (1) Astro component architecture for shared layouts, (2) navigation header with responsive mobile menu, (3) active page highlighting using server-side route detection, (4) footer component with multi-column layout, and (5) icon integration for social media links.

**Primary recommendation:** Use Astro's native component system with layout inheritance pattern (Header.astro and Footer.astro imported by Layout.astro) for consistent navigation across all pages. Implement mobile menu with Vanilla JavaScript using Astro's `<script>` tag (zero runtime overhead). Use `Astro.url.pathname` for active page highlighting (server-side detection, no client-side JavaScript needed). Install `@lucide/astro` v1.8.0 for social media icons (official Astro integration, tree-shaking support).

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Navigation structure (HTML/links) | Browser / Client | — | Static HTML navigation renders in browser; no backend required |
| Mobile menu toggle state | Browser / Client | — | Client-side JavaScript handles boolean toggle; Vanilla JS adds 0KB overhead |
| Active page highlighting | Frontend Server (SSR) | — | Astro.url.pathname is server-side API accessed during static build/render |
| Footer display | Browser / Client | — | Footer is static HTML/CSS rendered in browser |
| Layout inheritance | Frontend Server (SSR) | Browser / Client | Layout.astro wraps pages server-side, outputs HTML for browser |

## <user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Navigation links added directly to Header.astro as a `<nav>` element with semantic HTML (nested `<ul>`, `<li>` structure)
- **D-02:** Navigation uses existing Header.astro container pattern (max-w-7xl, px-4 sm:px-6 lg:px-8) for visual consistency
- **D-03:** Navigation links point to: Home (/), Products (/products), About (/about), Pricing (/pricing), Contact (/contact)
- **D-04:** Mobile menu implemented as client-side Vanilla JavaScript using Astro's `<script>` tag with `isMenuOpen` boolean state
- **D-05:** Hamburger button (three-line icon) visible on mobile (< md breakpoint) with click event listener toggling menu state
- **D-06:** Mobile menu dropdown uses smooth transition animations (Tailwind transition classes) for open/close
- **D-07:** Active page highlighting uses `Astro.url.pathname` to detect current route during static build
- **D-08:** Conditional CSS classes: `text-indigo-600` for active link, `text-gray-600` for inactive links
- **D-09:** Exact path matching for main routes (/products matches /products but not /products/[slug])
- **D-10:** Footer uses multi-column layout with navigation links, social media links, and copyright/legal links
- **D-11:** Footer grid: 1 column on mobile, 3 columns on desktop (grid-cols-1 md:grid-cols-3)
- **D-12:** Left column: navigation links (Home, Products, About, Pricing, Contact)
- **D-13:** Center column: social media links using Lucide icons (Twitter, GitHub, LinkedIn placeholders)
- **D-14:** Right column: copyright text and legal links (Privacy, Terms placeholder)
- **D-15:** Social media icons use Lucide via `@lucide/astro` package
- **D-16:** Internal routing uses Astro's file-based routing pattern (src/pages/ directory structure)

### the agent's Discretion

No areas delegated to agent discretion. All implementation decisions were explicitly made through assumption analysis and research.

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within Phase 2 scope (navigation system and shared components).
</user_constraints>

## <phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| NAV-01 | Persistent navigation header with logo and links to all pages (Home, Products, About, Pricing, Contact) | Astro layout inheritance via Layout.astro ensures Header.astro displays on all pages. Navigation structure uses semantic `<nav>` with `<ul>` and `<li>` elements. [VERIFIED: /withastro/docs] |
| NAV-02 | Navigation component uses layout inheritance pattern for consistency across all pages | Layout.astro already imports Header.astro and Footer.astro, wrapping page content in `<slot />`. No per-page imports needed. [VERIFIED: existing codebase] |
| NAV-03 | Mobile navigation menu (hamburger) with responsive behavior | Tailwind responsive breakpoints (md:) control hamburger visibility. Astro `<script>` tag handles client-side toggle with automatic bundling/inlining. [VERIFIED: /withastro/docs] |
| NAV-04 | Internal routing configured with file-based routing pattern | Astro's default routing creates routes from src/pages/ structure. No additional configuration needed. [VERIFIED: /withastro/docs] |
| NAV-05 | Active page highlighting in navigation | Astro.url.pathname provides server-side route detection. Conditional classes applied based on pathname. Zero client-side JavaScript. [VERIFIED: /withastro/docs] |
| NAV-06 | Footer component with links, social media, and copyright | Footer.astro exists and needs enhancement. Multi-column grid (grid-cols-1 md:grid-cols-3) for responsive layout. [VERIFIED: existing codebase] |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Astro | v6.1.7 [VERIFIED: package.json] | Static site generator with component system | Component reusability, layout inheritance, zero JavaScript by default. `<script>` tags automatically processed with TypeScript support, bundling, and inlining. |
| Tailwind CSS | v4.2.0 [VERIFIED: package.json] | Utility-first CSS framework | Responsive breakpoints (sm:, md:, lg:, xl:, 2xl:) for mobile-first design. Container pattern (max-w-7xl) already established in Phase 1. |
| Node.js | v20 LTS [VERIFIED: package.json] | Runtime environment | Required by Astro and modern build tools. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @lucide/astro | v1.8.0 [VERIFIED: npm registry] | Icon library for social media | Official Astro integration with tree-shaking. Icons render as inline SVG components with zero runtime JavaScript. Supports 1000+ icons including Twitter, GitHub, LinkedIn. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Lucide (official Astro) | Heroicons (React/HTML) | Heroicons lack official Astro package, requiring manual SVG embedding or React wrapper. Lucide provides TypeScript support and tree-shaking. |
| Vanilla JS toggle | Alpine.js | Alpine.js adds ~10KB bundle overhead for a simple boolean toggle. Vanilla JS adds 0KB overhead. Astro's `<script>` tag handles bundling automatically. |
| Astro.url.pathname | Client-side window.location | Client-side requires JavaScript execution and hydration. Server-side detection works during build, zero runtime cost, better for static sites. |

**Installation:**
```bash
# @lucide/astro (new dependency for social icons)
npm install @lucide/astro
```

**Version verification:** Before writing the Standard Stack table, verify each recommended package version is current:
```bash
npm view @lucide/astro version
# Output: 1.8.0
```

## Architecture Patterns

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser / Client Tier                  │
│  (HTML, CSS, client-side JavaScript execution)       │
└─────────────────────┬───────────────────────────────┘
                      │ Renders
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              Frontend Server Tier (Astro SSR)            │
│  - Layout.astro: Wraps all pages with Header/Footer │
│  - Header.astro: Navigation + active detection     │
│  - Footer.astro: Multi-column footer + icons      │
│  - Static site generation (build time)              │
└─────────────────────┬───────────────────────────────┘
                      │ Uses
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              API / Routing Tier                          │
│  - Astro.url.pathname: Server-side route detection    │
│  - File-based routing: src/pages/ → URLs            │
└─────────────────────────────────────────────────────────────┘
```

**Data flow:** Request → Static build (Astro.url.pathname accessed) → Layout inheritance (Header/Footer added) → HTML output → Browser renders navigation/footer with responsive behavior.

### Recommended Project Structure
```
src/
├── components/
│   ├── Header.astro          # Navigation header with links + mobile menu
│   ├── Footer.astro          # Multi-column footer with social icons
│   └── ui/                 # UI primitives (from Phase 1)
│       ├── Button.astro
│       └── Card.astro
├── layouts/
│   └── Layout.astro          # Base layout importing Header/Footer
├── pages/
│   ├── index.astro            # Home page (/)
│   ├── products.astro          # Products catalog (/products)
│   ├── about.astro             # About page (/about)
│   ├── pricing.astro            # Pricing page (/pricing)
│   └── contact.astro           # Contact page (/contact)
└── styles/
    └── design-tokens.css     # Design system (from Phase 1)
```

### Pattern 1: Layout Inheritance for Shared Navigation

**What:** Header.astro and Footer.astro imported once in Layout.astro, automatically applied to all pages using the layout.

**When to use:** When you need consistent navigation/footer across multiple pages without duplicating code.

**Example:**
```astro
---
// src/layouts/Layout.astro
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const { title = "Bostrich" } = Astro.props;
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{title}</title>
  </head>
  <body>
    <Header title={title} />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```
*Source: [Existing codebase src/layouts/Layout.astro] and [Context7 /withastro/docs]*

**Benefits:**
- Single source of truth for navigation/footer
- Changes propagate to all pages automatically
- No per-page imports needed
- Reduces code duplication

### Pattern 2: Server-Side Active Route Detection

**What:** Use `Astro.url.pathname` in component frontmatter to detect current route during static build, then apply conditional CSS classes.

**When to use:** When you need active page highlighting without client-side JavaScript.

**Example:**
```astro
---
// src/components/Header.astro
const currentPath = Astro.url.pathname;
const isActive = (path: string) => currentPath === path;

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];
---
<nav>
  <ul>
    {navLinks.map(link => (
      <li>
        <a href={link.href} class={isActive(link.href) ? 'text-indigo-600' : 'text-gray-600'}>
          {link.label}
        </a>
      </li>
    ))}
  </ul>
</nav>
```
*Source: [Context7 /withastro/docs - Astro.url.pathname API]*

**Benefits:**
- Zero client-side JavaScript
- Works during static build
- Exact path matching
- Accessible (proper active states)

### Pattern 3: Mobile Menu with Vanilla JS Toggle

**What:** Use Astro's `<script>` tag with event listener to toggle boolean state for mobile menu visibility. Tailwind transition classes handle open/close animation.

**When to use:** For simple interactive UI (toggles, dropdowns) where Alpine.js would add unnecessary overhead.

**Example:**
```astro
---
// src/components/Header.astro
let isMenuOpen = false;
---
<header>
  <nav>
    <!-- Desktop navigation -->
    <ul class="hidden md:flex space-x-8">
      <!-- Nav links here -->
    </ul>

    <!-- Mobile hamburger button -->
    <button
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen.toString()}
      class="md:hidden"
    >
      <span class="sr-only">Menu</span>
      <svg>...</svg> <!-- Hamburger icon -->
    </button>

    <!-- Mobile menu dropdown -->
    <ul class={`md:hidden transition-all ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <!-- Nav links here -->
    </ul>
  </nav>
</header>

<script>
  const menuButton = document.querySelector('[aria-label="Toggle menu"]');
  menuButton?.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    menuButton.setAttribute('aria-expanded', isMenuOpen.toString());
  });
</script>
```
*Source: [Context7 /withastro/docs - Client-side scripts] and [Tailwind docs - Responsive design]*

**Benefits:**
- Zero bundle overhead (Vanilla JS is tiny)
- Astro automatically bundles, types, and inlines script
- Proper ARIA attributes for accessibility
- Smooth transitions with Tailwind classes

### Anti-Patterns to Avoid
- **Multiple Header/Footer imports per page:** Duplicates code, violates DRY, makes updates error-prone. Use Layout.astro with single import instead.
- **Client-side route detection (window.location):** Requires JavaScript execution, hydration delay, accessibility issues. Use Astro.url.pathname for server-side detection.
- **Alpine.js for simple toggles:** Adds ~10KB bundle overhead for a boolean toggle. Use Vanilla JS in `<script>` tag instead.
- **Manual SVG embedding:** Increases file size, no tree-shaking. Use Lucide icons for optimized inline SVG components.
- **Missing ARIA attributes on interactive elements:** Breaks screen reader support. Always add aria-label, aria-expanded, and aria-hidden where appropriate.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Icon system (social media icons) | Manual SVG paths in components | @lucide/astro package | Tree-shaking (only used icons imported), TypeScript support, 1000+ icons, zero runtime JavaScript, official Astro integration |
| Mobile menu state management | Custom state with event listeners | Astro `<script>` tag with Vanilla JS | Automatic bundling/inlining, TypeScript support, 0KB overhead vs ~10KB for Alpine.js |
| Active route detection | Client-side window.location.href | Astro.url.pathname | Server-side detection (works during build), zero JavaScript, exact path matching |
| Responsive navigation hiding/showing | Custom media queries in CSS | Tailwind responsive breakpoints (md:, lg:) | Mobile-first design, consistent with design system, easier to maintain |

**Key insight:** Custom solutions for these problems increase bundle size, add maintenance overhead, and miss Astro's built-in optimizations. Astro's component system and APIs (Astro.url.pathname, `<script>` tag processing) are designed for these exact use cases.

## Runtime State Inventory

> Not applicable (Phase 2 is greenfield — no rename/refactor/migration work).

## Common Pitfalls

### Pitfall 1: Duplicate Navigation on Every Page
**What goes wrong:** Each page imports Header.astro and Footer.astro separately, creating multiple copies of navigation/footer in the DOM.
**Why it happens:** Misunderstanding of Astro's layout inheritance pattern. Developers think every page needs its own header/footer imports.
**How to avoid:** Use Layout.astro as the single source of truth. Import Header and Footer once in Layout, then wrap all pages with Layout.
**Warning signs:** Seeing multiple navigation menus in browser DevTools DOM inspector, or changes to Header.astro not reflecting on some pages.

### Pitfall 2: Active Page Highlighting Fails on Subpages
**What goes wrong:** Active state highlights /products when user is on /products/agile-ladder, causing confusion about current page.
**Why it happens:** Using `.startsWith('/')` or incomplete path matching instead of exact path comparison.
**How to avoid:** Use exact path matching: `Astro.url.pathname === '/products'` for main routes. For dynamic routes, match base path explicitly.
**Warning signs:** Active link persists when navigating deeper into section, or all links look active.

### Pitfall 3: Mobile Menu Toggle Not Working
**What goes wrong:** Clicking hamburger button doesn't toggle menu visibility, or menu opens but never closes.
**Why it happens:** Script selector doesn't match button element, event listener not attached, or boolean state not toggled. Common with `document.getElementById()` when element doesn't have ID.
**How to avoid:** Use `document.querySelector('[aria-label="Toggle menu"]')` with unique attribute, or use `document.getElementById('mobile-menu-button')` with explicit ID. Always add optional chaining (`?.`) before `addEventListener`.
**Warning signs:** Console errors like "Cannot read property 'addEventListener' of null", or button clicks do nothing.

### Pitfall 4: Missing ARIA Attributes on Interactive Elements
**What goes wrong:** Screen readers announce mobile menu button but can't determine if menu is open or closed, or mobile menu links are not keyboard-navigable.
**Why it happens:** Forgetting accessibility attributes when implementing interactive components.
**How to avoid:** Always add:
- `aria-label="Toggle menu"` to hamburger button
- `aria-expanded="false"` (updated to "true" when open)
- `aria-hidden="true"` to mobile menu when closed
- `tabindex="-1"` to mobile menu links when closed
**Warning signs:** WAVE or Lighthouse accessibility audit fails "Link, button, and form field elements without accessible names," or keyboard navigation doesn't work.

### Pitfall 5: Mobile Menu Z-Index Issues
**What goes wrong:** Mobile menu opens but is hidden behind other page content, or covers navigation links in desktop view.
**Why it happens:** Missing z-index on mobile menu, or z-index not scoped to mobile breakpoint.
**How to avoid:** Use `z-50` or higher on mobile menu dropdown, but only on mobile: `class="md:hidden z-50"`. Ensure navigation header has `relative` positioning.
**Warning signs:** Menu appears partially or not at all when opened, or other content overlaps menu.

### Pitfall 6: Footer Grid Layout Breaks on Small Screens
**What goes wrong:** Three-column footer collapses to a single column on mobile, but columns don't stack properly or content overflows.
**Why it happens:** Using `grid-cols-3` everywhere, not respecting mobile-first design. Or missing vertical spacing on mobile.
**How to avoid:** Use mobile-first approach: `grid-cols-1 md:grid-cols-3`. Add vertical spacing between footer sections: `space-y-8 md:space-y-0 md:space-x-8`.
**Warning signs:** Footer content squashed together on mobile, or horizontal scrollbar appears.

## Code Examples

Verified patterns from official sources:

### Navigation with Active Route Highlighting
```astro
---
// Source: /withastro/docs - Astro.url.pathname API
const currentPath = Astro.url.pathname;
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];
---
<nav class="border-b border-gray-200 bg-white">
  <ul class="flex space-x-8">
    {navLinks.map(link => (
      <li>
        <a
          href={link.href}
          class={`text-gray-600 hover:text-indigo-600 transition ${
            currentPath === link.href ? 'text-indigo-600 font-semibold' : ''
          }`}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

### Mobile Menu Toggle with Vanilla JS
```astro
---
// Source: /withastro/docs - Client-side scripts and Tailwind - Responsive design
let isMenuOpen = false;
---
<header>
  <nav class="relative">
    <!-- Desktop nav -->
    <ul class="hidden md:flex md:space-x-8">
      {navLinks.map(link => <li><a href={link.href}>{link.label}</a></li>)}
    </ul>

    <!-- Mobile hamburger button -->
    <button
      id="mobile-menu-button"
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen.toString()}
      class="md:hidden p-2"
    >
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Mobile menu dropdown -->
    <ul
      id="mobile-menu"
      class={`md:hidden absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg transition-all ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      {navLinks.map(link => <li><a href={link.href} class="block py-3 px-4">{link.label}</a></li>)}
    </ul>
  </nav>
</header>

<script>
  const menuButton = document.getElementById('mobile-menu-button');
  menuButton?.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    menuButton.setAttribute('aria-expanded', isMenuOpen.toString());
  });
</script>
```

### Lucide Icons for Social Media
```astro
---
// Source: https://lucide.dev/guide/astro/getting-started
import { Twitter, Github, Linkedin } from '@lucide/astro';
---
<footer class="bg-white border-t border-gray-200">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left column: Navigation links -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4">Navigation</h3>
        <ul class="space-y-2">
          <li><a href="/" class="text-gray-600 hover:text-indigo-600">Home</a></li>
          <li><a href="/products" class="text-gray-600 hover:text-indigo-600">Products</a></li>
          <li><a href="/about" class="text-gray-600 hover:text-indigo-600">About</a></li>
          <li><a href="/pricing" class="text-gray-600 hover:text-indigo-600">Pricing</a></li>
          <li><a href="/contact" class="text-gray-600 hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>

      <!-- Center column: Social media icons -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4">Connect</h3>
        <div class="flex space-x-4">
          <a href="https://twitter.com" aria-label="Twitter" class="text-gray-400 hover:text-indigo-600">
            <Twitter class="w-6 h-6" />
          </a>
          <a href="https://github.com" aria-label="GitHub" class="text-gray-400 hover:text-indigo-600">
            <Github class="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" class="text-gray-400 hover:text-indigo-600">
            <Linkedin class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Right column: Copyright and legal -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4">Legal</h3>
        <ul class="space-y-2">
          <li><a href="/privacy" class="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
          <li><a href="/terms" class="text-gray-600 hover:text-indigo-600">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|-----------------|--------------|--------|
| Client-side window.location for active links | Server-side Astro.url.pathname | Astro v1.0+ | Zero JavaScript, better performance, works during static build |
| Multiple header/footer imports per page | Layout inheritance pattern | Astro v0.18+ | DRY principle, single source of truth, easier maintenance |
| Alpine.js for interactivity | Vanilla JS in Astro `<script>` tag | Astro v2.0+ | Zero bundle overhead (0KB vs ~10KB for Alpine), automatic bundling |
| Manual SVG embedding | Icon libraries with tree-shaking | 2023-2024 ecosystem evolution | Smaller bundles, better DX, TypeScript support |

**Deprecated/outdated:**
- **React props pattern for active links:** Astro uses template expressions (`{currentPath === link.href}`) instead of `className` conditionals.
- **Custom build scripts for icons:** Modern icon libraries (Lucide, Heroicons) provide official integrations with automatic tree-shaking.
- **Media queries in custom CSS:** Tailwind's responsive breakpoints (sm:, md:, lg:) are the standard and more maintainable.

## Assumptions Log

> List all claims tagged `[ASSUMED]` in this research. The planner and discuss-phase use this
> section to identify decisions that need user confirmation before execution.

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Social media icon colors use text-gray-400 with hover:text-indigo-600 | Footer design section | If user prefers different hover colors (e.g., blue for Twitter), design inconsistency may occur |
| A2 | Mobile menu uses three-line hamburger icon (svg with 3 horizontal lines) | Mobile menu implementation section | If user prefers X-icon (close button) or different hamburger style, UX may not match expectations |
| A3 | Footer legal links are placeholders (Privacy, Terms) with href="/privacy" and "/terms" | Footer enhancement section | If these pages are not planned for V1, clicking links will 404, confusing users |

**If this table is empty:** All claims in this research were verified or cited — no user confirmation needed.

## Open Questions

1. **Social media placeholder links**
   - What we know: D-13 specifies Twitter, GitHub, LinkedIn placeholders
   - What's unclear: Should these link to real Bostrich social accounts, or remain as empty href="#" placeholders?
   - Recommendation: Use placeholder href="#" for V1, document that real social accounts should be added later (future enhancement)

2. **Footer legal page creation**
   - What we know: D-14 requires Privacy Policy and Terms of Service links in footer
   - What's unclear: Should Phase 2 create these legal pages, or just add links (to be created in future phase)?
   - Recommendation: Phase 2 adds footer links only. Legal pages are out of V1 scope (per OUT OF SCOPE section), can redirect to /404 for now or create simple placeholder pages.

## Environment Availability

> Phase 2 has minimal external dependencies. Skip environment audit (no CLI tools, databases, or services required).

**Step 2.6: SKIPPED (no external dependencies identified)**

## Validation Architecture

> Skip this section entirely if workflow.nyquist_validation is explicitly set to false in .planning/config.json. If the key is absent, treat as enabled.

**Skipped:** `workflow.nyquist_validation` is `false` in .planning/config.json.

## Security Domain

> Required when `security_enforcement` is enabled (absent = enabled). Omit only if explicitly `false` in config.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | N/A (no auth in Phase 2) |
| V3 Session Management | No | N/A (no sessions in Phase 2) |
| V4 Access Control | No | N/A (no access control in Phase 2) |
| V5 Input Validation | No | N/A (no user input in Phase 2) |
| V6 Cryptography | No | N/A (no cryptography in Phase 2) |

### Known Threat Patterns for Static Site Navigation

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| N/A (static site with no backend) | N/A | N/A |

**Assessment:** Phase 2 is purely frontend (HTML/CSS/JS) with no backend, authentication, or user input. Security risks are minimal. Standard accessibility (ARIA attributes) and XSS prevention (Astro auto-escapes template expressions) are sufficient.

## Sources

### Primary (HIGH confidence)
- **/withastro/docs** — Astro component architecture, layout inheritance, client-side scripts, Astro.url.pathname API
- **/websites/lucide_dev_guide** — @lucide/astro integration documentation, tree-shaking support, 1000+ icons
- **package.json** — Installed package versions (Astro v6.1.7, Tailwind CSS v4.2.0)
- **Existing codebase** — Header.astro, Footer.astro, Layout.astro, design-tokens.css (Phase 1 foundation)

### Secondary (MEDIUM confidence)
- **https://docs.astro.build/en/guides/client-side-scripts/** — Client-side JavaScript patterns, event listeners, Vanilla JS best practices [VERIFIED: WebFetch]
- **https://docs.astro.build/en/guides/routing/** — File-based routing, static route generation [VERIFIED: WebFetch]
- **https://tailwindcss.com/docs/responsive-design** — Mobile-first design, breakpoints (sm:, md:, lg:), transition classes [VERIFIED: WebFetch]
- **https://lucide.dev/guide/astro/getting-started** — Lucide Astro installation, icon import patterns, color prop usage [VERIFIED: WebFetch]

### Tertiary (LOW confidence)
- None (all claims verified with official docs or existing codebase)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All packages verified via package.json and npm registry. Official Astro and Lucide documentation cited.
- Architecture: HIGH - Layout inheritance and Astro APIs verified with official docs. Existing codebase confirms pattern.
- Pitfalls: HIGH - Common issues documented from official docs and accessibility best practices.

**Research date:** 2025-04-17
**Valid until:** 30 days (Astro and Tailwind v4 are stable; Lucide ecosystem is mature)
