# ATELA Landing

Current ATELA landing page workspace built with `index.html` plus script-tag React/Babel components.

## Commands

- `bunx --bun vite`
- `bunx --bun vite build`
- `bunx --bun vite preview`
- `bun run prepare:hero-assets` when you have local raw Hero source media
- `bun run build:deploy`

## Active Files

- `index.html`: active entry and inline app mount
- `components/AtelaCopy.js`: locale-specific marketing copy and page metadata
- `components/*.jsx`: active landing sections
- `components/AtelaLocale.js`: locale-first URL helpers
- `components/Integrations.jsx`: active workflow section for ecommerce brands, using a simplified left-select / center-preview / right-KPI layout with localized workflow labels
- `components/Showcase.jsx`: active showcase hook before Expert Marketplace
- `styles/extensions.css`: active page styling
- `assets/workflow/`: local workflow placeholder stills captured from Presti reference videos for the current selector preview

## Locale Routing

- Public URLs should use `/{locale}/{page}`.
- Home routes are `/{locale}` such as `/ko` and `/en`.
- Section-style landing routes already map to paths such as `/ko/pricing`, `/ko/tech`, `/ko/workflow`, `/ko/showcase`, and `/ko/marketplace`.
- The bare root `/` is only a neutral entry that normalizes into a locale path.
- `?lang=ko` and `?lang=en` are treated as migration helpers and are normalized back into the locale path.

## Current Locale Status

- `ko` and `en` are both content-ready locales in the current implementation.
- `/en` now renders English marketing copy through the shared `index.html` app.
- Browser-language auto-selection can now resolve to either `ko` or `en`.

## Public Deploy

- Recommended default: GitHub repo + Vercel deployment
- Use `bun run build:deploy` for production output
- The repository tracks optimized Hero outputs such as `*.avif` and `video.optimized.mp4`; raw Hero source media stays local and is gitignored
- `scripts/prepare-static-deploy.mjs` copies `components/`, `vendor/`, `assets/`, and `styles/` into `dist/` because this landing still serves non-module scripts directly from the filesystem
- the deploy prep step also rewrites built `index.html` back to `/styles/extensions.css`, so production does not depend on a Vite-generated hashed CSS asset path
- `vercel.json` is configured for:
  - `bun install --frozen-lockfile`
  - `bun run build:deploy`
  - `dist` output
  - locale-route rewrites to `index.html` for `/`, `/ko`, `/en`, and locale-first section paths like `/ko/pricing`
  - static asset requests such as `/assets/*`, `/components/*`, and `/vendor/*` are left untouched
