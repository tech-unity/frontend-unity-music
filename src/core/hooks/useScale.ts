import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentScaleBand,
  selectCurrentScaleDate,
  selectCurrentScaleSingers,
  selectCurrentSongs,
  selectErrorOnFetching,
} from '../selectors/selectScales';
import { AppDispatch } from '../store';
import * as ScaleActions from '../store/Scale.store';

export default function useScale() {
  const dispatch: AppDispatch = useDispatch();

  const currentSingers = useSelector(selectCurrentScaleSingers);
  const currentBand = useSelector(selectCurrentScaleBand);
  const currentScaleDate = useSelector(selectCurrentScaleDate);
  const currentSongs = useSelector(selectCurrentSongs);

  const errorOnFetching = useSelector(selectErrorOnFetching);

  const fetchScales = useCallback(() => {
    dispatch(ScaleActions.fetchScales());
  }, [dispatch]);

  return {
    currentSingers,
    currentBand,
    currentScaleDate,
    currentSongs,
    errorOnFetching,
    fetchScales,
  };
}
