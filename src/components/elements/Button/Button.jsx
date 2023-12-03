import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-primary text-light-prime py-3 rounded-xl font-semibold hover:bg-secondary transition ease-in duration-150 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
