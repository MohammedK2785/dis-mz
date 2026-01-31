# Mza3et Theme

A custom Discourse theme for the Mza3et community (مزاعيط المغرب).

## Features

- Custom RTL-friendly design for Arabic content
- Mobile-first responsive layout
- Card-based topic list with enhanced readability
- Custom navigation header and section tabs
- Arabic typography optimized for readability

## Installation

This theme follows the official [Discourse theme structure](https://github.com/discourse/discourse-theme-skeleton).

To install, add this repository URL in your Discourse admin panel under **Customize > Themes > Install**.

## Development

This theme is structured according to the official Discourse theme skeleton:

- `common/common.scss` - Main stylesheet
- `javascripts/discourse/api-initializers/` - Theme JavaScript logic
- `javascripts/discourse/connectors/` - HTML template connectors
- `locales/en.yml` - Internationalization strings
- `settings.yml` - Theme settings
- `about.json` - Theme metadata

### How to Build Tailwind

This theme uses Tailwind CSS for utility classes. Tailwind is compiled at build time (locally or in CI), not on the Discourse server.

**Prerequisites:**
- Node.js >= 22
- pnpm >= 10

**Build steps:**

```bash
# Install dependencies
pnpm install

# Build Tailwind CSS (one-time build)
pnpm build:css

# Watch for changes during development
pnpm watch:css
```

The compiled output (`common/mza-tailwind.scss`) must be committed to the repository. CI will fail if the generated file is outdated.

### Documentation

See the `docs/` folder for additional documentation:
- `docs/core-reference/` - Discourse core reference materials
- `docs/context-pack/` - Context and examples for theme development

## License

See LICENSE file for details.