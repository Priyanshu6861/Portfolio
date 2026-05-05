import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="availability-badge glass">
            <span className="pulse-dot"></span>
            Available for freelance
          </div>
          
          <h1 className="hero-title">
            I build <span className="text-gradient">high-performance</span> web apps that scale your business
          </h1>
          
          <p className="hero-subtitle">
            Hi, I'm Priyanshu. A specialized Shopware, Odoo & Full-Stack Developer dedicated to engineering robust solutions, complex migrations, and automated systems that drive real business value.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Hire Me <ArrowRight size={20} />
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="files/Resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link" title="Download Resume">
              <FileText size={20} />
              <span>Resume</span>
            </a>
            <a href="https://github.com/Priyanshu6861" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <CheckCircle size={20} className="text-gradient" />
              <span>2+ Years Experience</span>
            </div>
            <div className="stat-item">
              <CheckCircle size={20} className="text-gradient" />
              <span>E-commerce Specialist</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-glow"></div>
          <img src="/image/my.jpg" alt="Priyanshu Joshi" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
