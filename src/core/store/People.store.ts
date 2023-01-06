import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
  SerializedError,
} from '@reduxjs/toolkit';
import { Person } from '../../sdk/models/Person';
import PersonService from '../../sdk/services/Person.service';

interface PeopleSliceState {
  items: Person[];
  fetching: boolean;
  errorOnFetching?: SerializedError;
}

const initialState: PeopleSliceState = {
  items: [],
  fetching: false,
  errorOnFetching: undefined,
};

export const fetchPeople = createAsyncThunk(
  'get/fetchPeople',
  async function () {
    return await PersonService.getPeople();
  }
);

export const peopleReducer = createReducer(initialState, builder => {
  const pendingActions = isPending(fetchPeople);
  const fullfilledActions = isFulfilled(fetchPeople);
  const rejectedActions = isRejected(fetchPeople);

  builder
    .addCase(fetchPeople.fulfilled, (state, action) => {
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
