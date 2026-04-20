function LogoCloud() {
  const copy = window.atelaGetCopySection('logoCloud');
  const logos = ['MUSINSA', '29CM', 'COUPANG', 'OLIVE YOUNG', 'KAKAO', 'SMART STORE', 'GENTLE MONSTER', "AGE 20'S"];
  return (
    <section className="atela-logos">
      <div className="atela-container">
        <p className="atela-logos-title">{copy.title}</p>
        <div className="atela-logos-marquee" aria-label={copy.ariaLabel}>
          <div className="atela-logos-track">
            <div className="atela-logo-set">
              {logos.map((logo) => (
                <span key={logo} className="atela-logo-item">{logo}</span>
              ))}
            </div>
            <div className="atela-logo-set" aria-hidden="true">
              {logos.map((logo) => (
                <span key={`${logo}-duplicate`} className="atela-logo-item">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.LogoCloud = LogoCloud;
