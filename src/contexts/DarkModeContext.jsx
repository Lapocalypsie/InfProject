import { createContext, useContext, useState, useEffect } from "react";
import { darkModeProviderPropTypes } from "../utils/propsType";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("darkMode", JSON.stringify(isDark));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

DarkModeProvider.propTypes = darkModeProviderPropTypes;
