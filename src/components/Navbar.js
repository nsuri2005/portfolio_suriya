import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span>SN</span>
        </div>

        {/* Menu Toggle for Mobile */}
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('home')}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
