// ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;