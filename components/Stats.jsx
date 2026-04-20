// Updated Stats — reflect the platform narrative.
function Stats() {
  const copy = window.atelaGetCopySection('stats');
  const stats = copy.items;
  return (
    <section id="stats" className="atela-stats">
      <div className="atela-container">
        <div className="atela-stats-grid">
          {stats.map((s,i) => (
            <div key={i} className="atela-stat">
              <div className="atela-stat-n">{s.n}</div>
              <div className="atela-stat-l">{s.l}</div>
              <div className="atela-stat-s mono-note">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stats = Stats;
