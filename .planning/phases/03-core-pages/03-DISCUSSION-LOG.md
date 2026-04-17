# Phase 03: Core Pages - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2025-04-17
**Phase:** 03-core-pages
**Mode:** discuss (auto)
**Areas discussed:** Home page layout and hero section, About page content structure, Pricing page table structure, Contact form implementation, SEO meta descriptions

---

## Home Page Layout and Hero Section

| Question | Options | Selected |
|----------|----------|-----------|
| Q1: What layout pattern for the hero section? | Single column (centered) — Clean, focused, works well with text-heavy SaaS hero | ✓ |
| | Split layout (text left, visual right) — More dynamic, good for showing imagery/preview | |
| | Full-width background — Bold, modern, but requires strong visual assets | |
| **User's choice:** Single column (centered) — Clean, focused, works well with text-heavy SaaS hero (recommended default) |
| **Notes:** Auto-selected in --auto mode. Aligns with minimal SaaS aesthetic and doesn't require visual assets. Consistent with Stripe/Vercel design approach. |

| Question | Options | Selected |
|----------|----------|-----------|
| Q2: How should featured products be selected? | First 3-4 products from data array — Simple, deterministic, no manual curation | ✓ |
| | Curated selection (specific products highlighted) — More intentional but requires manual selection | |
| | Show all 7 products in scrollable section — Comprehensive but may overwhelm | |
| **User's choice:** First 3-4 products from data array — Simple, deterministic, no manual curation (recommended default) |
| **Notes:** Auto-selected in --auto mode. Uses existing product order from src/lib/data.ts. No additional configuration needed. |

| Question | Options | Selected |
|----------|----------|-----------|
| Q3: What CTA pattern for the hero section? | Primary + secondary buttons — Standard SaaS pattern (e.g., "Get Started" + "Learn More") | ✓ |
| | Single CTA button — Focused, drives one primary action | |
| | Text link CTA — Subtle, less aggressive | |
| **User's choice:** Primary + secondary buttons — Standard SaaS pattern (e.g., "Get Started" + "Learn More") (recommended default) |
| **Notes:** Auto-selected in --auto mode. Provides clear primary action with low-friction alternative. Standard pattern used by Stripe, Vercel. |

---

## About Page Content Structure

| Question | Options | Selected |
|----------|----------|-----------|
| Q4: What structure for the mission statement? | Single headline + paragraph — Concise, focused, easy to scan | ✓ |
| | Multi-section narrative (mission, values, approach) — More comprehensive, adds depth | |
| | Bullet-point manifesto — Scannable, impactful, good for satire | |
| **User's choice:** Single headline + paragraph — Concise, focused, easy to scan (recommended default) |
| **Notes:** Auto-selected in --auto mode. Keeps About page minimal and focused on satirical message. Consistent with minimalist SaaS communication style. |

| Question | Options | Selected |
|----------|----------|-----------|
| Q5: What level of satirical buzzword density? | Subtle corporate-speak — Light parody, reads like real SaaS marketing | |
| | Exaggerated buzzword density — Heavy satire, obvious absurdity | ✓ |
| | Deadpan factual style — Takes absurd concepts seriously, creates stronger contrast | |
| **User's choice:** Exaggerated buzzword density — Heavy satire, obvious absurdity (recommended default for parody effect) |
| **Notes:** Auto-selected in --auto mode. Delivers stronger parody effect. Aligns with PROJECT.md core value (stark contrast between polished aesthetics and absurd products). |

| Question | Options | Selected |
|----------|----------|-----------|
| Q6: Visual elements on About page? | Text-only — Focuses purely on language, minimal distraction | ✓ |
| | Minimal iconography — Adds visual interest without complexity | |
| | Include illustration — More engaging but requires illustration assets | |
| **User's choice:** Text-only — Focuses purely on language, minimal distraction (recommended default for Phase 3) |
| **Notes:** Auto-selected in --auto mode. Strengthens deadpan presentation. Simpler to implement, no illustration assets needed. |

---

## Pricing Page Table Structure

| Question | Options | Selected |
|----------|----------|-----------|
| Q7: How should pricing tables be organized? | Single comparison table for all products — Direct comparison, saves vertical space | |
| | Product-specific tables (one section per product) — Easier to understand each product | ✓ |
| | Side-by-side tier comparison across products — Best for tier selection | |
| **User's choice:** Product-specific tables (one section per product) — Easier to understand each product (recommended default) |
| **Notes:** Auto-selected in --auto mode. Each product gets dedicated pricing section. 7 products manageable with vertical page layout. Fits with Phase 4 individual product pages. |

| Question | Options | Selected |
|----------|----------|-----------|
| Q8: How should features be displayed in pricing? | Full feature list per tier — Comprehensive, no ambiguity | ✓ |
| | Abbreviated highlights (3-5 key features) — Less overwhelming, encourages exploration | |
| | Tiered feature display (features unlocked at higher tiers) — Drives upgrades | |
| **User's choice:** Full feature list per tier — Comprehensive, no ambiguity (recommended default) |
| **Notes:** Auto-selected in --auto mode. Standard in SaaS pricing pages (Stripe, Vercel). Features array exists in product data structure. |

| Question | Options | Selected |
|----------|----------|-----------|
| Q9: Which pricing tier to emphasize? | Highlight "Business" tier as recommended — Standard SaaS pattern, encourages mid-tier | ✓ |
| | Equal emphasis on all tiers — User-focused, lets them choose | |
| | Highlight "Enterprise" tier for absurdity — Fits parody theme (larger ladders, parachutes, etc.) | |
| **User's choice:** Highlight "Business" tier as recommended — Standard SaaS pattern, encourages mid-tier (recommended default) |
| **Notes:** Auto-selected in --auto mode. Standard SaaS pattern encourages mid-tier selection (typically highest-converting tier). Business tier provides good balance of absurdity and seriousness. |

---

## Contact Form Implementation

| Question | Options | Selected |
|----------|----------|-----------|
| Q10: How should form submission work? | JavaScript prevent-default with success message — No backend, provides user feedback | ✓ |
| | mailto: link — Simplest implementation, opens email client | |
| | Visual-only form (static HTML) — Just shows form fields, no interaction | |
| **User's choice:** JavaScript prevent-default with success message — No backend, provides user feedback (recommended default) |
| **Notes:** Auto-selected in --auto mode. No backend required (PROJECT.md constraints). Provides user feedback without page reload. Uses Vanilla JS pattern (Phase 2 D-04). |

| Question | Options | Selected |
|----------|----------|-----------|
| Q11: What form fields to include? | Standard set (name, email, company, message) — Enterprise-appropriate, not excessive | ✓ |
| | Minimal set (name, email, message) — Simpler, lower friction | |
| | Extended enterprise set (name, title, company, phone, message) — More enterprise-speak | |
| **User's choice:** Standard set (name, email, company, message) — Enterprise-appropriate, not excessive (recommended default) |
| **Notes:** Auto-selected in --auto mode. Company field reinforces SaaS enterprise theme. Four fields is reasonable friction for parody site. |

| Question | Options | Selected |
|----------|----------|-----------|
| Q12: What feedback mechanism for form submission? | Success message below form — Clear, straightforward feedback | |
| | Success message replaces form — More dramatic, confirms submission clearly | ✓ |
| | Visual feedback animation — Polished, but adds complexity | |
| **User's choice:** Success message replaces form — More dramatic, confirms submission clearly (recommended default) |
| **Notes:** Auto-selected in --auto mode. More satisfying feedback. Replaces entire form with "Thank you" message. Consistent with static site approach. |

---

## SEO & Meta Descriptions

| Question | Options | Selected |
|----------|----------|-----------|
| Q13: How detailed should page meta descriptions be? | Concise summaries (1-2 sentences, ~150 chars) — SEO best practice, standard | ✓ |
| | Comprehensive descriptions (2-3 sentences, ~200 chars) — More context, slightly longer | |
| | Minimal descriptions (phrase or tagline) — Brief, may miss SEO opportunities | |
| **User's choice:** Concise summaries (1-2 sentences, ~150 chars) — SEO best practice, standard (recommended default) |
| **Notes:** Auto-selected in --auto mode. SEO best practice for meta descriptions. Fits search result snippet length. Each page needs unique description (PAGE-07). |

---

## Auto-Mode Summary

All gray areas auto-resolved with recommended defaults. 13 questions across 5 areas:

- **Home Page Layout:** 3 questions (hero layout, featured products selection, CTA pattern)
- **About Page Content:** 3 questions (mission structure, buzzword density, visual elements)
- **Pricing Page Structure:** 3 questions (table organization, feature display, tier emphasis)
- **Contact Form:** 3 questions (submission handling, form fields, feedback mechanism)
- **SEO:** 1 question (meta description length)

No scope creep or deferred ideas during discussion. All decisions aligned with prior phase decisions (design tokens, component structure, product data) and project constraints (static site, no backend).

---

## Decision Categories

### Home Page Layout (D-01, D-02, D-03)
- Hero section: Single column layout, first 3-4 products featured, primary + secondary CTAs

### About Page Content (D-04, D-05, D-06)
- Mission statement: Single headline + paragraph, exaggerated buzzword density, text-only

### Pricing Page Structure (D-07, D-08, D-09)
- Tables: Product-specific sections, full feature lists, Business tier highlighted

### Contact Form (D-10, D-11, D-12)
- Implementation: JavaScript prevent-default, standard form fields, success message replaces form

### SEO (D-13, D-14)
- Meta: Concise summaries (~150 chars), descriptive keyword-rich titles
