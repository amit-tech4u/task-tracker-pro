import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);