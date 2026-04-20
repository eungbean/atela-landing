function BeforeAfter() {
  const [slide, setSlide] = React.useState(50);
  return (
    <section id="gallery" className="atela-ba-section on-ink">
      <div className="atela-container">
        <div className="atela-section-head">
          <span className="atela-eyebrow" style={{color:'#C6FF3D'}}>BEFORE / AFTER</span>
          <h2 className="atela-h2" style={{color:'#fff'}}>아이폰으로 찍어도<br/>캠페인 비주얼이 됩니다.</h2>
        </div>
        <div className="atela-ba-slider">
          <div className="atela-ba-image before" style={{background: '#2a2a2a'}}>
            <div className="atela-product simple"><div className="atela-bottle"/></div>
            <span className="atela-ba-tag" style={{background:'#FF3DA8'}}>BEFORE</span>
          </div>
          <div className="atela-ba-image after" style={{clipPath: `inset(0 0 0 ${slide}%)`, background:'#E8D5B0'}}>
            <div className="atela-product hero-after"><div className="atela-bottle sparkle"/></div>
            <span className="atela-ba-tag" style={{background:'#C6FF3D', color:'#0A0A0A', left:'auto', right:16}}>AFTER</span>
          </div>
          <div className="atela-ba-handle" style={{left: `${slide}%`}}>
            <div className="atela-ba-knob">⇔</div>
          </div>
          <input className="atela-ba-range" type="range" min="0" max="100" value={slide} onChange={e => setSlide(+e.target.value)}/>
        </div>
      </div>
    </section>
  );
}
window.BeforeAfter = BeforeAfter;
