function Features() {
  const items = [
    { eye: '01 · ON-BRAND', h: '브랜드 가이드를 그대로', p: '컬러, 톤, 크롭 규칙까지 학습. 모든 이미지가 동일한 룩앤필.' , c: '#C6FF3D' },
    { eye: '02 · KOREAN-NATIVE', h: '한국 모델·한국 배경', p: '300+ 한국인 모델 풀, 강남·제주·한옥 프리셋. 타 국가 솔루션과 다릅니다.', c: '#FF3DA8' },
    { eye: '03 · CHANNEL FIT', h: '채널 규격 자동 맞춤', p: '쿠팡 썸네일, 무신사 상세, 29CM 메인까지 한 번에 리사이즈.', c: '#6B3DFF' },
    { eye: '04 · VOLUME', h: '상품 1개 → 이미지 50장', p: '대량 카탈로그도 24시간 안에. API로 PIM에 바로 연결.', c: '#E8D5B0' },
  ];
  return (
    <section id="features" className="atela-features">
      <div className="atela-container">
        <div className="atela-section-head">
          <span className="atela-eyebrow">WHAT WE DO</span>
          <h2 className="atela-h2">촬영팀 없이, 스튜디오 퀄리티.</h2>
        </div>
        <div className="atela-feat-grid">
          {items.map(i => (
            <div key={i.eye} className="atela-feat">
              <div className="atela-feat-swatch" style={{background: i.c}}/>
              <span className="atela-eyebrow small">{i.eye}</span>
              <h3>{i.h}</h3>
              <p>{i.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
