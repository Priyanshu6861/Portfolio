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
    link: 'https://github.com/Priyanshu6861/Product-Variants-Matrix-Extension',
    linkText: 'View Repository'
  },
  {
    id: 2,
    title: 'Product Badges & Labels Extension',
    description: 'Shopware 6 extension for adding customizable badges and labels to products, enhancing product visibility and highlighting key features or promotions.',
    tech: ['Shopware 6', 'Vue.js', 'PHP', 'Admin Interface'],
    impact: 'Improved product presentation and customer engagement through visual indicators.',
    link: 'https://store.shopware.com/en/dolph85810616367m/product-badges-labels.html',
    linkText: 'View on Store'
  },
  {
    id: 3,
    title: 'Product Question & FAQ Extension',
    description: 'Shopware 6 extension enabling customers to ask questions about products with merchant responses, building trust and reducing support inquiries.',
    tech: ['Shopware 6', 'Vue.js', 'PHP', 'Community Features'],
    impact: 'Increased customer confidence through social proof and transparent Q&A interactions.',
    link: 'https://store.shopware.com/en/dolph73871759374m/product-question-and-faq.html',
    linkText: 'View on Store'
  },
  {
    id: 4,
    title: 'Infinite Scroll Extension',
    description: 'Shopware 6 extension implementing infinite scroll pagination on product listings and catalog pages for improved browsing experience.',
    tech: ['Shopware 6', 'JavaScript', 'Vue.js', 'UX'],
    impact: 'Enhanced user experience with seamless product discovery and reduced bounce rates.',
    link: 'https://store.shopware.com/en/dolph98741255867m/infinite-scroll.html',
    linkText: 'View on Store'
  },
  {
    id: 5,
    title: 'Odoo Integration Extension',
    description: 'Advanced integration service connecting Shopware 6 with Odoo ERP system for seamless order, inventory, and customer data synchronization.',
    tech: ['Shopware 6', 'Odoo', 'API Integration', 'PHP'],
    impact: 'Unified business operations with real-time data sync between e-commerce and ERP systems.',
    link: 'https://store.shopware.com/en/brain81343377991m/odoo-integration.html',
    linkText: 'View on Store'
  },
  {
    id: 6,
    title: 'Advanced Import/Export Tool',
    description: 'Custom integration service for synchronizing large catalogs between ERP systems and Shopware 6, handling millions of data points with high reliability.',
    tech: ['PHP', 'MySQL', 'Shopware API', 'Redis'],
    impact: 'Automated data synchronization, eliminating manual entry errors and reducing operational costs.',
    link: null
  },
  {
    id: 7,
    title: 'Swish Payments Integration',
    description: 'Developed and maintained the official Swish payment gateway extension for the Scandinavian market.',
    tech: ['PHP', 'API Integration', 'Security', 'Shopware'],
    impact: 'Enabled seamless mobile payments for thousands of e-commerce stores.',
    link: null
  },
  {
    id: 8,
    title: 'Store Locator Extension',
    description: 'Shopware 6 extension for adding a comprehensive store locator feature, helping customers find the nearest physical locations.',
    tech: ['Shopware 6', 'JavaScript', 'Google Maps API', 'UX'],
    impact: 'Improved customer accessibility and increased foot traffic to physical stores.',
    link: 'https://github.com/Priyanshu6861/StoreLocator',
    linkText: 'View Repository'
  },
  {
    id: 9,
    title: 'Tax Switcher Extension',
    description: 'Shopware 6 extension for adding a comprehensive tax switching feature, allowing customers to view prices in different currencies.',
    tech: ['Shopware 6', 'JavaScript', 'API Integration', 'UX'],
    impact: 'Enhanced customer experience with flexible pricing options and improved conversion rates.',
    link: 'https://github.com/Priyanshu6861/TaxSwitcher-Extension',
    linkText: 'View Repository'
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


                {work.link && (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline work-btn">
                    {work.linkText || 'View on Store'} <ExternalLink size={16} />
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
