import { useSelector } from 'react-redux';
import { selectFilters } from 'redux/cards/selectors';

const filterByMileage = (data, filtersObj) => {
  const result = data.filter(
    card =>
      card.mileage < Number(filtersObj.to?.split(',').join('') || '10000') &&
      card.mileage > Number(filtersObj.from?.split(',').join('') || '0')
  );

  delete filtersObj.to;
  delete filtersObj.from;

  return result;
};

const filterByBrand = (data, filtersObj) => {
  const result = data.filter(card => card.make === filtersObj.brand);
  delete filtersObj.brand;

  return result;
};

const filterByPrice = (data, filtersObj) => {
  const result = data.filter(
    card => Number(card.rentalPrice.slice(1)) <= Number(filtersObj.price)
  );
  delete filtersObj.price;

  return result;
};

export const useCatalogFilters = data => {
  const filters = useSelector(selectFilters);
  const copiedFilters = { ...filters };
  let filteredData = [];
  if (Object.values(filters).every(filter => filter === '')) {
    filteredData = data;
    return { data: filteredData };
  }

  for (const filter in copiedFilters) {
    if (!copiedFilters[filter]) {
      continue;
    }
    if (copiedFilters.brand) {
      filteredData.push(...filterByBrand(data, copiedFilters));
    }
    if (copiedFilters.price) {
      filteredData.push(...filterByPrice(data, copiedFilters));
    }
    if (copiedFilters.to || copiedFilters.from) {
      filteredData.push(...filterByMileage(data, copiedFilters));
    }
  }

  const uniqueData = filteredData.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );

  return { data: uniqueData };
};
