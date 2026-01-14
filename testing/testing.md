# Testing

## Introduction & Purpose

The purpose of this testing document is to demonstrate the full verification process carried out on **The Waltons Family Farm website.** This includes:

- Functional testing of navigation, interactive components, and user flows
- Accessibility checks using screen readers, keyboard navigation, and ARIA validation
- HTML, CSS, and JavaScript validation
- Responsive design testing across multiple devices and breakpoints
  - This site does not use Bootstrap as a dependency, but has used its breakpoint system as a professional reference point while building it's own responsive layout.
- Browser compatibility checks
- Bug tracking and resolutions
- Evidence screenshots stored in the /testing directory
This document ensures the site meets the expected standards for usability, accessibility, and reliability, and provides a clear audit trail of the testing process.

## Table of Contents

- [Introduction & Purpose](#introduction--purpose)
- [Validation](#validation)
- [Markup Validation](#markup-validation)
  - [index.html](#index)
  - [about.html](#about)
  - [historical.html](#historical)
  - [activities.html](#activities)
  - [seasonal.html](#seasonal)
- [Navigation](#navigation)
  - [Desktop Links](#desktop-links)
- [Visual Acceptance Test](#visual-acceptance-test)
  - [Objective,Scope](#objective)
  - [Scope](#scope)
  - [Combined Visual Acceptance Matrix](#desktop-matrix)
  - [Mobile and Bootstrap xs Breakpoint](#bsxs)
- [Chrome Lighthouse Stats](#chrome-lighthouse)

## Validation

- HTML validated using W3C Validator
- CSS validated using W3C CSS Validator
- JavaScript linted manually (no console errors)
- Confirm no unused or broken attributes

## Markup Validation

<a id="index"></a>

### index.html

![validator](validator-index-e1.png)

validation-err-01

#### Fix for validation-err-01

The *aria-label* attribute was removed from the \<p> element because it was unnecessary. The visible text **‘The Waltons Farm’** is already fully descriptive for screen readers, and the *W3C validator* correctly flagged that *aria-label* must not be used on a \<p>  without a special role.

#### Final Validation for index.html

<span style="color: green;">Pass no errors</span>


![validator](validator-index.png)

<a id="about"></a>

### about.html

#### Validation for about.html

<span style="color: green;">Pass no errors</span>

<a id="historical"></a>

### historical.html

![validator](validator-index-e1.png)
validation-02 **x12**

#### Fix for Error validation-err-02

cut and paste error 2 x role="" in the same element  

\<img src="assets/images/ach1.webp" alt="burial mound" class="thumb active" role="button" tabindex="0" aria-pressed="true" role="listitem"
>

remove role="listitem"

#### Final Validation for historical.html

<span style="color: green;">Pass no errors</span>

<a id="activities"></a>
### activities.html

#### Validation for activities.html

<span style="color: green;">Pass no errors</span>

<a id="seasonal"></a>
### seasonal.html

#### Validation for seasonal.html

<span style="color: green;">Pass no errors</span>

## Chrome Lighthouse

Lighthouse audits are run at key milestones to confirm that performance, accessibility standards remain stable.

![lighthouse](lighthouse%20light.png)
**Light Theme**

![lighthouse](lighthouse%20dark.png)
**Dark Theme**

## Navigation

### Navigation Test

All navigation elements must direct users to their correct destinations. This includes every link and every button, each of which should perform its intended action. The test covers every instance of each link or button across the site.

#### Desktop Links

| **Link**            | **Index** | **About** | **Activities** | **Seasonal** | **Shop** | **Gallery** | **Historical** |
|---------------------|-----------|-----------|----------------|--------------|----------|-------------|----------------|
| Home                                    | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| About Us                                | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Whats On                                | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Activities                              | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Seasonal                                | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Shop & Cafe                             | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Gallery                                 | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Contact                                 | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Dark theme toggle                       | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Sign Up (newsletter)                    | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Newsletter Modal *'Cancel'*             | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Newsletter Modal *'Subscribe'*          | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Newsletter Modal 'X'                    | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Newsletter Modal *'outside page click'* | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Facebook Icon                           | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Instagram Icon                          | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Twitter / 'X' Icon                      | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| YouTube Icon                            | [✓] | [✓] | [✓] | [✓] | [✓] | [✓] | [✓]
| Historical Link                         | [N/A] | [✓] | [N/A] | [N/A] | [N/A] | [N/A] | [N/A]
| Leave Feedback                          | [N/A] | [✓] | [N/A] | [N/A] | [N/A] | [N/A] | [N/A]
| Feedback Form *'Cancel'*                | [N/A] | [✓] | [N/A] | [N/A] | [N/A] | [N/A] | [N/A]
| Feedback Form *'Subscribe'*             | [N/A] | [✓] | [N/A] | [N/A] | [N/A] | [N/A] | [N/A]
| Feedback Form 'X'                       | [N/A] | [✓] | [N/A] | [N/A] | [N/A] | [N/A] | [N/A]
| Feedback Form *'outside page click'*    | [N/A] | [✓] | [N/A] | [N/A] | [N/A] | [N/A] | [N/A]
| Booking Form                            | [N/A] | [N/A] | [✓] | [✓] | [N/A] | [N/A] | [N/A]
| Booking Form *'Cancel'*                 | [N/A] | [N/A] | [✓] | [✓] | [N/A] | [N/A] | [N/A]
| Booking Form *'Subscribe'*              | [N/A] | [N/A] | [✓] | [✓] | [N/A] | [N/A] | [N/A]
| Booking Form 'X'                        | [N/A] | [N/A] | [✓] | [✓] | [N/A] | [N/A] | [N/A]
| Booking Form *'outside page click'*     | [N/A] | [N/A] | [✓] | [✓] | [N/A] | [N/A] | [N/A]

## Visual Acceptance Test

### Objective

Evaluate the final rendered page as a complete visual experience. This test ensures the interface feels coherent, accessible, and polished across both light and dark modes.

### Scope

#### This test covers the following visual elements:

- Typography consistency, hierarchy, and readability
- Image quality, alignment, cropping, and responsiveness
- Colour palette accuracy and thematic cohesion
- Contrast ratios and accessibility compliance
- Visual balance, spacing, and overall layout integrity
- Behaviour of all visual elements when switching between light and dark mode
Preconditions
- Page is fully built with all assets loaded
- Light/dark mode toggle is functional
- Browser zoom set to 100%
- No dev tools overlays or forced colour modes active

#### Test Steps

1. Load the page in light mode.
2. Observe the page holistically without interacting — assess first impressions.
3. Inspect typography for consistency in size, weight, and spacing.
4. Review all images for clarity, correct cropping, and alignment.
5. Check colour usage against the design palette.
6. Validate contrast ratios for text, buttons, and interactive elements.
7. Switch to dark mode.
8. Repeat steps 2–6, noting any mismatches or regressions.
9. Resize the viewport (desktop → tablet → mobile) and confirm visual stability.

#### Expected Results

- Fonts appear consistent, readable, and correctly scaled.
- Images load crisply, align with surrounding content, and maintain aspect ratio.
- Colour palette matches design intent in both modes.
- Contrast meets accessibility standards (WCAG AA or higher).
- No visual artefacts, layout shifts, or mismatched tokens appear when toggling modes.
- The page feels cohesive, intentional, and visually balanced at all breakpoints.
Pass/Fail Criteria
- Pass: All visual elements meet the expected results with no significant deviations.
- Fail: Any visual inconsistency, contrast issue, misaligned asset, or mode‑specific regression is observed.

<a id="desktop-matrix"></a>
## Combined Visual Acceptance Matrix — Desktop / Tablet / Mobile

| **Check Category**            | **Viewport** | **Index** | **About** | **Activities** | **Seasonal** | **Shop** | **Gallery** | **Historical** | **Newsletter** | **Feedback** | **Booking** |
|-------------------------------|--------------|-----------|-----------|----------------|--------------|----------|-------------|----------------|----------------|--------------|-------------|
| **Typography**                | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Images**                    | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Colour & Palette**          | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Contrast & Accessibility**  | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Layout & Spacing**          | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Light/Dark Mode Behaviour** | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Breakpoint Stability**      | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **General Visual Cohesion**   | Desktop      | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Tablet       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
|                               | Mobile       | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |



The form was tested using the Code Institute formdump endpoint, which returns a simple POST‑echo page showing the submitted field names and values. Because the endpoint does not redirect or reload the original form, using the browser’s Back button returns to the form exactly as it was before submission, with all fields still populated. This is expected behaviour for a non‑redirecting POST test service and should not be interpreted as an error.
<a id="bsxs"></a>
## Mobile and Bootstrap xs Breakpoint

After reviewing the layout on an actual mobile device, it became clear that Bootstrap’s default breakpoints weren’t accurately reflecting real‑world behaviour. The issue was amplified by the fact that DevTools emulation, while useful as a rough guide, failed to reproduce the true viewport dimensions and rendering quirks of the physical screen. Once the design was tested on a real handset, the mismatch became obvious, and a more realistic breakpoint was introduced at 400px to align the layout with how users actually experience the interface.