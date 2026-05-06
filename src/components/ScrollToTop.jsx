import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => scrollToSection(hash.replace('#', '')), 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};


export default ScrollToTop;
