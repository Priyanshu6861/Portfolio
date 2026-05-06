import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Code2, Gauge, PlugZap, Repeat2, WalletCards } from 'lucide-react';
import './ShopwareExperience.css';

const capabilities = [
  {
    title: 'Plugin Development (Shopware 6)',
    description: 'Custom extensions built around Shopware services, events, DAL entities, admin UI, and storefront behavior.',
    icon: <PlugZap size={24} />
  },
  {
    title: 'Custom Module Development',
    description: 'Admin and storefront modules for workflows that do not fit into off-the-shelf plugins.',
    icon: <Boxes size={24} />
  },
  {
    title: 'Odoo Integration',
    description: 'Product, customer, stock, order, and status synchronization between Shopware and Odoo.',
    icon: <Repeat2 size={24} />
  },
  {
    title: 'Payment & API Integrations',
    description: 'Reliable external API connections, payment flows, webhooks, queue handling, and error recovery.',
    icon: <WalletCards size={24} />
  },
  {
    title: 'Performance Optimization',
    description: 'Profiling, query cleanup, async processing, caching, and storefront improvements for faster stores.',
    icon: <Gauge size={24} />
  }
];

const proofPoints = [
  'Shopware 6 extension architecture',
  'Symfony services and events',
  'Vue admin components',
  'Storefront and theme customization',
  'ERP and marketplace workflows',
  'Production debugging and maintenance'
];

const ShopwareExperience = () => {
  return (
    <section className="shopware-experience" id="shopware-experience">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Client-focused e-commerce engineering</span>
          <h2 className="section-title">Shopware <span className="text-gradient">Experience</span></h2>
          <p className="section-intro">
            Practical Shopware 6 development for merchants who need dependable custom features, integrations, and performance improvements without turning their store into a maintenance burden.
          </p>
        </div>

        <div className="shopware-layout">
          <motion.div
            className="shopware-summary glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="summary-icon text-gradient">
              <Code2 size={34} />
            </div>
            <h3>From plugin idea to production store</h3>
            <p>
              I focus on clean Shopware 6 implementation: scoped plugin logic, clear configuration, stable API sync, predictable admin flows, and storefront UX that helps customers complete purchases.
            </p>
            <div className="proof-grid">
              {proofPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </motion.div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                className="capability-card glass"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="capability-icon text-gradient">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopwareExperience;
