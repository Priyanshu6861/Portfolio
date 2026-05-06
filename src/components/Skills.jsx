import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Server, Database } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <LayoutTemplate size={24} />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 / CSS3', level: 98 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 85 }
    ]
  },
  {
    title: 'Backend & Core',
    icon: <Server size={24} />,
    skills: [
      { name: 'PHP', level: 94 },
      { name: 'Shopware 6', level: 92 },
      { name: 'Symfony', level: 88 },
      { name: 'REST APIs', level: 95 },
      { name: 'Odoo Integration', level: 86 }
    ]
  },
  {
    title: 'Database & Tools',
    icon: <Database size={24} />,
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span className="text-gradient">Stack</span></h2>
        
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
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      />
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
