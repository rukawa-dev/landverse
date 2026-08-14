import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface DetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

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
    <div
      className="modal-backdrop active"
      onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains('modal-backdrop')) onClose();
      }}
    >
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={16} />
        </button>
        <div className={`tech-pill ${badge.class}`} style={{ marginBottom: '10px', display: 'inline-block' }}>
          {badge.label}
        </div>
        <h3 className="modal-project-title">{project.name}</h3>

        <div className="modal-kv-grid">
          <div className="modal-kv-item">
            <div className="modal-kv-label">Client</div>
            <div className="modal-kv-val">{project.client || '-'}</div>
          </div>
          <div className="modal-kv-item">
            <div className="modal-kv-label">Role</div>
            <div className="modal-kv-val">{project.role || '100%'}</div>
          </div>
          <div className="modal-kv-item">
            <div className="modal-kv-label">Start Date</div>
            <div className="modal-kv-val">{project.start || '-'}</div>
          </div>
          <div className="modal-kv-item">
            <div className="modal-kv-label">End Date</div>
            <div className="modal-kv-val">{project.end || '-'}</div>
          </div>
        </div>

        {hasLink && (
          <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-visit-btn">
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
