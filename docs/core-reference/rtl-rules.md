# RTL-First Rules

## Overview

When developing Discourse themes that support right-to-left (RTL) languages, following modern CSS practices ensures your theme works seamlessly in both LTR and RTL contexts without duplicating styles.

## Core Principles

### 1. Use CSS Logical Properties

CSS logical properties automatically adapt to document direction (`dir="ltr"` or `dir="rtl"`), eliminating the need for manual left/right overrides.

#### Property Mapping

| Physical Property | Logical Property | LTR Effect | RTL Effect |
|------------------|------------------|------------|------------|
| `margin-left` | `margin-inline-start` | left | right |
| `margin-right` | `margin-inline-end` | right | left |
| `padding-left` | `padding-inline-start` | left | right |
| `padding-right` | `padding-inline-end` | right | left |
| `border-left` | `border-inline-start` | left | right |
| `border-right` | `border-inline-end` | right | left |
| `left` (position) | `inset-inline-start` | left edge | right edge |
| `right` (position) | `inset-inline-end` | right edge | left edge |
| `text-align: left` | `text-align: start` | left | right |
| `text-align: right` | `text-align: end` | right | left |

#### Block Dimension Properties

| Physical Property | Logical Property | Effect |
|------------------|------------------|--------|
| `width` | `inline-size` | horizontal size |
| `height` | `block-size` | vertical size |
| `margin-top` | `margin-block-start` | top |
| `margin-bottom` | `margin-block-end` | bottom |
| `padding-top` | `padding-block-start` | top |
| `padding-bottom` | `padding-block-end` | bottom |

### 2. Example: Card Component

**Good - Using logical properties:**
```css
.card {
  border: 2px solid var(--primary-low);
  padding-block: 20px;
  padding-inline: 20px;
  inline-size: 300px;
  margin-inline: auto;
}

.card img {
  float: inline-start;
  margin-inline-end: 15px;
  block-size: 80px;
}

.card h3 {
  margin-block-end: 10px;
  text-align: start;
}
```

This code works perfectly in both LTR and RTL without any overrides.

**Bad - Using physical properties:**
```css
.card {
  border: 2px solid var(--primary-low);
  padding: 20px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.card img {
  float: left; /* Wrong in RTL */
  margin-right: 15px; /* Wrong in RTL */
  height: 80px;
}

.card h3 {
  margin-bottom: 10px;
  text-align: left; /* Wrong in RTL */
}
```

### 3. Direction Targeting

When you absolutely must apply different styles for RTL:

```css
/* Apply to RTL only */
html[dir="rtl"] .my-element {
  /* RTL-specific styles */
}

/* Apply to LTR only */
html[dir="ltr"] .my-element {
  /* LTR-specific styles */
}
```

**Note:** If you find yourself needing many `html[dir="rtl"]` overrides, you're probably not using logical properties correctly.

### 4. Avoid Left/Right in New Code

**Don't:**
```css
.element {
  margin-left: 10px;
  padding-right: 15px;
  text-align: right;
  float: left;
}
```

**Do:**
```css
.element {
  margin-inline-start: 10px;
  padding-inline-end: 15px;
  text-align: end;
  float: inline-start;
}
```

### 5. Shorthand Properties

Be careful with shorthand properties that specify individual sides:

**Safe shorthands:**
```css
.element {
  /* Symmetrical - works in any direction */
  margin: 10px;
  padding: 10px 20px; /* block inline */
  
  /* Using logical properties */
  margin-block: 10px;
  margin-inline: 20px;
  padding-block: 10px 15px;
  padding-inline: 20px 25px;
}
```

**Unsafe shorthands:**
```css
.element {
  /* Asymmetrical - breaks in RTL */
  margin: 10px 0 10px 20px; /* top right bottom left */
  border-width: 1px 0 1px 2px; /* top right bottom left */
}
```

If you need asymmetrical spacing, use logical properties explicitly:
```css
.element {
  margin-block-start: 10px;
  margin-inline-end: 0;
  margin-block-end: 10px;
  margin-inline-start: 20px;
}
```

## Testing RTL Support

1. **Test in both directions** - Switch between `dir="ltr"` and `dir="rtl"` frequently during development
2. **Use Discourse's locale system** - Discourse automatically sets `dir="rtl"` for RTL locales (Arabic, Hebrew, etc.)
3. **Check plugin components** - Verify that any third-party components also support RTL
4. **Inspect visual cues** - Icons, arrows, and directional graphics may need flipping via `transform: scaleX(-1)`

## Best Practices

1. ✅ **Write new CSS with logical properties** from the start - it's easier than converting later
2. ✅ **Use `start` and `end` instead of `left` and `right`** for text alignment
3. ✅ **Prefer logical properties** even in LTR-only themes - it future-proofs your code
4. ✅ **Test with actual RTL languages** - Visual testing is essential
5. ❌ **Don't use physical directional properties** in new code
6. ❌ **Don't rely on `html[dir="rtl"]` overrides** as your primary RTL strategy
7. ❌ **Don't assume `left = start`** - it only works in LTR

## Discourse-Specific Notes

- Discourse core is moving toward full logical properties support
- The CSS variables system works seamlessly in RTL
- Follow the same logical properties approach as core for consistency
- When in doubt, inspect how core implements RTL support for similar elements

## Migration Strategy

If you have existing LTR-only code:

1. Identify all directional properties (`left`, `right`, `margin-left`, etc.)
2. Replace with logical equivalents (`inline-start`, `inline-end`, etc.)
3. Test in RTL mode
4. Remove any `html[dir="rtl"]` override blocks that are no longer needed
5. Verify floating and positioning works in both directions

## Sources

1. [Theme Developer Tutorial: 3. CSS in Themes](https://github.com/discourse/discourse-developer-docs/blob/main/docs/07-theme-developer-tutorial/03-css.md)
2. [Structure of Themes and Theme Components](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
3. [Customizing the Topic List](https://meta.discourse.org/t/customizing-the-topic-list/350411)
4. [Use Discourse Core Variables in your Theme](https://meta.discourse.org/t/use-discourse-core-variables-in-your-theme/77551)
5. [Theme Developer Tutorial: 3. CSS in Themes](https://meta.discourse.org/t/theme-developer-tutorial-3-css-in-themes/357798)

---

**Remember:** RTL support should not be an afterthought. Using logical properties from the start makes your theme work in any direction automatically.
