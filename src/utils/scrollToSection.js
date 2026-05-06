const DEFAULT_HEADER_OFFSET = 88;

export const scrollToSection = (sectionId, offset = DEFAULT_HEADER_OFFSET) => {
  const element = document.getElementById(sectionId);

  if (!element) {
    return false;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth'
  });

  return true;
};

export const navigateToHomeSection = (sectionId, navigate, isHomePage) => {
  if (isHomePage) {
    scrollToSection(sectionId);
    return;
  }

  navigate('/');
  window.setTimeout(() => scrollToSection(sectionId), 120);
};
