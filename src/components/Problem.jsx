import React from 'react';

const Problem = () => {
  return (
    <section id="problem">
      <div className="section-label">The Problem <span>/ 01</span></div>
      <h2 className="section-title">BANKS RUN<br />ON GUESSWORK</h2>
      <div className="problem-grid fade-up">
        <div className="problem-card">
          <div className="problem-num">01</div>
          <div className="problem-title">Cash-Out Events</div>
          <p className="problem-body">ATM empties mid-cycle. Next refill days away. Three days of zero cash — lost clients, emergency costs, reputational damage. Each incident costs the bank $500–$1,500.</p>
        </div>
        <div className="problem-card">
          <div className="problem-num">02</div>
          <div className="problem-title">Fixed Schedule</div>
          <p className="problem-body">Every ATM gets refilled on a fixed schedule with a fixed amount — regardless of demand. On salary day it empties in 48 hours. On a quiet day it sits full all week. The rule doesn't know the difference.</p>
        </div>
        <div className="problem-card">
          <div className="problem-num">03</div>
          <div className="problem-title">No Placement Logic</div>
          <p className="problem-body">New ATM locations chosen by manager intuition and branch requests. No demand map. No competitor analysis. High-traffic zones go unserved for years.</p>
        </div>
      </div>
      <div className="problem-banner">
        <div className="problem-banner-dot"></div>
        <p>SQB · 547 ATMs across Uzbekistan · 170 in Tashkent · Currently managed with static rules and zero predictive intelligence</p>
      </div>
    </section>
  );
};

export default Problem;
