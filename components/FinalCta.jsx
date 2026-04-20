function useFinalStartFlowComplete() {
  const getIsComplete = () => Boolean(window.ATELA_AUTH?.isSignedIn?.());
  const [isComplete, setIsComplete] = React.useState(getIsComplete);

  React.useEffect(() => {
    const syncState = (event) => {
      const nextValue = event?.detail?.isSignedIn;
      setIsComplete(Boolean(nextValue ?? window.ATELA_AUTH?.isSignedIn?.()));
    };

    window.addEventListener('atela:auth-state-change', syncState);
    return () => {
      window.removeEventListener('atela:auth-state-change', syncState);
    };
  }, []);

  return isComplete;
}

function FinalCta() {
  const copy = window.atelaGetCopySection('finalCta');
  const authCopy = window.atelaGetCopySection('auth');
  const openStartFlow = window.atelaOpenStartFlow;
  const trackCtaClick = window.atelaTrackCtaClick;
  const isStartFlowComplete = useFinalStartFlowComplete();
  const highlightLines = String(copy.titleLines[1] || '').split('\n');
  const primaryCtaLabel = isStartFlowComplete ? (authCopy?.completedCta || copy.primaryCta) : copy.primaryCta;
  const completedIcon = isStartFlowComplete ? (
    <span className="atela-cta-complete-check" aria-hidden="true">
      <svg viewBox="0 0 16 16" focusable="false">
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  ) : null;
  const handlePrimaryCtaClick = (event) => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'final-cta',
        ctaId: 'final_primary',
        ctaLabel: primaryCtaLabel,
        destination: window.location.pathname,
        is_start_flow_complete: isStartFlowComplete,
      });
    }

    if (openStartFlow) {
      event.preventDefault();
      if (isStartFlowComplete) return;
      openStartFlow({ source: 'final-cta' });
    }
  };
  const handleSecondaryCtaClick = () => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'final-cta',
        ctaId: 'final_secondary',
        ctaLabel: copy.secondaryCta,
        destination: '#',
      });
    }
  };
  return (
    <section id="final-cta" className="atela-final">
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
            <a
              className="atela-btn-ink"
              href={window.location.pathname}
              onClick={handlePrimaryCtaClick}
              aria-disabled={isStartFlowComplete || undefined}
            >
              {primaryCtaLabel}
              {completedIcon}
            </a>
            <a className="atela-btn-ghost" href="#" onClick={handleSecondaryCtaClick}>{copy.secondaryCta}</a>
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
