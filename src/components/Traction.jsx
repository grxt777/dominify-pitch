import React from 'react';

const Traction = () => {
  return (
    <section id="traction">
      <div className="section-label">Traction <span>/ 03</span></div>
      <h2 className="section-title">BUILT IN 36H.<br />ALREADY VALIDATED.</h2>

      <div className="traction-grid fade-up">
        <div className="traction-card">
          <div className="traction-n">2nd</div>
          <div className="traction-sub">of 52 teams</div>
          <div className="traction-divider"></div>
          <p className="traction-detail">250 participants · GCG Fintech Hackathon 2026 · First-ever fintech project for the team</p>
        </div>
        <div className="traction-card">
          <div className="traction-n">0.987</div>
          <div className="traction-sub">AUC-ROC Score</div>
          <div className="traction-divider"></div>
          <p className="traction-detail">XGBoost double architecture · 40+ engineered features · Time-split · no data leakage</p>
        </div>
        <div className="traction-card">
          <div className="traction-n">SQB</div>
          <div className="traction-sub">Interest confirmed</div>
          <div className="traction-divider"></div>
          <p className="traction-detail">547 ATMs nationwide · Meeting with department directors · Negotiations in progress</p>
        </div>
      </div>

      <div className="timeline fade-up">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Apr 2026</div>
          <div className="timeline-event">Hackathon — 2nd place out of 52 teams</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Apr 2026</div>
          <div className="timeline-event">SQB HQ meeting with department directors</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">May 2026</div>
          <div className="timeline-event">Real data integration — SQB pilot</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Q3 2026</div>
          <div className="timeline-event">Production launch · First paying client</div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
