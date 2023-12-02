import { createAsyncThunk } from '@reduxjs/toolkit';
import cardsApi from '../../api/cardsApi';

export const getAllCardsThunk = createAsyncThunk(
  'cards/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await cardsApi.getAllCards();

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getSingleCardThunk = createAsyncThunk(
  'cards/getSingle',
  async (id, { rejectWithValue }) => {
    try {
      const data = await cardsApi.getSingleCard(id);

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
