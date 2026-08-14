import React from 'react';
import { Code2, Layers, Bot } from 'lucide-react';

export const SkillsCard: React.FC = () => {
  return (
    <div className="skills-card" id="skills">
      <div className="skills-category-title">
        <Code2 size={16} />
        <span>Publishing & Markup (100%)</span>
      </div>
      <div className="skills-tag-wrap">
        <span className="skill-chip highlight">HTML5</span>
        <span className="skill-chip highlight">CSS3 / SCSS</span>
        <span className="skill-chip highlight">JavaScript (ES6+)</span>
        <span className="skill-chip highlight">Tailwind CSS</span>
        <span className="skill-chip highlight">웹접근성(WA)</span>
        <span className="skill-chip">반응형 웹</span>
        <span className="skill-chip">jQuery</span>
      </div>

      <div className="skills-category-title" style={{ marginTop: '16px' }}>
        <Layers size={16} />
        <span>Frameworks & Tech</span>
      </div>
      <div className="skills-tag-wrap">
        <span className="skill-chip highlight">React.js</span>
        <span className="skill-chip highlight">Vue.js</span>
        <span className="skill-chip">Next.js</span>
        <span className="skill-chip">Nuxt.js</span>
        <span className="skill-chip">Node.js</span>
        <span className="skill-chip">PHP</span>
      </div>

      <div className="skills-category-title" style={{ marginTop: '16px' }}>
        <Bot size={16} />
        <span>AI Tools & Workflow</span>
      </div>
      <div className="skills-tag-wrap">
        <span className="skill-chip highlight">Antigravity IDE</span>
        <span className="skill-chip highlight">Gemini / AI Agent</span>
        <span className="skill-chip">Figma / Framer</span>
        <span className="skill-chip">Git / GitHub</span>
      </div>
    </div>
  );
};

export default SkillsCard;
