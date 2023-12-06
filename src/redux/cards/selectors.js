import { createSelector } from '@reduxjs/toolkit';

export const selectCards = state => state.cards.data;
export const selectFavorites = state => state.cards.favorites;
export const selectFilters = state => state.cards.filters;
export const selectPage = state => state.cards.page;
export const selectIsNoMoreData = state => state.cards.isNoMoreData;

export const selectAllBrands = createSelector([selectCards], cards => {
  return cards
    .map(card => card.make)
    .filter((brand, i, arr) => i === arr.indexOf(brand));
});

export const selectAllPrices = createSelector([selectCards], cards => {
  let maxPrice = Math.max(...cards.map(card => card.rentalPrice.slice(1)));
  if (maxPrice !== -Infinity)
    return [...Array(Math.ceil(maxPrice / 10)).keys()].map(i => (i + 1) * 10);
});

export const selectFilteredCards = createSelector(
  [selectCards, selectFilters],
  (cards, filters) => {}
);
