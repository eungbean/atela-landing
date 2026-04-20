const HERO_DEMO_PACKS = window.ATELA_HERO_DEMO_PACKS || [];
const HERO_DEMO_DEFAULT_PACK_ID = window.ATELA_HERO_DEMO_DEFAULT_PACK_ID || HERO_DEMO_PACKS[0]?.id;
const HERO_FLOW_BREAKPOINT = 820;
const DEFAULT_CONNECTOR_PATHS = {
  input: [
    'M92 102 C 98 182, 78 246, 70 274',
    'M222 196 C 222 254, 224 282, 224 278',
    'M376 156 C 370 220, 314 254, 294 274',
  ],
  source: [
    'M210 392 C 284 360, 390 320, 504 298',
    'M194 448 C 218 556, 300 664, 430 764',
  ],
  output: [
    'M892 338 C 1004 306, 1048 222, 1126 176',
    'M892 344 C 1042 354, 1142 394, 1226 424',
    'M866 430 C 944 556, 956 646, 878 716',
  ],
};
const INPUT_CONNECTORS = [
  { startKey: 'input:cafe24:out', endKey: 'source:inputs', startSide: 'bottom', endSide: 'top', bend: 122, startCrossAxisBias: 0, endCrossAxisBias: 0 },
  { startKey: 'input:shopify:out', endKey: 'source:inputs', startSide: 'bottom', endSide: 'top', bend: 104, startCrossAxisBias: 0, endCrossAxisBias: 0 },
  { startKey: 'input:url:out', endKey: 'source:inputs', startSide: 'bottom', endSide: 'top', bend: 118, startCrossAxisBias: 0, endCrossAxisBias: 0 },
];
const SOURCE_CONNECTORS = [
  { startKey: 'source:item:out', endKey: 'card:studio:in', startSide: 'right', endSide: 'left', bend: 142, startCurveY: -18, endCurveY: -6 },
  { startKey: 'source:item:out', endKey: 'card:lifestyle:in', startSide: 'right', endSide: 'left', bend: 136, startCurveY: 34, endCurveY: 20 },
];
const OUTPUT_CONNECTORS = [
  { startKey: 'card:studio:out', endKey: 'card:angle:in', startSide: 'right', endSide: 'left', bend: 154, startCurveY: -24, endCurveY: -18 },
  { startKey: 'card:studio:out', endKey: 'card:variation:in', startSide: 'right', endSide: 'left', bend: 176, startCurveY: 8, endCurveY: -14 },
  { startKey: 'card:studio:out', endKey: 'card:video:in', startSide: 'right', endSide: 'top', bend: 132, startCurveY: 24, endCurveY: -12 },
];
const HERO_CARD_TITLES = {
  source: 'Assets',
  studio: 'Background',
  angle: 'Lighting',
  variation: 'Variation',
  lifestyle: 'Angle',
  video: 'Video',
};

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function phaseProgress(progress, start, span = 0.24) {
  return clamp((progress - start) / span);
}

function buildRevealStyle(progress, options = {}) {
  const {
    fromX = 0,
    fromY = 0,
    scaleFrom = 0.94,
    minOpacity = 0.001,
    pointerThreshold = 0.72,
  } = options;

  const translateX = (1 - progress) * fromX;
  const translateY = (1 - progress) * fromY;
  const scale = scaleFrom + (1 - scaleFrom) * progress;

  return {
    opacity: minOpacity + (1 - minOpacity) * progress,
    transform: `translate3d(var(--card-shift-x, 0px), var(--card-shift-y, 0px), 0) translate3d(var(--reveal-shift-x, 0px), var(--reveal-shift-y, 0px), 0) translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
    pointerEvents: progress > pointerThreshold ? 'auto' : 'none',
  };
}

function buildLineStyle(progress, start, span = 0.22) {
  return {
    '--line-progress': phaseProgress(progress, start, span).toFixed(3),
  };
}

function buildConnectorPath(startPoint, endPoint, options = {}) {
  const {
    startSide = 'bottom',
    endSide = 'top',
    bend,
    minBend = 54,
    maxBend = 180,
    startCurveX = 0,
    startCurveY = 0,
    endCurveX = 0,
    endCurveY = 0,
    startCrossAxisBias,
    endCrossAxisBias,
  } = options;

  const startX = startPoint.x;
  const startY = startPoint.y;
  const endX = endPoint.x;
  const endY = endPoint.y;
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const isHorizontalBridge =
    (startSide === 'right' && endSide === 'left') ||
    (startSide === 'left' && endSide === 'right');
  const isVerticalBridge =
    (startSide === 'bottom' && endSide === 'top') ||
    (startSide === 'top' && endSide === 'bottom');
  const primaryDistance = (startSide === 'left' || startSide === 'right' || endSide === 'left' || endSide === 'right')
    ? Math.abs(deltaX)
    : Math.abs(deltaY);
  const safeMaxBend = isHorizontalBridge
    ? Math.max(18, Math.abs(deltaX) * 0.45)
    : isVerticalBridge
      ? Math.max(18, Math.abs(deltaY) * 0.45)
      : maxBend;
  const requestedBend = bend == null
    ? Math.max(minBend, Math.min(maxBend, primaryDistance * 0.5))
    : bend;
  const curveSize = bend == null
    ? Math.max(18, Math.min(requestedBend, safeMaxBend))
    : Math.max(18, Math.min(requestedBend, safeMaxBend));
  const defaultCrossAxisBias = 0.14;
  const resolvedStartCrossAxisBias = startCrossAxisBias ?? defaultCrossAxisBias;
  const resolvedEndCrossAxisBias = endCrossAxisBias ?? defaultCrossAxisBias;
  const controlStart = { x: startX, y: startY };
  const controlEnd = { x: endX, y: endY };

  switch (startSide) {
    case 'left':
      controlStart.x -= curveSize;
      controlStart.y += deltaY * resolvedStartCrossAxisBias;
      break;
    case 'right':
      controlStart.x += curveSize;
      controlStart.y += deltaY * resolvedStartCrossAxisBias;
      break;
    case 'top':
      controlStart.x += deltaX * resolvedStartCrossAxisBias;
      controlStart.y -= curveSize;
      break;
    case 'bottom':
    default:
      controlStart.x += deltaX * resolvedStartCrossAxisBias;
      controlStart.y += curveSize;
      break;
  }

  switch (endSide) {
    case 'left':
      controlEnd.x -= curveSize;
      controlEnd.y -= deltaY * resolvedEndCrossAxisBias;
      break;
    case 'right':
      controlEnd.x += curveSize;
      controlEnd.y -= deltaY * resolvedEndCrossAxisBias;
      break;
    case 'bottom':
      controlEnd.x -= deltaX * resolvedEndCrossAxisBias;
      controlEnd.y += curveSize;
      break;
    case 'top':
    default:
      controlEnd.x -= deltaX * resolvedEndCrossAxisBias;
      controlEnd.y -= curveSize;
      break;
  }

  controlStart.x += startCurveX;
  controlStart.y += startCurveY;
  controlEnd.x += endCurveX;
  controlEnd.y += endCurveY;

  return [
    `M${startX.toFixed(1)} ${startY.toFixed(1)}`,
    `C${controlStart.x.toFixed(1)} ${controlStart.y.toFixed(1)},`,
    `${controlEnd.x.toFixed(1)} ${controlEnd.y.toFixed(1)},`,
    `${endX.toFixed(1)} ${endY.toFixed(1)}`,
  ].join(' ');
}

function getHandlePoint(handleEl, stageRect, scaleX, scaleY) {
  const handleRect = handleEl.getBoundingClientRect();

  return {
    x: (handleRect.left - stageRect.left + (handleRect.width / 2)) / scaleX,
    y: (handleRect.top - stageRect.top + (handleRect.height / 2)) / scaleY,
  };
}

function buildConnectorPathFromHandles(handleRefs, stageRect, scaleX, scaleY, connector, fallbackPath) {
  const startHandle = handleRefs[connector.startKey];
  const endHandle = handleRefs[connector.endKey];

  if (!startHandle || !endHandle) return fallbackPath;

  const startPoint = getHandlePoint(startHandle, stageRect, scaleX, scaleY);
  const endPoint = getHandlePoint(endHandle, stageRect, scaleX, scaleY);

  return buildConnectorPath(startPoint, endPoint, connector);
}

function areConnectorPathsEqual(previousPaths, nextPaths) {
  return ['input', 'source', 'output'].every((group) => (
    previousPaths[group].length === nextPaths[group].length &&
    previousPaths[group].every((path, index) => path === nextPaths[group][index])
  ));
}

function buildInputNodeStyle(progress, index, isCompactLayout) {
  if (isCompactLayout) return undefined;

  const offsets = [
    { fromX: -26, fromY: -10 },
    { fromX: -16, fromY: 4 },
    { fromX: 18, fromY: -8 },
  ];

  const reveal = phaseProgress(progress, index * 0.1, 0.34);
  return buildRevealStyle(reveal, {
    ...offsets[index],
    scaleFrom: 0.95,
    minOpacity: 0.08,
    pointerThreshold: 0,
  });
}

function buildCardStyle(progress, options, isCompactLayout) {
  if (isCompactLayout) return undefined;
  return buildRevealStyle(progress, options);
}

function buildSourceItemStyle(progress, index, isCompactLayout) {
  if (isCompactLayout) return undefined;

  const reveal = phaseProgress(progress, 0.04 + index * 0.055, 0.11);
  const translateX = (1 - reveal) * -16;
  const scale = 0.985 + reveal * 0.015;

  return {
    opacity: 0.16 + reveal * 0.84,
    transform: `translate3d(${translateX}px, 0, 0) scale(${scale})`,
    pointerEvents: reveal > 0.68 ? 'auto' : 'none',
  };
}

function buildSourceCardStyle(inputProgress, sourceFocus, isCompactLayout) {
  if (isCompactLayout) return undefined;

  const enterOffset = (1 - inputProgress) * 28;
  const scale = 0.985 + sourceFocus * 0.018;

  return {
    '--source-focus': sourceFocus.toFixed(3),
    transform: `translateX(-50%) translate3d(var(--source-card-shift-x, 0px), var(--source-card-shift-y, 0px), 0) translate3d(0, ${enterOffset}px, 0) scale(${scale})`,
  };
}

function PlatformLogo({ platform, compact = false }) {
  const sizeClass = compact ? 'is-compact' : 'is-hero';

  if (platform.id === 'cafe24') {
    return (
      <span className={`demo-platform-logo is-cafe24 ${sizeClass}`} aria-label={platform.label}>
        <span className="demo-platform-logo-word">cafe24</span>
      </span>
    );
  }

  if (platform.id === 'shopify') {
    return (
      <span className={`demo-platform-logo is-shopify ${sizeClass}`} aria-label={platform.label}>
        <span className="demo-platform-logo-bag">S</span>
        <span className="demo-platform-logo-word">shopify</span>
      </span>
    );
  }

  if (platform.id === 'url') {
    return (
      <span className={`demo-platform-logo is-url ${sizeClass}`} aria-label={platform.label}>
        <span className="demo-platform-logo-link"/>
        <span className="demo-platform-logo-word">URL</span>
      </span>
    );
  }

  return (
    <span className={`demo-platform-logo ${sizeClass}`} aria-label={platform.label}>
      <span className="demo-platform-logo-word">{platform.label}</span>
    </span>
  );
}

function Hero() {
  return <AtelaHeroDemo/>;
}

function AtelaHeroDemo() {
  const copy = window.atelaGetCopySection('hero');
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const buildSectionUrl = window.atelaBuildSectionUrl || ((sectionId) => `#${sectionId}`);
  const handleSectionNavigation = window.atelaHandleSectionNavigation;
  const [activePackId, setActivePackId] = React.useState(HERO_DEMO_DEFAULT_PACK_ID);
  const [flowState, setFlowState] = React.useState(() => ({
    inputProgress: typeof window !== 'undefined' && window.innerWidth <= HERO_FLOW_BREAKPOINT ? 1 : 0,
    outputProgress: typeof window !== 'undefined' && window.innerWidth <= HERO_FLOW_BREAKPOINT ? 1 : 0,
    sourceFocus: typeof window !== 'undefined' && window.innerWidth <= HERO_FLOW_BREAKPOINT ? 1 : 0,
    isCompactLayout: typeof window !== 'undefined' ? window.innerWidth <= HERO_FLOW_BREAKPOINT : false,
  }));
  const [connectorPaths, setConnectorPaths] = React.useState(DEFAULT_CONNECTOR_PATHS);
  const [layoutVersion, setLayoutVersion] = React.useState(0);

  const stageRef = React.useRef(null);
  const stageInnerRef = React.useRef(null);
  const sourceRef = React.useRef(null);
  const inputNodeRefs = React.useRef({});
  const cardRefs = React.useRef({});
  const connectorHandleRefs = React.useRef({});
  const connectorPathsRef = React.useRef(DEFAULT_CONNECTOR_PATHS);
  const layoutFrameRef = React.useRef(0);
  const activePack = HERO_DEMO_PACKS.find((pack) => pack.id === activePackId) || HERO_DEMO_PACKS[0];
  const hasVideoOutput = Boolean(activePack?.outputs?.video?.src);

  const registerInputNode = React.useCallback((platformId, node) => {
    if (node) inputNodeRefs.current[platformId] = node;
    else delete inputNodeRefs.current[platformId];
  }, []);

  const registerCard = React.useCallback((cardId, node) => {
    if (node) cardRefs.current[cardId] = node;
    else delete cardRefs.current[cardId];
  }, []);

  const registerConnectorHandle = React.useCallback((handleKey, node) => {
    if (node) connectorHandleRefs.current[handleKey] = node;
    else delete connectorHandleRefs.current[handleKey];
  }, []);

  const requestLayoutMeasurement = React.useCallback(() => {
    if (typeof window === 'undefined' || layoutFrameRef.current) return;

    layoutFrameRef.current = window.requestAnimationFrame(() => {
      layoutFrameRef.current = 0;
      setLayoutVersion((previousVersion) => previousVersion + 1);
    });
  }, []);

  const measureConnectorPaths = React.useCallback(() => {
    if (flowState.isCompactLayout) return DEFAULT_CONNECTOR_PATHS;

    const stageInnerEl = stageInnerRef.current;
    if (!stageInnerEl) return null;

    const stageRect = stageInnerEl.getBoundingClientRect();
    if (!stageRect.width || !stageRect.height) return null;

    const scaleX = stageRect.width / 1260;
    const scaleY = stageRect.height / 930;

    return {
      input: activePack.platforms.map((platform, index) => {
        const connector = INPUT_CONNECTORS[index];
        const fallbackPath = DEFAULT_CONNECTOR_PATHS.input[index];

        if (!connector) return fallbackPath;

        return buildConnectorPathFromHandles(
          connectorHandleRefs.current,
          stageRect,
          scaleX,
          scaleY,
          {
            ...connector,
            startKey: `input:${platform.id}:out`,
          },
          fallbackPath
        );
      }),
      source: SOURCE_CONNECTORS.map((connector, index) => (
        buildConnectorPathFromHandles(
          connectorHandleRefs.current,
          stageRect,
          scaleX,
          scaleY,
          connector,
          DEFAULT_CONNECTOR_PATHS.source[index]
        )
      )),
      output: OUTPUT_CONNECTORS.map((connector, index) => (
        buildConnectorPathFromHandles(
          connectorHandleRefs.current,
          stageRect,
          scaleX,
          scaleY,
          connector,
          DEFAULT_CONNECTOR_PATHS.output[index]
        )
      )),
    };
  }, [activePack.platforms, flowState.isCompactLayout]);

  const syncConnectorPaths = React.useCallback(() => {
    const nextPaths = measureConnectorPaths();
    if (!nextPaths) return;

    if (!areConnectorPathsEqual(connectorPathsRef.current, nextPaths)) {
      connectorPathsRef.current = nextPaths;
      setConnectorPaths(nextPaths);
    }
  }, [measureConnectorPaths]);

  React.useEffect(() => {
    let frameId = 0;

    const updateFlowState = () => {
      frameId = 0;

      const isCompactLayout = window.innerWidth <= HERO_FLOW_BREAKPOINT;

      if (isCompactLayout) {
        setFlowState((prev) => (
          prev.isCompactLayout &&
          prev.inputProgress === 1 &&
          prev.outputProgress === 1 &&
          prev.sourceFocus === 1
        ) ? prev : {
          inputProgress: 1,
          outputProgress: 1,
          sourceFocus: 1,
          isCompactLayout: true,
        });
        return;
      }

      const stageEl = stageRef.current;
      const sourceEl = sourceRef.current;

      if (!stageEl || !sourceEl) return;

      const viewportHeight = window.innerHeight;
      const stageRect = stageEl.getBoundingClientRect();
      const sourceRect = sourceEl.getBoundingClientRect();
      const sourceCenter = sourceRect.top + (sourceRect.height / 2);
      const inputProgress = clamp((viewportHeight * 0.96 - stageRect.top) / (viewportHeight * 0.2));
      const outputProgress = clamp((viewportHeight * 0.82 - sourceRect.top) / (viewportHeight * 0.24));
      const sourceFocus = clamp(1 - (Math.abs(sourceCenter - viewportHeight * 0.58) / (viewportHeight * 0.28)));
      const nextState = {
        inputProgress,
        outputProgress,
        sourceFocus,
        isCompactLayout: false,
      };

      setFlowState((prev) => {
        const isSame =
          prev.isCompactLayout === nextState.isCompactLayout &&
          Math.abs(prev.inputProgress - nextState.inputProgress) < 0.01 &&
          Math.abs(prev.outputProgress - nextState.outputProgress) < 0.01 &&
          Math.abs(prev.sourceFocus - nextState.sourceFocus) < 0.01;

        return isSame ? prev : nextState;
      });
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateFlowState);
    };

    updateFlowState();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  React.useLayoutEffect(() => {
    if (flowState.isCompactLayout) {
      connectorPathsRef.current = DEFAULT_CONNECTOR_PATHS;
      setConnectorPaths(DEFAULT_CONNECTOR_PATHS);
      return;
    }
    syncConnectorPaths();
  }, [
    activePack.id,
    activePack.platforms,
    flowState.inputProgress,
    flowState.outputProgress,
    flowState.isCompactLayout,
    flowState.sourceFocus,
    hasVideoOutput,
    layoutVersion,
    syncConnectorPaths,
  ]);

  React.useEffect(() => {
    if (flowState.isCompactLayout || typeof ResizeObserver === 'undefined') return undefined;

    const resizeObserver = new ResizeObserver(() => {
      requestLayoutMeasurement();
    });
    const observedNodes = [
      stageInnerRef.current,
      sourceRef.current,
      ...Object.values(inputNodeRefs.current),
      ...Object.values(cardRefs.current),
    ].filter(Boolean);

    observedNodes.forEach((node) => resizeObserver.observe(node));
    window.addEventListener('resize', requestLayoutMeasurement);

    requestLayoutMeasurement();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', requestLayoutMeasurement);
    };
  }, [activePack.id, flowState.isCompactLayout, hasVideoOutput, requestLayoutMeasurement]);

  React.useEffect(() => {
    if (flowState.isCompactLayout || typeof window === 'undefined') return undefined;

    let frameId = 0;

    const tick = () => {
      syncConnectorPaths();
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [flowState.isCompactLayout, syncConnectorPaths]);

  React.useEffect(() => () => {
    if (layoutFrameRef.current) window.cancelAnimationFrame(layoutFrameRef.current);
  }, []);

  if (!activePack) return null;

  const { inputProgress, outputProgress, sourceFocus, isCompactLayout } = flowState;
  const studioProgress = isCompactLayout ? 1 : phaseProgress(outputProgress, 0.02, 0.22);
  const lifestyleProgress = isCompactLayout ? 1 : phaseProgress(outputProgress, 0.14, 0.22);
  const angleProgress = isCompactLayout ? 1 : phaseProgress(outputProgress, 0.34, 0.2);
  const variationProgress = isCompactLayout ? 1 : phaseProgress(outputProgress, 0.48, 0.2);
  const videoProgress = isCompactLayout ? 1 : phaseProgress(outputProgress, 0.62, 0.2);
  const compactOutputCards = [
    { id: 'studio', output: activePack.outputs.studio, title: HERO_CARD_TITLES.studio },
    { id: 'angle', output: activePack.outputs.angle, title: HERO_CARD_TITLES.angle },
    { id: 'variation', output: activePack.outputs.variation, title: HERO_CARD_TITLES.variation },
    { id: 'lifestyle', output: activePack.outputs.lifestyle, title: HERO_CARD_TITLES.lifestyle },
  ];

  return (
    <section className="demo-hero" id="demo">
      <div className="demo-hero-copy">
        <h1 className="demo-hero-title">
          {copy.titleLead}
          <br/>
          {copy.titlePrefix} <span className="atela-mark demo-title-highlight">{copy.titleHighlight}</span>
        </h1>

        <p className="demo-hero-subtitle">
          {copy.subtitleLines[0]}
          <br/>
          {copy.subtitleLines[1]}
        </p>

        <a
          className="demo-hero-button"
          href={buildSectionUrl('tech')}
          onClick={handleSectionNavigation ? (event) => handleSectionNavigation(event, 'tech') : undefined}
        >
          {copy.cta}
          <span className="demo-hero-button-arrow">↗</span>
        </a>
      </div>

      <div
        ref={stageRef}
        className="demo-flow-stage demo-flow-stage-wire"
        aria-label="Workflow preview"
      >
        <div ref={stageInnerRef} className="demo-flow-stage-inner">
          <div className="demo-flow-inputs" aria-hidden="true">
          {activePack.platforms.map((platform, index) => (
            <div
              key={platform.id}
              ref={(node) => registerInputNode(platform.id, node)}
              className={`demo-input-node is-${platform.id}`}
              style={buildInputNodeStyle(inputProgress, index, isCompactLayout)}
            >
              <PlatformLogo platform={platform}/>
              <ConnectorHandle
                handleKey={`input:${platform.id}:out`}
                side="bottom"
                offsetY="10px"
                registerHandle={registerConnectorHandle}
              />
            </div>
          ))}
          </div>

          <svg className="demo-flow-lines" viewBox="0 0 1260 930" aria-hidden="true">
            <path
            className="is-input"
            pathLength="100"
            style={buildLineStyle(inputProgress, 0.02, 0.36)}
            d={connectorPaths.input[0]}
          />
          <path
            className="is-input"
            pathLength="100"
            style={buildLineStyle(inputProgress, 0.12, 0.34)}
            d={connectorPaths.input[1]}
          />
          <path
            className="is-input"
            pathLength="100"
            style={buildLineStyle(inputProgress, 0.22, 0.34)}
            d={connectorPaths.input[2]}
          />

          <path
            className="is-source"
            pathLength="100"
            style={buildLineStyle(outputProgress, 0.04, 0.2)}
            d={connectorPaths.source[0]}
          />
          <path
            className="is-source"
            pathLength="100"
            style={buildLineStyle(outputProgress, 0.18, 0.22)}
            d={connectorPaths.source[1]}
          />

          <path
            className="is-output"
            pathLength="100"
            style={buildLineStyle(outputProgress, 0.36, 0.18)}
            d={connectorPaths.output[0]}
          />
          <path
            className="is-output"
            pathLength="100"
            style={buildLineStyle(outputProgress, 0.5, 0.18)}
            d={connectorPaths.output[1]}
          />
          {hasVideoOutput ? (
            <path
              className="is-output"
              pathLength="100"
              style={buildLineStyle(outputProgress, 0.64, 0.18)}
              d={connectorPaths.output[2]}
            />
          ) : null}
          </svg>

          <div
            ref={sourceRef}
            className={`demo-source-card ${sourceFocus > 0.56 ? 'is-focused' : ''}`}
            style={buildSourceCardStyle(inputProgress, sourceFocus, isCompactLayout)}
          >
            <ConnectorHandle
              handleKey="source:inputs"
              side="top"
              offsetY="-8px"
              registerHandle={registerConnectorHandle}
            />
            <div className="demo-source-head">
              <span className="demo-source-title">{HERO_CARD_TITLES.source}</span>
              <span className="demo-card-plus">+</span>
            </div>

            <div className="demo-source-list">
              {HERO_DEMO_PACKS.map((pack, packIndex) => (
                <button
                  key={pack.id}
                  type="button"
                  className={`demo-source-item ${activePack.id === pack.id ? 'is-active' : ''}`}
                  aria-pressed={activePack.id === pack.id}
                  aria-label={currentLocale === 'ko' ? `${pack.name} ${copy.packAriaPrefix}` : `${copy.packAriaPrefix} ${pack.name}`}
                  style={buildSourceItemStyle(inputProgress, packIndex, isCompactLayout)}
                  onMouseEnter={() => setActivePackId(pack.id)}
                  onFocus={() => setActivePackId(pack.id)}
                  onClick={() => setActivePackId(pack.id)}
                >
                  {activePack.id === pack.id && !isCompactLayout ? (
                    <ConnectorHandle
                      handleKey="source:item:out"
                      side="right"
                      registerHandle={registerConnectorHandle}
                    />
                  ) : null}
                  <img
                    className="demo-source-thumb"
                    src={pack.source.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{pack.name}</span>
                </button>
              ))}
            </div>
          </div>

          {isCompactLayout ? (
            <div className="demo-compact-output-grid" aria-label="Generated output grid">
              {compactOutputCards.map((card) => (
                <WorkflowCard
                  key={card.id}
                  output={card.output}
                  title={card.title}
                />
              ))}
            </div>
          ) : (
            <>
              <WorkflowCard
                output={activePack.outputs.studio}
                title={HERO_CARD_TITLES.studio}
                className="is-shadows"
                style={buildCardStyle(studioProgress, { fromX: -42, fromY: 12, scaleFrom: 0.96 }, isCompactLayout)}
                cardRef={(node) => registerCard('studio', node)}
                handles={[
                  { key: 'card:studio:in', side: 'left', position: '50%' },
                  { key: 'card:studio:out', side: 'right', position: '50%' },
                ]}
                registerHandle={registerConnectorHandle}
              />

              <WorkflowCard
                output={activePack.outputs.angle}
                title={HERO_CARD_TITLES.angle}
                className="is-angle"
                style={buildCardStyle(angleProgress, { fromX: -54, fromY: -10, scaleFrom: 0.95 }, isCompactLayout)}
                cardRef={(node) => registerCard('angle', node)}
                handles={[
                  { key: 'card:angle:in', side: 'left', position: '64%' },
                ]}
                registerHandle={registerConnectorHandle}
              />

              <WorkflowCard
                output={activePack.outputs.variation}
                title={HERO_CARD_TITLES.variation}
                className="is-variation"
                style={buildCardStyle(variationProgress, { fromX: -64, fromY: 4, scaleFrom: 0.94 }, isCompactLayout)}
                cardRef={(node) => registerCard('variation', node)}
                handles={[
                  { key: 'card:variation:in', side: 'left', position: '46%', offsetX: '18px' },
                ]}
                registerHandle={registerConnectorHandle}
              />

              <WorkflowCard
                output={activePack.outputs.lifestyle}
                title={HERO_CARD_TITLES.lifestyle}
                className="is-lifestyle"
                style={buildCardStyle(lifestyleProgress, { fromX: -48, fromY: 20, scaleFrom: 0.95 }, isCompactLayout)}
                cardRef={(node) => registerCard('lifestyle', node)}
                handles={[
                  { key: 'card:lifestyle:in', side: 'left', position: '50%' },
                ]}
                registerHandle={registerConnectorHandle}
              />
            </>
          )}

          {hasVideoOutput ? (
            <WorkflowVideoCard
              output={activePack.outputs.video}
              title={HERO_CARD_TITLES.video}
              packId={activePack.id}
              className={isCompactLayout ? 'is-compact-video' : ''}
              style={buildCardStyle(videoProgress, { fromX: -52, fromY: 24, scaleFrom: 0.96 }, isCompactLayout)}
              cardRef={(node) => registerCard('video', node)}
              handles={isCompactLayout ? [] : [
                { key: 'card:video:in', side: 'top', position: '50%' },
              ]}
              registerHandle={registerConnectorHandle}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ConnectorHandle({ handleKey, side, position = '50%', offsetX = '0px', offsetY = '0px', registerHandle }) {
  return (
    <span
      ref={(node) => registerHandle(handleKey, node)}
      className={`demo-connector-handle is-${side}`}
      style={{
        '--handle-position': position,
        '--handle-offset-x': offsetX,
        '--handle-offset-y': offsetY,
      }}
      aria-hidden="true"
    />
  );
}

function WorkflowCard({ output, title, className = '', style, cardRef, handles = [], registerHandle }) {
  return (
    <article ref={cardRef} className={['demo-flow-card', className].filter(Boolean).join(' ')} style={style}>
      {handles.map((handle) => (
        <ConnectorHandle
          key={handle.key}
          handleKey={handle.key}
          side={handle.side}
          position={handle.position}
          offsetX={handle.offsetX}
          offsetY={handle.offsetY}
          registerHandle={registerHandle}
        />
      ))}
      <div className="demo-card-head">
        <span>{title || output.label}</span>
        <span className="demo-card-plus">+</span>
      </div>
      <div className="demo-card-media">
        <img
          src={output.image}
          alt={output.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  );
}

function WorkflowVideoCard({ output, title, packId, style, className = '', cardRef, handles = [], registerHandle }) {
  return (
    <article ref={cardRef} className={['demo-flow-card', 'is-video', className].filter(Boolean).join(' ')} style={style}>
      {handles.map((handle) => (
        <ConnectorHandle
          key={handle.key}
          handleKey={handle.key}
          side={handle.side}
          position={handle.position}
          offsetX={handle.offsetX}
          offsetY={handle.offsetY}
          registerHandle={registerHandle}
        />
      ))}
      <div className="demo-card-head">
        <span>{title || output.label}</span>
        <span className="demo-card-plus">+</span>
      </div>
      <div className="demo-card-media">
        <video
          key={packId}
          src={output.src}
          poster={output.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </article>
  );
}

window.Hero = Hero;
