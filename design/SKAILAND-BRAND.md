Skailand Consulting — Brand & Design System

1. Project Overview

Brand: Skailand Consulting
Business: Website creation, web development, and digital consulting
Visual direction: Retro Scandinavian editorial design, inspired by vintage print, Norwegian nature, and classic technical illustration.

Create a distinctive, understated identity that feels like a beautifully typeset Norwegian design journal from the 1960s–1970s, combined with subtle references to web technology and networking.

The design should feel:

* Vintage, editorial, and carefully crafted
* Nordic, natural, and understated
* Technical without looking like a generic tech startup
* Professional, distinctive, and trustworthy
* Warm and human rather than corporate or sterile

Reference concept: A vintage editorial logo featuring a detailed engraved mountain-and-fjord landscape, forest silhouettes, and fine network arcs with small nodes. The wordmark uses high-contrast serif typography, with a small custom network detail incorporated into the letter A.

Preserve the existing Next.js application architecture and functionality. Integrate this design into the existing page rather than rebuilding unrelated parts of the application.

⸻

2. Colour Palette

Use the following colour tokens consistently across the website.

Token	Hex	Intended use
--color-forest-ink	#1E332D	Primary text, headings, logo, navigation, dark backgrounds
--color-warm-paper	#F3EBDD	Main page background, light sections, cards
--color-terracotta	#B56843	Network nodes, decorative lines, small accents, highlights
--color-moss	#788A78	Landscape illustrations, secondary graphics, muted accents
--color-weathered-stone	#B9B3A4	Borders, dividers, subtle decorative details

Colour balance

Aim for approximately:

* 80% forest ink and warm paper combined
* 15% moss green and weathered stone combined
* 5% terracotta accents

These percentages describe the overall visual impression, not strict CSS calculations.

Colour rules

* Use warm paper instead of pure white for the main light background.
* Use forest ink instead of pure black.
* Reserve terracotta for intentional accents, not large areas.
* Maintain readable contrast for body text and interactive elements.
* Use subtle paper textures sparingly; do not compromise readability.
* Support darker sections using forest ink with warm-paper typography.

CSS variables

Add to the existing global stylesheet, adapting the selector and file location to the project:

:root {
  --color-forest-ink: #1E332D;
  --color-warm-paper: #F3EBDD;
  --color-terracotta: #B56843;
  --color-moss: #788A78;
  --color-weathered-stone: #B9B3A4;
  --font-display: "Bodoni Moda", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --border-subtle: var(--color-weathered-stone);
  --surface-primary: var(--color-warm-paper);
  --text-primary: var(--color-forest-ink);
  --accent-primary: var(--color-terracotta);
}

⸻

3. Typography

Primary display font: Bodoni Moda

Use Bodoni Moda for:

* The SKAILAND wordmark, where practical
* Large hero headings
* Editorial-style section headings
* Occasional large pull quotes or decorative text

Preferred starting weights: 600–700.

The high contrast between thick and thin strokes creates the vintage editorial character.

For the logo, consider custom SVG lettering rather than relying entirely on a font. The distinctive A in SKAILAND should be explored as a custom brand detail.

Secondary font: DM Sans

Use DM Sans for:

* Body text
* Navigation
* Buttons
* Forms
* Captions and labels
* The CONSULTING descriptor
* Technical details and small annotations

Use regular weights for body copy and medium or semibold weights for navigation and buttons.

Typography rules

* Combine expressive serif headings with clean sans-serif body text.
* Use generous line height and comfortable paragraph widths.
* Keep uppercase labels relatively small.
* Apply increased letter spacing to CONSULTING and small editorial labels.
* Avoid using the display font for long paragraphs.
* Avoid excessive font sizes, weights, and decorative styles.

Next.js font implementation

Prefer next/font/google if the project already supports it and build-time font retrieval is available. Otherwise, use the project’s existing font-loading approach or self-host font files.

Example for an App Router project:

import { Bodoni_Moda, DM_Sans } from "next/font/google";
export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});
export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

Apply the font variables to the existing root layout and map them to the CSS tokens. Check the project’s Next.js version and current font setup before modifying files.

⸻

4. Logo Direction

Primary logo

Develop a horizontal or stacked wordmark:

SKAILAND
C O N S U L T I N G

Visual characteristics:

* High-contrast serif typography
* Forest-ink lettering on warm-paper backgrounds
* Generous spacing around the wordmark
* Fine terracotta rules flanking CONSULTING
* An engraved Norwegian mountain-and-fjord illustration
* Evergreen silhouettes as a secondary landscape detail
* Delicate network arcs and nodes integrated into the illustration

Custom letterform concept

Explore a bespoke treatment of the A in SKAILAND.

Possible treatments:

* A small terracotta network node integrated into the letter
* A fine vertical connection line
* A geometric crossbar or triangular detail suggesting a network connection

Keep the word readable. The custom A should be a subtle signature, not a gimmick.

Illustration style

Use vintage engraving or woodcut-inspired linework.

Subject matter:

* Norwegian mountains
* Fjords and water
* Pine and spruce silhouettes
* Contour lines
* Small network nodes and connecting arcs

Avoid:

* Seafood imagery
* Generic stock mountain icons
* Futuristic neon networks
* Gradients and glossy effects
* Excessively complex illustrations at small sizes

Logo asset implementation

Prefer a custom SVG asset for the finished logo. Keep the wordmark and illustration crisp and scalable.

Suggested asset locations, adapted to the existing repository:

public/
  logo/
    skailand-logo.svg
    skailand-logo-dark.svg
    skailand-symbol.svg

Do not use an AI-generated raster mockup as the final production logo. Recreate the chosen design as clean vector artwork, ensuring all lettering is accurate.

If the finished logo assets do not exist yet, implement a clean temporary typographic wordmark and a simple original SVG symbol. Do not invent file paths or reference nonexistent assets.

⸻

5. Favicon and Brand Symbol

Create a simplified symbol that works at 16 × 16, 32 × 32, and larger sizes.

Concept

A minimal mountain peak combined with a small network arc and two or three nodes.

Requirements

* Forest-ink background
* Warm-paper mountain lines
* Optional terracotta nodes
* Strong silhouette
* Minimal detail
* Clear negative space
* No text inside the favicon

Asset formats

Prefer:

* icon.svg
* icon.png at 32 × 32 or higher
* favicon.ico for broad browser compatibility
* Apple touch icon if appropriate for the project

For a Next.js App Router project, inspect existing metadata and app/ or src/app/ structure before adding files. Next.js supports conventions such as app/icon.svg, app/favicon.ico, and app/apple-icon.png.

Avoid creating duplicate or conflicting favicon declarations.

⸻

6. Website Design Language

Apply the identity throughout the existing website.

Layout

* Editorial composition rather than generic SaaS layouts
* Strong alignment and a clear typographic hierarchy
* Generous whitespace
* Thin rules and restrained borders
* Asymmetric layouts where they improve the composition
* Wide landscape illustrations used as visual anchors
* Consistent spacing across sections

Backgrounds

Primary background: warm paper.

Use subtle texture or grain only where it enhances the editorial atmosphere. Prefer lightweight CSS patterns or small optimized assets rather than large background images.

The design must still look good with textures disabled.

Borders and decorative details

Use:

* One-pixel rules
* Fine dividers
* Dotted separators
* Small uppercase annotations
* Minimal ornamental marks
* Occasional terracotta nodes

Avoid:

* Excessive rounded cards
* Heavy drop shadows
* Glassmorphism
* Overuse of pills and badges
* Generic gradient blobs
* Repetitive card grids without editorial variation

Use modest corner radii for interactive elements. Prefer square or subtly rounded corners for editorial content.

Buttons

Primary buttons:

* Forest-ink background
* Warm-paper text
* Clear, readable sans-serif typography

Secondary buttons:

* Transparent or warm-paper background
* Forest-ink border and text

Hover states can introduce a restrained terracotta accent. Provide visible keyboard focus states and accessible contrast.

Links

Use forest ink as the default link colour. Use terracotta sparingly for hover states and decorative details. Do not rely on colour alone to communicate interactivity.

⸻

7. Homepage Hero Direction

If the existing page has a hero section, refine it around the following concept without changing its core content or functionality.

Suggested hierarchy

1. Small editorial eyebrow, such as INDEPENDENT DIGITAL CONSULTING
2. Large Bodoni Moda heading
3. Concise supporting text in DM Sans
4. One primary call-to-action
5. One secondary link, if appropriate
6. A custom Norwegian landscape illustration with subtle network connections

Example copy

Eyebrow:

WEB DESIGN · DEVELOPMENT · DIGITAL CRAFT

Headline:

Digital experiences, thoughtfully built.

Supporting text:

Skailand Consulting creates distinctive websites with a focus on design, usability, and thoughtful technical execution.

Primary CTA:

Let's talk

Secondary CTA:

Explore my work

These are proposed placeholders. Preserve existing approved business copy unless there is a clear reason to update it.

Hero illustration

Use a panoramic engraved mountain-and-fjord illustration, with a small number of connected network nodes following the mountain contours.

The illustration should complement the typography rather than dominate it.

On smaller screens:

* Reduce illustration complexity
* Stack content naturally
* Keep the heading readable
* Avoid horizontal overflow
* Ensure the CTA remains immediately accessible

⸻

8. Technical Implementation Requirements

Before changing code:

1. Inspect the existing repository and identify whether it uses the Next.js App Router or Pages Router.
2. Inspect existing global CSS, component conventions, font loading, and metadata.
3. Reuse the current styling framework, if one is already in place.
4. Identify the existing page and layout components that need updating.
5. Preserve all working functionality and existing integrations.

Implementation principles

* Use existing project conventions.
* Use reusable components where they provide genuine value.
* Keep design tokens centralized.
* Avoid unnecessary dependencies.
* Use semantic HTML.
* Keep client components to a minimum.
* Optimize SVG and image assets.
* Ensure all links and buttons have real, appropriate behavior.
* Avoid introducing placeholder interactions that appear functional but do nothing.

Accessibility

* Maintain readable text contrast.
* Include visible keyboard focus indicators.
* Provide appropriate alternative text for meaningful illustrations.
* Use empty alternative text for purely decorative images.
* Respect prefers-reduced-motion.
* Ensure the site works with keyboard navigation.
* Do not communicate essential information only through decorative colour.

Responsive behavior

Test at approximately:

* 375px mobile
* 768px tablet
* 1024px laptop
* 1440px desktop

Check:

* Navigation
* Hero typography
* Landscape illustration scaling
* Buttons and forms
* Footer
* Favicon and metadata
* Horizontal overflow

⸻

9. Suggested CSS Foundation

Adapt these styles to the existing stylesheet and design system.

html {
  background: var(--color-warm-paper);
  color: var(--color-forest-ink);
}
body {
  margin: 0;
  font-family: var(--font-body), sans-serif;
  background: var(--color-warm-paper);
  color: var(--color-forest-ink);
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
.brand-display {
  font-family: var(--font-display), Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.035em;
}
.eyebrow {
  font-family: var(--font-body), sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.editorial-rule {
  height: 1px;
  border: 0;
  background: var(--color-weathered-stone);
}
.brand-accent {
  color: var(--color-terracotta);
}
.button-primary {
  background: var(--color-forest-ink);
  color: var(--color-warm-paper);
  border: 1px solid var(--color-forest-ink);
}
.button-primary:hover {
  background: #29463C;
}
.button-secondary {
  background: transparent;
  color: var(--color-forest-ink);
  border: 1px solid var(--color-forest-ink);
}
:focus-visible {
  outline: 2px solid var(--color-terracotta);
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

The sample button hover colour is a secondary shade derived from the forest-ink palette; keep the core brand tokens unchanged.

Note: if CSS variables are attached to font loader classes rather than defined as font-family names directly, map them correctly in the global stylesheet.

⸻

10. Acceptance Criteria

The implementation is complete when:

* [ ]	The existing Next.js page uses the new visual identity consistently.
* [ ]	The palette matches the specified hex values.
* [ ]	Bodoni Moda and DM Sans are loaded correctly, or suitable existing alternatives are used.
* [ ]	The design feels vintage, editorial, Scandinavian, and professional.
* [ ]	Norwegian landscape imagery incorporates subtle networking references.
* [ ]	The logo remains readable at different sizes.
* [ ]	A simplified favicon is implemented using a real, existing asset.
* [ ]	The site works at mobile, tablet, and desktop sizes.
* [ ]	Existing application functionality is preserved.
* [ ]	Accessibility and keyboard focus states are addressed.
* [ ]	There are no broken image references, missing assets, or console errors.
* [ ]	The project passes its existing lint, type-check, and build commands where available.

⸻

Final Instruction to the Coding Agent

Implement the design in the existing codebase. Begin by inspecting the project structure and current page, then make focused changes to achieve the identity described above.

Prioritize accurate typography, restrained colour, editorial spacing, and the engraved Norwegian landscape motif.

Do not redesign unrelated functionality, add unnecessary dependencies, or use the original generated brand mockup as a substitute for production logo assets.

At the end, summarize the files changed, the design decisions made, any assets created, and the validation commands executed.Skailand Consulting — Brand & Design System

1. Project Overview

Brand: Skailand Consulting
Business: Website creation, web development, and digital consulting
Visual direction: Retro Scandinavian editorial design, inspired by vintage print, Norwegian nature, and classic technical illustration.

Create a distinctive, understated identity that feels like a beautifully typeset Norwegian design journal from the 1960s–1970s, combined with subtle references to web technology and networking.

The design should feel:

* Vintage, editorial, and carefully crafted
* Nordic, natural, and understated
* Technical without looking like a generic tech startup
* Professional, distinctive, and trustworthy
* Warm and human rather than corporate or sterile

Reference concept: A vintage editorial logo featuring a detailed engraved mountain-and-fjord landscape, forest silhouettes, and fine network arcs with small nodes. The wordmark uses high-contrast serif typography, with a small custom network detail incorporated into the letter A.

Preserve the existing Next.js application architecture and functionality. Integrate this design into the existing page rather than rebuilding unrelated parts of the application.

⸻

2. Colour Palette

Use the following colour tokens consistently across the website.

Token	Hex	Intended use
--color-forest-ink	#1E332D	Primary text, headings, logo, navigation, dark backgrounds
--color-warm-paper	#F3EBDD	Main page background, light sections, cards
--color-terracotta	#B56843	Network nodes, decorative lines, small accents, highlights
--color-moss	#788A78	Landscape illustrations, secondary graphics, muted accents
--color-weathered-stone	#B9B3A4	Borders, dividers, subtle decorative details

Colour balance

Aim for approximately:

* 80% forest ink and warm paper combined
* 15% moss green and weathered stone combined
* 5% terracotta accents

These percentages describe the overall visual impression, not strict CSS calculations.

Colour rules

* Use warm paper instead of pure white for the main light background.
* Use forest ink instead of pure black.
* Reserve terracotta for intentional accents, not large areas.
* Maintain readable contrast for body text and interactive elements.
* Use subtle paper textures sparingly; do not compromise readability.
* Support darker sections using forest ink with warm-paper typography.

CSS variables

Add to the existing global stylesheet, adapting the selector and file location to the project:

:root {
  --color-forest-ink: #1E332D;
  --color-warm-paper: #F3EBDD;
  --color-terracotta: #B56843;
  --color-moss: #788A78;
  --color-weathered-stone: #B9B3A4;
  --font-display: "Bodoni Moda", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;
  --border-subtle: var(--color-weathered-stone);
  --surface-primary: var(--color-warm-paper);
  --text-primary: var(--color-forest-ink);
  --accent-primary: var(--color-terracotta);
}

⸻

3. Typography

Primary display font: Bodoni Moda

Use Bodoni Moda for:

* The SKAILAND wordmark, where practical
* Large hero headings
* Editorial-style section headings
* Occasional large pull quotes or decorative text

Preferred starting weights: 600–700.

The high contrast between thick and thin strokes creates the vintage editorial character.

For the logo, consider custom SVG lettering rather than relying entirely on a font. The distinctive A in SKAILAND should be explored as a custom brand detail.

Secondary font: DM Sans

Use DM Sans for:

* Body text
* Navigation
* Buttons
* Forms
* Captions and labels
* The CONSULTING descriptor
* Technical details and small annotations

Use regular weights for body copy and medium or semibold weights for navigation and buttons.

Typography rules

* Combine expressive serif headings with clean sans-serif body text.
* Use generous line height and comfortable paragraph widths.
* Keep uppercase labels relatively small.
* Apply increased letter spacing to CONSULTING and small editorial labels.
* Avoid using the display font for long paragraphs.
* Avoid excessive font sizes, weights, and decorative styles.

Next.js font implementation

Prefer next/font/google if the project already supports it and build-time font retrieval is available. Otherwise, use the project’s existing font-loading approach or self-host font files.

Example for an App Router project:

import { Bodoni_Moda, DM_Sans } from "next/font/google";
export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});
export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

Apply the font variables to the existing root layout and map them to the CSS tokens. Check the project’s Next.js version and current font setup before modifying files.

⸻

4. Logo Direction

Primary logo

Develop a horizontal or stacked wordmark:

SKAILAND
C O N S U L T I N G

Visual characteristics:

* High-contrast serif typography
* Forest-ink lettering on warm-paper backgrounds
* Generous spacing around the wordmark
* Fine terracotta rules flanking CONSULTING
* An engraved Norwegian mountain-and-fjord illustration
* Evergreen silhouettes as a secondary landscape detail
* Delicate network arcs and nodes integrated into the illustration

Custom letterform concept

Explore a bespoke treatment of the A in SKAILAND.

Possible treatments:

* A small terracotta network node integrated into the letter
* A fine vertical connection line
* A geometric crossbar or triangular detail suggesting a network connection

Keep the word readable. The custom A should be a subtle signature, not a gimmick.

Illustration style

Use vintage engraving or woodcut-inspired linework.

Subject matter:

* Norwegian mountains
* Fjords and water
* Pine and spruce silhouettes
* Contour lines
* Small network nodes and connecting arcs

Avoid:

* Seafood imagery
* Generic stock mountain icons
* Futuristic neon networks
* Gradients and glossy effects
* Excessively complex illustrations at small sizes

Logo asset implementation

Prefer a custom SVG asset for the finished logo. Keep the wordmark and illustration crisp and scalable.

Suggested asset locations, adapted to the existing repository:

public/
  logo/
    skailand-logo.svg
    skailand-logo-dark.svg
    skailand-symbol.svg

Do not use an AI-generated raster mockup as the final production logo. Recreate the chosen design as clean vector artwork, ensuring all lettering is accurate.

If the finished logo assets do not exist yet, implement a clean temporary typographic wordmark and a simple original SVG symbol. Do not invent file paths or reference nonexistent assets.

⸻

5. Favicon and Brand Symbol

Create a simplified symbol that works at 16 × 16, 32 × 32, and larger sizes.

Concept

A minimal mountain peak combined with a small network arc and two or three nodes.

Requirements

* Forest-ink background
* Warm-paper mountain lines
* Optional terracotta nodes
* Strong silhouette
* Minimal detail
* Clear negative space
* No text inside the favicon

Asset formats

Prefer:

* icon.svg
* icon.png at 32 × 32 or higher
* favicon.ico for broad browser compatibility
* Apple touch icon if appropriate for the project

For a Next.js App Router project, inspect existing metadata and app/ or src/app/ structure before adding files. Next.js supports conventions such as app/icon.svg, app/favicon.ico, and app/apple-icon.png.

Avoid creating duplicate or conflicting favicon declarations.

⸻

6. Website Design Language

Apply the identity throughout the existing website.

Layout

* Editorial composition rather than generic SaaS layouts
* Strong alignment and a clear typographic hierarchy
* Generous whitespace
* Thin rules and restrained borders
* Asymmetric layouts where they improve the composition
* Wide landscape illustrations used as visual anchors
* Consistent spacing across sections

Backgrounds

Primary background: warm paper.

Use subtle texture or grain only where it enhances the editorial atmosphere. Prefer lightweight CSS patterns or small optimized assets rather than large background images.

The design must still look good with textures disabled.

Borders and decorative details

Use:

* One-pixel rules
* Fine dividers
* Dotted separators
* Small uppercase annotations
* Minimal ornamental marks
* Occasional terracotta nodes

Avoid:

* Excessive rounded cards
* Heavy drop shadows
* Glassmorphism
* Overuse of pills and badges
* Generic gradient blobs
* Repetitive card grids without editorial variation

Use modest corner radii for interactive elements. Prefer square or subtly rounded corners for editorial content.

Buttons

Primary buttons:

* Forest-ink background
* Warm-paper text
* Clear, readable sans-serif typography

Secondary buttons:

* Transparent or warm-paper background
* Forest-ink border and text

Hover states can introduce a restrained terracotta accent. Provide visible keyboard focus states and accessible contrast.

Links

Use forest ink as the default link colour. Use terracotta sparingly for hover states and decorative details. Do not rely on colour alone to communicate interactivity.

⸻

7. Homepage Hero Direction

If the existing page has a hero section, refine it around the following concept without changing its core content or functionality.

Suggested hierarchy

1. Small editorial eyebrow, such as INDEPENDENT DIGITAL CONSULTING
2. Large Bodoni Moda heading
3. Concise supporting text in DM Sans
4. One primary call-to-action
5. One secondary link, if appropriate
6. A custom Norwegian landscape illustration with subtle network connections

Example copy

Eyebrow:

WEB DESIGN · DEVELOPMENT · DIGITAL CRAFT

Headline:

Digital experiences, thoughtfully built.

Supporting text:

Skailand Consulting creates distinctive websites with a focus on design, usability, and thoughtful technical execution.

Primary CTA:

Let's talk

Secondary CTA:

Explore my work

These are proposed placeholders. Preserve existing approved business copy unless there is a clear reason to update it.

Hero illustration

Use a panoramic engraved mountain-and-fjord illustration, with a small number of connected network nodes following the mountain contours.

The illustration should complement the typography rather than dominate it.

On smaller screens:

* Reduce illustration complexity
* Stack content naturally
* Keep the heading readable
* Avoid horizontal overflow
* Ensure the CTA remains immediately accessible

⸻

8. Technical Implementation Requirements

Before changing code:

1. Inspect the existing repository and identify whether it uses the Next.js App Router or Pages Router.
2. Inspect existing global CSS, component conventions, font loading, and metadata.
3. Reuse the current styling framework, if one is already in place.
4. Identify the existing page and layout components that need updating.
5. Preserve all working functionality and existing integrations.

Implementation principles

* Use existing project conventions.
* Use reusable components where they provide genuine value.
* Keep design tokens centralized.
* Avoid unnecessary dependencies.
* Use semantic HTML.
* Keep client components to a minimum.
* Optimize SVG and image assets.
* Ensure all links and buttons have real, appropriate behavior.
* Avoid introducing placeholder interactions that appear functional but do nothing.

Accessibility

* Maintain readable text contrast.
* Include visible keyboard focus indicators.
* Provide appropriate alternative text for meaningful illustrations.
* Use empty alternative text for purely decorative images.
* Respect prefers-reduced-motion.
* Ensure the site works with keyboard navigation.
* Do not communicate essential information only through decorative colour.

Responsive behavior

Test at approximately:

* 375px mobile
* 768px tablet
* 1024px laptop
* 1440px desktop

Check:

* Navigation
* Hero typography
* Landscape illustration scaling
* Buttons and forms
* Footer
* Favicon and metadata
* Horizontal overflow

⸻

9. Suggested CSS Foundation

Adapt these styles to the existing stylesheet and design system.

html {
  background: var(--color-warm-paper);
  color: var(--color-forest-ink);
}
body {
  margin: 0;
  font-family: var(--font-body), sans-serif;
  background: var(--color-warm-paper);
  color: var(--color-forest-ink);
  -webkit-font-smoothing: antialiased;
}
h1,
h2,
h3,
.brand-display {
  font-family: var(--font-display), Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.035em;
}
.eyebrow {
  font-family: var(--font-body), sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.editorial-rule {
  height: 1px;
  border: 0;
  background: var(--color-weathered-stone);
}
.brand-accent {
  color: var(--color-terracotta);
}
.button-primary {
  background: var(--color-forest-ink);
  color: var(--color-warm-paper);
  border: 1px solid var(--color-forest-ink);
}
.button-primary:hover {
  background: #29463C;
}
.button-secondary {
  background: transparent;
  color: var(--color-forest-ink);
  border: 1px solid var(--color-forest-ink);
}
:focus-visible {
  outline: 2px solid var(--color-terracotta);
  outline-offset: 3px;
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

The sample button hover colour is a secondary shade derived from the forest-ink palette; keep the core brand tokens unchanged.

Note: if CSS variables are attached to font loader classes rather than defined as font-family names directly, map them correctly in the global stylesheet.

⸻

10. Acceptance Criteria

The implementation is complete when:

* [ ]	The existing Next.js page uses the new visual identity consistently.
* [ ]	The palette matches the specified hex values.
* [ ]	Bodoni Moda and DM Sans are loaded correctly, or suitable existing alternatives are used.
* [ ]	The design feels vintage, editorial, Scandinavian, and professional.
* [ ]	Norwegian landscape imagery incorporates subtle networking references.
* [ ]	The logo remains readable at different sizes.
* [ ]	A simplified favicon is implemented using a real, existing asset.
* [ ]	The site works at mobile, tablet, and desktop sizes.
* [ ]	Existing application functionality is preserved.
* [ ]	Accessibility and keyboard focus states are addressed.
* [ ]	There are no broken image references, missing assets, or console errors.
* [ ]	The project passes its existing lint, type-check, and build commands where available.

⸻

Final Instruction to the Coding Agent

Implement the design in the existing codebase. Begin by inspecting the project structure and current page, then make focused changes to achieve the identity described above.

Prioritize accurate typography, restrained colour, editorial spacing, and the engraved Norwegian landscape motif.

Do not redesign unrelated functionality, add unnecessary dependencies, or use the original generated brand mockup as a substitute for production logo assets.

At the end, summarize the files changed, the design decisions made, any assets created, and the validation commands executed.