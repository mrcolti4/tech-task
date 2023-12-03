import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root/slice';
import { cardsReducer } from './cards/slice';

const PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    cards: persistReducer(PersistConfig, cardsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
