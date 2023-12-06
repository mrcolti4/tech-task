import { createSlice } from '@reduxjs/toolkit';
import { getAllCardsThunk, getSingleCardThunk } from './thunks';
import { handleAllCards, handleSingleCard } from './handlers';

const initialState = {
  data: [],
  favorites: [],
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
  },
  extraReducers: builder =>
    builder
      .addCase(getAllCardsThunk.fulfilled, handleAllCards)
      .addCase(getSingleCardThunk.fulfilled, handleSingleCard),
});

export const cardsReducer = cardsSlice.reducer;
export const { incrementPage, resetPage, addToFavorites } = cardsSlice.actions;
