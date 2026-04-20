(function initAtelaLocaleRouting() {
  const SUPPORTED_LOCALES = ['ko', 'en'];
  const CONTENT_READY_LOCALES = ['ko', 'en'];
  const SECTION_ROUTE_IDS = new Set([
    'tech',
    'integrations',
    'workflow',
    'showcase',
    'marketplace',
    'pricing',
    'cases',
  ]);
  const SECTION_ROUTE_ALIASES = {
    integrations: 'workflow',
  };
  const LOCALE_STORAGE_KEY = 'atela-preferred-locale';

  function normalizeLocale(value) {
    if (!value) return '';
    const normalized = String(value).toLowerCase().split('-')[0];
    return SUPPORTED_LOCALES.includes(normalized) ? normalized : '';
  }

  function splitPath(pathname) {
    return String(pathname || '/')
      .split('/')
      .filter(Boolean);
  }

  function cleanPathSegments(segments) {
    return (segments || []).filter((segment) => segment && segment !== 'index.html');
  }

  function getStoredLocale() {
    try {
      return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
    } catch {
      return '';
    }
  }

  function setPreferredLocale(locale) {
    const normalized = normalizeLocale(locale);
    if (!normalized) return;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, normalized);
    } catch {
      // Ignore storage failures.
    }
  }

  function detectBrowserLocale() {
    const preferredLocales =
      Array.isArray(window.navigator.languages) && window.navigator.languages.length
        ? window.navigator.languages
        : [window.navigator.language];

    for (const locale of preferredLocales) {
      const normalized = normalizeLocale(locale);
      if (normalized) return normalized;
    }

    return '';
  }

  function getDefaultLocale() {
    const storedLocale = getStoredLocale();
    if (storedLocale) return storedLocale;

    const detectedLocale = detectBrowserLocale();
    if (detectedLocale && CONTENT_READY_LOCALES.includes(detectedLocale)) {
      return detectedLocale;
    }

    return CONTENT_READY_LOCALES[0] || SUPPORTED_LOCALES[0];
  }

  function getRouteState(pathname = window.location.pathname, hash = window.location.hash) {
    const segments = splitPath(pathname);
    const pathLocale = normalizeLocale(segments[0]);
    const pathSegments = cleanPathSegments(pathLocale ? segments.slice(1) : segments);
    const hashValue = String(hash || '');
    const hashId = hashValue.replace(/^#/, '');
    const pathSectionId = SECTION_ROUTE_IDS.has(pathSegments[0]) ? pathSegments[0] : '';
    const hashSectionId = SECTION_ROUTE_IDS.has(hashId) ? hashId : '';

    return {
      pathLocale,
      pathSegments,
      hash: hashValue,
      hashId,
      pathSectionId,
      hashSectionId,
      sectionId: pathSectionId || hashSectionId,
    };
  }

  function buildPathname(locale, pathSegments = []) {
    const normalizedLocale = normalizeLocale(locale) || getDefaultLocale();
    const normalizedSegments = cleanPathSegments(pathSegments);

    return normalizedSegments.length
      ? `/${normalizedLocale}/${normalizedSegments.join('/')}`
      : `/${normalizedLocale}`;
  }

  function getEffectivePathSegments(route = getRouteState()) {
    if (route.pathSegments.length) return route.pathSegments;
    if (route.hashSectionId) return [route.hashSectionId];
    return [];
  }

  function buildLocationFromPath(pathname, { search = window.location.search, hash = '' } = {}) {
    return `${pathname}${search || ''}${hash || ''}`;
  }

  function updateRouteSnapshot() {
    const route = getRouteState();
    const currentLocale = route.pathLocale || getDefaultLocale();
    const contentReady = CONTENT_READY_LOCALES.includes(currentLocale);

    window.ATELA_LOCALE_ROUTING = {
      supportedLocales: [...SUPPORTED_LOCALES],
      contentReadyLocales: [...CONTENT_READY_LOCALES],
      currentLocale,
      currentPathSegments: [...route.pathSegments],
      currentSectionId: route.sectionId,
      isContentReady: contentReady,
    };

    document.documentElement.dataset.atelaLocale = currentLocale;
    document.documentElement.dataset.atelaLocaleReady = String(contentReady);
    document.documentElement.lang = contentReady ? currentLocale : CONTENT_READY_LOCALES[0] || 'ko';

    return window.ATELA_LOCALE_ROUTING;
  }

  function scrollToSection(sectionId, behavior = 'auto') {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const targetId = SECTION_ROUTE_ALIASES[sectionId] || sectionId;
    const target = document.getElementById(targetId) || document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior, block: 'start' });
    }
  }

  function applyRoutePosition({ behavior = 'auto' } = {}) {
    updateRouteSnapshot();
    const route = getRouteState();

    if (route.pathSectionId) {
      scrollToSection(route.pathSectionId, behavior);
      return;
    }

    if (route.hashId) {
      scrollToSection(route.hashId, behavior);
      return;
    }

    if (!route.pathSegments.length) {
      window.scrollTo({ top: 0, behavior });
    }
  }

  function normalizeEntry() {
    const url = new URL(window.location.href);
    const route = getRouteState(url.pathname, url.hash);
    const queryLocale = normalizeLocale(url.searchParams.get('lang'));

    if (queryLocale) {
      setPreferredLocale(queryLocale);
      url.searchParams.delete('lang');
    }

    const targetLocale = queryLocale || route.pathLocale || getDefaultLocale();
    const targetSegments = getEffectivePathSegments(route);
    const targetPathname = buildPathname(targetLocale, targetSegments);
    const shouldDropHash = !route.pathSegments.length && Boolean(route.hashSectionId);
    const normalizedHash = shouldDropHash ? '' : route.hash;

    if (url.pathname !== targetPathname || url.hash !== normalizedHash || queryLocale) {
      window.location.replace(
        buildLocationFromPath(targetPathname, {
          search: url.search,
          hash: normalizedHash,
        }),
      );
      return false;
    }

    setPreferredLocale(targetLocale);
    updateRouteSnapshot();
    return true;
  }

  function buildLocaleUrl(locale) {
    const normalizedLocale = normalizeLocale(locale) || getDefaultLocale();
    const route = getRouteState();
    const nextPathname = buildPathname(normalizedLocale, getEffectivePathSegments(route));
    const url = new URL(window.location.href);
    url.searchParams.delete('lang');

    return buildLocationFromPath(nextPathname, { search: url.search });
  }

  function buildSectionUrl(sectionId, locale = updateRouteSnapshot().currentLocale) {
    const normalizedLocale = normalizeLocale(locale) || getDefaultLocale();
    const targetSegments = sectionId ? [sectionId] : [];
    const url = new URL(window.location.href);
    url.searchParams.delete('lang');

    return buildLocationFromPath(buildPathname(normalizedLocale, targetSegments), {
      search: url.search,
    });
  }

  function handleSectionNavigation(event, sectionId) {
    if (
      !event ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const currentLocale = updateRouteSnapshot().currentLocale;
    const nextUrl = buildSectionUrl(sectionId, currentLocale);
    const currentUrl = buildLocationFromPath(window.location.pathname, {
      search: window.location.search,
    });

    if (currentUrl !== nextUrl) {
      window.history.pushState({}, '', nextUrl);
    }

    updateRouteSnapshot();
    scrollToSection(sectionId, 'smooth');
  }

  window.atelaGetRouteState = getRouteState;
  window.atelaGetCurrentLocale = () => updateRouteSnapshot().currentLocale;
  window.atelaSetPreferredLocale = setPreferredLocale;
  window.atelaBuildLocaleUrl = buildLocaleUrl;
  window.atelaBuildSectionUrl = buildSectionUrl;
  window.atelaBuildHomeUrl = (locale) => buildSectionUrl('', locale);
  window.atelaHandleSectionNavigation = handleSectionNavigation;
  window.atelaApplyCurrentRoute = applyRoutePosition;

  window.addEventListener('popstate', () => {
    window.requestAnimationFrame(() => applyRoutePosition({ behavior: 'auto' }));
  });

  normalizeEntry();
})();
