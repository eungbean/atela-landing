function Nav() {
  const copy = window.atelaGetCopySection('nav');
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildLocaleUrl = window.atelaBuildLocaleUrl || ((locale) => `/${locale}`);
  const buildHomeUrl = window.atelaBuildHomeUrl || (() => `/${currentLocale}`);
  const buildSectionUrl = window.atelaBuildSectionUrl || ((sectionId) => `#${sectionId}`);
  const handleSectionNavigation = window.atelaHandleSectionNavigation;

  return (
    <nav className="demo-nav-shell" aria-label="Primary">
      <div className="demo-nav-bar">
        <a
          href={buildHomeUrl(currentLocale)}
          className="demo-nav-logo"
          aria-label="ATELA home"
          onClick={handleSectionNavigation ? (event) => handleSectionNavigation(event, null) : undefined}
        >
          <span className="atela-demo-logo-word">ATELA</span>
          <span className="atela-demo-logo-dot">.</span>
        </a>

        <div className="demo-nav-actions">
          <div className="demo-nav-lang" role="group" aria-label="Language selector">
            {['ko', 'en'].map((locale) => (
              <a
                key={locale}
                href={buildLocaleUrl(locale)}
                className={`demo-nav-lang-option${currentLocale === locale ? ' is-active' : ''}`}
                aria-current={currentLocale === locale ? 'page' : undefined}
                onClick={() => window.atelaSetPreferredLocale && window.atelaSetPreferredLocale(locale)}
              >
                {locale.toUpperCase()}
              </a>
            ))}
          </div>
          <a
            href={buildSectionUrl('tech')}
            className="demo-nav-cta"
            onClick={handleSectionNavigation ? (event) => handleSectionNavigation(event, 'tech') : undefined}
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
