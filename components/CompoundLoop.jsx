function CompoundChannelVisual(props) {
  var glyph = props.glyph;
  var tone = props.tone;
  var title = props.title;
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-channel-visual tone-".concat(tone)
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-channel-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atela-compound-channel-title-overlay"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "atela-compound-channel-glyph",
    "aria-hidden": "true"
  }, glyph)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-channel-lines",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}

function CompoundMetricKpi(props) {
  var copy = props.copy;
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-orbit"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-num"
  }, "3.42", /*#__PURE__*/React.createElement("span", null, "x")), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-delta"
  }, copy.delta), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-kpi-label"
  }, copy.label)), /*#__PURE__*/React.createElement("svg", {
    className: "atela-compound-kpi-spark",
    viewBox: "0 0 118 42",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "compound-kpi-line",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(198,255,61,0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "26%",
    stopColor: "rgba(198,255,61,0.48)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "78%",
    stopColor: "rgba(198,255,61,0.95)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(198,255,61,0.26)"
  })), /*#__PURE__*/React.createElement("path", {
    id: "compound-kpi-spark-path",
    d: "M4 35 C 18 34, 24 28, 34 26 S 56 30, 70 20 S 92 12, 114 8"
  })), /*#__PURE__*/React.createElement("path", {
    className: "atela-compound-kpi-spark-shadow",
    d: "M4 35 C 18 34, 24 28, 34 26 S 56 30, 70 20 S 92 12, 114 8"
  }), /*#__PURE__*/React.createElement("path", {
    className: "atela-compound-kpi-spark-line",
    d: "M4 35 C 18 34, 24 28, 34 26 S 56 30, 70 20 S 92 12, 114 8"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "atela-compound-kpi-spark-dot",
    r: "3.4"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "4.8s",
    repeatCount: "indefinite",
    rotate: "auto"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: "#compound-kpi-spark-path"
  })))));
}

function CompoundMetricLanes(props) {
  var labels = props.labels;
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-lanes"
  }, labels.map(function (label, rowIndex) {
    return /*#__PURE__*/React.createElement("div", {
      key: label,
      className: "atela-compound-lane-row"
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("em", null, Array.from({
      length: rowIndex === 1 ? 2 : 3
    }).map(function (_, packetIndex) {
      return /*#__PURE__*/React.createElement("b", {
        key: "".concat(label, "-").concat(packetIndex),
        className: "atela-compound-lane-packet".concat(packetIndex === 1 ? ' is-hero' : ''),
        style: {
          '--packet-delay': "".concat(rowIndex * 0.48 + packetIndex * 0.72, "s"),
          '--packet-width': "".concat(16 + packetIndex * 6, "%")
        }
      });
    })));
  }), /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-lane-shine"
  }));
}

function CompoundMetricHistogram(props) {
  var medianLabel = props.medianLabel;
  var bars = ['18%', '38%', '64%', '86%', '74%', '55%', '36%', '24%', '14%', '9%'];
  return (
    <div className="atela-compound-hist">
      <div className="atela-compound-hist-grid" />
      <div className="atela-compound-hist-bars">
        {bars.map(function (height, index) {
          return (
            <i
              key={index}
              style={{
                height: height,
                animationDelay: "".concat(index * 0.06, "s")
              }}
            />
          );
        })}
      </div>
      <svg
        className="atela-compound-hist-line"
        viewBox="0 0 118 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <path
            id="compound-hist-trend-path"
            d="M4 49 C 20 46, 30 38, 42 36 S 70 18, 114 11"
          />
        </defs>
        <path
          className="atela-compound-hist-trend"
          d="M4 49 C 20 46, 30 38, 42 36 S 70 18, 114 11"
        />
        <circle className="atela-compound-hist-trend-dot" r="3">
          <animateMotion dur="5.4s" repeatCount="indefinite">
            <mpath href="#compound-hist-trend-path" />
          </animateMotion>
        </circle>
      </svg>
      <div className="atela-compound-hist-median">{medianLabel}</div>
    </div>
  );
}

function CompoundMetricRank(props) {
  var rows = props.rows;
  return /*#__PURE__*/React.createElement("div", {
    className: "atela-compound-rank"
  }, rows.map(function (row, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: row.name,
      className: "atela-compound-rank-row"
    }, /*#__PURE__*/React.createElement("span", null, row.name), /*#__PURE__*/React.createElement("div", {
      className: "atela-compound-rank-track"
    }, /*#__PURE__*/React.createElement("em", null), /*#__PURE__*/React.createElement("i", {
      className: row.hero ? 'is-hero' : '',
      style: {
        width: row.width,
        animationDelay: "".concat(index * 0.08, "s")
      }
    })));
  }));
}

function CompoundModelConstellation() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "atela-compound-model-network",
    viewBox: "0 0 180 180",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "compound-model-link",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(198,255,61,0.08)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "45%",
    stopColor: "rgba(198,255,61,0.78)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(99,180,255,0.46)"
  })), /*#__PURE__*/React.createElement("path", {
    id: "compound-model-path-a",
    d: "M40 126 C 62 114, 78 90, 90 64"
  }), /*#__PURE__*/React.createElement("path", {
    id: "compound-model-path-b",
    d: "M90 64 C 98 44, 120 34, 142 46"
  }), /*#__PURE__*/React.createElement("path", {
    id: "compound-model-path-c",
    d: "M90 64 C 100 84, 122 102, 140 118"
  }), /*#__PURE__*/React.createElement("path", {
    id: "compound-model-path-d",
    d: "M90 64 C 76 84, 58 102, 46 122"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "64",
    r: "18",
    className: "atela-compound-model-core"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "64",
    r: "36",
    className: "atela-compound-model-ring"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 126 C 62 114, 78 90, 90 64",
    className: "atela-compound-model-link"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 64 C 98 44, 120 34, 142 46",
    className: "atela-compound-model-link"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 64 C 100 84, 122 102, 140 118",
    className: "atela-compound-model-link"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 64 C 76 84, 58 102, 46 122",
    className: "atela-compound-model-link"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "126",
    r: "7",
    className: "atela-compound-model-node"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "142",
    cy: "46",
    r: "7",
    className: "atela-compound-model-node"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "118",
    r: "7",
    className: "atela-compound-model-node"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "122",
    r: "5.5",
    className: "atela-compound-model-node is-soft"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3.2",
    className: "atela-compound-model-packet"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "4.4s",
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: "#compound-model-path-a"
  }))), /*#__PURE__*/React.createElement("circle", {
    r: "3.2",
    className: "atela-compound-model-packet"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "4.8s",
    begin: "1.1s",
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: "#compound-model-path-b"
  }))), /*#__PURE__*/React.createElement("circle", {
    r: "3.2",
    className: "atela-compound-model-packet"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "4.9s",
    begin: "1.9s",
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: "#compound-model-path-c"
  }))));
}

function CompoundAgentOrbit() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "atela-compound-agent-orbit",
    viewBox: "0 0 180 180",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "compound-agent-path-a",
    d: "M90 28 A62 62 0 1 1 89.9 28"
  }), /*#__PURE__*/React.createElement("path", {
    id: "compound-agent-path-b",
    d: "M90 50 A40 40 0 1 1 89.9 50"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "62",
    className: "atela-compound-agent-ring"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "40",
    className: "atela-compound-agent-ring is-inner"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "20",
    className: "atela-compound-agent-core"
  }), /*#__PURE__*/React.createElement("g", {
    className: "atela-compound-agent-nodes"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "28",
    r: "6",
    className: "atela-compound-agent-node"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "142",
    cy: "58",
    r: "5.5",
    className: "atela-compound-agent-node is-soft"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "146",
    cy: "122",
    r: "6.2",
    className: "atela-compound-agent-node"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "152",
    r: "5.5",
    className: "atela-compound-agent-node is-soft"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "122",
    r: "6.2",
    className: "atela-compound-agent-node"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "58",
    r: "5.5",
    className: "atela-compound-agent-node is-soft"
  })), /*#__PURE__*/React.createElement("circle", {
    r: "3.2",
    className: "atela-compound-agent-packet"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "6.2s",
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: "#compound-agent-path-a"
  }))), /*#__PURE__*/React.createElement("circle", {
    r: "2.8",
    className: "atela-compound-agent-packet is-second"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: "4.8s",
    begin: "0.9s",
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: "#compound-agent-path-b"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M90 90 C 114 72, 128 66, 142 58",
    className: "atela-compound-agent-link"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 90 C 110 106, 126 114, 146 122",
    className: "atela-compound-agent-link"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 90 C 72 108, 56 114, 36 122",
    className: "atela-compound-agent-link"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 90 C 70 72, 56 64, 38 58",
    className: "atela-compound-agent-link"
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
  var metrics = copy.metrics;
  var modelCards = copy.modelCards;
  var v1Cards = copy.v1Cards;
  var optimizedCards = copy.optimizedCards;
  var subHighlight = copy.subHighlight;
  var subBody = copy.subBody;
  var wrapperRef = React.useRef(null);
  var sectionRef = React.useRef(null);
  var spacerRef = React.useRef(null);
  var trackRef = React.useRef(null);
  var svgRef = React.useRef(null);
  var colRefs = React.useRef([]);
  var featuredCols = React.useRef(new Set([3, 4]));

  React.useEffect(function () {
    var wrapper = wrapperRef.current;
    var section = sectionRef.current;
    var spacer = spacerRef.current;
    var track = trackRef.current;
    var svg = svgRef.current;
    var layoutSnapshot = [];
    var trackPaddingX = 150;
    var desktopLayout = [{
      width: 246,
      gap: 128
    }, {
      width: 228,
      gap: 392
    }, {
      width: 360,
      gap: 190
    }, {
      width: 236,
      gap: 150
    }, {
      width: 244,
      gap: 210
    }, {
      width: 236,
      gap: 290
    }, {
      width: 236,
      gap: 0
    }];
    if (!wrapper || !section || !spacer || !track || !svg) return;

    function measureLayout() {
      var left = trackPaddingX;
      layoutSnapshot = desktopLayout.map(function (slot) {
        var next = {
          left: left,
          width: slot.width,
          center: left + slot.width / 2
        };
        left += slot.width + slot.gap;
        return next;
      });
    }

    function columnCenters() {
      return layoutSnapshot.map(function (node) {
        return node ? node.center : 0;
      });
    }

    function columnRange(startIndex, endIndex) {
      var first = layoutSnapshot[startIndex];
      var last = layoutSnapshot[endIndex];
      if (!first || !last) return null;
      return {
        left: first.left,
        right: last.left + last.width
      };
    }

    function fitRange(range, sectionWidth, leadRatio, leadMin, leadMax, trailRatio, trailMin, trailMax) {
      if (!range) return 0;
      var lead = Math.max(leadMin, Math.min(sectionWidth * leadRatio, leadMax));
      var trail = Math.max(trailMin, Math.min(sectionWidth * trailRatio, trailMax));
      var minOffset = lead - range.left;
      var maxOffset = sectionWidth - trail - range.right;
      return (minOffset + maxOffset) / 2;
    }

    function desktopMetrics(sectionWidth) {
      var centers = columnCenters();
      var start = centers[0] || 0;
      var end = centers[centers.length - 1] || 0;
      var exitRange = columnRange(6, 6);
      var entryAnchor = sectionWidth * 0.5;
      var entryOffset = entryAnchor - start;
      var exitOffset = exitRange ? fitRange(exitRange, sectionWidth, 0.22, 220, 340, 0.12, 120, 220) : Math.max(sectionWidth * 0.58, sectionWidth - 520) - end;
      var travel = Math.max(0, entryOffset - exitOffset);
      return {
        centers: centers,
        start: start,
        end: end,
        travel: travel,
        entryOffset: entryOffset,
        exitOffset: exitOffset
      };
    }

    function updateSpacer() {
      if (window.innerWidth < 900) {
        spacer.style.height = '0px';
        return;
      }
      measureLayout();
      var travel = desktopMetrics(section.clientWidth).travel;
      var extra = Math.max(window.innerHeight * 0.48, 420);
      spacer.style.height = "".concat(Math.ceil(travel + extra), "px");
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
      var pathId = "compound-flow-".concat(stage, "-").concat(Math.round(from.x), "-").concat(Math.round(to.x), "-").concat(Math.round(from.y), "-").concat(Math.round(to.y));
      path.setAttribute('d', d);
      path.setAttribute('id', pathId);
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
        path.setAttribute('stroke', 'rgb(198,255,61)');
        path.setAttribute('stroke-width', '2.2');
      } else {
        path.setAttribute('stroke', "rgba(198,255,61,".concat((0.14 + 0.54 * local).toFixed(2), ")"));
        path.setAttribute('stroke-width', '1.6');
      }
      if (local > 0.34) {
        Array.from({
          length: stage >= 4 ? 2 : 1
        }).forEach(function (_, index) {
          var packet = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          var motion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
          var mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
          packet.setAttribute('r', index === 0 ? '2.9' : '2.3');
          packet.setAttribute('class', 'atela-compound-flow-packet'.concat(index === 1 ? ' is-soft' : ''));
          motion.setAttribute('dur', "".concat(4.8 + stage * 0.42, "s"));
          motion.setAttribute('repeatCount', 'indefinite');
          motion.setAttribute('rotate', 'auto');
          if (index > 0) motion.setAttribute('begin', "".concat(0.72 + stage * 0.08, "s"));
          mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#".concat(pathId));
          mpath.setAttribute('href', "#".concat(pathId));
          motion.appendChild(mpath);
          packet.appendChild(motion);
          svgRoot.appendChild(packet);
        });
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
      var perfData = track.querySelector('[data-node="performance"]');
      var modelNodes = Array.from(track.querySelectorAll('[data-node="model"]'));
      var ideation = track.querySelector('[data-node="ideation"]');
      var variants = track.querySelector('[data-node="variants"]');

      drawCurve(svg, pointFromSide(input, 'right', bounds), pointFromSide(fan, 'left', bounds), 0, progress);
      channels.forEach(function (node) {
        return drawCurve(svg, pointFromSide(fan, 'right', bounds), pointFromStack(node, 'left', stack, bounds), 1, progress);
      });
      channels.forEach(function (node) {
        return drawCurve(svg, pointFromStack(node, 'right', stack, bounds), pointFromSide(perfData, 'left', bounds), 2, progress);
      });
      modelNodes.forEach(function (node) {
        return drawCurve(svg, pointFromSide(perfData, 'right', bounds), pointFromSide(node, 'left', bounds), 3, progress);
      });
      modelNodes.forEach(function (node) {
        return drawCurve(svg, pointFromSide(node, 'right', bounds), pointFromSide(ideation, 'left', bounds), 4, progress);
      });
      drawCurve(svg, pointFromSide(ideation, 'right', bounds), pointFromSide(variants, 'left', bounds), 5, progress);
    }

    function updateDesktop() {
      if (window.innerWidth < 900) {
        track.style.transform = '';
        return;
      }
      var spacerHeight = spacer.offsetHeight || 1;
      var wrapperPaddingTop = parseFloat(window.getComputedStyle(wrapper).paddingTop || '0');
      var progress = Math.max(0, Math.min(1, (60 - (wrapper.getBoundingClientRect().top + wrapperPaddingTop)) / spacerHeight));
      var sectionWidth = section.clientWidth;
      var metrics = desktopMetrics(sectionWidth);
      var centers = metrics.centers;
      var offset = metrics.entryOffset - progress * metrics.travel;
      track.style.transform = "translateX(".concat(offset, "px)");

      var focusWidth = 0.26 * sectionWidth;
      function fanProgress(anchorIndex) {
        var local = centers[anchorIndex] + offset - sectionWidth / 2;
        if (local >= 0) return 0;
        if (local <= -focusWidth) return 1;
        return -local / focusWidth;
      }

      colRefs.current.forEach(function (col, index) {
        if (!col) return;
        var emphasis = Math.max(0, 1 - Math.abs(centers[index] + offset - sectionWidth / 2) / focusWidth);
        var targetScale = index === 4 ? 1 : featuredCols.current.has(index) ? 1.16 : 1.08;
        var scale = 0.92 + emphasis * (targetScale - 0.92);
        var opacity = 0.32 + 0.68 * emphasis;
        col.style.transform = "scale(".concat(scale.toFixed(3), ")");
        col.style.opacity = opacity.toFixed(3);
        col.style.setProperty('--col-t', emphasis.toFixed(3));
      });

      var v1 = colRefs.current[1];
      var variantsCol = colRefs.current[6];
      if (v1) v1.style.setProperty('--fan-t', fanProgress(0).toFixed(3));
      if (variantsCol) variantsCol.style.setProperty('--fan-t', fanProgress(5).toFixed(3));
      drawDesktopLinks(progress);
    }

    var raf = 0;
    function requestTick() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateDesktop);
    }

    function handleResize() {
      measureLayout();
      updateSpacer();
      updateDesktop();
    }

    measureLayout();
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

  return (
    <div ref={wrapperRef} id="compound-loop" className="atela-compound-wrapper">
      <section ref={sectionRef} className="atela-compound-section">
        <div className="atela-compound-header">
          <span className="atela-eyebrow atela-compound-eyebrow">{copy.eyebrow}</span>
          <h2 className="atela-compound-headline">
            {copy.headlineLead} <em>{copy.headlineEmphasis}</em>
          </h2>
          <p className="atela-compound-sub">
            {subHighlight || subBody ? (
              <>
                {subHighlight ? <strong className="atela-compound-sub-highlight">{subHighlight}</strong> : null}
                {subBody ? <span className="atela-compound-sub-rest">{subBody}</span> : null}
              </>
            ) : copy.sub}
          </p>
        </div>

        <div className="atela-compound-desk">
          <svg ref={svgRef} className="atela-compound-svg" preserveAspectRatio="none" />

          <div className="atela-compound-hscroll">
            <div ref={trackRef} className="atela-compound-track">
              <div
                ref={function ref(node) {
                  colRefs.current[0] = node;
                }}
                className="atela-compound-col atela-compound-col-input"
              >
                <div className="atela-compound-colhead atela-compound-colhead-brief">{copy.labels.creative}</div>
                <div className="atela-compound-input-card" data-node="input" data-card>
                  <div className="atela-compound-input-shell">
                    <div className="atela-compound-input-body">
                      {copy.inputKicker ? <span className="atela-compound-input-kicker">{copy.inputKicker}</span> : null}
                      <strong className="atela-compound-input-title">{copy.briefTitle}</strong>
                      <p className="atela-compound-input-copy">{copy.briefCopy}</p>
                    </div>
                    <div className="atela-compound-input-tags">
                      {copy.inputTags.map(function (tag) {
                        return <span key={tag}>{tag}</span>;
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={function ref(node) {
                  colRefs.current[1] = node;
                }}
                className="atela-compound-col atela-compound-col-v1"
              >
                <div className="atela-compound-output-label">{copy.labels.v1}</div>
                <div className="atela-compound-fan atela-compound-fan-small">
                  {v1Cards.map(function (card, index) {
                    return (
                      <div
                        key={"".concat(card.kicker, "-").concat(index)}
                        className="atela-compound-fan-card"
                        data-node={index === 0 ? 'fan1' : undefined}
                        data-card={index === 0 ? true : undefined}
                      >
                        <CompoundThumb card={card} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                ref={function ref(node) {
                  colRefs.current[2] = node;
                }}
                className="atela-compound-col atela-compound-col-content"
              >
                <div className="atela-compound-colhead">{copy.labels.distribution}</div>
                <div className="atela-compound-channel-grid" data-stack="content">
                  {channelCards.map(function (card) {
                    return (
                      <div key={card.title} className="atela-compound-channel-card" data-node="content" data-card>
                        <div className="atela-compound-channel-media">
                          <CompoundChannelVisual glyph={card.glyph} tone={card.tone} title={card.title} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                ref={function ref(node) {
                  colRefs.current[3] = node;
                }}
                className="atela-compound-col atela-compound-col-data"
              >
                <div className="atela-compound-colhead">{copy.labels.performance}</div>
                <div className="atela-compound-perf-card" data-node="performance" data-card>
                  <div className="atela-compound-perf-grid">
                    <div className="atela-compound-perf-box">
                      <CompoundMetricKpi copy={metrics} />
                    </div>
                    <div className="atela-compound-perf-box">
                      <CompoundMetricLanes labels={metrics.lanes} />
                    </div>
                    <div className="atela-compound-perf-box">
                      <CompoundMetricHistogram medianLabel={metrics.median} />
                    </div>
                    <div className="atela-compound-perf-box">
                      <CompoundMetricRank rows={metrics.rankRows} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={function ref(node) {
                  colRefs.current[4] = node;
                }}
                className="atela-compound-col atela-compound-col-model"
              >
                <div className="atela-compound-colhead">{copy.labels.training}</div>
                <div className="atela-compound-model-stack">
                  {modelCards.map(function (card) {
                    return (
                      <div key={card.title} className="atela-compound-model-card" data-node="model" data-card>
                        <div className={"atela-compound-model-visual ".concat(card.icon === 'agent' ? 'is-agent' : 'is-model')}>
                          {card.icon === 'agent' ? <CompoundAgentOrbit /> : <CompoundModelConstellation />}
                        </div>
                        <div className="atela-compound-model-copy">
                          <div className="atela-compound-model-title">{card.title}</div>
                          <div className="atela-compound-model-desc">{card.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                ref={function ref(node) {
                  colRefs.current[5] = node;
                }}
                className="atela-compound-col atela-compound-col-ideation"
              >
                <div className="atela-compound-colhead">{copy.labels.ideation}</div>
                <div className="atela-compound-ideation-card" data-node="ideation" data-card>
                  <div className="atela-compound-ideation-grid">
                    {copy.ideationCells.map(function (label) {
                      return (
                        <div key={label} className="atela-compound-ideation-cell">
                          <span>{label}</span>
                          <i />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                ref={function ref(node) {
                  colRefs.current[6] = node;
                }}
                className="atela-compound-col atela-compound-col-variants"
              >
                <div className="atela-compound-colhead">{copy.labels.variants}</div>
                <div className="atela-compound-variant-wrap">
                  <div className="atela-compound-variant-base" data-node="variants" data-card>
                    <div className="atela-compound-variant-pulse" />
                    <div className="atela-compound-variant-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="atela-compound-fan atela-compound-fan-small atela-compound-fan-overlay">
                    {optimizedCards.map(function (card, index) {
                      return (
                        <div key={"".concat(card.kicker, "-").concat(index)} className="atela-compound-fan-card">
                          <CompoundThumb card={card} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="atela-compound-mobile">
          <div className="atela-compound-mobile-grid">
            {copy.mobileCards.map(function (card, index) {
              return (
                <article
                  key={card.title}
                  className={"atela-compound-mobile-card".concat(index === copy.mobileCards.length - 1 ? ' is-highlight' : '')}
                >
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div ref={spacerRef} className="atela-compound-spacer" aria-hidden="true" />
    </div>
  );
}

window.CompoundLoop = CompoundLoop;
