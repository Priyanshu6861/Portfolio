import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import ShopwareExperience from '../components/ShopwareExperience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <ShopwareExperience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;
