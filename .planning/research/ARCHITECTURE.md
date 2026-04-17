# Architecture Research

**Domain:** Static SaaS Website (Satire)
**Researched:** 2025-04-17
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      Presentation Layer                     │
│                    (Static HTML/CSS/JS)                    │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │   Home   │  │ Products │  │ About    │  │ Pricing  │  │
│  │   Page   │  │   Page   │  │   Page   │  │   Page   │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       │            │            │            │            │
│       └────────────┴────────────┴────────────┘            │
│                         │                                 │
│  ┌────────────────────▼─────────────────────────────┐   │
│  │              Shared Components Layer               │   │
│  │  (Navigation, Footer, Button, Card, Badge, etc.) │   │
│  └────────────────────┬─────────────────────────────┘   │
│                         │                                 │
├────────────────────────┼─────────────────────────────────┤
│              Data Layer (Static Product Data)             │
│  ┌───────────────────────────────────────────────────┐  │
│  │     Product definitions (hardcoded arrays)        │  │
│  │     No database, no API calls                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Page Components** | Render specific routes with unique layouts, handle page-specific content and SEO | `.astro` or `.tsx` files in `src/pages/`, use layouts for shared structure |
| **Shared Components** | Reusable UI elements used across multiple pages (buttons, cards, navigation) | `.astro` or `.tsx` files in `src/components/`, accept props for customization |
| **Layouts** | Define shared UI structure (header, footer, navigation) for multiple pages | `.astro` files in `src/layouts/`, wrap page content with `<slot />` |
| **Product Data** | Static product definitions with buzzword descriptions, metadata, and image paths | TypeScript arrays or JSON files in `src/data/` or `src/lib/` |
| **Navigation** | Handle internal routing, highlight active pages, provide mobile menu toggle | React or Astro component with conditional rendering for mobile/desktop |
| **Asset Management** | Optimize images, generate responsive variants, manage fonts and icons | Use framework's image component (Astro `<Image />` or Next.js `<Image />`) |

## Recommended Project Structure

```
src/
├── pages/              # Route definitions (file-based routing)
│   ├── index.astro     # Home page
│   ├── products.astro  # Products catalog page
│   ├── products/       # Individual product pages
│   │   ├── [slug].astro
│   ├── about.astro     # About page
│   ├── pricing.astro   # Pricing page
│   └── contact.astro   # Contact page
├── components/         # Reusable UI components
│   ├── ui/             # Base UI primitives (buttons, cards, badges)
│   │   ├── button.astro
│   │   ├── card.astro
│   │   ├── badge.astro
│   │   └── pricing-table.astro
│   ├── layout/         # Layout-specific components
│   │   ├── header.astro
│   │   ├── footer.astro
│   │   └── navigation.astro
│   └── product/        # Product-specific components
│       ├── product-card.astro
│       ├── product-hero.astro
│       └── product-features.astro
├── layouts/            # Page layouts
│   ├── base.astro      # Root layout (HTML structure, global styles)
│   └── page.astro     # Standard page layout (header, footer)
├── lib/                # Utility functions and data
│   ├── data.ts         # Product data definitions
│   ├── constants.ts    # Site constants (navigation, SEO metadata)
│   └── utils.ts        # Helper functions (formatting, etc.)
├── styles/             # Global styles and CSS
│   └── global.css      # Global CSS, Tailwind directives
└── assets/             # Static assets (optimized at build time)
    ├── images/         # Product images, logos
    └── fonts/          # Custom fonts (if any)

public/                 # Public static assets (not processed by build)
├── favicon.ico
├── robots.txt
└── images/             # Unprocessed images, SVGs

astro.config.mjs        # Astro configuration
tailwind.config.mjs     # Tailwind CSS configuration
```

### Structure Rationale

- **`src/pages/`:** File-based routing maps directory structure to URLs directly. Product pages use dynamic routes `[slug].astro` with `getStaticPaths()` for static generation.
- **`src/components/`:** Separated by type: `ui/` for base primitives, `layout/` for navigation components, `product/` for product-specific displays. This follows the component organization pattern from modern SaaS sites.
- **`src/layouts/`:** Shared page structure. `base.astro` provides HTML skeleton and global styles. `page.astro` wraps content with header/footer for standard pages.
- **`src/lib/`:** Static data and constants. Product data lives here as hardcoded arrays since there's no database. This separation makes it easy to update product information without touching components.
- **`src/assets/`:** Images in this folder get automatic optimization (resizing, format conversion) at build time using Astro's `<Image />` component.
- **`public/`:** Static files served as-is without processing. Use for favicon, robots.txt, and assets that don't need optimization.

## Architectural Patterns

### Pattern 1: File-Based Routing with Static Generation

**What:** Use the static site generator's file-based routing to map file paths to URLs, with `getStaticPaths()` for dynamic routes.

**When to use:** When you need multiple similar pages (like product pages) that share structure but have different content.

**Trade-offs:**
- **Pros:** No server needed, optimal performance, SEO-friendly, simple deployment
- **Cons:** Requires build step when adding new products, no dynamic content updates

**Example:**
```astro
---
// src/pages/products/[slug].astro
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/base.astro';

// Generate static pages for each product
export async function getStaticPaths() {
  const products = [
    { id: 'ladder', name: 'Ladder', slug: 'ladder' },
    { id: 'ramp', name: 'Ramp', slug: 'ramp' },
    // ... more products
  ];

  return products.map(product => ({
    params: { slug: product.slug },
    props: { product }
  }));
}

const { product } = Astro.props;
---

<BaseLayout title={product.name}>
  <h1>{product.name}</h1>
  <!-- Product content -->
</BaseLayout>
```

### Pattern 2: Component Composition with Props

**What:** Build complex UIs by composing smaller, reusable components that accept props for customization.

**When to use:** When multiple pages share similar UI patterns but need different content or styling.

**Trade-offs:**
- **Pros:** Consistent design, DRY code, easier maintenance, better testing
- **Cons:** More files, initial setup overhead

**Example:**
```astro
---
// src/components/ui/card.astro
const { title, description, image, featured = false } = Astro.props;
---

<article class={`card ${featured ? 'card--featured' : ''}`}>
  <div class="card__image">
    <Image src={image} alt={title} width={400} height={300} />
  </div>
  <div class="card__content">
    <h2 class="card__title">{title}</h2>
    <p class="card__description">{description}</p>
  </div>
</article>
```

### Pattern 3: Mobile-First Responsive Design

**What:** Design for mobile screens first, then add progressive enhancements for larger screens using Tailwind CSS breakpoints.

**When to use:** For all responsive web designs. This is the standard approach for modern SaaS sites.

**Trade-offs:**
- **Pros:** Better mobile experience, simpler CSS, progressive enhancement
- **Cons:** Requires planning content hierarchy for mobile

**Example:**
```astro
---
// Mobile-first: unprefixed classes = mobile styles
// sm:, md:, lg:, xl: = larger screens
---
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8">
  {products.map(product => (
    <ProductCard product={product} />
  ))}
</section>

<nav class="flex flex-col md:flex-row gap-4 md:gap-8">
  <a href="/products" class="text-sm md:text-base">Products</a>
  <a href="/pricing" class="text-sm md:text-base">Pricing</a>
</nav>
```

### Pattern 4: Layout Inheritance

**What:** Use nested layouts to provide shared structure across multiple pages. Layouts wrap page content with shared UI elements.

**When to use:** When multiple pages share common elements like navigation, footers, or sidebars.

**Trade-offs:**
- **Pros:** DRY code, consistent structure, easy to update shared elements
- **Cons:** Can be confusing with deeply nested layouts

**Example:**
```astro
---
// src/layouts/base.astro
import '../styles/global.css';
const { title = 'Bostrich' } = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

---

// src/layouts/page.astro
import BaseLayout from './base.astro';
import Header from '../components/layout/header.astro';
import Footer from '../components/layout/footer.astro';
---
<BaseLayout title={title}>
  <Header />
  <main class="main-content">
    <slot />
  </main>
  <Footer />
</BaseLayout>

---

// src/pages/about.astro
import PageLayout from '../layouts/page.astro';
---
<PageLayout title="About - Bostrich">
  <h1>About Us</h1>
  <p>We democratize verticality.</p>
</PageLayout>
```

## Data Flow

### Static Data Flow

```
[Product Data Array]
    ↓ (hardcoded in src/lib/data.ts)
[Page Component] ←───┐
    ↓ (maps data)      │
[Product Cards]        │
    ↓ (render)         │
[HTML Output]         │
    ↓                 │
[Static Build]        │
    ↓                 │
[Deployed Files]      │
                      │
[User Request] ───────┘
    ↓
[Serve Static HTML]
```

### Navigation Flow

```
[User Clicks Link]
    ↓
[Browser Request]
    ↓
[Static File Server]
    ↓
[Returns HTML File]
    ↓
[Browser Renders]
    ↓
[User Sees Page]
```

### Key Data Flows

1. **Product Catalog → Product Pages:** Product data defined in `src/lib/data.ts` flows to Products page (catalog view) and individual product pages via props. No database queries, just static array iteration.
2. **Navigation State:** Navigation component receives current route (via Astro's `Astro.url.pathname` or Next.js's `usePathname`) to highlight active links. No client-side state management needed.
3. **Image Optimization:** Images in `src/assets/` are imported into components and processed by `<Image />` component at build time, generating optimized responsive variants with automatic `srcset`.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1k pages | Static architecture is ideal. Build times remain fast. No changes needed. |
| 1k-10k pages | Build times increase. Consider incremental builds or splitting into multiple builds. Product data still manageable as arrays. |
| 10k+ pages | Consider switching to a CMS or headless CMS. Static generation still works but build optimization becomes critical. |

### Scaling Priorities

1. **First bottleneck:** Build time when adding products. With static generation, each new product adds build overhead. Mitigation: Use incremental builds, parallelize static generation, or switch to on-demand rendering for rarely-accessed pages.
2. **Second bottleneck:** Image optimization. With many product images, build times increase significantly. Mitigation: Pre-optimize images, use CDN for delivery, or use placeholder generation for non-critical images.

## Anti-Patterns

### Anti-Pattern 1: Component Files with Mixed Responsibilities

**What people do:** Put data fetching, business logic, and presentation all in a single component file.

**Why it's wrong:** Makes components hard to test, hard to reuse, and difficult to maintain. For static sites, this also bloats build time.

**Do this instead:** Separate data into `src/lib/data.ts`, keep components focused on presentation only.

### Anti-Pattern 2: Hardcoding Navigation Links in Every Page

**What people do:** Manually add navigation links to every page component or layout.

**Why it's wrong:** Inconsistent navigation, hard to update when adding/removing pages, breaks DRY principle.

**Do this instead:** Create a single Navigation component that accepts a routes array from `src/lib/constants.ts`.

### Anti-Pattern 3: Skipping Mobile Optimization

**What people do:** Design for desktop first, then try to make it work on mobile as an afterthought.

**Why it's wrong:** Poor mobile experience, harder to implement, often requires redesign. Modern SaaS sites are mobile-first by default.

**Do this instead:** Always design mobile-first using unprefixed Tailwind classes, then enhance with breakpoint prefixes.

### Anti-Pattern 4: Ignoring Image Optimization

**What people do:** Use standard `<img>` tags with full-resolution images.

**Why it's wrong:** Slow page loads, poor mobile experience, wasted bandwidth. Vercel/Stripe aesthetics demand fast loading.

**Do this instead:** Always use the framework's optimized image component (Astro `<Image />` or Next.js `<Image />`) with responsive widths.

### Anti-Pattern 5: Hardcoding Page URLs

**What people do:** Hardcode URLs like `href="/products/ladder"` throughout the codebase.

**Why it's wrong:** Breaks if routing changes, inconsistent URLs, hard to maintain.

**Do this instead:** Define routes in `src/lib/constants.ts` and import them where needed, or use the framework's `<Link />` component.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| **Vercel/Netlify Hosting** | Static deployment with automatic HTTPS | Deploy `dist/` or `out/` folder. No runtime needed. |
| **Google Analytics** | Script injection in base layout | Add tracking script to `src/layouts/base.astro` in `<head>` section. |
| **Cloudinary/Image CDN** | Optional for image delivery | If product images are hosted externally, use CDN URLs. Otherwise, use local optimization. |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| **Page Components ↔ Shared Components** | Props (one-way data flow) | Pages pass data to components via props. No two-way binding needed for static sites. |
| **Pages ↔ Data Layer** | Direct import | Pages import data arrays from `src/lib/data.ts`. No API calls. |
| **Components ↔ Layouts** | Slots (Astro) or children (React) | Layouts define structure, pages fill content via slots. |

## Recommended Build Order

Based on dependencies between components, here's the suggested build order:

1. **Phase 1: Foundation**
   - Set up project structure
   - Configure Tailwind CSS
   - Create base layout with global styles
   - Set up data structures in `src/lib/data.ts`

2. **Phase 2: Shared Components**
   - Build base UI primitives (Button, Card, Badge)
   - Create navigation components (Header, Footer, Navigation)
   - Implement page layout wrapper

3. **Phase 3: Page Components**
   - Build Home page (hero, featured products)
   - Create Products catalog page
   - Implement individual product pages
   - Build About, Pricing, Contact pages

4. **Phase 4: Refinement**
   - Add responsive design adjustments
   - Optimize images
   - Implement accessibility features
   - Add animations and polish

**Rationale:** Foundation first ensures consistent design system. Shared components are needed by all pages. Individual pages can be built in any order after shared components exist. Refinement is last to avoid rework.

## Sources

- **Astro Documentation** - Official routing and static site generation guides (HIGH confidence)
- **Next.js Documentation** - Static export configuration and patterns (HIGH confidence)
- **Tailwind CSS Documentation** - Responsive design and utility classes (HIGH confidence)
- **shadcn/ui Documentation** - Component organization patterns (HIGH confidence)
- **Vercel Design Guidelines** - Modern SaaS aesthetic principles (MEDIUM confidence - observational)

---
*Architecture research for: Static SaaS Website (Bostrich)*
*Researched: 2025-04-17*
