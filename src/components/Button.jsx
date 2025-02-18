import React from "react";

const Button = ({ className, text, children }) => {
  return (
    <button
      className={`cursor-pointer  lg:w-40 lg:px-0 lg:py-3 py-2 px-4 text-[#396d5c] border-[#396d5c] font-semibold rounded-3xl border-2  ${className}`}
    >
      {children} {text}
    </button>
  );
};

export default Button;
