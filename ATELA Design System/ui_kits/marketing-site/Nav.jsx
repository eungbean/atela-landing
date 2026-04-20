// Top navigation — ink version by default, switches to solid on scroll
function Nav() {
  return (
    <nav className="atela-nav">
      <div className="atela-nav-inner">
        <a href="#" className="atela-logo">
          ATELA<span className="atela-logo-dot"/>
        </a>
        <div className="atela-nav-links">
          <a href="#features">제품</a>
          <a href="#gallery">갤러리</a>
          <a href="#cases">고객사례</a>
          <a href="#pricing">가격</a>
          <a href="#">문서</a>
        </div>
        <div className="atela-nav-cta">
          <a href="#" className="atela-btn-ghost">로그인</a>
          <a href="#" className="atela-btn-primary sm">무료로 시작 →</a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
