import React from 'react';

const Button = ({ children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-[#c33838] transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;