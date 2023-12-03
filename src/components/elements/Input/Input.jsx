import React from 'react';

const Input = ({ className = '', register, ...props }) => {
  return (
    <input
      {...register}
      className={`bg-light-cloud py-[12px] px-[18px] rounded-[14px] w-[160px] ${className}`}
      {...props}
    />
  );
};

export default Input;
