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

2. Test Scripts (What You Actually Did)
These are the structured test scripts you can include. They read like a professional QA checklist but still reflect the way you’ve been building and refining the site.
2.1 Navigation & Header
- Confirm logo and brand text display correctly
- Test mobile nav toggle opens/closes as expected
- Ensure aria-expanded updates correctly
- Verify dropdown menu opens/closes and is keyboard accessible
- Check all links navigate to the correct pages
- Confirm theme toggle switches between light/dark and persists via localStorage
2.2 Homepage Content
- Hero section loads with correct heading
- Grid cards display images and text correctly
- Activity cards load images with correct alt text
- All images load without broken paths
- Check layout at all breakpoints (mobile/tablet/desktop)
2.3 Modal Testing (Newsletter)
- Clicking “Sign Up” opens modal
- Focus moves to close button
- Backdrop click closes modal
- Close button closes modal
- Focus returns to triggering element
- Form submits to Code Institute endpoint
- Modal is keyboard accessible
- Escape key closes modal (if implemented)
2.4 Footer Testing
- Opening Hours section displays correctly
- Contact Us section displays correctly
- Social icons open in new tabs with rel="noopener"
- Footer headings use <h2> and pass validator
- All links function correctly
2.5 Accessibility Testing
- Run Lighthouse accessibility audit
- Test keyboard navigation (Tab, Shift+Tab, Enter, Space)
- Confirm visible focus states
- Validate ARIA attributes
- Check heading hierarchy
- Confirm alt text accuracy
- Test with screen reader (NVDA or VoiceOver)

## Validation

- HTML validated using W3C Validator
- CSS validated using W3C CSS Validator
- JavaScript linted manually (no console errors)
- Confirm no unused or broken attributes

### index.html

#### Errors

![Homepage Screenshot](/testing/validator-index-e1.png)

#### Fix

The *aria-label* attribute was removed from the \<p> element because it was unnecessary. The visible text **‘The Waltons Farm’** is already fully descriptive for screen readers, and the *W3C validator* correctly flagged that *aria-label* must not be used on a \<p>  without a special role.





2.7 Responsive Testing
Tested on:
- iPhone SE / 12 / 14
- iPad
- Android mobile
- 13" laptop
- 24" desktop monitor
Check:
- Layout integrity
- Image scaling
- Navigation behaviour
- Text readability
2.8 Browser Compatibility
Tested on:
- Chrome
- Firefox
- Safari
- Edge
Check:
- Rendering consistency
- Font loading
- CSS grid behaviour
- JavaScript functionality
2.9 Bugs & Fixes
Document each bug like this:
Bug: Dropdown menu not closing when clicking outside
Cause: Missing event listener
Fix: Added document-level click handler to close open dropdowns
Bug: W3C warning: “Section lacks heading”
Fix: Added <h2> headings with .footer-styling class
Bug: ARIA-label invalid on <span> and <p>
Fix: Removed unnecessary ARIA-label; visible text already descriptive
…and so on.

If you want, I can also generate:
- a Testing Summary
- a User Story Testing Table
- a Bugs Table
- a Lighthouse screenshot layout
- or a final checklist
Just say the word and I’ll shape it to match the rest of your documentation.
