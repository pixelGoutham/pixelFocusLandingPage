import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';

import App from './App';
import './index.css';

function Main() {
  const [themeTransitioning, setThemeTransitioning] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    // Set initial state
    if (mediaQuery.matches) {
      document.documentElement.classList.add('dark');
    }
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // We'll expose a way to set theme transitioning state from children via window event or context
  // For simplicity, we'll rely on the Navbar directly adding/removing class on body
  // and we'll just render the overlay always (it's controlled by body.theme-transitioning in CSS)
  return (
    <>
      <div className="theme-transition-overlay" aria-hidden="true" />
      <App />
    </>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);