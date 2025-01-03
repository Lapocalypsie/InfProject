import { Search, X } from "lucide-react";
import { useState } from "react";
import { inputSearchPropTypes } from "../utils/propsType";

const InputSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search books, authors, genres..."
          className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-all duration-300 shadow-md 
          group-focus-within:shadow-lg group-focus-within:border-blue-300"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center group"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600 group-focus-within:text-blue-500 transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
};

InputSearch.propTypes = inputSearchPropTypes;

export default InputSearch;