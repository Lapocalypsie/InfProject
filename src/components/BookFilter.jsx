import { ChevronDown } from "lucide-react";
import { useState } from "react";

const BookFilter = ({ onSelectGenre }) => {
  const [openFilter, setOpenFilter] = useState(null);

  const filters = [
    {
      title: "Genre",
      options: ["All Genres", "Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"],
      type: "genre", // Identify that this filter is for genre
    },
    {
      title: "Language",
      options: ["All Languages", "English", "French", "Spanish", "German"],
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
  };

  return (
    <div className="p-4 flex flex-row">
      {filters.map((filter, index) => (
        <div key={index} className="mb-4 mx-4">
          <div
            className="flex justify-between items-center cursor-pointer p-2 bg-gray-200 rounded-md"
            onClick={() => setOpenFilter(openFilter === index ? null : index)}
          >
            <span className="font-semibold">{filter.title}</span>
            <ChevronDown
              className={`transition-transform ${
                openFilter === index ? "rotate-180" : ""
              }`}
            />
          </div>
          {openFilter === index && (
            <div className="mt-2 bg-gray-100 rounded-md p-2 flex flex-col">
              {filter.options.map((option, idx) => (
                <div
                  key={idx}
                  className="p-1 hover:bg-gray-200 rounded-md cursor-pointer"
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookFilter;
