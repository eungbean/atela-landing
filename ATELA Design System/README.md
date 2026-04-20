# ATELA Design System

> AI-generated, brand-consistent, and Korean-native product visuals for high-volume e-commerce.

ATELA helps Korean e-commerce brands produce **huge volumes of on-brand product imagery** — hero shots, lifestyle scenes, editorial campaigns — in minutes instead of weeks. The platform takes a seller's product photos + brand kit and outputs photography-grade visuals tuned to Korean marketplaces (Coupang, 29CM, Musinsa, Kakao Shopping, Naver Smart Store, etc.).

**Brand pillars:** 빠른 · 퀄리티있는 · 신뢰할 수 있는 · 기술력 있는 · 프로페셔널

---

## Sources & references

- **Structural / layout reference:** https://www.superside.com/ — we borrow their bold, editorial landing-page rhythm (oversized display type, dense social proof, full-bleed campaign imagery, confident product-led value props). We do **not** copy their visual identity.
- **No codebase / Figma was attached.** This design system is written fresh from the brief. If you have an existing brand kit, Figma file, or codebase, please attach it via the Import menu and I'll align this system to it.

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This file — product context, content fundamentals, visual foundations, iconography |
| `colors_and_type.css` | All design tokens as CSS vars + semantic element styles |
| `SKILL.md` | Cross-compatible skill file (usable in Claude Code) |
| `assets/` | Logos, logo mark, brand imagery |
| `preview/` | Design-system cards rendered as HTML (typography, color, components, etc.) |
| `ui_kits/marketing-site/` | Landing page recreation with reusable JSX components (tweakable hero + accent) |
| `scraps/` | Internal QA screenshots — safe to ignore |

---

## CONTENT FUNDAMENTALS

### Voice
Confident, direct, specific. We speak like an expert colleague who ships — not a marketer. Claims are backed by numbers (시간, %, 배수).

### Language
- **Korean-first.** All UI copy and marketing is written in Korean. English appears only as product/feature names, numerals, and technical terms (e.g. "AI", "API", "B2B").
- Sentence case in Korean ("브랜드에 맞는 제품 이미지를 3분 만에"), not title case.
- Use `·` (middle dot) or line breaks — rarely commas — between short phrases in headlines.

### Tone rules
- **"우리" / "여러분"** — inclusive, direct address. Avoid "고객님" — too formal/salesy.
- Short sentences. Verbs over nouns. Active voice.
- Numbers lead: "**93%** 더 빠른 촬영", not "촬영이 훨씬 빨라집니다".
- No emojis in product or marketing surfaces. Use typographic symbols sparingly (→, ·, /, ✓).
- No exclamation marks in headlines. One, max, per long-form section.

### Casing
- Korean headlines: sentence case, often broken across lines for rhythm
- English terms in Korean copy: leave as-is, no quotation marks ("Superside급 퀄리티")
- Buttons: imperative verbs. 한국어 ("무료로 시작하기", "데모 신청"), 영어는 최소화.

### Specific copy examples
- ✅ Hero: `촬영 없이 / 브랜드가 된다.` — fragment, bold, two lines
- ✅ Eyebrow: `AI PRODUCT VISUALS FOR KOREAN COMMERCE`
- ✅ Feature: `상품 1개 → 이미지 50장. 3분 안에.`
- ✅ Proof: `누적 **12,400,000+**장 생성`
- ❌ Don't: "저희 서비스는 고객님의 이미지를 빠르게 만들어드립니다 😊"

### Numbers
- Comma-grouped (12,400,000)
- Percent signs hug the number (93%)
- Time: "3분", "24시간", "일주일"

---

## VISUAL FOUNDATIONS

### Color
- **Signature pairing: ink black `#0A0A0A` + electric lime `#C6FF3D`.** Lime is the "accent with voltage" — used for CTAs, highlights, selection states, and one hero accent per section. Never as body text.
- **Warm off-white `#FAFAF7`** is the default page background (slightly warmer than true white — reads more "editorial print" than "tech SaaS").
- **Editorial accents** (magenta `#FF3DA8`, violet `#6B3DFF`, tan `#E8D5B0`) show up only in imagery blocks / campaign tags / "before" labels — never for structural UI.
- **Dark sections** are dominant — the brand leans into ink-black canvases with lime accents, echoing fashion editorial layouts.
- Contrast: WCAG AA minimum on text; lime-on-black and ink-on-lime are our two big chord changes.

### Typography
- **Pretendard Variable** for everything — Korean + Latin handled by one family. Weights 400/500/700/800.
- **Inter** as a backup for Latin-only surfaces / numerals.
- **JetBrains Mono** for data, captions with numbers, timestamps.
- Display type is **heavy (800)**, **tight** (letter-spacing -3%), **big** (up to 128px on desktop). Balanced with lots of whitespace.
- Eyebrows: uppercase, wide-tracked, small (13px, +8% tracking).
- Body copy: 16–18px, 155% line-height, `text-wrap: pretty`.
- Korean optical: slightly looser (0em) than Latin display (-2%).

### Spacing
- 4px base, geometric scale (4/8/12/16/20/24/32/40/56/80/120/160).
- Section padding: `--sp-11` (120px) vertical on desktop, scales down proportionally.
- Gutter: `clamp(20px, 4vw, 56px)`.

### Backgrounds & imagery
- **Full-bleed, high-fashion editorial photography** dominates — think campaign imagery for Acne Studios, Jacquemus, Gentle Monster. Dramatic lighting, saturated color backdrops, tight crops.
- **No gradients** as primary surfaces (no purple→pink SaaS slop). Solid color blocks only.
- **No hand-drawn illustrations, no emoji cards, no 3D abstract blobs.**
- **Repeating patterns:** allowed sparingly — a single fine noise/grain texture can sit on lime or tan blocks to soften them.
- **Before/After split screens** are a signature layout for proof sections.

### Animation
- **Easing: `ease-out-quart` `cubic-bezier(0.22, 1, 0.36, 1)`** — snappy, authoritative, no bounce.
- Durations: 120 / 200 / 320 / 560ms. UI reactions are 120–200ms; entrance reveals are 320–560ms.
- Scroll reveals: subtle translateY(12px) + opacity fade. No parallax.
- Hover: color change + underline slide (for links), lime fill slide-in (for buttons).
- Press: 1–2px translateY, no scale.

### Hover & press
- **Hover on buttons:** fill color shifts to `--atela-lime-bright` OR ink→lime invert. Never "add shadow".
- **Hover on links:** underline thickens / color shifts to lime-deep.
- **Hover on cards:** border-color darkens, image inside scales to 1.03 with overflow hidden.
- **Press:** `translateY(1px)` + slightly darker fill. No scale-down.

### Borders
- 1px default (`--border`), 1.5px on ink backgrounds, 2px for emphasis.
- Border-radius: cards `--r-lg` (20px), buttons `--r-pill` (999px), inputs `--r-md` (12px), images `--r-xl` (28px).

### Shadows
- Minimal. We use color blocks and borders over shadow elevation.
- `--sh-2` (`0 4px 12px rgba(10,10,10,0.08)`) for hover pop on cards.
- `--sh-lime` (`0 8px 24px rgba(198,255,61,0.35)`) only on primary CTAs at rest, optional.

### Transparency & blur
- Used sparingly. Sticky nav: `rgba(10,10,10,0.72)` + `backdrop-filter: blur(16px)` on ink version.
- Image overlays for text contrast: solid-color bottom-gradient `linear-gradient(transparent → ink 70%)` — protection gradient, not a decoration.

### Cards
- Flat, ink-bordered on light bg; raised ink-2 on dark bg.
- 20px radius, 1px `--border`, no shadow at rest.
- Inside padding: `--sp-6` (24px) compact, `--sp-8` (40px) hero card.

### Imagery vibe
- Warm in white-balance (not cool-blue SaaS render).
- Editorial grain lightly applied on full-bleed shots.
- Color blocks behind products: tan `#E8D5B0`, cream `#F2ECD8`, magenta `#FF3DA8`, lime `#C6FF3D`.

### Layout rules
- Fixed top nav, 72px high, ink on scroll.
- Max container width: 1280px. Hero sections are full-bleed; content blocks honor max-width.
- 12-col grid on desktop, 4-col on mobile.
- Asymmetric layouts preferred — number-led stat blocks break alignment intentionally.

---

## ICONOGRAPHY

No icon system was attached, so ATELA uses **[Lucide](https://lucide.dev)** via CDN (`https://unpkg.com/lucide@latest`) — 1.5px stroke, 24px default, rounded line-caps. This matches our "modern, tech-forward, confident" brand better than Heroicons (too rounded) or Phosphor (too playful).

**Substitution flagged:** if you have a custom icon set or prefer a different family (e.g. Tabler, Remix), please attach it and I'll swap.

### Rules
- **Stroke weight:** 1.5px everywhere. Never mix weights.
- **Size:** 16 / 20 / 24 / 32 — aligned to 4px grid.
- **Color:** inherits `currentColor`. Lime is reserved for state/selected icons; never default.
- **Emoji:** 사용 금지. Never in UI, product, or marketing.
- **Unicode symbols:** `→` `·` `/` `✓` `×` are OK as typographic accents, but prefer icons for interactive affordances.
- **Custom glyphs:** the lime "frame-corner" square (see `assets/logo-mark.svg`) is the ONLY bespoke brand glyph — a visual rhyme with the logo. Reuse it as a section anchor or "new" tag.

### Logos
- `assets/logo.svg` — horizontal wordmark with lime accent dot. Min width 120px.
- `assets/logo-mark.svg` — square mark, ink bg, lime frame-corner. Use at ≤ 48px or for favicon/app icon.
- Clear space: 0.5× logo height on all sides.
- Never recolor. Never stretch. On photography, place over the solid-ink panel, not the photo itself.

---
