import React from 'react';

const LoaderProgress = ({ className }) => {
  return (
    <span
      className={`absolute w-auto left-0 top-0 bottom-0 origin-left transition-transform ease duration-200 bg-secondary ${className}`}
    ></span>
  );
};

export default LoaderProgress;
