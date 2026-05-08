import React from 'react';

const Team = () => {
  return (
    <section id="team">
      <div className="section-label">Team <span>/ 06</span></div>
      <h2 className="section-title">5 ENGINEERS.<br />AGE 19.</h2>

      <div className="team-grid fade-up">
        <div className="team-card">
          <div className="team-avatar">U</div>
          <div className="team-name">Umid Dadajonov</div>
          <div className="team-role">Team Lead · Strategy & Architecture</div>
        </div>
        <div className="team-card">
          <div className="team-avatar">D</div>
          <div className="team-name">Isomov Dilshod</div>
          <div className="team-role">Backend · FastAPI · WebSocket</div>
        </div>
        <div className="team-card">
          <div className="team-avatar">A</div>
          <div className="team-name">Djemilov Arslan</div>
          <div className="team-role">ML Engineer · Models & Training</div>
        </div>
        <div className="team-card">
          <div className="team-avatar">M</div>
          <div className="team-name">Malika Xayitmetova</div>
          <div className="team-role">Data Engineer · Frontend</div>
        </div>
        <div className="team-card">
          <div className="team-avatar">M</div>
          <div className="team-name">Madina Xabibova</div>
          <div className="team-role">Data Analyst · Research</div>
        </div>
      </div>

      <div className="team-badges fade-up">
        <div className="team-badge">
          <div className="badge-icon">🎓</div>
          <div className="badge-text">
            <strong>Inha University, Tashkent</strong>
            <span>Applying ML methods 2 years ahead of curriculum</span>
          </div>
        </div>
        <div className="team-badge">
          <div className="badge-icon">🏆</div>
          <div className="badge-text">
            <strong>GCG Fintech Hackathon 2026</strong>
            <span>2nd place · 52 teams · 250 participants · First fintech project</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
