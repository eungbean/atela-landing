// Three Pillars — AI Tools + Marketplace + Korean-native.
function Features() {
  const buildSectionUrl = window.atelaBuildSectionUrl || ((sectionId) => `#${sectionId}`);
  const handleSectionNavigation = window.atelaHandleSectionNavigation;
  const items = [
    {
      k: '01',
      eye: 'PILLAR 01 · KOREAN-NATIVE AI',
      h: '한국어가 깨지지 않는 유일한 엔진.',
      p: '자체 R&D로 만든 Hangul-VM. CVPR·ECCV 논문 기반, 특허 2건. 브랜드 로고와 한글 카피를 그대로 보존합니다.',
      link: '기술 자세히 →',
      anchor: 'tech',
      c: '#C6FF3D',
      bg: '#0A0A0A',
      fg: '#fff',
    },
    {
      k: '02',
      eye: 'PILLAR 02 · INVENTORY SYNC',
      h: '업로드 대신, 스토어 연결.',
      p: 'Cafe24 · Shopify · Smart Store · URL 직연결. 신상이 올라오는 순간 50장 자동 생성 · 채널 규격 맞춤.',
      link: '연동 보기 →',
      anchor: 'integrations',
      c: '#FF3DA8',
      bg: '#FAFAF7',
      fg: '#0A0A0A',
    },
    {
      k: '03',
      eye: 'PILLAR 03 · EXPERT MARKETPLACE',
      h: '필요할 때만 쓰는 AI 전문가.',
      p: 'Performance · Reels · Motion 등 전문 분야별 199명. 에이전시 6개월 락인 없이, 프로젝트 단위 48h 납품.',
      link: '전문가 매칭 →',
      anchor: 'marketplace',
      c: '#6B3DFF',
      bg: '#E8D5B0',
      fg: '#0A0A0A',
    },
  ];
  return (
    <section id="features" className="atela-features-v2">
      <div className="atela-container">
        <div className="atela-section-head">
          <span className="atela-eyebrow">THE PLATFORM · 3 PILLARS</span>
          <h2 className="atela-h2">AI 도구 + 전문가.<br/>따로 사지 않습니다.</h2>
        </div>
        <div className="pillar-grid">
          {items.map(i => (
            <a
              href={buildSectionUrl(i.anchor)}
              key={i.k}
              className="pillar-card"
              style={{background: i.bg, color: i.fg, borderColor: i.bg === '#FAFAF7' ? 'var(--border)' : 'transparent'}}
              onClick={handleSectionNavigation ? (event) => handleSectionNavigation(event, i.anchor) : undefined}
            >
              <div className="pillar-top">
                <span className="pillar-k mono-note">{i.k}</span>
                <span className="pillar-dot" style={{background: i.c}}/>
              </div>
              <div className="pillar-eye" style={{color: i.fg, opacity: 0.6}}>{i.eye}</div>
              <h3 className="pillar-h">{i.h}</h3>
              <p className="pillar-p" style={{color: i.fg, opacity: 0.75}}>{i.p}</p>
              <span className="pillar-link" style={{color: i.c}}>{i.link}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
