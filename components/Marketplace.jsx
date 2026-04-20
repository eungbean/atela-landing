// Expert Marketplace — on-demand AI specialists.
const MARKETPLACE_SPECIALTY_PILLS = [
  {
    label: 'Ad Creative',
    x: '3%',
    y: '8.8%',
    bg: '#DAF277',
    fg: '#16210F',
  },
  { label: 'Social Assets', x: '12.1%', y: '8.8%', bg: '#C9E2FB', fg: '#233645' },
  { label: 'Video Production', x: '21.9%', y: '8.8%', bg: '#2C2528', fg: '#F4B8D4' },
  {
    label: 'Photography',
    x: '3%',
    y: '19.1%',
    bg: '#EEF0DD',
    fg: '#223021',
  },
  {
    label: 'Motion Graphics',
    x: '10.5%',
    y: '19.1%',
    bg: '#F7EDD7',
    fg: '#272117',
  },
  { label: 'Presentations', x: '20.6%', y: '19.1%', bg: '#0B2A28', fg: '#DFF688' },
  { label: 'Web & UI Design', x: '29.6%', y: '19.1%', bg: '#DCF280', fg: '#142111' },
  { label: 'OOH & Fake OOH', x: '3%', y: '29.4%', bg: '#2E5C53', fg: '#D9F2D2' },
  { label: 'Illustration', x: '15.4%', y: '29.4%', bg: '#C8E1FB', fg: '#233748' },
  {
    label: 'Email Design',
    x: '23.2%',
    y: '29.4%',
    bg: '#20698A',
    fg: '#EDF8FF',
  },
  { label: 'Brand Strategy', x: '3%', y: '39.7%', bg: '#F4E7D0', fg: '#2A2418' },
  {
    label: '3D Design',
    x: '11.8%',
    y: '39.7%',
    bg: '#35594E',
    fg: '#DCF0D2',
  },
  { label: 'Copywriting', x: '20.1%', y: '39.7%', bg: '#F7ECD9', fg: '#231D16' },
  { label: 'AI Consulting', x: '28.4%', y: '39.7%', bg: '#2F252B', fg: '#F5AEBB' },
  { label: 'Campaign Development', x: '3%', y: '50%', bg: '#DAF277', fg: '#16210F' },
  {
    label: 'AI Enhanced Creative',
    x: '13.6%',
    y: '50%',
    bg: '#C5E0FB',
    fg: '#223646',
  },
  { label: '...and more', x: '33.6%', y: '50%', bg: '#EFF1DF', fg: '#2A2D1C' },
];

const MARKETPLACE_EXPERT_LAYOUT = [
  { x: '81%', y: '16%' },
  { x: '75%', y: '34%' },
  { x: '87%', y: '50%' },
  { x: '79%', y: '69%' },
];

const MARKETPLACE_FLOW_WIRES = [
  { id: 'market-wire-1', d: 'M150 78 C 252 102, 356 166, 458 242', x1: '150', y1: '78', x2: '458', y2: '242' },
  { id: 'market-wire-2', d: 'M154 142 C 266 180, 364 228, 460 264', x1: '154', y1: '142', x2: '460', y2: '264' },
  { id: 'market-wire-3', d: 'M156 206 C 270 234, 366 266, 462 284', x1: '156', y1: '206', x2: '462', y2: '284' },
  { id: 'market-wire-4', d: 'M160 270 C 276 286, 370 300, 462 302', x1: '160', y1: '270', x2: '462', y2: '302' },
  { id: 'market-wire-5', d: 'M166 334 C 286 334, 378 328, 464 320', x1: '166', y1: '334', x2: '464', y2: '320' },
  { id: 'market-wire-7', d: 'M534 258 C 622 216, 706 164, 808 130', x1: '534', y1: '258', x2: '808', y2: '130' },
  { id: 'market-wire-8', d: 'M536 278 C 628 256, 714 236, 824 214', x1: '536', y1: '278', x2: '824', y2: '214' },
  { id: 'market-wire-9', d: 'M536 298 C 632 314, 718 336, 838 370', x1: '536', y1: '298', x2: '838', y2: '370' },
  { id: 'market-wire-10', d: 'M532 316 C 618 364, 700 424, 810 472', x1: '532', y1: '316', x2: '810', y2: '472' },
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
  const motionPills = copy.motionPills || MARKETPLACE_SPECIALTY_PILLS.map((item) => item.label);
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
                      <stop offset="14%" stopColor="#C6FF3D" stopOpacity="0.28"/>
                      <stop offset="50%" stopColor="#C6FF3D" stopOpacity="0.92"/>
                      <stop offset="86%" stopColor="#C6FF3D" stopOpacity="0.28"/>
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
                {MARKETPLACE_SPECIALTY_PILLS.map((item, index) => (
                  <div
                    key={item.label}
                    className="market-motion-chip"
                    style={{
                      left: item.x,
                      top: item.y,
                      '--chip-bg': item.bg,
                      '--chip-fg': item.fg,
                      '--node-delay': `${index * 0.08}s`,
                    }}
                  >
                    <span className="market-motion-chip-label">{motionPills[index] || item.label}</span>
                  </div>
                ))}
              </div>

              <div className="market-motion-hub" aria-hidden="true">
                <span className="market-motion-hub-ring market-motion-hub-ring-a"/>
                <span className="market-motion-hub-ring market-motion-hub-ring-b"/>
                <div className="market-motion-brand">
                  <span className="atela-demo-logo-word">ATELA</span>
                  <span className="atela-demo-logo-dot">.</span>
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
