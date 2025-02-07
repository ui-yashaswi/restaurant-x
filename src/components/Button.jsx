import React from "react";

const Button = ({ className, text, children }) => {
  return (
    <button
      className={`text-[#376D5C] px-12 py-3 rounded-3xl bg-white ${className}`}
    >
      {children} {text}
    </button>
  );
};

export default Button;
