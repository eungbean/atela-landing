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

  return (
    <footer className="atela-footer on-ink">
      <div className="atela-container">
        <div className="atela-footer-bottom atela-footer-line">
          <span>{copy.bottomLeft}</span>
          <span>{copy.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
