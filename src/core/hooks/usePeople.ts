import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrorOnFetching,
  selectFetching
} from '../selectors/selectInstruments';
import {
  selectDropdownBand,
  selectDropdownSingers
} from '../selectors/selectPeople';
import { AppDispatch } from '../store';
import * as PersonActions from '../store/People.store';

export default function usePeople() {
  const dispatch: AppDispatch = useDispatch();

  const dropdownBand = useSelector(selectDropdownBand);

  const dropdownSingers = useSelector(selectDropdownSingers);

  const errorOnFetching = useSelector(selectErrorOnFetching);

  const fetching = useSelector(selectFetching);

  const fetchPeople = useCallback(() => {
    dispatch(PersonActions.fetchPeople());
  }, [dispatch]);

  return {
    dropdownBand,
    dropdownSingers,
    errorOnFetching,
    fetching,
    fetchPeople,
  };
}
