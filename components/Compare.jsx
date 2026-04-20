// Compare vs In-house / Agency / Freelancer / AI tools only — from pitch deck.
function Compare() {
  const copy = window.atelaGetCopySection('compare');
  const dims = copy.dims;
  const rows = copy.rows;
  return (
    <section id="compare" className="atela-compare">
      <div className="atela-container">
        <div className="atela-section-head">
          <span className="atela-eyebrow">{copy.eyebrow}</span>
          <h2 className="atela-h2">{copy.titlePrefix} <span className="hl">{copy.titleHighlight}</span></h2>
        </div>

        <div className="atela-compare-scroll" role="region" aria-label={`${copy.eyebrow} comparison table`} tabIndex="0">
          <div className="atela-compare-table">
            <div className="compare-row compare-head">
              <div className="compare-cell compare-name">Option</div>
              {dims.map(d => <div key={d} className="compare-cell compare-dim">{d}</div>)}
            </div>
            {rows.map(r => (
              <div key={r.n} className={`compare-row ${r.on ? 'on' : ''}`}>
                <div className="compare-cell compare-name">
                  <div className="compare-n">{r.n}</div>
                  <div className="compare-d">{r.d}</div>
                </div>
                {r.v.map((val, i) => (
                  <div key={`${r.n}-${dims[i]}`} className="compare-cell compare-value-cell">
                    {val ? <span className="mark-y">✓</span> : <span className="mark-n">✕</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Compare = Compare;
