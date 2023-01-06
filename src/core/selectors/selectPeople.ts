import { SerializedError } from '@reduxjs/toolkit';
import { DropdownOptions } from '../../sdk/models/_dropdown';
import { RootState } from '../store';

export function selectDropdownBand(state: RootState): DropdownOptions[] {
  return state.people?.items
    .filter(person => person.instruments.length !== 0)
    .map(person => ({
      label: person.name,
      value: person.id,
    }));
}

export function selectDropdownSingers(state: RootState): DropdownOptions[] {
  return state.people?.items
    .filter(person => person.instruments.length === 0)
    .map(person => ({
      label: person.name,
      value: person.id,
    }));
}

export function selectErrorOnFetching(
  state: RootState
): SerializedError | undefined {
  return state.people?.errorOnFetching;
}

export function selectFetching(state: RootState): boolean {
  return state.people?.fetching;
}
