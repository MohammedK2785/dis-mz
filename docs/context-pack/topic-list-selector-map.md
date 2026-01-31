# Topic List Selector Allowlist

This document contains a strict allowlist of CSS selectors found in the topic list HTML snapshot (`topic-list-skeleton.html`). Only selectors present in the actual snapshot are included.

## Row/Container Selectors

- `table.topic-list` - Main topic list table container
- `table.topic-list.ember-view` - Topic list table with Ember framework class
- `thead` - Table header section
- `tbody` - Table body containing topic rows
- `tr.topic-list-header` - Header row containing column headers
- `tr.topic-list-item` - Individual topic row
- `tr.topic-list-item.category-general` - Topic row for general category
- `tr.topic-list-item.category-support` - Topic row for support category
- `tr.topic-list-item.category-announcements` - Topic row for announcements category
- `tr.topic-list-item.category-meta` - Topic row for meta category
- `tr.topic-list-item.category-features` - Topic row for features category
- `tr.topic-list-item.has-excerpt` - Topic row that includes an excerpt
- `tr.topic-list-item.pinned` - Pinned topic row
- `tr.topic-list-item.globally-pinned` - Globally pinned topic row
- `tr.topic-list-item.closed` - Closed topic row
- `tr.topic-list-item.liked` - Topic row containing liked posts
- `tr.topic-list-item.ember-view` - Topic row with Ember framework class
- `th.topic-list-data` - Table header cell
- `td.topic-list-data` - Table data cell
- `td.bulk-select.topic-list-data` - Bulk selection checkbox cell
- `td.main-link.clearfix.topic-list-data` - Main topic content cell
- `div.topic-details` - Container for topic information
- `div.link-top-line` - Container for topic title and badges
- `div.link-bottom-line` - Container for category, tags, and metadata

## Title/Link Selectors

- `a.title` - Topic title link
- `a.title.raw-link` - Raw topic title link
- `a.title.raw-link.raw-topic-link` - Raw topic title link with additional class
- `a.post-activity` - Link to latest post activity

## Category Badge Selectors

- `a.badge-wrapper` - Category badge wrapper link
- `a.badge-wrapper.bullet` - Category badge with bullet styling
- `span.badge-category-bg` - Category badge background color element
- `span.badge-category-parent-bg` - Parent category badge background color
- `span.badge-category` - Category badge container
- `span.badge-category.clear-badge` - Category badge with clear styling
- `span.category-name` - Category name text element

## Meta (Replies/Views/Activity) Selectors

- `th.posts` - Posts/replies column header
- `th.posts.sortable.num` - Sortable posts column header
- `th.views` - Views column header
- `th.views.sortable.num` - Sortable views column header
- `th.activity` - Activity column header
- `th.activity.sortable.num` - Sortable activity column header
- `td.num.posts-map.posts` - Posts count cell
- `td.num.posts-map.posts.heatmap-high` - Posts cell with high activity heatmap
- `td.num.posts-map.posts.heatmap-med` - Posts cell with medium activity heatmap
- `td.num.posts-map.posts.heatmap-low` - Posts cell with low activity heatmap
- `td.num.views` - Views count cell
- `td.num.views.topic-list-data` - Views count cell with data class
- `td.num.topic-list-data.age.activity` - Activity/age cell
- `button.btn-link.posts-map` - Button for posts count
- `button.btn-link.posts-map.badge-posts` - Button with badge styling for posts
- `button.btn-link.posts-map.badge-posts.heatmap-high` - Posts button with high heatmap
- `button.btn-link.posts-map.badge-posts.heatmap-med` - Posts button with medium heatmap
- `button.btn-link.posts-map.badge-posts.heatmap-low` - Posts button with low heatmap
- `span.number` - Numeric value display
- `span.relative-date` - Relative date/time display

## Avatars/Posters Selectors

- `a.latest-poster` - Latest poster link
- `a.latest-poster.trigger-user-card` - Latest poster link that triggers user card
- `img.avatar` - Avatar image
- `img.avatar.latest` - Latest poster avatar
- `img.avatar.latest.single` - Single latest poster avatar

## Status Icons Selectors

- `div.topic-statuses` - Container for topic status icons
- `span.topic-status` - Individual topic status indicator
- `svg.fa.d-icon` - Font Awesome icon element
- `svg.fa.d-icon.svg-icon` - SVG icon element
- `svg.fa.d-icon.svg-icon.svg-string` - SVG icon with string class
- `svg.fa.d-icon.d-icon-thumbtack` - Pinned topic icon
- `svg.fa.d-icon.d-icon-lock` - Locked/closed topic icon
- `svg.fa.d-icon.d-icon-check-square` - Solved topic icon
- `svg.fa.d-icon.d-icon-heart` - Liked topic icon
- `svg.fa.d-icon.d-icon-bullhorn` - Announcement icon

## Badge/Notification Selectors

- `span.topic-post-badges` - Container for topic post badges
- `a.badge` - Badge link element
- `a.badge.badge-notification` - Notification badge
- `a.badge.badge-notification.new-topic` - New topic badge
- `a.badge.badge-notification.unread` - Unread topic badge
- `a.badge.badge-notification.clicks` - Click count badge

## Tag Selectors

- `div.discourse-tags` - Container for topic tags
- `a.discourse-tag` - Individual tag link
- `a.discourse-tag.bullet` - Tag with bullet styling

## Excerpt Selectors

- `div.topic-excerpt` - Topic excerpt text container

## Utility/Miscellaneous Selectors

- `th.default` - Default header cell
- `th.default.bulk-select` - Bulk select header cell
- `th.sortable.num` - Sortable numeric column header
- `td.bulk-select` - Bulk select checkbox cell
- `input.bulk-select` - Bulk select checkbox input
- `label` - Label element for checkboxes
- `span.d-button-label` - Button label text
- `td.clearfix` - Cell with clearfix class
- `td.num` - Numeric cell
- `td.age` - Age/time cell

## Notes

- All selectors are extracted directly from `topic-list-skeleton.html`
- No selectors have been invented or added beyond what exists in the snapshot
- Selectors are grouped by their primary purpose for easier reference
- Some selectors may appear in multiple groups if they serve multiple purposes
- Data attributes (e.g., `data-topic-id`, `data-sort-order`) are used by Discourse but not included as CSS selectors
