import React from 'react';

const Market = () => {
  return (
    <section id="market">
      <div className="section-label">Market <span>/ 04</span></div>
      <h2 className="section-title">LARGE MARKET.<br />ZERO COMPETITION.</h2>

      <div className="market-grid fade-up">
        <div className="market-col">
          <div className="market-col-tag">Uzbekistan — Now</div>
          <div className="market-row">
            <span className="market-row-n">30+</span>
            <span className="market-row-l">commercial banks</span>
          </div>
          <div className="market-row">
            <span className="market-row-n">~3,000</span>
            <span className="market-row-l">ATMs nationwide</span>
          </div>
          <div className="market-row">
            <span className="market-row-n">0</span>
            <span className="market-row-l">predictive cash management systems</span>
          </div>
          <div className="market-row">
            <span className="market-row-n">$450K</span>
            <span className="market-row-l">TAM implementation fees only</span>
          </div>
        </div>
        <div className="market-col">
          <div className="market-col-tag">Central Asia — Next</div>
          <div className="market-row">
            <span className="market-row-n">KZ</span>
            <span className="market-row-l">Kazakhstan · 700+ banks · same problem</span>
          </div>
          <div className="market-row">
            <span className="market-row-n">KG</span>
            <span className="market-row-l">Kyrgyzstan · emerging fintech market</span>
          </div>
          <div className="market-row">
            <span className="market-row-n">TJ</span>
            <span className="market-row-l">Tajikistan · underserved · high cash usage</span>
          </div>
          <div className="market-row" style={{ borderBottom: 'none' }}>
            <span className="market-row-n" style={{ fontSize: '18px', lineHeight: '1.4' }}>Shared cultural calendar — Navro'z, Ramadan, salary cycles. One model. Five markets.</span>
          </div>
        </div>
      </div>

      <div className="tam-row fade-up">
        <div className="tam-item">
          <span className="tam-tag">TAM</span>
          <span className="tam-n">$2M+</span>
          <span className="tam-sub">Central Asia</span>
        </div>
        <div className="tam-item">
          <span className="tam-tag">SAM</span>
          <span className="tam-n">$500K</span>
          <span className="tam-sub">Uzbekistan · 3 yrs</span>
        </div>
        <div className="tam-item">
          <span className="tam-tag">SOM</span>
          <span className="tam-n">$150K</span>
          <span className="tam-sub">Year one · 3–5 banks</span>
        </div>
      </div>
    </section>
  );
};

export default Market;
