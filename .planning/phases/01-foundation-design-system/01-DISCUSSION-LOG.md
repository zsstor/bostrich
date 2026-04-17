# Phase 01: Foundation & Design System - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> **Decisions are captured in CONTEXT.md** — this log preserves alternatives considered.

**Date:** 2025-04-17
**Phase:** 01 - Foundation & Design System
**Areas discussed:** 7

## Design Tokens & CSS Configuration

| Option | Description | Selected |
|--------|-------------|----------|
| CSS variables with @theme directive in Tailwind CSS v4 | Tailwind CSS v4 introduces @theme directive as modern best practice for design tokens | ✓ |
| CSS variables in separate config file | Alternative approach, less integrated with v4 |  |
| Hardcoded Tailwind values | Anti-pattern, makes maintenance difficult |  |

**User's choice:** CSS variables with @theme directive in Tailwind CSS v4 (recommended default)

**Notes:** This decision enables the design system defined in dedicated CSS file (D-02).

---

## Project Initialization

| Option | Description | Selected |
|--------|-------------|----------|
| Start from Astro's minimal template | Faster setup, modern structure with TypeScript and Tailwind configured | ✓ |
| Start from scratch | Full control but slower, more setup work |  |

**User's choice:** Start from Astro's minimal template (recommended default)

**Notes:** Template provides opinionated structure following current Astro patterns.

---

## Typography

| Option | Description | Selected |
|--------|-------------|----------|
| System fonts (Inter fallback to sans-serif) | Zero external requests, no layout shift, instant load, performance-optimized | ✓ |
| Web fonts with Google Fonts | More control but adds network requests and potential layout shifts |  |
| System fonts only | No web font fallback, might look less premium |  |

**User's choice:** System fonts (Inter fallback to sans-serif) (recommended default)

**Notes:** Font loading strategy (D-07) implements swap behavior.

---

## Color Palette

| Option | Description | Selected |
|--------|-------------|----------|
| Neutral grays with indigo accent (Stripe-inspired) | Matches Stripe/Vercel aesthetic, neutral with single accent | ✓ |
| Custom brand colors | Would create different visual identity |  |
| Multiple accent colors | More colorful but less professional |  |

**User's choice:** Neutral grays with indigo accent (recommended default)

**Notes:** CSS custom properties (D-04) ensure consistency.

---

## Component Structure

| Option | Description | Selected |
|--------|-------------|----------|
| Standard Astro structure (src/components/, src/layouts/) | Follows Astro conventions, clear separation of concerns | ✓ |
| Single components directory | All components in one place, less organization |  |
| Feature-based folders | Harder to navigate for reusable primitives |  |

**User's choice:** Standard Astro structure (recommended default)

**Notes:** UI primitives in src/components/ui/ (D-09).

---

## Product Data Structure

| Option | Description | Selected |
|--------|-------------|----------|
| TypeScript interface + array in src/lib/data.ts | Type safety, simple, maintainable, no database needed | ✓ |
| JSON file + runtime parsing | Simpler but no type safety, runtime errors |  |
| Multiple data files by category | More complex, harder to maintain for 7 products |  |

**User's choice:** TypeScript interface + array in src/lib/data.ts (recommended default)

**Notes:** Static-site appropriate structure per PROJECT.md constraints.

---

## Agent's Discretion

No areas where user said "you decide" — all implementation decisions were explicitly made based on research and requirements.

---

## Deferred Ideas

None — discussion stayed within Phase 1 scope.
