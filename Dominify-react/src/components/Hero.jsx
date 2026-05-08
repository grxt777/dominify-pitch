import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-label">ATM Intelligence Platform</div>
        <h1 className="hero-title">DOMINIFY</h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Predicts cash-out events 24–72 hours in advance.
            Optimizes collection routes. Recommends optimal
            locations for new ATMs. Built for Central Asian banks.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-n">0.987</span>
              <span className="hero-stat-l">AUC-ROC</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-n">#2/52</span>
              <span className="hero-stat-l">Hackathon</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-n">547</span>
              <span className="hero-stat-l">ATMs · SQB</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-n">36h</span>
              <span className="hero-stat-l">Built in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
