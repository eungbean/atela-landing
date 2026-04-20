function CompoundChannelVisual(props) {
  var glyph = props.glyph;
  var tone = props.tone;
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-channel-visual tone-".concat(tone)
  }, /*#__PURE__*/React.createElement("span", {
    className: "atela-compound-channel-glyph"
  }, glyph), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null));
}

function CompoundMetricKpi() {
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-num"
  }, "3.42", /*#__PURE__*/React.createElement("span", null, "x")), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-delta"
  }, "\u2191 +0.38 vs baseline"), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-label"
  }, "Return on ad spend"));
}

function CompoundMetricLanes() {
  var chips = [{
    x: '10%',
    w: '18%',
    y: '18%'
  }, {
    x: '38%',
    w: '14%',
    y: '18%'
  }, {
    x: '62%',
    w: '24%',
    y: '18%',
    hero: true
  }, {
    x: '18%',
    w: '16%',
    y: '48%'
  }, {
    x: '48%',
    w: '18%',
    y: '48%'
  }, {
    x: '28%',
    w: '20%',
    y: '78%'
  }, {
    x: '66%',
    w: '15%',
    y: '78%'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-lanes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-lane-row"
  }, /*#__PURE__*/React.createElement("span", null, "social"), /*#__PURE__*/React.createElement("em", null)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-lane-row"
  }, /*#__PURE__*/React.createElement("span", null, "display"), /*#__PURE__*/React.createElement("em", null)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-lane-row"
  }, /*#__PURE__*/React.createElement("span", null, "reel"), /*#__PURE__*/React.createElement("em", null)), chips.map(function (chip, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "atela-compound-chip".concat(chip.hero ? ' is-hero' : ''),
      style: {
        left: chip.x,
        width: chip.w,
        top: chip.y
      }
    });
  }));
}

function CompoundMetricHistogram() {
  var bars = ['18%', '38%', '64%', '86%', '74%', '55%', '36%', '24%', '14%', '9%'];
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-hist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-hist-bars"
  }, bars.map(function (height, index) {
    return /*#__PURE__*/React.createElement("i", {
      key: index,
      style: {
        height: height,
        animationDelay: "".concat(index * 0.06, "s")
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-hist-median"
  }, "median"));
}

function CompoundMetricRank() {
  var rows = [{
    name: 'ad-a',
    width: '92%',
    hero: true
  }, {
    name: 'ad-c',
    width: '61%'
  }, {
    name: 'ad-e',
    width: '48%'
  }, {
    name: 'ad-b',
    width: '74%'
  }, {
    name: 'ad-d',
    width: '36%'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-rank"
  }, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: row.name,
      className: "atela-compound-rank-row"
    }, /*#__PURE__*/React.createElement("span", null, row.name), /*#__PURE__*/React.createElement("i", {
      className: row.hero ? 'is-hero' : '',
      style: {
        width: row.width,
        animationDelay: "".concat(index * 0.08, "s")
      }
    }));
  }));
}

function CompoundThumb(props) {
  var card = props.card;
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-thumb tone-".concat(card.tone)
  }, /*#__PURE__*/React.createElement("span", {
    className: "atela-compound-thumb-tag"
  }, card.kicker), /*#__PURE__*/React.createElement("strong", {
    className: "atela-compound-thumb-title"
  }, card.title), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-thumb-lines"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}

function CompoundLoop() {
  var copy = window.atelaGetCopySection ? window.atelaGetCopySection('compound') : null;
  var channelCards = copy.channelCards;
  var modelCards = copy.modelCards;
  var v1Cards = [{
    kicker: 'SERUM',
    title: 'Hero Cut',
    tone: 'pink'
  }, {
    kicker: 'PDP',
    title: 'Launch Tile',
    tone: 'sand'
  }, {
    kicker: 'META',
    title: 'CTR Variant',
    tone: 'lime'
  }, {
    kicker: 'UGC',
    title: 'Story Angle',
    tone: 'blue'
  }, {
    kicker: 'NAVER',
    title: 'Search Frame',
    tone: 'ink'
  }, {
    kicker: '29CM',
    title: 'Mood Spread',
    tone: 'violet'
  }, {
    kicker: 'REEL',
    title: 'Hook Frame',
    tone: 'pink'
  }, {
    kicker: 'PROMO',
    title: 'Offer Cut',
    tone: 'lime'
  }, {
    kicker: 'LIFE',
    title: 'Scene Shot',
    tone: 'blue'
  }, {
    kicker: 'BANNER',
    title: 'Flash Sale',
    tone: 'sand'
  }, {
    kicker: 'COUPANG',
    title: 'Thumb Pack',
    tone: 'ink'
  }, {
    kicker: 'EMAIL',
    title: 'CRM Tile',
    tone: 'violet'
  }];
  var optimizedCards = [{
    kicker: 'A1',
    title: 'ROAS Up',
    tone: 'lime'
  }, {
    kicker: 'A2',
    title: 'Kakao',
    tone: 'pink'
  }, {
    kicker: 'A3',
    title: 'Meta',
    tone: 'blue'
  }, {
    kicker: 'A4',
    title: 'Naver',
    tone: 'sand'
  }, {
    kicker: 'A5',
    title: 'PDP',
    tone: 'ink'
  }, {
    kicker: 'A6',
    title: 'Reel',
    tone: 'violet'
  }, {
    kicker: 'A7',
    title: 'OOH',
    tone: 'pink'
  }, {
    kicker: 'A8',
    title: 'Review',
    tone: 'blue'
  }, {
    kicker: 'A9',
    title: 'Boost',
    tone: 'lime'
  }, {
    kicker: 'B1',
    title: 'Launch',
    tone: 'sand'
  }, {
    kicker: 'B2',
    title: 'Click',
    tone: 'ink'
  }, {
    kicker: 'B3',
    title: 'Promo',
    tone: 'violet'
  }, {
    kicker: 'B4',
    title: 'SKU',
    tone: 'pink'
  }, {
    kicker: 'B5',
    title: 'UGC',
    tone: 'blue'
  }, {
    kicker: 'B6',
    title: 'Offer',
    tone: 'lime'
  }, {
    kicker: 'B7',
    title: 'Mood',
    tone: 'sand'
  }, {
    kicker: 'B8',
    title: 'Scene',
    tone: 'ink'
  }, {
    kicker: 'B9',
    title: 'Grid',
    tone: 'violet'
  }, {
    kicker: 'C1',
    title: 'Scale',
    tone: 'pink'
  }, {
    kicker: 'C2',
    title: 'Loop',
    tone: 'blue'
  }];
  var outputCards = [{
    kicker: 'PDP',
    title: 'Launch Ready',
    tone: 'lime'
  }, {
    kicker: 'META',
    title: 'Ad Set',
    tone: 'pink'
  }, {
    kicker: 'REEL',
    title: 'Short-form',
    tone: 'blue'
  }, {
    kicker: 'NAVER',
    title: 'Search Pack',
    tone: 'sand'
  }, {
    kicker: 'CRM',
    title: 'Retention',
    tone: 'ink'
  }, {
    kicker: 'SKU',
    title: 'Market Mix',
    tone: 'violet'
  }];
  var wrapperRef = React.useRef(null);
  var sectionRef = React.useRef(null);
  var spacerRef = React.useRef(null);
  var trackRef = React.useRef(null);
  var svgRef = React.useRef(null);
  var colRefs = React.useRef([]);
  var featuredCols = React.useRef(new Set([2, 5]));

  React.useEffect(function () {
    var wrapper = wrapperRef.current;
    var section = sectionRef.current;
    var spacer = spacerRef.current;
    var track = trackRef.current;
    var svg = svgRef.current;
    if (!wrapper || !section || !spacer || !track || !svg) return;

    function columnCenters() {
      return colRefs.current.map(function (node) {
        return node ? node.offsetLeft + node.offsetWidth / 2 : 0;
      });
    }

    function desktopMetrics(sectionWidth) {
      var centers = columnCenters();
      var start = centers[0] || 0;
      var end = centers[centers.length - 1] || 0;
      var entryAnchor = Math.max(320, Math.min(sectionWidth * 0.34, 520));
      var exitAnchor = Math.max(sectionWidth * 0.64, sectionWidth - 420);
      var travel = Math.max(0, end - start + entryAnchor - exitAnchor);
      return {
        centers: centers,
        start: start,
        end: end,
        travel: travel,
        entryAnchor: entryAnchor,
        exitAnchor: exitAnchor
      };
    }

    function updateSpacer() {
      if (window.innerWidth < 900) {
        spacer.style.height = '0px';
        return;
      }
      var travel = desktopMetrics(section.clientWidth).travel;
      var extra = Math.max(0, window.innerHeight - section.offsetHeight - 60);
      spacer.style.height = "".concat(travel + extra, "px");
    }

    function pointFromSide(node, side, bounds) {
      if (!node) return null;
      var rect = node.getBoundingClientRect();
      return {
        x: (side === 'right' ? rect.right : rect.left) - bounds.left,
        y: rect.top + rect.height / 2 - bounds.top
      };
    }

    function pointFromStack(node, side, stack, bounds) {
      if (!node || !stack) return null;
      var rect = node.getBoundingClientRect();
      var stackRect = stack.getBoundingClientRect();
      return {
        x: (side === 'right' ? stackRect.right : stackRect.left) - bounds.left,
        y: rect.top + rect.height / 2 - bounds.top
      };
    }

    function drawCurve(svgRoot, from, to, stage, progress) {
      if (!from || !to) return;
      var control = 0.45 * (to.x - from.x);
      var d = "M".concat(from.x, ",").concat(from.y, " C").concat(from.x + control, ",").concat(from.y, " ").concat(to.x - control, ",").concat(to.y, " ").concat(to.x, ",").concat(to.y);
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      svgRoot.appendChild(path);
      var length = path.getTotalLength();
      var start = 0.02 + 0.125 * stage;
      var end = start + 0.14;
      var local = Math.min(1, Math.max(0, (progress - start) / (end - start)));
      path.setAttribute('stroke-dasharray', String(length));
      path.setAttribute('stroke-dashoffset', String(length * (1 - local)));
      if (local >= 1) {
        path.setAttribute('stroke', 'rgb(36,83,198)');
        path.setAttribute('stroke-width', '2');
      } else {
        path.setAttribute('stroke', "rgba(36,83,198,".concat((0.16 + 0.48 * local).toFixed(2), ")"));
        path.setAttribute('stroke-width', '1.5');
      }
    }

    function drawDesktopLinks(progress) {
      var bounds = svg.getBoundingClientRect();
      if (bounds.width === 0) return;
      svg.setAttribute('width', String(bounds.width));
      svg.setAttribute('height', String(bounds.height));
      svg.setAttribute('viewBox', "0 0 ".concat(bounds.width, " ").concat(bounds.height));
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      var input = track.querySelector('[data-node="input"]');
      var fan = track.querySelector('[data-node="fan1"]');
      var stack = track.querySelector('[data-stack="content"]');
      var channels = Array.from(track.querySelectorAll('[data-node="content"]'));
      var perfData = track.querySelector('[data-node="variant"]');
      var variants = track.querySelector('[data-node="perf"]');
      var modelNodes = Array.from(track.querySelectorAll('[data-node="model"]'));
      var ideation = track.querySelector('[data-node="ideation"]');
      var output = track.querySelector('[data-node="output"]');

      drawCurve(svg, pointFromSide(input, 'right', bounds), pointFromSide(fan, 'left', bounds), 0, progress);
      channels.forEach(function (node) {
        return drawCurve(svg, pointFromSide(fan, 'right', bounds), pointFromStack(node, 'left', stack, bounds), 1, progress);
      });
      channels.forEach(function (node) {
        return drawCurve(svg, pointFromStack(node, 'right', stack, bounds), pointFromSide(perfData, 'left', bounds), 2, progress);
      });
      drawCurve(svg, pointFromSide(perfData, 'right', bounds), pointFromSide(variants, 'left', bounds), 3, progress);
      modelNodes.forEach(function (node) {
        return drawCurve(svg, pointFromSide(variants, 'right', bounds), pointFromSide(node, 'left', bounds), 4, progress);
      });
      modelNodes.forEach(function (node) {
        return drawCurve(svg, pointFromSide(node, 'right', bounds), pointFromSide(ideation, 'left', bounds), 5, progress);
      });
      drawCurve(svg, pointFromSide(ideation, 'right', bounds), pointFromSide(output, 'left', bounds), 6, progress);
    }

    function updateDesktop() {
      if (window.innerWidth < 900) {
        track.style.transform = '';
        return;
      }
      var spacerHeight = spacer.offsetHeight || 1;
      var progress = Math.max(0, Math.min(1, (60 - wrapper.getBoundingClientRect().top) / spacerHeight));
      var sectionWidth = section.clientWidth;
      var metrics = desktopMetrics(sectionWidth);
      var centers = metrics.centers;
      var offset = metrics.entryAnchor - metrics.start - progress * metrics.travel;
      track.style.transform = "translateX(".concat(offset, "px)");

      var focusWidth = 0.22 * sectionWidth;
      function fanProgress(anchorIndex) {
        var local = centers[anchorIndex] + offset - sectionWidth / 2;
        if (local >= 0) return 0;
        if (local <= -focusWidth) return 1;
        return -local / focusWidth;
      }

      colRefs.current.forEach(function (col, index) {
        if (!col) return;
        var emphasis = Math.max(0, 1 - Math.abs(centers[index] + offset - sectionWidth / 2) / focusWidth);
        var targetScale = featuredCols.current.has(index) ? 1.3 : 1.55;
        var scale = 0.8 + emphasis * (targetScale - 0.8);
        var opacity = 0.45 + 0.55 * emphasis;
        col.style.transform = "scale(".concat(scale.toFixed(3), ")");
        col.style.opacity = opacity.toFixed(3);
        col.style.setProperty('--col-t', emphasis.toFixed(3));
      });

      var v1 = colRefs.current[1];
      var variantsCol = colRefs.current[4];
      var outputCol = colRefs.current[7];
      if (v1) v1.style.setProperty('--fan-t', fanProgress(0).toFixed(3));
      if (variantsCol) variantsCol.style.setProperty('--fan-t', fanProgress(3).toFixed(3));
      if (outputCol) outputCol.style.setProperty('--fan-t', fanProgress(6).toFixed(3));
      drawDesktopLinks(progress);
    }

    var raf = 0;
    function requestTick() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateDesktop);
    }

    function handleResize() {
      updateSpacer();
      updateDesktop();
    }

    updateSpacer();
    updateDesktop();
    window.addEventListener('scroll', requestTick, {
      passive: true
    });
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return /*#__PURE__*/React.createElement("div", {
    ref: wrapperRef,
    id: "compound-loop",
    className: "atela-compound-wrapper"
  }, /*#__PURE__*/React.createElement("section", {
    ref: sectionRef,
    className: "atela-compound-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atela-eyebrow atela-compound-eyebrow"
  }, copy.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "atela-compound-headline"
  }, copy.headlineLead, " ", /*#__PURE__*/React.createElement("em", null, copy.headlineEmphasis)), /*#__PURE__*/React.createElement("p", {
    className: "atela-compound-sub"
  }, copy.sub)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-desk"
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svgRef,
    className: "atela-compound-svg",
    preserveAspectRatio: "none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-hscroll"
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: "atela-compound-track"
  }, /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[0] = node;
    },
    className: "atela-compound-col atela-compound-col-input"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-colhead"
  }, copy.labels.creative), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-input-card",
    "data-node": "input",
    "data-card": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-input-shell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atela-compound-input-kicker"
  }, "BRIEF"), /*#__PURE__*/React.createElement("strong", {
    className: "atela-compound-input-title"
  }, copy.briefTitle), /*#__PURE__*/React.createElement("p", {
    className: "atela-compound-input-copy"
  }, copy.briefCopy), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-input-tags"
  }, /*#__PURE__*/React.createElement("span", null, "Beauty"), /*#__PURE__*/React.createElement("span", null, "SKU"), /*#__PURE__*/React.createElement("span", null, "Spring"))))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[1] = node;
    },
    className: "atela-compound-col atela-compound-col-v1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-output-label"
  }, copy.labels.v1), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-fan atela-compound-fan-small"
  }, v1Cards.map(function (card, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(card.kicker, "-").concat(index),
      className: "atela-compound-fan-card",
      "data-node": index === 0 ? 'fan1' : undefined,
      "data-card": index === 0 ? true : undefined
    }, /*#__PURE__*/React.createElement(CompoundThumb, {
      card: card
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[2] = node;
    },
    className: "atela-compound-col atela-compound-col-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-colhead"
  }, copy.labels.distribution), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-channel-grid",
    "data-stack": "content"
  }, channelCards.map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.title,
      className: "atela-compound-channel-card",
      "data-node": "content",
      "data-card": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-channel-media"
    }, /*#__PURE__*/React.createElement(CompoundChannelVisual, {
      glyph: card.glyph,
      tone: card.tone
    })), /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-channel-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-channel-title"
    }, card.title), /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-channel-desc"
    }, card.desc)));
  }))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[3] = node;
    },
    className: "atela-compound-col atela-compound-col-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-colhead"
  }, copy.labels.performance), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-perf-card",
    "data-node": "variant",
    "data-card": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-perf-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-perf-box"
  }, /*#__PURE__*/React.createElement(CompoundMetricKpi, null)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-perf-box"
  }, /*#__PURE__*/React.createElement(CompoundMetricLanes, null)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-perf-box"
  }, /*#__PURE__*/React.createElement(CompoundMetricHistogram, null)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-perf-box"
  }, /*#__PURE__*/React.createElement(CompoundMetricRank, null))))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[4] = node;
    },
    className: "atela-compound-col atela-compound-col-variants"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-colhead"
  }, copy.labels.variants), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-variant-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-variant-base",
    "data-node": "perf",
    "data-card": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-variant-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-variant-grid"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-fan atela-compound-fan-small atela-compound-fan-overlay"
  }, optimizedCards.map(function (card, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(card.kicker, "-").concat(index),
      className: "atela-compound-fan-card"
    }, /*#__PURE__*/React.createElement(CompoundThumb, {
      card: card
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[5] = node;
    },
    className: "atela-compound-col atela-compound-col-model"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-colhead"
  }, copy.labels.training), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-model-stack"
  }, modelCards.map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.title,
      className: "atela-compound-model-card",
      "data-node": "model",
      "data-card": true
    }, /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-model-visual ".concat(card.icon === 'agent' ? 'is-agent' : 'is-model')
    }, card.icon === 'agent' ? /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-model-beam"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-model-dots"
    }, Array.from({
      length: 24
    }).map(function (_, index) {
      return /*#__PURE__*/React.createElement("i", {
        key: index
      });
    }))), /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-model-copy"
    }, /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-model-title"
    }, card.title), /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-model-desc"
    }, card.desc)));
  }))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[6] = node;
    },
    className: "atela-compound-col atela-compound-col-ideation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-colhead"
  }, copy.labels.ideation), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-ideation-card",
    "data-node": "ideation",
    "data-card": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-ideation-grid"
  }, ['Angle', 'Copy', 'Mood', 'Offer', 'SKU', 'Hook'].map(function (label) {
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "atela-compound-ideation-cell"
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("i", null));
  })))), /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      colRefs.current[7] = node;
    },
    className: "atela-compound-col atela-compound-col-output"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-output-label atela-compound-output-label-final"
  }, "YOUR NEXT CREATIVE IS", /*#__PURE__*/React.createElement("br", null), "DATA INFORMED", /*#__PURE__*/React.createElement("br", null), "AND AGENT ASSISTED"), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-fan"
  }, outputCards.map(function (card, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(card.kicker, "-").concat(index),
      className: "atela-compound-fan-card",
      "data-node": index === 0 ? 'output' : undefined,
      "data-card": index === 0 ? true : undefined
    }, /*#__PURE__*/React.createElement(CompoundThumb, {
      card: card
    }));
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-mobile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-mobile-grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "atela-compound-mobile-card"
  }, /*#__PURE__*/React.createElement("h3", null, copy.mobileCards[0].title), /*#__PURE__*/React.createElement("p", null, copy.mobileCards[0].body)), /*#__PURE__*/React.createElement("article", {
    className: "atela-compound-mobile-card"
  }, /*#__PURE__*/React.createElement("h3", null, copy.mobileCards[1].title), /*#__PURE__*/React.createElement("p", null, copy.mobileCards[1].body)), /*#__PURE__*/React.createElement("article", {
    className: "atela-compound-mobile-card"
  }, /*#__PURE__*/React.createElement("h3", null, copy.mobileCards[2].title), /*#__PURE__*/React.createElement("p", null, copy.mobileCards[2].body)), /*#__PURE__*/React.createElement("article", {
    className: "atela-compound-mobile-card is-highlight"
  }, /*#__PURE__*/React.createElement("h3", null, copy.mobileCards[3].title), /*#__PURE__*/React.createElement("p", null, copy.mobileCards[3].body))))), /*#__PURE__*/React.createElement("div", {
    ref: spacerRef,
    className: "atela-compound-spacer",
    "aria-hidden": "true"
  }));
}

window.CompoundLoop = CompoundLoop;
