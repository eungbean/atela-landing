// Korean text + product detail preservation comparison.
function Tech() {
  const copy = window.atelaGetCopySection('tech');
  const trackUiInteraction = window.atelaTrackUiInteraction;
  const exampleVariants = copy.examples?.length
    ? copy.examples
    : [
        {
          id: 'outdoor',
          title: '',
          subtitle: '',
          thumb: '/assets/comparisons/1/atela.avif',
          comparisons: copy.comparisons,
        },
      ];
  const [activeExampleId, setActiveExampleId] = React.useState(exampleVariants[0].id);
  const activeExample = exampleVariants.find((example) => example.id === activeExampleId) || exampleVariants[0];
  const comparisons = activeExample.comparisons;
  const handleExampleSelect = (item) => {
    if (trackUiInteraction) {
      trackUiInteraction({
        sectionId: 'tech',
        interactionId: 'tech_example_select',
        interactionType: 'select',
        interactionLabel: item.title,
        interactionValue: item.id,
      });
    }

    setActiveExampleId(item.id);
  };

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

        <div className="tech-selector-preview" aria-label={copy.selectorAriaLabel || 'Example selector preview'}>
          <div className="tech-selector-preview-row">
            {exampleVariants.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`tech-selector-card ${item.id === activeExample.id ? 'is-active' : ''}`}
                aria-pressed={item.id === activeExample.id ? 'true' : 'false'}
                onMouseEnter={() => setActiveExampleId(item.id)}
                onFocus={() => setActiveExampleId(item.id)}
                onClick={() => handleExampleSelect(item)}
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
