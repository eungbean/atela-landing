function Showcase() {
  const copy = window.atelaGetCopySection('showcase');
  const titleLines = Array.isArray(copy.titleLines) ? copy.titleLines : [copy.title];
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

  return (
    <section id="showcase" className="atela-showcase">
      <div className="atela-container">
        <div className="atela-showcase-head">
          <div className="atela-showcase-heading">
            <span className="atela-eyebrow">{copy.eyebrow}</span>
            <h2 className="atela-h2">
              {titleLines.map((line, index) => (
                <React.Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </React.Fragment>
              ))}
            </h2>
          </div>
        </div>

        <div className="showcase-gallery" aria-label={copy.galleryLabel || copy.eyebrow}>
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
