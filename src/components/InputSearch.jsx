import { Search, X } from "lucide-react";
import { useState } from "react";

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search books, authors, genres..."
          className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-200 bg-white 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition-all duration-300 shadow-md"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
