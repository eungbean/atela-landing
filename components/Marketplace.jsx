// Expert Marketplace — on-demand AI specialists.
const MARKETPLACE_SPECIALTY_ROWS = [
  [
    { id: 'ad-creative', label: 'Ad Creative', bg: '#DAF277', fg: '#16210F' },
    { id: 'social-assets', label: 'Social Assets', bg: '#C9E2FB', fg: '#233645' },
    { id: 'video-production', label: 'Video Production', bg: '#2C2528', fg: '#F4B8D4' },
  ],
  [
    { id: 'photography', label: 'Photography', bg: '#EEF0DD', fg: '#223021' },
    { id: 'motion-graphics', label: 'Motion Graphics', bg: '#F7EDD7', fg: '#272117' },
    { id: 'presentations', label: 'Presentations', bg: '#0B2A28', fg: '#DFF688' },
  ],
  [
    { id: 'web-ui-design', label: 'Web & UI Design', bg: '#DCF280', fg: '#142111' },
    { id: 'ooh-fake-ooh', label: 'OOH & Fake OOH', bg: '#2E5C53', fg: '#D9F2D2' },
    { id: 'illustration', label: 'Illustration', bg: '#C8E1FB', fg: '#233748' },
    { id: 'email-design', label: 'Email Design', bg: '#20698A', fg: '#EDF8FF' },
  ],
  [
    { id: 'brand-strategy', label: 'Brand Strategy', bg: '#F4E7D0', fg: '#2A2418' },
    { id: 'three-d-design', label: '3D Design', bg: '#35594E', fg: '#DCF0D2' },
    { id: 'copywriting', label: 'Copywriting', bg: '#F7ECD9', fg: '#231D16' },
    { id: 'ai-consulting', label: 'AI Consulting', bg: '#2F252B', fg: '#F5AEBB' },
  ],
  [
    { id: 'campaign-development', label: 'Campaign Development', bg: '#DAF277', fg: '#16210F' },
    { id: 'ai-enhanced-creative', label: 'AI Enhanced Creative', bg: '#C5E0FB', fg: '#223646' },
    { id: 'and-more', label: '...and more', bg: '#EFF1DF', fg: '#2A2D1C' },
  ],
];

const MARKETPLACE_EXPERT_LAYOUT = [
  { x: '81%', y: '19.5%' },
  { x: '75%', y: '37.5%' },
  { x: '87%', y: '53.5%' },
  { x: '79%', y: '72.5%' },
];

const MARKETPLACE_FLOW_WIRES = [
  { id: 'market-wire-1', d: 'M198 188 C 288 194, 372 220, 458 252', x1: '198', y1: '188', x2: '458', y2: '252' },
  { id: 'market-wire-2', d: 'M202 236 C 296 242, 376 254, 460 268', x1: '202', y1: '236', x2: '460', y2: '268' },
  { id: 'market-wire-3', d: 'M208 286 C 308 288, 384 288, 462 284', x1: '208', y1: '286', x2: '462', y2: '284' },
  { id: 'market-wire-4', d: 'M208 338 C 308 330, 386 318, 462 300', x1: '208', y1: '338', x2: '462', y2: '300' },
  { id: 'market-wire-5', d: 'M214 388 C 314 368, 390 342, 464 318', x1: '214', y1: '388', x2: '464', y2: '318' },
  { id: 'market-wire-6', d: 'M534 252 C 622 224, 706 186, 810 142', x1: '534', y1: '252', x2: '810', y2: '142' },
  { id: 'market-wire-7', d: 'M536 272 C 620 262, 688 248, 752 242', x1: '536', y1: '272', x2: '752', y2: '242' },
  { id: 'market-wire-8', d: 'M536 292 C 636 314, 736 324, 872 332', x1: '536', y1: '292', x2: '872', y2: '332' },
  { id: 'market-wire-9', d: 'M532 310 C 618 360, 700 406, 792 438', x1: '532', y1: '310', x2: '792', y2: '438' },
];

function getMarketplaceAccentTextColor(color) {
  return ['#C6FF3D', '#E8D5B0', '#FFB020'].includes(color) ? '#0A0A0A' : '#fff';
}

function getMarketplaceExpertRole(spec) {
  if (!spec) return 'Expert';
  return spec.split('·')[0].trim();
}

function Marketplace() {
  const copy = window.atelaGetCopySection('marketplace');
  const currentLocale = window.atelaGetCurrentLocale ? window.atelaGetCurrentLocale() : 'ko';
  const experts = copy.experts.slice(0, MARKETPLACE_EXPERT_LAYOUT.length);
  const motionPills = copy.motionPills || MARKETPLACE_SPECIALTY_ROWS.flat().map((item) => item.label);
  let motionPillIndex = 0;
  const specialtyRows = MARKETPLACE_SPECIALTY_ROWS.map((row) => (
    row.map((item) => {
      const next = {
        ...item,
        displayLabel: motionPills[motionPillIndex] || item.label,
        delay: `${motionPillIndex * 0.08}s`,
      };
      motionPillIndex += 1;
      return next;
    })
  ));
  const motionAriaLabel = currentLocale === 'ko'
    ? 'ATELA 전문가 매칭 모션 그래픽'
    : 'ATELA expert matching motion graphic';

  return (
    <section id="marketplace" className="atela-market">
      <div className="atela-container">
        <div className="atela-market-head">
          <div>
            <span className="atela-eyebrow" style={{color:'#C6FF3D'}}>{copy.eyebrow}</span>
            <h2 className="atela-h2" style={{color:'#fff'}}>
              {copy.titlePrefix}<br/>
              <span className="hl" style={{background:'#C6FF3D', color:'#0A0A0A'}}>{copy.titleHighlight}</span>{copy.titleSuffix}
            </h2>
          </div>
          <p className="atela-market-lede">
            {copy.lede}<b>{copy.ledeStrong}</b>
          </p>
        </div>

        <div className="atela-market-motion" role="img" aria-label={motionAriaLabel}>
          <div className="market-motion-frame">
            <div className="market-motion-orb market-motion-orb-left" aria-hidden="true"/>
            <div className="market-motion-orb market-motion-orb-right" aria-hidden="true"/>
            <div className="market-motion-stage">
              <svg
                className="market-motion-lines"
                viewBox="0 0 1000 560"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  {MARKETPLACE_FLOW_WIRES.map((wire) => (
                    <linearGradient
                      key={wire.id}
                      id={wire.id}
                      x1={wire.x1}
                      y1={wire.y1}
                      x2={wire.x2}
                      y2={wire.y2}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#C6FF3D" stopOpacity="0"/>
                      <stop offset="8%" stopColor="#C6FF3D" stopOpacity="0.65"/>
                      <stop offset="18%" stopColor="#C6FF3D" stopOpacity="0.92"/>
                      <stop offset="50%" stopColor="#C6FF3D" stopOpacity="1"/>
                      <stop offset="82%" stopColor="#C6FF3D" stopOpacity="0.92"/>
                      <stop offset="92%" stopColor="#C6FF3D" stopOpacity="0.65"/>
                      <stop offset="100%" stopColor="#C6FF3D" stopOpacity="0"/>
                    </linearGradient>
                  ))}
                </defs>
                {MARKETPLACE_FLOW_WIRES.map((wire, index) => (
                  <g key={wire.id}>
                    <path
                      className="market-motion-line-base"
                      d={wire.d}
                      stroke={`url(#${wire.id})`}
                    />
                    <path
                      className="market-motion-line-flow"
                      d={wire.d}
                      stroke={`url(#${wire.id})`}
                      style={{animationDelay: `${index * 0.14}s`}}
                    />
                  </g>
                ))}
              </svg>

              <div className="market-motion-layer market-motion-layer-left" aria-hidden="true">
                <div className="market-motion-pill-stack">
                  {specialtyRows.map((row, rowIndex) => (
                    <div key={`pill-row-${rowIndex + 1}`} className="market-motion-pill-row">
                      {row.map((item) => (
                        <div
                          key={item.id}
                          className="market-motion-chip"
                          style={{
                            '--chip-bg': item.bg,
                            '--chip-fg': item.fg,
                            '--node-delay': item.delay,
                          }}
                        >
                          <span className="market-motion-chip-label">{item.displayLabel}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="market-motion-hub" aria-hidden="true">
                <span className="market-motion-hub-ring market-motion-hub-ring-a"/>
                <span className="market-motion-hub-ring market-motion-hub-ring-b"/>
                <div className="market-motion-brand">
                  <span className="market-motion-brand-word">ATELA</span>
                  <span className="market-motion-brand-dot"/>
                </div>
              </div>

              <div className="market-motion-layer market-motion-layer-right" aria-hidden="true">
                {experts.map((expert, index) => {
                  const layout = MARKETPLACE_EXPERT_LAYOUT[index];
                  return (
                    <div
                      key={expert.n}
                      className="market-motion-expert"
                      style={{
                        left: layout.x,
                        top: layout.y,
                        '--node-delay': `${0.92 + index * 0.16}s`,
                      }}
                    >
                      <span
                        className="market-motion-expert-avatar"
                        style={{
                          background: expert.color,
                          color: getMarketplaceAccentTextColor(expert.color),
                        }}
                      >
                        {expert.h}
                      </span>
                      <span className="market-motion-expert-role">{getMarketplaceExpertRole(expert.spec)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="atela-market-flow">
          {copy.flow.map((item, index) => (
            <React.Fragment key={item.step}>
              <div className="flow-col">
                <div className="flow-num">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
              {index < copy.flow.length - 1 ? <div className="flow-arrow">→</div> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Marketplace = Marketplace;
