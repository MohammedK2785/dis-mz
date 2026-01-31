# Topic List Customization Approach

## Overview

The Discourse topic list is a core component that displays topics in various contexts (category pages, latest topics, search results, etc.). Customizing it requires understanding the official approaches and APIs provided by Discourse.

## Official Customization Methods

Discourse provides several sanctioned methods for customizing topic lists, listed from safest to most complex:

### 1. CSS-Based Customization (Safest)

**Use for:** Visual styling without changing structure

The topic list uses standard CSS classes that you can target:

```css
/* Example: Adjust topic list spacing */
.topic-list {
  /* Your styles using Discourse variables */
}

.topic-list-item {
  /* Individual topic row styles */
}

.topic-list-header {
  /* Header row styles */
}
```

**Best practices:**
- Use CSS variables for colors: `var(--primary)`, `var(--tertiary)`, etc.
- Match core's selector patterns
- Keep specificity low
- Use logical properties for RTL support

### 2. JavaScript Plugin API (Recommended for Structure Changes)

**Use for:** Adding, removing, or rearranging columns

Discourse provides the **value transformer API** for modifying topic list columns:

```javascript
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.34", (api) => {
  api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
    // Remove a column
    columns.delete("posters");
    
    // Reorder columns
    columns.reposition("views", { before: "replies" });
    
    // Add a custom column
    columns.add("custom-column", {
      header: CustomHeaderComponent,
      item: CustomItemComponent,
    });
    
    return columns;
  });
});
```

**Key points:**
- Requires API version 1.34 or higher
- Columns are Glimmer components
- Clean and maintainable approach
- Won't break on core updates

### 3. Plugin Outlets (For Injecting Content)

**Use for:** Adding content around or within topic list items

Plugin outlets let you inject content without replacing templates:

- Use outlets to add banners, notices, or extra information
- Less invasive than template overrides
- See [Plugin Outlet documentation](https://meta.discourse.org/t/how-to-use-plugin-outlets-in-discourse-themes/14846)

### 4. Full Template Replacement (Last Resort)

**Use for:** Complete custom layouts (rarely needed)

You can replace the entire `topic-list-item` component using wrapper plugin outlets. 

⚠️ **Warning:** This approach:
- Breaks on core updates
- Requires maintaining template logic yourself
- Should only be used when other methods won't work

## Topic List Structure

Understanding the structure helps you target elements correctly:

```
.topic-list (table or list container)
├── .topic-list-header (desktop table header)
│   └── th (individual header cells)
└── .topic-list-item (individual topic rows)
    ├── .topic-list-data (cells/columns)
    │   ├── .main-link (topic title and category)
    │   ├── .posters (avatar thumbnails)
    │   ├── .num.posts (reply count)
    │   ├── .num.views (view count)
    │   └── .num.activity (last activity time)
    └── .topic-excerpt (excerpt text, if enabled)
```

**Note:** The exact structure may vary between desktop/mobile and different view types.

## Mobile vs Desktop

- **Desktop:** Uses table-based layout with columns
- **Mobile:** Uses card-based layout with stacked information
- **Responsive:** Use breakpoints from core (`$small-width`, `$medium-width`)

## Glimmer Migration

Discourse is transitioning to a modern Glimmer component architecture:

### What This Means

- **Old:** Raw Handlebars templates (`.hbr`, `.raw.hbs`)
- **New:** Glimmer components with defined APIs

### Preparing for Changes

1. ✅ **Use the Plugin API** instead of template overrides
2. ✅ **Use value transformers** for data modifications
3. ✅ **Avoid raw Handlebars** templates in new code
4. ✅ **Test with latest Discourse** versions regularly
5. ❌ **Don't rely on internal implementation details**
6. ❌ **Don't copy/paste core templates** into your theme

### Compatibility

If you have existing customizations:
- Raw Handlebars overrides need updating
- Template overrides may break in future versions
- Migrate to API-based customizations when possible

## Recommended Customization Tools

### For Visual Changes
- **CSS/SCSS** using core variables and classes
- **Color scheme overrides** in admin
- **Typography variables** (`--font-up-1`, etc.)

### For Structural Changes
- **`topic-list-columns` value transformer** for column management
- **Plugin outlets** for content injection
- **Plugin API** for behavior modification

### For Data Display
- **Value transformers** to modify topic data before rendering
- **Custom columns** using the columns API
- **Component composition** for complex displays

## Common Customizations

### Hide a Column (Desktop)

```javascript
api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
  columns.delete("posters"); // Hides avatar column
  return columns;
});
```

### Add Visual Indicator

```css
.topic-list-item.pinned {
  background: var(--highlight-low);
  border-inline-start: 3px solid var(--tertiary);
}
```

### Adjust Spacing

```css
.topic-list-item {
  padding-block: 12px;
  padding-inline: 8px;
}
```

### Custom Column with Badge

```javascript
const StaffBadgeHeader = <template><th>Staff</th></template>;
const StaffBadgeItem = <template>
  <td>{{if @topic.creator.staff "✅"}}</td>
</template>;

api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
  columns.add("staff-badge", {
    header: StaffBadgeHeader,
    item: StaffBadgeItem,
  });
  return columns;
});
```

## Maintenance Considerations

### Why Maintenance Matters

Topic list customizations can break on core updates if not done properly.

### Keep Customizations Maintainable

1. **Document your changes** - Future you will thank you
2. **Use stable APIs** - Value transformers are stable; template internals are not
3. **Test on updates** - Check customizations when Discourse updates
4. **Keep it minimal** - The less you customize, the less can break
5. **Follow core patterns** - Match how core implements similar features

### Red Flags (Likely to Break)

- ❌ Overriding entire templates
- ❌ Depending on internal CSS class names not in docs
- ❌ Copying large chunks of core code
- ❌ Monkey-patching Ember components
- ❌ Accessing private properties or methods

### Green Flags (Unlikely to Break)

- ✅ Using documented Plugin API methods
- ✅ Using value transformers
- ✅ Styling with CSS variables
- ✅ Using plugin outlets
- ✅ Following official examples

## Testing Your Customizations

1. **Test in multiple contexts**
   - Category pages
   - Latest/Top/New pages
   - Search results
   - User activity pages

2. **Test responsive behavior**
   - Desktop view
   - Mobile view
   - Tablet breakpoint

3. **Test with different settings**
   - With/without excerpts
   - Different sort orders
   - Various topic types (pinned, closed, etc.)

4. **Test RTL support** (if applicable)
   - Switch locale to Arabic or Hebrew
   - Verify layout mirrors correctly

## Performance Considerations

- **Don't overload with columns** - Each column adds rendering cost
- **Keep JavaScript minimal** - Heavy computation slows topic list rendering
- **Use CSS transforms carefully** - Can impact scroll performance
- **Lazy load images** if adding thumbnail columns

## Sources

1. [Theme Developer Tutorial: 3. CSS in Themes](https://github.com/discourse/discourse-developer-docs/blob/main/docs/07-theme-developer-tutorial/03-css.md)
2. [Structure of Themes and Theme Components](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
3. [Customizing the Topic List](https://meta.discourse.org/t/customizing-the-topic-list/350411)
4. [Use Discourse Core Variables in your Theme](https://meta.discourse.org/t/use-discourse-core-variables-in-your-theme/77551)
5. [Theme Developer Tutorial: 3. CSS in Themes](https://meta.discourse.org/t/theme-developer-tutorial-3-css-in-themes/357798)

---

**Summary:** Prefer CSS for styling, use the Plugin API for structure, avoid template overrides, and always test your customizations thoroughly.
