import React from 'react';

const Select = ({ children, className, register, ...props }) => {
  return (
    <select
      {...register}
      className={`bg-light-cloud py-[12px] px-[18px] rounded-[14px] appearance-none bg-select bg-no-repeat ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
