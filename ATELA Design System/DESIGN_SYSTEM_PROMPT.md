# ATELA Design System — Prompt Reference

> AI-generated product visuals for Korean e-commerce.
> Signature: ink black `#0A0A0A` + electric lime `#C6FF3D` · Pretendard · Bold · Editorial · Korean-first

---

## BRAND IDENTITY

**Product:** ATELA — AI 기반 상품 이미지 생성 플랫폼 (한국 이커머스 특화)
**Brand pillars:** 빠른 · 퀄리티있는 · 신뢰할 수 있는 · 기술력 있는 · 프로페셔널
**Tone:** 자신감 있고, 직접적이며, 전문적. 마케터가 아닌, 전문가처럼 말한다.
**Layout reference:** Superside.com — oversized display type, dense social proof, full-bleed editorial imagery

---

## COLOR

### Brand Core
| Token | Hex | Usage |
|---|---|---|
| `--atela-lime` | `#C6FF3D` | Primary accent — CTA, highlights, selection |
| `--atela-lime-bright` | `#D8FF6B` | Hover / highlight |
| `--atela-lime-deep` | `#9FD423` | Pressed / on dark bg |
| `--atela-ink` | `#0A0A0A` | Near-black canvas |
| `--atela-ink-2` | `#141414` | Raised surface on black |
| `--atela-ink-3` | `#1F1F1F` | Card on black |

### Neutrals (warm, not cold)
| Token | Hex | Usage |
|---|---|---|
| `--n-0` | `#FFFFFF` | White |
| `--n-50` | `#FAFAF7` | Default page bg (warm off-white) |
| `--n-100` | `#F2F1EC` | |
| `--n-200` | `#E6E4DD` | Border default |
| `--n-300` | `#CFCCC2` | Border strong |
| `--n-400` | `#A8A59A` | Disabled / hints |
| `--n-500` | `#7D7B73` | Muted / captions |
| `--n-700` | `#363531` | Secondary text |
| `--n-900` | `#0A0A0A` | Primary text |

### Semantic Accents (editorial, used sparingly — imagery & tags only)
- Magenta `#FF3DA8` — "Before" tag, campaign pops
- Violet `#6B3DFF`
- Tan `#E8D5B0` — warm editorial fill
- Cream `#F2ECD8`

### Status
- OK `#1AE07E` · Warn `#FFB020` · Error `#FF4D4D` · Info `#3DA8FF`

### Semantic Tokens
```
--bg:           #FAFAF7   (light page bg)
--bg-raised:    #FFFFFF
--bg-inverse:   #0A0A0A   (dark section bg)
--bg-accent:    #C6FF3D

--fg-1:  #0A0A0A  (primary text)
--fg-2:  #363531  (secondary text)
--fg-3:  #7D7B73  (muted / captions)
--fg-4:  #A8A59A  (disabled / hints)
--fg-on-ink:   #FFFFFF
--fg-on-lime:  #0A0A0A

--border:        #E6E4DD
--border-strong: #CFCCC2
```

### Dark Section Override (`.on-ink`)
배경이 `--atela-ink`인 섹션에서는 토큰이 자동으로 플립됨:
- `--fg-1 → #FFFFFF`, `--fg-2 → #E6E4DD`, `--border → #2A2A2A`

---

## TYPOGRAPHY

### Font Families
```
Primary (KO+EN):  Pretendard Variable → Inter → system-ui → sans-serif
Latin/numerals:   Inter → Pretendard Variable → system-ui
Mono/data:        JetBrains Mono → SF Mono → Menlo → monospace
```

### Type Scale
| Role | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Display 1 (hero) | clamp(56px, 7.8vw, 128px) | 800 | 0.95 | -0.03em |
| Display 2 | clamp(44px, 5.6vw, 88px) | 800 | 0.95 | -0.03em |
| H1 | clamp(36px, 4vw, 64px) | 800 | 1.08 | -0.02em |
| H2 | clamp(28px, 3vw, 44px) | 700 | 1.08 | -0.02em |
| H3 | 22px | 700 | 1.2 | -0.02em |
| H4 | 18px | 700 | 1.2 | — |
| Body | 16px | 400 | 1.55 | 0em |
| Body LG | 18px | 400 | 1.5 | — |
| Small | 14px | 400 | — | — |
| Eyebrow | 13px | 600–700 | — | +0.08em |
| Mono | 13px | 400 | — | 0 |

**Rules:**
- Display/H1 → `text-wrap: balance` 항상 적용
- Body → `text-wrap: pretty`
- Eyebrow → `text-transform: uppercase`, wide tracking

---

## SPACING

4px base, geometric scale:

| Token | Value |
|---|---|
| `--sp-1` | 4px |
| `--sp-2` | 8px |
| `--sp-3` | 12px |
| `--sp-4` | 16px |
| `--sp-5` | 20px |
| `--sp-6` | 24px |
| `--sp-7` | 32px |
| `--sp-8` | 40px |
| `--sp-9` | 56px |
| `--sp-10` | 80px |
| `--sp-11` | 120px |
| `--sp-12` | 160px |

Section vertical padding: `120px` (desktop)
Container max-width: `1280px`
Gutter: `clamp(20px, 4vw, 56px)`

---

## BORDER RADIUS

| Token | Value | Usage |
|---|---|---|
| `--r-xs` | 4px | |
| `--r-sm` | 8px | |
| `--r-md` | 12px | Inputs |
| `--r-lg` | 20px | Default cards |
| `--r-xl` | 28px | Large images |
| `--r-2xl` | 40px | Hero cards |
| `--r-pill` | 999px | Buttons, tags, chips |

---

## SHADOWS

최소화. 색상 블록 + 보더 우선, 그림자는 보조.

```
--sh-1: 0 1px 2px rgba(10,10,10,0.06)
--sh-2: 0 4px 12px rgba(10,10,10,0.08)    ← card hover
--sh-3: 0 12px 32px rgba(10,10,10,0.12)
--sh-lime: 0 8px 24px rgba(198,255,61,0.35)  ← primary CTA (선택적)
```

---

## MOTION

**Easing:** snappy, authoritative — no bounce, no spring

```
--ease-out:    cubic-bezier(0.22, 1, 0.36, 1)
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)

--dur-1: 120ms   ← UI reactions (버튼 hover)
--dur-2: 200ms   ← standard transitions
--dur-3: 320ms   ← entrance reveals
--dur-4: 560ms   ← large section animations
```

**Scroll reveal:** `translateY(12px)` + opacity 0→1. 패럴랙스 없음.
**Hover (button):** fill color + `translateY(-1px)`
**Press:** `translateY(1px)` + slightly darker fill. scale-down 없음.
**Hover (card):** border-color darkens, inner image `scale(1.03)` with `overflow: hidden`

---

## COMPONENTS

### Buttons

```css
/* Base: pill, bold, 14px, 700 weight */
border-radius: 999px;
padding: 14px 24px;
font-weight: 700;
font-size: 14px;
letter-spacing: -0.01em;
transition: all 200ms cubic-bezier(0.22, 1, 0.36, 1);

/* Small variant */
padding: 10px 18px;
font-size: 13px;
```

| Variant | Background | Color | Border | Hover |
|---|---|---|---|---|
| Primary | `#C6FF3D` | `#0A0A0A` | transparent | bg → `#D8FF6B` + translateY(-1px) |
| Ink | `#0A0A0A` | `#FFFFFF` | `#0A0A0A` | bg → `#1F1F1F` |
| Outline | transparent | `#0A0A0A` | `#0A0A0A` | bg → ink, color → white |
| Ghost | transparent | inherit | none | color → lime |
| On-ink | `#FFFFFF` | `#0A0A0A` | — | bg → lime |

### Navigation
```css
position: sticky; top: 0; z-index: 100;
background: rgba(10,10,10,0.78);
backdrop-filter: blur(16px);
border-bottom: 1px solid #1F1F1F;
height: 72px;
```
- Logo: font-weight 900, letter-spacing -0.04em, 22px
- Links: 14px, 600 weight, opacity 0.75 → 1 + lime on hover
- Lime "dot" accent (8×8px, border-radius 2px) 로고 우측에 배치

### Cards
- Light bg: `background: #fff; border: 1px solid #E6E4DD; border-radius: 20px`
- Dark bg: `background: #141414; border: 1px solid #2A2A2A; border-radius: 24px`
- Hover: `border-color: #0A0A0A; transform: translateY(-2px)`
- Padding: `32px` standard

### Chips / Tags
```css
padding: 6px 12px;
border-radius: 999px;
background: rgba(255,255,255,0.08);
color: #fff;
font-size: 12px;
font-weight: 600;

/* Active */
background: #C6FF3D;
color: #0A0A0A;
```

### Stats Block
```css
/* stat number */
font-size: clamp(40px, 5vw, 72px);
font-weight: 800;
letter-spacing: -0.035em;
line-height: 1;

/* stat label */
font-size: 14px;
font-weight: 600;
margin-top: 8px;

/* divider */
border-left: 2px solid #0A0A0A;
padding-left: 20px;
```

### Eyebrow
```css
font-size: 13px;
letter-spacing: 0.08em;
text-transform: uppercase;
font-weight: 700;
color: #363531;
```

### Highlight Mark (`.atela-mark`)
```css
background: #C6FF3D;
color: #0A0A0A;
padding: 0.05em 0.18em 0.15em;
border-radius: 6px;
display: inline-block;
line-height: 1;
```
Dark 섹션에서는 반전: `background: #0A0A0A; color: #C6FF3D`

### Before/After Slider
```css
/* container */
border-radius: 28px;
border: 1px solid #1F1F1F;
aspect-ratio: 16/10;

/* handle line */
width: 2px;
background: #C6FF3D;

/* knob */
width: 44px; height: 44px;
border-radius: 999px;
background: #C6FF3D;
color: #0A0A0A;
box-shadow: 0 8px 24px rgba(198,255,61,0.35);
```

### Pricing Cards
```css
/* Default (dark) */
background: #141414;
border: 1px solid #2A2A2A;
border-radius: 24px;
padding: 32px;

/* Featured */
background: #C6FF3D;
color: #0A0A0A;

/* Price number */
font-size: 48px;
font-weight: 800;
letter-spacing: -0.03em;
```

---

## LAYOUT PATTERNS

### Grid
- Desktop: 12-col, max-width 1280px
- Mobile: 4-col
- Standard 2-col: `grid-template-columns: 1fr 1fr; gap: 64px`
- Feature grid: `grid-template-columns: repeat(2, 1fr); gap: 24px`
- Stats grid: `grid-template-columns: repeat(4, 1fr); gap: 24px`
- Pricing grid: `grid-template-columns: repeat(3, 1fr); gap: 20px`
- Asymmetric hero: `grid-template-columns: 1.05fr 1fr; gap: 56px`

### Section Template
```
Light section:  background #FAFAF7, padding 120px 0
Dark section:   background #0A0A0A, padding 120px 0
Lime section:   background #C6FF3D, color #0A0A0A, padding 80px 0
```

### Breakpoint (단일, 900px)
```css
@media (max-width: 900px) {
  /* 모든 다중 컬럼 → 1fr */
  grid-template-columns: 1fr;
  /* stats: 2fr */
  /* nav links: hidden */
}
```

---

## ICONOGRAPHY

**라이브러리:** [Lucide](https://lucide.dev) (`https://unpkg.com/lucide@latest`)
- Stroke: 1.5px (고정, 절대 혼용 금지)
- Size: 16 / 20 / 24 / 32px (4px grid)
- Color: `currentColor` 상속. Lime은 selected/active 상태에만.
- 이모지: **완전 금지**
- 허용 유니코드 기호: `→` `·` `/` `✓` `×`

---

## IMAGERY RULES

- **No gradients** as primary surfaces. 보라→핑크 SaaS 그라디언트 절대 금지.
- **No hand-drawn illustrations, no emoji cards, no 3D abstract blobs.**
- Full-bleed editorial photography — 패션 캠페인 스타일 (Acne Studios, Jacquemus급)
- Product color backdrops: tan `#E8D5B0`, cream `#F2ECD8`, magenta `#FF3DA8`, lime `#C6FF3D`
- Warm white balance (cool-blue SaaS 렌더 금지)
- Editorial grain texture: lime/tan 블록에 미세하게 허용
- Text protection gradient (overlay용): `linear-gradient(transparent, #0A0A0A 70%)` — 장식 아님

---

## COPY RULES (보이스)

### 한국어 원칙
- 한국어 우선. 영어는 제품명·기술용어·수치만 인라인 사용.
- 센텐스 케이스 ("브랜드에 맞는 제품 이미지를 3분 만에")
- 숫자가 앞에: "**93%** 더 빠른 촬영" (O) / "촬영이 훨씬 빨라집니다" (X)
- 구분자: `·` 또는 줄바꿈 — 콤마 최소화
- "우리" / "여러분" 호칭. "고객님" 금지.
- 느낌표 금지 (긴 섹션 당 최대 1개)
- 이모지 완전 금지

### 버튼 카피
- 한국어 명령형 동사: "무료로 시작하기", "데모 신청", "지금 시도하기"

### 카피 예시
- Hero: `촬영 없이 / 브랜드가 된다.`
- Eyebrow: `AI PRODUCT VISUALS FOR KOREAN COMMERCE`
- Feature: `상품 1개 → 이미지 50장. 3분 안에.`
- Stat: `누적 12,400,000+ 장 생성`

---

## CSS IMPORT

```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
```

---

## ANTI-PATTERNS (절대 하지 말 것)

- SaaS 보라→핑크 그라디언트 배경
- 손그림 일러스트, 이모지 카드, 3D 추상 블롭
- 버튼에 그림자 추가 (hover 시)
- 타이포에서 혼합 폰트 weight (800 vs 900 혼용)
- 마케팅 카피에 "저희 서비스는...", "고객님", 느낌표 과다
- `backdrop-filter` 남용 (nav에만 허용)
- 패럴랙스 스크롤 효과
- 아이콘 stroke 혼용 (반드시 1.5px 통일)
- Lime을 본문 텍스트 색상으로 사용
- 컨테이너 max-width 1280px 초과
