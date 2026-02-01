# Mobile Portal Navigation

## Overview

This document describes the mobile-only portal navigation feature added to the Mza3et Discourse theme.

## Implementation

### What was added

A mobile-only navigation bar that displays the Morocco Portal ("بوابة المغرب") and World Portal ("بوابة العالم") links on mobile devices only.

### File Changes

1. **`javascripts/discourse/connectors/above-main-container/mza3et-custom-header.hbs`**
   - Added a new mobile-only `<nav>` element with class `mza-mobile-portal-nav` and `md:hidden` (visible on mobile only)
   - Modified the existing desktop navigation to add `hidden md:block` (hidden on mobile, visible on desktop)
   - Both navs reuse existing theme settings: `nav_morocco_url`, `nav_morocco_label`, `nav_world_url`, `nav_world_label`

2. **`spec/system/mza_theme_header_spec.rb`**
   - Added test case to verify mobile portal navigation renders correctly

3. **`docs/theme-mobile-nav.md`**
   - This documentation file

### Theme Settings Used

The implementation reuses existing theme settings (defined in `settings.yml`):

- `nav_morocco_url` - URL for Morocco portal (default: empty)
- `nav_morocco_label` - Label for Morocco portal (default: "بوابة المغرب")
- `nav_world_url` - URL for World portal (default: empty)
- `nav_world_label` - Label for World portal (default: "بوابة العالم")

Both navigation bars (mobile and desktop) use the same settings, ensuring consistency and DRY principles.

## Responsive Behavior

### Mobile (< md breakpoint, typically < 768px)

- **Mobile portal nav**: Visible (classes: `flex md:hidden`)
  - Shows only Morocco and World portal links
  - Horizontal scrollable pills layout
  - Same styling as desktop nav (rounded pills, soft shadows)
  
- **Desktop full nav**: Hidden (classes: `hidden md:block`)

### Desktop (>= md breakpoint, typically >= 768px)

- **Mobile portal nav**: Hidden (classes: `flex md:hidden`)
- **Desktop full nav**: Visible (classes: `hidden md:block`)
  - Shows all navigation links (Home, Morocco, World, Reports, Offers, Cars, Questions)
  - Same appearance as before - no changes

## Manual Testing Procedure

### Desktop Testing (>= 768px viewport)

1. Visit the Discourse homepage
2. Verify the existing navigation bar with all links is visible
3. Verify there is NO duplicate Morocco/World navigation above it
4. Click on "بوابة المغرب" and "بوابة العالم" links to verify they work

Expected: Desktop navigation behaves exactly as before, no visual changes.

### Mobile Testing (< 768px viewport)

1. Visit the Discourse homepage on a mobile device or resize browser window to < 768px
2. Verify a new navigation bar appears below the Discourse header
3. Verify it contains two pill-style buttons:
   - "بوابة المغرب" (Morocco Portal)
   - "بوابة العالم" (World Portal)
4. Verify the full desktop navigation bar is NOT visible
5. Tap/click each link to verify they navigate to the correct portals
6. Scroll horizontally if needed to see both links

Expected: Mobile-only navigation with Morocco and World portals is visible and functional.

### Responsive Testing

1. Start with desktop viewport (>= 768px) - verify full nav is visible
2. Gradually resize window to mobile viewport (< 768px)
3. At the breakpoint, verify:
   - Desktop nav disappears
   - Mobile portal nav appears
   - Transition is smooth (no layout shift)

## Styling

The mobile navigation uses:
- Tailwind v4 responsive utilities (`md:hidden`, `hidden md:block`)
- Same design tokens as desktop nav (CSS variables: `--mza-surface-2`, `--mza-border`, `--primary`)
- Consistent pill-style buttons with rounded corners and soft shadows
- Horizontal scrollable layout for smaller screens
- RTL-friendly (no special handling needed, follows theme direction)

## Notes

- No Discourse core modifications were made
- All changes are theme-level only
- Uses existing theme settings (no new configuration needed)
- Upgrade-safe: relies on standard Discourse connector system
- Accessible: proper ARIA labels for screen readers
- No new dependencies added

## Future Enhancements

Potential improvements for future iterations:
- Make mobile nav links configurable (currently hard-coded to Morocco + World only)
- Add icons to mobile nav pills (if needed for better recognition)
- Consider adding a "More" dropdown for additional links on mobile
- Add animation/transition effects for the pills
