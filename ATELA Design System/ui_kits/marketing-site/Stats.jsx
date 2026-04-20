function Stats() {
  const stats = [
    { n: '12.4M+', l: '누적 생성 이미지' },
    { n: '93%', l: '촬영 시간 감축' },
    { n: '3분', l: '상품당 평균 생성 시간' },
    { n: '240+', l: '입점 브랜드' },
  ];
  return (
    <section className="atela-stats">
      <div className="atela-container">
        <div className="atela-stats-grid">
          {stats.map((s,i) => (
            <div key={i} className="atela-stat">
              <div className="atela-stat-n">{s.n}</div>
              <div className="atela-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stats = Stats;
