import { configureStore } from '@reduxjs/toolkit';
import { scaleReducer } from './Scale.store';

const store = configureStore({
  reducer: {
    scale: scaleReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
