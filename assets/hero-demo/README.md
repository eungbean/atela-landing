# Hero Demo Asset Packs

Hero 데모는 `assets/hero-demo/<pack-id>/` 아래의 폴더를 기준으로 결과 카드를 채웁니다.

## 원본 파일 규칙

각 폴더에는 아래 원본 파일명을 넣으면 됩니다.

- `source.(png|jpg|jpeg)`
- `angle.(png|jpg|jpeg)`
- `bg.(png|jpg|jpeg)`
- `bg_lighting.(png|jpg|jpeg)`
- `bg_variation.(png|jpg|jpeg)`
- `video.mp4` (선택)

아래 예외 이름도 자동으로 허용합니다.

- `drg_bg.*` -> `bg`
- `bg_light.*` -> `bg_lighting`

`bg_lighting` 또는 `bg_variation`이 없으면, 스크립트가 `bg`를 fallback으로 사용해 정규화 파일을 생성합니다.

## 생성 파일

`bun run prepare:hero-assets` 를 실행하면 Hero가 실제로 읽는 최적화 파일이 생성됩니다.

- `source.avif`
- `angle.avif`
- `bg.avif`
- `bg_lighting.avif`
- `bg_variation.avif`
- `video.optimized.mp4` (원본 `video.mp4`가 있는 경우만 생성)

## 카드 매핑

- `source` -> Assets 목록 썸네일
- `bg` -> `Background`
- `bg_lighting` -> `Lighting`
- `bg_variation` -> `Variation`
- `angle` -> `Angle`
- `video.optimized.mp4` -> `Video`

## 새 팩 추가 순서

1. `assets/hero-demo/<pack-id>/` 폴더를 만듭니다.
2. 원본 파일명을 규칙에 맞춰 넣습니다.
3. `bun run prepare:hero-assets` 를 실행합니다.
4. `components/HeroDemoAssets.js` 에 팩 이름과 라벨만 추가/수정합니다.
