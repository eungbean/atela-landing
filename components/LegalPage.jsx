function LegalPage(props) {
  const page = props.page || (window.atelaGetCurrentPage ? window.atelaGetCurrentPage() : 'privacy');
  const copyKey = page === 'terms' ? 'termsPage' : 'privacyPage';
  const copy = window.atelaGetCopySection(copyKey);
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildHomeUrl = window.atelaBuildHomeUrl || ((locale) => `/${locale}`);
  const buildLocaleUrl = window.atelaBuildLocaleUrl || ((locale) => `/${locale}/${page}`);
  const homeHref = buildHomeUrl(currentLocale);

  return (
    <main className="atela-legal-page">
      <div className="atela-container atela-legal-shell">
        <div className="atela-legal-topbar">
          <a href={homeHref} className="atela-legal-brand" aria-label="ATELA home">
            <span>ATELA</span>
            <span className="atela-legal-brand-dot">.</span>
          </a>

          <div className="atela-legal-toolbar">
            <div className="atela-legal-lang" role="group" aria-label="Language selector">
              {['en', 'ko'].map((locale) => (
                <a
                  key={locale}
                  href={buildLocaleUrl(locale)}
                  className={currentLocale === locale ? 'is-active' : ''}
                  aria-current={currentLocale === locale ? 'page' : undefined}
                >
                  {locale.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <section className="atela-legal-card">
          <h1 className="atela-legal-heading">{copy.heading}</h1>
          <p className="atela-legal-summary">{copy.summary}</p>

          <div className="atela-legal-meta">
            <span className="atela-legal-pill">{copy.effectiveDateLabel}: {copy.effectiveDate}</span>
          </div>

          <div className="atela-legal-sections">
            {copy.sections.map((section) => (
              <article className="atela-legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body ? <p>{section.body}</p> : null}
                {section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

window.LegalPage = LegalPage;
