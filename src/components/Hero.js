import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span>SURIYA N</span>
          </h1>
          <p className="hero-subtitle">
            Student Web Developer | Crypto Enthusiast
          </p>
          <p className="hero-description">
            I’m a student web developer focused on building clean, responsive web applications using HTML, CSS, JavaScript, and React. I’m also exploring blockchain and cryptocurrency technologies while improving my skills through real-world projects.
            I’m a student web developer focused on building clean, responsive web applications using HTML, CSS, JavaScript, and React. I’m also exploring blockchain and cryptocurrency technologies while improving my skills through real-world projects.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="https://www.instagram.com/__suriya__369__?igsh=MXB5M25tYTNkN2FqcA==" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Instagram
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="hero-image">
          <div className="profile-wrapper">
            <img
              src="/WhatsApp Image 2026-02-10 at 10.18.00 AM.jpeg"
              alt="suriya N"
              className="profile-image"
            />
            <div className="image-gradient"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
