function useNavStartFlowComplete() {
  const getIsComplete = () => Boolean(window.ATELA_AUTH?.isSignedIn?.());
  const [isComplete, setIsComplete] = React.useState(getIsComplete);

  React.useEffect(() => {
    const syncState = (event) => {
      const nextValue = event?.detail?.isSignedIn;
      setIsComplete(Boolean(nextValue ?? window.ATELA_AUTH?.isSignedIn?.()));
    };

    window.addEventListener('atela:auth-state-change', syncState);
    return () => {
      window.removeEventListener('atela:auth-state-change', syncState);
    };
  }, []);

  return isComplete;
}

function Nav() {
  const copy = window.atelaGetCopySection('nav');
  const authCopy = window.atelaGetCopySection('auth');
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildLocaleUrl = window.atelaBuildLocaleUrl || ((locale) => `/${locale}`);
  const buildHomeUrl = window.atelaBuildHomeUrl || (() => `/${currentLocale}`);
  const buildSectionUrl = window.atelaBuildSectionUrl || ((sectionId) => `#${sectionId}`);
  const handleSectionNavigation = window.atelaHandleSectionNavigation;
  const openStartFlow = window.atelaOpenStartFlow;
  const trackCtaClick = window.atelaTrackCtaClick;
  const trackUiInteraction = window.atelaTrackUiInteraction;
  const isStartFlowComplete = useNavStartFlowComplete();
  const [isHidden, setIsHidden] = React.useState(false);
  const ctaLabel = isStartFlowComplete ? (authCopy?.completedCta || copy.cta) : copy.cta;
  const completedIcon = isStartFlowComplete ? (
    <span className="atela-cta-complete-check" aria-hidden="true">
      <svg viewBox="0 0 16 16" focusable="false">
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  ) : null;
  const handleLocaleSwitch = (locale) => {
    if (trackUiInteraction) {
      trackUiInteraction({
        sectionId: 'nav',
        interactionId: 'locale_switch',
        interactionType: 'locale_switch',
        interactionLabel: locale.toUpperCase(),
        interactionValue: locale,
        previous_locale: currentLocale,
      });
    }

    if (window.atelaSetPreferredLocale) {
      window.atelaSetPreferredLocale(locale);
    }
  };
  const handleNavCtaClick = (event) => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'nav',
        ctaId: 'nav_start',
        ctaLabel,
        destination: buildSectionUrl('tech'),
        is_start_flow_complete: isStartFlowComplete,
      });
    }

    if (openStartFlow) {
      event.preventDefault();
      if (isStartFlowComplete) return;
      openStartFlow({ source: 'nav' });
      return;
    }

    if (handleSectionNavigation) {
      handleSectionNavigation(event, 'tech');
    }
  };

  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let frameId = 0;
    let lastScrollY = window.scrollY;
    let scrollDirection = 'none';
    let accumulatedDistance = 0;

    const HERO_ACTIVATION_OFFSET = 24;
    const MIN_SCROLL_DELTA = 2;
    const HIDE_DISTANCE = 54;
    const SHOW_DISTANCE = 28;

    const resetScrollTracking = (nextDirection = 'none') => {
      scrollDirection = nextDirection;
      accumulatedDistance = 0;
    };

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      const heroEl = document.getElementById('demo');
      const heroBottom = heroEl
        ? heroEl.getBoundingClientRect().bottom + currentScrollY
        : 0;
      const hasPassedHero = currentScrollY > heroBottom + HERO_ACTIVATION_OFFSET;
      const deltaY = currentScrollY - lastScrollY;
      const absoluteDeltaY = Math.abs(deltaY);

      if (!hasPassedHero || currentScrollY <= 0) {
        setIsHidden(false);
        resetScrollTracking();
      } else if (absoluteDeltaY >= MIN_SCROLL_DELTA) {
        const nextDirection = deltaY > 0 ? 'down' : 'up';

        if (nextDirection !== scrollDirection) {
          resetScrollTracking(nextDirection);
        }

        accumulatedDistance += absoluteDeltaY;

        if (nextDirection === 'down' && accumulatedDistance >= HIDE_DISTANCE) {
          setIsHidden(true);
          accumulatedDistance = 0;
        } else if (nextDirection === 'up' && accumulatedDistance >= SHOW_DISTANCE) {
          setIsHidden(false);
          accumulatedDistance = 0;
        }
      }

      lastScrollY = currentScrollY;
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className={`demo-nav-shell${isHidden ? ' is-hidden' : ''}`} aria-label="Primary">
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
                onClick={() => handleLocaleSwitch(locale)}
              >
                {locale.toUpperCase()}
              </a>
            ))}
          </div>
          <a
            href={buildSectionUrl('tech')}
            className="demo-nav-cta"
            onClick={handleNavCtaClick}
            aria-disabled={isStartFlowComplete || undefined}
          >
            {ctaLabel}
            {completedIcon}
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
