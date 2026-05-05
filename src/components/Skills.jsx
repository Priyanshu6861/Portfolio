import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Server, Database, Code, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <LayoutTemplate size={24} />,
    skills: [
      { name: 'Vue.js', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
    ]
  },
  {
    title: 'Backend & E-Commerce',
    icon: <Server size={24} />,
    skills: [
      { name: 'Shopware 6', level: 95 },
      { name: 'PHP (Core/OOP)', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Cron Jobs/Automation', level: 85 },
    ]
  },
  {
    title: 'Tools & Database',
    icon: <Database size={24} />,
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'ERP Integration', level: 80 },
      { name: 'Data Migration', level: 85 },
      { name: 'Server Deployment', level: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span className="text-gradient">Proficiency</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card glass"
            >
              <div className="skill-header">
                <div className="skill-icon text-gradient">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-list">
                {category.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
