import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, BriefcaseBusiness } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Let's build something great together</h3>
            <p>
              Need a Shopware plugin, Odoo sync, payment integration, or performance pass for an e-commerce store? Send the details and I will get back with a practical next step.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon glass">
                  <Mail size={24} className="text-gradient" />
                </div>
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:priyanshujoshi2252@gmail.com">priyanshujoshi2252@gmail.com</a>

                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon glass">
                  <BriefcaseBusiness size={24} className="text-gradient" />
                </div>
                <div>
                  <h4>Best Fit</h4>
                  <span>Shopware, PHP, APIs, Odoo, e-commerce</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon glass">
                  <MapPin size={24} className="text-gradient" />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Ahmedabad, India</span>

                </div>
              </div>
            </div>
            
            <div className="contact-socials">
              <a href="https://github.com/Priyanshu6861" target="_blank" rel="noopener noreferrer" className="social-icon glass">
                <Github size={20} />
              </a>
              <a href="mailto:priyanshujoshi2252@gmail.com" className="social-icon glass">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="How can I help you?"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
