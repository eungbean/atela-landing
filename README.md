# ATELA Landing

Current ATELA landing workspace for a script-tag React/Babel site served with Vite.

## Positioning

ATELA is no longer framed as a generic self-serve tool. This landing should present ATELA as:

- a design creative team for brands
- an `AI Agentic Agency for Brands`
- a workflow partner that turns catalog inputs into brand-safe commercial creative

Future edits should reinforce service, workflow, and team language over tool-first or model-first language.

## Core Message Guardrails

- Emphasize text, logo, embroidery, engraving, and packaging-detail sharpness.
- Keep the workflow story clear: connect store or source inputs, generate creative, branch by channel, learn from approvals and performance, and compound into the next batch.
- Keep the `CompoundLoop` section aligned with the idea that approved outputs and performance signals improve future creative.
- Preserve the current proof framing around patented technology, published research, and commercial reliability when editing the `Tech` section copy.

## Active Architecture

- `index.html`: active entry and inline React mount
- `components/AtelaCopy.js`: source of truth for locale copy and page metadata
- `components/AtelaLocale.js`: locale-first URL helpers
- `components/*.jsx`: active landing sections loaded through `type="text/babel"`
- `styles/extensions.css`: main active styling layer
- `styles/base.css`: shared base styles used by the current page

## Section Order

`Nav` -> `Hero` -> `LogoCloud` -> `Stats` -> `Tech` -> `Integrations` -> `Showcase` -> `Marketplace` -> `CompoundLoop` -> `Compare` -> `CaseStudy` -> `Pricing` -> `FinalCta` -> `Footer`

## Important Active Surfaces

- `components/Tech.jsx`: proof section for text and detail preservation
- `components/Integrations.jsx`: workflow section for ecommerce brands
- `components/Showcase.jsx`: gallery hook before the expert and agent layer
- `components/Marketplace.jsx`: expert marketplace and specialist layer
- `components/CompoundLoop.jsx`: compounding system-learning section
- `components/Pricing.jsx`: pricing story for the current offer

## Commands

- `bunx --bun vite`
- `bunx --bun vite build`
- `bunx --bun vite preview`
- `bun run prepare:hero-assets`
- `bun run prepare:want-this-assets`
- `bun run prepare:want-this-assets:cleanup`
- `bun run build:deploy`

## Clerk Launch Sign-In

- This landing opens Clerk's JavaScript sign-in overlay from the shared `무료로 시작하기` / `Start free` CTA.
- Add `VITE_CLERK_PUBLISHABLE_KEY=pk_test_...` to `.env.local` before running Vite locally or building for deploy.
- In Clerk, use the `JavaScript` quickstart for this workspace because the live app is mounted from `index.html`, not a bundled React entry.
- Enable Google as a social connection in the Clerk Dashboard. If you want a Google-only flow, disable other sign-in methods and keep Google enabled for both sign-up and sign-in.
- Before public launch, make sure the Google OAuth app connected to Clerk is switched from `Testing` to `In production`.

## Asset Workflow

### Hero assets

- Put raw source files into `assets/hero-demo/<pack-id>/`
- Run `bun run prepare:hero-assets`
- The live Hero reads optimized outputs such as `source.avif` and `video.optimized.mp4`

### Showcase assets

- Put raw `png`, `jpg`, `jpeg`, `webp`, `avif`, or `mp4` files into `assets/want-this/`
- Run `bun run prepare:want-this-assets`
- `components/Showcase.jsx` reads `assets/want-this/manifest.js`

## Locale Routing

- Public URLs use `/{locale}/{page}`
- Home routes are `/ko` and `/en`
- Section routes include paths such as `/ko/pricing`, `/ko/tech`, `/ko/workflow`, `/ko/showcase`, and `/ko/marketplace`
- `/` is only a neutral entry that normalizes into a locale path

## Validation

- Standard check: `bunx --bun vite build`
- Production prep: `bun run build:deploy`
- Expected build warnings about non-module script tags in `index.html` are normal for this architecture unless the build exits non-zero

## Reference Files

- `ATELA LANDING BY CLAUDE.html`: legacy export mirror, not the live source of truth
- `ATELA Design System/`: reference material only
