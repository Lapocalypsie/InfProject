import { Search, X } from "lucide-react";
import { useState } from "react";
import { inputSearchPropTypes } from "../../utils/propsType";

const InputSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="w-full">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search
            className={`h-5 w-5 transition-colors duration-200 ${
              isFocused
                ? "text-blue-500 dark:text-blue-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search books, authors, genres..."
          className="w-full h-11 pl-11 pr-12 rounded-lg
            bg-white dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/40 focus:border-blue-500 dark:focus:border-blue-400
            hover:border-gray-300 dark:hover:border-gray-600"
        />

        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center px-3 group/clear"
          >
            <div className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <X
                className="h-4 w-4 text-gray-400 dark:text-gray-500 
                  group-hover/clear:text-gray-600 dark:group-hover/clear:text-gray-300 
                  transition-colors"
              />
            </div>
          </button>
        )}

        <div
          className={`absolute -inset-px rounded-lg pointer-events-none transition-opacity duration-200 
            ${isFocused ? "opacity-100" : "opacity-0"}
            ring-2 ring-blue-500/20 dark:ring-blue-500/40`}
          aria-hidden="true"
        />
      </div>

      {searchTerm && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hidden"></div>
      )}
    </div>
  );
};

InputSearch.propTypes = inputSearchPropTypes;

export default InputSearch;
