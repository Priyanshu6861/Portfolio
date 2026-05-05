import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Shopware 6 Extensions',
    category: 'Shopware',
    image: 'image/shopware-logo.webp', // Using existing logo as placeholder, or a generic tech image
    description: 'Designed and published multiple custom Shopware 6 extensions including Product Variants Matrix, Advanced Import, Tax Switcher, and Swish Payments.',
    tech: ['Shopware 6', 'PHP', 'MySQL', 'Vue.js'],
    github: null,
    demo: '#',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    category: 'Full Stack',
    image: 'image/project/e-commerce.png',
    description: 'Built a full-stack e-commerce application with secure checkout, shopping cart logic, and payment gateway integration.',
    tech: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/Priyanshu6861/E-Commerce_Django',
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: 'Real Estate Broker System',
    category: 'Backend',
    image: 'image/project/real-estate.jpg',
    description: 'Online Real Estate Broker System using Core PHP. Handles property listings, broker-client communications, and secure online payments.',
    tech: ['Core PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/Priyanshu6861/Real-Estate-PHP',
    demo: null,
    featured: true
  },
  {
    id: 4,
    title: 'Netflix Clone',
    category: 'Frontend',
    image: 'image/project/netflix.png',
    description: 'A responsive frontend clone of the Netflix interface built to demonstrate UI/UX skills and modern CSS frameworks.',
    tech: ['HTML', 'Tailwind CSS'],
    github: null,
    demo: 'netflix/index.html',
    featured: false
  },
  {
    id: 5,
    title: 'Microsoft Clone',
    category: 'Frontend',
    image: 'image/project/microsoft.png',
    description: 'A simplified frontend clone of the Microsoft landing page focusing on responsive design.',
    tech: ['HTML', 'Tailwind CSS'],
    github: null,
    demo: 'microsoft/index.html',
    featured: false
  },
  {
    id: 6,
    title: 'Facebook Clone',
    category: 'Frontend',
    image: 'image/project/facebook1.jpg',
    description: 'A replica of the Facebook login page, created with Tailwind CSS.',
    tech: ['HTML', 'Tailwind CSS'],
    github: null,
    demo: 'facebook_login/index.html',
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
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        
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
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card glass"
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                          <Github size={24} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-icon-link">
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-category">
                    <Code2 size={16} className="text-gradient" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
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
