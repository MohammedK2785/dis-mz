# Core Reference Pack

## Purpose

This reference pack provides guidance based **exclusively** on official Discourse documentation to ensure our theme follows best practices and avoids invented selectors or non-standard patterns.

## The Overlay Approach

Discourse themes are **overlays** on top of core functionality. This means:

- **Don't modify Discourse core** - themes should extend, not replace
- **Work with the existing structure** - understand how core works before customizing
- **Keep changes minimal** - the fewer overrides, the easier maintenance becomes

## Core Principles

### 1. Prefer CSS Variables

Discourse makes extensive use of CSS custom properties (variables) for colors, fonts, spacing, and other shared values. These variables:

- Automatically adapt to light/dark modes
- Respect user color scheme preferences
- Update globally when changed in one place
- Are the recommended way to customize appearance

**Example:**
```css
.my-element {
  background: var(--quaternary);
  color: var(--primary);
  font-size: var(--font-up-1);
}
```

**Don't use deprecated SCSS variables** like `$primary`, `$secondary` - these have been deprecated since August 2020. Always use CSS custom properties with the `var()` syntax.

### 2. Match Core Selectors

When styling Discourse elements:

- Inspect how **core styles** the same elements
- Use the **same selectors** and patterns as core
- Follow Discourse's [BEM variant](https://meta.discourse.org/t/361851) for CSS class naming
- Keep your selector specificity low to avoid conflicts

**Don't** try to find every variation of every element and style them all. Instead, understand how core handles it and extend that pattern.

### 3. Avoid Deep Template Overrides

Template overrides should be a last resort:

- They break on core updates
- They're hard to maintain
- They often duplicate core logic

**Prefer:**
- CSS customization
- Plugin outlets for injecting content
- JavaScript API for functional changes
- Value transformers for modifying data

### 4. No Invented Selectors

**Don't invent** class names or selectors that don't exist in core. If you need to target something:

1. Check core's stylesheets for existing classes
2. Use stable, semantic classes that core provides
3. Leverage CSS variables and existing patterns
4. Use plugin outlets if you need to inject new elements

## Development Workflow

1. **Inspect first** - Use browser DevTools to see how core implements what you want to style
2. **Check variables** - Look at the `<html>` element in DevTools to see all available CSS variables
3. **Use the styleguide** - Visit `/styleguide` on your instance to see all UI components and variables
4. **Keep it simple** - The simpler your customization, the more maintainable it will be

## Key Resources

### Color Variables
- Basic colors: `--primary`, `--secondary`, `--tertiary`, `--quaternary`, `--header_background`, `--header_primary`, `--highlight`, `--danger`, `--success`, `--love`
- See [variables-cheatsheet.md](./variables-cheatsheet.md) for comprehensive list

### Font Sizing
- Base sizes: `--base-font-size`, `--base-font-size-larger`, `--base-font-size-largest`
- Scale system: `--font-up-6` through `--font-down-6`
- All relative to base size using `em` units

### Breakpoints
- Small: `$small-width: 800px`
- Medium: `$medium-width: 995px`
- Large: `$large-width: 1110px`

## File Organization

Discourse themes support:

- `common/common.scss` - Main stylesheet (use this for most themes)
- `desktop/desktop.scss` - Desktop-only styles (increasingly deprecated)
- `mobile/mobile.scss` - Mobile-only styles (increasingly deprecated)
- `/stylesheets/my-styles.scss` - Additional SCSS files imported from common.scss

**Trend:** Modern themes use breakpoint-based styling in `common.scss` rather than separate desktop/mobile files.

## Sources

1. [Theme Developer Tutorial: 3. CSS in Themes](https://github.com/discourse/discourse-developer-docs/blob/main/docs/07-theme-developer-tutorial/03-css.md)
2. [Structure of Themes and Theme Components](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
3. [Customizing the Topic List](https://meta.discourse.org/t/customizing-the-topic-list/350411)
4. [Use Discourse Core Variables in your Theme](https://meta.discourse.org/t/use-discourse-core-variables-in-your-theme/77551)
5. [Theme Developer Tutorial: 3. CSS in Themes](https://meta.discourse.org/t/theme-developer-tutorial-3-css-in-themes/357798)
