import { createSlice } from '@reduxjs/toolkit';
import { getAllCardsThunk, getSingleCardThunk } from './thunks';
import { handleAllCards, handleSingleCard } from './handlers';

const initialState = {
  data: [],
  singleCard: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllCardsThunk.fulfilled, handleAllCards)
      .addCase(getSingleCardThunk.fulfilled, handleSingleCard),
});

export const cardsReducer = cardsSlice.reducer;
