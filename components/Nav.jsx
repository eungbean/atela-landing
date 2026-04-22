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

function Nav(props) {
  const page = props.page || 'home';
  const isAtelierPage = page === 'atelier';
  const copy = window.atelaGetCopySection(isAtelierPage ? 'atelierNav' : 'nav');
  const primaryNavCopy = window.atelaGetCopySection('nav');
  const authCopy = window.atelaGetCopySection('auth');
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildLocaleUrl = window.atelaBuildLocaleUrl || ((locale) => `/${locale}`);
  const buildHomeUrl = window.atelaBuildHomeUrl || (() => `/${currentLocale}`);
  const buildPageUrl = window.atelaBuildPageUrl || ((pageId) => (
    pageId && pageId !== 'home' ? `/${currentLocale}/${pageId}` : `/${currentLocale}`
  ));
  const buildSectionUrl = window.atelaBuildSectionUrl || ((sectionId) => `#${sectionId}`);
  const handleSectionNavigation = window.atelaHandleSectionNavigation;
  const openStartFlow = window.atelaOpenStartFlow;
  const trackCtaClick = window.atelaTrackCtaClick;
  const trackUiInteraction = window.atelaTrackUiInteraction;
  const isStartFlowComplete = useNavStartFlowComplete();
  const [isHidden, setIsHidden] = React.useState(false);
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = React.useState(false);
  const localeMenuRef = React.useRef(null);
  const ctaLabel = isStartFlowComplete ? (authCopy?.completedCta || primaryNavCopy.cta) : primaryNavCopy.cta;
  const homeHref = buildHomeUrl(currentLocale);
  const atelierHref = buildPageUrl('atelier', currentLocale);
  const ctaHref = isAtelierPage ? homeHref : buildSectionUrl('tech');
  const menuItems = [
    {
      id: 'home',
      href: homeHref,
      label: copy.menuHome,
      isActive: !isAtelierPage,
    },
    {
      id: 'atelier',
      href: atelierHref,
      label: copy.menuAtelier,
      isActive: isAtelierPage,
    },
  ];
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

    setIsLocaleMenuOpen(false);
  };

  const toggleLocaleMenu = () => {
    if (trackUiInteraction) {
      trackUiInteraction({
        sectionId: 'nav',
        interactionId: 'locale_menu_toggle',
        interactionType: 'toggle',
        interactionLabel: 'Locale menu',
        interactionValue: isLocaleMenuOpen ? 'close' : 'open',
      });
    }

    setIsLocaleMenuOpen((open) => !open);
  };
  const handleNavCtaClick = (event) => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'nav',
        ctaId: 'nav_start',
        ctaLabel,
        destination: ctaHref,
        is_start_flow_complete: isStartFlowComplete,
      });
    }

    if (openStartFlow) {
      event.preventDefault();
      if (isStartFlowComplete) return;
      openStartFlow({ source: 'nav' });
      return;
    }

    if (!isAtelierPage && handleSectionNavigation) {
      handleSectionNavigation(event, 'tech');
    }
  };

  const handleMenuClick = (event, item) => {
    if (trackCtaClick) {
      trackCtaClick({
        sectionId: 'nav',
        ctaId: `nav_menu_${item.id}`,
        ctaLabel: item.label,
        destination: item.href,
      });
    }

    if (item.id === 'home' && !isAtelierPage && handleSectionNavigation) {
      handleSectionNavigation(event, null);
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
      const heroEl = document.getElementById(isAtelierPage ? 'showcase' : 'demo');
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
  }, [isAtelierPage]);

  React.useEffect(() => {
    if (!isLocaleMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!localeMenuRef.current?.contains(event.target)) {
        setIsLocaleMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsLocaleMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isLocaleMenuOpen]);

  return (
    <nav className={`demo-nav-shell${isHidden ? ' is-hidden' : ''}`} aria-label="Primary">
      <div className="demo-nav-bar">
        <a
          href={homeHref}
          className="demo-nav-logo"
          aria-label="ATELA home"
          onClick={!isAtelierPage && handleSectionNavigation ? (event) => handleSectionNavigation(event, null) : undefined}
        >
          <span className="atela-demo-logo-word">ATELA</span>
          <span className="atela-demo-logo-dot">.</span>
        </a>

        <div className="demo-nav-menu" role="navigation" aria-label="Headline menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              className={`demo-nav-menu-link${item.isActive ? ' is-active' : ''}`}
              href={item.href}
              onClick={(event) => handleMenuClick(event, item)}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="demo-nav-actions">
          <div
            ref={localeMenuRef}
            className={`demo-nav-locale-wrap${isLocaleMenuOpen ? ' is-open' : ''}`}
          >
            <button
              type="button"
              className="demo-nav-locale-trigger"
              aria-haspopup="menu"
              aria-expanded={isLocaleMenuOpen ? 'true' : 'false'}
              aria-label="Language selector"
              onClick={toggleLocaleMenu}
            >
              <span className="demo-nav-locale-label">{currentLocale.toUpperCase()}</span>
              <span className={`demo-nav-locale-caret${isLocaleMenuOpen ? ' is-open' : ''}`} aria-hidden="true">
                <svg viewBox="0 0 12 8" focusable="false">
                  <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {isLocaleMenuOpen ? (
              <div className="demo-nav-locale-menu" role="menu" aria-label="Language selector menu">
                {['ko', 'en'].map((locale) => (
                  <a
                    key={locale}
                    href={buildLocaleUrl(locale)}
                    className={`demo-nav-locale-item${currentLocale === locale ? ' is-active' : ''}`}
                    aria-current={currentLocale === locale ? 'page' : undefined}
                    role="menuitem"
                    onClick={() => handleLocaleSwitch(locale)}
                  >
                    {locale.toUpperCase()}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <span className="demo-nav-sep" aria-hidden="true">/</span>
          <a
            href={ctaHref}
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
