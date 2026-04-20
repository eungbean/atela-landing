# ATELA Landing

Current ATELA landing page workspace built with `index.html` plus script-tag React/Babel components.

## Commands

- `bunx --bun vite`
- `bunx --bun vite build`
- `bunx --bun vite preview`
- `bun run prepare:hero-assets`
- `bun run prepare:want-this-assets`
- `bun run prepare:want-this-assets:cleanup`
- `bun run build:deploy`

## Active Files

- `index.html`: active entry and inline app mount
- `components/AtelaCopy.js`: locale-specific marketing copy and page metadata
- `components/*.jsx`: active landing sections
- `components/AtelaLocale.js`: locale-first URL helpers
- `components/Integrations.jsx`: active workflow section for ecommerce brands, using a simplified left-select / center-preview / right-KPI layout with localized workflow labels
- `components/Showcase.jsx`: active showcase hook before Expert Marketplace
- `assets/want-this/`: raw showcase gallery drop zone for `Showcase`
- `styles/extensions.css`: active page styling
- `assets/workflow/`: local workflow placeholder stills captured from Presti reference videos for the current selector preview

## Showcase Gallery Assets

- Put raw `png`, `jpg`, `jpeg`, `webp`, or `mp4` files into `assets/want-this/`.
- Run `bun run prepare:want-this-assets`.
- The default command optimizes the folder contents and regenerates `assets/want-this/manifest.js` without deleting the originals.
- Existing optimized gallery items are kept in the manifest, so adding a new file does not drop previously processed assets.
- If you explicitly want cleanup after optimization, run `bun run prepare:want-this-assets:cleanup`.
- `components/Showcase.jsx` reads the generated manifest, so every file in that folder is included automatically in the looping gallery.

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
- `scripts/prepare-static-deploy.mjs` copies `components/`, `vendor/`, `assets/`, `styles/`, and `favicon.svg` into `dist/` because this landing still serves non-module scripts directly from the filesystem
- The built favicon link is normalized back to `/favicon.svg` so the deployed site uses a stable root icon path
- The deploy prep also rewrites the built stylesheet link back to `/styles/extensions.css` so the Babel/script-tag app does not lose styling when `dist/assets/` is reused for source media
- `vercel.json` is configured for:
  - `bun install --frozen-lockfile`
  - `bun run build:deploy`
  - `dist` output
  - locale-only rewrites to `index.html` so paths like `/ko/pricing` resolve correctly without swallowing static files such as `/favicon.svg`
