import React from 'react';
import { ExternalLink, Lock, Building, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  displayIndex: string;
  onCardClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, displayIndex, onCardClick }) => {
  const getTechPillConfig = (techStr: string) => {
    const t = (techStr || '').toLowerCase();
    if (t.includes('react')) return { class: 'react', label: 'React.js' };
    if (t.includes('vue')) return { class: 'vue', label: 'Vue.js' };
    if (t.includes('actionscript')) return { class: 'static', label: 'ActionScript 3.0' };
    return { class: 'static', label: 'Static Web' };
  };

  const badge = getTechPillConfig(project.tech);
  const hasLink = project.link && project.link.startsWith('http');

  return (
    <div className="project-card" onClick={() => onCardClick(project)}>
      <div>
        <div className="card-top">
          <span className={`tech-pill ${badge.class}`}>{badge.label}</span>
          <span className="card-num">#{displayIndex}</span>
        </div>
        <h3 className="card-name">{project.name}</h3>
        <div className="card-info-list">
          <div className="card-info-item">
            <Building size={14} />
            <span>{project.client || 'Client'}</span>
          </div>
          <div className="card-info-item">
            <Calendar size={14} />
            <span>{project.start || '-'} ~ {project.end || '-'}</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <span style={{ color: 'var(--text-dim)' }}>Role: {project.role || '100%'}</span>
        {hasLink ? (
          <span className="card-link">
            Live Demo <ExternalLink size={13} />
          </span>
        ) : (
          <span className="card-private">
            <Lock size={12} /> {project.link || 'Confidential'}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
