<style>
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter18pt-Regular.woff2') format('woff2'),
       url('../assets/fonts/Inter18pt-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter18pt-Medium.woff2') format('woff2'),
       url('../assets/fonts/Inter18pt-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter18pt-Bold.woff2') format('woff2'),
       url('../assets/fonts/Inter18pt-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Bree Serif';
  src: url('assets/fonts/BreeSerif-Regular.woff2') format('woff2'),
       url('assets/fonts/BreeSerif-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>
# Design Reference

## Table of contents

- [About This Documentation](#about-this-documentation)
- [Design System — Foundations](#design-foundations)
- [External references](#external-references)
- [Rationale for Using Multiple Techniques](#rationale-for-using-multiple-techniques)
- [Accessibility Standards](#accessibility-standards)
  - [Reference Material](#reference-material)

- Website Design and Layout
- Accessibility Standards
  - Reference Material
- [Typography](#typography)
  - Headings — *Bree Serif*
  - Body Text — *Nunito*
- [Colour Palette](#colour-palette)
  - Brand Colours (*Shared Across Themes*)
  - Light Theme
  - Dark Theme
  - Semantic Tokens
  - Design Notes
- Logo Attribution
- Wire frames
  - Why Balsamiq
- Image Licensing
  - Image Source List
  - Usage Guidelines
  - Image Usage Guidelines
  - Alt Text
  - Aspect Ratios
  - Cropping
  - Quality & Style
  - Performance
- Typography Usage Guidelines
  - Font Pairing
  - Line Height
  - Max Line Length
  - Heading Scale
  - Hierarchy Rules
  - Readability
- Colour Usage Guidelines
  - Accents
  - Surfaces
  - Borders
  - Headings & Text


## About This Documentation

This design system and README follow common industry expectations for project documentation. A good README explains what the project is, how to use it, and how it’s structured. A design document goes further by outlining the decisions behind the work — accessibility standards, typography, colour choices, assets, and usage guidelines. This level of documentation supports maintainability, transparency, and assessment criteria such as Merit+, where clear justification and traceability of design decisions are required.

## Design Foundations

These foundations define the core principles, styles, and assets that shape the visual and functional identity of the project. They ensure consistency, accessibility, and a shared language across design and development.

### External references

- [Make a README](https://www.makeareadme.com/)
- [GitHub Docs](https://docs.github.com/en)
- [README guide](https://ranitmanik.github.io/README-guide/)
- [How to write design documentation](https://www.freecodecamp.org/news/how-to-write-a-good-software-design-document-66fcf019569c/)

## Rationale for Using Multiple Techniques

Different sections of the site intentionally employ varied layout and presentation techniques to demonstrate a broad understanding of HTML and CSS. Each method—such as side‑by‑side layouts, image overlays, and hover‑based reveal effects—has been selected to showcase a specific skill or concept relevant to the module’s learning outcomes.
Although the visual identity remains consistent across the project, the underlying implementations differ to illustrate versatility in problem‑solving and to evidence the ability to apply multiple approaches to structuring and styling content. This variation is pedagogically purposeful and reflects the exploratory nature of the project rather than the uniformity expected of a commercial production site.

## Accessibility Standards

This project follows **WCAG 2.2 Level AA,** the standard recommended by **GOV.UK** and required for legal compliance in the UK. **WCAG** ensures content is:

- Perceivable
- Operable
- Understandable
- Robust

### Reference Material

- [GOV.UK – Understanding WCAG 2.2](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag)
- [DWP Accessibility Manual – WCAG Explained](https://accessibility-manual.dwp.gov.uk/accessibility-law/web-content-accessibility-guidelines)
- [W3C – WCAG 2.2 Level AA Conformance](https://www.w3.org/WAI/WCAG2AA-Conformance)

## Typography

Our typography is fully self‑hosted for performance, reliability, and long‑term control.
The chosen fonts balance warmth, readability, and a friendly, approachable brand personality.

### Headings — Bree Serif

Friendly, handcrafted, and distinctive without compromising clarity.

<p style="font-family:'Bree Serif', serif; font-size:24px;">
The quick brown fox jumps over the lazy dog.
</p>

### Body Text — Inter

Modern, clean, highly readable, and fully self‑hosted for performance.

<p style="font-family:'Inter', sans-serif; font-size:24px;">
  The quick brown fox jumps over the lazy dog.
</p>

## Colour Palette

The colour palette was chosen based on the images being used on the site to ensure a level of contrast on the pages. The site will also make use of a light and dark theme, toggle or OS driven.

### Brand Colours (Shared Across Themes)

--brand-barn-red: #5A0F0F;  
--brand-sun-gold: #E8C9A1;  
--brand-grass-green: #C7D7A4;  
--brand-sky-blue: #D8E4F0;  
--brand-earth-brown: #3A2A1E;  

<div style="display:flex; gap:10px;">
<div style="width:60px; height:60px; background:#5A0F0F; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#E8C9A1; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#C7D7A4; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#D8E4F0; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#3A2A1E; border-radius:6px;"></div>
</div>

### Light Theme

--light-bg: #F9F3E6;  
--light-surface: #F4E9D2;  
--light-text: #3A2A1E;  
--light-heading: #5A0F0F;  
--light-border: #E8C9A1;  
--light-accent: #C7D7A4;  
--light-accent-hover: #AFC48B;  

<div style="display:flex; gap:10px;">
<div style="width:60px; height:60px; background:#F9F3E6; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#F4E9D2; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#3A2A1E; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#5A0F0F; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#E8C9A1; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#C7D7A4; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#AFC48B; border-radius:6px;"></div>
</div>

### Dark Theme

--dark-bg: #1F2E1A;  
--dark-surface: #1F2E1A;  
--dark-text: #F4E9D2;  
--dark-heading: #E8C9A1;  
--dark-border: #3A2A1E;  
--dark-accent: #C7D7A4;  
--dark-accent-hover: #D8E4F0;  

<div style="display:flex; gap:10px;">
<div style="width:60px; height:60px; background:#1F2E1A; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#1F2E1A; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#F4E9D2; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#E8C9A1; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#3A2A1E; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#C7D7A4; border-radius:6px;"></div>
<div style="width:60px; height:60px; background:#D8E4F0; border-radius:6px;"></div>
</div>

### Semantic Tokens

Semantic tokens represent meaning (e.g., “heading colour”) rather than specific theme values. They allow the design system to scale and adapt across light and dark themes.

--color-heading → light: --light-heading / dark: --dark-heading  
--color-text → light: --light-text / dark: --dark-text  
--color-accent → light: --light-accent / dark: --dark-accent  
--color-border → light: --light-border / dark: --dark-border  
--color-surface → light: --light-surface / dark: --dark-surface  

### Design Notes

The idea behind this colour palette

- Barn red + sun gold = recognisable brand signature
- Grass green works in both themes without contrast issues
- You’ve avoided the classic dark‑mode low‑contrast trap
- Palette is strong enough to support seasonal variants (your idea — and a good one)

## Logo Attribution

The project logo was generated by Microsoft Copilot based solely on a written description provided by the user. No external images, trademarks, or copyrighted materials were used during its creation. Any resemblance to existing logos or brand identities is unintentional and purely coincidental.

## Wire frames

Wire frames were created using [Balsamiq](Balsamiq.com)

### Why Balsamiq

- Quick to iterate
- Fast‑iteration no nonsense approach
- Forces clarity of layout
- Minimal amount of experience required to create a working model

These wire frames form the backbone of the layout decisions in this system.

## Image Licensing

All images used in this project are sourced from copyright‑free or permissively licensed libraries. This ensures:

- No copyright risk
- Freedom to modify and optimise

### Image Source List

- [i stock photo](https://www.istockphoto.com/search/2/image-film?phrase=agriculture&page=2)
- [Adobe Stock](https://stock.adobe.com/)

### Usage Guidelines

These guidelines ensure consistent, accessible, and intentional use of images, typography, and colour across the project.

### Image Usage Guidelines

Images support the brand’s warmth and storytelling, but they must remain accessible and purposeful.

### Alt Text

- Every meaningful image must include descriptive alt text
- Keep it short, factual, and focused on what the user needs to know
- Decorative images should use empty alt text (alt="")

### Aspect Ratios

- Use consistent aspect ratios across similar components (e.g., cards, hero banners)
- Recommended:
- 16:9 for wide banners
- 4:3 or 1:1 for cards and thumbnails

### Cropping

- Crop for clarity
- Keep the subject centred or aligned to a clear focal point
- Avoid cutting off key details (faces, objects, signage)

### Quality & Style

- Use high‑resolution images that remain crisp on retina displays
- Avoid overly stylised filters or low‑contrast photography
- Prefer natural lighting and authentic textures to match the farm’s brand

### Performance

- Optimise images for web (compression, modern formats where possible)
- Use responsive image sizes to avoid loading unnecessary large files

## Typography Usage Guidelines

### Font Pairing

- Bree Serif → headings only
- Inter → body text, UI text, labels, buttons

### Line Height

- Body text: 1.5–1.7
- Headings: 1.2–1.3

### Max Line Length

- Aim for 60–75 characters per line
- Prevents “wall of text” fatigue
- Improves scanning and comprehension

### Heading Scale

- H1: 2.25rem
- H2: 1.75rem
- H3: 1.5rem
- H4: 1.25rem
- H5: 1.125rem
- H6: 1rem

### Hierarchy Rules

- Use one H1 per page
- Don’t skip heading levels
- Keep headings short and meaningful

### Readability

- Avoid justified text
- Use sentence case for headings (friendly, modern, accessible)
- Ensure strong colour contrast (WCAG AA minimum)

## Colour Usage Guidelines

### Accents

- Use grass green as the primary accent for buttons, links, and highlights
- Use accents sparingly to maintain impact
- Hover states must meet contrast requirements

### Surfaces

- Use light-surface or dark-surface for cards, panels, and UI blocks
- Avoid mixing too many surface colours on one page
- Maintain clear separation between background and surface layers

### Borders

- Use borders subtly to define structure
- Light theme → warm gold border
- Dark theme → earthy brown border
- Avoid heavy or high‑contrast borders unless needed for accessibility

### Headings & Text

- Headings use brand colours (barn red in light mode, sun gold in dark mode)
- Body text must always meet WCAG AA contrast
- Never use accent colours for long‑form text

## Java Scripts

Not using the **Bootstrap** *JavaScript components* meant I needed a few small custom scripts to handle simple **UI** interactions. My JavaScript knowledge is still developing, so I explored a couple of free online resources for inspiration while keeping the scripts minimal and focused on essential trigger events only.


### Java resources

[Free java scripts - java-scripts.net](https://www.java-scripts.net)  
[Tutorial resource - w3schools](https://www.w3schools.com/)

## Design Decisions

### Responsive Grid: Uneven Rows on Small Breakpoints

Our layout uses a custom CSS Grid with responsive  values. At the  breakpoint (based on **Bootstrap‑style** sizing, but implemented in pure CSS), three cards naturally form a 2 + 1 layout. This happens because the available column width supports two cards per row, leaving the third to wrap onto its own line.  
We intentionally keep this behavior. It avoids forced stretching, preserves consistent card proportions, and maintains predictable, readable layouts across breakpoints. At the smallest sizes (**xs**), cards stack vertically for clarity.

lg:  
[1][2][3]

md:  
[1][2][3]

sm:  
[1][2]  
[3]

xs:  
[1]  
[2]  
[3]  

### Modal irregular design

Using a standard **\<header>** element inside the modal caused unexpected behaviour: the browser attempted to merge it with the site’s main **\<header>**, resulting in layout distortion.
To avoid this, the modal uses a custom element **\<modal-header>** instead of the native **\<header>** tag.

This is an intentional and permanent design choice to ensure stable modal behaviour across browsers.

### Update

After further testing with HTML validators and accessibility tools, the custom element was replaced with a standard **\<div>.** This resolves the browser issue while maintaining full semantic clarity and compatibility with validators and screen readers.
