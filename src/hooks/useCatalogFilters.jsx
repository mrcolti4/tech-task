import { useState } from 'react';

const filterByMileage = (data, filtersObj) => {
  const result = data.filter(
    card =>
      card.mileage < Number(filtersObj.toMileage || '10000') &&
      card.mileage > Number(filtersObj.fromMileage || '0')
  );

  delete filtersObj.toMileage;
  delete filtersObj.fromMileage;

  return result;
};

const filterByBrand = (data, filtersObj) => {
  const result = data.filter(card => card.make === filtersObj.brand);
  delete filtersObj.brand;

  return result;
};

const filterByPrice = (data, filtersObj) => {
  const result = data.filter(
    card => Number(card.rentalPrice.slice(1)) >= Number(filtersObj.price)
  );
  delete filtersObj.price;

  return result;
};

export const useCatalogFilters = data => {
  const [filters, setFilters] = useState({});
  const copiedFilters = { ...filters };
  let filteredData = [];
  if (Object.values(filters).every(filter => filter === '')) {
    filteredData = data;
    return { data: filteredData, filters, setFilters };
  }

  for (const filter in copiedFilters) {
    if (!filters[filter]) {
      continue;
    }
    if (filters.brand) {
      filteredData.push(...filterByBrand(data, copiedFilters));
    }
    if (filters.price) {
      filteredData.push(...filterByPrice(data, copiedFilters));
    }
    if (filters.toMileage || filters.fromMileage) {
      filteredData.push(...filterByMileage(data, copiedFilters));
    }
  }

  const uniqueData = filteredData.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );

  return { data: uniqueData, filters, setFilters };
};
