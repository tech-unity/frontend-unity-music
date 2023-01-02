import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDropdownInstruments,
  selectErrorOnFetching,
  selectFetching,
} from '../selectors/selectInstruments';
import { AppDispatch } from '../store';
import * as InstrumentActions from '../store/Instruments.store';

export default function useInstrument() {
  const dispatch: AppDispatch = useDispatch();
  
  const dropdownInstruments = useSelector(selectDropdownInstruments);
  
  const errorOnFetching = useSelector(selectErrorOnFetching);
  
  const fetching = useSelector(selectFetching);
  
  const fetchInstruments = useCallback(() => {
    dispatch(InstrumentActions.fetchInstruments());
  }, [dispatch]);

  return {
    dropdownInstruments,
    errorOnFetching,
    fetching,
    fetchInstruments,
  };
}
