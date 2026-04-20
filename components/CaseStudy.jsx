function CaseStudy() {
  const copy = window.atelaGetCopySection('caseStudy');
  return (
    <section id="cases" className="atela-case">
      <div className="atela-container">
        <div className="atela-case-grid">
          <div className="atela-case-visual" style={{background:'#FF3DA8'}}>
            <div className="atela-case-image">
              <div className="atela-product case"><div className="atela-bottle tall"/></div>
            </div>
            <div className="atela-case-badge">{copy.badge}</div>
          </div>
          <div className="atela-case-copy">
            <span className="atela-eyebrow">{copy.eyebrow}</span>
            <h2 className="atela-h2">{copy.titlePrefix} <span className="hl">{copy.titleHighlight}</span></h2>
            <p>{copy.body}</p>
            <blockquote>
              "{copy.quote}"
              <cite>— {copy.cite}</cite>
            </blockquote>
            <div className="case-stats-row">
              {copy.stats.map((stat) => (
                <div key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>
              ))}
            </div>
            <a className="atela-btn-outline" href="#">{copy.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CaseStudy = CaseStudy;
