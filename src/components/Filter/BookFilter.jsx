import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { bookFilterPropTypes } from "../../utils/propsType";
import { bookgenre } from "../../const/genre";
import Button from "../Common/Button";

const BookFilter = ({ onSelectGenre }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [activeGenre, setActiveGenre] = useState("Fantasy");

  const handleSelectOption = (option) => {
    setActiveGenre(option);
    onSelectGenre(option.toLowerCase());
    setOpenFilter(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <div className="flex justify-center p-4">
        <div className="relative">
          <button
            className={`flex items-center justify-between gap-2 w-48 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 border
              ${
                openFilter
                  ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800"
                  : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-750 dark:text-gray-200"
              }
              shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/40`}
            onClick={() => setOpenFilter(!openFilter)}
          >
            <span className="truncate">{activeGenre}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openFilter ? "rotate-180" : ""
              }`}
            />
          </button>

          {openFilter && (
            <div className="absolute z-50 w-48 mt-2 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <div className="max-h-64 overflow-y-auto">
                {bookgenre.map((genre, index) => (
                  <Button
                    key={index}
                    label={
                      <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm text-left">
                        <span>{genre}</span>
                        {activeGenre === genre && (
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        )}
                      </div>
                    }
                    handleClick={() => handleSelectOption(genre)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors 
      ${
        activeGenre === genre
          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-750"
      } 
      ${
        index !== bookgenre.length - 1
          ? "border-b border-gray-100 dark:border-gray-700"
          : ""
      }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BookFilter.propTypes = bookFilterPropTypes;

export default BookFilter;
