import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import Button from "./Button";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      handleClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
      icon={isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    />
  );
};

export default ThemeToggle;
