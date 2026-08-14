import React from 'react';
import { careerData } from '../data/career';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="career">
      <div className="section-header">
        <span className="section-tag">// Work Experience</span>
        <h2 className="section-title">Career Timeline</h2>
      </div>

      <div className="career-timeline">
        {careerData.map((item, idx) => (
          <div key={`${item.company}-${idx}`} className="career-item">
            <div>
              <div className="career-company">{item.company}</div>
              <div className="career-role">{item.role}</div>
              <div className="career-desc">{item.desc}</div>
            </div>
            <div className="career-period">{item.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
