import React from 'react';

const Solution = () => {
  return (
    <section id="solution">
      <div className="section-label">The Solution <span>/ 02</span></div>
      <h2 className="section-title">ONE PLATFORM.<br />THREE MODULES.</h2>

      <div className="modules-grid fade-up">
        <div className="module-card">
          <div className="module-tag">Module 01</div>
          <div className="module-title">ATM CASH MONITOR</div>
          <div className="module-divider"></div>
          <ul className="module-list">
            <li>Predicts cash-out 24 / 48 / 72h in advance</li>
            <li>XGBoost · AUC-ROC 0.987 · AUC-PR 0.96</li>
            <li>Live WebSocket dashboard on Tashkent map</li>
            <li>ML-weighted collection route optimizer</li>
            <li>Navro'z · Ramadan · salary day awareness</li>
            <li>Baseline vs AI — 95% fewer cash-out incidents</li>
          </ul>
        </div>
        <div className="module-card">
          <div className="module-tag">Module 02</div>
          <div className="module-title">ATM PLACEMENT AI</div>
          <div className="module-divider"></div>
          <ul className="module-list">
            <li>Real-time OpenStreetMap data via Overpass API</li>
            <li>Influence zones: malls 1km · metro 500m · markets 800m</li>
            <li>Zone overlap = demand intensity heatmap</li>
            <li>Gap analysis vs all competitor ATMs</li>
            <li>Top-10 recommended locations with score</li>
            <li>4-layer model: geo → demand → competitors → dynamics</li>
          </ul>
        </div>
        <div className="module-card">
          <div className="module-tag">Module 03</div>
          <div className="module-title">ROUTE OPTIMIZER</div>
          <div className="module-divider"></div>
          <ul className="module-list">
            <li>Hybrid 2-opt TSP + Greedy Nearest Neighbor</li>
            <li>ML-weighted priority scoring per ATM</li>
            <li>OSRM real road network · OpenStreetMap</li>
            <li>Multi-vehicle assignment via geo-clustering</li>
            <li>Critical ATMs served first regardless of distance</li>
            <li>30–40% reduction in collection distance</li>
          </ul>
        </div>
      </div>

      {/* Dashboard screenshot */}
      <div className="screenshot-placeholder fade-up">
        <img src="/image-d.png" alt="Dashboard Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1 }} />
      </div>

      {/* Comparison */}
      <div style={{ marginTop: '80px' }}>
        <div className="section-label" style={{ marginBottom: '32px' }}>Banks react. Dominify predicts. <span>/ 02.1</span></div>
        <div className="comparison-wrap fade-up">
          <div className="comparison-col">
            <div className="comparison-head">
              <div className="comparison-head-label" style={{ color: 'var(--muted)' }}>Current System</div>
            </div>
            <div className="comparison-row"><span className="row-icon">✕</span> Fixed refill schedule every N days</div>
            <div className="comparison-row"><span className="row-icon">✕</span> Same amount for every ATM</div>
            <div className="comparison-row"><span className="row-icon">✕</span> No demand awareness</div>
            <div className="comparison-row"><span className="row-icon">✕</span> 15–20 cash-out events per month</div>
            <div className="comparison-row"><span className="row-icon">✕</span> Fixed collection route</div>
            <div className="comparison-row"><span className="row-icon">✕</span> New ATM: manager intuition</div>
          </div>
          <div className="comparison-col">
            <div className="comparison-head dark">
              <div className="comparison-head-label">Dominify</div>
            </div>
            <div className="comparison-row dark"><span className="row-icon" style={{ color: '#555' }}>✓</span> <span style={{ color: '#888' }}>Refill when predicted demand requires</span></div>
            <div className="comparison-row dark"><span className="row-icon" style={{ color: '#555' }}>✓</span> <span style={{ color: '#888' }}>Amount calculated per ATM individually</span></div>
            <div className="comparison-row dark"><span className="row-icon" style={{ color: '#555' }}>✓</span> <span style={{ color: '#888' }}>Navro'z · Ramadan · salary days built-in</span></div>
            <div className="comparison-row dark"><span className="row-icon" style={{ color: '#555' }}>✓</span> <span style={{ color: '#888' }}>Less than 2 cash-out events per month</span></div>
            <div className="comparison-row dark"><span className="row-icon" style={{ color: '#555' }}>✓</span> <span style={{ color: '#888' }}>ML-optimized, risk-weighted routing</span></div>
            <div className="comparison-row dark"><span className="row-icon" style={{ color: '#555' }}>✓</span> <span style={{ color: '#888' }}>New ATM: data-driven score map</span></div>
          </div>
        </div>
        <div className="savings-row">
          <div className="saving-item">
            <span className="saving-n">95%</span>
            <span className="saving-l">fewer cash-out events</span>
          </div>
          <div className="saving-item">
            <span className="saving-n">34%</span>
            <span className="saving-l">route distance saved</span>
          </div>
          <div className="saving-item">
            <span className="saving-n">2×</span>
            <span className="saving-l">less idle liquidity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
