import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import locationReducer from './Slices/locationSlice';
import themeReducer from './Slices/themeSlice';

const persistConfig={
  key:"root",
  storage,
  whitelist: ['location'],
};

const rootReducer = combineReducers({
  location: locationReducer,
  theme:themeReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;