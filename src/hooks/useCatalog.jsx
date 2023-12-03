import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards } from 'redux/cards/selectors';
import { getAllCardsThunk } from 'redux/cards/thunks';
import { selectError, selectIsLoading } from 'redux/root/selectors';

export const useCatalog = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCardsThunk());
  }, [dispatch]);

  return { error, isLoading, cards };
};
