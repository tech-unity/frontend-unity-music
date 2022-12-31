import { SerializedError } from '@reduxjs/toolkit';
import { Person } from '../../sdk/models/Person';
import { Band, Scale, Song } from '../../sdk/models/Scale';
import { RootState } from '../store';

export function selectScales(state: RootState): Scale[] {
  return state.scale?.items;
}

export function selectCurrentScale(state: RootState): Scale | undefined {
  const scales = state.scale.items;
  return scales ? scales[scales.length - 1] : undefined;
}

export function selectCurrentScaleBand(state: RootState): Band[] | undefined {
  return selectCurrentScale(state)?.band;
}

export function selectCurrentScaleSingers(
  state: RootState
): Person[] | undefined {
  return selectCurrentScale(state)?.singers;
}

export function selectCurrentScaleDate(state: RootState): Date | undefined {
  return selectCurrentScale(state)?.date;
}

export function selectCurrentSongs(state: RootState): Song[] | undefined {
  return selectCurrentScale(state)?.musics;
}

export function selectErrorOnFetching(
  state: RootState
): SerializedError | undefined {
  return state.scale?.errorOnFetching;
}

export function selectFetching(state: RootState): boolean {
  return state.scale?.fetching;
}
