import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Professional Shopware Extensions',
    category: 'Shopware',
    image: 'image/shopware-logo.png',
    description: 'Custom Shopware 6 extensions for storefront, admin, catalog, and integration workflows built for real merchant operations.',
    tech: ['Shopware 6', 'PHP', 'Symfony', 'Vue.js', 'APIs'],
    github: null,
    demo: '/work',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Ecosystem',
    category: 'Full Stack',
    image: 'image/project/e-commerce.gif',
    description: 'Commerce platform concept with catalog browsing, cart flow, customer journeys, and backend-driven product management.',
    tech: ['Python', 'Django', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/Priyanshu6861/E-Commerce_Django',
    demo: 'https://e-commerce-django-wjek.onrender.com/',
    featured: true
  },
  {
    id: 3,
    title: 'Real Estate Management System',
    category: 'Backend',
    image: 'image/project/real-estate.jpg',
    description: 'Core PHP property management platform for listings, inquiries, broker workflows, and admin-controlled data.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Priyanshu6861/Real-Estate-PHP',
    featured: true
  },

  {
    id: 4,
    title: 'Streaming Platform UI',
    category: 'Frontend',
    image: 'image/project/netflix.gif',
    description: 'Responsive streaming landing page with bold content sections, conversion-focused CTA blocks, and mobile cleanup.',
    tech: ['HTML', 'Tailwind CSS', 'Responsive UI'],
    github: 'https://github.com/Priyanshu6861/Portfolio/tree/main/public/netflix',
    demo: `${import.meta.env.BASE_URL}netflix/index.html`,
    featured: false
  },
  {
    id: 5,
    title: 'Corporate Landing Page UI',
    category: 'Frontend',
    image: 'image/project/microsoft.png',
    description: 'Microsoft-inspired product page with responsive navigation, product highlights, and improved content stacking.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Priyanshu6861/Portfolio/tree/main/public/microsoft',
    demo: `${import.meta.env.BASE_URL}microsoft/index.html`,
    featured: false
  },
  {
    id: 6,
    title: 'Social Media Web App',
    category: 'Frontend',
    image: 'image/project/facebook1.gif',
    description: 'Facebook-style authentication screen with responsive spacing, accessible form fields, and mobile-first layout fixes.',
    tech: ['HTML', 'Tailwind CSS', 'Forms'],
    github: 'https://github.com/Priyanshu6861/Portfolio/tree/main/public/facebook_login',
    demo: `${import.meta.env.BASE_URL}facebook_login/index.html`,
    featured: false
  },
  {
    id: 7,
    title: 'Game Store Landing Page',
    category: 'Frontend',
    image: 'image/project/gaming.png',
    description: 'Responsive gaming shop landing page with a clear hero, product navigation, and polished mobile stacking.',
    tech: ['HTML', 'Tailwind CSS', 'Landing Page'],
    github: 'https://github.com/Priyanshu6861/Portfolio/tree/main/public/random',
    demo: `${import.meta.env.BASE_URL}random/index.html`,
    featured: false
  },
  {
    id: 8,
    title: 'Product Variants Matrix Extension',
    category: 'Shopware',
    image: 'image/project/product-variants.png',
    description: 'Custom Shopware 6 extension for managing product variants and their relationships.',
    tech: ['Shopware 6', 'PHP', 'Symfony', 'Vue.js', 'APIs'],
    github: 'https://github.com/Priyanshu6861/Product-Variants-Matrix-Extension',
    demo: '',
    featured: false
  },
  {
    id: 9,
    title: 'Store Locator Extension',
    category: 'Shopware',
    image: 'image/project/store-locator.png',
    description: 'Shopware 6 extension for adding a comprehensive store locator feature, helping customers find the nearest physical locations.',
    tech: ['Shopware 6', 'JavaScript', 'Google Maps API', 'UX'],
    github: 'https://github.com/Priyanshu6861/StoreLocator',
    demo: '',
    featured: false
  },
  {
    id: 10,
    title: 'Tax Switcher Extension',
    category: 'Shopware',
    image: 'image/project/tax-switcher.png',
    description: 'Shopware 6 extension for adding a comprehensive tax switching feature, allowing customers to view prices in different currencies.',
    tech: ['Shopware 6', 'JavaScript', 'API Integration', 'UX'],
    github: 'https://github.com/Priyanshu6861/TaxSwitcher-Extension',
    demo: '',
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
                      {project.demo && (
                        project.demo.startsWith('http') || project.demo.endsWith('.html') ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-icon-link"
                            title="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        ) : (
                          <Link
                            to={project.demo}
                            className="project-icon-link"
                            title="View Details"
                          >
                            <ExternalLink size={20} />
                          </Link>
                        )
                      )}
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
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-small">
                          <Github size={16} /> GitHub
                        </a>
                      )}
                      {project.demo && (
                        project.demo.startsWith('http') || project.demo.endsWith('.html') ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-small btn-primary-small"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        ) : (
                          <Link
                            to={project.demo}
                            className="btn-small btn-primary-small"
                          >
                            <ExternalLink size={16} /> Case Study
                          </Link>
                        )
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
