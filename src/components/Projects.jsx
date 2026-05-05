import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Professional Shopware Extensions',
    category: 'Shopware',
    image: 'image/shopware-logo.webp',
    description: 'A suite of custom Shopware 6 extensions including Product Variants Matrix and Advanced Import tools.',
    tech: ['Shopware 6', 'PHP', 'Vue.js', 'Symfony'],
    github: null,
    demo: '/work',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Ecosystem',
    category: 'Full Stack',
    image: 'image/project/e-commerce.png',
    description: 'Full-stack platform with secure checkout, complex cart logic, and automated payment integrations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Priyanshu6861/E-Commerce_Django',
    demo: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Real Estate Management System',
    category: 'Backend',
    image: 'image/project/real-estate.jpg',
    description: 'Centralized property listing and broker-client communication platform with secure transactions.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Priyanshu6861/Real-Estate-PHP',
    demo: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Streaming Platform UI',
    category: 'Frontend',
    image: 'image/project/netflix.png',
    description: 'High-fidelity streaming interface inspired by Netflix, focusing on performance and responsive design.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Corporate Landing Page UI',
    category: 'Frontend',
    image: 'image/project/microsoft.png',
    description: 'Professional corporate landing page redesign with a focus on accessibility and modern aesthetics.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Social Media Web App',
    category: 'Frontend',
    image: 'image/project/facebook1.jpg',
    description: 'Modern social media interface with dynamic components and real-time interaction simulations.',
    tech: ['React', 'CSS Modules', 'Redux'],
    github: '#',
    demo: '#',
    featured: false
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Shopware', 'Full Stack', 'Backend', 'Frontend'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Professional <span className="text-gradient">Projects</span></h2>
        
        <div className="project-filters">
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="project-card glass"
              >
                <div className="project-image-container">
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link" title="GitHub">
                          <Github size={20} />
                        </a>
                      )}
                      <a href={project.demo} target={project.demo.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer" className="project-icon-link" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-category-tag">
                      <Code2 size={14} className="text-gradient" />
                      <span>{project.category}</span>
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                     {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-small">
                          <Github size={16} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-small btn-primary-small">
                          <ExternalLink size={16} /> Demo
                        </a>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};


export default Projects;
