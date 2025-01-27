import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { bookgenre } from "../const/genre";
import FilterDropdown from "./FilterDropDown";
import { bookFilterPropTypes } from "../utils/propsType";

const BookFilter = ({ onSelectGenre }) => {
  const [openFilter, setOpenFilter] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  const filters = [
    { title: "Genre", options: bookgenre, type: "genre" },
    { title: "Language", options: ["English", "French", "Spanish", "German"] },
    {
      title: "Publication Year",
      options: ["All Years", "Recent", "2010-2020", "Before 2010"],
    },
  ];

  const handleSelectOption = (option, filterType) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: option,
    }));

    if (filterType === "genre") {
      if (option !== "All Genres") {
        onSelectGenre(option.toLowerCase());
      } else {
        onSelectGenre("all");
      }
    }
    setOpenFilter(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {filters.map((filter, index) => (
          <div key={index} className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full
                transition-all duration-200 ease-in-out
                font-medium text-sm
                ${
                  openFilter === index
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                }
                ${activeFilters[filter.type] ? "border-2 border-blue-500" : ""}
              `}
              onClick={() => setOpenFilter(openFilter === index ? null : index)}
            >
              <span>{filter.title}</span>
              {activeFilters[filter.type] && (
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  {activeFilters[filter.type]}
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openFilter === index ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {openFilter === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 mt-2 w-48"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                    {filter.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`
                          w-full text-left px-4 py-2 text-sm
                          transition-colors duration-150
                          ${optionIndex === 0 ? "rounded-t-lg" : ""}
                          ${
                            optionIndex === filter.options.length - 1
                              ? "rounded-b-lg"
                              : ""
                          }
                          ${
                            activeFilters[filter.type] === option
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }
                        `}
                        onClick={() => handleSelectOption(option, filter.type)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

BookFilter.propTypes = bookFilterPropTypes;

export default BookFilter;
