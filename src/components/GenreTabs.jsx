import { useState } from "react";
import bookgenre from "../const/genre";

const GenreTabs = () => {
  const [activeGenre, setActiveGenre] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
      {bookgenre.map((genre, index) => (
        <button
          key={index}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${
              activeGenre === genre
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }
          `}
          onClick={() => setActiveGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreTabs;
