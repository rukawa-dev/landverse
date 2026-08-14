import React from 'react';

interface TerminalProfileProps {
  totalProjectsCount?: number;
}

export const TerminalProfile: React.FC<TerminalProfileProps> = ({ totalProjectsCount = 145 }) => {
  return (
    <div className="terminal-box">
      <div className="terminal-header">
        <div className="term-dot term-dot-red"></div>
        <div className="term-dot term-dot-yellow"></div>
        <div className="term-dot term-dot-green"></div>
        <span className="term-title">developer.json</span>
      </div>
      <div className="terminal-body">
        <div className="term-prompt">$ cat profile.json</div>
        <h1 className="term-title-name">강석민</h1>
        <p className="term-subtext">Senior Web Publisher & Frontend Developer</p>
        
        <div className="kv-list">
          <div className="kv-row">
            <span className="kv-key">Experience:</span>
            <span className="kv-val accent">13.4 Years (2011~)</span>
          </div>
          <div className="kv-row">
            <span className="kv-key">Role:</span>
            <span className="kv-val">UI/UX 수석연구원 / PL</span>
          </div>
          <div className="kv-row">
            <span className="kv-key">Web Accessibility:</span>
            <span className="kv-val accent">100% Compliant</span>
          </div>
          <div className="kv-row">
            <span className="kv-key">AI Workflow:</span>
            <span className="kv-val">Antigravity / Gemini</span>
          </div>
          <div className="kv-row">
            <span className="kv-key">Contact:</span>
            <span className="kv-val">010-9319-2156</span>
          </div>
          <div className="kv-row">
            <span className="kv-key">Location:</span>
            <span className="kv-val">서울 강서구 등촌동</span>
          </div>
        </div>

        {/* 2x2 Quick Stats Grid */}
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-num">{totalProjectsCount}+</div>
            <div className="stat-lbl">Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">13Y+</div>
            <div className="stat-lbl">Career</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">100%</div>
            <div className="stat-lbl">Completion</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">8</div>
            <div className="stat-lbl">Companies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalProfile;
