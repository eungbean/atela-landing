function LogoCloud() {
  const logos = ['MUSINSA', '29CM', 'COUPANG', 'OLIVE YOUNG', 'NAVER', 'KAKAO', 'GENTLE MONSTER', 'AGE 20\'S'];
  return (
    <section className="atela-logos">
      <div className="atela-container">
        <p className="atela-logos-title">한국에서 가장 바쁜 커머스 팀들이 ATELA를 씁니다</p>
        <div className="atela-logos-row">
          {logos.map(l => <span key={l} className="atela-logo-item">{l}</span>)}
        </div>
      </div>
    </section>
  );
}
window.LogoCloud = LogoCloud;
