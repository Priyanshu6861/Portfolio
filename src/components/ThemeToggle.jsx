import React from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, onToggle, className = '' }) => {
  const isLight = theme === 'light';
  const nextTheme = isLight ? 'dark' : 'light';

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={isLight}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <Sun size={16} className="theme-toggle-icon sun-icon" />
        <Moon size={16} className="theme-toggle-icon moon-icon" />
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
};

export default ThemeToggle;
