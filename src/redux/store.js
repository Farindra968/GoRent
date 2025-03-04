// store.js
import { configureStore } from '@reduxjs/toolkit';
import storeProvider from './storeProvider';

// Use the combined reducer directly
const store = configureStore({
  reducer: storeProvider
})

export { store };