import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/cards/selectors';

export const useSetDefFiltersVal = (register, setValue) => {
  const fieldName = register.name;
  const filters = useSelector(selectFilters);

  useEffect(() => {
    setValue(fieldName, filters[fieldName]);
  }, [setValue, filters, fieldName]);

  return { fieldName };
};
