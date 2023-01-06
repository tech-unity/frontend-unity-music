import { SerializedError } from '@reduxjs/toolkit';
import { DropdownOptions } from '../../sdk/models/_dropdown';
import { RootState } from '../store';

export function selectDropdownSongs(state: RootState): DropdownOptions[] {
  return state.songs?.items.map(song => ({
    label: song.name,
    value: song.id,
  }));
}

export function selectErrorOnFetching(
  state: RootState
): SerializedError | undefined {
  return state.songs?.errorOnFetching;
}

export function selectFetching(state: RootState): boolean {
  return state.songs?.fetching;
}
