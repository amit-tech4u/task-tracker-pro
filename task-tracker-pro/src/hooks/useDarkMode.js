import { useState, useEffect } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
};