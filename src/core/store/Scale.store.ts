import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
  SerializedError,
} from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { Scale } from '../../sdk/models/Scale';
import ScaleService from '../../sdk/services/Scale.service';

interface ScaleSliceState {
  items: Scale[];
  currentScale?: Scale;
  fetching: boolean;
  errorOnFetching?: SerializedError;
}

const initialState: ScaleSliceState = {
  items: [],
  currentScale: undefined,
  fetching: false,
  errorOnFetching: undefined,
};

export const fetchScales = createAsyncThunk(
  'get/fetchScale',
  async function () {
    const scales = await ScaleService.getScales();
    return scales;
  }
);

export const scaleReducer = createReducer(initialState, builder => {
  const pendingActions = isPending(fetchScales);
  const fullfilledActions = isFulfilled(fetchScales);
  const rejectedActions = isRejected(fetchScales);

  builder
    .addCase(fetchScales.fulfilled, (state, action) => {
      state.items = action.payload;
      state.currentScale = action.payload.find(scale => {
        const scaleDate = dayjs(scale.date);
        const today = dayjs();
        return scaleDate.isAfter(today);
      });
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
