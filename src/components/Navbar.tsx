import React from 'react';
import { Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-md border-b border-[#333333] px-6 py-3.5">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-sm sm:text-base hover:opacity-90 transition-opacity">
          <span className="text-[#00bcd4] font-extrabold">$</span>
          <span>~/kang-sukmin</span>
        </a>

        <ul className="hidden sm:flex items-center gap-6 list-none">
          <li>
            <a href="#about" className="text-[#a0a0a0] hover:text-[#00bcd4] text-sm font-medium transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-[#a0a0a0] hover:text-[#00bcd4] text-sm font-medium transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-[#a0a0a0] hover:text-[#00bcd4] text-sm font-medium transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#career" className="text-[#a0a0a0] hover:text-[#00bcd4] text-sm font-medium transition-colors">
              Career
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bcd4] hover:bg-[#26c6da] text-black rounded-lg text-xs sm:text-sm font-bold transition-all hover:-translate-y-0.5 shadow-sm"
        >
          <Mail size={15} />
          <span>Contact Me</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
