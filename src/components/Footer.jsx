import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              Priyanshu<span className="text-gradient">.dev</span>
            </a>
            <p className="footer-desc">
              Shopware & Full-Stack Developer specializing in high-performance web applications and e-commerce solutions.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Old Projects</h4>
            <ul>
              <li><a href="/old_index.html">Classic Portfolio</a></li>
              <li><a href="/links.html">Social QR</a></li>
              <li><a href="/netflix/index.html">Netflix Clone</a></li>
              <li><a href="/microsoft/index.html">Microsoft Clone</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Priyanshu Joshi. All rights reserved.</p>
          
          <div className="footer-socials">
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/Priyanshu6861" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
