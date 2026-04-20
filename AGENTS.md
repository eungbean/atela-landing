# AGENTS.md

## Project Snapshot

- This workspace contains the active ATELA landing page implementation.
- The active entry is `index.html` at the repository root.
- The page is served locally with Vite, but rendered through script-tag React + Babel rather than a bundled React app.
- `ATELA Design System/` is reference material, not the live rendered page.
- `ATELA LANDING BY CLAUDE.html` is a legacy export mirror, not the source of truth.

## Brand / Product Positioning

- ATELA is now positioned as:
  - `브랜드를 위한 디자인 크리에이티브 팀`
  - `AI Agentic Agency for Brands`
- Older tool-first or platform-first framing is outdated. Future edits should favor team, workflow, output quality, and operating leverage language over generic AI-tool language.
- The landing should communicate that ATELA becomes the brand's creative operating layer for commercial content, not just a model interface.

## Core Product Story To Preserve

- Purpose:
  - Help brands and commerce teams produce brand-safe commercial creative without relying on slow manual studio or agency workflows for every batch.
- Core technology:
  - Preserve text, logos, embroidery, engravings, packaging detail, and other conversion-critical brand information.
  - Keep Korean and brand-specific detail sharp inside generated outputs.
  - Reinforce the current proof framing around patented technology and published research when editing the `Tech` section.
- Workflow:
  1. Connect store, catalog, URL, or source assets.
  2. Generate brand-safe outputs for PDP, marketplace, ads, CRM, and short-form.
  3. Branch assets by channel and format.
  4. Capture approvals, performance signals, and channel feedback.
  5. Feed those signals back into the next batch through the compound loop and agent layer.
- Positioning shift:
  - The repo previously carried more self-serve tool language.
  - The current direction is explicitly agentic-agency framing with workflow ownership and creative execution.

## Runtime / Commands

- Use `bun`, not `npm`.
- Assumptions:
  - `bun` is available
  - `ffmpeg` is available
  - `vite` is used through `bunx --bun`
- Main commands:
  - `bunx --bun vite`
  - `bunx --bun vite build`
  - `bunx --bun vite preview`
  - `bun run prepare:hero-assets`
  - `bun run prepare:want-this-assets`
  - `bun run prepare:want-this-assets:cleanup`
  - `bun run build:deploy`

## Expected Build Behavior

- `bunx --bun vite build` succeeds with expected warnings about non-module script tags in `index.html`.
- Those warnings are normal because the page loads:
  - `vendor/react.development.js`
  - `vendor/react-dom.development.js`
  - `vendor/babel.min.js`
  - `components/*.jsx` through `type="text/babel"`
- Do not treat those warnings as a regression unless the build exits non-zero or the page stops rendering.
- Public deploys should use `bun run build:deploy`.

## Current Entry / Render Flow

- `index.html` is the only active page entry.
- The React app is mounted inline at the bottom of `index.html`.
- Component order in `App()` is:
  - `Nav`
  - `Hero`
  - `LogoCloud`
  - `Stats`
  - `Tech`
  - `Integrations`
  - `Showcase`
  - `Marketplace`
  - `CompoundLoop`
  - `Compare`
  - `CaseStudy`
  - `Pricing`
  - `FinalCta`
  - `Footer`

## Locale Routing

- Public-facing routes use `/{locale}/{page}`.
- Canonical examples:
  - `/ko`
  - `/en`
  - `/ko/pricing`
  - `/en/pricing`
- The bare root `/` should normalize into a locale path.
- For the single-page landing, routes such as `/ko/pricing`, `/ko/tech`, `/ko/workflow`, `/ko/showcase`, and `/ko/marketplace` map to section scroll targets.
- `?lang=ko` and `?lang=en` can remain as temporary migration helpers, but should normalize back into locale paths.
- Assets and script tags referenced by `index.html` should stay root-relative because the live app is expected to run under locale-prefixed paths.

## Important Files

- `index.html`
  - Main entry file
  - Loads all active JSX components through script tags
  - Contains inline CSS overrides for the marquee-style `Trusted by` section and mount behavior
- `components/AtelaCopy.js`
  - Central locale copy source for `ko` and `en`
  - Also syncs page metadata
  - First place to check for visible wording or positioning changes
- `components/AtelaLocale.js`
  - Locale-first URL helpers and section-route behavior
- `styles/extensions.css`
  - Main active styling layer for the landing
- `styles/base.css`
  - Shared base styles used by the live page
- `components/Hero.jsx`
  - Interactive hero demo with input nodes, connectors, and output cards
- `components/HeroDemoAssets.js`
  - Hero pack definitions and output labels
- `components/LogoCloud.jsx`
  - `Trusted by` marquee below the hero
- `components/Tech.jsx`
  - Text, logo, and detail-preservation proof section
- `components/Integrations.jsx`
  - Workflow section for ecommerce brands
- `components/Showcase.jsx`
  - Visual showcase hook before the specialist layer
- `components/Marketplace.jsx`
  - Expert and specialist marketplace section
- `components/CompoundLoop.jsx`
  - Compounding system-learning section that shows creative generation, channel branching, performance data, and model or agent learning
- `components/Compare.jsx`
  - Positioning comparison table against alternatives
- `components/Pricing.jsx`
  - Pricing section for the current commercial offer
- `assets/want-this/`
  - Raw drop zone for showcase gallery source files
- `scripts/prepare-want-this-assets.mjs`
  - Rebuilds `assets/want-this/manifest.js` and optimized gallery assets
- `assets/hero-demo/`
  - Source folders and generated hero media
- `scripts/prepare-hero-demo-assets.mjs`
  - Generates optimized hero outputs

## Hero Behavior

- The hero is a Demo-style interactive section adapted to ATELA branding.
- Current CTA copy is locale-aware:
  - Korean: `무료로 시작하기`
  - English: `Start free`
- Desktop behavior:
  - `Cafe24 / Shopify / URL` nodes appear first
  - The asset or source card fills quickly
  - Connector lines animate and output cards reveal as the user scrolls
  - Hovering or focusing asset items swaps the output cards
- Mobile behavior:
  - The flow collapses to a stacked grid
  - SVG lines and floating nodes are hidden

## Hero Asset Rules

- Each pack lives in `assets/hero-demo/<pack-id>/`
- Raw filenames expected:
  - `source.(png|jpg|jpeg)`
  - `angle.(png|jpg|jpeg)`
  - `bg.(png|jpg|jpeg)`
  - `bg_lighting.(png|jpg|jpeg)`
  - `bg_variation.(png|jpg|jpeg)`
  - optional `video.mp4`
- Running `bun run prepare:hero-assets` generates:
  - `source.avif`
  - `angle.avif`
  - `bg.avif`
  - `bg_lighting.avif`
  - `bg_variation.avif`
  - `video.optimized.mp4` when a video source exists

## Editing Guidance

- Prefer editing:
  - `components/*.jsx`
  - `components/AtelaCopy.js`
  - `styles/extensions.css`
  - `styles/base.css`
  - `index.html` only when the change is truly root-level
- Avoid editing files inside `ATELA Design System/` unless the user explicitly asks to borrow from the reference system.
- When changing messaging, keep the current agentic-agency framing aligned across:
  - page metadata
  - hero copy
  - tech proof
  - compound loop
  - compare and pricing language
- If you add or replace hero media:
  1. Put raw files into `assets/hero-demo/<pack-id>/`
  2. Run `bun run prepare:hero-assets`
  3. Update `components/HeroDemoAssets.js` if pack IDs or labels changed
  4. Verify in the browser
- If you add or replace showcase media:
  1. Put raw files into `assets/want-this/`
  2. Run `bun run prepare:want-this-assets`
  3. Verify that `assets/want-this/manifest.js` and `assets/want-this/optimized/` were regenerated
  4. Verify the showcase loop in the browser

## Validation Workflow

- Minimum validation after UI, copy, or layout changes:
  - `bunx --bun vite build`
- Additional validation when assets changed:
  - `bun run prepare:hero-assets`
  - `bun run prepare:want-this-assets`
- Minimum validation before public deploy:
  - `bun run build:deploy`
  - confirm `dist/components/`, `dist/vendor/`, and `dist/assets/` exist
- Recommended visual verification:
  - Open `http://localhost:4174/`
  - Check hero interaction, tech detail views, the compound loop section, and the spacing around `Trusted by`

## Known Non-Obvious Details

- `index.html` still contains older static markup near the top, but the live page is re-rendered by React into `#root` at runtime.
- `#root` starts hidden and is revealed only after React mounts.
- Because this is a Babel-in-browser setup, JSX syntax errors can break the page immediately.
- The standard local URL in recent work has been `http://localhost:4174/`.

## Cleanup Notes

- Removed legacy files on `2026-04-20`:
  - `components/Features.jsx`
  - `_Index.html`
  - `main.js`
  - `styles.css`
- Do not recreate parallel legacy entrypoints or old tool-first framing unless the user explicitly asks for it.
