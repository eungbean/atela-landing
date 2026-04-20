# AGENTS.md

## Project Snapshot

- This workspace contains the current ATELA landing page implementation.
- The active main entry is `index.html` at the repository root.
- `_Index.html` is an older archived page and is not the main page anymore.
- `ATELA Design System/` is reference material, not the active rendered page.
- The site is served locally with Vite, but the page itself is assembled with script-tag React + Babel, not a bundled React app.

## Runtime / Commands

- Use `bun`, not `npm`.
- Install/runtime assumptions in this workspace:
  - `bun` is available.
  - `ffmpeg` is available.
  - `vite` is used through `bunx --bun`.
- Main commands:
  - `bunx --bun vite`
  - `bunx --bun vite build`
  - `bunx --bun vite preview`
  - `bun run prepare:hero-assets`
  - `bun run build:deploy`

## Expected Build Behavior

- `bunx --bun vite build` succeeds, but prints warnings about script tags in `index.html` that do not use `type="module"`.
- Those warnings are expected in the current architecture because the page loads:
  - `vendor/react.development.js`
  - `vendor/react-dom.development.js`
  - `vendor/babel.min.js`
  - `components/*.jsx` through `type="text/babel"`
- Do not treat those warnings as a regression unless the page stops rendering.
- Public deploys should use `bun run build:deploy`, which runs `vite build` and then copies runtime-served directories like `components/`, `vendor/`, and `assets/` into `dist/`.

## Current Entry / Render Flow

- `index.html` is the only page the user is actively editing.
- The React app is mounted inline at the bottom of `index.html`.
- Component order in `App()` is currently:
  - `Nav`
  - `Hero`
  - `LogoCloud`
  - `Stats`
  - `Tech`
  - `Integrations`
  - `Showcase`
  - `Marketplace`
  - `Compare`
  - `CaseStudy`
  - `Pricing`
  - `FinalCta`
  - `Footer`
- `components/Features.jsx` exists, but it is not currently mounted in `App()`.

## Locale Routing

- Public-facing routes should use `/{locale}/{page}`.
- The current canonical pattern is:
  - `/ko`
  - `/en`
  - `/ko/pricing`
  - `/en/pricing`
- The bare root `/` should only act as a neutral entry and normalize into a locale path.
- For the current single-page landing, path segments like `/ko/pricing`, `/ko/tech`, `/ko/workflow`, `/ko/showcase`, and `/ko/marketplace` are treated as section routes that scroll to the matching section.
- `?lang=ko` and `?lang=en` can be used as temporary migration helpers, but should normalize back into the locale path.
- Because locale-prefixed URLs are now expected, root-level assets and script tags referenced by `index.html` should stay root-relative, not relative to the current pathname.
- Current content readiness:
  - `ko` and `en` are both content-ready locales today.
  - Locale copy lives in `components/AtelaCopy.js` and is rendered through the shared `index.html` app.

## Important Files

- `index.html`
  - Main entry file.
  - Loads all JSX components through script tags.
  - Contains small inline CSS overrides for the marquee-style `Trusted by` area and root rendering behavior.
- `components/AtelaCopy.js`
  - Central locale copy source for `ko` and `en`.
  - Also syncs page `<title>` and description metadata to the active locale.
- `styles/extensions.css`
  - Main active styling layer for the current landing page.
  - Holds the Demo-inspired Hero clone styles, floating nav styles, Hero demo card positions, and current ATELA-specific overrides.
- `components/Nav.jsx`
  - Current floating top bar for the Hero.
  - Uses ATELA branding and locale-aware CTA copy.
- `components/Hero.jsx`
  - Current interactive Hero demo.
  - Handles scroll-triggered line drawing, source item reveal, output card reveal, and conditional video rendering.
- `components/HeroDemoAssets.js`
  - Defines the current Hero asset packs and labels.
  - Maps normalized asset filenames into the Hero cards.
- `components/LogoCloud.jsx`
  - The `Trusted by` marquee section directly below the Hero.
- `components/Integrations.jsx`
  - Active workflow section for ecommerce brands.
  - Uses a simplified left-select / center-preview / right-KPI layout with localized workflow labels.
- `components/Showcase.jsx`
  - Showcase hook section inserted before `Marketplace`.
  - Presents example content types that lead into the Expert Marketplace section.
- `assets/hero-demo/`
  - Source folders and generated optimized Hero media.
- `assets/workflow/`
  - Local workflow placeholder stills captured from the current Presti reference videos.
- `scripts/prepare-hero-demo-assets.mjs`
  - Normalizes Hero asset folders and generates optimized AVIF / MP4 outputs.
- `main.js`
  - Legacy file from an older implementation.
  - It is not part of the currently rendered `index.html` flow and should not be used as the source of truth for the active page.

## Current Hero Design State

- The Hero was rebuilt as a Demo-style interactive demo, but adapted to ATELA branding and the existing design system.
- Current Hero copy is locale-aware:
  - Korean at `/ko`
  - English at `/en`
- The highlight styling on the title uses the ATELA design language, not the original Demo background artwork.
- The top navigation is a floating black bar styled to fit the current ATELA system.
- The CTA label is locale-aware:
  - Korean: `무료로 시작하기`
  - English: `Start free`
- The background is design-system aligned and does not use the original Demo image backdrop.

## Hero Interaction Behavior

- The Hero demo is scroll-reactive on desktop and simplified on smaller screens.
- Breakpoint:
  - `HERO_FLOW_BREAKPOINT = 820`
- Desktop behavior:
  - `Cafe24 / Shopify / URL` input nodes appear first.
  - The Assets list fills quickly as the user scrolls.
  - When the source card reaches the trigger region, connector lines animate and output cards reveal.
  - Hovering or focusing an item in the Assets list swaps the output cards.
- Mobile / narrow screens:
  - The flow collapses to a simple stacked grid.
  - SVG lines and floating nodes are hidden.

## Current Hero Card Mapping

- Visible card titles are currently:
  - `Assets`
  - `Background`
  - `Lighting`
  - `Variation`
  - `Angle`
  - `Video`
- Internal mapping in `components/HeroDemoAssets.js` is:
  - `source` -> Assets list thumbnail
  - `bg` -> `Background`
  - `bg_lighting` -> `Lighting`
  - `bg_variation` -> `Variation`
  - `angle` -> `Angle`
  - `video.optimized.mp4` -> `Video`

## Current Hero Packs

- The currently configured packs are:
  - `drg`
  - `chamo`
  - `lamp`
  - `sofa`
  - `jacket`
  - `pilot_trunk`
- Default pack:
  - `drg`

## Hero Asset Rules

- Each pack lives in:
  - `assets/hero-demo/<pack-id>/`
- Raw input filenames expected:
  - `source.(png|jpg|jpeg)`
  - `angle.(png|jpg|jpeg)`
  - `bg.(png|jpg|jpeg)`
  - `bg_lighting.(png|jpg|jpeg)`
  - `bg_variation.(png|jpg|jpeg)`
  - `video.mp4` optional
- Accepted alias filenames:
  - `drg_bg.*` -> `bg`
  - `bg_light.*` -> `bg_lighting`
- Fallback behavior:
  - If `bg_lighting` is missing, the script falls back to `bg`.
  - If `bg_variation` is missing, the script falls back to `bg`.

## Generated Hero Asset Outputs

- Running `bun run prepare:hero-assets` generates:
  - `source.avif`
  - `angle.avif`
  - `bg.avif`
  - `bg_lighting.avif`
  - `bg_variation.avif`
  - `video.optimized.mp4` when `video.mp4` exists
- The active Hero reads the generated files, not the raw PNG/JPG inputs.
- Video cards are conditionally rendered:
  - If a pack has no optimized video source, the `Video` card is omitted.

## Current Layout / Visual Decisions Already Applied

- The Hero demo has been horizontally widened to feel more like the earlier requested wireframe.
- The Assets card sits further left.
- The right-side cards are pushed outward more aggressively.
- Connector paths were redrawn to match the widened layout.
- The video card only appears for packs that actually include video.
- The `Trusted by` section text has already been shortened to just `Trusted by`.
- The logo row is implemented as a marquee, not the earlier static row version.
- Channel inputs in the Hero use logo-like treatments for:
  - `cafe24`
  - `shopify`
  - `URL`

## Trusted By Section

- Implemented in `components/LogoCloud.jsx`.
- Title is currently:
  - `Trusted by`
- Uses marquee animation defined partly in `index.html` inline CSS.
- Sits immediately after `<Hero/>` in the app tree.

## Editing Guidance

- When editing the active landing page, prefer these files first:
  - `components/*.jsx`
  - `styles/extensions.css`
  - `index.html` only when the change is truly root-level
- Avoid editing `_Index.html` unless the user explicitly asks for legacy page changes.
- Avoid editing files inside `ATELA Design System/` unless the user explicitly asks to sync or borrow from the reference system.
- If you add or replace Hero media:
  1. Put raw files into `assets/hero-demo/<pack-id>/`
  2. Run `bun run prepare:hero-assets`
  3. Update `components/HeroDemoAssets.js` if pack IDs or display names changed
  4. Verify in the browser

## Validation Workflow

- Minimum validation after Hero/media/layout changes:
  - `bun run prepare:hero-assets` when asset inputs changed
  - `bunx --bun vite build`
- Minimum validation before public deploy:
  - `bun run build:deploy`
  - confirm `dist/components/`, `dist/vendor/`, and `dist/assets/` exist
- Recommended visual verification:
  - Open `http://localhost:4174/`
  - Use a screenshot tool or browser check around the Hero region
  - Confirm:
    - card titles
    - pack hover swapping
    - missing-video behavior
    - connector alignment
    - spacing between Hero and `Trusted by`

## Known Non-Obvious Details

- `index.html` contains a lot of old static markup near the top, but the live page is re-rendered by React into `#root` at runtime.
- `#root` starts hidden and is revealed only after React mounts.
- Because this is a Babel-in-browser setup, syntax errors in JSX can break the page immediately even if CSS is fine.
- The current user-facing local URL has been `http://localhost:4174/`.

## Current Pending Polish

- The latest user request before this document was:
  - reduce the vertical gap between the Hero demo and the `Trusted by` section slightly
- That spacing tweak was not applied in the same step as this `AGENTS.md` creation.
