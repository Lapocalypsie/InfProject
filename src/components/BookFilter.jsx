import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { bookgenre } from "../const/genre";
import { bookFilterPropTypes } from "../utils/propsType";

const BookFilter = ({ onSelectGenre }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [activeGenre, setActiveGenre] = useState("Fantasy");

  const handleSelectOption = (option) => {
    setActiveGenre(option);
    onSelectGenre(option.toLowerCase());
    setOpenFilter(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
            openFilter
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setOpenFilter(!openFilter)}
        >
          <span>{activeGenre}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              openFilter ? "rotate-180" : ""
            }`}
          />
        </motion.button>

        <AnimatePresence>
          {openFilter && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
            >
              {bookgenre.map((genre, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                  onClick={() => handleSelectOption(genre)}
                >
                  {genre}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

BookFilter.propTypes = bookFilterPropTypes;

export default BookFilter;
