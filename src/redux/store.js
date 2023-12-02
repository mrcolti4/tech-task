import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root/slice';
import { cardsReducer } from './cards/slice';

export const store = configureStore({
  reducer: {
    root: rootReducer,
    cards: cardsReducer,
  },
});
