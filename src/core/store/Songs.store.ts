import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
  SerializedError,
} from '@reduxjs/toolkit';
import SongsService from '../../sdk/services/Music.service';
import { Song } from '../../sdk/models/Scale';

interface SongsSliceState {
  items: Song[];
  fetching: boolean;
  errorOnFetching?: SerializedError;
}

const initialState: SongsSliceState = {
  items: [],
  fetching: false,
  errorOnFetching: undefined,
};

export const fetchMusics = createAsyncThunk(
  'get/fetchSongs',
  async function () {
    return await SongsService.getSongs();
  }
);

export const songsReducer = createReducer(initialState, builder => {
  const pendingActions = isPending(fetchMusics);
  const fullfilledActions = isFulfilled(fetchMusics);
  const rejectedActions = isRejected(fetchMusics);

  builder
    .addCase(fetchMusics.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addMatcher(pendingActions, state => {
      state.fetching = true;
      state.errorOnFetching = undefined;
    })
    .addMatcher(fullfilledActions, state => {
      state.fetching = false;
      state.errorOnFetching = undefined;
    })
    .addMatcher(rejectedActions, (state, action) => {
      state.fetching = false;
      state.errorOnFetching = action.error;
    });
});
