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
- [](#)


## Validation

- HTML validated using W3C Validator
- CSS validated using W3C CSS Validator
- JavaScript linted manually (no console errors)
- Confirm no unused or broken attributes

## Markup Validation

### index

#### Errors

![Homepage Screenshot](validator-index-e1.png)

#### Fix

The *aria-label* attribute was removed from the \<p> element because it was unnecessary. The visible text **‘The Waltons Farm’** is already fully descriptive for screen readers, and the *W3C validator* correctly flagged that *aria-label* must not be used on a \<p>  without a special role.

#### Final Validation

![Homepage Screenshot](validator-index.png)

## Navigation

### Navigation Test

All navigation elements must direct users to their correct destinations. This includes every link and every button, each of which should perform its intended action. The test covers every instance of each link or button across the site.

#### Desktop Link

| Link | index.html | about.html |  
| ----------- | ----------- | ----------
| Home | [✓] | [ ] |
| About Us | [✓] | [ ] |
| Whats On | [✓] | [ ] |
| Activities | [✓] | [ ] |
| Seasonal | [✓] | [ ] |
| Shop & Cafe | [✓] | [ ] |
| Gallery | [✓] | [ ] |
| Contact | [✓] | [ ] |
| Dark theme toggle | [✓] | [ ] |
| Leave Feedback | [✓] | [ ] |
| Sign Up (newsletter) | [✓] | [ ] |
| Newsletter Modal *'Cancel'* | [✓] | [ ] |
| Newsletter Modal *'Subscribe'* | [✓] | [ ] |
| Newsletter Modal 'X' | [✓] | [ ] |
| Newsletter Modal *'outside page click'* | [✓] | [ ] |
| Facebook Icon | [✓] | [ ] |
| Instagram Icon | [✓] | [ ] |
| Twitter / 'X' Icon | [✓] | [ ] |
| YouTube Icon | [✓] | [ ] |
| Historical Link | N/A | [ ] |
