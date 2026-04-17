# Bostrich

## What This Is

A satirical SaaS website at bostri.ch that uses corporate tech buzzwords to describe ordinary physical goods. The humor comes from the deadpan presentation of literal products—ladders, ramps, slides—through the lens of enterprise software marketing, with "features," "pricing tiers," and serious aesthetics applied to absurd subjects.

## Core Value

Deliver absurd humor through the stark contrast between polished SaaS aesthetics and literal physical goods with buzzword descriptions.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Home page with featured products and SaaS-style hero section
- [ ] Products catalog page displaying all 7+ products
- [ ] Individual product pages (SaaS-style: hero, features, pricing tiers)
- [ ] About page with "mission statement" about democratizing verticality/agility
- [ ] Pricing page with tiered subscriptions for physical goods
- [ ] Contact page for enterprise inquiries
- [ ] Modern SaaS design system (clean, minimal, whitespace-heavy, Stripe/Vercel aesthetic)
- [ ] Responsive design works on mobile and desktop
- [ ] Deployed live at bostri.ch
- [ ] All navigation links and internal routing works
- [ ] Initial 7 products with buzzword descriptions (ladders, ramps, slides, cliffs, scaffolding)
- [ ] Product imagery/photos displayed on each page

### Out of Scope

- **E-commerce purchasing** — Site is for browsing/humor only, not selling
- **User accounts/authentication** — No login or user sessions needed
- **Dynamic content management** — Static site, product content hardcoded
- **Content management system (CMS)** — Products edited in code, not through dashboard
- **Mobile app** — Web-only, responsive design only
- **Search functionality** — Simple catalog browse only

## Context

This is a parody project targeting people in tech who recognize the absurdity of enterprise SaaS marketing language. The humor works because it takes the serious, polished aesthetics of modern software companies and applies them literally to physical goods—creating "scalable solutions" for ladders and "offboarding accelerators" for slides. The site should feel like a legitimate, well-designed SaaS product until the visitor realizes what they're actually looking at.

Initial products (with potential to expand):
- **Ladders** — "Scalable solutions to take your business to the next level"
- **Agile ladders** — "Scalable solutions for agile startups" (fewer rungs)
- **Ramps** — "Offramps for your exit strategy"
- **Slides** — "Offboarding accelerators"
- **Thin slides** — "Offboarding accelerators for lean startups"
- **Cliffs** — "Cliff-management for executives and non-executives alike"
- **Scaffolding** — "Scaffolding to assist with growth hacking"

## Constraints

- **Domain**: Must deploy to bostri.ch
- **V1 completion criteria**: Site is live and deployed at bostri.ch
- **Tech stack**: To be determined during research phase
- **Budget**: Not specified
- **Timeline**: Not specified
- **Static site**: No backend or database required
- **No external services**: Avoid dependencies on APIs, auth providers, payment processing

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Full SaaS structure (Home, Products, About, Pricing, Contact) | Maximizes parody by including all standard SaaS pages — — Pending |
| SaaS-style product pages (not simple catalog) | More absurd when individual products get full landing page treatment — — Pending |
| Modern SaaS aesthetic (Stripe/Vercel vibes) | Clean, minimal design creates stronger contrast with absurd products — — Pending |
| Static site, no CMS | Simpler to deploy, maintain, and host for parody site — — Pending |
| Browse-only, no purchasing | Focuses on humor/concept, not e-commerce complexity — — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2025-04-17 after initialization*
