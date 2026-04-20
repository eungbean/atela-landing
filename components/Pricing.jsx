const PRICING_RECEIPT_BREAKPOINT = 1180;
const PRICING_RECEIPT_REVEAL_DISTANCE = 220;

function clampPricingProgress(value) {
  return Math.min(1, Math.max(0, value));
}

function renderPricingAmount(price, extraClassName = '') {
  return (
    <div className={extraClassName}>
      {price.prefix ? <span className="cur">{price.prefix}</span> : null}
      {price.amount}
      {price.suffix ? <span className="per">{price.suffix}</span> : null}
    </div>
  );
}

// Pricing — primary AI tools subscription with an add-on expert receipt reveal.
function Pricing() {
  const copy = window.atelaGetCopySection('pricing');
  const storyRef = React.useRef(null);
  const [billingPeriod, setBillingPeriod] = React.useState('annual');

  React.useEffect(() => {
    let frameId = 0;

    const updateReceiptReveal = () => {
      frameId = 0;

      const storyEl = storyRef.current;
      if (!storyEl) return;

      const progress = window.innerWidth <= PRICING_RECEIPT_BREAKPOINT
        ? 1
        : clampPricingProgress((142 - storyEl.getBoundingClientRect().top) / PRICING_RECEIPT_REVEAL_DISTANCE);

      storyEl.style.setProperty('--receipt-progress', progress.toFixed(3));
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateReceiptReveal);
    };

    updateReceiptReveal();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section id="pricing" className="atela-pricing">
      <div className="atela-container">
        <div className="atela-section-head center">
          <span className="atela-eyebrow" style={{color:'#C6FF3D'}}>{copy.eyebrow}</span>
          <h2 className="atela-h2" style={{color:'#fff'}}>{copy.title}</h2>
        </div>

        <div ref={storyRef} className="pricing-story">
          <div className="pricing-tools-stage">
            <div className="price-side price-side-tools">
              <div className="price-side-head price-side-head-tools">
                <div className="pricing-billing-bar">
                  <div className="pricing-billing-toggle" role="tablist" aria-label={copy.billingAriaLabel}>
                    <button
                      type="button"
                      className={`pricing-billing-option${billingPeriod === 'monthly' ? ' is-active' : ''}`}
                      aria-pressed={billingPeriod === 'monthly' ? 'true' : 'false'}
                      onClick={() => setBillingPeriod('monthly')}
                    >
                      {copy.billingMonthly}
                    </button>
                    <button
                      type="button"
                      className={`pricing-billing-option${billingPeriod === 'annual' ? ' is-active' : ''}`}
                      aria-pressed={billingPeriod === 'annual' ? 'true' : 'false'}
                      onClick={() => setBillingPeriod('annual')}
                    >
                      {copy.billingAnnual}
                    </button>
                  </div>
                  <span className="pricing-billing-badge">{copy.billingBadge}</span>
                </div>
              </div>
              <div className="price-tier-grid price-tier-grid-primary">
                {copy.toolsTiers.map((tier) => {
                  const activePrice = tier.prices[billingPeriod];

                  return (
                    <div key={tier.name} className={`atela-price${tier.dark ? ' dark' : ''}${tier.featured ? ' featured' : ''}`}>
                    {tier.badge ? <span className="atela-price-badge">{tier.badge}</span> : null}
                    <h3>{tier.name}</h3>
                    <div className="atela-price-stack">
                      {activePrice.originalAmount ? renderPricingAmount({
                        prefix: activePrice.originalPrefix || activePrice.prefix,
                        amount: activePrice.originalAmount,
                        suffix: activePrice.originalSuffix || activePrice.suffix,
                      }, 'atela-price-strike') : <div className="atela-price-strike-spacer" aria-hidden="true" />}
                      {renderPricingAmount(activePrice, 'atela-price-amt')}
                      {activePrice.note ? <div className="atela-price-note">{activePrice.note}</div> : null}
                    </div>
                    <ul>
                      {tier.features.map((feature) => (
                        <li key={feature}>— {feature}</li>
                      ))}
                    </ul>
                  </div>
                  );
                })}
              </div>
            </div>

            <div className="pricing-receipt-stage">
              <div className="price-side market pricing-market-receipt">
                <div className="price-side-head pricing-market-head">
                  <h3 style={{color:'#0A0A0A', margin: 0}}>{copy.marketTitle}</h3>
                  <p className="pricing-market-subtitle">{copy.marketSubtitle}</p>
                </div>
                <div className="market-price-card">
                  {copy.marketRows.map((row, index) => (
                    <div key={row.label} className={`market-price-row${index === copy.marketRows.length - 1 ? ' last' : ''}`}>
                      <span>{row.label}</span>
                      <b>{row.value}</b>
                    </div>
                  ))}
                  <div className="market-price-foot">
                    <div className="market-price-meta">
                      <b style={{fontSize:14}}>{copy.guarantee}</b>
                      <span className="mono-note" style={{color:'#0A0A0A', opacity: 0.6}}>{copy.subnote}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
