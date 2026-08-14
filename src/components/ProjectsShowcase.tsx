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
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#333333]">
        <span className="text-[#00bcd4] text-sm font-semibold">// Portfolio Gallery</span>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Projects Showcase</h2>
      </div>

      {/* Toolbar (Search, Filter, Sort) */}
      <div className="bg-[#121212] border border-[#333333] rounded-lg p-4 sm:p-5 flex flex-col gap-3.5 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Search Input Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a0a0a0]" size={16} />
            <input
              type="text"
              className="w-full bg-black border border-[#333333] focus:border-[#00bcd4] rounded-lg py-2.5 pl-9 pr-9 text-sm text-white placeholder:text-[#666666] outline-none transition-colors"
              placeholder="Search project, client, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            {searchQuery && (
              <button
                type="button"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#a0a0a0] hover:text-white p-1"
                onClick={() => setSearchQuery('')}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <select
            className="bg-black border border-[#333333] focus:border-[#00bcd4] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#e0e0e0] outline-none cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        {/* Filter Buttons Group & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#222222]">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#00bcd4] text-black font-bold'
                      : 'bg-[#1a1a1a] hover:bg-[#262626] text-[#a0a0a0] hover:text-white border border-[#333333]'
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#a0a0a0] ml-auto">
            Showing <span className="text-[#00bcd4] font-bold">{projectsList.length}</span> of{' '}
            <span className="text-[#00bcd4] font-bold">{totalCount}</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
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
          <div className="col-span-full py-16 px-5 text-center bg-[#121212] border border-[#333333] rounded-lg">
            <div className="text-base font-bold text-white mb-2">$ grep: no matching projects found</div>
            <div className="text-xs text-[#a0a0a0] mb-5">검색어나 필터 조건에 일치하는 결과가 없습니다.</div>
            <button
              onClick={onResetFilters}
              className="px-4 py-2 bg-[#00bcd4] hover:bg-[#26c6da] text-black font-bold text-xs rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
