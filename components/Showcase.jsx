function Showcase(props) {
  const variant = props.variant || 'default';
  const isHero = variant === 'hero';
  const copy = window.atelaGetCopySection('showcase');
  const heroCopy = isHero ? window.atelaGetCopySection('atelierHero') : null;
  const titleLines = Array.isArray((isHero ? heroCopy?.titleLines : copy.titleLines))
    ? (isHero ? heroCopy.titleLines : copy.titleLines)
    : [isHero ? heroCopy?.title : copy.title];
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildHomeUrl = window.atelaBuildHomeUrl || ((locale) => `/${locale}`);
  const buildPageSectionUrl = window.atelaBuildPageSectionUrl || ((pageId, sectionId, locale) => {
    const parts = [locale];
    if (pageId && pageId !== 'home') parts.push(pageId);
    if (sectionId) parts.push(sectionId);
    return `/${parts.join('/')}`;
  });
  const trackCtaClick = window.atelaTrackCtaClick;
  const manifestItems = Array.isArray(window.atelaWantThisGallery) ? window.atelaWantThisGallery : [];
  const galleryItems = manifestItems.length
    ? manifestItems
    : copy.cards.map((card) => ({
        id: card.id,
        type: 'image',
        src: card.image,
        alt: card.alt,
      }));
  const loopItems = [];
  const minimumLoopLength = Math.max(galleryItems.length, 6);

  if (galleryItems.length) {
    for (let index = 0; index < minimumLoopLength; index += 1) {
      loopItems.push({
        ...galleryItems[index % galleryItems.length],
        loopId: `${galleryItems[index % galleryItems.length].id}-loop-${index}`,
      });
    }
  }

  const primaryHref = buildPageSectionUrl('atelier', 'pricing', currentLocale);
  const secondaryHref = buildHomeUrl(currentLocale);

  const handlePrimaryClick = () => {
    if (trackCtaClick && heroCopy) {
      trackCtaClick({
        sectionId: 'showcase',
        ctaId: 'atelier_hero_primary',
        ctaLabel: heroCopy.primaryCta,
        destination: primaryHref,
      });
    }
  };

  const handleSecondaryClick = () => {
    if (trackCtaClick && heroCopy) {
      trackCtaClick({
        sectionId: 'showcase',
        ctaId: 'atelier_hero_secondary',
        ctaLabel: heroCopy.secondaryCta,
        destination: secondaryHref,
      });
    }
  };

  return (
    <section id="showcase" className={`atela-showcase${isHero ? ' is-hero' : ''}`}>
      <div className="atela-container">
        <div className="atela-showcase-head">
          <div className="atela-showcase-heading">
            <span className="atela-eyebrow">{isHero ? heroCopy.eyebrow : copy.eyebrow}</span>
            <h2 className="atela-h2">
              {titleLines.map((line, index) => (
                <React.Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </React.Fragment>
              ))}
            </h2>
          </div>
          {isHero ? (
            <div className="atelier-hero-copy">
              <p>{heroCopy.body}</p>
              <ul className="atelier-hero-points" aria-label={heroCopy.eyebrow}>
                {heroCopy.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="atela-hero-cta atelier-hero-actions">
                <a className="atela-btn-ink" href={primaryHref} onClick={handlePrimaryClick}>
                  {heroCopy.primaryCta}
                </a>
                <a className="atela-btn-outline" href={secondaryHref} onClick={handleSecondaryClick}>
                  {heroCopy.secondaryCta}
                </a>
              </div>
            </div>
          ) : null}
        </div>

        <div className="showcase-gallery" aria-label={(isHero ? heroCopy.eyebrow : copy.galleryLabel) || copy.eyebrow}>
          <div className="showcase-loop-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={`showcase-group-${groupIndex}`}
                className="showcase-loop-group"
                aria-hidden={groupIndex === 1}
              >
                {loopItems.map((item, cardIndex) => (
                  <figure
                    key={`${groupIndex}-${item.loopId}`}
                    className="showcase-loop-item"
                    style={{ '--showcase-order': cardIndex + 1 }}
                    aria-label={item.type === 'video' ? item.alt : undefined}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Showcase = Showcase;
