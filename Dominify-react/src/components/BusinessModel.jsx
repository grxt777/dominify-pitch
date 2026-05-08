import React from 'react';

const BusinessModel = () => {
  return (
    <section id="bizmodel">
      <div className="section-label">Business Model <span>/ 05</span></div>
      <h2 className="section-title">B2B SAAS FOR<br />FINANCIAL INSTITUTIONS</h2>

      <div className="biz-grid fade-up">
        <div className="biz-row">
          <div className="biz-num">01</div>
          <div className="biz-content">
            <div className="biz-title">Implementation Fee</div>
            <p className="biz-desc">One-time per bank. Data pipeline setup, model training on real transactions, dashboard deployment, internal systems integration and staff onboarding.</p>
          </div>
          <div className="biz-price">
            <span className="biz-price-n">$15–20K</span>
            <span className="biz-price-l">per bank</span>
          </div>
        </div>
        <div className="biz-row">
          <div className="biz-num">02</div>
          <div className="biz-content">
            <div className="biz-title">Annual License</div>
            <p className="biz-desc">SaaS subscription. Hosting and infrastructure, quarterly model retraining, technical support, feature updates and prediction quality monitoring.</p>
          </div>
          <div className="biz-price">
            <span className="biz-price-n">$5–8K</span>
            <span className="biz-price-l">per year</span>
          </div>
        </div>
        <div className="biz-row">
          <div className="biz-num">03</div>
          <div className="biz-content">
            <div className="biz-title">Module Expansion</div>
            <p className="biz-desc">Cash desk management for branch liquidity. White-label version for resale. Multi-region and multi-currency deployment.</p>
          </div>
          <div className="biz-price">
            <span className="biz-price-n">Custom</span>
            <span className="biz-price-l">per scope</span>
          </div>
        </div>
      </div>

      <div className="unit-econ fade-up">
        <div className="unit-item">
          <span className="unit-n">$35.5K</span>
          <span className="unit-l">LTV per client · 3 years</span>
        </div>
        <div className="unit-item">
          <span className="unit-n">$2–3K</span>
          <span className="unit-l">Customer acquisition cost</span>
        </div>
        <div className="unit-item">
          <span className="unit-n">~12×</span>
          <span className="unit-l">LTV / CAC ratio</span>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
