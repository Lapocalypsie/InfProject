import PropTypes from "prop-types";

const Button = ({ label, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      className={`inline-block py-3 px-6 bg-blue-500 text-white rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
