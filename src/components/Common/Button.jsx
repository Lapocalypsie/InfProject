import React from "react";
import { buttonPropTypes } from "../../utils/propsType";

const Button = ({ label, handleClick, className = "", icon: Icon = null }) => {
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center py-3 px-6 text-white rounded-lg font-bold uppercase tracking-wider transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 ${className}`}
    >
      {label}
      {Icon &&
        React.cloneElement(Icon, {
          className: `ml-2 transition-transform ${Icon.props.className || ""}`,
        })}
    </button>
  );
};

Button.propTypes = buttonPropTypes;

export default Button;