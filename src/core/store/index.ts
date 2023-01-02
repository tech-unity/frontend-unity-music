import { configureStore } from '@reduxjs/toolkit';
import { instrumentReducer } from './Instruments.store';
import { scaleReducer } from './Scale.store';

const store = configureStore({
  reducer: {
    scale: scaleReducer,
    instrument: instrumentReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
