import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrorOnFetching,
  selectFetching
} from '../selectors/selectInstruments';
import { selectDropdownSongs } from '../selectors/selectSongs';
import { AppDispatch } from '../store';
import * as SongsActions from '../store/Songs.store';

export default function useSong() {
  const dispatch: AppDispatch = useDispatch();

  const dropdownMusics = useSelector(selectDropdownSongs);

  const errorOnFetching = useSelector(selectErrorOnFetching);

  const fetching = useSelector(selectFetching);

  const fetchMusics = useCallback(() => {
    dispatch(SongsActions.fetchMusics());
  }, [dispatch]);

  return {
    dropdownMusics,
    errorOnFetching,
    fetching,
    fetchMusics,
  };
}
