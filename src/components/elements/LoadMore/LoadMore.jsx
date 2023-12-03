import React from 'react';

const LoadMore = ({ children, className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`bg:none text-primary text-base underline font-medium active:text-secondary block mx-auto mt-[50px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default LoadMore;
