import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Priyanshu<span className="text-gradient">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
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
                <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Let's Talk</a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
