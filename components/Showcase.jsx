function Showcase() {
  const copy = window.atelaGetCopySection('showcase');
  const titleLines = Array.isArray(copy.titleLines) ? copy.titleLines : [copy.title];

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
                {copy.cards.map((card, cardIndex) => (
                  <figure
                    key={`${groupIndex}-${card.id}`}
                    className="showcase-loop-item"
                    style={{ '--showcase-order': cardIndex + 1 }}
                  >
                    <img src={card.image} alt={card.alt} loading="lazy" decoding="async" />
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
