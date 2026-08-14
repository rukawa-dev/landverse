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
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="nav-logo-prompt">$</span>
          <span>~/kang-sukmin</span>
        </a>
        <ul className="nav-menu">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#career" className="nav-link">Career</a></li>
        </ul>
        <a href="#contact" onClick={scrollToContact} className="nav-contact-btn">
          <Mail size={15} />
          <span>Contact Me</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
