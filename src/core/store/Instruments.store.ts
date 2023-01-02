import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
  SerializedError,
} from '@reduxjs/toolkit';
import { Instrument } from '../../sdk/models/Instrument';
import InstrumentService from '../../sdk/services/Instrument.service';

interface InstrumentSliceState {
  items: Instrument[];
  fetching: boolean;
  errorOnFetching?: SerializedError;
}

const initialState: InstrumentSliceState = {
  items: [],
  fetching: false,
  errorOnFetching: undefined,
};

export const fetchInstruments = createAsyncThunk(
  'get/fetchInstruments',
  async function () {
    return await InstrumentService.getInstruments();
  }
);

export const instrumentReducer = createReducer(initialState, builder => {
  const pendingActions = isPending(fetchInstruments);
  const fullfilledActions = isFulfilled(fetchInstruments);
  const rejectedActions = isRejected(fetchInstruments);

  builder
    .addCase(fetchInstruments.fulfilled, (state, action) => {
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
