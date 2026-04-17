# Phase 4: UI Design Contract — Individual Product Pages

**Created:** 2026-04-17
**Status:** Design Contract

## Visual Direction

**Theme:** Enterprise SaaS satire with Stripe/Vercel aesthetic applied to literal physical goods
**Tone:** Deadpan presentation of absurd subjects through polished SaaS design patterns
**Visual Language:** Clean, minimal, high-contrast typography with subtle indigo accent

## Page 1: Products Catalog Page (`/products`)

### Purpose
Display all 7 products in a grid layout for easy browsing and navigation to individual product pages.

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ Page Header: "Products"                                    │
│                                                             │
│ Grid Layout (1 col mobile, 3 cols desktop)                  │
│                                                             │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│ │ [Image]      │  │ [Image]      │  │ [Image]      │      │
│ │ Product Name │  │ Product Name │  │ Product Name │      │
│ │ Tagline      │  │ Tagline      │  │ Tagline      │      │
│ │ [Learn More] │  │ [Learn More] │  │ [Learn More] │      │
│ └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│ │ [Image]      │  │ [Image]      │  │ [Image]      │      │
│ │ Product Name │  │ Product Name │  │ Product Name │      │
│ │ Tagline      │  │ Tagline      │  │ Tagline      │      │
│ │ [Learn More] │  │ [Learn More] │  │ [Learn More] │      │
│ └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│ ┌──────────────┐                                          │
│ │ [Image]      │                                          │
│ │ Product Name │                                          │
│ │ Tagline      │                                          │
│ │ [Learn More] │                                          │
│ └──────────────┘                                          │
└─────────────────────────────────────────────────────────────┘
```

### Components

**Page Header**
- Text: "Products"
- Style: `text-4xl md:text-6xl font-bold text-gray-900`
- Alignment: Centered
- Spacing: `mb-12`

**Product Grid**
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

**Product Card**
- Container: `bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition`
- Image:
  - Width: `w-full h-48 object-cover rounded-lg mb-4`
  - Format: WebP or JPG
  - Alt text: Product-specific description
- Product Name:
  - Style: `text-2xl font-bold text-gray-900`
  - Spacing: `mb-2`
- Tagline:
  - Style: `text-lg text-indigo-600 font-medium`
  - Spacing: `mb-4`
- "Learn More" Link:
  - Text: "Learn More →"
  - Style: `text-indigo-600 font-medium hover:text-indigo-700`
  - Alignment: Left-aligned

## Page 2: Individual Product Page (`/products/[slug]`)

### Purpose
Comprehensive product landing page with SaaS-style layout featuring hero section, features list, product imagery, and pricing tiers.

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ Hero Section (2-column layout on desktop)                   │
│ ┌──────────────────┐  ┌────────────────────────────────┐  │
│ │ [Large Image]    │  │ Product Name                   │  │
│ │                  │  │ Tagline (indigo)               │  │
│ │                  │  │ Description                    │  │
│ │                  │  │ [CTA Button]                  │  │
│ └──────────────────┘  └────────────────────────────────┘  │
│                                                             │
│ Features Section                                            │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Heading: "Features"                                     │ │
│ │                                                         │ │
│ │ Features List (2-column grid on desktop)                │ │
│ │ ┌───────────────┐  ┌───────────────┐                 │ │
│ │ │ ✓ Feature 1   │  │ ✓ Feature 2   │                 │ │
│ │ └───────────────┘  └───────────────┘                 │ │
│ │ ┌───────────────┐  ┌───────────────┐                 │ │
│ │ │ ✓ Feature 3   │  │ ✓ Feature 4   │                 │ │
│ │ └───────────────┘  └───────────────┘                 │ │
│ │ ┌───────────────┐  ┌───────────────┐                 │ │
│ │ │ ✓ Feature 5   │  │ ✓ Feature 6   │                 │ │
│ │ └───────────────┘  └───────────────┘                 │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ Pricing Section                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Heading: "Pricing"                                    │ │
│ │                                                         │ │
│ │ Pricing Grid (4-column grid on desktop)                 │ │
│ │ ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐     │ │
│ │ │ Free   │  │ Basic  │  │Business│  │Enterprise│    │ │
│ │ │ [3 rungs]│ │ [5 rungs]│ │[8 rungs]│ │[12+ rungs]│  │ │
│ │ │        │  │        │  │✓ Rec   │  │        │     │ │
│ │ │Features│  │Features│  │Features│  │Features│     │ │
│ │ │  ✓ f1  │  │  ✓ f1  │  │  ✓ f1  │  │  ✓ f1  │     │ │
│ │ │  ✓ f2  │  │  ✓ f2  │  │  ✓ f2  │  │  ✓ f2  │     │ │
│ │ │  ✓ f3  │  │  ✓ f3  │  │  ✓ f3  │  │  ✓ f3  │     │ │
│ │ │  ✓ f4  │  │  ✓ f4  │  │  ✓ f4  │  │  ✓ f4  │     │ │
│ │ │        │  │        │  │        │  │        │     │ │
│ │ │[Get    │  │[Get    │  │[Get    │  │[Contact│     │ │
│ │ │Started]│  │Started]│  │Started]│  │Sales]   │     │ │
│ │ └────────┘  └────────┘  └────────┘  └────────┘     │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Components

**Hero Section**
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24`
- Layout: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`

**Hero Image**
- Width: `w-full h-96 object-cover rounded-lg`
- Format: WebP or JPG
- Alt text: Product-specific description
- Spacing: `mb-6 lg:mb-0`

**Hero Content**
- Product Name:
  - Style: `text-4xl md:text-5xl font-bold text-gray-900`
  - Spacing: `mb-4`
- Tagline:
  - Style: `text-2xl text-indigo-600 font-medium`
  - Spacing: `mb-6`
- Description:
  - Style: `text-lg text-gray-600 leading-relaxed`
  - Spacing: `mb-8`
- CTA Button:
  - Text: "Get Started"
  - Style: `bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700`
  - Alignment: Left-aligned

**Features Section**
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24`
- Section Heading:
  - Text: "Features"
  - Style: `text-3xl md:text-4xl font-bold text-gray-900`
  - Alignment: Centered
  - Spacing: `mb-12`

**Features Grid**
- Layout: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Max width: `max-w-4xl mx-auto`

**Feature Item**
- Container: `flex items-start`
- Checkmark: `text-indigo-600 mr-3 text-2xl font-bold` (✓)
- Feature Text: `text-lg text-gray-700 font-medium`

**Pricing Section**
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24`
- Section Heading:
  - Text: "Pricing"
  - Style: `text-3xl md:text-4xl font-bold text-gray-900`
  - Alignment: Centered
  - Spacing: `mb-12`

**Pricing Grid**
- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`

**Pricing Card**
- Base Style: `border border-gray-200 rounded-lg p-6 flex flex-col`
- Recommended Style (Business tier): `border-2 border-indigo-600`
- Badge (Recommended):
  - Text: "Recommended"
  - Style: `bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full mb-4 inline-block`

**Pricing Card Content**
- Tier Name:
  - Style: `text-xl font-bold text-gray-900 mb-2 capitalize`
- Price/Description:
  - Style: `text-3xl font-extrabold text-gray-900 mb-4`
- Features List:
  - Container: `space-y-3 flex-1`
  - Item: `flex items-center text-gray-600`
  - Checkmark: `text-indigo-600 mr-2` (✓)
- CTA Button:
  - Text: "Get Started" (Free/Basic/Business) or "Contact Sales" (Enterprise)
  - Style: `w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700`
  - Enterprise Style: `bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50`

## Responsive Breakpoints

- **Mobile (< 640px):** Single column layout, stacked hero section
- **Tablet (640px - 1024px):** 2-column grid for product cards, features, and pricing
- **Desktop (≥ 1024px):** 3-column grid for product cards, 2-column hero layout, 4-column pricing

## Color Palette

All colors use design tokens from `src/styles/design-tokens.css`:
- Text Primary: `gray-900` (#18181b)
- Text Secondary: `gray-600` (#52525b)
- Accent: `indigo-600` (#4f46e5)
- Accent Hover: `indigo-700` (#4338ca)
- Background: `gray-50` (#fafafa)
- Surface: `white`
- Border: `gray-200` (#e4e4e7)

## Typography

- Font Family: `Inter, system-ui, sans-serif` (from design tokens)
- Hero Headings: `text-4xl md:text-6xl font-bold`
- Section Headings: `text-3xl md:text-4xl font-bold`
- Card Headings: `text-xl md:text-2xl font-bold`
- Body Text: `text-base md:text-lg`
- Small Text: `text-sm`

## Spacing

- Section Padding: `py-16 md:py-24`
- Component Padding: `p-6` for cards
- Element Spacing: `mb-2, mb-4, mb-6, mb-8, mb-12` for hierarchy
- Gap: `gap-6, gap-8, gap-12` for grid layouts

## Visual Hierarchy

1. **Page Title** (largest, centered): Products / Product Name
2. **Section Headings** (large, centered): Features, Pricing
3. **Card Headings** (medium): Tier names, Product names
4. **Body Text** (small): Descriptions, features
5. **CTAs** (prominent): Indigo buttons with hover states
6. **Accent Text** (medium, colored): Taglines, checkmarks

## Interactive States

- **Hover on Product Cards:** `hover:shadow-md` transition
- **Hover on Links:** `hover:text-indigo-700`
- **Hover on Buttons:** `hover:bg-indigo-700` (or `hover:bg-indigo-50` for outline buttons)
- **Transition Speed:** `transition` for smooth hover effects

## Accessibility

- **Contrast:** All text meets WCAG AA (4.5:1 for text)
- **Alt Text:** All images have descriptive alt text
- **Semantic HTML:** Proper heading hierarchy (h1 → h2 → h3)
- **Focus States:** Links and buttons have visible focus rings (indigo-600)
- **Keyboard Navigation:** Logical tab order with visible focus indicators

## Performance

- **Image Format:** WebP with JPEG fallback
- **Image Sizing:** Width and height attributes to prevent CLS
- **Lazy Loading:** Non-hero images use `loading="lazy"`
- **Hero Images:** Use `fetchpriority="high"` (not lazy loaded)
- **Font Loading:** `font-display: swap` (configured in Layout.astro)

## Implementation Notes

1. **Dynamic Routing:** Product pages use Astro's `[slug].astro` pattern with `getStaticPaths()`
2. **Product Data:** Images added to `src/lib/data.ts` Product interface with `imageUrl` field
3. **Image Source:** Use free placeholder images from Unsplash or similar service
4. **Static Generation:** All pages generated at build time for optimal performance
5. **Reusability:** Product card component reused across catalog and individual pages (optional, can inline)

## Reference Patterns

From Phase 3 (Core Pages):
- **Pricing Table:** Use grid layout from `src/pages/pricing.astro`
- **Featured Products:** Use card layout from `src/pages/index.astro`
- **Layout Pattern:** Use Layout.astro with title/description props
- **Container Pattern:** Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for all sections

---

*UI Design Contract created for Phase 4: Individual Product Pages*
*Reference: STRIPE aesthetic with indigo accent, minimalist SaaS parody*
