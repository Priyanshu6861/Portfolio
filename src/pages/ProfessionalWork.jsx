import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Briefcase } from 'lucide-react';
import './ProfessionalWork.css';

const professionalWork = [
  {
    id: 1,
    title: 'Product Variants Matrix Extension',
    description: 'A complex Shopware 6 extension that allows B2B customers to order products in multiple variants (size/color) simultaneously through a grid interface.',
    tech: ['Shopware 6', 'Vue.js', 'PHP', 'Symfony'],
    impact: 'Reduced ordering time for bulk customers by 60% and improved inventory management accuracy.',
    link: 'https://store.shopware.com/'
  },
  {
    id: 2,
    title: 'Advanced Import/Export Tool',
    description: 'Custom integration service for synchronizing large catalogs between ERP systems and Shopware 6, handling millions of data points with high reliability.',
    tech: ['PHP', 'MySQL', 'Shopware API', 'Redis'],
    impact: 'Automated data synchronization, eliminating manual entry errors and reducing operational costs.',
    link: '#'
  },
  {
    id: 3,
    title: 'Swish Payments Integration',
    description: 'Developed and maintained the official Swish payment gateway extension for the Scandinavian market.',
    tech: ['PHP', 'API Integration', 'Security', 'Shopware'],
    impact: 'Enabled seamless mobile payments for thousands of e-commerce stores.',
    link: 'https://store.shopware.com/'
  }
];

const ProfessionalWork = () => {
  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="section-title">Professional <span className="text-gradient">Work</span></h1>
            <p className="work-subtitle">
              Specialized solutions, custom extensions, and high-impact e-commerce engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="work-grid-section">
        <div className="container">
          <div className="work-grid">
            {professionalWork.map((work, index) => (
              <motion.div 
                key={work.id}
                className="work-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="work-card-header">
                  <Briefcase className="text-gradient" size={24} />
                  <h3>{work.title}</h3>
                </div>
                <p className="work-description">{work.description}</p>
                
                <div className="work-impact">
                  <strong>Impact:</strong> {work.impact}
                </div>

                <div className="work-tech">
                  {work.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>


                {work.link !== '#' && (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline work-btn">
                    View on Store <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalWork;
