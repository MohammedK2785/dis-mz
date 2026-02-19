# Sprint: UI Cards + Mobile (v1)

## Overview

This sprint modernizes the Mza3et Discourse theme with card-based UI components and comprehensive mobile optimizations. The implementation prioritizes touch-friendly interactions, visual hierarchy through subtle elevation, and full RTL/LTR support using CSS logical properties.

## Scope

### 1. Discourse Header Modernization

**File**: `scss/zz-ui-cards-mobile.scss` (Section 1)

- Glass morphism background using `backdrop-filter: blur()`
- Subtle bottom border with theme border variable
- Pill-style header buttons (search, notifications, menu)
- Hover/focus states with shadow elevation

### 2. Custom Topbar/Tabs (`.mza-topbar`)

**File**: `scss/zz-ui-cards-mobile.scss` (Section 2)

- Pill navigation with rounded-full corners
- Compact spacing for efficient use of space
- Horizontal scroll on mobile with `-webkit-overflow-scrolling: touch`
- Thin, subtle scrollbar styling
- Color variants for section tabs (offers, cars, reports, questions)

### 3. Topic List Row Cards

**File**: `scss/zz-ui-cards-mobile.scss` (Section 3)

- `border-spacing: 0 0.75rem` for visual separation
- Rounded corners using `--mza-radius-md` token
- Subtle hover with `translateY` and shadow increase
- Pinned indicator: `border-inline-start: 3px solid var(--tertiary)`
- Closed topic indicator with muted opacity and border

### 4. Topic Post Cards

**File**: `scss/zz-ui-cards-mobile.scss` (Section 4)

- Card appearance with border, radius, and shadow
- Improved typography: `line-height: 1.75`, tight letter-spacing
- Modern blockquotes with accent `border-inline-start`
- Enhanced code blocks with proper padding and radius
- Glass-effect post controls bar

### 5. Mobile Optimizations

**File**: `scss/zz-ui-cards-mobile.scss` (Section 5)

- No horizontal overflow (`overflow-x: hidden` on 375px)
- Touch targets: minimum 44px height/width
- Stacked card layout for topic list on mobile
- Readable stats with `font-variant-numeric: tabular-nums`
- Horizontal scrolling tabs with momentum

### 6. RTL/LTR Support

**File**: `scss/zz-ui-cards-mobile.scss` (Section 6)

All styles use CSS logical properties:
- `border-inline-start` / `border-inline-end`
- `padding-inline` / `padding-block`
- `margin-inline` / `margin-block`
- `inset-inline-start` / `inset-inline-end`
- `text-align: start` / `text-align: end`

## Files Changed

| File | Action | Description |
|------|--------|-------------|
| `scss/zz-ui-cards-mobile.scss` | Created | Main UI Cards + Mobile styles |
| `docs/CHANGELOG.md` | Created | Project changelog |
| `docs/Sprint-UI-Cards-Mobile.md` | Created | This document |

## QA Steps

### Desktop Testing (1024px+)

1. **Header**
   - [ ] Verify glass background effect is visible
   - [ ] Check pill buttons have proper hover states
   - [ ] Ensure border is subtle but visible

2. **Topic List**
   - [ ] Confirm rows have card appearance with spacing
   - [ ] Check hover elevates the card slightly
   - [ ] Verify pinned topics have left border (right in RTL)
   - [ ] Test closed topics show muted styling

3. **Topic Posts**
   - [ ] Cards have visible border and shadow
   - [ ] Blockquotes have accent border on inline-start
   - [ ] Code blocks have proper styling
   - [ ] Post controls have glass effect

### Tablet Testing (768px - 1023px)

1. **Topbar/Tabs**
   - [ ] Horizontal scroll works smoothly
   - [ ] Pills are properly sized
   - [ ] Active states are visible

2. **Topic List**
   - [ ] Cards stack vertically
   - [ ] Stats remain readable

### Mobile Testing (< 768px)

1. **Touch Targets**
   - [ ] All buttons are at least 44px
   - [ ] Tap targets are properly spaced

2. **Horizontal Overflow**
   - [ ] No horizontal scroll on page body
   - [ ] Tabs scroll horizontally within container

3. **Topic List**
   - [ ] Cards display as full-width blocks
   - [ ] Pinned indicator visible on card border
   - [ ] Meta info stacks cleanly

4. **Extra Small (375px)**
   - [ ] No horizontal overflow
   - [ ] Text remains readable
   - [ ] Padding is reduced but content is accessible

### RTL Testing

1. **Text Direction**
   - [ ] Switch to RTL locale (Arabic)
   - [ ] Verify text aligns to start (right)
   - [ ] Pinned indicator appears on right (inline-start)

2. **Spacing**
   - [ ] Padding/margins flip correctly
   - [ ] Scrollbars appear on correct side

### Dark Mode Testing

1. **Colors**
   - [ ] Glass backgrounds use dark variants
   - [ ] Borders are visible in dark mode
   - [ ] Shadows have appropriate opacity

## Performance Considerations

- All styles use CSS custom properties for theming
- `backdrop-filter` has GPU acceleration
- No JavaScript required for these styles
- Styles are scoped to avoid selector conflicts

## Browser Support

- Modern browsers with CSS logical properties support
- Fallbacks for older browsers via standard border/padding
- `backdrop-filter` degrades gracefully to solid background

## Related Documentation

- [RTL-First Rules](core-reference/rtl-rules.md)
- [Topic List Selector Map](context-pack/topic-list-selector-map.md)
- [Variables Cheatsheet](core-reference/variables-cheatsheet.md)
