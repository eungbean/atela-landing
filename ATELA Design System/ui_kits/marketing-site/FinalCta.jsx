function FinalCta() {
  return (
    <section className="atela-final">
      <div className="atela-container">
        <div className="atela-final-card">
          <h2 className="atela-display">
            오늘 올린 상품,<br/>
            <span className="atela-mark">내일 아침 50장.</span>
          </h2>
          <p>14일 무료. 신용카드 없이 시작.</p>
          <div className="atela-hero-cta center">
            <a className="atela-btn-ink" href="#">무료로 시작하기 →</a>
            <a className="atela-btn-ghost" href="#">세일즈에 문의 ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCta = FinalCta;

function Footer() {
  return (
    <footer className="atela-footer on-ink">
      <div className="atela-container">
        <div className="atela-footer-grid">
          <div>
            <div className="atela-logo" style={{color:'#fff'}}>ATELA<span className="atela-logo-dot"/></div>
            <p style={{color:'#888', marginTop:12, maxWidth: 240, fontSize: 13}}>브랜드 일관성을 지키는 AI 비주얼 엔진. Seoul, South Korea.</p>
          </div>
          <div><h5>제품</h5><a>모델 샷</a><a>라이프스타일</a><a>누끼</a><a>API</a></div>
          <div><h5>회사</h5><a>소개</a><a>채용</a><a>블로그</a><a>프레스</a></div>
          <div><h5>지원</h5><a>문서</a><a>커뮤니티</a><a>문의하기</a><a>상태</a></div>
        </div>
        <div className="atela-footer-bottom">
          <span>© 2026 ATELA Inc. 사업자 000-00-00000</span>
          <span>이용약관 · 개인정보처리방침 · 쿠키</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
