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
      subtitle: '제품명 · 라벨 · 패키지 정보',
      thumb: '/assets/comparisons/2/atela.avif',
      comparisons: [
        {
          id: 'nb2',
          brandLines: ['Nanobanana Pro'],
          image: '/assets/comparisons/2/nb2.avif',
          detailImage: '/assets/comparisons/2/nb2.detail.avif',
          mainPosition: '50% 50%',
          detailSide: 'left',
          notePrefix: 'Nanobanana Pro.',
          note: '분위기는 맞아도 제품명, 하단 정보, 패키지 표면 디테일은 작아지거나 흐려지기 쉽습니다.',
          details: [
            { position: '50% 73%', scale: 6.4, alt: 'Nanobanana Pro beauty product name detail' },
            { position: '45% 80%', scale: 9.2, alt: 'Nanobanana Pro beauty label detail' },
          ],
        },
        {
          id: 'atela',
          brandLines: ['ATELA'],
          image: '/assets/comparisons/2/atela.avif',
          detailImage: '/assets/comparisons/2/atela.detail.avif',
          mainPosition: '50% 50%',
          detailSide: 'right',
          notePrefix: 'ATELA.',
          note: 'ATELA는 제품명, 라인명, 용량 표기처럼 구매 판단에 중요한 패키지 정보를 더 선명하게 유지하는 데 집중합니다.',
          details: [
            { position: '60% 61%', scale: 5.0, alt: 'ATELA beauty product name detail' },
            { position: '52% 75%', scale: 5.0, alt: 'ATELA beauty lower label detail' },
          ],
        },
      ],
    },
    {
      id: 'beverage',
      title: '음료 패키지',
      subtitle: '로고 · 한글 제품명 · 패키지 텍스트',
      thumb: '/assets/comparisons/3/atela.avif',
      comparisons: [
        {
          id: 'nb2',
          brandLines: ['Nanobanana Pro'],
          image: '/assets/comparisons/3/nb2.avif',
          detailImage: '/assets/comparisons/3/nb2.detail.avif',
          mainPosition: '50% 50%',
          detailSide: 'left',
          notePrefix: 'Nanobanana Pro.',
          note: '전체 무드는 맞아도 로고 형태, 영문·한글 제품명, 하단 표기 같은 패키지 정보는 쉽게 흔들릴 수 있습니다.',
          details: [
            { position: '55% 44%', scale: 8.0, alt: 'Nanobanana Pro beverage logo detail' },
            { position: '50% 74%', scale: 5.4, alt: 'Nanobanana Pro beverage label detail' },
          ],
        },
        {
          id: 'atela',
          brandLines: ['ATELA'],
          image: '/assets/comparisons/3/atela.avif',
          detailImage: '/assets/comparisons/3/atela.detail.avif',
          mainPosition: '50% 50%',
          detailSide: 'right',
          notePrefix: 'ATELA.',
          note: 'ATELA는 로고 곡선, 제품명, 하단 한글 표기처럼 브랜드 식별에 중요한 디테일을 안정적으로 유지하는 데 집중합니다.',
          details: [
            { position: '55% 40%', scale: 8, alt: 'ATELA beverage logo detail' },
            { position: '50% 66%', scale: 5.0, alt: 'ATELA beverage label detail' },
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
            src={comparison.detailImage || comparison.image}
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
