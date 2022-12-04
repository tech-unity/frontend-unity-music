import { SerializedError } from '@reduxjs/toolkit';
import { Person } from '../../sdk/models/Person';
import { Band, Scale } from '../../sdk/models/Scale';
import { RootState } from '../store';

export function selectScales(state: RootState): Scale[] {
  return state.scale?.items;
}

export function selectCurrentScale(state: RootState): Scale {
  const scales = state.scale.items;
  return scales[scales.length - 1];
}

export function selectCurrentScaleBand(state: RootState): Band[] {
  return selectCurrentScale(state).band;
}

export function selectCurrentScaleSingers(state: RootState): Person[] {
  return selectCurrentScale(state).singers;
}

export function selectCurrentScaleDate(state: RootState): Date {
  return selectCurrentScale(state).date;
}

export function selectErrorOnFetching(
  state: RootState
): SerializedError | undefined {
  return state.scale?.errorOnFetching;
}

export function selectFetching(state: RootState): boolean {
  return state.scale?.fetching;
}
