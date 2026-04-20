function Pricing() {
  const plans = [
    { n: 'Starter', p: '89,000', per: '/월', f: ['월 200장', '1개 브랜드', '기본 프리셋', '이메일 지원'], cta: '시작하기', dark: false },
    { n: 'Growth', p: '390,000', per: '/월', f: ['월 2,000장', '브랜드 3개', '커스텀 프리셋', 'API 액세스', '우선 지원'], cta: '인기 플랜', dark: true, badge: 'POPULAR' },
    { n: 'Enterprise', p: '맞춤', per: '', f: ['무제한 생성', '전용 모델 학습', 'SLA 99.9%', '전담 매니저'], cta: '문의하기', dark: false },
  ];
  return (
    <section id="pricing" className="atela-pricing">
      <div className="atela-container">
        <div className="atela-section-head center">
          <span className="atela-eyebrow">PRICING</span>
          <h2 className="atela-h2">사용한 만큼, 투명하게.</h2>
        </div>
        <div className="atela-price-grid">
          {plans.map(p => (
            <div key={p.n} className={`atela-price ${p.dark ? 'dark' : ''}`}>
              {p.badge && <span className="atela-price-badge">{p.badge}</span>}
              <h3>{p.n}</h3>
              <div className="atela-price-amt"><span className="cur">₩</span>{p.p}<span className="per">{p.per}</span></div>
              <ul>{p.f.map(f => <li key={f}>— {f}</li>)}</ul>
              <a className={p.dark ? 'atela-btn-primary' : 'atela-btn-ink'} href="#">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
