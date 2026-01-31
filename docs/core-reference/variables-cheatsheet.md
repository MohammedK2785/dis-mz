# Discourse CSS Variables Cheatsheet

## Overview

Discourse uses **CSS custom properties** (variables) extensively for theming. These variables automatically adapt to color schemes and light/dark modes, making them the recommended way to customize your theme.

⚠️ **Important:** Do not use deprecated SCSS variables like `$primary`, `$secondary`. These have been deprecated since August 2020. Always use CSS custom properties with the `var()` syntax.

## How to Use Variables

```css
.my-element {
  background: var(--quaternary);
  color: var(--primary);
  font-size: var(--font-up-1);
  padding: calc(var(--font-0) * 0.5);
}
```

Variables automatically:
- Adapt to the active color scheme
- Switch between light/dark modes
- Update globally when changed
- Maintain consistency across your theme

## Color Variables

### Primary Color Palette

These are the main colors defined in your color scheme (Admin > Customize > Colors):

| Variable | Purpose | Usage |
|----------|---------|-------|
| `--primary` | Primary text color | Body text, headings |
| `--secondary` | Secondary background | Page background, card backgrounds |
| `--tertiary` | Accent color | Links, buttons, highlights |
| `--quaternary` | Secondary accent | Subtle backgrounds, borders |
| `--header_background` | Header background color | Site header, navigation |
| `--header_primary` | Header text color | Text in header |
| `--highlight` | Highlight color | Selected items, hover states |
| `--danger` | Error/danger color | Error messages, delete buttons |
| `--success` | Success color | Success messages, confirmations |
| `--love` | Love/like color | Like buttons, favorites |

### Derivative Colors

Discourse generates many derivative colors from the primary palette. Inspect the `<html>` element in browser DevTools to see them all. Common ones include:

| Variable | Purpose |
|----------|---------|
| `--primary-low` | Very light version of primary |
| `--primary-medium` | Medium version of primary |
| `--primary-high` | High contrast version of primary |
| `--primary-very-high` | Very high contrast version of primary |
| `--secondary-low` | Very light version of secondary |
| `--secondary-high` | High contrast version of secondary |
| `--tertiary-low` | Very light version of tertiary |
| `--tertiary-high` | High contrast version of tertiary |

**Pattern:** Most colors have `-low`, `-medium`, `-high`, and `-very-high` variants for different contrast levels.

## Typography Variables

### Base Font Sizes

| Variable | Size | Purpose |
|----------|------|---------|
| `--base-font-size` | 0.938em (≈15px) | Default base size |
| `--base-font-size-larger` | 1.063em (≈17px) | Larger base option |
| `--base-font-size-largest` | 1.118em (≈19px) | Largest base option |

### Font Scale System

Discourse uses a modular scale system based on mathematical ratios. All sizes are in `em` units, relative to `--base-font-size`.

**Scale up (larger text):**

| Variable | Size | Typical Usage |
|----------|------|---------------|
| `--font-up-6` | 2.296em | Extra large headings |
| `--font-up-5` | 2em | Large headings (h1) |
| `--font-up-4` | 1.7511em | Medium headings (h2) |
| `--font-up-3` | 1.5157em | Smaller headings (h3) |
| `--font-up-2` | 1.3195em | Subheadings (h4) |
| `--font-up-1` | 1.1487em | Slightly larger text |

**Base scale:**

| Variable | Size | Typical Usage |
|----------|------|---------------|
| `--font-0` | 1em | Normal text |

**Scale down (smaller text):**

| Variable | Size | Typical Usage |
|----------|------|---------------|
| `--font-down-1` | 0.8706em | Small labels |
| `--font-down-2` | 0.7579em | Tiny text, metadata |
| `--font-down-3` | 0.6599em | Very small text |
| `--font-down-4` | 0.5745em | Extra small text |
| `--font-down-5` | 0.5em | Minimal text |
| `--font-down-6` | 0.4355em | Ultra small text |

**Example:**
```css
h1 {
  font-size: var(--font-up-5); /* 2em */
}

.metadata {
  font-size: var(--font-down-2); /* 0.7579em */
}
```

### Line Heights

| Variable | Value | Purpose |
|----------|-------|---------|
| `--line-height-small` | 1 | Tight spacing |
| `--line-height-medium` | 1.2 | Headings or large text |
| `--line-height-large` | 1.4 | Normal or small text |

**Note:** These are unitless values that multiply with font-size.

## Spacing & Layout

### Breakpoint Variables

These are SCSS variables (not CSS custom properties) used in media queries:

| Variable | Value | Usage |
|----------|-------|-------|
| `$small-width` | 800px | Mobile breakpoint |
| `$medium-width` | 995px | Tablet breakpoint |
| `$large-width` | 1110px | Desktop breakpoint |

**Example:**
```scss
.my-component {
  flex: 0 0 32%;
  
  @media screen and (max-width: $small-width) {
    flex: 0 0 100%;
  }
}
```

### Z-Index System

Discourse uses a structured z-index system. Access via SCSS `z()` function:

```scss
.my-modal {
  z-index: z("modal", "content"); // 1300
}

.my-header {
  z-index: z("header") + 1; // 1001
}

.my-dropdown {
  z-index: z("dropdown"); // 300
}
```

**Z-index layers (approximate):**
- `"max"`: 9999
- `"fullscreen"`: 1700
- `"modal"`: 1200-1600 (nested)
- `"mobile-composer"`: 1100
- `"header"`: 1000
- `"tooltip"`: 600
- `"composer"`: 400-500 (nested)
- `"dropdown"`: 300
- `"usercard"`: 200
- `"timeline"`: 100
- `"base"`: 1

## Advanced Variables

### Box Shadows

Access via SCSS `shadow()` function:

```scss
.my-card {
  box-shadow: shadow("card"); // 0 4px 14px rgba(0, 0, 0, 0.15)
}

.my-dropdown {
  box-shadow: shadow("dropdown"); // 0 2px 3px 0 rgba(0, 0, 0, 0.2)
}
```

**Available shadows:**
- `"modal"`: Deep shadow for modals
- `"composer"`: Composer shadow
- `"menu-panel"`: Menu/panel shadow
- `"card"`: Card shadow
- `"dropdown"`: Dropdown shadow
- `"header"`: Header shadow
- `"kbd"`: Keyboard key shadow
- `"focus"`: Focus ring
- `"focus-danger"`: Danger focus ring

## Discovering Variables

### Method 1: Browser DevTools

1. Open DevTools (F12)
2. Inspect the `<html>` element
3. Look at the Styles panel
4. Scroll through all CSS variables defined on `:root`

### Method 2: Styleguide

1. Enable the styleguide plugin (included in core)
2. Visit `/styleguide` on your Discourse instance
3. Browse all UI components and their variables
4. See variables in action with different color schemes

### Method 3: Source Code

**Color variables:**
- [color_definitions.scss](https://github.com/discourse/discourse/blob/main/app/assets/stylesheets/color_definitions.scss)

**Font variables:**
- [font-variables.scss](https://github.com/discourse/discourse/blob/main/app/assets/stylesheets/common/font-variables.scss)

**General variables:**
- [variables.scss](https://github.com/discourse/discourse/blob/main/app/assets/stylesheets/common/foundation/variables.scss)

## Best Practices

### ✅ Do

```css
/* Use variables for colors */
.button {
  background: var(--tertiary);
  color: var(--secondary);
}

/* Use font scale */
.heading {
  font-size: var(--font-up-3);
}

/* Combine with calc() for custom spacing */
.spacing {
  margin: calc(var(--font-0) * 1.5);
}

/* Use derivative colors for subtle effects */
.hover-effect:hover {
  background: var(--primary-low);
}
```

### ❌ Don't

```css
/* Don't use deprecated SCSS variables */
.button {
  background: $tertiary; /* DEPRECATED */
}

/* Don't hardcode colors */
.button {
  background: #0088cc; /* Breaks color scheme support */
}

/* Don't hardcode font sizes in px */
.text {
  font-size: 14px; /* Doesn't scale with user preferences */
}

/* Don't ignore the variable system */
.heading {
  color: #333; /* Use var(--primary) instead */
}
```

## Overriding Variables

You can override variables in your theme to customize globally:

```css
:root {
  /* Override font scale */
  --font-up-1: 1.2em;
  
  /* Note: Don't override color variables here.
     Use Admin > Customize > Colors instead */
}
```

**For colors:** Use Discourse's color scheme editor (Admin > Customize > Colors) rather than CSS overrides. This ensures:
- Proper light/dark mode support
- Correct derivative color generation
- User color scheme preferences are respected

## Migration from SCSS Variables

If you have old code using SCSS variables:

**Old (deprecated):**
```scss
.button {
  background: $tertiary;
  color: $secondary;
  font-size: $font-up-1;
}
```

**New (correct):**
```css
.button {
  background: var(--tertiary);
  color: var(--secondary);
  font-size: var(--font-up-1);
}
```

**Why migrate:**
- SCSS variables don't support color schemes
- CSS variables update in real-time
- No dark mode support with SCSS variables
- SCSS variables are being removed from core

## Complex Color Manipulations

For complex color operations (lightening, darkening, transparency), see the [color manipulation guide](https://meta.discourse.org/t/updating-themes-and-plugins-to-support-automatic-dark-mode/161595#some-additional-notes-3) in the official docs.

**Simple transparency:**
```css
.element {
  /* Many variables have alpha variants */
  background: var(--primary-low);
  
  /* Or use rgba with rgb() */
  color: rgba(var(--primary-rgb), 0.5);
}
```

## Sources

1. [Theme Developer Tutorial: 3. CSS in Themes](https://github.com/discourse/discourse-developer-docs/blob/main/docs/07-theme-developer-tutorial/03-css.md)
2. [Structure of Themes and Theme Components](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
3. [Customizing the Topic List](https://meta.discourse.org/t/customizing-the-topic-list/350411)
4. [Use Discourse Core Variables in your Theme](https://meta.discourse.org/t/use-discourse-core-variables-in-your-theme/77551)
5. [Theme Developer Tutorial: 3. CSS in Themes](https://meta.discourse.org/t/theme-developer-tutorial-3-css-in-themes/357798)

---

**Quick Reference:** When in doubt, use `var(--variable-name)` for colors and fonts, inspect the `<html>` element to discover more variables, and visit `/styleguide` to see them in action.
