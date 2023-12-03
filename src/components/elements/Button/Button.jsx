import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="w-full bg-primary text-light-prime py-3 rounded-xl font-semibold hover:bg-secondary transition ease-in duration-150">
      {children}
    </button>
  );
};

export default Button;
