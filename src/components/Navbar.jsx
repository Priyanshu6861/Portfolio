import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigateToHomeSection } from '../utils/scrollToSection';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = ({ theme, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'Work', href: '/work', isHash: false },
    { name: 'Experience', href: 'experience', isHash: true },
    { name: 'Shopware', href: 'shopware-experience', isHash: true },
    { name: 'Projects', href: 'projects', isHash: true },
    { name: 'Skills', href: 'skills', isHash: true },
  ];

  const handleNavClick = (e, link) => {
    setIsOpen(false);
    if (link.isHash) {
      e.preventDefault();
      navigateToHomeSection(link.href.replace('#', ''), navigate, location.pathname === '/');
    }
  };



  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Priyanshu<span className="text-gradient">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isHash ? (
                  <a 
                    href={`#${link.href}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={location.pathname === '/' ? 'nav-item' : 'nav-item'}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className={location.pathname === link.href ? 'nav-item active-link' : 'nav-item'}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="desktop-actions">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, { href: 'contact', isHash: true })}>Let's Talk</a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="nav-controls">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="mobile-nav glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isHash ? (
                    <a href={`#${link.href}`} onClick={(e) => handleNavClick(e, link)}>{link.name}</a>
                  ) : (
                    <Link to={link.href} onClick={(e) => handleNavClick(e, link)}>{link.name}</Link>
                  )}
                </li>
              ))}
              <li>
                <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, { href: 'contact', isHash: true })}>Let's Talk</a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );

};

export default Navbar;
