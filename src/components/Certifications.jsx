import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    title: 'Shopware Certified Frontend Developer',
    image: 'image/certifications/shopware-frontend.png',
    focus: ['Storefront UX', 'Theme customization', 'Twig and SCSS']
  },
  {
    title: 'Shopware Certified Backend Developer (Intermediate)',
    image: 'image/certifications/shopware-backend.png',
    focus: ['Plugin architecture', 'DAL and services', 'API integrations']
  }
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Verified Shopware skills</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-intro">
            Shopware credentials that support hands-on frontend, backend, and integration work for serious e-commerce builds.
          </p>
        </div>

        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              className="certification-card glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="certification-image-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}${certification.image}`}
                  alt={certification.title}
                  className="certification-image"
                  loading="lazy"
                />
              </div>
              <div className="certification-content">
                <div className="certification-icon text-gradient">
                  {index === 0 ? <Award size={22} /> : <ShieldCheck size={22} />}
                </div>
                <h3>{certification.title}</h3>
                <div className="certification-focus">
                  {certification.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
