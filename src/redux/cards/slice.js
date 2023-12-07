import { createSlice } from '@reduxjs/toolkit';
import { getAllCardsThunk } from './thunks';
import { handleAllCards } from './handlers';

const initialState = {
  data: [],
  favorites: [],
  filters: {
    brand: '',
    price: '',
    from: '',
    to: '',
  },
  page: 1,
  limit: 12,
  isNoMoreData: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    addToFavorites(state, { payload }) {
      const index = state.favorites.findIndex(item => item.id === payload.id);

      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(payload);
      }
    },
    setFilters(state, { payload }) {
      state.filters = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(getAllCardsThunk.fulfilled, handleAllCards),
});

export const cardsReducer = cardsSlice.reducer;
export const { incrementPage, resetPage, addToFavorites, setFilters } =
  cardsSlice.actions;
