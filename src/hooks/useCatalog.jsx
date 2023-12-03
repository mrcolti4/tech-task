import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards, selectPage } from 'redux/cards/selectors';
import { getAllCardsThunk } from 'redux/cards/thunks';
import { selectError, selectIsLoading } from 'redux/root/selectors';

export const useCatalog = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getAllCardsThunk(page));
  }, [dispatch, page]);

  return { error, isLoading, cards };
};
