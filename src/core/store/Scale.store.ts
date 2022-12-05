import {
  createAction,
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
  SerializedError,
} from '@reduxjs/toolkit';
import { Scale } from '../../sdk/models/Scale';
import ScaleService from '../../sdk/services/Scale.service';

interface ScaleSliceState {
  items: Scale[];
  fetching: boolean;
  errorOnFetching?: SerializedError;
}

const initialState: ScaleSliceState = {
  items: [],
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
      console.log('entrou em rejected')
      state.fetching = false;
      state.errorOnFetching = action.error;
    });
});
