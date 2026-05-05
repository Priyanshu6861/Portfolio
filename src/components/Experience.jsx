import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Shopware Developer',
    company: 'Dolphin Web Solutions',
    period: '2024 - 2026',
    description: 'Designed and published multiple custom Shopware 6 extensions including Product Variants Matrix, Advanced Import, Tax Switcher, and Swish Payments. Developed the Product Question and FAQ extension live on Shopware Store.',
  },
  {
    id: 2,
    role: 'Backend & Co-Developer',
    company: 'Real Estate Broker System',
    period: 'Feb 2022 – March 2024',
    description: 'Developed custom real estate platform using Core PHP for property listings and broker-client communications. Integrated secure online payment gateways.',
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'E-Commerce Website',
    period: 'June 2021 – Sep 2021',
    description: 'Built full-stack e-commerce application using Python and Django featuring secure checkout, shopping cart logic, and payment gateway integration.',
  }
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Professional <span className="text-gradient">Journey</span></h2>
        
        <div className="experience-container">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass">
                  <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-period">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="exp-company">
                    <Briefcase size={16} className="text-gradient" />
                    {exp.company}
                  </h4>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="why-hire-me glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="why-hire-header">
              <Award size={32} className="text-gradient" />
              <h3>Why Hire Me?</h3>
            </div>
            <p>
              I bring specialized technical expertise in Shopware 6 ecosystems combined with proven project delivery. I have successfully executed complex migrations (Magento 1 to Shopware 6), designed production-grade extensions, and built ERP integrations that solve real business problems.
            </p>
            <ul className="why-hire-list">
              <li>Master's degree in Computer Applications (MCA)</li>
              <li>Strong communicator and collaborative team player</li>
              <li>Dedicated to delivering high-quality solutions on time</li>
              <li>Expertise in performance optimization and reliability</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
