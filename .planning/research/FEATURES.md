# Feature Research

**Domain:** Satirical SaaS website (parody of enterprise software marketing)
**Researched:** 2026-04-17
**Confidence:** HIGH

Based on analysis of modern SaaS websites: Stripe, Vercel, Linear, and Notion — all recognized for excellent design and user experience in the SaaS space.

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = product feels incomplete or "broken."

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Hero section with clear value proposition** | First thing users see; establishes product identity and purpose | LOW | Strong headline, subheadline, primary CTA (Start/Deploy/Get Started), secondary CTA (Contact Sales/Learn More). All analyzed sites have this. |
| **Persistent navigation header** | Users need to navigate across sections without returning to home | LOW | Sticky or fixed header with logo, main navigation links, and login/signup buttons. Consistent across all pages. |
| **Responsive design** | Users access sites from mobile/tablet/desktop; broken mobile = unprofessional | MEDIUM | Mobile-optimized layouts, hamburger menu on small screens, touch-friendly elements. All modern SaaS sites are fully responsive. |
| **Product/service showcase section** | Users need to understand what you actually offer | LOW | Feature cards, product grid, or bento-style layout showing key offerings. Stripe uses bento boxes, Vercel uses product cards. |
| **Social proof section** | Users need trust signals to consider purchase/investment | LOW | Customer logos, testimonials, statistics ("Trusted by X companies," "Y users"). Present on all analyzed sites. |
| **About/Mission section** | Users want to understand company values and purpose | LOW | One-paragraph mission statement, company background, or philosophy. Critical for Bostrich's satire. |
| **Pricing page** | Users expect transparent pricing information | LOW | Tiered pricing (Free/Basic/Business/Enterprise), clear feature comparison table, prominent CTAs. |
| **Contact page** | Users need way to reach company for questions/support | LOW | Contact form, email, or sales inquiry option. Essential for "enterprise" feel. |
| **Footer with links** | Standard UX pattern; users expect to find links at bottom | LOW | Company links, legal pages, social media, copyright. Present on all SaaS sites. |
| **Consistent visual hierarchy** | Professional appearance requires thoughtful typography and spacing | MEDIUM | Clear H1/H2/H3 hierarchy, consistent spacing (8px/16px/32px grid), readable font sizes. Critical for "legitimate" appearance. |
| **Fast page load** | Users abandon slow sites; Google penalizes slow sites | MEDIUM | Optimized images, minimal JavaScript, efficient CSS. Essential for positive user experience. |
| **Professional imagery** | Stock photos or low-quality images scream amateur | MEDIUM | High-quality product photos, illustrations, or screenshots. Bostrich will use photos of actual ladders/ramps/etc. |
| **Internal linking/routing** | Users expect clicking navigation to work properly | LOW | All links should navigate to correct pages. Broken links feel like an unfinished product. |

### Differentiators (Competitive Advantage)

Features that set the product apart. Not required, but valuable.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Bento-grid layouts** | Modern, visually organized presentation of features/products | MEDIUM | Grid of irregularly-sized cards (popularized by Apple/Stripe). Very trendy in 2024-2026 SaaS design. |
| **Interactive demos/screenshots** | Shows product in action; helps users understand value | HIGH | Animated product tours, interactive screenshots, or embedded demos. Vercel and Linear do this well. |
| **Dark mode toggle** | User preference; shows technical sophistication | MEDIUM | Automatic or manual dark/light theme switching. Common in developer-focused SaaS. |
| **Micro-interactions** | Adds polish; feels premium and thoughtful | MEDIUM | Hover effects, scroll animations, subtle transitions. Increases perceived quality. |
| **Customer stories with quotes** | More compelling than logos; adds human element | LOW | Detailed case studies with quotes, metrics, and results. Stripe does this extensively. |
| **Feature comparison tables** | Helps users choose right tier; reduces sales friction | LOW | Side-by-side comparison of features across pricing tiers. Linear has excellent example. |
| **Animated statistics/counters** | Adds dynamism; reinforces social proof | LOW | Numbers that count up or animate when scrolled into view. "99.999% uptime" animations. |
| **Product-specific landing pages** | Allows deeper dive into each product offering | HIGH | Dedicated pages for each product with full marketing treatment (hero, features, pricing). Bostrich will do this for parody effect. |
| **Integrations/partners section** | Shows ecosystem; reduces perceived risk | LOW | Logos of tools/services that integrate. Not applicable to Bostrich but worth noting. |
| **Changelog/What's New section** | Shows active development; builds trust | LOW | Recent updates, new features, or announcements. Present on Linear and Vercel. |
| **Unique visual identity** | Brand recognition; memorable design | HIGH | Distinctive color palette, typography, or illustration style. Bostrich can create its own parody aesthetic. |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **E-commerce checkout functionality** | "Real" SaaS sites sell products | Adds complexity, payment processing, cart logic, state management | Bostrich is satirical — no purchasing needed. Explicitly out of scope. |
| **User accounts/authentication** | "Legitimate" sites have login | Requires backend, database, session management, security concerns | Bostrich is browse-only. No accounts needed. |
| **Content Management System (CMS)** | "Easy to update products" | Adds dependency, hosting complexity, learning curve | Static site with hardcoded content is simpler and sufficient for parody. |
| **Real-time search functionality** | "Users expect to search products" | Requires indexed data, search infrastructure, server-side processing | Simple catalog browse is adequate for 7 products. Can add later if needed. |
| **Blog section** | "SaaS sites have blogs" | Requires content creation, maintenance, can date quickly | Not needed for parody. Focus on core satire. |
| **Social media feeds** | "Modern sites show social posts" | Adds dependencies, API integrations, can break | Simple social media links in footer are sufficient. |
| **Live chat widgets** | "Support is expected" | Requires third-party service, adds cost, complexity | Contact form is sufficient for parody. |
| **Mobile apps** | "Serious products have apps" | Requires app development, app store management, significantly more work | Responsive web design covers mobile use case. |
| **A/B testing infrastructure** | "Optimize conversions" | Overkill for satire; adds analytics complexity | Static site doesn't need optimization. |

## Feature Dependencies

```
[Navigation structure]
    └──requires──> [Individual page templates]

[Hero section design system]
    ├──requires──> [Typography hierarchy]
    ├──requires──> [Color palette]
    └──requires──> [CTA component library]

[Product showcase]
    ├──requires──> [Product imagery]
    └──enhances──> [Pricing page]

[Pricing tiers]
    ├──requires──> [Feature comparison table]
    └──requires──> [Pricing page structure]

[Social proof section]
    ├──requires──> [Customer testimonials/logos]
    └──enhances──> [Hero section credibility]

[Responsive design]
    ├──requires──> [Mobile navigation component]
    └──requires──> [Responsive grid system]

[Product-specific landing pages]
    └──requires──> [Base product page template]
```

### Dependency Notes

- **Navigation structure requires individual page templates:** You can't build navigation without pages to link to. Pages must exist before navigation can point to them.

- **Hero section design system requires typography hierarchy and color palette:** A hero needs consistent heading sizes, colors, and spacing. These design tokens must be established first.

- **Product showcase requires product imagery:** Photos or illustrations of ladders, ramps, slides, etc. are essential. You can't showcase products without visuals.

- **Product showcase enhances pricing page:** Seeing products first makes pricing more meaningful. Users understand what they're "buying" before seeing costs.

- **Pricing tiers require feature comparison table and pricing page structure:** You can't display pricing without organizing features into tiers and building comparison layout.

- **Social proof section requires customer testimonials/logos:** Need content to display. Bostrich can create fictional testimonials for parody.

- **Social proof enhances hero section credibility:** Trust signals near the top of the page reinforce the main value proposition.

- **Responsive design requires mobile navigation component and responsive grid system:** Mobile needs hamburger menu; breakpoints need consistent grid behavior.

- **Product-specific landing pages require base product page template:** Don't build individual pages from scratch. Create reusable template, then customize for each product.

## MVP Definition

### Launch With (v1)

Minimum viable product — what's needed to validate the concept.

- [ ] **Home page with hero section** — Essential for first impression; establishes SaaS credibility. Includes value proposition, featured products teaser, and main CTAs.

- [ ] **Products catalog page** — Users need to see all offerings in one place. Simple grid with product cards showing name, description, and imagery.

- [ ] **Individual product pages (7 products)** — Parody effect is strongest when each product gets full landing page treatment. Each needs hero, features list, pricing tiers, and imagery.

- [ ] **About page with mission statement** — Critical for satire. Explains "mission" of democratizing verticality/agility with buzzwords.

- [ ] **Pricing page** — Tiered subscriptions for physical goods. Enhances absurdity when ladders have "Enterprise" tier.

- [ ] **Contact page** — Enterprise inquiry form. Completes the SaaS structure.

- [ ] **Navigation and routing** — Sticky header with links to all pages. Internal navigation must work.

- [ ] **Responsive design** — Mobile and desktop layouts. Must not break on small screens.

- [ ] **Product imagery** — Photos of ladders, ramps, slides, scaffolding, cliffs. High-quality, professional appearance.

- [ ] **Footer** — Standard footer with links, social media, copyright.

**Why these are essential:** All are table stakes features. Missing any would make the site feel incomplete and unprofessional. The parody only works if the site looks legitimate.

### Add After Validation (v1.x)

Features to add once core is working.

- [ ] **Social proof section (testimonials/logos)** — Can add fictional customer quotes and logos for enhanced parody. "Trusted by 98% of Fortune 100" type stats.

- [ ] **Micro-interactions and animations** — Add polish for premium feel. Hover effects on cards, scroll animations, smooth transitions.

- [ ] **Changelog/What's New** — Fake announcements about new products or features. "Cliff management 2.0 released."

- [ ] **Feature comparison tables on product pages** — Deepen the absurdity with detailed technical comparisons between ladder types.

### Future Consideration (v2+)

Features to defer until product-market fit is established.

- [ ] **Interactive product tours** — Animated walkthroughs of ladders/ramps as if they were software features.

- [ ] **Dark mode toggle** — Nice-to-have but not essential for satire.

- [ ] **Blog/News section** — Satirical articles about verticality, offboarding, etc. "5 Tips for Better Cliff Management."

- [ ] **Search functionality** — Only useful if product catalog expands significantly.

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Home page hero section | HIGH | LOW | P1 |
| Navigation and routing | HIGH | LOW | P1 |
| Products catalog page | HIGH | LOW | P1 |
| Individual product pages (7) | HIGH | MEDIUM | P1 |
| About page | HIGH | LOW | P1 |
| Pricing page | HIGH | LOW | P1 |
| Contact page | MEDIUM | LOW | P1 |
| Responsive design | HIGH | MEDIUM | P1 |
| Product imagery | HIGH | MEDIUM | P1 |
| Footer | MEDIUM | LOW | P1 |
| Social proof section | MEDIUM | MEDIUM | P2 |
| Micro-interactions/animations | MEDIUM | MEDIUM | P2 |
| Changelog/What's New | LOW | LOW | P2 |
| Dark mode toggle | LOW | MEDIUM | P3 |
| Search functionality | LOW | HIGH | P3 |
| Interactive product tours | LOW | HIGH | P3 |
| Blog/News section | LOW | MEDIUM | P3 |

**Priority key:**
- P1: Must have for launch (table stakes)
- P2: Should have, add when possible (differentiators)
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Stripe | Vercel | Linear | Bostrich Approach |
|---------|--------|--------|--------|-------------------|
| Hero section | Large, wave graphics, dual CTAs | Bold typography, code snippets, dual CTAs | Product screenshots in hero, dual CTAs | SaaS-style hero with absurd tagline ("Scalable solutions to take your business to the next level") |
| Product showcase | Bento grid layout | Product cards with icons | Product features as workflow sections | Product cards with photos of ladders/ramps/etc. |
| Social proof | Customer logos + stats | Customer logos + metrics | Customer logos + quotes | Fake customer logos and satirical quotes |
| Pricing | Simple tiers, feature comparison | Simple tiers, feature comparison | Detailed comparison table | Absurd tiers (Free/Pro/Enterprise for ladders) |
| Navigation | Multi-level dropdown | Mega menu with categories | Simple top-level links | Simple top-level links (Home, Products, About, Pricing, Contact) |
| Visual style | Blue/indigo, clean, minimal | Black/white/contrast, tech-focused | Dark theme default, purple accents | Clean, minimal, Stripe/Vercel-inspired aesthetic |
| About page | Company story, values | Company overview, careers | Mission, team, method | Satirical mission about democratizing verticality |

**Key insight:** All four competitors use similar patterns despite being different types of SaaS (payments, infrastructure, productivity, workspace). This confirms the table stakes analysis.

## Sources

- **Stripe.com** — Premium SaaS design example, analyzed hero section, product showcases, customer stories, pricing patterns. HIGH confidence (direct observation).
- **Vercel.com** — Modern developer-focused SaaS, studied navigation structure, product cards, clean typography, visual hierarchy. HIGH confidence (direct observation).
- **Linear.app** — Productivity SaaS with excellent UX, analyzed product pages, pricing comparison tables, dark theme, feature organization. HIGH confidence (direct observation).
- **Notion.so** — Workspace SaaS, studied bento-grid layouts, customer testimonials, feature showcases, responsive design. HIGH confidence (direct observation).
- **Awwwards.com/saas** — Directory of award-winning SaaS sites, reviewed patterns across multiple modern SaaS designs. MEDIUM confidence (survey of 10+ sites).

**Confidence Assessment:**
- Table stakes: HIGH — observed across all analyzed sites
- Differentiators: HIGH — patterns consistent across top-tier SaaS
- Anti-features: HIGH — justified by project constraints and parody nature
- Dependencies: HIGH — logical relationships confirmed by site structures
- MVP definition: HIGH — based on PROJECT.md requirements and table stakes analysis

---
*Feature research for: Satirical SaaS website (Bostrich)*
*Researched: 2026-04-17*
