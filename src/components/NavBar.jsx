import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import Button from "./Button";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Book Project
        </Link>
        <div className="flex items-center space-x-4">
          <Button
            handleClick={toggleDarkMode}
            icon={isDark ? <Sun size={24} /> : <Moon size={24} />}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
