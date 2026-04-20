// Korean text + product detail preservation comparison.
function Tech() {
  const copy = window.atelaGetCopySection('tech');
  const exampleVariants = [
    {
      id: 'outdoor',
      title: '아웃도어 의류',
      subtitle: '로고 · 텀블러 각인',
      thumb: '/assets/comparisons/1/atela.avif',
      comparisons: copy.comparisons,
    },
    {
      id: 'beauty',
      title: '뷰티 패키지',
      subtitle: '라벨 · 패키지 디테일',
      thumb: '/assets/hero-demo/drg/bg.avif',
      comparisons: [
        {
          id: 'nb2',
          brandLines: ['Nanobanana Pro'],
          image: '/assets/hero-demo/drg/bg_variation.avif',
          mainPosition: '50% 50%',
          detailSide: 'left',
          notePrefix: 'Nanobanana Pro.',
          note: '무드는 맞아도 패키지 표면의 작은 라벨 정보나 브랜드 디테일은 흐려지기 쉽습니다.',
          details: [
            { position: '36% 60%', scale: 3.0, alt: 'Nanobanana Pro beauty package detail' },
            { position: '62% 54%', scale: 2.9, alt: 'Nanobanana Pro beauty texture detail' },
          ],
        },
        {
          id: 'atela',
          brandLines: ['ATELA'],
          image: '/assets/hero-demo/drg/bg.avif',
          mainPosition: '50% 50%',
          detailSide: 'right',
          notePrefix: 'ATELA.',
          note: 'ATELA는 패키지 라벨, 표면 질감, 제품명처럼 구매 판단에 중요한 정보를 더 또렷하게 유지하는 결과를 목표로 합니다.',
          details: [
            { position: '39% 58%', scale: 3.0, alt: 'ATELA beauty package detail' },
            { position: '63% 56%', scale: 2.85, alt: 'ATELA beauty texture detail' },
          ],
        },
      ],
    },
    {
      id: 'living',
      title: '리빙 / 홈데코',
      subtitle: '소재감 · 각도 · 디테일',
      thumb: '/assets/hero-demo/lamp/bg.avif',
      comparisons: [
        {
          id: 'nb2',
          brandLines: ['Nanobanana Pro'],
          image: '/assets/hero-demo/lamp/bg_variation.avif',
          mainPosition: '52% 46%',
          detailSide: 'left',
          notePrefix: 'Nanobanana Pro.',
          note: '리빙 카테고리에서는 실루엣은 살아도 소재 결, 모서리 라인, 작은 구조 디테일이 쉽게 뭉개질 수 있습니다.',
          details: [
            { position: '54% 28%', scale: 3.0, alt: 'Nanobanana Pro lamp shade detail' },
            { position: '49% 76%', scale: 3.05, alt: 'Nanobanana Pro lamp base detail' },
          ],
        },
        {
          id: 'atela',
          brandLines: ['ATELA'],
          image: '/assets/hero-demo/lamp/bg.avif',
          mainPosition: '50% 50%',
          detailSide: 'right',
          notePrefix: 'ATELA.',
          note: 'ATELA는 소재감과 구조가 중요한 리빙 제품에서 쉐이드 결, 베이스 형태, 엣지 라인까지 안정적으로 유지하는 방향에 집중합니다.',
          details: [
            { position: '54% 28%', scale: 2.95, alt: 'ATELA lamp shade detail' },
            { position: '48% 76%', scale: 3.0, alt: 'ATELA lamp base detail' },
          ],
        },
      ],
    },
  ];
  const [activeExampleId, setActiveExampleId] = React.useState(exampleVariants[0].id);
  const activeExample = exampleVariants.find((example) => example.id === activeExampleId) || exampleVariants[0];
  const comparisons = activeExample.comparisons;

  return (
    <section id="tech" className="atela-tech on-ink">
      <div className="atela-container">
        <div className="atela-tech-head">
          <div>
            <span className="atela-eyebrow" style={{ color: '#C6FF3D' }}>{copy.eyebrow}</span>
            <h2 className="atela-h2" style={{ color: '#fff' }}>
              {copy.titleLines[0]}
              <br />
              {copy.titleLines[1]}
            </h2>
          </div>
          <p className="atela-tech-lede">
            {copy.lede}
            <b> {copy.ledeStrong}</b>
          </p>
        </div>

        <div className="atela-tech-compare-v2">
          {comparisons.map((comparison) => (
            <ComparisonPanel key={comparison.id} comparison={comparison} />
          ))}
        </div>

        <div className="tech-selector-preview" aria-label="Example selector preview">
          <div className="tech-selector-preview-row">
            {exampleVariants.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`tech-selector-card ${item.id === activeExample.id ? 'is-active' : ''}`}
                aria-pressed={item.id === activeExample.id ? 'true' : 'false'}
                onMouseEnter={() => setActiveExampleId(item.id)}
                onFocus={() => setActiveExampleId(item.id)}
                onClick={() => setActiveExampleId(item.id)}
              >
                <span className="tech-selector-thumb">
                  <img src={item.thumb} alt="" loading="lazy" decoding="async" />
                </span>
                <span className="tech-selector-copy">
                  <span className="tech-selector-title">{item.title}</span>
                  <span className="tech-selector-subtitle">{item.subtitle}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonPanel({ comparison }) {
  const detailRail = (
    <div className="tech-compare-detail-rail" aria-hidden="true">
      {comparison.details.map((detail, index) => (
        <div key={index} className="tech-compare-detail">
          <img
            src={comparison.image}
            alt={detail.alt}
            loading="lazy"
            decoding="async"
            style={{
              '--detail-position': detail.position,
              '--detail-scale': detail.scale,
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <article className={`tech-compare-panel is-${comparison.id} details-${comparison.detailSide}`}>
      <div className="tech-compare-layout">
        {comparison.detailSide === 'left' ? detailRail : null}

        <div className="tech-compare-main">
          <div className="tech-compare-browser">
            <div className="tech-compare-browser-bar">{comparison.brandLines[0]}</div>
            <div className="tech-compare-browser-body">
              <div className="tech-compare-image" style={{ '--main-position': comparison.mainPosition }}>
                <img src={comparison.image} alt={`${comparison.brandLines.join(' ')} comparison result`} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          <p className="tech-compare-note">
            <b>{comparison.notePrefix}</b> {comparison.note}
          </p>
        </div>

        {comparison.detailSide === 'right' ? detailRail : null}
      </div>
    </article>
  );
}

window.Tech = Tech;
