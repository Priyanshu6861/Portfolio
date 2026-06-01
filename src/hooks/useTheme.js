import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';
const THEMES = ['dark', 'light'];

const isTheme = (theme) => THEMES.includes(theme);

const getSystemTheme = () => (
  window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
);

const getInitialTheme = () => {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : getSystemTheme();
  } catch {
    return 'dark';
  }
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasStoredPreference, setHasStoredPreference] = useState(() => {
    try {
      return isTheme(localStorage.getItem(THEME_STORAGE_KEY));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleSystemThemeChange = () => {
      if (!hasStoredPreference) {
        setTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [hasStoredPreference]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Theme still changes for the current session if storage is unavailable.
      }

      setHasStoredPreference(true);
      return nextTheme;
    });
  };

  return {
    theme,
    toggleTheme,
  };
};
