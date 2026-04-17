# Domain Pitfalls

**Domain:** Satirical SaaS Website (Static)
**Researched:** 2025-04-17

## Critical Pitfalls

Mistakes that cause rewrites or major issues.

### Pitfall 1: Missing Image Dimensions Causing Layout Shifts

**What goes wrong:** Images without `width` and `height` attributes cause Cumulative Layout Shift (CLS) as the browser reserves no space while loading. When the image loads, content jumps down the page, harming user experience and Core Web Vitals scores.

**Why it happens:** Developers often omit image dimensions because they're using CSS `width: 100%` for responsiveness, or they assume dimensions will be inferred from the image file. However, without explicit attributes, the browser cannot calculate aspect ratio until the image loads.

**Consequences:**
- Poor CLS scores (>0.25 instead of <0.1)
- Jarring user experience (content jumping)
- Reduced perceived performance
- Lower SEO rankings (Core Web Vitals are ranking factors)

**Prevention:**
- Always include `width` and `height` attributes on `<img>` tags
- Use `max-width: 100%` and `height: auto` in CSS for responsiveness
- For responsive images with `srcset`, ensure all sources have same aspect ratio
- Use `<picture>` element with explicit dimensions for art direction changes

**Detection:**
- Lighthouse audit: "Images have explicit width and height"
- Chrome DevTools Performance panel shows layout shift records
- PageSpeed Insights CLS field data shows poor scores

**Phase to address:** Any phase involving images (Home, Product pages, About, etc.) - ideally set as design system rule from Phase 1

**Sources:**
- [web.dev Optimize CLS](https://web.dev/articles/optimize-cls) (HIGH confidence - official docs)
- [web.dev Responsive web design basics](https://web.dev/articles/responsive-web-design-basics) (HIGH confidence - official docs)

---

### Pitfall 2: Lazy Loading Largest Contentful Paint Images

**What goes wrong:** Applying `loading="lazy"` to hero images or images that are the Largest Contentful Paint (LCP) element delays their loading until after layout confirmation. This increases resource load delay, directly harming LCP metric and perceived performance.

**Why it happens:** Developers apply lazy loading universally to all images for perceived performance benefits, not realizing that LCP images need to start loading immediately with the document.

**Consequences:**
- Poor LCP scores (>4.0 seconds instead of <2.5 seconds)
- Slower perceived page load
- Poor Core Web Vitals scores
- User perceives site as slow

**Prevention:**
- Never lazy load images in above-the-fold viewport
- Add `fetchpriority="high"` to images likely to be LCP element
- Reserve lazy loading for below-fold images
- Test which element is your LCP using Lighthouse and DevTools

**Detection:**
- Chrome DevTools Performance panel shows LCP element loading late
- Lighthouse audit identifies LCP element
- Resource waterfall shows LCP image starting after other resources

**Phase to address:** Phase building hero sections and product page layouts

**Sources:**
- [web.dev Optimize LCP](https://web.dev/articles/optimize-lcp) (HIGH confidence - official docs)
- [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) (HIGH confidence - official docs)

---

### Pitfall 3: Missing Viewport Meta Tag

**What goes wrong:** Without `<meta name="viewport" content="width=device-width, initial-scale=1">`, mobile browsers render pages at desktop width (typically 980px) and scale content to fit. This makes text microscopic, hard to read, and requires zooming, breaking mobile experience.

**Why it happens:** Developers forget to add viewport tag or use incorrect attributes like `user-scalable=no` which prevents zooming (accessibility issue).

**Consequences:**
- Unusable mobile experience (tiny text)
- Users must zoom to read
- Poor mobile-first design
- Lighthouse audit failures

**Prevention:**
- Always include viewport meta tag in `<head>`
- Use `width=device-width, initial-scale=1`
- Never use `user-scalable=no`, `minimum-scale`, or `maximum-scale` (accessibility violation)
- Test on mobile devices early

**Detection:**
- Lighthouse audit: "Does not have a <meta name=\"viewport\"> tag"
- Visual inspection on mobile device
- Chrome DevTools device mode shows zoomed-out content

**Phase to address:** Phase 1 (HTML structure) - must be present from first page

**Sources:**
- [web.dev Responsive web design basics](https://web.dev/articles/responsive-web-design-basics) (HIGH confidence - official docs)
- [MDN Viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) (HIGH confidence - official docs)

---

### Pitfall 4: Font Loading Causing Layout Shifts

**What goes wrong:** Web fonts loading after fallback fonts cause text to shift when fonts swap in (FOIT - Flash of Invisible Text or FOUT - Flash of Unstyled Text). Different fonts take different space, pushing content around.

**Why it happens:** Default browser behavior blocks text rendering for up to 3 seconds (Chromium) or indefinitely (Safari) while waiting for web fonts. When fonts finally load, they may have different character widths than the fallback.

**Consequences:**
- Poor CLS scores
- Jarring text shifting as page loads
- Delayed text rendering (FOIT)
- Poor perceived performance

**Prevention:**
- Use `font-display: swap` with `font-family` fallbacks that closely match web font
- Use `font-display: optional` for body text where exact font isn't critical
- Use `size-adjust`, `ascent-override`, `descent-override` APIs to match fallback font metrics
- Preload critical fonts with `<link rel="preload">`
- Use system fonts where appropriate to eliminate web font loading

**Detection:**
- Chrome DevTools Performance panel layout shifts from fonts
- Lighthouse audit: "Avoid layout shifts caused by web fonts"
- Visual inspection shows text jumping on load

**Phase to address:** Phase implementing typography and design system

**Sources:**
- [web.dev Font best practices](https://web.dev/articles/font-best-practices) (HIGH confidence - official docs)
- [web.dev Optimize CLS](https://web.dev/articles/optimize-cls) (HIGH confidence - official docs)

---

### Pitfall 5: DNS Configuration Blocking Site Launch

**What goes wrong:** Incorrect DNS records (wrong type, wrong target, or propagation delays) prevent custom domain from resolving. Site deploys to Vercel but domain returns 404, DNS errors, or points to wrong server.

**Why it happens:**
- Using A record instead of CNAME for apex domains
- Pointing CNAME to wrong Vercel URL (e.g., `vercel.app` instead of `.vercel.app` with project slug)
- DNS propagation taking up to 48 hours
- Nameserver misconfiguration at registrar
- TTL set too high causing delays when fixing mistakes

**Consequences:**
- Site launches but domain doesn't work
- 404 errors or wrong site loading
- Launch delays
- Loss of user trust
- Hours spent debugging DNS issues

**Prevention:**
- Use Vercel's domain configuration wizard which tells you exact records to create
- For subdomains (e.g., `www.bostri.ch`): Create CNAME record pointing to `cname.vercel-dns.com`
- For apex domains (e.g., `bostri.ch`): Use A records (76.76.21.21, 76.76.19.19) or registrar's alias target
- Verify DNS propagation using `dig` or `nslookup` before announcing launch
- Set reasonable TTL (300-3600 seconds) during development, increase after stable
- Test with `curl -I bostri.ch` to check what server domain resolves to

**Detection:**
- Domain returns 404 or DNS_PROBE_FINISHED_NXDOMAIN errors
- `dig bostri.ch` shows wrong or no DNS records
- Browser shows DNS error or wrong site
- Vercel dashboard shows domain as "Pending configuration"

**Phase to address:** Final deployment phase when connecting custom domain

**Sources:**
- [Vercel Domains Overview](https://vercel.com/docs/domains) (HIGH confidence - official docs)
- [Vercel Working with DNS](https://vercel.com/docs/domains/working-with-dns) (HIGH confidence - official docs)

---

### Pitfall 6: Poor Accessibility from Missing Semantic HTML

**What goes wrong:** Using generic `<div>` elements instead of semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) breaks assistive technology navigation. Screen readers can't efficiently navigate content.

**Why it happens:** Developers prioritize styling convenience or don't understand semantic HTML. They use divs for everything and rely on ARIA for accessibility, which is less effective than proper HTML structure.

**Consequences:**
- Screen reader users cannot navigate efficiently
- Poor SEO (semantic structure helps search engines)
- Legal accessibility compliance failures (WCAG)
- Exclusion of disabled users
- Need for complex ARIA workarounds

**Prevention:**
- Use semantic HTML elements for structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Use `<h1>` through `<h6>` hierarchically (don't skip levels)
- Use `<ul>` and `<ol>` for lists, not divs
- Use `<button>` for actions, not divs with click handlers
- Reserve ARIA for when HTML can't express the meaning
- Test with screen reader (NVDA, VoiceOver) or Lighthouse accessibility audit

**Detection:**
- Lighthouse accessibility audit failures
- Screen reader shows "document" with no landmarks
- Manual inspection shows non-semantic structure
- Axe DevTools shows semantic structure issues

**Phase to address:** Phase 1 (HTML structure) - establish semantic patterns from start

**Sources:**
- [web.dev Learn Accessibility](https://web.dev/learn/accessibility) (HIGH confidence - official docs)
- [web.dev Semantic HTML](https://web.dev/learn/html/semantic-html) (HIGH confidence - official docs)

---

## Moderate Pitfalls

### Pitfall 7: Inconsistent Design Without CSS Custom Properties

**What goes wrong:** Hardcoding colors, spacing, and font values throughout CSS leads to visual inconsistency across pages. Changing a design token requires finding and replacing dozens of values, often missing some.

**Why it happens:** Developers don't establish a design system early. They pick colors and spacing as they build each component, resulting in subtly different shades, margins, and font sizes across pages.

**Consequences:**
- Visual inconsistency between pages
- Maintenance nightmares (changing brand color requires updating 50+ rules)
- "Design debt" accumulates over time
- Difficult to maintain SaaS aesthetic (which depends on polish and consistency)

**Prevention:**
- Define CSS custom properties at root: `:root { --primary-color: #...; --spacing-md: 1rem; --font-heading: ... }`
- Use design tokens throughout: `color: var(--primary-color)`, `margin: var(--spacing-md)`
- Create design system documentation (even if simple) listing all tokens
- Use design tokens for: colors, spacing, typography, shadows, border radius, transitions
- Test consistency across all pages before launch

**Detection:**
- Visual inspection shows inconsistent colors/spacing
- CSS inspection reveals hardcoded values instead of `var()`
- Lighthouse performance audit shows unused CSS (from duplication)

**Phase to address:** Phase 1 (Design system establishment) - before building any components

**Sources:**
- [web.dev CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (HIGH confidence - official docs)
- Industry standard practice (MEDIUM confidence - common knowledge)

---

### Pitfall 8: Fixed Pixel Layouts Breaking Responsive Design

**What goes wrong:** Using fixed pixel values for widths (`width: 1200px;`) causes horizontal scrolling on small screens. Content extends beyond viewport, requiring user to scroll sideways—poor UX on mobile.

**Why it happens:** Developers design for desktop first and don't test on mobile. They assume "responsive" means images resize, not that the entire layout adapts.

**Consequences:**
- Horizontal scrolling on mobile
- Content cut off on small screens
- Poor mobile experience
- Lighthouse audit failures

**Prevention:**
- Use relative units: `%`, `fr`, `rem`, `em`, `vw`
- Use CSS Grid with `fr` units: `grid-template-columns: 1fr 3fr;`
- Use Flexbox for flexible layouts
- Use `max-width: 100%` for images and containers
- Test on mobile device or DevTools device mode from start
- Use media queries to change layout at natural breakpoints, not device-specific ones

**Detection:**
- Horizontal scrollbar appears on mobile
- Content extends beyond viewport
- Chrome DevTools shows overflow
- Lighthouse audit: "Content is not sized correctly for the viewport"

**Phase to address:** Phase 1 (layout structure) - establish responsive patterns before building pages

**Sources:**
- [web.dev Responsive web design basics](https://web.dev/articles/responsive-web-design-basics) (HIGH confidence - official docs)

---

### Pitfall 9: Poor Color Contrast Failing Accessibility

**What goes wrong:** Low contrast between text and background (light gray on white, or two similar shades) makes text unreadable for users with visual impairments. Fails WCAG AA standards (4.5:1 for normal text).

**Why it happens:** Designers prioritize "minimal" or "modern" aesthetics, using subtle colors. They don't test contrast or rely on visual inspection which is unreliable for accessibility.

**Consequences:**
- Text unreadable for people with low vision, color blindness, or in bright light
- Lighthouse accessibility audit failures
- Legal accessibility compliance failures
- Poor readability even for some users without disabilities

**Prevention:**
- Use contrast checker tool (WebAIM Contrast Checker, Chrome DevTools) to verify all text meets 4.5:1 (AA) or 7:1 (AAA)
- Never rely on color alone to convey information
- Test with different vision conditions in DevTools (simulated color blindness, low contrast)
- Err toward higher contrast (modern SaaS sites like Stripe use high contrast despite minimal aesthetic)
- Document color palette with verified contrast ratios

**Detection:**
- Lighthouse accessibility audit shows color contrast failures
- Chrome DevTools Lighthouse panel flags low contrast
- Manual testing with vision simulator shows unreadable text
- WebAIM contrast checker shows ratios below 4.5:1

**Phase to address:** Phase establishing color palette and design system

**Sources:**
- [web.dev Color and contrast](https://web.dev/learn/accessibility/color-contrast) (HIGH confidence - official docs)
- [WCAG Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) (HIGH confidence - W3C standard)

---

### Pitfall 10: Missing Alt Text on Images

**What goes wrong:** Images without `alt` attribute or with generic/missing alt text make site inaccessible to screen reader users. Screen readers announce "image" or filename with no context.

**Why it happens:** Developers forget `alt` attribute, leave it empty for decorative images (correct but only if decorated properly), or write unhelpful text like "image of product". Decorative images should have `alt=""` but non-decorative needs meaningful descriptions.

**Consequences:**
- Screen reader users don't know what images show
- Poor SEO (alt text helps image search)
- Lighthouse accessibility audit failures
- Exclusion of blind or low-vision users

**Prevention:**
- Every `<img>` must have `alt` attribute
- For informative images: describe what's shown, especially text within image
- For decorative images: use `alt=""` (empty string)
- For functional images (buttons, icons): describe action, not appearance
- Test with screen reader to hear what's announced
- Use automated linters (eslint-plugin-jsx-a11y) to catch missing alt

**Detection:**
- Lighthouse accessibility audit shows missing alt text
- Screen reader announces "image" or filename
- Manual inspection finds `alt=""` on informative images or no alt attribute

**Phase to address:** Any phase with images - set as requirement from Phase 1

**Sources:**
- [web.dev Images accessibility](https://web.dev/learn/accessibility/images) (HIGH confidence - official docs)
- [MDN alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt) (HIGH confidence - official docs)

---

### Pitfall 11: Unoptimized Images Bloating Page Size

**What goes wrong:** Serving large images (e.g., 4000x3000px, 2MB JPEG) when viewport only needs smaller size increases transfer time, uses unnecessary bandwidth, and slows LCP. Modern formats (WebP, AVIF) compress 30% better than JPEG.

**Why it happens:** Developers use images as-is from photographer or stock site without optimization. They assume "responsive" means CSS scales image, not serving appropriately sized files.

**Consequences:**
- Slower page loads (large download times)
- Poor LCP scores
- Excessive bandwidth use (cost on cellular, slow on slow connections)
- Poor mobile experience

**Prevention:**
- Optimize all images before adding to project (ImageOptim, Squoosh, Sharp)
- Use modern formats: WebP or AVIF (95%+ browser support)
- Serve multiple sizes with `srcset` for responsive images
- Compress JPEGs with quality 80-85
- Use image CDN (Cloudinary, Vercel Image Optimization) for automatic optimization
- Check file sizes: hero images should be <500KB, others <100KB

**Detection:**
- Chrome DevTools Network panel shows large image downloads
- Lighthouse audit: "Uses optimized images"
- Page weight tools show images are largest resources
- Visual inspection shows blurry images from over-compression

**Phase to address:** Any phase with images - establish image optimization workflow from Phase 1

**Sources:**
- [web.dev Optimize LCP - Reduce resource size](https://web.dev/articles/optimize-lcp) (HIGH confidence - official docs)
- [web.dev Font delivery - Use WOFF2](https://web.dev/articles/font-best-practices) (HIGH confidence - official docs, font analogy applies to images)

---

### Pitfall 12: Keyboard Navigation Not Working

**What goes wrong:** Users cannot navigate site with keyboard because interactive elements don't receive focus or focus indicators are removed/disabled. Focus doesn't move logically through page.

**Why it happens:** Developers design for mouse/touch only. They use `<div>` with click handlers instead of `<button>`, or they remove default focus styles with `*:focus { outline: none; }` and don't add replacement.

**Consequences:**
- Keyboard users (power users, people with motor disabilities) cannot use site
- Poor accessibility
- Lighthouse accessibility audit failures
- WCAG compliance failures

**Prevention:**
- Use native interactive elements: `<button>`, `<a>`, `<input>`
- Ensure logical tab order (document structure follows visual order)
- Never remove `:focus` styles entirely - replace with visible custom styles
- Test by tabbing through entire page
- Ensure all interactive elements are reachable and operable via keyboard

**Detection:**
- Tabbing through page skips interactive elements
- Lighthouse audit: "Focusable elements have visible focus indication"
- Manual keyboard test shows no focus ring or can't reach elements

**Phase to address:** Phase 1 (HTML structure) - establish keyboard navigation patterns

**Sources:**
- [web.dev Keyboard focus](https://web.dev/learn/accessibility/focus) (HIGH confidence - official docs)
- [web.dev Style focus](https://web.dev/articles/style-focus) (HIGH confidence - official docs)

---

## Minor Pitfalls

### Pitfall 13: Duplicate CSS Across Pages

**What goes wrong:** Copy-pasting component styles into each page's CSS instead of using shared stylesheet or component library leads to duplication. Changing a component requires updating multiple files, inevitably missing some.

**Why it happens:** Developers build pages in isolation without planning shared components. They paste styles from one page to another, tweaking slightly, resulting in divergence over time.

**Consequences:**
- Maintenance burden (10 files to update instead of 1)
- Inconsistent components across pages (missed updates)
- Larger CSS bundle size (duplication)
- Technical debt accumulates

**Prevention:**
- Use component-based approach: Create shared components with shared styles
- Use CSS modules or component-scoped styles
- Or use global CSS with clear component sections
- Document shared components
- Lint for duplication (CSS complexity tools)
- For static sites: Use CSS imports from shared files or preprocessor (@use)

**Detection:**
- Same CSS rules appear in multiple files
- Chrome DevTools Sources panel shows duplicate CSS
- Changing style in one place doesn't update all occurrences

**Phase to address:** Phase 1 (architecture) - establish component patterns before building

---

### Pitfall 14: Heading Hierarchy Issues

**What goes wrong:** Skipping heading levels (h1 to h3), using multiple h1s per page, or structuring content incorrectly breaks document outline. Screen reader users can't efficiently navigate or understand content hierarchy.

**Why it happens:** Developers pick heading levels based on visual size (h1 for big text, h2 for medium) not semantic hierarchy. Or they use h1 for logos/titles outside main content.

**Consequences:**
- Screen reader users can't efficiently navigate (heading navigation shows poor structure)
- Poor document outline
- SEO impact (headings help search engines understand content)
- Accessibility failures

**Prevention:**
- Use exactly one `<h1>` per page (main title)
- Use `<h2>` for major sections
- Use `<h3>` for subsections, never skip levels
- Test document outline in DevTools or with heading navigation tool
- Don't use headings for logos or decorative elements

**Detection:**
- Lighthouse accessibility audit shows heading issues
- DevTools shows "h1 skipped to h3" or "multiple h1s"
- Screen reader heading navigation shows poor structure

**Phase to address:** Phase 1 (HTML structure) - establish heading patterns

**Sources:**
- [web.dev Headings and sections](https://web.dev/learn/html/headings-and-sections) (HIGH confidence - official docs)

---

### Pitfall 15: External Fonts Slowing First Paint

**What goes wrong:** Loading web fonts from Google Fonts or other external providers without preconnect adds 200-300ms delay (DNS + TCP + TLS) before font download even begins. Blocks text rendering, delays First Contentful Paint (FCP).

**Why it happens:** Developers use standard Google Fonts embed without resource hints. Browser doesn't know about font connection until stylesheet loads.

**Consequences:**
- Delayed text rendering
- Poor FCP scores
- FOUT/FOIT (font swapping issues)
- Slower perceived page load

**Prevention:**
- Add `<link rel="preconnect">` for font provider origins
- For Google Fonts:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```
- Preload critical fonts with `<link rel="preload">`
- Consider self-hosting fonts (eliminates connection setup)
- Or use system fonts to eliminate web font loading

**Detection:**
- Chrome DevTools Network panel shows font connection starting late
- Lighthouse audit: "Reduce unused JavaScript" (from font loading)
- Timeline shows preconnect would save 200-300ms

**Phase to address:** Phase implementing typography

**Sources:**
- [web.dev Font best practices](https://web.dev/articles/font-best-practices) (HIGH confidence - official docs)

---

### Pitfall 16: Missing Page Title and Meta Description

**What goes wrong:** `<title>` element is empty or generic ("Home", "Untitled") and `<meta name="description">` is missing. Search engines and browser tabs can't identify page content.

**Why it happens:** Developers focus on visible content and forget HTML `<head>` metadata. They assume "title will be obvious" or forget to add meta tags entirely.

**Consequences:**
- Poor SEO (search engines don't understand page content)
- Browser tabs show "Untitled" or generic title
- Social media shares show wrong preview (no Open Graph tags)
- Users can't distinguish pages in browser history

**Prevention:**
- Every page must have unique, descriptive `<title>` (60 chars or less for search display)
- Every page must have `<meta name="description">` (150-160 chars, unique per page)
- Add Open Graph tags for social sharing: `og:title`, `og:description`, `og:image`
- Test with Facebook/Twitter debuggers to see preview

**Detection:**
- Lighthouse SEO audit shows missing title/description
- Browser tab shows "Untitled"
- Social media share preview is missing or generic
- Search results show poor snippet

**Phase to address:** Phase 1 (HTML structure) - establish metadata patterns

**Sources:**
- [web.dev Metadata](https://web.dev/learn/html/metadata) (HIGH confidence - official docs)
- Industry standard practice (HIGH confidence - SEO best practices)

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|------------|----------------|------------|
| **Phase 1: Design System & HTML Structure** | Inconsistent design without CSS variables, missing semantic HTML, heading hierarchy issues | Establish CSS custom properties at root, use semantic HTML (`<header>`, `<nav>`, `<main>`, etc.), follow heading hierarchy (one h1, sequential h2/h3), add viewport meta tag |
| **Phase 1: Typography** | Font loading causing layout shifts, external fonts slowing paint | Use `font-display: swap` with matching fallback fonts, add `preconnect` for Google Fonts, preload critical fonts, consider system fonts |
| **Phase 2: Hero Sections & Product Pages** | Lazy loading LCP images, missing image dimensions, unoptimized images | Never lazy load above-fold images, always add `width` and `height` attributes, optimize images (WebP, compression), use `fetchpriority="high"` for LCP candidates |
| **Phase 2: Responsive Layouts** | Fixed pixel layouts breaking on mobile, horizontal scrolling | Use relative units (%, fr, rem, vw), test on mobile from start, use CSS Grid/Flexbox, `max-width: 100%` for containers |
| **Phase 3: Color & Spacing** | Poor color contrast, hardcoded design values | Test contrast meets WCAG AA (4.5:1), use CSS custom properties for design tokens, document color palette with verified ratios |
| **Phase 4: Custom Domain Deployment** | DNS configuration blocking launch, SSL not provisioning | Follow Vercel's domain wizard exactly, test DNS propagation with `dig`, verify with `curl -I`, allow 48 hours for propagation if needed |
| **All Phases: Accessibility** | Missing alt text, keyboard navigation not working, poor focus styles | Every image needs alt text, use native interactive elements (`<button>`, `<a>`), ensure logical tab order, add visible focus styles, test with keyboard and screen reader |

---

## Sources

### Official Documentation (HIGH Confidence)
- [web.dev Core Web Vitals](https://web.dev/articles/vitals) - LCP, CLS, INP metrics
- [web.dev Optimize LCP](https://web.dev/articles/optimize-lcp) - Detailed LCP optimization guide
- [web.dev Optimize CLS](https://web.dev/articles/optimize-cls) - Layout shift prevention
- [web.dev Font best practices](https://web.dev/articles/font-best-practices) - Font loading and delivery
- [web.dev Responsive web design basics](https://web.dev/articles/responsive-web-design-basics) - Responsive patterns
- [web.dev Learn Accessibility](https://web.dev/learn/accessibility) - Accessibility fundamentals
- [web.dev Learn HTML - Semantic HTML](https://web.dev/learn/html/semantic-html) - Semantic structure
- [web.dev Learn HTML - Metadata](https://web.dev/learn/html/metadata) - Page metadata
- [web.dev Learn HTML - Headings and sections](https://web.dev/learn/html/headings-and-sections) - Heading hierarchy
- [web.dev Style focus](https://web.dev/articles/style-focus) - Focus indicators
- [web.dev Accessible tap targets](https://web.dev/articles/accessible-tap-targets) - Touch target sizing
- [web.dev Content reordering](https://web.dev/articles/content-reordering) - Content structure
- [Vercel Domains Overview](https://vercel.com/docs/domains) - DNS fundamentals
- [Vercel Working with DNS](https://vercel.com/docs/domains/working-with-dns) - DNS configuration
- [Lighthouse Performance Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) - How Lighthouse calculates scores

### Industry Standards (HIGH Confidence)
- [WCAG 2.1 Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) - W3C accessibility standard
- [MDN alt attribute documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - CSS custom properties

### Community Best Practices (MEDIUM Confidence)
- Modern SaaS design patterns (Stripe, Vercel, Linear) - Consistent design systems, high contrast, semantic HTML
- Static site optimization patterns - Image optimization, font loading, CSS delivery

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| **Performance (LCP, CLS, fonts)** | HIGH | Based on web.dev official documentation, Lighthouse metrics, Core Web Vitals standards |
| **Responsive Design** | HIGH | Based on web.dev official documentation, MDN resources |
| **Accessibility** | HIGH | Based on web.dev Learn Accessibility course, WCAG standards, Lighthouse audits |
| **DNS/Deployment** | HIGH | Based on Vercel official documentation for domain configuration |
| **Design System** | MEDIUM | Industry standard practice, but less formal documentation - synthesized from common patterns |
| **Cross-Browser** | MEDIUM | General web development knowledge - would need browser-specific docs for HIGH confidence |
| **SEO** | MEDIUM | Basic metadata requirements from web.dev, advanced SEO would need dedicated research |

---

## How to Use This Document

### Before Each Phase
1. **Review phase-specific warnings** in table above
2. **Check related pitfalls** in Critical/Moderate sections
3. **Add prevention strategies** to phase task list as acceptance criteria
4. **Set up detection methods** early (Lighthouse, DevTools, contrast checker)

### During Development
1. **Run automated checks**: Lighthouse (performance + accessibility), axe DevTools
2. **Manual testing**: Keyboard navigation, screen reader, mobile device, contrast checker
3. **Review prevention strategies** before implementing each feature

### Before Deployment
1. **Verify DNS configuration** using `dig` and `curl -I bostri.ch`
2. **Run Lighthouse** on production build
3. **Test on mobile devices** (real phones, not just DevTools)
4. **Accessibility audit**: keyboard, screen reader, focus styles, color contrast

### Ongoing Monitoring
1. **PageSpeed Insights** for real-user Core Web Vitals data
2. **Lighthouse CI** in CI/CD pipeline
3. **User testing** for UX issues automated tools miss

---

## What We Might Have Missed

This research focused on static SaaS websites based on official documentation from web.dev, Vercel, and W3C standards. Potential gaps:

- **Cross-browser specific issues**: Research focused on Chromium/Chrome; Safari, Firefox may have different behaviors (particularly font loading, CSS rendering)
- **Edge cases**: Very old browsers, rare devices, specific assistive technologies beyond screen readers
- **Advanced SEO**: Beyond basic meta tags (structured data, schema.org, sitemaps, robots.txt)
- **Security pitfalls**: XSS, CSP, subresource integrity (less critical for static sites without dynamic content)
- **Internationalization**: RTL languages, character encoding, locale-specific issues

These gaps should be addressed in phase-specific research if Bostrich expands target audience or complexity.

---

*Last updated: 2025-04-17*
