import { createSlice } from '@reduxjs/toolkit';
import { getAllCardsThunk, getSingleCardThunk } from './thunks';
import { handleAllCards, handleSingleCard } from './handlers';

const initialState = {
  data: [],
  singleCard: {},
  page: 1,
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
  },
  extraReducers: builder =>
    builder
      .addCase(getAllCardsThunk.fulfilled, handleAllCards)
      .addCase(getSingleCardThunk.fulfilled, handleSingleCard),
});

export const cardsReducer = cardsSlice.reducer;
export const { incrementPage, resetPage } = cardsSlice.actions;
