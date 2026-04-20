(function initAtelaAnalytics() {
  const SUPPORTED_LOCALES = ['ko', 'en'];
  const TRACKED_SECTIONS = [
    { id: 'demo', label: 'hero' },
    { id: 'logos', label: 'logo_cloud' },
    { id: 'stats', label: 'stats' },
    { id: 'tech', label: 'tech' },
    { id: 'workflow', label: 'workflow' },
    { id: 'showcase', label: 'showcase' },
    { id: 'marketplace', label: 'marketplace' },
    { id: 'compound-loop', label: 'compound_loop' },
    { id: 'compare', label: 'compare' },
    { id: 'cases', label: 'case_study' },
    { id: 'pricing', label: 'pricing' },
    { id: 'final-cta', label: 'final_cta' },
  ];

  const viewedSections = new Set();
  let sectionObserver = null;

  function getPathSegments(pathname = window.location.pathname) {
    return String(pathname || '/')
      .split('/')
      .filter(Boolean);
  }

  function getLocaleFromPath(pathname = window.location.pathname) {
    const firstSegment = getPathSegments(pathname)[0];
    return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : '';
  }

  function getCurrentLocale() {
    if (typeof window.atelaGetCurrentLocale === 'function') {
      return window.atelaGetCurrentLocale();
    }

    return getLocaleFromPath() || document.documentElement.lang || 'ko';
  }

  function getCurrentRouteSection() {
    if (typeof window.atelaGetRouteState === 'function') {
      return window.atelaGetRouteState().sectionId || '';
    }

    const segments = getPathSegments();
    const pathLocale = getLocaleFromPath();
    return pathLocale ? (segments[1] || '') : (segments[0] || '');
  }

  function buildPageContext() {
    return {
      locale: getCurrentLocale(),
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title,
      route_section_id: getCurrentRouteSection(),
    };
  }

  function sanitizePayload(payload) {
    return Object.entries(payload || {}).reduce((accumulator, [key, value]) => {
      if (value === undefined || value === null) return accumulator;
      accumulator[key] = value;
      return accumulator;
    }, {});
  }

  function pushToDataLayer(eventName, payload = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...buildPageContext(),
      ...sanitizePayload(payload),
    });
  }

  function getSectionMeta(sectionId) {
    const section = TRACKED_SECTIONS.find((item) => item.id === sectionId);
    return section || { id: sectionId, label: sectionId };
  }

  function trackSectionView(sectionId, extraPayload = {}) {
    if (!sectionId || viewedSections.has(sectionId)) return;

    viewedSections.add(sectionId);
    const sectionMeta = getSectionMeta(sectionId);

    pushToDataLayer('atela_section_view', {
      section_id: sectionMeta.id,
      section_label: sectionMeta.label,
      ...extraPayload,
    });
  }

  function trackCtaClick(payload = {}) {
    const {
      sectionId = '',
      ctaId = '',
      ctaLabel = '',
      destination = '',
      ...rest
    } = payload;

    pushToDataLayer('atela_cta_click', {
      section_id: sectionId,
      cta_id: ctaId,
      cta_label: ctaLabel,
      destination,
      ...rest,
    });
  }

  function trackUiInteraction(payload = {}) {
    const {
      sectionId = '',
      interactionId = '',
      interactionType = 'click',
      interactionLabel = '',
      interactionValue = '',
      ...rest
    } = payload;

    pushToDataLayer('atela_ui_interaction', {
      section_id: sectionId,
      interaction_id: interactionId,
      interaction_type: interactionType,
      interaction_label: interactionLabel,
      interaction_value: interactionValue,
      ...rest,
    });
  }

  function trackRouteChange(payload = {}) {
    const nextSectionId = payload.sectionId || getCurrentRouteSection() || 'home';

    pushToDataLayer('atela_route_change', {
      section_id: nextSectionId,
      route_trigger: payload.trigger || 'navigation',
    });
  }

  function observeSections() {
    if (sectionObserver) sectionObserver.disconnect();

    const sections = TRACKED_SECTIONS
      .map((section, index) => {
        const element = document.getElementById(section.id);
        if (!element) return null;
        return {
          ...section,
          index: index + 1,
          element,
        };
      })
      .filter(Boolean);

    if (!sections.length) return;

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;
          const sectionMeta = getSectionMeta(sectionId);
          const sectionIndex = sections.find((section) => section.id === sectionId)?.index;

          trackSectionView(sectionId, {
            section_label: sectionMeta.label,
            section_index: sectionIndex,
          });
        });
      },
      {
        threshold: [0.35, 0.6],
        rootMargin: '0px 0px -18% 0px',
      },
    );

    sections.forEach((section) => sectionObserver.observe(section.element));
  }

  function startAnalytics(payload = {}) {
    trackRouteChange({ trigger: payload.trigger || 'initial_load' });
    observeSections();
  }

  window.atelaTrackDataLayerEvent = pushToDataLayer;
  window.atelaTrackSectionView = trackSectionView;
  window.atelaTrackCtaClick = trackCtaClick;
  window.atelaTrackUiInteraction = trackUiInteraction;
  window.atelaTrackRouteChange = trackRouteChange;
  window.atelaObserveSections = observeSections;
  window.atelaStartAnalytics = startAnalytics;
})();
