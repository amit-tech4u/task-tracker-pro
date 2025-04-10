import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useDarkMode;
