// Workflow for ecommerce brands — left selector, centered result preview, right KPI panel.
function Integrations() {
  const copy = window.atelaGetCopySection('integrations');
  const trackUiInteraction = window.atelaTrackUiInteraction;
  const [activeChallengeId, setActiveChallengeId] = React.useState(copy.challenges[0]?.id);
  const activeChallenge =
    copy.challenges.find((item) => item.id === activeChallengeId) || copy.challenges[0];
  const handleChallengeSelect = (item) => {
    if (trackUiInteraction) {
      trackUiInteraction({
        sectionId: 'workflow',
        interactionId: 'workflow_challenge_select',
        interactionType: 'select',
        interactionLabel: item.label,
        interactionValue: item.id,
      });
    }

    setActiveChallengeId(item.id);
  };

  return (
    <section id="workflow" className="atela-integ">
      <div className="atela-container">
        <div className="workflow-section-head">
          <span className="atela-eyebrow">{copy.eyebrow}</span>
          <h2 className="atela-h2">
            {copy.titlePrefix}<br/>
            <span className="hl">{copy.titleHighlight}</span>{copy.titleSuffix}
          </h2>
          <p className="integ-lede workflow-section-lede">
            {copy.ledeLines[0]}
            {copy.ledeLines[1] ? (
              <>
                <br/>
                {copy.ledeLines[1]}
              </>
            ) : null}
          </p>
        </div>

        <div className="workflow-display-layout">
          <div className="workflow-selector-list" aria-label={copy.selectorAriaLabel}>
            {copy.challenges.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`workflow-selector-item${item.id === activeChallenge.id ? ' is-active' : ''}`}
                onClick={() => handleChallengeSelect(item)}
                onMouseEnter={() => setActiveChallengeId(item.id)}
                onFocus={() => setActiveChallengeId(item.id)}
                aria-pressed={item.id === activeChallenge.id ? 'true' : 'false'}
              >
                <span className="workflow-selector-item-index">{item.k}</span>
                <span className="workflow-selector-item-title">{item.label}</span>
              </button>
            ))}
          </div>

          <article className="workflow-result-card" aria-label={activeChallenge.title}>
            <div className="workflow-result-media">
              <img src={activeChallenge.image} alt={activeChallenge.alt} loading="lazy" decoding="async" />
            </div>
          </article>

          <aside className="workflow-metric-panel" aria-label={copy.metricAriaLabel}>
            {copy.metrics.map((metric) => (
              <article key={metric.value} className="workflow-metric-row">
                <div className="workflow-metric-value">{metric.value}</div>
                <p>{metric.body}</p>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
window.Integrations = Integrations;
