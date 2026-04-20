// Hero — Tweakable across 3 variants
function Hero({ variant = 'split', accent = '#C6FF3D' }) {
  if (variant === 'typographic') return <HeroType accent={accent}/>;
  if (variant === 'fullbleed') return <HeroFull accent={accent}/>;
  return <HeroSplit accent={accent}/>;
}

function HeroSplit({ accent }) {
  return (
    <section className="atela-hero ink" style={{'--accent': accent}}>
      <div className="atela-hero-grid">
        <div className="atela-hero-copy">
          <span className="atela-eyebrow" style={{color: accent}}>AI PRODUCT VISUALS · KOREAN COMMERCE</span>
          <h1 className="atela-display">
            촬영 없이,<br/>
            <span className="atela-mark" style={{background: accent}}>브랜드가</span> 된다.
          </h1>
          <p className="atela-lead">
            상품 1개를 올리면, 브랜드 톤에 맞춘 이미지 50장을 3분 안에.<br/>
            쿠팡·29CM·무신사 규격까지 자동 맞춤.
          </p>
          <div className="atela-hero-cta">
            <a className="atela-btn-primary" href="#">무료로 시작하기 →</a>
            <a className="atela-btn-on-ink" href="#">데모 30초 보기</a>
          </div>
          <div className="atela-hero-meta">
            <span>▸ 누적 <b>12,400,000</b>장 생성</span>
            <span>▸ 평균 <b>93%</b> 시간 감축</span>
          </div>
        </div>
        <div className="atela-hero-visual">
          <div className="atela-ba">
            <div className="atela-ba-before">
              <span className="atela-ba-tag" style={{background:'#FF3DA8'}}>BEFORE</span>
              <div className="atela-ba-img" style={{background:'#2a2a2a'}}>
                <div className="atela-product" style={{background:'#e8d5b0'}}>
                  <div className="atela-bottle"/>
                </div>
              </div>
              <span className="atela-ba-caption">원본 · 아이폰 촬영</span>
            </div>
            <div className="atela-ba-after">
              <span className="atela-ba-tag" style={{background: accent, color:'#0A0A0A'}}>AFTER</span>
              <div className="atela-ba-img" style={{background:'#FF3DA8'}}>
                <div className="atela-product hero-after">
                  <div className="atela-bottle sparkle"/>
                </div>
              </div>
              <span className="atela-ba-caption">ATELA · 3초 전</span>
            </div>
          </div>
          <div className="atela-hero-chips">
            <span className="chip">모델 샷</span>
            <span className="chip">라이프스타일</span>
            <span className="chip">누끼</span>
            <span className="chip on">+47 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroType({ accent }) {
  return (
    <section className="atela-hero ink hero-type" style={{'--accent': accent}}>
      <div className="atela-hero-type-inner">
        <span className="atela-eyebrow" style={{color: accent}}>AI PRODUCT VISUALS · KOREAN COMMERCE</span>
        <h1 className="atela-display giant">
          3분에 <span className="atela-mark" style={{background: accent}}>50장.</span><br/>
          브랜드에 <u style={{textDecorationColor: accent}}>정확히</u><br/>
          맞는 이미지.
        </h1>
        <div className="atela-hero-cta center">
          <a className="atela-btn-primary" href="#">무료로 시작하기 →</a>
          <a className="atela-btn-on-ink" href="#">데모 신청</a>
        </div>
      </div>
    </section>
  );
}

function HeroFull({ accent }) {
  return (
    <section className="atela-hero fullbleed" style={{'--accent': accent, background: accent}}>
      <div className="atela-hero-full-inner">
        <span className="atela-eyebrow" style={{color:'#0A0A0A'}}>AI PRODUCT VISUALS · KOREAN COMMERCE</span>
        <h1 className="atela-display" style={{color:'#0A0A0A'}}>
          Superside급 퀄리티,<br/>한국 커머스에 맞게.
        </h1>
        <p className="atela-lead" style={{color:'#142a00'}}>
          브랜드 가이드를 학습한 AI가, 상품마다 수십 장의 on-brand 비주얼을 만들어요.
        </p>
        <a className="atela-btn-ink" href="#">무료로 시작하기 →</a>
      </div>
    </section>
  );
}

window.Hero = Hero;
