import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

import App from './App';
import './index.css';

function Main() {
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

  return <App />;
}

createRoot(document.getElementById('root')!).render(<Main />);