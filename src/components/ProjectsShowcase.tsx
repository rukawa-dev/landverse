import React from 'react';
import { Search, X } from 'lucide-react';
import { Project, CategoryFilter, SortOption } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsShowcaseProps {
  projectsList: Project[];
  totalCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: CategoryFilter;
  setActiveCategory: (cat: CategoryFilter) => void;
  sortOption: SortOption;
  setSortOption: (sort: SortOption) => void;
  onCardClick: (project: Project) => void;
  onResetFilters: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projectsList,
  totalCount,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  sortOption,
  setSortOption,
  onCardClick,
  onResetFilters
}) => {
  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'framework', label: 'React / Vue' },
    { id: 'static', label: 'Static Web' },
    { id: 'public', label: 'Public Links' },
    { id: 'private', label: 'Confidential' },
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-tag">// Portfolio Gallery</span>
        <h2 className="section-title">Projects Showcase</h2>
      </div>

      {/* Toolbar (Search, Filter, Sort) */}
      <div className="projects-toolbar">
        <div className="toolbar-row">
          <div className="search-box">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search project, client, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearchQuery('')}
              >
                <X size={14} />
              </button>
            )}
          </div>
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        <div className="toolbar-row" style={{ flexWrap: 'wrap' }}>
          <div className="filter-group">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="results-meta">
            Showing <span>{projectsList.length}</span> of <span>{totalCount}</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid" style={{ marginTop: '20px' }}>
        {projectsList.length > 0 ? (
          projectsList.map((p, idx) => {
            const displayIndex = String(projectsList.length - idx).padStart(2, '0');
            return (
              <ProjectCard
                key={`${p.name}-${idx}`}
                project={p}
                displayIndex={displayIndex}
                onCardClick={onCardClick}
              />
            );
          })
        ) : (
          <div className="empty-box">
            <div className="empty-title">$ grep: no matching projects found</div>
            <div className="empty-desc">검색어나 필터 조건에 일치하는 결과가 없습니다.</div>
            <button className="btn-reset" onClick={onResetFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
