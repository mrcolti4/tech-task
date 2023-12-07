import { useSetDefFiltersVal } from 'hooks/useSetDefFiltersVal';
import React from 'react';

const Select = ({ children, className, register, setValue }) => {
  useSetDefFiltersVal(register, setValue);
  return (
    <select
      {...register}
      className={`bg-light-cloud py-[12px] px-[18px] rounded-[14px] appearance-none bg-select bg-no-repeat ${className}`}
    >
      {children}
    </select>
  );
};

export default Select;
