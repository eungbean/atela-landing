(function initAtelaHeroDemoAssets() {
  const base = '/assets/hero-demo';
  const copy = window.atelaGetCopySection ? window.atelaGetCopySection('heroDemo') : { packs: {} };
  const asset = (packId, fileName) => `${base}/${packId}/${fileName}`;
  const defaultPlatforms = [
    { id: 'cafe24', label: 'Cafe24', dotClass: 'is-akeneo' },
    { id: 'shopify', label: 'Shopify', dotClass: 'is-shopify' },
    { id: 'url', label: 'URL', dotClass: 'is-url' },
  ];

  const makePack = ({ id, sourceAlt, outputs, videoAlt, hasVideo = false, platforms }) => {
    const packCopy = copy.packs?.[id] || {};

    return ({
    id,
    name: packCopy.name || id,
    platforms: platforms || defaultPlatforms,
    source: {
      image: asset(id, 'source.avif'),
      alt: packCopy.sourceAlt || sourceAlt,
    },
    outputs: {
      studio: {
        label: 'BACKGROUND',
        image: asset(id, 'bg.avif'),
        alt: packCopy.outputs?.studio || outputs.studio,
      },
      angle: {
        label: 'LIGHTING',
        image: asset(id, 'bg_lighting.avif'),
        alt: packCopy.outputs?.angle || outputs.angle,
      },
      variation: {
        label: 'VARIATION',
        image: asset(id, 'bg_variation.avif'),
        alt: packCopy.outputs?.variation || outputs.variation,
      },
      lifestyle: {
        label: 'ANGLE',
        image: asset(id, 'angle.avif'),
        alt: packCopy.outputs?.lifestyle || outputs.lifestyle,
      },
      video: hasVideo ? {
        label: 'VIDEO',
        src: asset(id, 'video.optimized.mp4'),
        poster: asset(id, 'bg.avif'),
        alt: packCopy.videoAlt || videoAlt,
      } : null,
    },
  })};

  window.ATELA_HERO_DEMO_PACKS = [
    makePack({
      id: 'drg',
      sourceAlt: 'Dr.G 크림 상품 소스',
      outputs: {
        studio: 'Dr.G 크림 Background 결과물',
        angle: 'Dr.G 크림 Lighting 결과물',
        variation: 'Dr.G 크림 Variation 결과물',
        lifestyle: 'Dr.G 크림 Angle 결과물',
      },
      videoAlt: 'Dr.G 크림 영상 결과물',
      hasVideo: true,
    }),
    makePack({
      id: 'chamo',
      sourceAlt: 'CHAMO 핸드크림 상품 소스',
      outputs: {
        studio: 'CHAMO 핸드크림 Background 결과물',
        angle: 'CHAMO 핸드크림 Lighting 결과물',
        variation: 'CHAMO 핸드크림 Variation 결과물',
        lifestyle: 'CHAMO 핸드크림 Angle 결과물',
      },
      videoAlt: 'CHAMO 핸드크림 영상 결과물',
      hasVideo: true,
    }),
    makePack({
      id: 'lamp',
      sourceAlt: '테이블 램프 상품 소스',
      outputs: {
        studio: '테이블 램프 Background 결과물',
        angle: '테이블 램프 Lighting 결과물',
        variation: '테이블 램프 Variation 결과물',
        lifestyle: '테이블 램프 Angle 결과물',
      },
    }),
    makePack({
      id: 'sofa',
      sourceAlt: '커브드 소파 상품 소스',
      outputs: {
        studio: '커브드 소파 Background 결과물',
        angle: '커브드 소파 Lighting 결과물',
        variation: '커브드 소파 Variation 결과물',
        lifestyle: '커브드 소파 Angle 결과물',
      },
    }),
    makePack({
      id: 'jacket',
      sourceAlt: '마운틴 자켓 상품 소스',
      outputs: {
        studio: '마운틴 자켓 Background 결과물',
        angle: '마운틴 자켓 Lighting 결과물',
        variation: '마운틴 자켓 Variation 결과물',
        lifestyle: '마운틴 자켓 Angle 결과물',
      },
    }),
    makePack({
      id: 'pilot_trunk',
      sourceAlt: '파일럿 트렁크 상품 소스',
      outputs: {
        studio: '파일럿 트렁크 Background 결과물',
        angle: '파일럿 트렁크 Lighting 결과물',
        variation: '파일럿 트렁크 Variation 결과물',
        lifestyle: '파일럿 트렁크 Angle 결과물',
      },
      videoAlt: '파일럿 트렁크 영상 결과물',
      hasVideo: true,
    }),
  ];

  window.ATELA_HERO_DEMO_DEFAULT_PACK_ID = 'drg';
})();
