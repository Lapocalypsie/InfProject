import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bookgenre } from "../const/genre";

const BookFilter = ({ onSelectGenre }) => {
  const [openFilter, setOpenFilter] = useState(null);

  const filters = [
    {
      title: "Genre",
      options: bookgenre,
      type: "genre",
    },
    {
      title: "Language",
      options: ["English", "French", "Spanish", "German"],
    },
    {
      title: "Publication Year",
      options: ["All Years", "Recent", "2010-2020", "Before 2010"],
    },
  ];

  const handleSelectOption = (option) => {
    if (option !== "All Genres") {
      onSelectGenre(option.toLowerCase());
    } else {
      onSelectGenre("all");
    }
    setOpenFilter(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4">
      {filters.map((filter, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => setOpenFilter(openFilter === index ? null : index)}
            className={`
              flex items-center justify-between px-4 py-2 rounded-full 
              transition-all duration-300 
              ${
                openFilter === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            <span className="mr-2 font-medium">{filter.title}</span>
            <ChevronDown
              className={`
                transform transition-transform 
                ${openFilter === index ? "rotate-180" : ""}
              `}
            />
          </button>

          <AnimatePresence>
            {openFilter === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <div className="py-1">
                  {filter.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleSelectOption(option)}
                      className="w-full text-left px-4 py-2 
                        hover:bg-blue-50 hover:text-blue-600
                        transition-colors duration-200
                        focus:outline-none focus:bg-blue-50"
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
  );
};

export default BookFilter;
