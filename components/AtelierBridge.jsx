function AtelierBridge() {
  const copy = window.atelaGetCopySection('atelierBridge');
  const showcaseCopy = window.atelaGetCopySection('showcase');
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildPageUrl = window.atelaBuildPageUrl || ((pageId, locale) => (
    pageId && pageId !== 'home' ? `/${locale}/${pageId}` : `/${locale}`
  ));
  const buildPageSectionUrl = window.atelaBuildPageSectionUrl || ((pageId, sectionId, locale) => {
    const parts = [locale];
    if (pageId && pageId !== 'home') parts.push(pageId);
    if (sectionId) parts.push(sectionId);
    return `/${parts.join('/')}`;
  });
  const trackCtaClick = window.atelaTrackCtaClick;
  const manifestItems = Array.isArray(window.atelaWantThisGallery) ? window.atelaWantThisGallery : [];
  const previewItems = (manifestItems.length
    ? manifestItems
    : showcaseCopy.cards.map((card) => ({
        id: card.id,
        type: 'image',
        src: card.image,
        alt: card.alt,
      }))
  ).slice(0, 3);
  const atelierHref = buildPageUrl('atelier', currentLocale);
  const pricingHref = buildPageSectionUrl('atelier', 'pricing', currentLocale);

  const handlePrimaryClick = () => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'atelier-bridge',
        ctaId: 'atelier_bridge_primary',
        ctaLabel: copy.primaryCta,
        destination: atelierHref,
      });
    }
  };

  const handleSecondaryClick = () => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'atelier-bridge',
        ctaId: 'atelier_bridge_secondary',
        ctaLabel: copy.secondaryCta,
        destination: pricingHref,
      });
    }
  };

  return (
    <section id="atelier-bridge" className="atela-atelier-bridge">
      <div className="atela-container">
        <div className="atelier-bridge-panel">
          <div className="atelier-bridge-copy">
            <span className="atela-eyebrow">{copy.eyebrow}</span>
            <h2 className="atela-h2">
              {copy.titleLines.map((line, index) => (
                <React.Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p className="atelier-bridge-body">{copy.body}</p>
            <ul className="atelier-bridge-points" aria-label={copy.eyebrow}>
              {copy.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="atela-hero-cta atelier-bridge-actions">
              <a className="atela-btn-ink" href={atelierHref} onClick={handlePrimaryClick}>
                {copy.primaryCta}
              </a>
              <a className="atela-btn-outline" href={pricingHref} onClick={handleSecondaryClick}>
                {copy.secondaryCta}
              </a>
            </div>
          </div>

          <div className="atelier-bridge-media" aria-label={copy.galleryLabel}>
            {previewItems.map((item, index) => (
              <figure
                key={item.id || `${item.src}-${index}`}
                className={`atelier-bridge-card atelier-bridge-card-${index + 1}`}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  />
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.AtelierBridge = AtelierBridge;
