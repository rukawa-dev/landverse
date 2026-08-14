import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface DetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getTechBadgeClass = (techStr: string) => {
    const t = (techStr || '').toLowerCase();
    if (t.includes('react')) return 'border-[#00bcd4]/50 text-[#00bcd4] bg-[#00bcd4]/15';
    if (t.includes('vue')) return 'border-[#27c93f]/50 text-[#27c93f] bg-[#27c93f]/15';
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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#121212] border border-[#00bcd4] rounded-lg max-w-lg w-full p-6 sm:p-7 relative shadow-[0_0_30px_rgba(0,188,212,0.25)] animate-in fade-in zoom-in-95 duration-200">
        <button
          className="absolute top-4 right-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333333] hover:border-[#a0a0a0] text-[#a0a0a0] hover:text-white w-8 h-8 rounded flex items-center justify-center transition-colors cursor-pointer"
          onClick={onClose}
        >
          <X size={16} />
        </button>

        <div className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded border inline-block mb-3 ${getTechBadgeClass(project.tech)}`}>
          {getTechLabel(project.tech)}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 pr-8 leading-snug">
          {project.name}
        </h3>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-black border border-[#333333] p-3 rounded">
            <div className="text-[11px] text-[#a0a0a0] uppercase mb-1">Client</div>
            <div className="text-sm font-semibold text-white truncate">{project.client || '-'}</div>
          </div>
          <div className="bg-black border border-[#333333] p-3 rounded">
            <div className="text-[11px] text-[#a0a0a0] uppercase mb-1">Role</div>
            <div className="text-sm font-semibold text-white">{project.role || '100%'}</div>
          </div>
          <div className="bg-black border border-[#333333] p-3 rounded">
            <div className="text-[11px] text-[#a0a0a0] uppercase mb-1">Start Date</div>
            <div className="text-sm font-semibold text-white">{project.start || '-'}</div>
          </div>
          <div className="bg-black border border-[#333333] p-3 rounded">
            <div className="text-[11px] text-[#a0a0a0] uppercase mb-1">End Date</div>
            <div className="text-sm font-semibold text-white">{project.end || '-'}</div>
          </div>
        </div>

        {hasLink && (
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#00bcd4] hover:bg-[#26c6da] text-black font-bold text-sm rounded-lg transition-all shadow-sm hover:-translate-y-0.5"
            >
              <span>Visit Live Website</span>
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
