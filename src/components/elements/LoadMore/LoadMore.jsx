import React from 'react';

const LoadMore = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="bg:none text-primary text-base underline font-medium active:text-secondary inline-block mx-auto mt-[50px]"
      {...props}
    >
      {children}
    </button>
  );
};

export default LoadMore;
