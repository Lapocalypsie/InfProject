import { Link } from "react-router-dom";
import { Moon, Sun, BookOpen, Menu } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";
import Button from "./Button";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <BookOpen
              className="h-6 w-6 text-blue-600 dark:text-blue-400 
              transform group-hover:rotate-6 transition-all duration-300"
            />
            <span
              className="text-xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 
              dark:to-indigo-400"
            >
              Book Project
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button
              handleClick={toggleDarkMode}
              icon={
                isDark ? (
                  <Sun
                    size={20}
                    className="text-yellow-400 hover:text-yellow-300 
                    transition-colors duration-300"
                  />
                ) : (
                  <Moon
                    size={20}
                    className="text-blue-600 hover:text-blue-500 
                    transition-colors duration-300"
                  />
                )
              }
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                shadow-sm hover:shadow-md transition-all duration-300"
            />

            {/* Mobile menu button - you can expand this later */}
            <Button
              handleClick={() => {}}
              icon={<Menu size={20} />}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                shadow-sm hover:shadow-md transition-all duration-300 
                sm:hidden"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
