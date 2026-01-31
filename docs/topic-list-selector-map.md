# Topic List Selector Map

This document maps CSS selectors found in the Discourse topic list HTML snapshot (`topic-list-skeleton.html`). All selectors listed below exist in the actual HTML and are safe to use for styling.

## Container Selectors

### `.topic-list`
- **Element:** `div`
- **Description:** Root container for the entire topic list component

### `.topic-list-body`
- **Element:** `table`
- **Description:** Main table element containing the topic list rows

### `.topic-list-header`
- **Element:** `thead`
- **Description:** Table header section containing column headers

## Row & Column Selectors

### `.topic-list-item`
- **Element:** `tr`
- **Description:** Individual topic row in the list
- **Modifiers:** Can be combined with category classes (e.g., `.category-uncategorized`, `.category-announcements`, `.category-support`)
- **State:** May have `.has-excerpt` class when topic has an excerpt

### `.topic-list-data`
- **Element:** `td`, `th`
- **Description:** Generic class for topic list table cells (both header and body cells)

### `.main-link`
- **Element:** `td`
- **Description:** Main content cell containing topic title, excerpt, and metadata
- **Note:** Often combined with `.clearfix`

## Header Column Selectors

### `.default`
- **Element:** `th`
- **Description:** Default/topic column header

### `.posters`
- **Element:** `th`, `td`
- **Description:** Posters/avatars column (header and data cells)

### `.posts`
- **Element:** `th`, `td`
- **Description:** Reply count column (header and data cells)
- **Note:** Often combined with `.posts-map` in data cells

### `.views`
- **Element:** `th`, `td`
- **Description:** View count column (header and data cells)

### `.activity`
- **Element:** `th`, `td`
- **Description:** Last activity timestamp column (header and data cells)

### `.num`
- **Element:** `th`
- **Description:** Numeric column header indicator

### `.sortable`
- **Element:** `th`
- **Description:** Sortable column header indicator

### `.topic-list-header-title`
- **Element:** `span`
- **Description:** Text span inside the topic column header

## Category & Badge Selectors

### `.topic-item-stats`
- **Element:** `div`
- **Description:** Container for topic statistics including category badges
- **Note:** Combined with `.clearfix`

### `.topic-item-stats__category-badges`
- **Element:** `span`
- **Description:** Wrapper for category badge elements

### `.badge-wrapper`
- **Element:** `a`
- **Description:** Link wrapper around category badges
- **Modifiers:** Often has `.bullet` class for bullet-style badges

### `.badge-category-bg`
- **Element:** `span`
- **Description:** Background color element for category badges (uses inline styles)

### `.badge-category`
- **Element:** `span`
- **Description:** Category badge container
- **Modifiers:** Often combined with `.clear-badge`

### `.category-name`
- **Element:** `span`
- **Description:** Category name text

### `.bullet`
- **Element:** `a`
- **Description:** Bullet-style category badge variant

### `.clear-badge`
- **Element:** `span`
- **Description:** Clear/transparent badge style variant

## Topic Title & Link Selectors

### `.link-top-line`
- **Element:** `div`, `span`
- **Description:** Container for topic title and status icons

### `.topic-statuses`
- **Element:** `div`
- **Description:** Container for topic status icons (pinned, locked, etc.)

### `.topic-status`
- **Element:** `span`
- **Description:** Individual topic status icon wrapper

### `.title`
- **Element:** `a`
- **Description:** Topic title link
- **Modifiers:** Combined with `.raw-link` and `.raw-topic-link`

### `.raw-link`
- **Element:** `a`
- **Description:** Base class for raw/unprocessed links

### `.raw-topic-link`
- **Element:** `a`
- **Description:** Specific class for topic title links

## Topic Metadata Selectors

### `.link-bottom-line`
- **Element:** `div`
- **Description:** Container for topic excerpt and tags

### `.topic-excerpt`
- **Element:** `a`
- **Description:** Topic excerpt/preview text link

### `.topic-list-tags`
- **Element:** `div`
- **Description:** Container for topic tags

### `.discourse-tag`
- **Element:** `a`
- **Description:** Individual tag link
- **Modifiers:** Often has `.simple` class

### `.simple`
- **Element:** `a`
- **Description:** Simple/basic tag style variant

## Badge & Notification Selectors

### `.topic-post-badges`
- **Element:** `span`
- **Description:** Container for topic post badges (new, unread counts, etc.)

### `.badge`
- **Element:** `a`
- **Description:** Generic badge element
- **Modifiers:** Often combined with `.badge-notification`

### `.badge-notification`
- **Element:** `a`
- **Description:** Notification-style badge
- **Variants:** `.new-topic`, `.unread-posts`

### `.new-topic`
- **Element:** `a`
- **Description:** "New topic" badge indicator

### `.unread-posts`
- **Element:** `a`
- **Description:** Unread posts count badge

## Avatar & Poster Selectors

### `.poster`
- **Element:** `a`
- **Description:** Non-latest poster avatar link

### `.latest`
- **Element:** `a`
- **Description:** Latest poster avatar link
- **Modifiers:** Can be combined with `.single` for single poster

### `.single`
- **Element:** `a`
- **Description:** Single poster indicator (when there's only one poster)

### `.avatar`
- **Element:** `img`
- **Description:** User avatar image

## Count & Activity Selectors

### `.posts-map`
- **Element:** `td`, `button`
- **Description:** Posts/replies count container and button

### `.badge-posts`
- **Element:** `button`
- **Description:** Button showing post count badge

### `.number`
- **Element:** `span`
- **Description:** Numeric value display (for counts and stats)

### `.post-activity`
- **Element:** `a`
- **Description:** Link to last activity/post

### `.relative-date`
- **Element:** `span`
- **Description:** Relative timestamp display (e.g., "2h", "1d", "45m")

## Icon Selectors

### `.d-icon`
- **Element:** `svg`
- **Description:** Base class for Discourse icons (SVG)

### `.d-icon-thumbtack`
- **Element:** `svg`
- **Description:** Pinned topic icon (thumbtack)

### `.d-icon-lock`
- **Element:** `svg`
- **Description:** Locked topic icon (lock)

### `.fa`
- **Element:** `svg`
- **Description:** FontAwesome compatibility class for icons

### `.svg-icon`
- **Element:** `svg`
- **Description:** Generic SVG icon class

### `.svg-string`
- **Element:** `svg`
- **Description:** SVG string-based icon class

## Button Selectors

### `.btn-link`
- **Element:** `button`
- **Description:** Link-style button (used for posts count)

### `.d-button-label`
- **Element:** `button`
- **Description:** Discourse button label (used in sortable headers)

## Category Modifier Classes

These classes are added to `.topic-list-item` rows to indicate the category:

### `.category-uncategorized`
- **Element:** `tr`
- **Description:** Topic in the "Uncategorized" category

### `.category-announcements`
- **Element:** `tr`
- **Description:** Topic in the "Announcements" category

### `.category-support`
- **Element:** `tr`
- **Description:** Topic in the "Support" category

## Utility Classes

### `.clearfix`
- **Element:** `div`, `td`
- **Description:** Clearfix utility for float clearing

### `.has-excerpt`
- **Element:** `tr`
- **Description:** Indicates the topic row has an excerpt

## Common Element Selectors

The following standard HTML elements are used throughout the topic list:

- `div` - General containers
- `table` - Main topic list structure
- `thead` - Table header
- `tbody` - Table body
- `tr` - Table rows
- `th` - Table header cells
- `td` - Table data cells
- `a` - Links (titles, categories, tags, posters, activity)
- `span` - Text and inline containers
- `button` - Interactive elements (sorting, post counts)
- `img` - Avatar images
- `svg` - Icon graphics
- `use` - SVG icon references

---

## Usage Notes

1. **Compound Selectors:** Many elements use multiple classes. For example, a topic row might be `.topic-list-item.category-announcements.has-excerpt`.

2. **State Classes:** Some classes indicate state (`.new-topic`, `.unread-posts`, `.has-excerpt`). These may not always be present.

3. **Category Classes:** The `.category-*` classes are dynamic based on the actual category. Use attribute selectors like `[class*="category-"]` to target all categories.

4. **Responsive Targeting:** Consider that Discourse applies responsive classes. Test your styles across different viewport sizes.

5. **Specificity:** Discourse's own styles may have high specificity. You may need to increase specificity or use `!important` judiciously.

6. **Icon References:** SVG icons use `<use>` elements referencing symbol IDs like `#thumbtack` and `#lock`.

## Styling Guidelines

- **Target existing classes only** - Do not invent new class names
- **Use descendant selectors** - Combine selectors for specificity (e.g., `.topic-list .title`)
- **Respect semantic structure** - Maintain accessibility by not hiding important elements
- **Test with real data** - Categories, badges, and states may vary
- **Consider RTL** - This theme supports Arabic; test right-to-left layouts
