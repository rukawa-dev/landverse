import React from 'react';
import { Code2, Layers, Bot } from 'lucide-react';

export const SkillsCard: React.FC = () => {
  return (
    <div className="bg-[#121212] border border-[#333333] rounded-lg p-5 shadow-sm" id="skills">
      {/* Category 1 */}
      <div className="text-[13px] font-bold text-[#00bcd4] mb-3 flex items-center gap-2 uppercase tracking-wider">
        <Code2 size={16} />
        <span>Publishing & Markup (100%)</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4.5">
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          HTML5
        </span>
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          CSS3 / SCSS
        </span>
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          JavaScript (ES6+)
        </span>
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          Tailwind CSS
        </span>
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          웹접근성(WA)
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          반응형 웹
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          jQuery
        </span>
      </div>

      {/* Category 2 */}
      <div className="text-[13px] font-bold text-[#00bcd4] mb-3 flex items-center gap-2 uppercase tracking-wider mt-4">
        <Layers size={16} />
        <span>Frameworks & Tech</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4.5">
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          React.js
        </span>
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          Vue.js
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          Next.js
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          Nuxt.js
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          Node.js
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          PHP
        </span>
      </div>

      {/* Category 3 */}
      <div className="text-[13px] font-bold text-[#00bcd4] mb-3 flex items-center gap-2 uppercase tracking-wider mt-4">
        <Bot size={16} />
        <span>AI Tools & Workflow</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          Antigravity IDE
        </span>
        <span className="bg-[#00bcd4]/15 border border-[#00bcd4]/40 text-[#00bcd4] px-2.5 py-1 rounded text-xs font-semibold">
          Gemini / AI Agent
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          Figma / Framer
        </span>
        <span className="bg-[#1a1a1a] border border-[#333333] text-[#e0e0e0] px-2.5 py-1 rounded text-xs font-medium">
          Git / GitHub
        </span>
      </div>
    </div>
  );
};

export default SkillsCard;
