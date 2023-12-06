import React from 'react';
import LoaderProgress from './LoaderProgress';

const Loader = ({ className }) => {
  return (
    <span
      className={`relative overflow-hidden h-2 block z-0 bg-gray-100 ${className}`}
    >
      <LoaderProgress className="animate-mainLoader" />
      <LoaderProgress className="animate-subLoader" />
    </span>
  );
};

export default Loader;
