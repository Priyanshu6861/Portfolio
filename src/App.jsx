import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfessionalWork from './pages/ProfessionalWork';
import ScrollToTop from './components/ScrollToTop';
import CursorSpotlight from './components/CursorSpotlight';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <CursorSpotlight />
      <ScrollToTop />
      <Navbar theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<ProfessionalWork />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

