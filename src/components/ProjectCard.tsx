import React from 'react';
import { ExternalLink, Lock, Building, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  displayIndex: string;
  onCardClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, displayIndex, onCardClick }) => {
  const getTechBadgeClass = (techStr: string) => {
    const t = (techStr || '').toLowerCase();
    if (t.includes('react')) return 'border-[#00bcd4]/50 text-[#00bcd4] bg-[#00bcd4]/15';
    if (t.includes('vue')) return 'border-[#27c93f]/50 text-[#27c93f] bg-[#27c93f]/15';
    if (t.includes('actionscript')) return 'border-[#a0a0a0]/30 text-[#e0e0e0] bg-[#1a1a1a]';
    return 'border-[#a0a0a0]/30 text-[#e0e0e0] bg-[#1a1a1a]';
  };

  const getTechLabel = (techStr: string) => {
    const t = (techStr || '').toLowerCase();
    if (t.includes('react')) return 'React.js';
    if (t.includes('vue')) return 'Vue.js';
    if (t.includes('actionscript')) return 'ActionScript 3.0';
    return 'Static Web';
  };

  const hasLink = project.link && project.link.startsWith('http');

  return (
    <div
      onClick={() => onCardClick(project)}
      className="bg-[#121212] hover:bg-[#222222] border border-[#333333] hover:border-[#00bcd4] rounded-lg p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group shadow-sm"
    >
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded border ${getTechBadgeClass(project.tech)}`}>
            {getTechLabel(project.tech)}
          </span>
          <span className="text-xs text-[#666666] font-semibold">#{displayIndex}</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#00bcd4] transition-colors">
          {project.name}
        </h3>

        <div className="flex flex-col gap-1.5 text-xs text-[#a0a0a0] mb-4">
          <div className="flex items-center gap-2">
            <Building size={14} className="text-[#00bcd4] shrink-0" />
            <span className="truncate">{project.client || 'Client'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#00bcd4] shrink-0" />
            <span>{project.start || '-'} ~ {project.end || '-'}</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-[#2a2a2a] flex items-center justify-between text-xs">
        <span className="text-[#666666]">Role: {project.role || '100%'}</span>
        {hasLink ? (
          <span className="inline-flex items-center gap-1 text-[#00bcd4] font-semibold group-hover:underline">
            Live Demo <ExternalLink size={13} />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[#a0a0a0]">
            <Lock size={12} /> {project.link || 'Confidential'}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
