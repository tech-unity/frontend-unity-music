import { configureStore } from '@reduxjs/toolkit';
import { instrumentReducer } from './Instruments.store';
import { peopleReducer } from './People.store';
import { scaleReducer } from './Scale.store';
import { songsReducer } from './Songs.store';

const store = configureStore({
  reducer: {
    scale: scaleReducer,
    instrument: instrumentReducer,
    people: peopleReducer,
    songs: songsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
