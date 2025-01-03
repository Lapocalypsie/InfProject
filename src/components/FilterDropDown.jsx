import { motion } from "framer-motion";
import { filterDropdownPropTypes } from "../utils/propsType";

const FilterDropdown = ({ options, onSelectOption }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute z-50 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="py-1">
        {options.map((option, optionIndex) => (
          <button
            key={optionIndex}
            onClick={() => onSelectOption(option)}
            className="w-full text-left px-4 py-2 
              hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400
              transition-colors duration-200
              focus:outline-none focus:bg-blue-50 dark:focus:bg-gray-700"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

FilterDropdown.propTypes = filterDropdownPropTypes;

export default FilterDropdown;