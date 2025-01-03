import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import { bookgenre } from "../const/genre";
import FilterDropdown from "./FilterDropDown";
import {  bookFilterPropTypes } from "../utils/propsType";

const BookFilter = ({ onSelectGenre }) => {
  const [openFilter, setOpenFilter] = useState(null);

  const filters = [
    { title: "Genre", options: bookgenre, type: "genre" },
    { title: "Language", options: ["English", "French", "Spanish", "German"] },
    { title: "Publication Year", options: ["All Years", "Recent", "2010-2020", "Before 2010"] },
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
            className={`flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300 ${openFilter === index ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
          >
            <span className="mr-2 font-medium">{filter.title}</span>
            <ChevronDown className={`transform transition-transform ${openFilter === index ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {openFilter === index && (
              <FilterDropdown options={filter.options} onSelectOption={handleSelectOption} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

BookFilter.propTypes = bookFilterPropTypes;

export default BookFilter;