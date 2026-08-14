import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dol2156@gmail.com').then(() => {
      alert('이메일 주소(dol2156@gmail.com)가 클립보드에 복사되었습니다.');
    }).catch(() => {
      window.location.href = 'mailto:dol2156@gmail.com';
    });
  };

  return (
    <section id="contact">
      <div className="bg-[#121212] border border-[#333333] rounded-lg p-8 text-center shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">$ ./contact_me.sh</h2>
        <p className="text-sm text-[#a0a0a0] mb-6">함께 프로젝트를 진행하거나 채용에 대해 논의하고 싶으신가요?</p>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#00bcd4] hover:bg-[#26c6da] text-black font-bold text-xs sm:text-sm rounded-lg transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <Mail size={16} />
            <span>dol2156@gmail.com (복사)</span>
          </button>

          <a
            href="tel:010-9319-2156"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#333333] hover:border-[#a0a0a0] text-white font-bold text-xs sm:text-sm rounded-lg transition-all"
          >
            <Phone size={14} className="text-[#00bcd4]" />
            <span>010-9319-2156</span>
          </a>

          <a
            href="https://github.com/rukawa-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#1a1a1a] hover:bg-[#262626] border border-[#333333] hover:border-[#a0a0a0] text-white font-bold text-xs sm:text-sm rounded-lg transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00bcd4]">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
