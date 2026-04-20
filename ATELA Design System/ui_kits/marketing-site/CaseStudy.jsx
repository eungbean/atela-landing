function CaseStudy() {
  return (
    <section id="cases" className="atela-case">
      <div className="atela-container">
        <div className="atela-case-grid">
          <div className="atela-case-visual" style={{background:'#FF3DA8'}}>
            <div className="atela-case-image">
              <div className="atela-product case"><div className="atela-bottle tall"/></div>
            </div>
            <div className="atela-case-badge">무신사 스토어</div>
          </div>
          <div className="atela-case-copy">
            <span className="atela-eyebrow">CASE · 뷰티 브랜드 A</span>
            <h2 className="atela-h2">주간 업로드 <span className="hl">7배</span>,<br/>촬영비 <span className="hl">82% 절감</span>.</h2>
            <p>기존에는 신상 1개당 3일의 촬영·리터치가 필요했습니다. ATELA 도입 후 상세페이지 이미지 35장을 평균 14분에 완성, 주간 평균 신상 업로드가 4종 → 28종으로 증가했습니다.</p>
            <blockquote>
              "촬영을 한 번도 안 하고 시즌 컬렉션을 런칭했어요. 브랜드 톤도 오히려 더 일관돼졌죠."
              <cite>— 브랜드 매니저, A사</cite>
            </blockquote>
            <a className="atela-btn-outline" href="#">전체 사례 보기 →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CaseStudy = CaseStudy;
