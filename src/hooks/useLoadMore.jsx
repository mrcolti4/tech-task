import { useDispatch, useSelector } from 'react-redux';
import { selectIsNoMoreData } from 'redux/cards/selectors';
import { incrementPage } from 'redux/cards/slice';

export const useLoadMore = () => {
  const dispatch = useDispatch();
  const isNoMoreData = useSelector(selectIsNoMoreData);

  const onClick = () => {
    dispatch(incrementPage());
  };

  return { isNoMoreData, onClick };
};
