# Changelog

All notable changes to the Mza3et Discourse Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added - UI Cards + Mobile (v1)

- **New SCSS file**: `scss/zz-ui-cards-mobile.scss` - Comprehensive UI modernization styles (no Tailwind build required)
- **Discourse Header Modernization**:
  - Glass morphism background with `backdrop-filter: blur()`
  - Subtle border using theme variables
  - Pill-style buttons with hover/focus states
- **Custom Topbar/Tabs Modernization** (`.mza-topbar`):
  - Pill-style navigation links
  - Smaller spacing for compact appearance
  - Horizontal scroll on mobile with touch support
  - Smooth scrolling behavior
- **Topic List Row Cards**:
  - `border-spacing` for card separation
  - Rounded corners using theme radius tokens
  - Subtle hover effects with box-shadow elevation
  - Pinned topic indicator using logical property `border-inline-start`
  - Closed topic visual indicator
- **Topic Post Cards**:
  - Card-style appearance with border, radius, and shadow
  - Improved typography (line-height, letter-spacing)
  - Enhanced blockquote styling with accent border
  - Better code block presentation
  - Glass-effect post controls
- **Mobile Optimizations**:
  - No horizontal overflow on any viewport
  - Touch-friendly tap targets (44px minimum)
  - Readable stats with proper font sizing
  - Stacked card layout for topic list
  - Horizontal scrolling tabs with momentum scroll
- **RTL/LTR Support**:
  - All directional properties use CSS logical properties
  - `border-inline-start`, `padding-inline`, `margin-block`, etc.
  - Proper text alignment with `text-align: start`

### Documentation

- Added `docs/CHANGELOG.md` - This changelog file
- Added `docs/Sprint-UI-Cards-Mobile.md` - Sprint scope and QA steps

## [0.1.0] - Initial Release

- Initial Mza3et theme setup with Tailwind CSS integration
- Cairo font for Arabic typography optimization
- Base soft UI design tokens
- Topic list polish with mobile-first design
- Topic post cards with premium styling
- RTL-first CSS approach
