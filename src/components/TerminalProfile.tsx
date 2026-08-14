import React from 'react';

interface TerminalProfileProps {
  totalProjectsCount?: number;
}

export const TerminalProfile: React.FC<TerminalProfileProps> = ({ totalProjectsCount = 145 }) => {
  return (
    <div className="bg-[#121212] border border-[#333333] rounded-lg overflow-hidden shadow-sm">
      {/* Terminal Window Top Bar */}
      <div className="bg-[#1a1a1a] px-3.5 py-2.5 border-b border-[#333333] flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="text-[11px] text-[#a0a0a0] font-medium ml-1.5">developer.json</span>
      </div>

      {/* Terminal Window Content */}
      <div className="p-5">
        <div className="text-[#00bcd4] font-bold text-sm mb-2">$ cat profile.json</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">강석민</h1>
        <p className="text-[#a0a0a0] text-sm mb-5 leading-relaxed">Senior Web Publisher & Frontend Developer</p>
        
        {/* Key-Value Metadata List */}
        <div className="flex flex-col gap-2.5 text-[13px] mb-6 pb-5 border-b border-[#2a2a2a]">
          <div className="flex justify-between">
            <span className="text-[#a0a0a0]">Experience:</span>
            <span className="text-[#00bcd4] font-semibold">13.4 Years (2011~)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a0a0]">Role:</span>
            <span className="text-white font-semibold">UI/UX 수석연구원 / PL</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a0a0]">Web Accessibility:</span>
            <span className="text-[#00bcd4] font-semibold">100% Compliant</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a0a0]">AI Workflow:</span>
            <span className="text-white font-semibold">Antigravity / Gemini</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a0a0]">Contact:</span>
            <span className="text-white font-semibold">010-9319-2156</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a0a0]">Location:</span>
            <span className="text-white font-semibold">서울 강서구 등촌동</span>
          </div>
        </div>

        {/* 2x2 Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#181818] border border-[#333333] rounded-lg p-3.5 text-center">
            <div className="text-2xl font-bold text-[#00bcd4] mb-0.5">{totalProjectsCount}+</div>
            <div className="text-[11px] text-[#a0a0a0] uppercase tracking-wider">Projects</div>
          </div>
          <div className="bg-[#181818] border border-[#333333] rounded-lg p-3.5 text-center">
            <div className="text-2xl font-bold text-[#00bcd4] mb-0.5">13Y+</div>
            <div className="text-[11px] text-[#a0a0a0] uppercase tracking-wider">Career</div>
          </div>
          <div className="bg-[#181818] border border-[#333333] rounded-lg p-3.5 text-center">
            <div className="text-2xl font-bold text-[#00bcd4] mb-0.5">100%</div>
            <div className="text-[11px] text-[#a0a0a0] uppercase tracking-wider">Completion</div>
          </div>
          <div className="bg-[#181818] border border-[#333333] rounded-lg p-3.5 text-center">
            <div className="text-2xl font-bold text-[#00bcd4] mb-0.5">8</div>
            <div className="text-[11px] text-[#a0a0a0] uppercase tracking-wider">Companies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalProfile;
