import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { navigateToHomeSection } from '../utils/scrollToSection';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    navigateToHomeSection(sectionId, navigate, location.pathname === '/');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              Priyanshu<span className="text-gradient">.dev</span>
            </Link>
            <p className="footer-desc">
              Shopware, PHP, and e-commerce developer focused on reliable plugins, integrations, and storefront improvements.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Professional Work</Link></li>
              <li><a href="#experience" onClick={(event) => handleSectionClick(event, 'experience')}>Experience</a></li>
              <li><a href="#shopware-experience" onClick={(event) => handleSectionClick(event, 'shopware-experience')}>Shopware</a></li>
              <li><a href="#projects" onClick={(event) => handleSectionClick(event, 'projects')}>Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/Priyanshu6861" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              <li><a href="mailto:priyanshujoshi2252@gmail.com">Contact Email</a></li>
              <li><a href={`${import.meta.env.BASE_URL}files/Resume.pdf`} target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Priyanshu Joshi. Professional Portfolio.</p>
          
          <div className="footer-socials">
            <a href="mailto:priyanshujoshi2252@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>

            <a href="https://github.com/Priyanshu6861" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
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
