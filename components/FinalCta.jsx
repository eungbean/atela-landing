function FinalCta() {
  const copy = window.atelaGetCopySection('finalCta');
  const highlightLines = String(copy.titleLines[1] || '').split('\n');
  return (
    <section className="atela-final">
      <div className="atela-container">
        <div className="atela-final-card">
          <span className="atela-eyebrow" style={{color:'#0A0A0A', opacity: 0.6}}>{copy.eyebrow}</span>
          <h2 className="atela-display">
            {copy.titleLines[0]}<br/>
            {highlightLines.map((line, index) => (
              <React.Fragment key={`${line}-${index}`}>
                {index > 0 ? <br/> : null}
                <span className="atela-mark">{line}</span>
              </React.Fragment>
            ))}
          </h2>
          <p>{copy.body}</p>
          <div className="atela-hero-cta center">
            <a className="atela-btn-ink" href="#">{copy.primaryCta}</a>
            <a className="atela-btn-ghost" href="#">{copy.secondaryCta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCta = FinalCta;

function Footer() {
  const copy = window.atelaGetCopySection('footer');
  const buildSectionUrl = window.atelaBuildSectionUrl || ((sectionId) => `#${sectionId}`);
  const handleSectionNavigation = window.atelaHandleSectionNavigation;

  return (
    <footer className="atela-footer on-ink">
      <div className="atela-container">
        <div className="atela-footer-grid">
          <div>
            <div className="atela-logo" style={{color:'#fff'}}>ATELA<span className="atela-logo-dot"/></div>
            <p style={{color:'#888', marginTop:12, maxWidth: 260, fontSize: 13}}>{copy.description}</p>
            <p style={{color:'#555', marginTop:16, fontSize: 11, fontFamily: 'var(--font-mono)'}}>2 patents · CVPR / ECCV · ex-Tesla / HOMI</p>
          </div>
          <div>
            <h5>{copy.platformTitle}</h5>
            <a
              href={buildSectionUrl('tech')}
              onClick={handleSectionNavigation ? (event) => handleSectionNavigation(event, 'tech') : undefined}
            >
              {copy.platformLinks.tech}
            </a>
            <a
              href={buildSectionUrl('marketplace')}
              onClick={handleSectionNavigation ? (event) => handleSectionNavigation(event, 'marketplace') : undefined}
            >
              {copy.platformLinks.marketplace}
            </a>
          </div>
          <div>
            <h5>{copy.companyTitle}</h5>
            {copy.companyLinks.map((label) => <a key={label}>{label}</a>)}
          </div>
          <div>
            <h5>{copy.supportTitle}</h5>
            {copy.supportLinks.map((label) => <a key={label}>{label}</a>)}
          </div>
        </div>
        <div className="atela-footer-bottom">
          <span>{copy.bottomLeft}</span>
          <span>{copy.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
