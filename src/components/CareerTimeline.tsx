import React from 'react';
import { careerData } from '../data/career';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="career">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#333333]">
        <span className="text-[#00bcd4] text-sm font-semibold">// Work Experience</span>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Career Timeline</h2>
      </div>

      <div className="flex flex-col gap-4">
        {careerData.map((item, idx) => (
          <div
            key={`${item.company}-${idx}`}
            className="bg-[#121212] hover:border-[#00bcd4]/40 border border-[#333333] rounded-lg p-5 flex flex-col sm:flex-row justify-between sm:items-start gap-3 transition-colors shadow-sm"
          >
            <div>
              <div className="text-base sm:text-lg font-bold text-white mb-1">{item.company}</div>
              <div className="text-sm text-[#00bcd4] font-semibold mb-1.5">{item.role}</div>
              <div className="text-xs sm:text-sm text-[#a0a0a0] leading-relaxed">{item.desc}</div>
            </div>
            <div className="text-xs text-[#a0a0a0] bg-[#1a1a1a] px-2.5 py-1 rounded border border-[#333333] whitespace-nowrap self-start">
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
